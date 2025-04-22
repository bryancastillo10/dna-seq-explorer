import type { IExportData } from "@/features/fileExport/hooks/useFileExport";

const Biomolecules =["DNA", "RNA" , "Protein"];
type PythonSingleSeq = {
	"sample_name": string;
	"seq_type": typeof Biomolecules[number] ,
	"seq": string;
}

type PythonPairSeq<T> = {
	"seq_type": typeof Biomolecules[number],
	"seq_A_label": T;
	"seq_A": T;
	"seq_B_label": T;
	"seq_B": T;
}

export const handlePostRequest = (data: PythonSingleSeq | PythonPairSeq<string> | IExportData) => {
	return {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(data)
	}
};