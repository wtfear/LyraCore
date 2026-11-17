import uuid
from datetime import datetime, timezone
from sqlalchemy import Column, String, DateTime, ForeignKey, Text, JSON, Integer
from sqlalchemy.orm import relationship
from app.core.database import Base

class AgentRun(Base):
    __tablename__ = "agent_runs"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    tenant_id = Column(String, ForeignKey("tenants.id", ondelete="CASCADE"), nullable=False)
    agent_name = Column(String, nullable=False)  # e.g. "researcher", "auditor", "writer"
    status = Column(String, default="pending")    # pending, running, completed, failed
    prompt = Column(Text, nullable=False)
    output = Column(Text, nullable=True)
    metadata_json = Column(JSON, default=dict)
    tokens_used = Column(Integer, default=0)
    execution_time_ms = Column(Integer, default=0)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    tenant = relationship("Tenant", back_populates="agent_runs")
