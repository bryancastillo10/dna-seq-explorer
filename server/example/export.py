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

# Initial Set Up
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

# Table
data =[
	['Dedicated Hosting', 'VPS Hosting', 'Sharing','Domains'],
	['$200/month','$100/month','$20/month','$50/month'],
	['Paid Domain','Paid Domain','Free Domain','Free Domain'],
	['2GB DDR2','20 GB Disk Space','Unlimited Emails','2 GB DDR2']
]

from reportlab.platypus import SimpleDocTemplate

from reportlab.lib.pagesizes import letter

pdf = SimpleDocTemplate(
	file_name,
	pagesize=letter
)

from reportlab.platypus import Table
from reportlab.platypus import TableStyle
from reportlab.lib import colors

table = Table(data)
style = TableStyle([
	('BACKGROUND',(0,0),(3,0),colors.green),
	('TEXTCOLOR',(0,0),(-1,0), colors.whitesmoke),
	('FONTSIZE',(0,0),(-1,0),14),
	('BOTTOMPADDING', (0,0),(-1,0),12),
	('BACKGROUND',(0,1),(-1,-1),colors.beige)
])

table.setStyle(style)

elements = []
elements.append(table)
pdf.build(elements)


# pdf.save()