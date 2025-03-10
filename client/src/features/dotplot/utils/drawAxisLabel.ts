import type { DotPlotCanvasConfig } from "@/features/dotplot/api/interface";

export const drawAxisLabels = (
	seqALabel: string,
	seqBLabel: string,
	config: DotPlotCanvasConfig<number>
) => {
	const { context, 
			cellSize, 
			marginLeft, 
			marginBottom, 
			rowCount, 
			colCount 
		} = config;

	context.font = "16px Poppins";
	context.fillStyle = "#000";

	if(seqBLabel){
		const gridWidth = colCount * cellSize;
		const x = gridWidth/ 2;
		const y = rowCount * cellSize + marginBottom / 2 + 8;

		context.textAlign = "center";
		context.fillText(seqBLabel, x , y);
	}

	if(seqALabel){
		const gridHeight = rowCount * cellSize;
		const x = marginLeft / 2;
		const y = gridHeight /2;

		context.save();
		context.translate(x,y);
		context.rotate(-Math.PI/2);
		context.textAlign="center";
		context.fillText(seqALabel, 0, 0);
		context.restore();
	}
};