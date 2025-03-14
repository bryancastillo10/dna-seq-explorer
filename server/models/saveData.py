from pydantic import BaseModel
from typing import Dict, Optional, Literal

class SaveResultsRequest(BaseModel):
	feature: Literal["basic","advanced","dotplot","local","global"]
	seq_A_label: str
	seq_B_label: Optional[str] = None
	results: Dict[str, str]
	output_format: Literal["html","plain"]
	custom_css: Optional[str] = None