from fastapi import APIRouter, HTTPException

from models.dna import SingleSequence
from utils.validateSequence import validate_sequence

from service.basic_analysis.main_basic_analysis import analyze_sequence
from service.advanced_analysis.main_advanced_analysis import  all_ai_analysis_methods

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

    try: 
       analysis_results = all_ai_analysis_methods(data)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    return {
        "message": "Advanced Sequence Analysis is Successful",
        "sampleLabel": data.sample_name,
        "codonUsage": analysis_results["codon_usage"],
        "dnaType": analysis_results["dna_type_prediction"],
        "kingdomTaxa": analysis_results["kingdom_taxa_prediction"]
    }