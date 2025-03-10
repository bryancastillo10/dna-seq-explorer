import { type SingleSeqInput } from "@/features/singleSeq/api/interface";
import { type PairSeqInput } from "@/features/pairSeq/api/interface";

export const handlePostRequest = (data: SingleSeqInput<string> | PairSeqInput<string>) => {
	return {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(data)
	}
};