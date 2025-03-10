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

export interface DotPlotCanvasConfig<T> {
	context: CanvasRenderingContext2D;
	cellSize: T;
	marginLeft: T;
	marginBottom: T;
	rowCount: T;
	colCount: T;
}
