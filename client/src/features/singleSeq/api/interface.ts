import { type UseMutateFunction } from "@tanstack/react-query";

export interface SingleSeqInput<T> {
    sampleLabel: T;
    seqType: "DNA" | "RNA" | "Protein";
    seq: T;
};


const nucleotideBases = ["G", "C", "A", "T", "U"];
const aminoAcids = ["A", "C", "D", "E", "F", "G", "H", "I", "K", "L", 
"M", "N", "P", "Q", "R", "S", "T", "V", "W", "Y"];

export type Nucleotides = typeof nucleotideBases[number];
export type AminoAcid = typeof aminoAcids[number];

// Basic Analysis: DNA or RNA 
type BasicNucResult<T,U> = {
    transcription: T;
    gcContent: U;
    reverseComplement: T;
    nucleotideFrequency: Partial<Record<Nucleotides, number>>,
    translatedSequence: T;
}

export interface NucleotideResponse {
    sampleLabel: string;
    data: BasicNucResult<string,number>
}

//  Basic Analysis: Protein
type BasicProteinResult<T,U> = {
    aminoAcidSequence: T;
    molecularWeight: U;
    aminoAcidFrequency: Record<AminoAcid, U>;
    isoelectricPoint: U;
}

export interface ProteinResponse {
    sampleLabel: string;
    data: BasicProteinResult<string,number>;
}


export type BasicAnalysisResults = BasicNucResult<string,number> 
| BasicProteinResult<string,number> | null;

// Advanced Analysis
type RNABase = "A" | "G" | "C" | "U";
type Codon = `${RNABase}${RNABase}${RNABase}`;

export interface AdvancedAnalysisResponse {
    sampleLabel: string;
    data: {
        codonUsage: Partial<Record<Codon, number>>;
        prediction: string;
    }
}

export type SubmitSingleSeq = UseMutateFunction<any, Error, SingleSeqInput<string>, unknown>