import axios from "axios";
import { Dispatch, RefObject, SetStateAction } from "react";
import type { ToolData, errorType } from "../../components/Tool";
import { downloadConvertedFile } from "../downloadFile";
import { ToolState, setErrorMessage } from "../store";
import { AnyAction } from "@reduxjs/toolkit";

export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  fileInput: RefObject<HTMLInputElement>,
  endpoint: string,
  data: ToolData,
  downloadBtn: RefObject<HTMLAnchorElement>,
  dispatch: Dispatch<AnyAction>,
  state: ToolState
) => {
  e.preventDefault();

  const files = (fileInput.current as HTMLInputElement).files;
  if (!files) return;

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  let url;
  if (process.env.NODE_ENV === "development") {
    url = `http://127.0.0.1:5000/${endpoint}`;
  } else {
    url = `/${endpoint}`;
  }
  if (state.errorMessage) {
    return;
  }
  console.log(state.compressPdf);
  formData.append("compress_amount", String(state.compressPdf));
  try {
    const response = await axios.post(url, formData, {
      responseType: "blob",
    });

    const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");

    if (
      data.type == ".jpg" ||
      data.type == ".docx" ||
      data.type == ".html" ||
      data.type == ".xlsx"
    ) {
      downloadConvertedFile(
        response,
        "application/pdf",
        `${originalFileName}.pdf`,
        downloadBtn
      );
    } else if (data.type === ".pdf") {
      let output;
      if (data.title == "PDF to WORD") {
        output = `${originalFileName}.docx`;
      } else if (data.title == "PDF to EXCEL") {
        output = `${originalFileName}.xlsx`;
      } else if (data.title == "EXCEL to PDF") {
        output = `${originalFileName}_output.pdf`;
      } else if (data.title == "PDF to Powerpoint") {
        output = `${originalFileName}_output.pptx`;
      } else {
        output = `${originalFileName}_output.pdf`;
      }
      downloadConvertedFile(response, "application/pdf", output, downloadBtn);
    } else if (data.type == ".pptx") {
      downloadConvertedFile(
        response,
        "application/pdf",
        `${originalFileName}_output.pdf`,
        downloadBtn
      );
    }

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    error.response.data.text().then(function(text) {
      const json = JSON.parse(text);
      console.error(json);
    });
    console.log(error);
    // dispatch(setErrorMessage((error as errorType)?.response?.data.error));
  }
};
