import type { errors as _ } from "../content/content"; // import the errors constant
import type { ToolStore } from "../store";
import { validateFiles } from "../utils"
export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  state: ToolStore | undefined,
  extension: string,
  errors: typeof _
) => {

  const _files = (e.target?.files as FileList) || null;
  const isValid = validateFiles(_files, extension, errors, state);
  state?.setShowTool(false);
  if (isValid) {
    state?.resetErrorMessage();
  }
};
