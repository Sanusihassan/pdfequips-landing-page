import { RefreshIcon, TrashIcon } from "@heroicons/react/solid";
import { rotateImage } from "../../src/utils";
import { Dispatch, SetStateAction } from "react";

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
};

export const ActionDiv = ({ index, imageUrls, setImageUrls }: ActionProps) => (
  <div className="action-div d-flex justify-content-between">
    <button
      className="btn btn-light"
      onClick={() => {
        const newImageUrls = [...imageUrls];
        newImageUrls.splice(index, 1);
        setImageUrls(newImageUrls);
      }}
    >
      <TrashIcon className="icon hero-icon" />
    </button>
    <button
      className="btn btn-light"
      onClick={() => {
        const newImageUrls = [...imageUrls];
        const item = newImageUrls[index];
        const rotatedImageUrl = rotateImage(item.imageUrl);
        item.imageUrl = rotatedImageUrl;
        setImageUrls(newImageUrls);
      }}
    >
      <RefreshIcon className="hero-icon" />
    </button>
  </div>
);
