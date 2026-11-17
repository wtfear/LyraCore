from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert data["multi_tenant"] is True

def test_list_agents():
    response = client.get("/api/v1/agents/agents")
    assert response.status_code == 200
    agents = response.json()
    assert len(agents) >= 3
    assert any(a["name"] == "researcher" for a in agents)

def test_trigger_agent_run():
    payload = {
        "agent_name": "researcher",
        "prompt": "Evaluate enterprise compliance metrics for multi-tenant isolation."
    }
    response = client.post("/api/v1/agents/runs", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "completed"
    assert data["agent_name"] == "researcher"
    assert "tokens_used" in data
