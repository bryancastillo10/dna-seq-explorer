from typing import Dict,Any
from reportlab.platypus import SimpleDocTemplate, Spacer

from reportlab.lib.pagesizes import letter

from service.file_export.constants import basic_nuc_mapping
from lib.write_pdfHeader import write_canvas_header

def export_basic_advanced(feature_title, results:Dict[str,Any], seq_label, save_file):
		""" Exporting the results of basic or advanced analysis feature """
		doc = SimpleDocTemplate(save_file, pagesize=letter)
		elements = []
		elements.append(Spacer(1, 100))

		doc.build(elements, onFirstPage=lambda c,d: write_canvas_header(c,d, feature_title))

def export_pairwise(feature_title, results:Dict[str,Any], seq_A_label, seq_B_label, save_file):
		""" Exporting the results of pairwise sequenceing feature """
		# The formatting of pdf output by reportlab