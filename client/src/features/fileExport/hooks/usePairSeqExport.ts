import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/context/useToast";
import { pairSeqExport } from "@/features/fileExport/api/exportApi";


const usePairSeqExport = () => {
	const { showToast } = useToast();

	const { mutate: exportPairSeqResult,
			data: pairExportMessage,
			isPending: loading
	} = useMutation({
		mutationKey: ["pairSeqExport"],
		mutationFn: pairSeqExport,
		onSuccess: (data) => {
			showToast(data.message,"success");
		},
		onError: (error: Error) => {
			showToast(error.message, "error");
		}
	});

	return { exportPairSeqResult, pairExportMessage, loading }
};

export default usePairSeqExport;