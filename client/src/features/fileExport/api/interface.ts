import type { BasicNucResult, BasicProteinResult } from "@/features/singleSeq/api/interface"



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


interface BaseExportRequest {
	results: Results
	save_dir: string
	output_format: OutputFormat
}

export interface SingleSeqExport extends BaseExportRequest {
	feature: "basic" | "advanced";
	seq_label: string;
}

export interface PairSeqExport extends BaseExportRequest {
	feature: "dotplot" | "local" | "global";
	seq_A_label: string;
	seq_B_label: string;
}

export type ExportRequest = SingleSeqExport | PairSeqExport