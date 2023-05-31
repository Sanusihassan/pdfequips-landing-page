import { Dispatch, SetStateAction, useEffect} from "react";
import { ToolState, setErrorMessage } from "../store";
import { useDispatch } from "react-redux";
import type { errors as _ } from "../../content";

export const useEndPoint = (
  endpoint: string,
  setEndpoint: Dispatch<SetStateAction<string>>,
  path: string,
  state: ToolState,
  errors: _,
) => {
  // endpoint
  //   const [endpoint, setEndpoint] = useState("");
  const dispatch = useDispatch();
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
