import { useState } from "react";

import { type SingleSeqInput } from "@/features/singleSeq/api/interface";
import useBasicAnalysis from "@/features/singleSeq/hooks/useBasicAnalysis";

import { type SelectChangeEvent } from "@mui/material";

const initialData = {
  sampleLabel: "",
  seqType: "DNA" as SingleSeqInput<string>["seqType"],
  seq: ""
}

const useSingleSeqAnalysis = () => {
  const [singleSeq, setSingleSeq] = useState<SingleSeqInput<string>>(initialData);
  const { runBasicAnalysis, basicAnalysisResult, loading } = useBasicAnalysis();

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
    runBasicAnalysis(singleSeq);
  };

  return {
    singleSeq,
    loading,
    basicAnalysisResult,
    handleInputChange,
    handleSelectChange,
    handleClearSingleSeq,
    handleRunAnalysis
  }
}

export default useSingleSeqAnalysis;
