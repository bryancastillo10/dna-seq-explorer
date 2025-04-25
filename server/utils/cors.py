from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

def configure_cors(app: FastAPI):
	origins = [
		"http://localhost:5173"
	]

	app.add_middleware(
		CORSMiddleware,
		allow_origins=origins,     
        allow_credentials=True,
        allow_methods=["POST"],        
        allow_headers=["*"], 
		expose_headers=["X-filename","X-Message"]
	)