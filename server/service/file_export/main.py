from models.exportData import ExportSingleSeqResult, ExportPairSeqResult
from pathlib import Path

from service.file_export.pdf import export_basic_advanced, export_pairwise

def export_pdf(request: ExportSingleSeqResult | ExportPairSeqResult):
	"""To export as pdf"""
	feature = request.feature
	results = request.results
	save_path = Path(request.save_dir)

	if feature in ["basic","advanced"]:
		seq_label = request.seq_label
		save_file = save_path / f"{seq_label}.pdf"
		export_basic_advanced(results, seq_label, save_file)

	elif feature in ["dotplot", "local", "global"]:
		seq_A_label = request.seq_A_label
		seq_B_label = request.seq_B_label
		save_file = save_path / f"{seq_A_label}_vs_{seq_B_label}.pdf"
		export_pairwise(results, seq_A_label, seq_B_label, save_file)
	else:
		raise ValueError(f"Unsupported feature: {feature}")

