from models.exportData import ExportSingleSeqResult, ExportPairSeqResult
from pathlib import Path
from datetime import datetime

from service.file_export.pdf import export_basic_advanced, export_pairwise
from service.file_export.constants import features_key

def get_timestamp():
	timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
	return timestamp

def export_pdf(request: ExportSingleSeqResult | ExportPairSeqResult):
	"""To export as pdf"""
	feature = request.feature
	results = request.results
	save_path = Path(request.save_dir)

	feature_title = features_key.get(feature)
	if not feature_title:
		raise ValueError(f"Unsupported feature: {feature}")

	if feature in ["basic","advanced"]:
		seq_label = request.seq_label
		timestamp = get_timestamp()
		save_file = str(save_path / f"{feature}_{seq_label}_{timestamp}.pdf")
		export_basic_advanced(feature_title,results, seq_label, save_file)

	elif feature in ["dotplot", "local", "global"]:
		seq_A_label = request.seq_A_label
		seq_B_label = request.seq_B_label
		timestamp = get_timestamp()
		save_file = str(save_path / f"{feature}_{seq_A_label}_vs_{seq_B_label}_{timestamp}.pdf")
		export_pairwise(feature_title, results, seq_A_label, seq_B_label, save_file)
	else:
		raise ValueError(f"Unsupported feature: {feature}")