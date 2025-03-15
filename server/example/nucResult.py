from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Spacer, Paragraph
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from datetime import datetime

data = {
    "transcription": "GCUACUAGCAGGGGCAGCAGCAUUCGAAUGCUGCGCUACUAGCAGGCUAAGUGCAGGAU",
    "reverseComplement": "ATCCTGCACTTAGCCTGCTAGTAGCGCAGCATTCGAATGCTGCTGCCCCTGCTAGTAGC",
    "gcContent": 56,
    "nucleotideFrequency": {
        "G": 19,
        "C": 14,
        "T": 11,
        "A": 15
    },
    "translatedSequence": "ATSRGSSIRMLRY*QAKCR"
}


key_mapping = {
    "transcription": "Transcription",
    "reverseComplement": "Reverse Complement",
    "gcContent": "GC Content (%)",
    "nucleotideFrequency": "Nucleotide Frequency",
    "translatedSequence": "Translated Sequence"
}


styles = getSampleStyleSheet()
body_style = styles["BodyText"]

main_table_data = [["Parameter", "Result"]]
nucleotide_freq_data = [["Nucleotide Frequency", ""]]

for key, value in data.items():
    if key == "nucleotideFrequency":
        for nucleotide, freq in value.items():
            nucleotide_freq_data.append([nucleotide, str(freq)])
    else:
        if key in ["transcription", "reverseComplement"]:
            value = Paragraph(str(value), body_style)
        else:
            value = str(value)

        display_key = key_mapping.get(key)
        main_table_data.append([display_key, value])

file_name = "AnalysisResult.pdf"
doc_title = "DNASeqExplorer Basic Analysis Result"
header_title = "DNA Seq Explorer"
header_subtitle = "Simplified Tool for Biological Sequence Analysis & Sequencing"

doc = SimpleDocTemplate(file_name, pagesize=letter)

def add_canvas_header(canvas, doc):
	canvas.setTitle(doc_title)
	canvas.setFillColor(HexColor("#001524"))
	canvas.drawImage("logo.png",100,740, width=40, height=40, mask="auto")
	canvas.setFont("Times-Bold", 28)
	canvas.drawCentredString(270, 750, header_title)
	canvas.setFont("Times-Roman", 18)
	canvas.drawCentredString(290, 700, header_subtitle)
	canvas.line(30,680, 550, 680)

	canvas.setFont("Times-Roman", 10)
	current_date = datetime.now().strftime("%Y-%m-%d")
	footer_text = f"Date: {current_date}"
	canvas.drawRightString(letter[0] - 30, 30, footer_text)

elements = []
elements.append(Spacer(1, 100))

main_table = Table(main_table_data, colWidths=[150, 350], hAlign="LEFT")
main_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor("#009688")),
    ('TEXTCOLOR', (0, 0), (-1, 0), HexColor("#F4F3F2")),
    ('FONTSIZE', (0, 0), (-1, 0), 14),
    ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
    ('BACKGROUND', (0, 1), (-1, -1), HexColor("#FFECD1")),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#C7C7C7"))
]))
elements.append(main_table)
elements.append(Spacer(1, 24))

freq_table = Table(nucleotide_freq_data, hAlign="LEFT")
freq_table.setStyle(TableStyle([
	('SPAN', (0, 0), (-1, 0)),
    ('BACKGROUND', (0, 0), (-1, 0), HexColor("#009688")),
    ('TEXTCOLOR', (0, 0), (-1, 0), HexColor("#F4F3F2")),
    ('FONTSIZE', (0, 0), (-1, 0), 14),
    ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
    ('BACKGROUND', (0, 1), (-1, -1), HexColor("#FFECD1")),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#C7C7C7"))
]))
elements.append(freq_table)

doc.build(elements, onFirstPage=add_canvas_header, onLaterPages=add_canvas_header)
