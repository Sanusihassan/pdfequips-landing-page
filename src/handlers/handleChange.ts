// extract the logic of the files validation into a function, because i want to use it in multiple places
import { Dispatch } from "react";
import { hideTool, resetErrorMessage, setFilesFromList } from "../store";
import { setErrorMessage } from "../store"; // import the ToolState interface
import type { errors as _ } from "../content/content"; // import the errors constant
import { AnyAction } from "@reduxjs/toolkit";
import { validateFiles } from "../utils"
export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch<AnyAction>,
  extension: string,
  errors: typeof _
) => {
  // const _files = (e.target?.files as FileList) || null;
  // let allowedMimeTypes = [
  //   "application/pdf",
  //   "text/html",
  //   "image/jpeg",
  //   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //   "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  // ];
  // dispatch(setFilesFromList(_files));
  // for (let i = 0; i < _files.length; i++) {
  //   const file = _files[i] || null;
  //   extension = extension.replace(".", "").toUpperCase();
  //   let file_extension = file.name.split(".")[1].toUpperCase();
  //   // handle FILE_TOO_LARGE error
  //   const fileSizeLimit = 50 * 1024 * 1024; // 50 MB
    
  //   if (!file) {
  //     // handle FILE_CORRUPT error
  //     dispatch(setErrorMessage(errors.FILE_CORRUPT.message));
  //     return;
  //   } else if (!file.name) {
  //     // handle FILE_CORRUPT error

  //     dispatch(setErrorMessage(errors.FILE_CORRUPT.message));
  //     return;
  //   } else if (!file.type) {
  //     // handle NOT_SUPPORTED_TYPE error

  //     dispatch(setErrorMessage(errors.NOT_SUPPORTED_TYPE.message));
  //     return;
  //   } else if (
  //     !allowedMimeTypes.includes(file.type) ||
  //     file_extension !== extension
  //   ) {
  //     dispatch(
  //       setErrorMessage(
  //         errors.NOT_SUPPORTED_TYPE.types[
  //           extension as keyof typeof errors.NOT_SUPPORTED_TYPE.types
  //         ] || errors.NOT_SUPPORTED_TYPE.message
  //       )
  //     );
  //     return;
  //   } else if (file.size > fileSizeLimit) {
  //     dispatch(setErrorMessage(errors.FILE_TOO_LARGE.message));
  //     return;
  //   }
  //   else if (!file.size) {
  //     dispatch(setErrorMessage(errors.EMPTY_FILE.message));
  //     return;
  //   }

  //   // handle INVALID_IMAGE_DATA error
  //   else if (file.type.startsWith("image/") && !file) {
  //     dispatch(setErrorMessage(errors.INVALID_IMAGE_DATA.message));
  //     return;
  //   } else {
  //     dispatch(resetErrorMessage());
  //   }
  // }
  const _files = (e.target?.files as FileList) || null;
  const isValid = validateFiles(_files, extension, errors, dispatch);
  if (isValid) {
    dispatch(setFilesFromList(_files));
    dispatch(resetErrorMessage());
    dispatch(hideTool());
  }
};
