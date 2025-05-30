import type { BasicNucResult, BasicProteinResult, AdvancedAnalysisResponse } from "@/features/singleSeq/api/interface"
import type { UseMutateFunction } from "@tanstack/react-query"
import type { IExportData } from "@/features/fileExport/hooks/useFileExport"



type Results = BasicNucResult<string, number> | BasicProteinResult<string,number> | 
	AdvancedAnalysisResponse |
	DotPlotResult<string,number> | PairwiseResult<string> | null

export type OutputFormat = "pdf" | "csv" | "plain"

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

export interface SelectExtensions {
	value: OutputFormat; label: string
}

export type ExportRequest = SingleSeqExport | PairSeqExport;

export type HandleFileExport = UseMutateFunction<any, Error, IExportData,unknown>