import Link from "next/link";
import WindowWrapper from "../wrappers/WindowWrapper";
import WindowControls from "./WindowControls";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Shaik Mohammad Shahbaaz&apos;s Resume.pdf</h2>

        <Link
          href={"files/resume.pdf"}
          download={"Shaik_Shahbaaz_Alam_FullStack.pdf"}
          className="cursor-pointer"
          title="download resume"
        >
          <Download className="icon" />
        </Link>
      </div>
      <Document file={"/files/resume.pdf"}>
        <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
