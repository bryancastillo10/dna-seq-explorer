from pydantic import BaseModel
from typing import Dict, Optional, Literal, Any


class ExportSingleSeqResult(BaseModel):
	feature: Literal["basic","advanced"]
	seq_label: Optional[str] = None
	results: Dict[str, Any]
	output_format: Literal["csv","pdf","plain"]

class ExportPairSeqResult(BaseModel):
	feature: Literal["dotplot","local","global"]
	seq_A_label: Optional[str] = None
	seq_B_label: Optional[str] = None
	results: Dict[str, Any]
	output_format: Literal["csv","pdf","plain"]