import type { MatrixEntry } from "@/features/dotplot/api/interface";

export const prepareCanvas = (
	canvas: HTMLCanvasElement,
	matrix: MatrixEntry<number>[],
	cellSize: number,
	seqALabel: string,
	seqBLabel: string
) => {
	const rowCount = Math.max(...matrix.map((m) => m.row)) + 1;
	const colCount = Math.max(...matrix.map((m) => m.col)) + 1;

	const marginLeft = seqBLabel ? 50 : 0;
	const marginBottom = seqALabel ? 50 : 0;

	
	canvas.width = colCount * cellSize + marginLeft;
    canvas.height = rowCount * cellSize + marginBottom;

	return {
		marginLeft,
		marginBottom,
		rowCount,
		colCount
	}
};