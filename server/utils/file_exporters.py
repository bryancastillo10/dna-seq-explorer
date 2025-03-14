import json
import io
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from docx import Document

from service.file_export.export_pdf import export_as_pdf_table

def export_as_plain(data: dict):
	"""Export as plain text string"""
	return json.dump(data, indent=4)



def export_as_docx(data):
	document = Document()
	document.add_paragraph(json.dumps(data,indent =4))
	buffer = io.BytesIO()
	document.save(buffer)
	docx_bytes = buffer.getvalue()
	buffer.close()
	return docx_bytes

Extensions = {
	"plain": export_as_plain,
	"pdf": export_as_pdf_table,
	"docx": export_as_docx
}