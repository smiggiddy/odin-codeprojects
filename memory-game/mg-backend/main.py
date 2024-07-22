from .ai import AI
from .test_data import data
from dotenv import load_dotenv
import json
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging
import requests
from random import shuffle
import os
from .photos import Pictures

from . import crud, models, schemas
from .database import SessionLocal, engine
from sqlalchemy.orm import Session

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

models.Base.metadata.create_all(bind=engine)


## DB Deps
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


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


@app.post("/ai-cards", response_model=schemas.Card)
def ai_cards(card: schemas.CardCreate, db: Session = Depends(get_db)):
    return crud.create_card(db=db, card=card)


@app.get("/cards")
def read_cards(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    cards = crud.get_cards(db, skip=skip, limit=limit)

    # return the items in a random order for the game
    shuffle(cards)
    return cards


@app.get("/load-data")
async def load_data():
    topics = ai.generate_topics()

    try:
        for item in topics:

            logger.info(item)
            picture_data = photos.search(item["topic"])

            card_json = ai.generate_card_json(picture_data, item)
            logger.info(card_json)

            r = requests.post(
                "http://127.0.0.1:8000/ai-cards",
                json=card_json,
                headers={"Content-Type": "application/json"},
            )
            logger.info(r.json())

        return {"success": "entered into the db"}

    except Exception as e:
        logger.error(e)
        return {"error": "uname to handle request"}
