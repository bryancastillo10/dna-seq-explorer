import type { IExportData } from "@/features/fileExport/hooks/useFileExport";

import { handlePostRequest } from "@/utils/handlePostReq";

const baseURL = import.meta.env.VITE_API_BASE_URL + "export";

const singleSeqExport = async (exportData: IExportData) => {
	const res = await fetch(`${baseURL}/single-seq`, handlePostRequest(exportData));

	if(!res.ok){
		const errorRes = await res.json();
		throw new Error(errorRes.detail || "Failed to export the analysis results");
	}
	return res.json();
};

const pairSeqExport = async(exportData: IExportData) => {
	const res = await fetch(`${baseURL}/pair-seq`, handlePostRequest(exportData));

	if(!res.ok){
		const errorRes = await res.json();
		throw new Error(errorRes.detail || "Failed to export the pairwise sequencing result");	
	}
	return res.json();
};

export { singleSeqExport, pairSeqExport };