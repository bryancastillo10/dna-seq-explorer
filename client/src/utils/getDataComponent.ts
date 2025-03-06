import type { BasicAnalysisResults } from "@/features/singleSeq/api/interface";

export const getDataComponent = (
	data: BasicAnalysisResults ) => {
	if(!data) return "none";

	if ("transcription" in data || "reverseComplement" in data || "translatedSequence" in data) {
		return "nucleotide";
	}

	if ("aminoAcidSequence" in data || "isoelectricPoint" in data) {
		return "protein";
	}
	return "none";
};