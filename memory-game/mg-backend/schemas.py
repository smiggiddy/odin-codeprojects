from pydantic import BaseModel


class CardBase(BaseModel):
    photo_id: int
    medium_url: str
    photo_url: str
    topic: str
    alt: str
    bad_match: bool


class CardCreate(CardBase):
    pass


class Card(CardBase):
    id: int

    class Config:
        from_attributes = True
