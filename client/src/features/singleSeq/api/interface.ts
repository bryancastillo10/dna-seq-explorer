export interface SingleSeqInput<T> {
    sampleLabel: T;
    seqType: "DNA" | "RNA" | "Protein";
    seq: T;
};