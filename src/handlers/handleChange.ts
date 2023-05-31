// extract the logic of the files validation into a function, because i want to use it in multiple places
import { Dispatch } from "react";
import { hideTool, resetErrorMessage, setFilesFromList } from "../store";

import type { errors as _ } from "../content/content"; // import the errors constant
import { AnyAction } from "@reduxjs/toolkit";
import { validateFiles } from "../utils"
export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch<AnyAction>,
  extension: string,
  errors: typeof _
) => {

  const _files = (e.target?.files as FileList) || null;
  const isValid = validateFiles(_files, extension, errors, dispatch);
  dispatch(setFilesFromList(_files));
  dispatch(hideTool());
  if (isValid) {
    dispatch(resetErrorMessage());
  }
};
