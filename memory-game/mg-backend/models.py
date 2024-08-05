from sqlalchemy import Boolean, Column, Integer, String

from .database import Base


class Card(Base):
    __tablename__ = "card"

    id = Column(Integer, primary_key=True)
    photo_id = Column(Integer, unique=True)
    medium_url = Column(String)
    photo_url = Column(String)
    topic = Column(String, index=True)
    bad_match = Column(Boolean)
    alt = Column(String)
