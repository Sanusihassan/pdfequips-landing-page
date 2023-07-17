import { useContext, useState } from "react";
import type { edit_page } from "../../../content";
import { useDispatch, useSelector } from "react-redux";
import { ToolStoreContext } from "../../../src/ToolStoreContext";

export const CompressPDF = ({
  c,
  options,
}: {
  c: string;
  options: edit_page["compress_pdf"];
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();
  const [v, setV] = useState(".1");
  let _optoins = ["recommended", "less", "extreme"];
  const state = useContext(ToolStoreContext);
  return (
    <ul className="list-group list-group-flush mb-3">
      {options.map((option, index) => (
        <li
          key={index}
          className={`list-group-item ${
            index === selectedIndex ? "active" : ""
          } ${index === 3 ? "" : "list-group-item-action"}`}
          onClick={() => {
            setSelectedIndex(index);

            if (index != 3) {
              state?.setCompressPdf(_optoins[index]);
            } else {
              state?.setCompressPdf("recommended");
            }
          }}
        >
          <h6 className={`option-title${" " + c}`}>{option.title}</h6>
          <p className="description">{option.description}</p>
          {index === 3 && (
            <div className="mt-3">
              {/* use bs components if possible for this element and also it's value should be a positive integer */}
              <input
                className="form-control form-control-lg"
                type="number"
                min="0.1"
                max="1"
                step={".1"}
                placeholder="Compression amount"
                value={v}
                onChange={(e) => {
                  setV(e.target.value);
                }}
                onKeyUp={() => {
                  state?.setCompressPdf(v);
                }}
              />{" "}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
