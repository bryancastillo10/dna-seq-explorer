import type { PairSeqInput } from "@/features/pairSeq/api/interface";

import { handlePostRequest } from "@/utils/handlePostReq";
import { prepPythonPayload } from "@/utils/prepPythonPayload";

const baseURL = import.meta.env.VITE_API_BASE_URL + "sequencing";

const dotplotSequencing = async (seqData: PairSeqInput<string>) => {
	const payload = prepPythonPayload(seqData);

	const res = await fetch(`${baseURL}/dotplot`, handlePostRequest(payload));

	if(!res.ok){
		const errorRes = await res.json();
		throw new Error(errorRes.detail || "Failed to sequence the provided input");
	}
	return res.json();
};

export { dotplotSequencing };