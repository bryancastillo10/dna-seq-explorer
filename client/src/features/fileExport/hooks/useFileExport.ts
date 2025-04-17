import { useState } from "react";

import type { ExportRequest } from "@/features/fileExport/api/interface";
import { createInitialExport } from "@/features/fileExport/utils/createInitialExport";

const useFileExport = (defaultFeature: ExportRequest["feature"]) => {
  const [fileExport, setFileExport] = useState<ExportRequest>(createInitialExport(defaultFeature));

  const updateFileExport = (patch: Partial<ExportRequest>) => {
    setFileExport((prev) => ({
      ...prev,
      patch,      
    }));
  };

  return {
    fileExport,
    updateFileExport,
  };
};

export default useFileExport;
