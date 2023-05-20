import { RefreshIcon, TrashIcon } from "@heroicons/react/solid";
import { useRotatedImage } from "../../src/utils";
import { Dispatch, SetStateAction, useCallback } from "react";

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
};

export const ActionDiv = ({
  index,
  imageUrls,
  setImageUrls,
  extension,
}: ActionProps) => {
  const item = imageUrls[index];
  const rotatedImageUrl = useRotatedImage(item.imageUrl);

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
          setImageUrls(newImageUrls);
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
