"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { Document, Page, pdfjs } from "react-pdf";
import WindowWrapper from "../wrappers/WindowWrapper";
import WindowControls from "./WindowControls";

import { getPDFjsURL } from "@/lib/helpers/helpers";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(getPDFjsURL()).toString();

const Resume = () => {
  return (
    <>
      <div className="window-header resume-header">
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
