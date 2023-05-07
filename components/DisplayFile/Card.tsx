import React, { Dispatch, SetStateAction } from "react";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { ActionDiv, ActionProps } from "./ActionDiv";
import { Tooltip } from "react-tooltip";

type CardProps = ActionProps & {
  index: number;
  imageUrl: string;
  file: File;
  toolTipSizes: string[];
  isDraggable: boolean;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
};

const Card: React.FC<CardProps> = ({
  index,
  imageUrl,
  imageUrls,
  file,
  toolTipSizes,
  isDraggable,
  provided,
  snapshot,
  setImageUrls,
}) => {
  return (
    <div
      className="card item"
      data-tooltip-id={`item-tooltip-${index}`}
      data-tooltip-content={toolTipSizes[index]}
      data-tooltip-place="top"
      {...(isDraggable ? provided.dragHandleProps : {})}
    >
      <Tooltip id={`item-tooltip-${index}`} />
      <ActionDiv
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        index={index}
      />
      <div className="card-body d-flex flex-column">
        <img
          className="img-fluid-custom object-fit-contain rounded item-img"
          src={imageUrl}
          alt={`Selected file \${index}`}
          draggable={false}
        />
        <p className="text-center">{file.name}</p>
      </div>
    </div>
  );
};

export default Card;
