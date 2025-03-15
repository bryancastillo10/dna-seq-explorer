from reportlab.pdfgen import canvas
from drawRuler import drawRuler

from reportlab.lib.colors import HexColor
#Contents
file_name = 'ExampleDoc.pdf'
doc_title= "The Document Title"
title="DNA Seq Explorer"
subTitle="Simplified Tool for Biological Sequence Analysis & Sequencing"

textLines = [
	'Results',
	'Transcription',
	'Translation'
]





pdf = canvas.Canvas(file_name);
pdf.setTitle(doc_title);
drawRuler(pdf)

# Title
pdf.setFillColor(HexColor("#009688"))
pdf.setFont('Times-Bold',28)
pdf.drawCentredString(270,770,title)

pdf.setFont('Times-Roman',18)
pdf.drawCentredString(290,720,subTitle)

# Line
pdf.line(30,710, 550, 710)

# Begin a Text Object
text = pdf.beginText(40,680)
text.setFont('Times-Roman',16)
text.setFillColor(HexColor("#001524"))

for line in textLines:
	text.textLine(line)

pdf.drawText(text)
pdf.save()