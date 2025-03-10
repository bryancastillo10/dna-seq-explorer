import { useRef } from "react";
import type {  MatrixEntry } from "@/features/dotplot/api/interface";

import useDotCanvas from "../hooks/useDotCanvas";

interface DotPlotCanvasProps {
  matrix: MatrixEntry<number>[];
  seqALabel?: string;
  seqBLabel?: string;
}

const DotPlotCanvas = ({ 
  matrix, 
  seqALabel = "Sequence 1", 
  seqBLabel = "Sequence 2" 
  }: DotPlotCanvasProps) => {

  const canvasRef = useRef<HTMLCanvasElement | null >(null);
  
  useDotCanvas({
    canvasRef,
    matrix,
    cellSize: 50,
    seqALabel,
    seqBLabel
  });

  return (
      <canvas ref={canvasRef} style={{ border: "1px solid #8D818C" }} />
  );
};

export default DotPlotCanvas;