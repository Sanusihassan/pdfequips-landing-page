// this is my code:
import { NextRouter } from "next/router";
// @ts-ignore
import { getDocument } from "pdfjs-dist";
// @ts-ignore
import { PDFDocumentProxy, PageViewport, RenderTask } from "pdfjs-dist";
// @ts-ignore
import { GlobalWorkerOptions } from "pdfjs-dist";
import { Dispatch, useEffect, useMemo, useState } from "react";
import { setErrorMessage, setErrorCode } from "./store";
import { AnyAction } from "@reduxjs/toolkit";
import type { errors as _ } from "../content";
GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

export function useLoadedImage(src: string): HTMLImageElement | null {
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoadedImage(img);
  }, [src]);

  return loadedImage;
}
export function useRotatedImage(imageUrl: string): string | null {
  const image = useLoadedImage(imageUrl);

  return useMemo(() => {
    if (!image) return null;

    const canvas = document.createElement("canvas");
    canvas.width = image.height;
    canvas.height = image.width;
    const ctx = canvas.getContext("2d")!;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((90 * Math.PI) / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);
    return canvas.toDataURL();
  }, [image]);
}

const DEFAULT_PDF_IMAGE = "/images/corrupted.png";
function emptyPDFHandler(dispatch: Dispatch<AnyAction>, errors: _) {
  dispatch(setErrorMessage(errors.EMPTY_FILE.message));
  dispatch(setErrorCode("ERR_EMPTY_FILE"));
  return DEFAULT_PDF_IMAGE;
}

export const getFileDetailsTooltipContent = async (
  file: File,
  pages: string,
  page: string,
  lang: string,
  dispatch: Dispatch<AnyAction>,
  errors: _
): Promise<string> => {
  // here in this code instead of bite for the unit, use kb or mb instead depending on the size
  const sizeInBytes = file.size;
  // const sizeInKB = sizeInBytes / 1024;
  // const sizeInMB = sizeInKB / 1024;

  let size: string = "";
  let isoCode = lang === "fr" ? "fr-FR" : lang == "" ? "en" : lang;
  size = new Intl.NumberFormat(isoCode, {
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "narrow",
  }).format(sizeInBytes);
  let tooltipContent = size;
  if (!file.size) {
    emptyPDFHandler(dispatch, errors);
  } else {
    // i'm getting this errors:
    //   6:39:22.589
    // Error {
    //   stack: 'Error: Setting up fake worker failed: "Cannot read properties of undefined (reading \'WorkerMessageHandler\')".\n' +
    //     '    at eval (webpack-internal:///./node_modules/pdfjs-dist/build/pdf.js:1899:36)',
    //   message: 'Setting up fake worker failed: "Cannot read properties of undefined (reading \'WorkerMessageHandler\')".'
    // }
    try {
      if (file.type === "image/jpeg" || file.type === "image/png") {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        await new Promise<void>((resolve) => {
          image.onload = () => {
            tooltipContent += ` - ${image.width} x ${image.height}`;
            resolve();
          };
        });
      } else if (file.type === "application/pdf") {
        const url = URL.createObjectURL(file);
        const pdf = await getDocument(url).promise;

        const pageCount = pdf.numPages || 0;
        tooltipContent += ` - ${
          lang === "ar" && pageCount === 1 ? "" : pageCount + " "
        }${pageCount > 1 ? pages : page}`;
        URL.revokeObjectURL(url);
        if (!file.size) {
          emptyPDFHandler(dispatch, errors);
        }
      }
    } catch (e) {
      if (!file.size) {
        emptyPDFHandler(dispatch, errors);
      }
    }
  }

  return tooltipContent;
};

/**
 * this is the current function and it's working,
 * but i want to display the pdf.png file while fetching the first page from the pdf
 */

