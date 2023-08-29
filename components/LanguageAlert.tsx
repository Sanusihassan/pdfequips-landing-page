/* this is not the right time for this:
import { XIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import type { ChangeTo, ContinueIn, landing_page } from "../content";

// Define the supported languages and their labels as a type
type Item = {
  code: string;
  label: string;
};

// Define a type that contains all the possible language codes
type LanguageCodes =
  | "en"
  | "en-US"
  | "en-GB"
  | "zh"
  | "zh-CN"
  | "zh-TW"
  | "ar"
  | "es"
  | "fr"
  | "hi";

// Define a mapped type that maps each language code to a simplified format
type SimplifiedLanguageCodes = {
  // Use a key remapping syntax with an as clause
  [Code in LanguageCodes as Code extends `${infer Prefix}-${infer Suffix}`
    ? // If yes, return the prefix only, except for zh
      Prefix extends "zh"
      ? Code
      : Prefix
    : // If no, return the code as it is, except for en
    Code extends "en"
    ? ""
    : Code]: Code; // Use a conditional type to check if the code contains a dash // The value type is the same as the key type
};

// Define the props type for the component
type Props = {
  lang: string; // The current language of the website
  ContinueIn: ContinueIn;
  alert: landing_page["alert"];
  ChangeTo: ChangeTo;
};

// Define a component for the language alert
const LanguageAlert = (props: Props) => {
  const { lang, alert, ContinueIn, ChangeTo } = props;
  const [doNotShow, setDoNotShow] = useState(false);
  const [sysLang, setSysLang] = useState("en");
  // show or hide the alert
  const [showAlert, setShowAlert] = useState(false);

  // test lang
  let testLang: SimplifiedLanguageCodes[keyof SimplifiedLanguageCodes];
  if (isSimplifiedLanguageCode(lang)) {
    // use a type guard function to check if the lang prop is a simplified language code
    testLang = lang; // assign it to the testLang variable
    console.log("testLang", testLang);
  } else {
    console.log("fuck");
  }
  useEffect(() => {
    // Show the alert if the system language is different from the current language
    if (window.navigator !== undefined) {
      setSysLang(window.navigator.language);
    }
    if (sysLang && sysLang !== testLang) {
      setShowAlert(true);
    }
  }, [sysLang, lang]);

  // Define a handler for closing the alert
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <div
          className="language-alert alert alert-info alert-dismissible fade show position-absolute top-0 left-0"
          role="alert"
          style={{
            top: "2%",
            right: "2%",
          }}
        >
          <strong>{alert.title}</strong>
          <div>
            <a href="/">{ChangeTo[lang as keyof ChangeTo]}</a>
          </div>
          <div>
            <a href={`/${lang}`}>{ContinueIn[sysLang as keyof ContinueIn]}</a>
          </div>
          <div className="row justify-content-between m-0">
            <label
              htmlFor="dont-show"
              className="d-flex align-items-center justify-content-between m-0 align-items-center col-8 p-0"
            >
              <input
                defaultChecked={doNotShow}
                onChange={(e) => {
                  setDoNotShow(e.target.checked);
                }}
                type="checkbox"
                id="dont-show"
              />{" "}
              <div className="col-11 p-0">{alert.dontShowAgain}</div>
            </label>
            <button disabled={!doNotShow} className="btn btn-primary">
              OK
            </button>
          </div>
          <button
            type="button"
            className="btn btn-close position-absolute"
            style={{
              top: 0,
              right: 0,
            }}
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleCloseAlert}
          >
            <XIcon className="icon" />
          </button>
        </div>
      )}
    </>
  );
};

export default LanguageAlert;

// a type guard function that checks if a value is a simplified language code
function isSimplifiedLanguageCode(
  value: any
): value is SimplifiedLanguageCodes[keyof SimplifiedLanguageCodes] {
  return (
    value === "" ||
    value === "ar" ||
    value === "es" ||
    value === "fr" ||
    value === "hi" ||
    value === "zh"
  );
}

*/
