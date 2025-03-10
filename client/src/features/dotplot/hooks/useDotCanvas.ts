import { useEffect } from "react";

import type { MatrixEntry, DotPlotCanvasConfig } from "@/features/dotplot/api/interface";

import { drawMatrix } from "@/features/dotplot/utils/drawMatrix";
import { drawAxisLabels } from "@/features/dotplot/utils/drawAxisLabel";
import { prepareCanvas } from "@/features/dotplot/utils/prepareCanvas";

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

		const {
		marginLeft,
		marginBottom,
		rowCount,
		colCount
		} = prepareCanvas(canvas, matrix, cellSize, seqALabel, seqBLabel);

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