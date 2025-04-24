import type { ExportRequest } from "@/features/fileExport/api/interface";

export const createInitialExport = (feature: ExportRequest["feature"]) => {
	const baseRequest = {
		results: null,
		output_format: "pdf" as const
	}

	if(feature === "basic" || feature === "advanced" ){
		return {
				...baseRequest,
				feature,
				seq_label:"",
		}
	}else{
		return{
			...baseRequest,
			feature,
			seq_A_label:"",
			seq_B_label:""
		}
	}
}