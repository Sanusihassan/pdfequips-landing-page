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
    // url = `http://127.0.0.1:5000/${state.endpoint}`;
    url = `https://5000-sanusihassan-pdfequips-3e8arm49ns0.ws-eu101.gitpod.io/${state.endpoint}`;
  } 
  else {
    url = `/${state.endpoint}`;
  }
  console.log("endpoint is => ", state.endpoint);
  if (state.errorMessage) {
    return;
  }
  formData.append("compress_amount", String(state.compressPdf));
  const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
  
  const mimeTypeLookupTable: {[key: string]: {outputFileMimeType: string, outputFileName: string}} = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: "PDFEquips.zip",
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
    },
    "application/msword": {
      outputFileMimeType: "application/msword",
      outputFileName: `${originalFileName}.docx`,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
      outputFileMimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      outputFileName: `${originalFileName}.docx`,
    },
    "application/vnd.ms-excel": {
      outputFileMimeType: "application/vnd.ms-excel",
      outputFileName: `${originalFileName}.xlsx`,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
      outputFileMimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      outputFileName: `${originalFileName}.xlsx`,
    },
    "application/vnd.ms-powerpoint": {
      outputFileMimeType: "application/vnd.ms-powerpoint",
      outputFileName: `${originalFileName}.pptx`,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
      outputFileMimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      outputFileName: `${originalFileName}.pptx`,
    },
  };
  
  try {
    const response = await axios.post(url, formData);
    // const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    const mimeType = response.data.type || response.headers["content-type"];
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {outputFileMimeType: mimeType, outputFileName: ""};
    const {outputFileMimeType, outputFileName} = mimeTypeData;
    console.log("response type => ", mimeType);
    console.log("response => ", response);
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
