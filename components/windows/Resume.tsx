"use client";

import {
  ChevronLeft,
  ChevronRight,
  Download,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import { getPDFjsURL } from "@/lib/helpers/helpers";
import WindowWrapper from "../wrappers/WindowWrapper";
import WindowControls from "./WindowControls";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(getPDFjsURL()).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

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

      <div className="flex items-center gap-3 px-4 py-2 border-b">
        <button
          onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
          disabled={pageNumber <= 1}
        >
          <ChevronLeft />
        </button>

        <span className="text-sm">
          {pageNumber} / {numPages ?? "--"}
        </span>

        <button
          onClick={() =>
            setPageNumber((p) => (numPages ? Math.min(p + 1, numPages) : p))
          }
          disabled={numPages !== null && pageNumber >= numPages}
        >
          <ChevronRight />
        </button>

        <div className="ml-auto flex gap-2">
          <button onClick={() => setScale((s) => Math.max(s - 0.1, 0.6))}>
            <ZoomOut />
          </button>
          <button onClick={() => setScale((s) => Math.min(s + 0.1, 2))}>
            <ZoomIn />
          </button>
        </div>
      </div>

      <div className="flex justify-center p-4 h-120 max-w-4xl w-full overflow-auto scrollbar-hide">
        <Document
          file="/files/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading PDF..."
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer
            renderAnnotationLayer
          />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
