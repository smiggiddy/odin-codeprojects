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
    alt: str
    medium_url: str
    photo_id: int
    photo_url: str
    bad_match: bool


class AI:
    genai = genai.configure(api_key=GEMINI_API_KEY)

    def generate_topics(self, topics) -> list:
        model = genai.GenerativeModel(
            "gemini-1.5-flash",
            generation_config={
                "response_mime_type": "application/json",
                "response_schema": list[Topics],
            },
        )

        prompt = f"""
          Return 12 items for a toddler aged 2 to 3 years old to choose from in a memory game. e.g. "ball", "car" . Don't use my examples words. As this prompt may be called at different times, the potential items sent should be random that the ods of you sending the same thing multiple times is reduced. Previously returned topics are found in this array {topics} and do not return a topic found in this list. 
          """
        response = model.generate_content(prompt).text

        return json.loads(response)

    def generate_card_json(self, photo_payload, topic):
        prompt = f"""
        This JSON payload will be analyzed for a toddler matching game. Your job is to identify which object within the payload that best matches the topic "{topic}".
        Define a "best match" as containing the keywords from the topic within the "alt" field of the image object that would be appropriate for a toddler's matching game. a "best match" should also be the primary and only subject in the photo, if there are other items in the alt text then that's determined to be a bad match and should not be selected. For example, "cat sitting on a book" would be a bad match and should not be selected, where "black cat" is a good match. 

        if its determine the alt text is not a great match for the toddler game set the `bad_match` to True and for best matches set to False
        {photo_payload} 
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
