import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { useContext, useEffect } from "react";
import { ToolStoreContext } from "../src/ToolStoreContext";

const ErrorElement = () => {
  const state = useContext(ToolStoreContext);
  useEffect(() => {
    console.log("change happened");
  }, [state?.errorMessage]);
  return (
    <>
      <div
        style={{
          display: state?.showErrorMessage ? "block" : "none",
        }}
        className="error-element alert alert-danger text-center mt-3"
        role="alert"
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

export default ErrorElement;
