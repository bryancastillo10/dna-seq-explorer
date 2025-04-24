from models.exportData import ExportSingleSeqResult, ExportPairSeqResult
from pathlib import Path
from datetime import datetime


def get_timestamp():
	timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
	return timestamp

def get_seq_label(request:ExportSingleSeqResult | ExportPairSeqResult):
	feature = request.feature
	
	if feature in ["basic","advanced"]:
		return request.seq_label

	elif feature in ["dotplot","local","global"]:
		return request.seq_A_label, request.seq_B_label
	else:
		raise ValueError(f"Unsupported feature: {feature}")

def prepare_download_filename(request, ext: str):
	""" Utility function to prepare the filename """
	timestamp = get_timestamp()
	feature = request.feature

	if feature in ["basic","advanced"]:
		filename = f"{feature}_{request.seq_label.replace(' ','_')}_{timestamp}.{ext}"
	elif feature in ["dotplot","local","global"]:
		filename = f"{feature}_{request.seq_A_label}_vs_{request.seq_B_label}_{timestamp}.{ext}"
	else:
		raise ValueError(f"Unsupported feature: {feature}")

	return filename