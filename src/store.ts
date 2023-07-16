// @ts-ignore
// i think that this store contains h
import { observable, action, makeObservable } from "mobx";
import type { errors } from "./content/content";
type ErrorCode = keyof typeof errors;


export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  rerender: boolean;
  errorMessage: string;
  showErrorMessage: boolean;
  compressPdf: string | number;
  errorCode: string | null;
  endpoint: string;
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
};

export class ToolStore {
  //   Property 'showTool' has no initializer and is not definitely assigned in the constructor.ts(2564)
  // (property) ToolStore.showTool: boolean
  showTool: boolean = false;
  isSubmitted: boolean = false;
  rerender: boolean = false;
  errorMessage: string = "";
  showErrorMessage: boolean = false;
  compressPdf: string | number = 0;
  errorCode: string | null = null;
  endpoint: string = "";

  constructor() {
    makeObservable(this, {
      showTool: observable,
      isSubmitted: observable,
      rerender: observable,
      errorMessage: observable,
      showErrorMessage: observable,
      compressPdf: observable,
      errorCode: observable,
      endpoint: observable,
      setShowTool: action,
      setRerender: action,
      setEndpoint: action,
      setErrorMessage: action,
      resetErrorMessage: action,
      setCompressPdf: action,
      setErrorCode: action,
      setIsSubmitted: action,
    });
    Object.assign(this, initialState);
  }
  setShowTool(show: boolean) {
    this.showTool = show;
  }

  setRerender = () => {
    this.rerender = !this.rerender;
  };

  setEndpoint = (endpoint: string) => {
    this.endpoint = endpoint;
  };

  setErrorMessage = (errorMessage: string) => {
    this.errorMessage = errorMessage;
    this.showErrorMessage = true;
  };

  resetErrorMessage = () => {
    this.errorMessage = "";
    this.showErrorMessage = false;
    this.errorCode = null;
    this.isSubmitted = false;
  };

  setCompressPdf = (compressPdf: string | number) => {
    this.compressPdf = compressPdf;
  };

  setErrorCode = (errorCode: ErrorCode) => {
    this.errorCode = errorCode;
  };

  setIsSubmitted = (isSubmitted: boolean) => {
    this.isSubmitted = isSubmitted;
  };
}

const toolStore = new ToolStore();
export default toolStore;
