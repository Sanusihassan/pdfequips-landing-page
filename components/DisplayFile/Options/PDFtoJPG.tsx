import { useState } from "react";
import { FiImage } from "react-icons/fi";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { HiOutlineCheck } from "react-icons/hi";
import PortraitIcon from "../../icons/Portrait";
import LandscapeIcon from "../../icons/Landscape";
import Select from "react-select";

const PDFToJPG = ({ c }: { c: string }) => {
  const [orientation, setOrientation] = useState<string>("portrait");
  const [pageSize, setPageSize] = useState<string>("A4");
  const [margin, setMargin] = useState<number>(0);
  const [merge, setMerge] = useState<boolean>(false);

  const handleMergeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMerge(e.target.checked);
  };

  const handleMarginChange = (newMargin: number) => {
    setMargin(newMargin);
  };

  const pageSizeOptions = [
    { value: "A0", label: "A0" },
    { value: "A1", label: "A1" },
    { value: "A2", label: "A2" },
    { value: "A3", label: "A3" },
    { value: "A4", label: "A4" },
    { value: "A5", label: "A5" },
    { value: "A6", label: "A6" },
    { value: "Letter", label: "Letter" },
  ];

  return (
    <ul className="list-group list-group-flush mb-3 image-options grid-body">
      <li className="list-group-item">
        <div
          className={`d-flex justify-content-between align-items-center ${c}`}
        >
          <h6 className={`option-title mb-0 ${c}`}>Select page orientation</h6>
          <div className="option-icon">
            {orientation === "portrait" ? <PortraitIcon /> : <LandscapeIcon />}
          </div>
        </div>
        <div className="btn-group btn-group-toggle mt-3" data-toggle="buttons">
          <button
            className={`btn ${orientation === "portrait" ? "btn-light" : ""}`}
            onClick={() => setOrientation("portrait")}
          >
            <input
              type="radio"
              name="orientation"
              value="portrait"
              checked={orientation === "portrait"}
            />
            <span className="me-2">
              <PortraitIcon />
            </span>
            Portrait
          </button>
          <button
            className={`btn ${orientation === "landscape" ? "btn-light" : ""}`}
            onClick={() => setOrientation("landscape")}
          >
            <input
              type="radio"
              name="orientation"
              value="landscape"
              checked={orientation === "landscape"}
            />
            <span className="me-2">
              <LandscapeIcon />
            </span>
            Landscape
          </button>
        </div>
      </li>
      <li className="list-group-item">
        <div
          className={`d-flex justify-content-between align-items-center ${c}`}
        >
          <h6 className={`option-title mb-0 ${c}`}>Select page size</h6>
          <div className="option-icon">
            <HiOutlineArrowsExpand />
          </div>
        </div>
        <div
          style={{
            zIndex: 100,
          }}
        >
          <Select
            options={pageSizeOptions}
            value={pageSizeOptions.find((option) => option.value === pageSize)}
            onChange={(option) => setPageSize(option?.value ?? "")}
            className="react-select__menu"
          />
        </div>
      </li>
      <li className="list-group-item">
        <div
          className={`d-flex justify-content-between align-items-center ${c}`}
        >
          <h6 className={`option-title mb-0 ${c}`}>Select margin</h6>
          <div className="option-icon">
            <FiImage />
          </div>
        </div>
        <div className="btn-group btn-group-toggle mt-3" data-toggle="buttons">
          <button
            className={`btn ${margin === 0 ? "btn-light" : ""}`}
            onClick={() => handleMarginChange(0)}
          >
            <input
              type="radio"
              name="margin"
              value={0}
              checked={margin === 0}
            />
            <span className="me-2">
              <img
                src="/images/image.png"
                className="img-fluid"
                width={50}
                height={50}
              />
            </span>
            No margin
          </button>
          <button
            className={`btn ${margin === 10 ? "btn-light" : ""}`}
            onClick={() => handleMarginChange(10)}
          >
            <input
              type="radio"
              name="margin"
              value={10}
              checked={margin === 10}
            />
            <img
              src="/images/minimize.png"
              width="50"
              height="50"
              className="img-fluid"
              alt="Small margin"
            />
            Small margin
          </button>
          <button
            className={`btn ${margin === 20 ? "btn-light" : ""}`}
            onClick={() => handleMarginChange(20)}
          >
            <input
              type="radio"
              name="margin"
              value={20}
              checked={margin === 20}
            />
            <div
              style={{
                width: 50,
                height: 50,
              }}
            >
              <img
                src="/images/minimize.png"
                width="35"
                height="35"
                className="img-fluid"
                alt="Big margin"
              />
            </div>
            Big margin
          </button>
        </div>
      </li>
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className={`option-title mb-0 ${c}`}>
            Merge all pages into a single image
          </h6>
          <div className="option-icon">
            <HiOutlineArrowsExpand />
          </div>
        </div>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="merge-checkbox"
            onChange={handleMergeChange}
            checked={merge}
          />
          <label className="form-check-label" htmlFor="merge-checkbox">
            Merge all pages into a single image
          </label>
        </div>
      </li>
    </ul>
  );
};

export default PDFToJPG;
