// this is the file-store.ts file:
import { createStore } from "zustand";

interface FileStore {
  files: File[];
  setFiles: (files: FileList | File[]) => void;
}

export const useFileStore = createStore<FileStore>((set) => ({
  files: [],
  setFiles: (files: FileList | File[]) => {
    if (files instanceof FileList) {
      set({ files: [...Array.from(files)] });
    } else {
      set({ files });
    }
  },
}));
