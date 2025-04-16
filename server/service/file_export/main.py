from models.exportData import ExportSingleSeqResult, ExportPairSeqResult
from service.file_export.pdf import export_basic_advanced, export_pairwise
from service.file_export.constants import features_key
from utils.export_preparation import prepare_request_data

import csv


def export_pdf(request: ExportSingleSeqResult | ExportPairSeqResult):
	"""To export as pdf"""
	feature = request.feature
	results = request.results
	
	feature_title = features_key.get(feature)
	if not feature_title:
		raise ValueError(f"Unsupported feature: {feature}")

	save_file = prepare_request_data(request,"pdf")
	if feature in ["basic","advanced"]:
		export_basic_advanced(feature_title, results, request.seq_label, save_file)

	elif feature in ["dotplot","local","global"]:
		export_pairwise(feature_title, results, request.seq_A_label, request.seq_B_label)


def export_csv(request: ExportSingleSeqResult | ExportPairSeqResult):
	"""To export as csv"""
	save_file = prepare_request_data(request,"csv")
	results = request.results

	with open(save_file, "w", newline="") as csvfile:
		if isinstance(results, list) and results and isinstance(results[0], dict):
			fieldnames = list(results[0].keys())
			writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
			writer.writeheader()
			write.writerows(results)
		elif isinstance(results, dict):
			writer = csv.writer(csvfile)
			writer.writerow(["Parameters","Value"])
			for key, value in results.items():
				writer.writerow([key, value])
		else:
			csvfile.write(str(results))


def export_plain(request: ExportSingleSeqResult | ExportPairSeqResult):
	"""To export as txt file"""
	save_file = prepare_request_data(request,"txt")
	results = request.results

	with open(save_file, "w") as txtfile:
		if isinstance(results, dict):
			for key, value in results.items():
				txtfile.write(f"{key}: {value} \n")
		elif isinstance(results, list):
			for item in results:
				txtfile.write(f"{item} \n")
		else:
			txtfile.write(str(results))