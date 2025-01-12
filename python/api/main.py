from typing import Union

from contextlib import asynccontextmanager
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from sqlalchemy import select

from models.setting import create_db_and_tables, SessionDep, Annotated
from models.query import SearchQuery
from services.llm import LlmSearch


@asynccontextmanager
async def lifespan(app):
    create_db_and_tables()
    yield


app = FastAPI(lifespan=lifespan)
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/query_list/")
async def read_search_queries(
    session: SessionDep,
    offset: int = 0,
    limit: Annotated[int, Query(le=100)] = 100,
) -> list[SearchQuery]:
    search_query = session.exec(select(SearchQuery).offset(offset).limit(limit)).all()
    result = []
    for s_query in search_query:
        result.append(s_query[0].to_dict())
    return result


@app.post("/query/")
def save_search_queries(
    session: SessionDep, search_query: SearchQuery
) -> list[SearchQuery]:

    search_client = LlmSearch()
    search_result = search_client.query_llm(search_query.query_text)

    search_query.query_response = search_result
    session.add(search_query)
    session.commit()
    session.refresh(search_query)

    return JSONResponse(content=jsonable_encoder(search_query), status_code=200)
