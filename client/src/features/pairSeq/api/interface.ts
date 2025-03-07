export interface PairSeqInput<T> {
	seqType: "DNA" | "RNA" | "Protein";
	seqALabel: T;
	seqA: T;
	seqBLabel: T;
	seqB: T;
};

export interface ISequenceData {
	label:string;
	sequence: string;
}

export interface LocalGlobalSeqResult<T> {
	seqALabel: T;
	alignedSeqA: T;
	seqBLabel: T;
	alignedSeqB: T;
	similarity: number;
};