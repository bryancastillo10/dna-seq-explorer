import { useRef } from "react";
import type {  MatrixEntry } from "@/features/dotplot/api/interface";

import useDotCanvas from "../hooks/useDotCanvas";

interface DotPlotCanvasProps {
  matrix: MatrixEntry<number>[];
}

const DotPlotCanvas = ({ matrix }: DotPlotCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null >(null);
  
  useDotCanvas({
    canvasRef,
    matrix,
    cellSize: 50
  });

  return (
      <canvas ref={canvasRef} style={{ border: "1px solid #ccc" }} />
  );
};

export default DotPlotCanvas;