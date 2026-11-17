from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.v1.api import api_router

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url=f"{settings.API_V1_STR}/docs",
    description="Sovereign Multi-Tenant AI SaaS Foundation & Autonomous Agent Runtime"
)

# Set all CORS enabled origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health", tags=["system"])
async def health_check():
    return {
        "status": "healthy",
        "service": "LyraCore API",
        "multi_tenant": True,
        "version": "1.0.0"
    }

app.include_router(api_router, prefix=settings.API_V1_STR)
