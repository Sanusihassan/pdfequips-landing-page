/**
 * i've changed my state management to use redux but redux dosn't allow storing non serializable objects like File
 * can i use another state management tool along with redux only for storing the files array, it should be lightweight by the way.
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  rerender: boolean;
  errorMessage: string;
  showErrorMessage: boolean;
  compressPdf: string | number;
  errorCode: string | null;
  endpoint: string;
  files: File[]
}

const initialState: ToolState = {
  showTool: true,
  errorMessage: "",
  showErrorMessage: false,
  isSubmitted: false,
  compressPdf: "recommended",
  errorCode: null,
  endpoint: "",
  rerender: false,
  files: []
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    showTool(state: ToolState) {
      state.showTool = true;
    },
    setRerender(state: ToolState) {
      state.rerender = !state.rerender;
    },
    hideTool(state: ToolState) {
      state.showTool = false;
    },
    setEndpoint(state: ToolState, action: PayloadAction<string>) {
      state.endpoint = action.payload;
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
    },
    setFiles(state: ToolState, action: PayloadAction< FileList | File[]>) {
      if (state.files instanceof FileList) {
        state.files = Array.from(state.files);
      } else {
        state.files = state.files;
      }
    }
  },
});

export const {
  showTool,
  hideTool,
  setErrorMessage,
  resetErrorMessage,
  setCompressPdf,
  setErrorCode,
  setIsSubmitted,
  setEndpoint,
  setRerender,
  setFiles
} = toolSlice.actions;

export default toolSlice.reducer;
