import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, setFiles, resetErrorMessage } from "../src/store";
import { setErrorMessage } from "../src/store";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "react-tooltip/dist/react-tooltip.css";

import {
  getFileDetailsTooltipContent,
  getFirstPageAsImage,
  getPlaceHoderImageUrl,
  isDraggableExtension,
} from "../src/utils";

import { useRouter } from "next/router";

import ImageCard from "./DisplayFile/ImageCard";
import FileCard from "./DisplayFile/FileCard";
import { Spinner } from "react-bootstrap";
import { validateFiles } from "../src/utils";

import type { errors as _, edit_page } from "../content";
import Files from "./DisplayFile/Files";
type propTypes = {
  extension: string;
  pages: string;
  page: string;
  lang: string;
  errors: _;
  edit_page: edit_page
};

const Loader = ({ loader_text }: { loader_text: string; }) => (
  <div className="loader d-flex justify-content-center align-items-center">
    <Spinner as="span" animation="grow" role="status" aria-hidden="true" />{" "}
    {loader_text}
  </div>
);

const DisplayFile = ({ extension, pages, page, lang, errors, edit_page }: propTypes) => {
  const dispatch = useDispatch();

  const [imageUrls, setImageUrls] = useState<
    { file: File; imageUrl: string }[]
  >([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [toolTipSizes, setToolTipSizes] = useState<string[]>([]);

  const store = useSelector((state: { tool: ToolState }) => state.tool);
  // router
  const router = useRouter();
  /**
   * this
   */
  useEffect(() => {
    const isValid = validateFiles(store.files, extension, errors, dispatch);
    if (isValid) {
      dispatch(resetErrorMessage());
    }
    const max_files = 2;
    if (store.files.length > max_files) {
      dispatch(setErrorMessage(errors.MAX_FILES_EXCEEDED.message));
    }
    let isSubscribed = true;
    const tooltipSizes = store.files.map((file) =>
      getFileDetailsTooltipContent(file, pages, page, lang, dispatch, errors)
    );
    Promise.all(tooltipSizes).then((sizes) => {
      setToolTipSizes(sizes);
    });

    const processFiles = async () => {
      try {
        setShowSpinner(true);

        if (extension && extension === ".pdf") {
          const newImageUrls: { file: File; imageUrl: string }[] = [];
          const pdfPromises = store.files.map(async (file: File) => {
            const imageUrl = await getFirstPageAsImage(
              file,
              dispatch,
              errors
            );
            newImageUrls.push({ file, imageUrl });
          });

          await Promise.all(pdfPromises);
          if (isSubscribed) {
            setImageUrls([...newImageUrls]);
          }
        } else if (extension && extension !== ".jpg") {
          const newImageUrls: { file: File; imageUrl: string }[] = [];
          store.files.forEach((file: File) => {

            let imageUrl = (!file.size) ? "/images/corrupted.png" : getPlaceHoderImageUrl(extension);
            newImageUrls.push({ file, imageUrl });
          });

          if (isSubscribed) {
            setImageUrls([...newImageUrls]);
          }
        } else if (extension && extension === ".jpg") {
          const newImageUrls: { file: File; imageUrl: string }[] = [];
          store.files.forEach((file: File) => {
            const reader = new FileReader();
            reader.onload = function (event: ProgressEvent<FileReader>) {
              const imageUrl = (event.target as FileReader).result as string;
              newImageUrls.push({ file, imageUrl });
              if (isSubscribed) {
                setImageUrls([...newImageUrls]);
              }
            };
            reader.readAsDataURL(file);
          });
        }
      } catch (error) {

        console.error("Error processing files:", error);
      } finally {
        setShowSpinner(false);
      }
    };

    processFiles();

    return () => {
      isSubscribed = false;
    };
  }, [extension, store.files]);
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    // Argument of type 'Blob[]' is not assignable to parameter of type 'File[]'.
    // Type 'Blob' is missing the following properties from type 'File': lastModified, webkitRelativePathts(2345)
    if (isDraggableExtension(extension, router)) {
      dispatch(setFiles(store.files));
    }
  };

  return (
    <>
      {showSpinner ? (
        <Loader loader_text={edit_page.loader_text} />
      ) : (
        // <DragDropContext onDragEnd={handleDragEnd}>
        //   <Droppable droppableId="imageUrls" direction="horizontal">
        //     {(provided, snapshot) => (
        //       <div
        //         className={`display-file ${
        //           snapshot.isDraggingOver ? "dragging-over" : ""
        //         }`}
        //         {...provided.droppableProps}
        //         ref={provided.innerRef}
        //       >
        //         {imageUrls.map(({ file, imageUrl }, index) => (
        //           <Draggable
        //             key={file.name}
        //             draggableId={file.name}
        //             index={index}
        //             isDragDisabled={!isDraggableExtension(extension, router)}
        //           >
        //             {(provided, snapshot) => (
        //               <div
        //                 {...provided.draggableProps}
        //                 ref={provided.innerRef}
        //                 className={`drag-element ${
        //                   snapshot.isDragging ? "dragging" : ""
        //                 }`}
        //                 style={{
        //                   ...provided.draggableProps.style,
        //                 }}
        //               >
        //                 {/* isDraggableExtension(extension) ? ( */}
        //                 {extension === ".jpg" ? (
        //                   (() => {
        //                     return (
        //                       <ImageCard
        //                         imageUrls={imageUrls}
        //                         index={index}
        //                         provided={provided}
        //                         setImageUrls={setImageUrls}
        //                         toolTipSizes={toolTipSizes}
        //                         extension={extension}
        //                         errors={errors}
        //                       />
        //                     );
        //                   })()
        //                 ) : (
        //                   <FileCard
        //                     extension={extension}
        //                     file={file}
        //                     imageUrl={imageUrl}
        //                     imageUrls={imageUrls}
        //                     index={index}
        //                     isDraggable={isDraggableExtension(
        //                       extension,
        //                       router
        //                     )}
        //                     provided={provided}
        //                     setImageUrls={setImageUrls}
        //                     snapshot={snapshot}
        //                     toolTipSizes={toolTipSizes}
        //                     errors={errors}
        //                   />
        //                 )}
        //               </div>
        //             )}
        //           </Draggable>
        //         ))}
        //         {provided.placeholder}
        //       </div>
        //     )}
        //   </Droppable>
        // </DragDropContext>
        <Files errors={errors} extension={extension} store={store} imageUrls={imageUrls} setImageUrls={setImageUrls} setToolTipSizes={setToolTipSizes} toolTipSizes={toolTipSizes} />
      )}
    </>
  );
};

export default DisplayFile;
