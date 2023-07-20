import { RefreshIcon, TrashIcon } from "@heroicons/react/solid";
import { useRotatedImage, validateFiles } from "../../src/utils";
import { Dispatch, SetStateAction, useCallback, useContext } from "react";

// this is my actiondiv.tsx i'm able to change the state here
// and if the user clicks on the delete button it deletes a file from the files array on my store
// and i'm setting the error message when the user deletes all the files or left one file on merge-pdf route
// this is all working fine, but the changes are not reflected on the ErrorElement.tsx component:
/**
 * const ErrorElement = () => {
  const state = useContext(ToolStoreContext);
  useEffect(() => {
    console.log("showErrorMessage", state?.showErrorMessage);
  }, []);
  return (
    <>
      <div
        className="error-element alert alert-danger text-center mt-3"
        role="alert"
        style={{ display: state?.showErrorMessage ? "block" : "none" }}
      >
        <ExclamationCircleIcon
          className="w-5 h-5 hide-on-ltr"
          viewBox="0 0 22 22"
        />{" "}
        <bdi className="d-inline-flex">{state?.errorMessage}</bdi>{" "}
        <ExclamationCircleIcon
          className="w-5 h-5 hide-on-rtl"
          viewBox="0 0 22 22"
        />
      </div>
    </>
  );
};

 */
import type { errors as _ } from "../../content";
import { ToolStoreContext } from "../../src/ToolStoreContext";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  ToolState,
  setErrorCode,
  setErrorMessage,
  setFiles,
} from "../../src/store";
import { useFileStore } from "../../src/file-store";

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
  errors: _;
};

/**
 * it's working fine, but the changes from this actiondiv component is not reflected ouside of it
 * it's a next.js app, the updates are not available on other components
 */

export const ActionDiv = ({
  index,
  imageUrls,
  setImageUrls,
  extension,
  errors,
}: ActionProps) => {
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  // the files:
  const { files, setFiles } = useFileStore.getState();
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (files.length <= 1) {
      dispatch(setErrorMessage(errors.NO_FILES_SELECTED.message));
      dispatch(setErrorCode("NO_FILES_SELECTED"));
    } else if (files.length <= 2 && path === "merge-pdf") {
      dispatch(setErrorMessage(errors.ERR_UPLOAD_COUNT.message));
      dispatch(setErrorCode("ERR_UPLOAD_COUNT"));
    }
    console.log(state?.showErrorMessage, state?.errorMessage);
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);
    //  const newFiles = store.files.filter((file) => file.name !== item.file.name);
    const newFiles = files.filter((file) => file.name !== item.file.name);
    setFiles(newFiles);

    setImageUrls(newImageUrls);
  };
  const item = imageUrls[index];
  const rotatedImageUrl = useRotatedImage(item.imageUrl);
  // router and tool path
  const router = useRouter();
  let path = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
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
        // onClick={() => {
        //   const newImageUrls = [...imageUrls];
        //   newImageUrls.splice(index, 1);
        //   const isValid = validateFiles(files, extension, errors, dispatch);
        //   if(isValid) {
        //     dispatch(resetErrorMessage());
        //   }
        //   setImageUrls(newImageUrls);
        // }}
        // i think the problem might be with this onclick handler
        // which might not set the files correctly
        // this is a handler for deletion each file has a delete button
        // the files array on my mobx store should be updated and it should be reflected on all of my application.
        onClick={(e) => handleClick(e)}
      >
        <TrashIcon className="icon hero-icon" />
      </button>

      {/* {extension != ".html" ? (
        <button className="btn btn-light" onClick={handleRotateImage}>
          <RefreshIcon className="hero-icon" />
        </button>
      ) : null} */}
    </div>
  );
};
