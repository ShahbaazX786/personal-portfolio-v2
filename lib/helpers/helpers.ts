import { pdfjs } from "react-pdf";

export const getPDFjsURL = () => {
  if (process.env.ENV !== "development") {
    return `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  } else {
    return `pdfjs-dist/build/pdf.worker.min.mjs, ${import.meta.url}`;
  }
};
