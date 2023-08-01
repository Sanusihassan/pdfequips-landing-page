import { useRouter } from "next/router";
import DisplayFile from "./DisplayFile";
import { RefObject, useContext, useEffect, useState } from "react";

import Options, { OptionsProps } from "./DisplayFile/Options";
import type { edit_page } from "../content";
import ErrorElement from "./ErrorElement";
import type { errors as _ } from "../content";
import { Spinner } from "react-bootstrap";
import { CogIcon } from "@heroicons/react/outline";
// import { ToolStoreContext } from "../src/ToolStoreContext";
import { useDispatch, useSelector } from "react-redux";
import {
  ToolState,
  resetErrorMessage,
  setIsSubmitted,
  setPath,
} from "../src/store";
import { useFileStore } from "../src/file-store";
import AddMoreButton from "./EditArea/AddMoreButton";

type editPageProps = {
  extension: string;
  edit_page: edit_page;
  pages: string;
  page: string;
  lang: string;
  errors: _;
};
// the error message is inside the editPage component
// calculate image height;
const EditPage = ({
  extension,
  edit_page,
  pages,
  page,
  lang,
  errors,
}: editPageProps) => {
  const [isOnline, setIsOnline] = useState(true);
  const handleOnlineStatus = () => setIsOnline(true);
  const handleOfflineStatus = () => setIsOnline(false);
  const [showOptions, setShowOptions] = useState(false);
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();
  // actual files;
  const { files, setFiles, fileInput, submitBtn } = useFileStore.getState();
  useEffect(() => {
    if (state.errorCode == "ERR_NO_FILES_SELECTED" && files.length > 0) {
      dispatch(resetErrorMessage());
    }
    if (state.path !== k) {
      dispatch(setPath(k));
    }
  }, [files, state.rerender, state.errorCode]);
  function SubmitBtn({ k }: { k: string }): JSX.Element {
    return (
      <button
        className={`submit-btn btn btn-lg text-white position-relative overflow-hidden ${k} grid-footer`}
        onClick={() => {
          dispatch(setIsSubmitted(true));
          setShowOptions(false);
          if (submitBtn) {
            submitBtn?.current?.click();
          }
        }}
        disabled={state!.errorMessage.length > 0}
      >
        <bdi>
          {
            edit_page.action_buttons[
              k.replace(/-/g, "_") as keyof typeof edit_page.action_buttons
            ]
          }
        </bdi>{" "}
        {state?.isSubmitted ? (
          <Spinner
            as="span"
            animation="grow"
            role="status"
            aria-hidden="true"
          />
        ) : null}
      </button>
    );
  }

  const router = useRouter();
  let k = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  return (
    <aside
      className={`edit-page ${
        state?.showTool || state.showDownloadBtn ? "d-none" : ""
      }`}
    >
      <section className="edit-area position-relative">
        <DisplayFile
          extension={extension}
          pages={pages}
          page={page}
          lang={lang}
          errors={errors}
          edit_page={edit_page}
        />
        {/* {state?.showErrorMessage ? <ErrorElement state={state} /> : null} */}
        <ErrorElement />
        <AddMoreButton
          onClick={() => {
            if (fileInput) {
              fileInput?.current?.click();
            }
          }}
          lang={lang}
          path={state.path}
          text={edit_page.add_more_button}
        />
        {/* when clicking on this  */}
        <button
          className="gear-button btn btn-light"
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          <CogIcon className="w-6 h-6 me-2 gear-icon" />
        </button>
      </section>
      <section className={`options${showOptions ? " expanded" : ""}`}>
        <h5 className="text-uppercase grid-header">
          <bdi>
            {
              edit_page.edit_page_titles[
                k.replace(/-/g, "_") as keyof typeof edit_page.edit_page_titles
              ]
            }
          </bdi>
        </h5>
        {/* <Options layout={k as OptionsProps["layout"]} edit_page={edit_page} /> */}
        <SubmitBtn k={k} />
      </section>
    </aside>
  );
};

export default EditPage;
