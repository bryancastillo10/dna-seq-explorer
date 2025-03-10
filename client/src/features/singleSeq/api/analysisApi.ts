import { type SingleSeqInput } from "@/features/singleSeq/api/interface";

import { handlePostRequest } from "@/utils/handlePostReq";
import { prepPythonPayload } from "@/utils/prepPythonPayload";

const baseURL = import.meta.env.VITE_API_BASE_URL + "analysis";

const basicAnalysis = async (seqData: SingleSeqInput<string>) => {
	const payload =  prepPythonPayload(seqData);

	const res = await fetch(`${baseURL}/basic`, handlePostRequest(payload));

	if(!res.ok){
		const errorRes = await res.json();
		throw new Error(errorRes.detail || "Failed to analyze the provided input");
	}
	return res.json();
};

const advancedAnalysis = async (seqData: SingleSeqInput<string>) => {
	const payload =  prepPythonPayload(seqData);

	const res = await fetch(`${baseURL}/advanced`, handlePostRequest(payload));

	if(!res.ok){
		const errorRes = await res.json();
		throw new Error(errorRes.detail || "Failed to analyze the provided input");
	}
	return res.json();
};

export { basicAnalysis, advancedAnalysis } 