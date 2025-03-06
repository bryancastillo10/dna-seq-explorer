import { useEffect } from "react";

import type { MatrixEntry } from "@/features/dotplot/api/interface";

interface DotCanvas {
	canvasRef: React.RefObject<HTMLCanvasElement | null>;
	matrix: MatrixEntry<number>[];
	cellSize?: number;
} 

const useDotCanvas = (props: DotCanvas) => {
	const {
		canvasRef,
		matrix,
		cellSize = 50
	} = props;

	useEffect(() => {
		const canvas = canvasRef.current;
		if(!canvas) return;

		const context = canvas.getContext("2d");
		if(!context) return;

		const rowCount = Math.max(...matrix.map((m) => m.row)) + 1;
		const colCount = Math.max(...matrix.map((m) => m.col)) + 1;

		canvas.width = colCount * cellSize;
    	canvas.height = rowCount * cellSize;

		context.clearRect(0, 0, canvas.width, canvas.height);

 	matrix.forEach((entry) => {
      if ((entry.row === 0 || entry.col === 0) && entry.value.trim() === "") {
        return;
      }
      if (entry.value.trim() === "") {
        return;
      }

      let color = "#FFECD1";
      if (entry.value === "*") color = "#009688";

      const x = entry.col * cellSize;
      const y = entry.row * cellSize;
      context.fillStyle = color;

      context.fillRect(x, y, cellSize, cellSize);
    });

	},[canvasRef, matrix, cellSize]);


};

export default useDotCanvas;