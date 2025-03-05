from fastapi import APIRouter, HTTPException

from models.dna import SingleSequence
from utils.validateSequence import validate_sequence

from service.basic_analysis.main_basic_analysis import analyze_sequence
from service.advanced_analysis.main_advanced_analysis import all_dna_analysis

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
        "sampleLabel": data.sample_name,
        "data": analysis_results
    }


@analysisRoute.post("/advanced", tags=["analysis"])
async def advanced_sequence_analysis(data: SingleSequence):
    analysis_result = all_dna_analysis(data)
    return {
        "message": "Advanced Sequence Analysis is Successful",
        "sampleLabel": data.sample_name,
        "data": data.seq,
        "codonUsage": analysis_result["codon_usage"],
        "prediction": analysis_result["prediction"]
    }