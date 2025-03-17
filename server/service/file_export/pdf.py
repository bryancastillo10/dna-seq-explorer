from typing import Dict,Any

from service.file_export.constants import basic_nuc_mapping, basic_protein_mapping
from lib.pdf_table_template import generate_pdf_table

def export_basic_advanced(feature_title, results:Dict[str,Any], seq_label, save_file):
		""" Exporting the results of basic or advanced analysis feature """
		# Data Key Mapping Validation
		if any(key in results for key in basic_nuc_mapping):
			mapping = basic_nuc_mapping
		elif any(key in results for key in basic_protein_mapping):
			mapping = basic_protein_mapping
		else:
			raise ValueError("Unknown result format: cannot determine mapping.")

		return generate_pdf_table(feature_title, results, mapping, save_file)

def export_pairwise(feature_title, results:Dict[str,Any], seq_A_label, seq_B_label, save_file):
		""" Exporting the results of pairwise sequenceing feature """
		# The formatting of pdf output by reportlab