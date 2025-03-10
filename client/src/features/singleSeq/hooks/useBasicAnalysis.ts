import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/context/useToast";
import { basicAnalysis } from "@/features/singleSeq/api/analysisApi";

const useBasicAnalysis = () => {
	const { showToast } = useToast();

	const { mutate: runBasicAnalysis, 
			data: basicAnalysisResult, 
			isPending: loading }
	 = useMutation({
		mutationKey:["basicAnalysis"],
		mutationFn: basicAnalysis,
		onSuccess: (data) => {
			showToast(data.message, "success");
		},
		onError: (error: Error) => {
			showToast(error.message,"error");
		} 
	});

	return { runBasicAnalysis, basicAnalysisResult, loading };
}

export default useBasicAnalysis;
