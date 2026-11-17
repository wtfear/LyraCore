from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime

class AgentRunCreate(BaseModel):
    agent_name: str
    prompt: str
    metadata: Optional[Dict[str, Any]] = None

class AgentRunResponse(BaseModel):
    id: str
    tenant_id: str
    agent_name: str
    status: str
    prompt: str
    output: Optional[str] = None
    tokens_used: int
    execution_time_ms: int
    created_at: datetime

    class Config:
        from_attributes = True
