from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "LyraCore Multi-Tenant AI Engine"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "lyra_super_secret_jwt_key_32_characters_minimum_here"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    
    # Database
    DATABASE_URL: str = "postgresql+asyncpg://lyra_user:lyra_password@localhost:5432/lyra_db"
    
    # Redis
    REDIS_URL: str = "redis://localhost:6379/0"
    
    # Multi-tenancy
    DEFAULT_TENANT_ID: str = "default-org"
    
    # Billing Webhooks
    STRIPE_API_KEY: Optional[str] = None
    STRIPE_WEBHOOK_SECRET: Optional[str] = None
    RAZORPAY_KEY_ID: Optional[str] = None
    RAZORPAY_KEY_SECRET: Optional[str] = None

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
