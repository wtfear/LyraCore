"use client";

import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Terminal, 
  Activity, 
  Server, 
  Database, 
  ArrowUpRight, 
  Zap, 
  CheckCircle2, 
  Users, 
  Lock, 
  ChevronRight,
  ExternalLink,
  Code2
} from "lucide-react";

interface TenantData {
  name: string;
  industry: string;
  tier: string;
  activeAgents: number;
  tokensProcessed: string;
  avgLatency: string;
  costSavings: string;
  recentLogs: Array<{ id: string; time: string; agent: string; action: string; status: "success" | "running" }>;
}

const TENANTS: Record<string, TenantData> = {
  apex: {
    name: "Apex Global Capital",
    industry: "Institutional Private Equity",
    tier: "Enterprise Sovereign (Dedicated RLS)",
    activeAgents: 14,
    tokensProcessed: "4,821,900 / mo",
    avgLatency: "94ms",
    costSavings: "$52,400 / mo",
    recentLogs: [
      { id: "log-1", time: "12:58:14", agent: "MarketArbitrage-v3", action: "Executed tick-level variance audit on 42 ticker symbols", status: "success" },
      { id: "log-2", time: "12:57:40", agent: "PortfolioRebalance", action: "Generated multi-currency liquidity risk model for LP distribution", status: "success" },
      { id: "log-3", time: "12:56:11", agent: "SEC-EdgarScraper", action: "Indexed 10-K filings with semantic vector embeddings", status: "success" },
      { id: "log-4", time: "12:55:02", agent: "DueDiligenceAgent", action: "Cross-referencing cap table records against Delaware registry", status: "running" },
    ]
  },
  sovereign: {
    name: "Sovereign Health Network",
    industry: "Healthcare & Clinical Trials",
    tier: "HIPAA Compliant Vault Tier",
    activeAgents: 8,
    tokensProcessed: "2,140,500 / mo",
    avgLatency: "112ms",
    costSavings: "$29,800 / mo",
    recentLogs: [
      { id: "log-5", time: "12:59:02", agent: "ClinicalTrialsAudit", action: "Screened 84 Phase-III trial eligibility criteria for cohort B", status: "success" },
      { id: "log-6", time: "12:57:19", agent: "HL7-FHIR-Parser", action: "De-identified 1,200 EHR records with zero PHI leakage", status: "success" },
      { id: "log-7", time: "12:54:33", agent: "ProtocolSentinel", action: "Verified IRB amendment concordance against FDA guidelines", status: "success" },
      { id: "log-8", time: "12:52:10", agent: "AdverseEventMonitor", action: "Scanning MedWatch notifications in real-time", status: "running" },
    ]
  },
  wtfear: {
    name: "WTFear Core Operations",
    industry: "AI Engineering & Retainer Ops",
    tier: "Root Cluster Administrator",
    activeAgents: 28,
    tokensProcessed: "12,940,000 / mo",
    avgLatency: "86ms",
    costSavings: "$148,000 / mo",
    recentLogs: [
      { id: "log-9", time: "12:59:45", agent: "SwarmCoordinator-Alpha", action: "Dispatched 6 sub-agents across Docker telemetry pipelines", status: "success" },
      { id: "log-10", time: "12:58:30", agent: "RepoSentinel-CI", action: "Verified automated test coverage across 14 sovereign microservices", status: "success" },
      { id: "log-11", time: "12:56:49", agent: "StripeWebhookWorker", action: "Reconciled recurring multi-tenant retainer billing accounts", status: "success" },
      { id: "log-12", time: "12:55:12", agent: "SecurityVulnerabilityScanner", action: "Full audit clean: 0 CVEs detected in production edge containers", status: "success" },
    ]
  }
};

