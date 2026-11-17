from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class TenantBase(BaseModel):
    name: str
    slug: str
    plan: Optional[str] = "starter"

class TenantCreate(TenantBase):
    pass

class TenantResponse(TenantBase):
    id: str
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True
