import { NextRouter } from "next/router";
import { getDocument } from "pdfjs-dist";
import { PDFDocumentProxy, PageViewport, RenderTask } from "pdfjs-dist";
import { GlobalWorkerOptions } from "pdfjs-dist";

/**
 * i get this error from this code:
 * 1 of 1 unhandled error

Unhandled Runtime Error
Error: Setting up fake worker failed: "Cannot load script at: http://localhost:3000/api.d.ts".

Call Stack
eval
node_modules\pdfjs-dist\build\pdf.js (1902:0)
 */
GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

export function rotateImage(imageUrl: string): string {
  const canvas = document.createElement("canvas");
  const img = new Image();
  img.src = imageUrl;
  canvas.width = img.height;
  canvas.height = img.width;
  const ctx = canvas.getContext("2d")!;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((90 * Math.PI) / 180);
  ctx.drawImage(img, -img.width / 2, -img.height / 2);
  return canvas.toDataURL();
}

/**
 *
 * this function using jsPDF is not calculating the number of pages in the pdf file correctly.
 * it always returns 1 for anytype of pdf files no matter how many pages are there in the pdf file
 */

export const getFileDetailsTooltipContent = async (
  file: File
): Promise<string> => {
  const sizeInBytes = file.size;
  const sizeInKB = sizeInBytes / 1024;
  const sizeInMB = sizeInKB / 1024;
  const size =
    sizeInMB > 1 ? sizeInMB.toFixed(2) + " MB" : sizeInKB.toFixed(2) + " KB";
  let tooltipContent = size;

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

    const pageCount = pdf.numPages;

    tooltipContent += ` - ${pageCount} ${pageCount > 1 ? "pages" : "page"}`;
    URL.revokeObjectURL(url);
  }

  return tooltipContent;
};

/**
 * this is the current function and it's working,
 * but i want to display the pdf.png file while fetching the first page from the pdf
 */

export async function getFirstPageAsImage(pdfUrl: string): Promise<string> {
  const loadingTask = getDocument(pdfUrl);
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
}

export const getPlaceHoderImageUrl = (extension: string) => {
  switch (extension) {
    case ".docx":
      return "/images/word.png";
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
