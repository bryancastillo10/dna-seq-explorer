from fastapi import APIRouter, HTTPException

from models.dna import PairwiseSequence

from service.dotplot.main import perform_dotplot_alignment
from service.local_alignment.main import perform_local_alignment
from service.global_alignment.main import perform_global_alignment

sequencingRoute = APIRouter()

@sequencingRoute.post("/dotplot", tags=["sequencing"])
async def dotplot_alignment(data: PairwiseSequence):
    try:
        align_result = perform_dotplot_alignment(data)

    except ValueError as ve:
        raise HTTPException(status_code=400, detail= str(ve))

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return {
        "message": "Dotplot Alignment is successful",
        "data": align_result
    }

@sequencingRoute.post("/local", tags=["sequencing"])
async def local_alignment(data:PairwiseSequence):
    try:
        align_result = perform_local_alignment(data)

    except ValueError as ve:
        raise HTTPException(status_code=400, detail= str(ve))

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return {
        "message": "Local Alignment is successful",
        "data": {
            "seqALabel": data.seq_A_label,
            "alignedSeqA": align_result["aligned_seq_A"],
            "seqBLabel": data.seq_B_label,
            "alignedSeqB":  align_result["aligned_seq_B"],
            "similarity": align_result["similarity"]
            }
        }


@sequencingRoute.post("/global", tags=["sequencing"])
async def global_alignment(data: PairwiseSequence):
    try:
        align_result = perform_global_alignment(data)

    except ValueError as ve:
        raise HTTPException(status_code=400, detail= str(ve))

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return {
       "message": "Global Alignment is successful",
        "data": {
            "seqALabel": data.seq_A_label,
            "alignedSeqA": align_result["aligned_seq_A"],
            "seqBLabel": data.seq_B_label,
            "alignedSeqB":  align_result["aligned_seq_B"],
            "similarity": align_result["similarity"]
        }
    }
