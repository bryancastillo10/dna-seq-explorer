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

def prepare_request_data(request:ExportSingleSeqResult | ExportPairSeqResult, ext: str):
	save_path = Path(request.save_dir)
	timestamp = get_timestamp()
	seq_label = get_seq_label(request)

	if request.feature in ["basic","advanced"]:
		file_name = f"{request.feature}_{seq_label}_{timestamp}.{ext}"

	elif request.feature in ["dotplot","local","global"]:
		seq_A_label, seq_B_label = seq_label
		file_name = f"{request.feature}_{seq_A_label}_vs_{seq_B_label}_{timestamp}.{ext}"
	else:
		raise ValueError(f"Unsupported feature: {feature}")

	return str(save_path/ file_name)