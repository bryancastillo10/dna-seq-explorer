from fastapi import APIRouter, HTTPException, Depends

from models.dna import PairwiseSequence
from utils.validateSequence import validate_sequence

sequencingRoute = APIRouter()

@sequencingRoute.post("/dotplot", tags=["sequencing"])
async def dotplot_alignment(data: PairwiseSequence):
    return

@sequencingRoute.post("/local", tags=["sequencing"])
async def local_alignment(data:PairwiseSequence):
    return

@sequencingRoute.post("/global", tags=["sequencing"])
async def global_alignment(data: PairwiseSequence):
    return