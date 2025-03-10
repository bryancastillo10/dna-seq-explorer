import { useState } from "react";

import { type SelectChangeEvent } from "@mui/material";
import { type SingleSeqInput } from "@/features/singleSeq/api/interface";
import { type SubmitSingleSeq } from "@/features/singleSeq/api/interface";

const initialData = {
  sampleLabel: "",
  seqType: "DNA" as SingleSeqInput<string>["seqType"],
  seq: ""
}

const useSingleSeqAnalysis = (runAnalysis: SubmitSingleSeq) => {
  const [singleSeq, setSingleSeq] = useState<SingleSeqInput<string>>(initialData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setSingleSeq((prev) => ({...prev, [id]: value}))
  };
  
  const handleSelectChange = (e: SelectChangeEvent) => {
    setSingleSeq((prev) => ({
      ...prev,
      seqType: e.target.value as SingleSeqInput<string>["seqType"]
    }));
  };
  
  const handleClearSingleSeq = () => {
    setSingleSeq(initialData);
  };
  
 

  const handleRunAnalysis = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    runAnalysis(singleSeq);
  };

  return {
    singleSeq,
    handleInputChange,
    handleSelectChange,
    handleClearSingleSeq,
    handleRunAnalysis
  }
}

export default useSingleSeqAnalysis;
