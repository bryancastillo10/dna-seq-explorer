import { useEffect } from "react";

import type { MatrixEntry, DotPlotCanvasConfig } from "@/features/dotplot/api/interface";

import { drawMatrix } from "@/features/dotplot/utils/drawMatrix";
import { drawAxisLabels } from "@/features/dotplot/utils/drawAxisLabel";

interface DotCanvas {
	canvasRef: React.RefObject<HTMLCanvasElement | null>;
	matrix: MatrixEntry<number>[];
	cellSize?: number;
	seqALabel?: string;
	seqBLabel?: string;
} 

const useDotCanvas = (props: DotCanvas) => {
	const {
		canvasRef,
		matrix,
		cellSize = 50,
		seqALabel="Sequence 1",
		seqBLabel="Sequence 2"
	} = props;

	useEffect(() => {
		const canvas = canvasRef.current;
		if(!canvas) return;

		const context = canvas.getContext("2d");
		if(!context) return;

		const rowCount = Math.max(...matrix.map((m) => m.row)) + 1;
		const colCount = Math.max(...matrix.map((m) => m.col)) + 1;

		const marginLeft = seqALabel ? 50: 0;
		const marginBottom = seqALabel ? 50 : 0;

		canvas.width = colCount * cellSize + marginLeft;
    	canvas.height = rowCount * cellSize + marginBottom;

		context.clearRect(0, 0, canvas.width, canvas.height);

		const config: DotPlotCanvasConfig<number> = {
      		context,
      		cellSize,
      		marginLeft,
      		marginBottom,
      		rowCount,
      		colCount,
    	};

		drawMatrix(matrix,config);
		drawAxisLabels(seqALabel, seqBLabel, config);

		
	},[canvasRef, matrix, cellSize, seqALabel, seqBLabel]);


};

export default useDotCanvas;