from fastapi import FastAPI, Request
from detector import detect_occupancy_from_bytes

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Occupancy Detection API Running"}

@app.post("/detect")
async def detect(request: Request):

    image_bytes = await request.body()
    result = detect_occupancy_from_bytes(image_bytes)

    return {"status": result}