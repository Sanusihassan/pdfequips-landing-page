import { RefreshIcon, TrashIcon } from "@heroicons/react/solid";
import { useRotatedImage, validateFiles } from "../../src/utils";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  useEffect,
  useContext,
} from "react";

import type { errors as _ } from "../../content";
import { ToolStoreContext } from "../../src/ToolStoreContext";

export type ActionProps = {
  index: number;
  imageUrls: {
    file: File;
    imageUrl: string;
  }[];
  setImageUrls: Dispatch<
    SetStateAction<
      {
        file: File;
        imageUrl: string;
      }[]
    >
  >;
  extension: string;
  errors: _;
};

export const ActionDiv = ({
  index,
  imageUrls,
  setImageUrls,
  extension,
  errors,
}: ActionProps) => {
  const item = imageUrls[index];
  const rotatedImageUrl = useRotatedImage(item.imageUrl);
  // store and dispatch
  const state = useContext(ToolStoreContext);
  const [files, setFiles] = useState<File[]>([]);
  const handleRotateImage = useCallback(() => {
    if (rotatedImageUrl) {
      const newImageUrls = [...imageUrls];
      newImageUrls[index].imageUrl = rotatedImageUrl;
      setImageUrls(newImageUrls);
    }
  }, [index, imageUrls, setImageUrls, rotatedImageUrl]);

  useEffect(() => {
    const fileInputElement = document.querySelector(".upload-btn input");
    if (fileInputElement) {
      setFiles(
        Array.from(
          (fileInputElement as HTMLInputElement).files as unknown as FileList
        )
      );
    }
  }, []);

  return (
    <div
      className={`action-div d-flex ${
        extension == ".html" ? "justify-content-end" : "justify-content-between"
      }`}
    >
      <button
        className="btn btn-light"
        // onClick={() => {
        //   const newImageUrls = [...imageUrls];
        //   newImageUrls.splice(index, 1);
        //   const isValid = validateFiles(files, extension, errors, dispatch);
        //   if(isValid) {
        //     dispatch(resetErrorMessage());
        //   }
        //   setImageUrls(newImageUrls);
        // }}

        /** THIS WOULD BE ON VERSION 2.0 INSHALLAH! */
        onClick={() => {
          const newImageUrls = [...imageUrls];
          newImageUrls.splice(index, 1);
          const newFiles = files.filter((file) => file.name !== item.file.name);
          // dispatch(setFiles(newFiles));
          const isValid = validateFiles(files, extension, errors, state);
          if (isValid) {
            state?.resetErrorMessage();
          }
          setImageUrls(newImageUrls);
          console.log(files);
        }}
      >
        <TrashIcon className="icon hero-icon" />
      </button>

      {/* {extension != ".html" ? (
        <button className="btn btn-light" onClick={handleRotateImage}>
          <RefreshIcon className="hero-icon" />
        </button>
      ) : null} */}
    </div>
  );
};
