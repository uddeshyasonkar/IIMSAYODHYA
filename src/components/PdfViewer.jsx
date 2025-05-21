import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = () => (
  <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
    <div style={{ height: "750px" }}>
      <Viewer fileUrl="./files/Admission_Form.pdf" />
    </div>
  </Worker>
);

export default PdfViewer;
