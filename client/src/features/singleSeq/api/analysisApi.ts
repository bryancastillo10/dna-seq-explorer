import { type SingleSeqInput } from "@/features/singleSeq/api/interface";
import { handlePostRequest } from "@/utils/handlePostReq";

const baseURL = import.meta.env.VITE_API_BASE_URL + "analysis";

const basicAnalysis = async (seqData: SingleSeqInput<string>) => {
	const res = await fetch(`${baseURL}/basic`, handlePostRequest(seqData));

	if(!res.ok){
		throw new Error("Basic Analysis Failed");
	}
	return res.json();
};

const advancedAnalysis = async (seqData: SingleSeqInput<string>) => {
	const res = await fetch(`${baseURL}/advanced`, handlePostRequest(seqData));

	if(!res.ok){
		throw new Error("Advanced Analysis Failed");
	}
	return res.json();
};

export { basicAnalysis, advancedAnalysis } 