import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/context/useToast";
import { dotplotSequencing } from "@/features/dotplot/api/dotplotApi";

const useDotPlotAlignment = () => {
	const { showToast } = useToast();

		const { mutate: runDotPlot, 
			data: dotPlotResult, 
			isPending: loading }
	 = useMutation({
		mutationKey:["dotplot"],
		mutationFn: dotplotSequencing,
		onSuccess: (data) => {
			showToast(data.message, "success");
		},
		onError: (error: Error) => {
			showToast(error.message,"error");
		} 
	});

	return { runDotPlot, dotPlotResult, loading };
}

export default useDotPlotAlignment
