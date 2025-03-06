import numpy as np
from fastapi import APIRouter, HTTPException

from models.dna import PairwiseSequence
from service.basic_analysis.bioseq import BioSeq

# DotPlot
from service.dotplot.dotmatrix import DotMatrix

# Local Pairwise Alignment
from service.local_alignment.smith_waterman_algorithm import SmithWatermanAlgorithm
from service.local_alignment.sw_scoring import SWScoringSystem

# Global Pairwise Alignment
from service.global_alignment.needleman_wunsch_algorithm import NeedlemanWunschAlgorithm
from service.global_alignment.nw_scoring import NWScoringSystem

sequencingRoute = APIRouter()

@sequencingRoute.post("/dotplot", tags=["sequencing"])
async def dotplot_alignment(data: PairwiseSequence):
    try:
        seq_A = BioSeq(seq= data.seq_A, seq_type= data.seq_type, label=data.seq_A_label)
        seq_B = BioSeq(seq= data.seq_B, seq_type= data.seq_type, label= data.seq_B_label)


        empty_matrix = np.empty((0,0), dtype=str)
        dot_matrix = DotMatrix(empty_matrix, data.seq_A, data.seq_B)
        result = dot_matrix.calculate_dotmatrix(data.seq_A_label, data.seq_B_label)
        return result

    except ValueError as ve:
        raise HTTPException(status_code=400, detail= str(ve))

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@sequencingRoute.post("/local", tags=["sequencing"])
async def local_alignment(data:PairwiseSequence):
    try:
        seq_A = BioSeq(seq= data.seq_A, seq_type= data.seq_type, label=data.seq_A_label)
        seq_B = BioSeq(seq= data.seq_B, seq_type= data.seq_type, label= data.seq_B_label)
    

        sw_algo = SmithWatermanAlgorithm(scoring_sys= SWScoringSystem(),
                                        seqA = data.seq_A,
                                        seqB= data.seq_B
    )

        aligned_seq_A, aligned_seq_B = sw_algo.seq_alignment(data.seq_A, data.seq_B)

        similarity = sw_algo.calc_similarity()

        return {
            "alignedSeqA": aligned_seq_A,
            "alignedSeqALabel": data.seq_A_label,
            "alignedSeqB": aligned_seq_B,
            "alignedSeqBLabel": data.seq_B_label,
            "similarity": similarity
        }

    except ValueError as ve:
        raise HTTPException(status_code=400, detail= str(ve))

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@sequencingRoute.post("/global", tags=["sequencing"])
async def global_alignment(data: PairwiseSequence):
    try:
        seq_A = BioSeq(seq= data.seq_A, seq_type= data.seq_type, label=data.seq_A_label)
        seq_B = BioSeq(seq= data.seq_B, seq_type= data.seq_type, label= data.seq_B_label)

        nw_algo = NeedlemanWunschAlgorithm(scoring_sys = NWScoringSystem(), 
                                        seqA = data.seq_A,
                                        seqB = data.seq_B 
        )
        aligned_seq_A, aligned_seq_B = nw_algo.seq_alignment(data.seq_A, data.seq_B)

        similarity = nw_algo.calc_similarity()

        return {
            "alignedSeqA": aligned_seq_A,
            "alignedSeqALabel": data.seq_A_label,
            "alignedSeqB": aligned_seq_B,
            "alignedSeqBLabel": data.seq_B_label,
            "similarity": similarity
        }

    except ValueError as ve:
        raise HTTPException(status_code=400, detail= str(ve))

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