export default function Home() {
  const [selectedTenantKey, setSelectedTenantKey] = useState<string>("apex");
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    setCurrentTime(new Date().toUTCString());
    const interval = setInterval(() => {
      setCurrentTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const tenant = TENANTS[selectedTenantKey];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md px-4 py-2 text-xs flex justify-between items-center text-slate-400">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-emerald-400 font-semibold tracking-wider">SOVEREIGN NETWORK OPERATIONAL</span>
          <span className="text-slate-600">|</span>
          <span className="hidden sm:inline">48 Active Enterprise Edge Nodes</span>
        </div>
        <div className="font-mono text-slate-400 text-[11px]">
          {currentTime || "SYS_CLOCK: SYNCHRONIZING"}
        </div>
      </div>

      {/* Navigation */}
      <header className="border-b border-slate-800/60 bg-slate-950/80 sticky top-0 z-50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 flex items-center justify-center shadow-lg shadow-purple-900/40 border border-purple-400/30">
              <Cpu className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                LYRA<span className="text-purple-400">CORE</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-500/40">
                  v2.4
                </span>
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400 font-medium">
            <a href="#features" className="hover:text-purple-300 transition-colors">Architecture</a>
            <a href="#cockpit" className="hover:text-purple-300 transition-colors">Multi-Tenant Cockpit</a>
            <a href="#agents" className="hover:text-purple-300 transition-colors">Autonomous Swarms</a>
            <a href="#security" className="hover:text-purple-300 transition-colors">RLS Isolation</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/wtfear/LyraCore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>wtfear/LyraCore</span>
              <ArrowUpRight className="h-3 w-3 text-slate-500" />
            </a>
            <a
              href="#cockpit"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-900/30 transition-all hover:shadow-purple-700/50"
            >
              <Activity className="h-3.5 w-3.5" />
              <span>Launch Live Cockpit</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,58,237,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-mono font-medium mb-8 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
            WTFEAR AGENCY SOVEREIGN CORE INTELLECTUAL PROPERTY
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight md:leading-none">
            The Sovereign <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">AI SaaS Foundation</span> for Enterprise.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Multi-tenant PostgreSQL Row-Level Security, asynchronous LangGraph worker pools, and sub-100ms real-time inference telemetry. Zero vendor lock-in.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#cockpit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-900/30 flex items-center gap-2 transition-all"
            >
              <span>Explore Live Multi-Tenant Cockpit</span>
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/wtfear/LyraCore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors"
            >
              <Terminal className="h-4 w-4 text-slate-400" />
              <span>Inspect Architecture Docs</span>
            </a>
          </div>

          {/* Key Stat Strips */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100%</div>
              <div className="text-xs text-slate-400 mt-1">Tenant Database Isolation</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">&lt; 95ms</div>
              <div className="text-xs text-slate-400 mt-1">Telemetry Turn Latency</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">MIT</div>
              <div className="text-xs text-slate-400 mt-1">Sovereign Agency License</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">14+</div>
              <div className="text-xs text-slate-400 mt-1">Swarm Agents Pre-Wired</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Multi-Tenant Cockpit */}
      <section id="cockpit" className="py-16 md:py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-purple-400 mb-4">
              <Zap className="h-3.5 w-3.5 text-purple-400" />
              LIVE TELEMETRY DEMO
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Institutional Multi-Tenant Control Cockpit
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Switch between isolated enterprise tenant environments to test real-time agent telemetry, security boundaries, and token unit economics.
            </p>
          </div>

          {/* Tenant Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {Object.entries(TENANTS).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setSelectedTenantKey(key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2.5 border ${
                  selectedTenantKey === key
                    ? "bg-purple-950/70 border-purple-500/70 text-white shadow-lg shadow-purple-950/50"
                    : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <div className={`h-2.5 w-2.5 rounded-full ${selectedTenantKey === key ? "bg-purple-400 ring-4 ring-purple-400/20" : "bg-slate-600"}`} />
                <span className="font-semibold">{data.name}</span>
                <span className="text-[11px] font-mono opacity-60">({data.activeAgents} Agents)</span>
              </button>
            ))}
          </div>

          {/* Cockpit Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Cockpit Header */}
            <div className="p-6 border-b border-slate-800 bg-slate-900/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center">
                  <Database className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{tenant.name}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950 border border-purple-500/40 text-purple-300">
                      {tenant.tier}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Tenant Boundary: <span className="text-emerald-400">ISOLATED_RLS_ENFORCED</span> • Vertical: {tenant.industry}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Cluster Health: Optimal
                </span>
              </div>
            </div>

            {/* Metric Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800 border-b border-slate-800">
              <div className="p-6">
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono">Active Swarm Agents</div>
                <div className="mt-2 text-3xl font-extrabold text-white font-mono flex items-baseline gap-2">
                  {tenant.activeAgents}
                  <span className="text-xs text-emerald-400 font-sans font-normal">Active Now</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Multi-threaded LangGraph Workers</div>
              </div>

              <div className="p-6">
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono">Token Volume</div>
                <div className="mt-2 text-3xl font-extrabold text-purple-400 font-mono">
                  {tenant.tokensProcessed}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Cached via Semantic KV Redis</div>
              </div>

              <div className="p-6">
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono">Inference Latency</div>
                <div className="mt-2 text-3xl font-extrabold text-sky-400 font-mono flex items-baseline gap-2">
                  {tenant.avgLatency}
                  <span className="text-xs text-slate-500 font-sans font-normal">p95</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Edge accelerated via Cloudflare</div>
              </div>

              <div className="p-6">
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider font-mono">Estimated Cost Savings</div>
                <div className="mt-2 text-3xl font-extrabold text-emerald-400 font-mono">
                  {tenant.costSavings}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">vs OpenAI API Uncached Direct</div>
              </div>
            </div>

            {/* Live Telemetry Log Console */}
            <div className="p-6 bg-slate-950/80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-purple-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    Real-Time Autonomous Agent Event Stream
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Live WebSockets: CONNECTED</span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                {tenant.recentLogs.map((log) => (
                  <div
                    key={log.id}
                    className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-[11px]">{log.time}</span>
                      <span className="px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-500/30 text-[10px] font-semibold">
                        {log.agent}
                      </span>
                      <span className="text-slate-300 text-xs">{log.action}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {log.status === "success" ? (
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                          <CheckCircle2 className="h-3 w-3" /> COMPLETED
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 font-medium animate-pulse">
                          <Activity className="h-3 w-3" /> EXECUTING...
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section id="features" className="py-16 md:py-24 border-t border-slate-800/60 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineered for Enterprise Retainers
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Built by WTFear Agency to power mission-critical corporate AI deployments with institutional compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-950/20">
              <div className="h-12 w-12 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Schema-Level Database Isolation</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                PostgreSQL Row-Level Security (RLS) ensures absolute cryptographic separation of client records. Zero accidental cross-tenant data leakage.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-950/20">
              <div className="h-12 w-12 rounded-xl bg-indigo-950/70 border border-indigo-500/30 flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">LangGraph Autonomous Runtimes</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Asynchronous stateful agent graphs running over Redis worker pools. Built to execute complex multi-step reasoning with checkpoint persistence.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/50 transition-all hover:shadow-xl hover:shadow-sky-950/20">
              <div className="h-12 w-12 rounded-xl bg-sky-950/70 border border-sky-500/30 flex items-center justify-center mb-6">
                <Server className="h-6 w-6 text-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sub-100ms Telemetry Stream</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Native streaming SSE connections provide real-time token tracking, latency auditing, and cost-per-turn attribution directly to client dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
              LC
            </div>
            <div>
              <span className="font-bold text-slate-200">LYRACORE</span> — Sovereign Multi-Tenant AI SaaS Foundation
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/wtfear/LyraCore" className="hover:text-purple-400 transition-colors">GitHub Repository</a>
            <a href="https://github.com/wtfear" className="hover:text-purple-400 transition-colors">WTFear Organization</a>
            <span className="text-slate-600">|</span>
            <span>Licensed under MIT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
