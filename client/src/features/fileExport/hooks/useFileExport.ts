import { useState } from "react";
import type { SelectChangeEvent } from "@mui/material";

import type { ExportRequest, SingleSeqExport, PairSeqExport, OutputFormat } from "@/features/fileExport/api/interface";
import { createInitialExport } from "@/features/fileExport/utils/createInitialExport";

import { useModalStore } from "@/zustand/modal";


export interface IExportData {
    results: ExportRequest["results"];
    seq_label?: string;
    seq_A_label?: string;
    seq_B_label?: string;
}


const useFileExport = (defaultFeature: ExportRequest["feature"]) => {
  const [fileExport, setFileExport] = useState<ExportRequest>(createInitialExport(defaultFeature));
  const { openModal } = useModalStore();

  const isSingleSeqExport = (value: ExportRequest): value is SingleSeqExport => 
      value.feature === "basic" || value.feature === "advanced"


  const isPairSeqExport = (value: ExportRequest): value is PairSeqExport =>
      value.feature === "dotplot" || value.feature === "local" || value.feature === "global"

  const prepareFileExport = (patch: Partial<ExportRequest>) => {
    setFileExport((prev) => {

      if (isSingleSeqExport(prev)) {
        const updated: ExportRequest = {
          ...prev,
          ...(patch as Partial<SingleSeqExport>),
        };
        return updated;
      }  

      if(isPairSeqExport(prev)) {
        const updated: ExportRequest = {
          ...prev,
          ...(patch as Partial<PairSeqExport>),
        };
        return updated;
      }

      return prev;
    });
  };

  const fileExtensions = {
      ".csv": "csv",
      ".pdf": "pdf",
      ".txt":"plain"
  }

  const extensionOptions = Object.keys(fileExtensions);

  const handleSelectChange = (e: SelectChangeEvent) => {
        const selectedExtension = e.target.value as keyof typeof fileExtensions;
        const outputFormat = fileExtensions[selectedExtension];

        if (outputFormat){
          prepareFileExport({ output_format: outputFormat as OutputFormat });

        }
  };


  const openExportModal = (data: IExportData) => {
    prepareFileExport(data);
    openModal();
  };

  return {
    fileExport,
    extensionOptions,
    handleSelectChange,
    prepareFileExport,
    openExportModal
  };
};

export default useFileExport;
