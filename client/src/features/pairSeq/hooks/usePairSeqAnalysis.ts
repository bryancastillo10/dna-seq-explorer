import React, { useState } from "react"

import type { PairSeqInput, ISequenceData } from "@/features/pairSeq/api/interface";
import { type SelectChangeEvent } from "@mui/material";
import { type SubmitPairSeq } from "@/features/pairSeq/api/interface";

const initialSeqData = {
	label: "",
	sequence: ""
}

const usePairSeqAnalysis = (runSequencing: SubmitPairSeq) => {
  const [seqType, setSeqType] = useState<PairSeqInput<string>["seqType"]>("DNA");
  const [ seqA, setSeqA ] = useState<ISequenceData>(initialSeqData);
  const [seqB, setSeqB ] = useState<ISequenceData>(initialSeqData);

  const handleSeqAChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setSeqA((prev) => ({...prev, [id]: value }));
  };

  const handleSeqBChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setSeqB((prev) => ({...prev, [id]: value }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
		setSeqType(e.target.value as PairSeqInput<string>["seqType"]);
  };

  const getPairSeqData = ():PairSeqInput<string> => ({
		seqType,
		seqALabel: seqA.label || "Sequence 1",
		seqA: seqA.sequence || "",
		seqBLabel: seqB.label || "Sequence 2",
		seqB: seqB.sequence || ""
  });

  const handleClearPairSeq = () => {
		setSeqType("DNA");
		setSeqA(initialSeqData);
		setSeqB(initialSeqData);
  };

  const handleRunAnalysis = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const payload = getPairSeqData();
		runSequencing(payload);
  };

  return {
		seqType,
		seqA,
		seqB,
		handleSelectChange,
		handleSeqAChange,
		handleSeqBChange,
		handleClearPairSeq,
		getPairSeqData,
		handleRunAnalysis
	}
}

export default usePairSeqAnalysis
