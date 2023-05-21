import { RefreshIcon, TrashIcon } from "@heroicons/react/solid";
import { useRotatedImage, validateFiles } from "../../src/utils";
import { Dispatch, SetStateAction, useCallback } from "react";
import { ToolState } from "../../src/store";
import { useDispatch, useSelector } from "react-redux";
import type {errors as _} from "../../content";

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
  errors: _
};

export const ActionDiv = ({
  index,
  imageUrls,
  setImageUrls,
  extension,
  errors
}: ActionProps) => {
  const item = imageUrls[index];
  const rotatedImageUrl = useRotatedImage(item.imageUrl);
  // store and dispatch
  const store = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();
  const handleRotateImage = useCallback(() => {
    if (rotatedImageUrl) {
      const newImageUrls = [...imageUrls];
      newImageUrls[index].imageUrl = rotatedImageUrl;
      setImageUrls(newImageUrls);
    }
  }, [index, imageUrls, setImageUrls, rotatedImageUrl]);

  return (
    <div
      className={`action-div d-flex ${
        extension == ".html" ? "justify-content-end" : "justify-content-between"
      }`}
    >
      <button
        className="btn btn-light"
        onClick={() => {
          const newImageUrls = [...imageUrls];
          newImageUrls.splice(index, 1);
          validateFiles(store.files, extension, errors, dispatch);
          setImageUrls(newImageUrls);
          console.log(store.files);
        }}
      >
        <TrashIcon className="icon hero-icon" />
      </button>

      {extension != ".html" ? (
        <button className="btn btn-light" onClick={handleRotateImage}>
          <RefreshIcon className="hero-icon" />
        </button>
      ) : null}
    </div>
  );
};
