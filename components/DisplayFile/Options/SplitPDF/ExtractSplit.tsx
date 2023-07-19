import { useState } from "react";
import { useSelectedOption } from "../../../../src/hooks/handleOptionClick";

export const ExtractSplit = () => {
    const [index, setIndex] = useState(0);
    const handleOptionClick = useSelectedOption(index, setIndex);
    // children
    const ExtractAll = () => {
      return (
        <>
          <div className="alert">Lorem ipsum dolor sit amet.</div>
        </>
      );
    };
    const SelectAll = () => {
      return (
        <>
          <h6>Pages to Extract:</h6>
          <input type="text" placeholder="example: 2,8-32" />
          <input type="checkbox" name="a" id="b" />
          <label htmlFor="b">merge extracted pdf in one pdf file.</label>
        </>
      );
    };
    return (
      <div className="split-category extract-split">
        <h6 className="split-category-title">Extract Mode:</h6>
        <div className="btn-row">
          <button className="btn" onClick={() => handleOptionClick(0)}>
            Extract all pages
          </button>
          <button className="btn" onClick={() => handleOptionClick(1)}>
            Select pages
          </button>
        </div>
        {index == 0 ? <SelectAll /> : null}
        {index == 1 ? <ExtractAll /> : null}
      </div>
    );
  };