export async function getFirstPageAsImage(
  file: File,
  dispatch: Dispatch<AnyAction>,
  errors: _
): Promise<string> {
  const fileUrl = URL.createObjectURL(file);
  if (!file.size) {
    return emptyPDFHandler(dispatch, errors);
  } else {
    try {
      const loadingTask = getDocument(fileUrl);
      const pdf: PDFDocumentProxy = await loadingTask.promise;
      const page = await pdf.getPage(1); // Get the first page

      const scale = 1.5;
      const viewport: PageViewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Canvas context not available.");
      }
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderTask: RenderTask = page.render({
        canvasContext: context,
        viewport: viewport,
      });

      await renderTask.promise;

      return canvas.toDataURL();
    } catch (error) {
      dispatch(setErrorMessage(errors.FILE_CORRUPT.message));
      console.log(error);
      return DEFAULT_PDF_IMAGE; // Return the placeholder image URL when an error occurs
    }
  }
}

export const getPlaceHoderImageUrl = (extension: string) => {
  switch (extension) {
    case ".docx":
      return "/images/word.png";
    case ".html":
      return "/images/html.png";
    case ".pptx":
      return "/images/powerpoint.png";
    case ".xlsx":
      return "/images/excel.png";
    default:
      return "images/pdf.png";
  }
};

// a function to check if the extension is .jpg or .pdf:
export const isDraggableExtension = (ext: string, router: NextRouter) => {
  return ext === ".jpg" || router.asPath.includes("merge-pdf");
};

export function isrtllang(asPath: string): boolean {
  return asPath.startsWith("/ar");
}

export const validateFiles = (
  _files: FileList | File[],
  extension: string,
  errors: _,
  dispatch: Dispatch<AnyAction>
) => {
  const files = Array.from(_files); // convert FileList to File[] array

  let allowedMimeTypes = [
    "application/pdf",
    "text/html",
    "image/jpeg",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.ms-powerpoint",
    "application/vnd.ms-excel",
  ];
  const fileSizeLimit = 50 * 1024 * 1024; // 50 MB
  for (let i = 0; i < files.length; i++) {
    const file = files[i] || null;
    extension = extension.replace(".", "").toUpperCase();
    let file_extension = file.name.split(".")[1]?.toUpperCase() || "";
    // this contains all types and some special types that might potentially be of than one extension
    const types = [
      "ppt",
      "pptx",
      "doc",
      "docx",
      "xls",
      "xlsx",
      "html",
      "htm",
      "jpg",
      "pdf",
    ];

    if (!file || !file.name) {
      // handle FILE_CORRUPT error
      dispatch(setErrorMessage(errors.FILE_CORRUPT.message));
      return false;
    } else if (!file.type) {
      // handle NOT_SUPPORTED_TYPE error
      console.log(file);
      dispatch(setErrorMessage(errors.NOT_SUPPORTED_TYPE.message));
      return false;
    } else if (
      !allowedMimeTypes.includes(file.type) ||
      !types.includes(file_extension.toLowerCase())
    ) {
      console.log(
        "file => ",
        types,
        file_extension.toLowerCase(),
        types.includes(file_extension.toLowerCase())
      );
      const errorMessage =
        errors.NOT_SUPPORTED_TYPE.types[
          extension as keyof typeof errors.NOT_SUPPORTED_TYPE.types
        ] || errors.NOT_SUPPORTED_TYPE.message;
      dispatch(setErrorMessage(errorMessage));
      return false;
    } else if (file.size > fileSizeLimit) {
      // handle FILE_TOO_LARGE error
      dispatch(setErrorMessage(errors.FILE_TOO_LARGE.message));
      return false;
    } else if (!file.size) {
      // handle EMPTY_FILE error
      console.log("file.size", file.size);
      dispatch(setErrorMessage(errors.EMPTY_FILE.message));
      dispatch(setErrorCode("ERR_EMPTY_FILE"));
      return false;
    } else if (file.type.startsWith("image/")) {
      // handle INVALID_IMAGE_DATA error
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onerror = () => {
          dispatch(setErrorMessage(errors.INVALID_IMAGE_DATA.message));
          return false;
        };
      };
      return true;
    }
  }
  return true;
};
