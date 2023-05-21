import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import { ActionDiv, ActionProps } from "./ActionDiv";
import { Tooltip } from "react-tooltip";
import type {errors as _} from "../../content";
type CardProps = ActionProps & {
  index: number;
  imageUrl: string;
  file: File;
  toolTipSizes: string[];
  isDraggable: boolean;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  errors: _
};

const FileCard = ({
  index,
  imageUrl,
  imageUrls,
  file,
  toolTipSizes,
  isDraggable,
  provided,
  errors,
  extension,
  setImageUrls,
}: CardProps) => {
  return (
    <div
      className="card item"
      data-tooltip-id={`item-tooltip-${index}`}
      data-tooltip-content={toolTipSizes[index]}
      data-tooltip-place="top"
      {...(isDraggable ? provided.dragHandleProps : {})}
    >
      <bdi>
        <Tooltip id={`item-tooltip-${index}`} />
      </bdi>
      <ActionDiv
        extension={extension}
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        index={index}
        errors={errors}
      />
      <div className="card-body d-flex flex-column">
        <img
          className="img-fluid-custom object-fit-contain rounded item-img"
          src={imageUrl}
          alt={`Selected file ${index}`}
          draggable={false}
        />
        <p className="text-center">{file.name}</p>
      </div>
    </div>
  );
};

export default FileCard;