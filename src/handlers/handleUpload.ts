import axios from "axios";
import { Dispatch, RefObject } from "react";
import type { ToolData, errorType } from "../../components/Tool";
import { downloadConvertedFile } from "../downloadFile";
import {
  ToolState,
  setErrorMessage,
  setErrorCode,
  resetErrorMessage,
  setIsSubmitted,
} from "../store";
import { AnyAction } from "@reduxjs/toolkit";
import type { errors as _ } from "../../content";
export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  fileInput: RefObject<HTMLInputElement>,
  endpoint: string,
  data: ToolData,
  downloadBtn: RefObject<HTMLAnchorElement>,
  dispatch: Dispatch<AnyAction>,
  state: ToolState,
  errors: _
) => {
  e.preventDefault();
  dispatch(setIsSubmitted(true));
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
  formData.append("compress_amount", String(state.compressPdf));
  try {
    const response = await axios.post(url, formData, {
      responseType: "blob",
    });

    const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    let outputFileName: string = "";
    let outputFileMimeType: string = response.data.type || "";
    if (response.data.type == "application/zip") {
      outputFileMimeType = "application/zip";
      outputFileName = "PDFEquips.zip";
    } else if (response.data.type == "application/pdf") {
      outputFileMimeType = "application/pdf";
      outputFileName = `${originalFileName}.pdf`;
    } else if (
      response.data.type == "application/msword" ||
      response.data.type ==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      outputFileMimeType = response.data.type;
      outputFileName = `${originalFileName}.docx`;
    } else if (
      response.data.type == "application/vnd.ms-excel" ||
      response.data.type ==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      outputFileMimeType = response.data.type;
      outputFileName = `${originalFileName}.xlsx`;
    } else if (
      response.data.type == "application/vnd.ms-powerpoint" ||
      response.data.type ==
        "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      outputFileMimeType = response.data.type;
      outputFileName = `${originalFileName}.pptx`;
    }
    
    downloadConvertedFile(
      response,
      outputFileMimeType,
      outputFileName,
      downloadBtn
    );

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setIsSubmitted(false));
    }
  } catch (error) {
    console.log(error);
    if((error as {code: string}).code === "ERR_NETWORK") {
      dispatch(setErrorMessage(errors.ERR_NETWORK.message));
      return;
    }
    (error as errorType).response?.data.text().then(function (text) {
      const json = JSON.parse(text);
      console.error(json);
      const errorObj = errors[json.error as keyof _];
      const errorMessage = errorObj
        ? errorObj.message
        : errors.UNKNOWN_ERROR.message;
      dispatch(setErrorMessage(errorMessage)); // dispatch the error message to the ToolState
      dispatch(setErrorCode(json.error)); // dispatch the error code to the ToolState
      dispatch(setIsSubmitted(false));
    });

    dispatch(setIsSubmitted(false));
  } finally {
    dispatch(setIsSubmitted(false));
  }
};
