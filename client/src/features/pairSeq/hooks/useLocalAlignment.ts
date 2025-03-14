import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/context/useToast";
import { localSequencing } from "@/features/pairSeq/api/pairSeqApi";


const useLocalAlignment = () => {
	const { showToast } = useToast();

	const { mutate: runLocalAlignment,
			data: sequencingResult,
			isPending: loading,
			reset
	} = useMutation({
		mutationKey:["LocalAlignment"],
		mutationFn: localSequencing,
		onSuccess: (data) => {
			showToast(data.message, "success");
		},
		onError: (error: Error) => {
			showToast(error.message, "error");
		}
	});

	return { runLocalAlignment, sequencingResult, loading, reset }
}

export default useLocalAlignment;
