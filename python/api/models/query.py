from typing import Annotated

from fastapi import Depends, FastAPI, HTTPException, Query
from sqlmodel import Field, Session, SQLModel, create_engine, select
from models.setting import SessionDep


class SearchQuery(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    query_text: str
    query_response: str

    def to_dict(self):
        return {
            "id": self.id,
            "query_text": self.query_text,
            "query_response": self.query_response,
        }
