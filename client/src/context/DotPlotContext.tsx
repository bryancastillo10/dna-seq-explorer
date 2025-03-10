import { createContext, useContext } from "react";
import { type DotPlotCanvasConfig } from "@/features/dotplot/api/interface";

interface DotPlotCanvasProviderProps {
  config: DotPlotCanvasConfig<number>;
  children: React.ReactNode;
}

const DotPlotCanvasContext = createContext<DotPlotCanvasConfig<number> | undefined>(undefined);

export const DotPlotCanvasProvider = ({config, children}: DotPlotCanvasProviderProps) => {
	return (
	<DotPlotCanvasContext.Provider value={config}>
		{children}
	</DotPlotCanvasContext.Provider>
	)
};