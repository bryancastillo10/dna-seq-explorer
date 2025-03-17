from reportlab.lib.colors import HexColor

def write_canvas_header(canvas, doc, feature_title):
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
	canvas.drawCentredString(320,680, feature_title)
	canvas.line(30,660, 550, 660)