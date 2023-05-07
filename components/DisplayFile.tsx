import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, setFiles } from "../src/store";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { RefreshIcon, TrashIcon } from "@heroicons/react/outline";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import {
  getFileDetailsTooltipContent,
  getFirstPageAsImage,
  getPlaceHoderImageUrl,
  isDraggableExtension,
  rotateImage,
} from "../src/utils";

import { useRouter } from "next/router";

type propTypes = {
  extension: string;
};

const DisplayFile = ({ extension }: propTypes) => {
  const dispatch = useDispatch();

  const [imageUrls, setImageUrls] = useState<
    { file: File; imageUrl: string }[]
  >([]);
  const [toolTipSizes, setToolTipSizes] = useState<string[]>([]);
  const store = useSelector((state: { tool: ToolState }) => state.tool);
  // router
  const router = useRouter();

  useEffect(() => {
    const tooltipSizes = store.files.map(getFileDetailsTooltipContent);
    Promise.all(tooltipSizes).then((sizes) => {
      setToolTipSizes(sizes);
    });
    if (extension && extension === ".pdf") {
      const newImageUrls: { file: File; imageUrl: string }[] = [];
      const pdfPromises = store.files.map(async (file) => {
        const fileUrl = URL.createObjectURL(file);

        const imageUrl = await getFirstPageAsImage(fileUrl);
        newImageUrls.push({ file, imageUrl });
      });

      Promise.all(pdfPromises).then(() => {
        setImageUrls([...newImageUrls]);
      });
    } else if (extension && extension !== ".jpg") {
      const newImageUrls: { file: File; imageUrl: string }[] = [];
      store.files.forEach((file) => {
        let imageUrl = getPlaceHoderImageUrl(extension);
        newImageUrls.push({ file, imageUrl });
      });
      setImageUrls([...newImageUrls]);
    } else if (extension && extension === ".jpg") {
      const newImageUrls: { file: File; imageUrl: string }[] = [];
      store.files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = function (event: ProgressEvent<FileReader>) {
          const imageUrl = (event.target as FileReader).result as string;
          newImageUrls.push({ file, imageUrl });
          setImageUrls([...newImageUrls]);
        };
        reader.readAsDataURL(file);
      });
    }
  }, [extension, store.files]);

  const ActionDiv = ({ index }: { index: number }) => (
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
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(store.files);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // dispatch an action to update the store with the new order of files
    dispatch(setFiles(items));
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="imageUrls" direction="horizontal">
          {(provided, snapshot) => (
            <div
              className={`display-file ${
                snapshot.isDraggingOver ? "dragging-over" : ""
              }`}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {/* in this jsx if the extension is .jpg the items become draggabl if not they stay static
                but i want the .pdf extension files also to be draggable
               */}
              {imageUrls.map(({ file, imageUrl }, index) => (
                <Draggable
                  key={file.name}
                  draggableId={file.name}
                  index={index}
                  isDragDisabled={!isDraggableExtension(extension, router)}
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className={`drag-element ${
                        snapshot.isDragging ? "dragging" : ""
                      }`}
                      style={{
                        ...provided.draggableProps.style,
                      }}
                    >
                      {/* isDraggableExtension(extension) ? ( */}
                      {extension === ".jpg" ? (
                        (() => {
                          return (
                            <div
                              className="drag-element-img"
                              data-tooltip-id={`image_tooltip_${index}`}
                              data-tooltip-content={toolTipSizes[index]}
                              data-tooltip-place="top"
                              {...provided.dragHandleProps}
                            >
                              {/* Action div */}
                              <ActionDiv index={index} />
                              <Tooltip id={`image_tooltip_${index}`} />
                              <>
                                <img
                                  className="img-fluid-custom object-fit-cover border rounded"
                                  src={imageUrl}
                                  alt={`Selected file ${index}`}
                                  draggable={false}
                                />
                              </>
                              <p className="text-center">{file.name}</p>
                            </div>
                          );
                        })()
                      ) : (
                        <div
                          className="card item"
                          data-tooltip-id={`item-tooltip-${index}`}
                          data-tooltip-content={toolTipSizes[index]}
                          data-tooltip-place="top"
                          // how to add props on condition in react
                          {...(extension === ".pdf"
                            ? provided.dragHandleProps
                            : {})}
                        >
                          <Tooltip id={`item-tooltip-${index}`} />
                          <ActionDiv index={index} />
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
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DisplayFile;
