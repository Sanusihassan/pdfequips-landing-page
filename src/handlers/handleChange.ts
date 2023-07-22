import { Dispatch } from "react";
// @ts-ignore
import { AnyAction } from "@reduxjs/toolkit";
import type { errors as _ } from "../content/content"; // import the errors constant

import { validateFiles } from "../utils";
import { hideTool, resetErrorMessage } from "../store";
export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch<AnyAction>,
  setFiles: (files: FileList | File[]) => void,
  extension: string,
  errors: typeof _
) => {
  const _files = (e.target?.files as FileList) || null;
  setFiles(_files);
  const isValid = validateFiles(_files, extension, errors, dispatch);
  dispatch(hideTool());
  if (isValid) {
    dispatch(resetErrorMessage());
  }
};
