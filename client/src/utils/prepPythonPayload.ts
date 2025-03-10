import type { SingleSeqInput } from "@/features/singleSeq/api/interface";
import type { PairSeqInput } from "@/features/pairSeq/api/interface";

export const prepPythonPayload = (seqData: SingleSeqInput<string> | PairSeqInput<string>) => {
	if("seq" in seqData){
	return  {
		"sample_name": seqData.sampleLabel,
		"seq_type": seqData.seqType,
		"seq": seqData.seq
	}};
	
	return {
		"seq_type": seqData.seqType,
		"seq_A_label": seqData.seqALabel,
		"seq_A": seqData.seqA,
		"seq_B_label": seqData.seqBLabel,
		"seq_B": seqData.seqB,
	}
};