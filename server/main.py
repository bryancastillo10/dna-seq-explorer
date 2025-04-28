import os

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles 
from dotenv import load_dotenv

from api.singleSequence import analysisRoute
from api.pairSequence import sequencingRoute
from api.exportResults import exportResultsRoute

from utils.cors import configure_cors

load_dotenv()
app = FastAPI(name="DNASeq-Explorer Server")

configure_cors(app)

app.include_router(analysisRoute, prefix="/analysis")
app.include_router(sequencingRoute, prefix="/sequencing")
app.include_router(exportResultsRoute, prefix="/export")

ENV = os.getenv("ENV","development")

if ENV == "production":
    app.mount("/", StaticFiles(directory="../client/dist", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))

    uvicorn.run(app, host="0.0.0.0", port= port)
    print(f"Server is listening on port {port}")