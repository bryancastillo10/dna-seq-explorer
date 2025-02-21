import os

from fastapi import FastAPI 

from api.singleSequence import analysisRoute
from api.pairSequence import sequencingRoute

from dotenv import load_dotenv

load_dotenv()
app = FastAPI(name="DNASeq-Explorer Server")

app.include_router(analysisRoute, prefix="/analysis")
app.include_router(sequencingRoute, prefix="/sequencing")

if __name__ == "__main__":
    import uvicorn
    port = os.getenv("PORT", 8000)

    uvicorn.run(app, host="0.0.0.0", port= int(port))
    print(f"Server is listening on port ${port}")