import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/context/useToast";
import { singleSeqExport } from "@/features/fileExport/api/exportApi";

const useSingleSeqExport = () => {
	const { showToast } = useToast();

	const { mutate: exportSingleSeqResult,
			data: singleExportMessage,
			isPending: loading
	} = useMutation({ 
		mutationKey:["singleSeqExport"],
		mutationFn: singleSeqExport,
		onSuccess: (data) => {
			showToast(data.message, "success");
		},
		onError: (error:Error) => {
			showToast(error.message, "error");
		}
	});

	return { exportSingleSeqResult, singleExportMessage, loading }
};

export default useSingleSeqExport;