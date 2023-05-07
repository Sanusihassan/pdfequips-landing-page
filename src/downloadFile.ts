import { RefObject } from "react";

export const downloadConvertedFile = (
  response: any,
  fileType: string,
  fileName: string,
  downloadBtn: RefObject<HTMLAnchorElement>
) => {
  const binaryData = [];
  binaryData.push(response.data);
  const url = URL.createObjectURL(new Blob(binaryData, { type: fileType }));
  if (downloadBtn && downloadBtn.current) {
    downloadBtn.current.setAttribute("download", fileName);
    downloadBtn.current.href = url;
  }
  downloadBtn.current?.click();
};
