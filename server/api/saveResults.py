from fastapi import APIRouter, HTTPException
from models.saveData import SaveResultsRequest

saveResultsRoute = APIRouter()

#Routes
@saveResultsRoute.post("/", tags=["results"])
async def save_results(data: str):

	return {
		"sample": data
	}
	# if request.output_format.lower() not in ["html","plain"]:
	# 	raise HTTPException(status_code=400, detail="Unsupported output format. html or plain only")

	
	# if request.feature.lower() == "basic":
	# 	title = f"Basic Sequence Analysis Report for {request.sample_label}"
	# 	content_items = "".join(
    #         f"<li><strong>{key}:</strong> {value}</li>" for key, value in request.results.items()
    #     )

	# elif request.feature.lower() == "advanced":
	# 	title = f"Advanced Sequence Analysis Report for {request.sample_label}"
	# 	content_items = "".join(
    #         f"<li><em>{key}:</em> {value}</li>" for key, value in request.results.items()
    #     )
	# elif request.feature.lower() == "dotplot":
	# 	title = f"Dotplot Alignment Report for {request.sample_label}"
	# 	content_items = "".join(
    #         f"<li>{key}: {value}</li>" for key, value in request.results.items()
    #     )
	# elif request.feature.lower() == "local":
	# 	title = f"Local Alignment Report for {request.sample_label}"
	# 	content_items = "".join(
    #         f"<li>{key}: {value}</li>" for key, value in request.results.items()
    #     )
	# elif request.feature.lower() == "global":
	# 	title = f"Global Alignment Report for {request.sample_label}"
	# 	content_items = "".join(
    #         f"<li>{key}: {value}</li>" for key, value in request.results.items()
    #     )
	# else:
	# 	raise HTTPException(status_code=400, detail="Unsupported feature type.")


	# if request.output_format.lower() == "html":
	# 	css = request.custom_css if request.custom_css else "body { font-family: Arial, sans-serif; }"
	# 	html_content = f"""
    #     <html>
    #       <head>
    #         <style>
    #           {css}
    #         </style>
    #       </head>
    #       <body>
    #         <h1>{title}</h1>
    #         <ul>
    #           {content_items}
    #         </ul>
    #       </body>
    #     </html>
    #     """
	# 	stream = BytesIO(html_content.encode("utf-8"))
	# 	return StreamingResponse(
    #         stream,
    #         media_type="text/html",
    #         headers={"Content-Disposition": "attachment; filename=results.html"}
    #     )
	# else:  
	# 	text_content = f"{title}\n\n"
	# 	for key, value in request.results.items():
	# 		text_content += f"{key}: {value}\n"
	# 	stream = BytesIO(text_content.encode("utf-8"))
	# 	return StreamingResponse(
    #         stream,
    #         media_type="text/plain",
    #         headers={"Content-Disposition": "attachment; filename=results.txt"}
    #     )
