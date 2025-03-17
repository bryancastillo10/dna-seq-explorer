from typing import Dict, Any, Optional
from reportlab.platypus import SimpleDocTemplate, Spacer, Table, TableStyle, Paragraph
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor

from lib.pdf_base_template import write_canvas_header, write_canvas_footer
from lib.prepare_result import PrepareResults

table_custom_style= [
    ('BACKGROUND', (0, 0), (-1, 0), HexColor("#009688")),
    ('TEXTCOLOR', (0, 0), (-1, 0), HexColor("#F4F3F2")),
    ('FONTSIZE', (0, 0), (-1, 0), 14),
    ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
    ('BACKGROUND', (0, 1), (-1, -1), HexColor("#FFECD1")),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#C7C7C7"))
]

def generate_pdf_table(
		feature_title: str, 
		results: Dict[str, Any],
		mapping: Dict[str, str], 
		save_file: str,
		seq_label: Optional[str] = None, 
		seq_A_label: Optional[str] = None, 
		seq_B_label: Optional[str] = None, 
	):
	"""Generate a PDF report with a structured table format, supporting both single and pairwise sequence labels."""

	processor = PrepareResults(results, mapping)
	processed_results = processor.to_nested_list()
	label_paragraph = processor.get_label_paragraph(seq_label, seq_A_label, seq_B_label)

	doc = SimpleDocTemplate(save_file, pagesize=letter)

	elements = []
	elements.append(Spacer(1, 80))

	elements.append(label_paragraph)
	elements.append(Spacer(1, 20))

	table = Table(processed_results, colWidths=[150, 350], hAlign="LEFT")
	table.setStyle(TableStyle(table_custom_style))

	elements.append(table)

	doc.build(
		elements,
		onFirstPage=lambda c, d: (write_canvas_header(c, d, feature_title), write_canvas_footer(c, d)),
		onLaterPages=write_canvas_footer
	)
