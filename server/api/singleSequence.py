from fastapi import APIRouter, HTTPException, Depends

from models.dna import SingleSequence
from utils.validateSequence import validate_sequence

analysisRoute = APIRouter()

# Validation Function
def validated_sequence(data: SingleSequence) -> SingleSequence:
    sequence, seq_type = data.seq, data.seq_type
    
    try:
        is_valid = validate_sequence(sequence, seq_type)
    except ValueError as e:
        raise HTTPException(status_code=400, detail= str(e))

    if not is_valid:
        raise HTTPException(
            status_code=400, 
            detail="Invalid sequence, please make sure it matches the sequence type"
        )
    return data


# Routes
@analysisRoute.post("/basic",tags=["analysis"])
async def basic_sequence_analysis(data: SingleSequence = Depends(validated_sequence)):
    
    # Service Layer function call here
    sequence = data.seq

    return {
        "message":"Basic Sequence Analysis is Successful",
        "data": sequence
    }


@analysisRoute.post("/advanced", tags=["analysis"])
async def advanced_sequence_analysis(data: SingleSequence = Depends(validated_sequence)):

    # Service Layer function call here
    sequence = data.seq

    return {
        "message":"Basic Sequence Analysis is Successful",
        "data": sequence
    }