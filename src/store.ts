/**
 * i want to add an compress_pdf property to my store, which can be one of the following values:
 * (
 * - "Recommended",
 * - "Less"
 * - "Extreme"
 * or it can be a custom number
 * )
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToolState {
  showTool: boolean;
  files: File[];
  errorMessage: string;
  showErrorMessage: boolean;
  compressPdf: string | number;
}

const initialState: ToolState = {
  showTool: true,
  files: [],
  errorMessage: "",
  showErrorMessage: false,
  compressPdf: "recommended",
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    showTool(state: ToolState) {
      state.showTool = true;
    },
    hideTool(state: ToolState) {
      state.showTool = false;
    },
    setFiles(state: ToolState, action: PayloadAction<File[]>) {
      const newFiles = action.payload;
      state.files = [...newFiles];
    },
    setErrorMessage(state: ToolState, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
      state.showErrorMessage = true; // set the showErrorMessage property to true when an error message is set
    },
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.showErrorMessage = false; // reset the showErrorMessage property to false when the error message is reset
    },
    setCompressPdf(state: ToolState, action: PayloadAction<string | number>) {
      state.compressPdf = action.payload;
    },
  },
});

export const {
  showTool,
  hideTool,
  setFiles,
  setErrorMessage,
  resetErrorMessage,
  setCompressPdf,
} = toolSlice.actions;

export const setFilesFromList = (fileList: FileList) => {
  const files: File[] = Array.from(fileList);
  return setFiles(files);
};

export default toolSlice.reducer;
