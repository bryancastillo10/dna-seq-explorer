import type { IExportData } from "@/features/fileExport/hooks/useFileExport";
import { handleFileDownload } from "@/features/fileExport/utils/handleFileDownload";
import { handlePostRequest } from "@/utils/handlePostReq";

const baseURL = import.meta.env.VITE_API_BASE_URL + "export";

const singleSeqExport = async (exportData: IExportData) => {
	const res = await fetch(`${baseURL}/single-seq`, handlePostRequest(exportData));

	return handleFileDownload(res)
};

const pairSeqExport = async(exportData: IExportData) => {
	const res = await fetch(`${baseURL}/pair-seq`, handlePostRequest(exportData));

	return handleFileDownload(res)
};

export { singleSeqExport, pairSeqExport };