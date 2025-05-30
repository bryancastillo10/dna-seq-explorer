import os
import json
from datetime import datetime
from fastapi import APIRouter, HTTPException

from models.exportData import ExportSingleSeqResult, ExportPairSeqResult
from service.file_export.main import export_pdf, export_csv, export_plain

exportResultsRoute = APIRouter()

@exportResultsRoute.post("/single-seq", tags=["export_results"])
async def save_analysis_result(request: ExportSingleSeqResult):
	"""To save the results from single sequence analysis"""
	try:
		match request.output_format:
			case "pdf":
				return export_pdf(request)

			case "csv":
				return export_csv(request)

			case "plain":
				return export_plain(request)

	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))

@exportResultsRoute.post("/pair-seq", tags=["export_results"])
async def save_pairwise_sequencing_result(request: ExportPairSeqResult):
	"""To save the results from pairwise sequencing"""
	try:
		match request.output_format:
			case "pdf":
				return export_pdf(request)

			case "csv":
				return export_csv(request)

			case "plain":
				return export_plain(request)

	except Exception as e:
		raise HTTPException(status_code=500, detail=str(e))