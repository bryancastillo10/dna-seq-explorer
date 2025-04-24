from fastapi.responses import StreamingResponse
from io import StringIO, BytesIO
import csv
import os

from service.file_export.pdf import export_basic_advanced, export_pairwise
from service.file_export.constants import features_key
from utils.export_preparation import prepare_download_filename

def export_csv(request):
    results = request.results
    output = StringIO()
    writer = csv.writer(output)

    if isinstance(results, list) and results and isinstance(results[0], dict):
        fieldnames = list(results[0].keys())
        dict_writer = csv.DictWriter(output, fieldnames=fieldnames)
        dict_writer.writeheader()
        dict_writer.writerows(results)
    elif isinstance(results, dict):
        writer.writerow(["Parameters", "Value"])
        for key, value in results.items():
            writer.writerow([key, value])
    else:
        output.write(str(results))

    output.seek(0)
    filename = prepare_download_filename(request, "csv")
    return StreamingResponse(output, media_type="text/csv", headers={
        "Content-Disposition": f"attachment; filename={filename}"
    })


def export_plain(request):
    results = request.results
    output = StringIO()

    if isinstance(results, dict):
        for key, value in results.items():
            output.write(f"{key}: {value}\n")
    elif isinstance(results, list):
        for item in results:
            output.write(f"{item}\n")
    else:
        output.write(str(results))

    output.seek(0)
    filename = prepare_download_filename(request, "txt")
    return StreamingResponse(output, media_type="text/plain", headers={
        "Content-Disposition": f"attachment; filename={filename}"
    })


def export_pdf(request):
    feature_title = features_key.get(request.feature)
    if not feature_title:
        raise ValueError(f"Unsupported feature: {request.feature}")

    filename = prepare_download_filename(request, "pdf")
    buffer = BytesIO()

    print(filename)

    if request.feature in ["basic", "advanced"]:
        export_basic_advanced(feature_title, request.results, request.seq_label, buffer)
    elif request.feature in ["dotplot", "local", "global"]:
        export_pairwise(feature_title, request.results, request.seq_A_label, request.seq_B_label, buffer)
    else:
        raise ValueError(f"Unsupported feature: {request.feature}")

    buffer.seek(0)
    return StreamingResponse(buffer, media_type="application/pdf", headers={
        "Content-Disposition": f"attachment; filename={filename}"
    })