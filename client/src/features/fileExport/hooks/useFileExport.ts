import { useState } from "react";
import type { ExportRequest } from "@/features/fileExport/api/interface";


const initialExportRequest: ExportRequest = {
	feature:"basic",
	seq_label:"",
	seq_A_label:"",
	seq_B_label:"",
	results: null,
	output_format:"pdf",
	save_dir:"."
}

const useFileExport = () => {
	const [fileExport, setFileExport] = useState<ExportRequest>(initialExportRequest)

	const updateFileExport = (payload: Partial<ExportRequest>) => {
		setFileExport((prev) => ({...prev, payload}))
	}

	return {
		fileExport,
		updateFileExport
	}
}

export default useFileExport;
