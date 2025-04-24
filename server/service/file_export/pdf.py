from typing import Dict,Any
from io import BytesIO

from service.file_export.constants import basic_nuc_mapping, basic_protein_mapping, advanced_mapping
from service.file_export.constants import pairwise_mapping
from lib.pdf_table_template import generate_pdf_table

def export_basic_advanced(feature_title, results:Dict[str,Any], seq_label, buffer: BytesIO):
		""" Exporting the results of basic or advanced analysis feature """
		# Data Key Mapping Validation
		if any(key in results for key in basic_nuc_mapping):
			mapping = basic_nuc_mapping
		elif any(key in results for key in basic_protein_mapping):
			mapping = basic_protein_mapping
		elif any(key in results for key in advanced_mapping):
			mapping = advanced_mapping
		else:
			raise ValueError("Unknown result format: cannot determine mapping.")

		return generate_pdf_table(feature_title, results, mapping, buffer, seq_label)

def export_pairwise(feature_title, results:Dict[str,Any], seq_A_label, seq_B_label, buffer: BytesIO):
		""" Exporting the results of pairwise sequenceing feature """
		if any(key in results for key in pairwise_mapping):
			mapping = pairwise_mapping
			generate_pdf_table(
				feature_title= feature_title, 
				results= results, 
				buffer=buffer,
				mapping= pairwise_mapping,
				seq_A_label = seq_A_label,
				seq_B_label = seq_B_label
			)

		else: 
			generate_pdf_table(
				feature_title=feature_title,
				results=results,
				buffer=buffer,
				mapping=None,
				seq_A_label=seq_A_label,
				seq_B_label=seq_B_label
			)