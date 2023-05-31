import React, { Dispatch, SetStateAction } from "react";
import { ActionDiv } from "./ActionDiv";
import { Tooltip } from "react-tooltip";
import type {errors as _} from "../../content"
interface ImageCardProps {
  imageUrls: any[];
  index: number;
  setImageUrls: Dispatch<SetStateAction<{ file: File; imageUrl: string }[]>>;
  provided: any;
  toolTipSizes: string[];
  extension: string;
  errors: _
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrls,
  index,
  setImageUrls,
  provided,
  toolTipSizes,
  extension,
  errors
}) => {
  
  return (
    <div
      className="drag-element-img"
      data-tooltip-id={`image_tooltip_${index}`}
      data-tooltip-content={toolTipSizes[index]}
      data-tooltip-place="top"
      {...provided.dragHandleProps}
    >
      <ActionDiv
        extension={extension}
        imageUrls={imageUrls}
        index={index}
        setImageUrls={setImageUrls}
        errors={errors}
      />
      <bdi>
        <Tooltip id={`image_tooltip_${index}`} />
      </bdi>
      <>
        <img
          className="img-fluid-custom object-fit-cover border rounded"
          src={imageUrls[index].imageUrl}
          alt={`Selected file ${index}`}
          draggable={false}
        />
      </>
      <p className="text-center">{imageUrls[index].file.name}</p>
    </div>
  );
};

export default ImageCard;
