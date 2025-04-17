import type { BasicNucResult, BasicProteinResult } from "@/features/singleSeq/api/interface"


export type ExportFeatures = "basic" | "advanced" | "dotplot" | "local" | "global"

type Results = BasicNucResult<string, number> | BasicProteinResult<string,number> | 
	DotPlotResult<string,number> | PairwiseResult<string> | null

type OutputFormat = "pdf" | "csv" | "plain"

interface DotPlotResult<T,U> {
	match: U
	mismatch: U
	image: T
}

interface PairwiseResult <T> {
	alignedSeqA: T;
	alignedSeqB: T;
	similarity: number;
}


export interface ExportRequest {
	feature: ExportFeatures
	seq_label?: string
	seq_A_label?: string
	seq_B_label?: string
	results: Results
	save_dir: string
	output_format: OutputFormat
}