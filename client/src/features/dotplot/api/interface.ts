export type MatrixEntry<T> = {
	row: T;
	col: T;
	value: string;
}

export interface DotPlotResponse {
	seqALabel: string;
	seqBLabel: string;
	match: number;
	mismatch: number;
	matrix: MatrixEntry<number>[];
}