import { Dispatch } from "react";
// @ts-ignore
import { AnyAction } from "@reduxjs/toolkit";
import type { errors as _ } from "../content/content"; // import the errors constant

import { validateFiles } from "../utils";
import { hideTool, resetErrorMessage, setFiles } from "../store";
export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch<AnyAction>,
  extension: string,
  errors: typeof _
) => {
  const _files = (e.target?.files as FileList) || null;
  dispatch(setFiles(_files));
  const isValid = validateFiles(_files, extension, errors, dispatch);
  dispatch(hideTool());
  if (isValid) {
    dispatch(resetErrorMessage());
  }
  document.documentElement.click();
};
