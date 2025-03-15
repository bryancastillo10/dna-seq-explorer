from reportlab.pdfgen import canvas

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

pdf = canvas.Canvas();