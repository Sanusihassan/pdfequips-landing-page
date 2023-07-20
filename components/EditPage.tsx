import { useRouter } from "next/router";
import DisplayFile from "./DisplayFile";
import { RefObject, useContext, useEffect, useState } from "react";

import Options, { OptionsProps } from "./DisplayFile/Options";
import type { edit_page } from "../content";
import ErrorElement from "./ErrorElement";
import type { errors as _ } from "../content";
import { Spinner } from "react-bootstrap";
import { CogIcon } from "@heroicons/react/outline";
import { ToolStoreContext } from "../src/ToolStoreContext";

type editPageProps = {
  extension: string;
  submitBtn: RefObject<HTMLButtonElement>;
  edit_page: edit_page;
  pages: string;
  page: string;
  lang: string;
  errors: _;
};
// the error message is inside the editPage component
const EditPage = ({
  extension,
  submitBtn,
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
  const state = useContext(ToolStoreContext);
  // actual files;
  useEffect(() => {
    if (isOnline && !(k == "merge-pdf" && state?.files.length == 1)) {
      state?.resetErrorMessage();
    }
    if (
      state?.errorCode == "ERR_EMPTY_FILE" &&
      state?.files.length > 0 &&
      !(k == "merge-pdf" && state?.files.length == 1)
    ) {
      state?.resetErrorMessage();
    }

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);
  function SubmitBtn({ k }: { k: string }): JSX.Element {
    return (
      <button
        className={`submit-btn btn btn-lg text-white position-relative overflow-hidden ${k} grid-footer`}
        onClick={() => {
          console.log("clicked");
          state?.setIsSubmitted(true);
          setShowOptions(false);
          if (submitBtn.current) {
            submitBtn.current.click();
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
    <aside className={`edit-page ${state?.showTool ? "d-none" : ""}`}>
      <section className="edit-area">
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
        <Options layout={k as OptionsProps["layout"]} edit_page={edit_page} />
        <SubmitBtn k={k} />
      </section>
    </aside>
  );
};

export default EditPage;
