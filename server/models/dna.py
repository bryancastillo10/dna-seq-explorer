from pydantic import BaseModel
from typing import Optional, Literal

class SingleSequence(BaseModel):
    sample_name: Optional[str] = None
    seq_type: Literal["DNA","RNA","Protein"]
    seq: str

class PairwiseSequence(BaseModel):
    seq_type: Literal["DNA","RNA","Protein"]
    seq_A_label: str
    seq_A: str 
    seq_B_label: str
    seq_B: str