from fastapi import APIRouter, Depends, HTTPException
from typing import List
from app.schemas.agent import AgentRunCreate, AgentRunResponse
from app.services.agent_workflow import AgentWorkflowService
import uuid
from datetime import datetime, timezone

router = APIRouter()

@router.post("/runs", response_model=AgentRunResponse)
async def trigger_agent_run(payload: AgentRunCreate, tenant_id: str = "default-tenant"):
    """
    Trigger an autonomous AI agent workflow for the current tenant.
    """
    result = await AgentWorkflowService.execute_agent(
        agent_name=payload.agent_name,
        prompt=payload.prompt,
        metadata=payload.metadata
    )
    
    return AgentRunResponse(
        id=str(uuid.uuid4()),
        tenant_id=tenant_id,
        agent_name=payload.agent_name,
        status=result["status"],
        prompt=payload.prompt,
        output=result["output"],
        tokens_used=result["tokens_used"],
        execution_time_ms=result["execution_time_ms"],
        created_at=datetime.now(timezone.utc)
    )

@router.get("/agents")
async def list_available_agents():
    """
    List available multi-tenant AI agents configured in LyraCore.
    """
    return [
        {"name": "researcher", "description": "Autonomous deep web & vector documentation researcher", "status": "active"},
        {"name": "auditor", "description": "Contract & financial regulatory compliance auditor", "status": "active"},
        {"name": "scheduler", "description": "Multi-party calendar & meeting coordination agent", "status": "active"},
        {"name": "copywriter", "description": "SEO & marketing multi-channel copy generator", "status": "active"}
    ]
