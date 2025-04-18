import { useState } from "react";

import type { ExportRequest, SingleSeqExport, PairSeqExport } from "@/features/fileExport/api/interface";
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

  const openExportModal = (data: IExportData) => {
    prepareFileExport(data);
    openModal();
  };

  return {
    fileExport,
    prepareFileExport,
    openExportModal
  };
};

export default useFileExport;
