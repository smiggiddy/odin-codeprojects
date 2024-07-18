from dotenv import load_dotenv
import google.generativeai as genai
import json
import os
from .photos import Pictures
from pydantic import BaseModel, HttpUrl


load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")


class Topics(BaseModel):
    topic: str


class Results(BaseModel):
    topic: str
    medium_url: str
    photo_id: int
    photo_url: str
    bad_match: bool


class AI:
    genai = genai.configure(api_key=GEMINI_API_KEY)

    def generate_topics(self) -> list:
        model = genai.GenerativeModel(
            "gemini-1.5-flash",
            generation_config={
                "response_mime_type": "application/json",
                "response_schema": list[Topics],
            },
        )

        prompt = """
          Return 12 items for a toddler aged 2 to 3 to choose from in a memory game. 
          """
        response = model.generate_content(prompt).text

        return json.loads(response)

    def generate_card_json(self, photo_payload, topic):
        prompt = f"""
        This JSON payload will need to be analayzed. Your job is to pick the alt field with the best match for the toddler matching game. return the properties of the object
        {photo_payload} 
        and the original topic is {topic}. If the alt text and topic are a bad match set the bad_match bool.
        """

        model = genai.GenerativeModel(
            "gemini-1.5-flash",
            generation_config={
                "response_mime_type": "application/json",
                "response_schema": Results,
            },
        )

        r = model.generate_content(prompt).text

        return json.loads(r)
