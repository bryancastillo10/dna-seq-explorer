from fastapi import APIRouter, HTTPException, Depends

from models.dna import SingleSequence
from utils.validateSequence import validate_sequence
from service.basic_analysis.main_basic_analysis import analyze_sequence

analysisRoute = APIRouter()


# Routes
@analysisRoute.post("/basic",tags=["analysis"])
async def basic_sequence_analysis(data: SingleSequence):
    
    try:
        analysis_results = analyze_sequence(data)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    return {
        "message":"Basic Sequence Analysis is Successful",
        "data": analysis_results
    }


@analysisRoute.post("/advanced", tags=["analysis"])
async def advanced_sequence_analysis(data: SingleSequence):

    # Service Layer function call here
    sequence = data.seq

    return {
        "message":"Basic Sequence Analysis is Successful",
        "data": sequence
    }