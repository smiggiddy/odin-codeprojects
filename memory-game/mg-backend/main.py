from .ai import AI
from .test_data import data
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging
import os
from .photos import Pictures

logger = logging.getLogger("uvicorn.error")
logger.setLevel(logging.DEBUG)
load_dotenv()

app = FastAPI()
ai = AI()

# IN HERE FOR LOCAL DEV
origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


PEXELS_API_KEY = os.getenv("PEXELS_API_KEY")
photos = Pictures(PEXELS_API_KEY)


@app.get("/")
async def read_main():
    return data
    # data = []
    #
    # topics = ai.generate_topics()
    #
    # try:
    #     for item in topics:
    #
    #         logger.info(item)
    #         picture_data = photos.search(item["topic"])
    #
    #         card_json = ai.generate_card_json(picture_data, item)
    #         logger.info(card_json)
    #
    #         data.append(card_json)
    #
    #     return data
    # except Exception as e:
    #     logger.error(e)
    #     return {"error": "uname to handle request"}
