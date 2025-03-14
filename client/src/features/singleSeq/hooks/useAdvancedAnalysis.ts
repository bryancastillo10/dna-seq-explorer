import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/context/useToast";
import { advancedAnalysis } from "@/features/singleSeq/api/analysisApi";


const useAdvancedAnalysis = () => {
	const { showToast } = useToast();

	const { mutate: runAdvancedAnalysis,
			data: analysisResult,
			isPending: loading,
			reset
	} = useMutation({
		mutationKey:["advancedAnalysis"],
		mutationFn: advancedAnalysis,
		onSuccess: (data) => {
			showToast(data.message, "success");
		},
		onError: (error: Error) => {
			showToast(error.message, "error");
		}
	});

	return { runAdvancedAnalysis, analysisResult, loading, reset }
}

export default useAdvancedAnalysis
