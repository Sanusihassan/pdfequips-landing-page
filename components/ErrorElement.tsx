import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { ToolState } from "../src/store";

const ErrorElement = ({ state }: { state: ToolState }) => {
  return (
    <>
      <div className="alert alert-danger text-center mt-3" role="alert">
        <ExclamationCircleIcon className="w-5 h-5" viewBox="0 0 22 22" />{" "}
        <bdi className="d-inline-flex">{state.errorMessage}</bdi>
        {state.files[0] ? (
          <div>
            <strong>{state.files[0].name}</strong>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ErrorElement;
