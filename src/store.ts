// but this is my current store.
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  files: File[];
  errorMessage: string;
  showErrorMessage: boolean;
  compressPdf: string | number;
  errorCode: string | null;
}

const initialState: ToolState = {
  showTool: true,
  files: [],
  errorMessage: "",
  showErrorMessage: false,
  isSubmitted: false,
  compressPdf: "recommended",
  errorCode: null
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
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setCompressPdf(state: ToolState, action: PayloadAction<string | number>) {
      state.compressPdf = action.payload;
    },
    setErrorCode(state: ToolState, action: PayloadAction<string | null>) {
      state.errorCode = action.payload;
    },
    setIsSubmitted(state: ToolState, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload;
    }
  },
});

export const {
  showTool,
  hideTool,
  setFiles,
  setErrorMessage,
  resetErrorMessage,
  setCompressPdf,
  setErrorCode,
  setIsSubmitted
} = toolSlice.actions;

export const setFilesFromList = (fileList: FileList) => {
  const files: File[] = Array.from(fileList);
  return setFiles(files);
};

export default toolSlice.reducer;
