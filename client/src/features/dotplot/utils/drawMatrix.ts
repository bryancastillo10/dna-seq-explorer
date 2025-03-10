import type { DotPlotCanvasConfig, MatrixEntry } from "@/features/dotplot/api/interface";

export const drawMatrix = (
	matrix: MatrixEntry<number>[],
	config: DotPlotCanvasConfig<number>
) => {
	const { context, cellSize, marginLeft } = config;

		matrix.forEach((entry) => {
      if ((entry.row === 0 || entry.col === 0) && entry.value.trim() === "") {
        return;
      }
      if (entry.value.trim() === "") {
        return;
      }

      let color = "#FFECD1";
      if (entry.value === "*") color = "#009688";

      const x = marginLeft + entry.col * cellSize;
      const y = entry.row * cellSize;
      context.fillStyle = color;

      context.fillRect(x, y, cellSize, cellSize);
    });

};