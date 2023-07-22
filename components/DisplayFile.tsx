import { useEffect, useState, RefObject, useContext } from "react";
import "react-tooltip/dist/react-tooltip.css";

import {
  getFileDetailsTooltipContent,
  getFirstPageAsImage,
  getPlaceHoderImageUrl,
  isDraggableExtension,
} from "../src/utils";

import { useRouter } from "next/router";

import { Spinner } from "react-bootstrap";
import { validateFiles } from "../src/utils";

import type { errors as _, edit_page } from "../content";
import Files from "./DisplayFile/Files";
// import { ToolStoreContext } from "../src/ToolStoreContext";
import { useSelector, useDispatch } from "react-redux";
import { ToolState, resetErrorMessage } from "../src/store";
import { useFileStore } from "../src/file-store";
type propTypes = {
  extension: string;
  pages: string;
  page: string;
  lang: string;
  errors: _;
  edit_page: edit_page;
};

const Loader = ({ loader_text }: { loader_text: string }) => (
  <div className="loader d-flex justify-content-center align-items-center">
    <Spinner as="span" animation="grow" role="status" aria-hidden="true" />{" "}
    {loader_text}
  </div>
);

const DisplayFile = ({
  extension,
  pages,
  page,
  lang,
  errors,
  edit_page,
}: propTypes) => {
  const [imageUrls, setImageUrls] = useState<
    { file: File; imageUrl: string }[]
  >([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [toolTipSizes, setToolTipSizes] = useState<string[]>([]);
  // actual files
  const { files, setFiles } = useFileStore.getState();
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();
  // router
  const router = useRouter();
  let path = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");

  useEffect(() => {
    // Argument of type 'File[] | undefined' is not assignable to parameter of type 'File[] | FileList'.
    // Type 'undefined' is not assignable to type 'File[] | FileList'.
    const isValid = validateFiles(files, extension, errors, dispatch);
    if (!(path == "merge-pdf" && files.length == 1)) {
      if (state?.errorCode == "ERR_EMPTY_FILE" && files.length > 0) {
        dispatch(resetErrorMessage());
      }
      if (
        isValid ||
        (state && files.length > 0 && state?.errorCode == "ERR_EMPTY_FILE")
      ) {
        // the cause of the problem
        dispatch(resetErrorMessage());
      }
    }
    // const max_files = 2;
    // if (state && files.length > max_files) {
    //   state?.setErrorMessage(errors.MAX_FILES_EXCEEDED.message);
    // }
    let isSubscribed = true;
    const tooltipSizes = files.map((file: File) =>
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
          const pdfPromises = files.map(async (file: File) => {
            const imageUrl = await getFirstPageAsImage(file, dispatch, errors);
            newImageUrls.push({ file, imageUrl });
          });

          await Promise.all(pdfPromises);
          if (isSubscribed) {
            setImageUrls([...newImageUrls]);
          }
        } else if (extension && extension !== ".jpg") {
          const newImageUrls: { file: File; imageUrl: string }[] = [];
          files.forEach((file: File) => {
            let imageUrl = !file.size
              ? "/images/corrupted.png"
              : getPlaceHoderImageUrl(extension);
            newImageUrls.push({ file, imageUrl });
          });

          if (isSubscribed) {
            setImageUrls([...newImageUrls]);
          }
        } else if (extension && extension === ".jpg") {
          const newImageUrls: { file: File; imageUrl: string }[] = [];
          files.forEach((file: File) => {
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
  }, [extension, state?.rerender]);
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    // Argument of type 'Blob[]' is not assignable to parameter of type 'File[]'.
    // Type 'Blob' is missing the following properties from type 'File': lastModified, webkitRelativePathts(2345)
    if (isDraggableExtension(extension, router)) {
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
        <Files
          errors={errors}
          extension={extension}
          imageUrls={imageUrls}
          setImageUrls={setImageUrls}
          setToolTipSizes={setToolTipSizes}
          toolTipSizes={toolTipSizes}
        />
      )}
    </>
  );
};

export default DisplayFile;
