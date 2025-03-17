from datetime import datetime
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter

def write_canvas_header(canvas, doc, feature_title):
	""" PDF file header"""
	doc_title = "DNASeqExplorer Analysis Result"
	header_title = "DNA Seq Explorer"
	header_subtitle = "Simplified Tool for Biological Sequence Analysis & Sequencing"


	canvas.setTitle(doc_title)
	canvas.setFillColor(HexColor("#001524"))
	canvas.drawImage("lib/logo.png",100,740, width=40, height=40, mask="auto")
	canvas.setFont("Times-Bold", 28)
	canvas.drawCentredString(270, 750, header_title)
	canvas.setFont("Times-Roman", 18)
	canvas.drawCentredString(290, 700, header_subtitle)
	canvas.drawCentredString(320,670, feature_title)
	canvas.line(30,660, 550, 660)

def write_canvas_footer(canvas, doc):
    """PDF file footer"""

    width, height = letter
    current_date = datetime.now().strftime("%Y-%m-%d")

    footer_text = f"Date: {current_date} | Page {canvas.getPageNumber()}"
    
    canvas.setFont("Times-Roman", 10)
    canvas.drawRightString(width - 30, 30, footer_text)  # Align to the right