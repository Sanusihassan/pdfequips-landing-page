import DisplayFile from "./DisplayFile";

type editPageProps = {
  title: string;
  extension: string;
};
const EditPage = ({ title, extension }: editPageProps) => {
  /**
   * i want a bootstrap sidebar (always visible)
   * with two sections: edit-area & options
   * edit-area will take about 75% width, and options will take the rest
   * the options area has a h5, it should be centered with a little bottom border
   * the edit-page should look like a card or card body with padding,
   * please use bootstrap classes if possible, otherwise use regular css
   * the button should have a pulse animation
   * this is my html and i'm using tsx by the way:
   */
  let k = title.replace(/[\s/]+/g, "-");
  return (
    <aside className="edit-page">
      <section className="edit-area">
        <DisplayFile extension={extension} />
      </section>
      <section className="options">
        <h5 className="text-uppercase">{title} options</h5>
        <button
          className={`submit-btn btn btn-lg text-white position-relative overflow-hidden ${k}`}
        >
          Convert to {extension.replace(/\./, "")}
        </button>
      </section>
    </aside>
  );
};

export default EditPage;
