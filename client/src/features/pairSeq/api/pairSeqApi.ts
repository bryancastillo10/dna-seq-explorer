import type { PairSeqInput } from "@/features/pairSeq/api/interface";

import { handlePostRequest } from "@/utils/handlePostReq";
import { prepPythonPayload } from "@/utils/prepPythonPayload";

const baseURL = import.meta.env.VITE_API_BASE_URL + "sequencing";

const localSequencing = async (seqData: PairSeqInput<string>) => {
	const payload = prepPythonPayload(seqData);

	const res = await fetch(`${baseURL}/local`, handlePostRequest(payload));

	if(!res.ok){
		const errorRes = await res.json();
		throw new Error(errorRes.detail || "Failed to sequence the provided input");
	}
	return res.json();
};

const globalSequencing = async (seqData: PairSeqInput<string>) => {
	const payload = prepPythonPayload(seqData);

	const res = await fetch(`${baseURL}/global`, handlePostRequest(payload));

	if(!res.ok){
		const errorRes = await res.json();
		throw new Error(errorRes.detail || "Failed to sequence the provided input");
	}
	return res.json();
};


export { localSequencing, globalSequencing };