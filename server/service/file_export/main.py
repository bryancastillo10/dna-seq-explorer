import os
from datetime import datetime

from models.saveData import SaveSingleSeqResult
from utils.file_exporters import Extensions

def save_exported_result(request: SaveSingleSeqResult):
	"""Export the provided data using the provided ouput_format"""
	output_format = request.output_format
	if output_format not in Extensions:
		raise ValueError(f"Unsupported output format of {ouput_format}")


	timestamp = datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
	extension_mapping = {
		"plain":".txt",
		"html":".html",
		"pdf":".pdf",
		"docx":".docx"
	}

	ext = extension_mapping.get(output_format,".json")
	file_name = f"Analysis_Report_{request.feature}-{timestamp}{ext}"
	file_path = os.path.join(request.save_dir, file_name)

	exported_content = Extensions[output_format](request.results)

	mode = "w"
	if output_format in ["pdf","docx"]:
		mode ="wb"
		if isinstance(exported_content, str):
			exported_content = exported_content.encode("utf-8")

	with open(file_path, mode) as f:
		f.write(exported_content)

	return file_name