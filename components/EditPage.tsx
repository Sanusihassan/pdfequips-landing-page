import { useRouter } from "next/router";
import DisplayFile from "./DisplayFile";
import { ToolState } from "../src/store";
import { useSelector } from "react-redux";
import { RefObject } from "react";

import Options, { OptionsProps } from "./DisplayFile/Options";
import type { edit_page } from "../content";
import ErrorElement from "./ErrorElement";
import type { errors as _ } from "../content";

type editPageProps = {
  extension: string;
  submitBtn: RefObject<HTMLButtonElement>;
  edit_page: edit_page;
  pages: string;
  page: string;
  lang: string;
  errors: _;
};
const EditPage = ({
  extension,
  submitBtn,
  edit_page,
  pages,
  page,
  lang,
  errors,
}: editPageProps) => {
  const state = useSelector((state: { tool: ToolState }) => state.tool);

  const router = useRouter();
  let k = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");

  return (
    <aside className={`edit-page ${state.showTool ? "d-none" : ""}`}>
      <section className="edit-area">
        <DisplayFile
          extension={extension}
          pages={pages}
          page={page}
          lang={lang}
          errors={errors}
        />
        {state.showErrorMessage ? <ErrorElement state={state} /> : null}
      </section>
      <section className="options">
        <h5 className="text-uppercase">
          <bdi>
            {
              edit_page.edit_page_titles[
                k.replace(/-/g, "_") as keyof typeof edit_page.edit_page_titles
              ]
            }
          </bdi>
        </h5>
        <Options layout={k as OptionsProps["layout"]} edit_page={edit_page} />
        <button
          className={`submit-btn btn btn-lg text-white position-relative overflow-hidden ${k}`}
          onClick={() => {
            submitBtn.current?.click();
            if (submitBtn.current) {
              submitBtn.current.click();
            }
          }}
          disabled={state.showErrorMessage}
        >
          <bdi>
            {
              edit_page.action_buttons[
                k.replace(/-/g, "_") as keyof typeof edit_page.action_buttons
              ]
            }
          </bdi>
        </button>
      </section>
    </aside>
  );
};

export default EditPage;
