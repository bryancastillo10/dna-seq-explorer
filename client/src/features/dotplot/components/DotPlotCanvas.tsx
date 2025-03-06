import { useRef } from "react";
import type { DotPlotResponse } from "@/features/dotplot/api/interface";

import useDotCanvas from "../hooks/useDotCanvas";

interface DotPlotCanvasProps {
  data: DotPlotResponse;
}

const DotPlotCanvas = ({ data }: DotPlotCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null >(null);
  
  useDotCanvas({
    canvasRef,
    matrix: data.matrix,
    cellSize: 50
  });

  return (
    <div>
      <canvas ref={canvasRef} style={{ border: "1px solid #ccc" }} />
      <p>Number of matched bases: {data.match}</p>
      <p>Number of mismatched bases: {data.mismatch}</p>
    </div>
  );
};

export default DotPlotCanvas;