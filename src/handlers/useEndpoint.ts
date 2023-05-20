import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ToolState } from "../store";

export const useEndPoint = (
  endpoint: string,
  setEndpoint: Dispatch<SetStateAction<string>>,
  path: string
) => {
  // endpoint
  //   const [endpoint, setEndpoint] = useState("");
  useEffect(() => {
    setEndpoint(path);

    const preventDefault = (event: DragEvent) => {
      event.preventDefault();
    };
    document.addEventListener("dragover", preventDefault);
    document.addEventListener("click", (e) => e.preventDefault());
    // if (_color != data.color) {
    // }
    return () => {
      document.removeEventListener("dragover", preventDefault);
    };
  }, []);
};
