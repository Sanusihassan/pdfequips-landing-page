// A non-serializable value was detected in an action, in the path: `payload.0`. Value:
// File {name: 'maxresdefault.jpg', lastModified: 1682540096165, lastModifiedDate: Wed Apr 26 2023 22:14:56 GMT+0200 (Eastern European Standard Time), webkitRelativePath: '', size: 81458, …}

// Take a look at the logic that dispatched this action:
// {type: 'tool/setFiles', payload: Array(3)}
// payload
// :
// (3) [File, File, File]
// type
// :
// "tool/setFiles"
// [[Prototype]]
// :
// Object
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToolState {
  showTool: boolean;
  files: File[];
}

const initialState: ToolState = {
  showTool: true,
  files: [],
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
  },
});

export const { showTool, hideTool, setFiles } = toolSlice.actions;

export const setFilesFromList = (fileList: FileList) => {
  const files: File[] = Array.from(fileList);
  return setFiles(files);
};

export default toolSlice.reducer;
