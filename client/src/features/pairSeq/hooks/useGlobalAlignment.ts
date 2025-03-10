import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/context/useToast";
import { globalSequencing } from "@/features/pairSeq/api/pairSeqApi";


const useGlobalAlignment = () => {
 const { showToast } = useToast();

 const { mutate: runGlobalAlignment,
		 data: sequencingResult,
		 isPending: loading
	} = useMutation({
		mutationKey:["GlobalAlignment"],
		mutationFn: globalSequencing,
		onSuccess: (data) => {
			showToast(data.message, "success");
		},
		onError: (error: Error) => {
			showToast(error.message, "error");
		}
	});

	return { runGlobalAlignment, sequencingResult, loading }
}

export default useGlobalAlignment;
