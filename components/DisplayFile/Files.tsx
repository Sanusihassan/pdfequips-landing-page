import { Dispatch, SetStateAction, useEffect } from "react";
import type { errors as _ } from "../../content";
import ImageCard from "./ImageCard";
import FileCard from "./FileCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { isDraggableExtension } from "../../src/utils";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import store, { ToolState } from "../../src/store";


type FileProps = {
  errors: _;
  extension: string;
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
  toolTipSizes: string[];
  setToolTipSizes: Dispatch<SetStateAction<string[]>>;
};
const Files = ({
  errors,
  extension,
  imageUrls,
  setImageUrls,
  toolTipSizes,
}: FileProps) => {
  const store = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();
  useEffect(() => {
    
  }, [store?.errorMessage]);
  const router = useRouter();
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    // Argument of type 'Blob[]' is not assignable to parameter of type 'File[]'.
    // Type 'Blob' is missing the following properties from type 'File': lastModified, webkitRelativePathts(2345)
    if (isDraggableExtension(extension, router)) {
      // dispatch(setFiles(store.files));
    }
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
                            <ImageCard
                              imageUrls={imageUrls}
                              index={index}
                              provided={provided}
                              setImageUrls={setImageUrls}
                              toolTipSizes={toolTipSizes}
                              extension={extension}
                              errors={errors}
                            />
                          );
                        })()
                      ) : (
                        <FileCard
                          extension={extension}
                          file={file}
                          imageUrl={imageUrl}
                          imageUrls={imageUrls}
                          index={index}
                          isDraggable={isDraggableExtension(extension, router)}
                          provided={provided}
                          setImageUrls={setImageUrls}
                          snapshot={snapshot}
                          toolTipSizes={toolTipSizes}
                          errors={errors}
                        />
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

export default Files;
