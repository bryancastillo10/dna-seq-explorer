import numpy as np
from fastapi import APIRouter, HTTPException

from models.dna import PairwiseSequence
from service.dotplot.dotmatrix import DotMatrix
from utils.validateSequence import validate_sequence

sequencingRoute = APIRouter()

@sequencingRoute.post("/dotplot", tags=["sequencing"])
async def dotplot_alignment(data: PairwiseSequence):
    try:
        dummy_matrix = np.empty((0,0), dtype=str)
        dot_matrix = DotMatrix(dummy_matrix, data.seq_A, data.seq_B)
        result = dot_matrix.calculate_dotmatrix(data.seq_A_label, data.seq_B_label)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@sequencingRoute.post("/local", tags=["sequencing"])
async def local_alignment(data:PairwiseSequence):
    return

@sequencingRoute.post("/global", tags=["sequencing"])
async def global_alignment(data: PairwiseSequence):
    return