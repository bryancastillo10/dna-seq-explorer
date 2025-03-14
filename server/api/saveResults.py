import os
import json
from datetime import datetime
from fastapi import APIRouter, HTTPException
from models.saveData import SaveSingleSeqResult, SavePairSeqResult

from pydantic import BaseModel

saveResultsRoute = APIRouter()

@saveResultsRoute.post("/single-seq", tags=["save_results"])
async def save_analysis_result(request: SaveSingleSeqResult):
	"""To save the results from single sequence analysis"""
	try:
		timestamp = datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
		file_name = f"Analysis Result_{request.feature}-{timestamp}.json"
		file_path = os.path.join(request.save_dir, file_name)

		with open(file_path, "w") as file:
			json.dump(request.dict(), file, indent=4)
        
		return {"message": f"{request.feature} analysis result saved", "file": file_name}

	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))

@saveResultsRoute.post("/pair-seq", tags=["save_results"])
async def save_pairwise_sequencing_result(request: SavePairSeqResult):
	"""To save the results from pairwise sequencing"""
	try:
		timestamp= datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
		file_name = f"Analysis Result_{request.feature}-{timestamp}.json"
		file_path = os.path.join(request.save_dir,file_name)

		with open(file_path, "w") as file:
			json.dump(request.dict(), file, indent=4)

		return {"message": f"{request.feature} analysis result saved", "file": file_name}

	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))