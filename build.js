import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy brand assets
const brandSrc = path.join(__dirname, 'public', 'brand');
const brandDest = path.join(distDir, 'brand');
if (fs.existsSync(brandSrc)) {
  if (!fs.existsSync(brandDest)) {
    fs.mkdirSync(brandDest, { recursive: true });
  }
  const files = fs.readdirSync(brandSrc);
  for (const file of files) {
    fs.copyFileSync(path.join(brandSrc, file), path.join(brandDest, file));
  }
}

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LyraCore — Sovereign Multi-Tenant AI SaaS Foundation & Runtime | WTFear</title>
  <meta name="description" content="Institutional Multi-Tenant AI SaaS Foundation, LangGraph Autonomous Agent Runtime & Sub-100ms Inference Telemetry engineered by WTFear Agency. 100% Original Intellectual Property.">
  <link rel="icon" type="image/svg+xml" href="./brand/lyra-logo.svg">

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              space: '#0A0612',
              card: '#120B1F',
              border: '#24143D',
              purple: '#9333EA',
              lightPurple: '#C084FC',
              cyan: '#38BDF8',
              emerald: '#10B981',
              amber: '#F59E0B'
            }
          }
        }
      }
    }
  </script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #0A0612;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #24143D;
      border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #3B1B66;
    }
  </style>
</head>
<body class="bg-[#0A0612] text-slate-100 min-h-screen flex flex-col selection:bg-purple-600 selection:text-white custom-scrollbar">

  <!-- TOP SOVEREIGN STATUS TICKER -->
  <div class="border-b border-purple-950/80 bg-[#06030B]/80 backdrop-blur-md px-4 py-2 text-xs flex justify-between items-center text-slate-400">
    <div class="flex items-center gap-2">
      <span class="flex h-2 w-2 relative">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
      </span>
      <span class="font-mono text-purple-400 font-semibold tracking-wider text-[11px]">LYRA CLUSTER: ONLINE</span>
      <span class="text-slate-800 hidden sm:inline">|</span>
      <span class="hidden sm:inline text-slate-400 font-mono text-[11px]">REGION: us-east-prod-02</span>
      <span class="text-slate-800 hidden md:inline">|</span>
      <span class="hidden md:inline text-emerald-400 font-mono text-[11px]">48 Isolated Tenant Schemas Active</span>
      <span class="text-slate-800 hidden lg:inline">|</span>
      <span class="hidden lg:inline text-purple-300 text-[11px]">WTFear Original Proprietary Intellectual Property</span>
    </div>
    <div class="flex items-center gap-4">
      <div id="liveClock" class="font-mono text-slate-400 text-[11px] hidden sm:block"></div>
      <a href="https://github.com/wtfear/LyraCore" target="_blank" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-950/60 border border-purple-800/60 text-purple-200 hover:text-white text-[11px] transition-colors">
        <i data-lucide="github" class="w-3.5 h-3.5"></i>
        <span>wtfear/LyraCore</span>
      </a>
    </div>
  </div>

  <!-- NAVIGATION HEADER -->
  <header class="border-b border-purple-950/60 bg-[#0E071A]/90 sticky top-0 z-40 backdrop-blur-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Brand Logo -->
      <div class="flex items-center gap-3">
        <div class="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-purple-700 to-indigo-900 flex items-center justify-center shadow-lg shadow-purple-950/50 border border-purple-400/30 shrink-0">
          <i data-lucide="cpu" class="w-5 h-5 text-white"></i>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-lg font-extrabold tracking-tight text-white">
              LYRA<span class="text-purple-400">CORE</span>
            </span>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/40">
              v2.4
            </span>
          </div>
          <p class="text-[11px] text-purple-300/60 hidden sm:block font-medium">Sovereign Multi-Tenant AI SaaS Foundation</p>
        </div>
      </div>

      <!-- Quick Navigation -->
      <nav class="hidden md:flex items-center gap-6 text-xs text-slate-400 font-medium">
        <button onclick="switchTab('cockpit')" class="hover:text-purple-300 transition-colors">Multi-Tenant Cockpit</button>
        <button onclick="switchTab('dispatcher')" class="hover:text-purple-300 transition-colors">Swarm Dispatcher</button>
        <button onclick="switchTab('telemetry')" class="hover:text-purple-300 transition-colors">Token Telemetry</button>
        <button onclick="switchTab('langgraph')" class="hover:text-purple-300 transition-colors">LangGraph Runtime</button>
        <button onclick="switchTab('advantage')" class="text-purple-300 font-semibold hover:text-white transition-colors">Agency Sovereignty</button>
      </nav>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3 shrink-0">
        <button onclick="openDeployTenantModal()" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-purple-900/30 flex items-center gap-1.5 transition-all">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i>
          <span>Provision Tenant Node</span>
        </button>
        <button onclick="triggerApiKeysModal()" class="p-2 rounded-lg bg-purple-950/50 border border-purple-800/60 hover:border-purple-600 text-purple-300 hover:text-white text-xs transition-colors">
          <i data-lucide="key" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- HERO KPI STAT STRIP -->
  <section class="border-b border-purple-950/80 bg-[#0E071A]/40 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- KPI 1 -->
        <div class="p-4 rounded-xl bg-[#120B1F]/70 border border-purple-950/80 hover:border-purple-500/40 transition-colors">
          <div class="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Monthly Autonomous Turns</span>
            <span class="text-emerald-400 font-mono text-[11px] flex items-center gap-0.5">
              <i data-lucide="trending-up" class="w-3 h-3"></i> +34.2%
            </span>
          </div>
          <div class="text-2xl font-extrabold text-white font-mono mt-2">1,842,920</div>
          <div class="text-[11px] text-purple-300/60 mt-1">Across 48 enterprise tenants</div>
        </div>

        <!-- KPI 2 -->
        <div class="p-4 rounded-xl bg-[#120B1F]/70 border border-purple-950/80 hover:border-purple-500/40 transition-colors">
          <div class="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Blended Inference Latency</span>
            <span class="text-purple-400 font-mono text-[11px] font-semibold">p95: 98ms</span>
          </div>
          <div class="text-2xl font-extrabold text-purple-400 font-mono mt-2">88ms</div>
          <div class="text-[11px] text-purple-300/60 mt-1">Edge accelerated via Redis KV</div>
        </div>

        <!-- KPI 3 -->
        <div class="p-4 rounded-xl bg-[#120B1F]/70 border border-purple-950/80 hover:border-purple-500/40 transition-colors">
          <div class="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Client Cost Savings</span>
            <span class="text-emerald-400 font-mono text-[11px]">84% Cheaper</span>
          </div>
          <div class="text-2xl font-extrabold text-emerald-400 font-mono mt-2">$230,200 <span class="text-xs font-normal text-slate-400">/ mo</span></div>
          <div class="text-[11px] text-purple-300/60 mt-1">vs Uncached direct LLM API calls</div>
        </div>

        <!-- KPI 4 -->
        <div class="p-4 rounded-xl bg-[#120B1F]/70 border border-purple-950/80 hover:border-purple-500/40 transition-colors">
          <div class="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Agency Retainer Run-Rate</span>
            <span class="text-cyan-400 font-mono text-[11px]">48 Clients</span>
          </div>
          <div class="text-2xl font-extrabold text-cyan-400 font-mono mt-2">$148,000 <span class="text-xs font-normal text-slate-400">/ mo</span></div>
          <div class="text-[11px] text-purple-300/60 mt-1">Stripe &amp; Razorpay sovereign webhooks</div>
        </div>
      </div>
    </div>
  </section>

  <!-- MAIN APPLICATION CONTENT -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">

    <!-- TAB BUTTONS -->
    <div class="flex flex-wrap items-center justify-between gap-4 border-b border-purple-950 pb-4 mb-6">
      <div class="flex flex-wrap items-center gap-2">
        <button onclick="switchTab('cockpit')" id="tab-cockpit" class="tab-btn px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white shadow-md shadow-purple-950 flex items-center gap-2 transition-all">
          <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
          <span>Multi-Tenant Cockpit</span>
        </button>
        <button onclick="switchTab('dispatcher')" id="tab-dispatcher" class="tab-btn px-4 py-2 rounded-xl text-xs font-medium bg-[#120B1F] border border-purple-950 text-slate-400 hover:text-slate-200 flex items-center gap-2 transition-all">
          <i data-lucide="zap" class="w-4 h-4 text-purple-400"></i>
          <span>Swarm Dispatcher</span>
        </button>
        <button onclick="switchTab('telemetry')" id="tab-telemetry" class="tab-btn px-4 py-2 rounded-xl text-xs font-medium bg-[#120B1F] border border-purple-950 text-slate-400 hover:text-slate-200 flex items-center gap-2 transition-all">
          <i data-lucide="line-chart" class="w-4 h-4"></i>
          <span>Token Economics &amp; Redis</span>
        </button>
        <button onclick="switchTab('langgraph')" id="tab-langgraph" class="tab-btn px-4 py-2 rounded-xl text-xs font-medium bg-[#120B1F] border border-purple-950 text-slate-400 hover:text-slate-200 flex items-center gap-2 transition-all">
          <i data-lucide="git-merge" class="w-4 h-4"></i>
          <span>LangGraph Checkpoints</span>
        </button>
        <button onclick="switchTab('advantage')" id="tab-advantage" class="tab-btn px-4 py-2 rounded-xl text-xs font-medium bg-[#120B1F] border border-purple-950 text-slate-400 hover:text-slate-200 flex items-center gap-2 transition-all">
          <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i>
          <span class="text-emerald-300 font-semibold">100% WTFear Original IP</span>
        </button>
      </div>

      <!-- Quick Action: Dispatch Swarm -->
      <button onclick="openQuickDispatchModal()" class="px-3.5 py-2 rounded-xl bg-purple-950/80 border border-purple-600/50 hover:bg-purple-900 text-purple-200 text-xs font-medium flex items-center gap-1.5 transition-colors">
        <i data-lucide="play" class="w-3.5 h-3.5 text-purple-400"></i>
        <span>Trigger Swarm Run</span>
      </button>
    </div>

    <!-- TAB 1: MULTI-TENANT COCKPIT -->
    <div id="content-cockpit" class="tab-content space-y-6">
      <!-- Tenant Switcher Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Tenant 1 -->
        <button onclick="selectTenant('apex')" id="tenant-card-apex" class="tenant-card text-left p-5 rounded-2xl bg-[#120B1F] border-2 border-purple-500 shadow-lg shadow-purple-950/40 transition-all">
          <div class="flex items-center justify-between mb-3">
            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-950 text-purple-300 border border-purple-500/40">TENANT: APEX_CAPITAL</span>
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <h3 class="text-base font-bold text-white">Apex Global Capital</h3>
          <p class="text-xs text-purple-300/60 mt-0.5">Private Equity • AUM $420M</p>
          <div class="mt-4 pt-3 border-t border-purple-950/80 flex justify-between text-xs">
            <span class="text-slate-400">Swarm Agents: <strong class="text-white font-mono">14 Active</strong></span>
            <span class="text-slate-400">Cost Saved: <strong class="text-emerald-400 font-mono">$52.4k/mo</strong></span>
          </div>
        </button>

        <!-- Tenant 2 -->
        <button onclick="selectTenant('sovereign')" id="tenant-card-sovereign" class="tenant-card text-left p-5 rounded-2xl bg-[#120B1F] border border-purple-950 hover:border-purple-600 transition-all">
          <div class="flex items-center justify-between mb-3">
            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-500/40">TENANT: SOVEREIGN_HEALTH</span>
            <span class="w-2 h-2 rounded-full bg-slate-600"></span>
          </div>
          <h3 class="text-base font-bold text-white">Sovereign Health Vault</h3>
          <p class="text-xs text-purple-300/60 mt-0.5">HIPAA EHR &amp; Clinical Trials</p>
          <div class="mt-4 pt-3 border-t border-purple-950/80 flex justify-between text-xs">
            <span class="text-slate-400">Swarm Agents: <strong class="text-white font-mono">8 Active</strong></span>
            <span class="text-slate-400">Cost Saved: <strong class="text-emerald-400 font-mono">$29.8k/mo</strong></span>
          </div>
        </button>

        <!-- Tenant 3 -->
        <button onclick="selectTenant('wtfear')" id="tenant-card-wtfear" class="tenant-card text-left p-5 rounded-2xl bg-[#120B1F] border border-purple-950 hover:border-purple-600 transition-all">
          <div class="flex items-center justify-between mb-3">
            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">TENANT: ROOT_CLUSTER</span>
            <span class="w-2 h-2 rounded-full bg-slate-600"></span>
          </div>
          <h3 class="text-base font-bold text-white">WTFear Core Retainer Ops</h3>
          <p class="text-xs text-purple-300/60 mt-0.5">Global Cluster Administrator</p>
          <div class="mt-4 pt-3 border-t border-purple-950/80 flex justify-between text-xs">
            <span class="text-slate-400">Swarm Agents: <strong class="text-white font-mono">28 Active</strong></span>
            <span class="text-slate-400">Cost Saved: <strong class="text-emerald-400 font-mono">$148.0k/mo</strong></span>
          </div>
        </button>
      </div>

      <!-- Live Active Swarm Activity Stream -->
      <div class="rounded-2xl border border-purple-950 bg-[#120B1F]/80 overflow-hidden shadow-2xl">
        <div class="p-5 border-b border-purple-950 bg-[#0E071A] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-purple-950 border border-purple-600/40">
              <i data-lucide="terminal" class="w-4 h-4 text-purple-400"></i>
            </div>
            <div>
              <h3 id="currentTenantTitle" class="text-sm font-bold text-white">Apex Global Capital — Real-Time Agent Stream</h3>
              <p class="text-xs text-purple-300/60 font-mono">PostgreSQL Row-Level Security: STRICT_RLS_ENFORCED</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-semibold flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              WS FEED: SYNCHRONIZED
            </span>
          </div>
        </div>

        <div id="agentStreamContainer" class="divide-y divide-purple-950/60 font-mono text-xs">
          <!-- Dynamically populated via JavaScript -->
        </div>
      </div>
    </div>

    <!-- TAB 2: SWARM DISPATCHER -->
    <div id="content-dispatcher" class="tab-content hidden space-y-6">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Dispatcher Controls -->
        <div class="lg:col-span-1 p-6 rounded-2xl bg-[#120B1F] border border-purple-950 space-y-4">
          <h3 class="text-sm font-bold text-white flex items-center gap-2">
            <i data-lucide="play-circle" class="w-4 h-4 text-purple-400"></i>
            <span>Deploy Autonomous Swarm</span>
          </h3>
          <p class="text-xs text-purple-300/60">Configure and execute an asynchronous LangGraph agent swarm node with checkpoint persistence.</p>

          <div class="space-y-3 font-sans text-xs">
            <div>
              <label class="block text-slate-400 mb-1">Target Tenant Node:</label>
              <select id="dispatchTenant" class="w-full bg-[#0A0612] border border-purple-950 rounded-lg p-2.5 text-white">
                <option value="Apex Global Capital">Apex Global Capital (RLS Schema)</option>
                <option value="Sovereign Health Vault">Sovereign Health Vault (HIPAA)</option>
                <option value="WTFear Core Retainer Ops">WTFear Core Retainer Ops</option>
              </select>
            </div>

            <div>
              <label class="block text-slate-400 mb-1">Agent Architecture Model:</label>
              <select id="dispatchAgentType" class="w-full bg-[#0A0612] border border-purple-950 rounded-lg p-2.5 text-white">
                <option value="MarketArbitrage-v4">MarketArbitrage-v4 (Tick Telemetry)</option>
                <option value="SEC-EdgarScraper">SEC-EdgarScraper (10-K RAG Vector)</option>
                <option value="ClinicalTrialsAuditor">ClinicalTrialsAuditor (FDA Concordance)</option>
                <option value="CashFlowReconciler">CashFlowReconciler (Stripe / Razorpay)</option>
                <option value="VulnerabilityScanner">VulnerabilityScanner (Zero-CVE Edge)</option>
              </select>
            </div>

            <div>
              <label class="block text-slate-400 mb-1">Execution Prompt / Goal:</label>
              <textarea id="dispatchGoal" rows="3" class="w-full bg-[#0A0612] border border-purple-950 rounded-lg p-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500" placeholder="e.g. Scrape SEC filings and cross-reference with portfolio liquidity targets..."></textarea>
            </div>

            <button onclick="executeSwarmDispatch()" class="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-purple-950 transition-all flex items-center justify-center gap-2">
              <i data-lucide="zap" class="w-4 h-4"></i>
              <span>Launch Asynchronous Swarm</span>
            </button>
          </div>
        </div>

        <!-- Swarm Workers Matrix -->
        <div class="lg:col-span-2 p-6 rounded-2xl bg-[#120B1F] border border-purple-950 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-bold text-white">Active Worker Pool (Redis Streams)</h3>
            <span class="text-xs font-mono text-purple-400">8 Workers Online</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="p-4 rounded-xl bg-[#0A0612] border border-purple-950/80">
              <div class="flex items-center justify-between text-xs mb-2">
                <span class="font-bold text-white">worker-gpu-01</span>
                <span class="text-emerald-400 font-mono text-[11px]">IDLE (Ready)</span>
              </div>
              <div class="text-[11px] text-slate-400">NVIDIA L4 Tensor Core • 24GB VRAM</div>
              <div class="w-full bg-purple-950 h-1.5 rounded-full mt-3 overflow-hidden">
                <div class="bg-purple-500 h-full" style="width: 14%"></div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-[#0A0612] border border-purple-950/80">
              <div class="flex items-center justify-between text-xs mb-2">
                <span class="font-bold text-white">worker-cpu-02</span>
                <span class="text-purple-400 font-mono text-[11px] animate-pulse">PROCESSING (82%)</span>
              </div>
              <div class="text-[11px] text-slate-400">AMD EPYC 9654 • 64 vCPUs • 128GB RAM</div>
              <div class="w-full bg-purple-950 h-1.5 rounded-full mt-3 overflow-hidden">
                <div class="bg-purple-500 h-full" style="width: 82%"></div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-[#0A0612] border border-purple-950/80">
              <div class="flex items-center justify-between text-xs mb-2">
                <span class="font-bold text-white">worker-cpu-03</span>
                <span class="text-emerald-400 font-mono text-[11px]">IDLE (Ready)</span>
              </div>
              <div class="text-[11px] text-slate-400">LangGraph Checkpoint Manager • Redis KV</div>
              <div class="w-full bg-purple-950 h-1.5 rounded-full mt-3 overflow-hidden">
                <div class="bg-purple-500 h-full" style="width: 22%"></div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-[#0A0612] border border-purple-950/80">
              <div class="flex items-center justify-between text-xs mb-2">
                <span class="font-bold text-white">worker-edge-04</span>
                <span class="text-purple-400 font-mono text-[11px] animate-pulse">STREAMING (65%)</span>
              </div>
              <div class="text-[11px] text-slate-400">SSE Telemetry Relay • Cloudflare Workers</div>
              <div class="w-full bg-purple-950 h-1.5 rounded-full mt-3 overflow-hidden">
                <div class="bg-purple-500 h-full" style="width: 65%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 3: TOKEN ECONOMICS & REDIS CACHE -->
    <div id="content-telemetry" class="tab-content hidden space-y-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Live Chart -->
        <div class="p-6 rounded-2xl bg-[#120B1F] border border-purple-950">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-sm font-bold text-white">Token Throughput &amp; Cost Per Turn (24h)</h3>
              <p class="text-xs text-purple-300/60">Sub-100ms turn latency via semantic Redis caching</p>
            </div>
            <span class="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30 text-[10px] font-mono">
              LIVE SSE TELEMETRY
            </span>
          </div>
          <div class="h-64 w-full">
            <canvas id="lyraChart"></canvas>
          </div>
        </div>

        <!-- Telemetry Metrics -->
        <div class="p-6 rounded-2xl bg-[#120B1F] border border-purple-950 space-y-4">
          <h3 class="text-sm font-bold text-white">Multi-Tenant Unit Economics</h3>

          <div class="space-y-3">
            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-slate-400">Semantic Redis Cache Hit Rate</span>
                <span class="font-mono text-emerald-400 font-semibold">94.8%</span>
              </div>
              <div class="w-full bg-purple-950 h-2 rounded-full overflow-hidden">
                <div class="bg-emerald-500 h-full" style="width: 94.8%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-slate-400">Average Cost Per Turn</span>
                <span class="font-mono text-purple-400 font-semibold">$0.0012 / turn</span>
              </div>
              <div class="w-full bg-purple-950 h-2 rounded-full overflow-hidden">
                <div class="bg-purple-500 h-full" style="width: 15%"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between text-xs mb-1">
                <span class="text-slate-400">PostgreSQL RLS Boundary Verification</span>
                <span class="font-mono text-cyan-400 font-semibold">100% Cryptographic Isolation</span>
              </div>
              <div class="w-full bg-purple-950 h-2 rounded-full overflow-hidden">
                <div class="bg-cyan-500 h-full" style="width: 100%"></div>
              </div>
            </div>
          </div>

          <div class="mt-6 p-4 rounded-xl bg-[#0A0612] border border-purple-950 font-mono text-[11px] text-purple-300/80 space-y-1">
            <div class="text-white font-semibold">LangGraph State Persistence Engine:</div>
            <div>• Database: PostgreSQL 16 + AsyncPG Connection Pool</div>
            <div>• State Checkpoint Storage: Redis 7.4 Cluster (Persistent appendonly)</div>
            <div>• Vector Store: pgvector with HNSW cosine similarity index</div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 4: LANGGRAPH RUNTIME -->
    <div id="content-langgraph" class="tab-content hidden space-y-6">
      <div class="p-6 rounded-2xl bg-[#120B1F] border border-purple-950">
        <h3 class="text-sm font-bold text-white mb-2">LangGraph Stateful Graph Workflow</h3>
        <p class="text-xs text-purple-300/60 mb-6">Visual execution graph for multi-agent autonomous consensus and state rollback.</p>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-mono text-xs">
          <div class="p-4 rounded-xl bg-[#0A0612] border border-purple-500">
            <div class="text-[10px] text-purple-400 font-bold mb-1">STEP 1</div>
            <div class="font-bold text-white">Ingest &amp; Classify</div>
            <div class="text-[10px] text-slate-500 mt-2">12ms • Embeddings</div>
          </div>
          <div class="p-4 rounded-xl bg-[#0A0612] border border-indigo-500">
            <div class="text-[10px] text-indigo-400 font-bold mb-1">STEP 2</div>
            <div class="font-bold text-white">Multi-Agent Swarm</div>
            <div class="text-[10px] text-slate-500 mt-2">48ms • Parallel LLM</div>
          </div>
          <div class="p-4 rounded-xl bg-[#0A0612] border border-cyan-500">
            <div class="text-[10px] text-cyan-400 font-bold mb-1">STEP 3</div>
            <div class="font-bold text-white">Consensus &amp; RLS</div>
            <div class="text-[10px] text-slate-500 mt-2">16ms • Audit Pass</div>
          </div>
          <div class="p-4 rounded-xl bg-[#0A0612] border border-emerald-500">
            <div class="text-[10px] text-emerald-400 font-bold mb-1">STEP 4</div>
            <div class="font-bold text-white">SSE Delivery &amp; Webhook</div>
            <div class="text-[10px] text-slate-500 mt-2">8ms • 200 OK</div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 5: THE SOVEREIGN IP ADVANTAGE -->
    <div id="content-advantage" class="tab-content hidden space-y-8">
      <div class="text-center max-w-3xl mx-auto">
        <span class="px-3 py-1 rounded-full bg-purple-950 text-purple-400 border border-purple-500/40 text-xs font-mono font-semibold">
          100% ORIGINAL WTFEAR INTELLECTUAL PROPERTY
        </span>
        <h2 class="text-3xl font-extrabold text-white mt-4">Why LyraCore is WTFear Agency's Core Flagship</h2>
        <p class="text-sm text-purple-300/60 mt-2">
          Unlike forked open-source frameworks, LyraCore is engineered from scratch by WTFear Agency. It provides clients with complete code sovereignty, enterprise compliance, and zero vendor lock-in.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-[#120B1F] border border-purple-950 hover:border-purple-500 transition-colors">
          <div class="h-10 w-10 rounded-xl bg-purple-950 flex items-center justify-center text-purple-400 mb-4">
            <i data-lucide="lock" class="w-5 h-5"></i>
          </div>
          <h3 class="text-base font-bold text-white mb-2">Cryptographic Tenant Isolation</h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            PostgreSQL Row-Level Security ensures that tenant data is segregated at the kernel database level. Impossible to accidentally leak between organizations.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-[#120B1F] border border-purple-950 hover:border-indigo-500 transition-colors">
          <div class="h-10 w-10 rounded-xl bg-indigo-950 flex items-center justify-center text-indigo-400 mb-4">
            <i data-lucide="cpu" class="w-5 h-5"></i>
          </div>
          <h3 class="text-base font-bold text-white mb-2">Stateful LangGraph Checkpoints</h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            Persistent checkpoint runtime allows complex multi-day agent workflows to pause, resume, and recover from failures without losing state.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-[#120B1F] border border-purple-950 hover:border-emerald-500 transition-colors">
          <div class="h-10 w-10 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 mb-4">
            <i data-lucide="coins" class="w-5 h-5"></i>
          </div>
          <h3 class="text-base font-bold text-white mb-2">Sovereign Billing &amp; Webhooks</h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            Turnkey recurring retainer webhooks for Stripe, Razorpay, and enterprise invoicing with automated per-tenant token quotas.
          </p>
        </div>
      </div>
    </div>
  </main>

  <!-- MODALS -->
  <div id="deployTenantModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">
    <div class="bg-[#120B1F] border border-purple-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
      <div class="flex items-center justify-between border-b border-purple-950 pb-3">
        <h3 class="text-sm font-bold text-white flex items-center gap-2">
          <i data-lucide="server" class="w-4 h-4 text-purple-400"></i>
          <span>Provision New Enterprise Tenant Node</span>
        </h3>
        <button onclick="closeModal('deployTenantModal')" class="text-slate-400 hover:text-white">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <div class="space-y-3 font-sans text-xs">
        <div>
          <label class="block text-slate-400 mb-1">Organization Name:</label>
          <input type="text" id="newTenantOrg" placeholder="e.g. Lumina Autonomous EV Corp" class="w-full bg-[#0A0612] border border-purple-950 rounded-lg p-2.5 text-white" />
        </div>
        <div>
          <label class="block text-slate-400 mb-1">Database Isolation Tier:</label>
          <select class="w-full bg-[#0A0612] border border-purple-950 rounded-lg p-2.5 text-white">
            <option>Dedicated PostgreSQL Schema (RLS)</option>
            <option>Isolated Physical Database Vault (HIPAA / SOC2)</option>
            <option>Multi-Region Replicated Cluster</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end gap-2 pt-3 border-t border-purple-950">
        <button onclick="closeModal('deployTenantModal')" class="px-4 py-2 rounded-lg bg-slate-800 text-xs text-slate-300">Cancel</button>
        <button onclick="confirmProvisionTenant()" class="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs text-white font-semibold">Provision Node</button>
      </div>
    </div>
  </div>

  <!-- API KEYS MODAL -->
  <div id="apiKeysModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">
    <div class="bg-[#120B1F] border border-purple-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
      <div class="flex items-center justify-between border-b border-purple-950 pb-3">
        <h3 class="text-sm font-bold text-white flex items-center gap-2">
          <i data-lucide="key" class="w-4 h-4 text-purple-400"></i>
          <span>Sovereign Cluster API Keys</span>
        </h3>
        <button onclick="closeModal('apiKeysModal')" class="text-slate-400 hover:text-white">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <div class="space-y-3 font-mono text-xs">
        <div class="p-3 rounded-lg bg-[#0A0612] border border-purple-950">
          <div class="text-[10px] text-slate-500">LIVE PRODUCTION KEY (FULL ACCESS):</div>
          <div class="text-purple-300 mt-1 select-all">lyra_live_8f94a102bc4e7712a...90ee</div>
        </div>
        <div class="p-3 rounded-lg bg-[#0A0612] border border-purple-950">
          <div class="text-[10px] text-slate-500">TENANT TELEMETRY INGESTION KEY:</div>
          <div class="text-purple-300 mt-1 select-all">lyra_telemetry_3c19b882da...11af</div>
        </div>
      </div>
      <div class="flex justify-end pt-3 border-t border-purple-950">
        <button onclick="closeModal('apiKeysModal')" class="px-4 py-2 rounded-lg bg-purple-600 text-xs text-white font-semibold">Done</button>
      </div>
    </div>
  </div>

  <!-- TOAST CONTAINER -->
  <div id="toastContainer" class="fixed bottom-6 right-6 z-50 space-y-2 pointer-events-none"></div>

  <!-- FOOTER -->
  <footer class="border-t border-purple-950/80 bg-[#06030B] py-8 text-xs text-purple-300/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="font-bold text-slate-200">LYRACORE</span>
        <span>— Sovereign Multi-Tenant AI SaaS Foundation &amp; Runtime</span>
      </div>
      <div class="flex items-center gap-4">
        <a href="https://github.com/wtfear/LyraCore" target="_blank" class="hover:text-purple-400 transition-colors">GitHub Repository</a>
        <a href="https://github.com/wtfear" target="_blank" class="hover:text-purple-400 transition-colors">WTFear Organization</a>
        <span>MIT Sovereign License</span>
      </div>
    </div>
  </footer>

  <!-- SCRIPT LOGIC -->
  <script>
    const TENANT_DATA = {
      apex: {
        title: "Apex Global Capital — Real-Time Agent Stream",
        events: [
          { time: "14:36:12", agent: "MarketArbitrage-v4", action: "Audited tick variance on 42 institutional liquidity pools", status: "COMPLETED" },
          { time: "14:35:40", agent: "PortfolioRebalance", action: "Simulated multi-currency FX exposure risk distribution", status: "COMPLETED" },
          { time: "14:34:11", agent: "SEC-EdgarScraper", action: "Ingested 10-K filings with pgvector HNSW embeddings", status: "COMPLETED" },
          { time: "14:33:02", agent: "DueDiligenceBot", action: "Cross-referencing cap table records against registry", status: "EXECUTING..." }
        ]
      },
      sovereign: {
        title: "Sovereign Health Vault — Real-Time Agent Stream",
        events: [
          { time: "14:36:55", agent: "ClinicalTrialsAuditor", action: "Screened 84 Phase-III trial cohort eligibility rules", status: "COMPLETED" },
          { time: "14:34:20", agent: "HL7-FHIR-Parser", action: "De-identified 1,200 EHR records with zero PHI leakage", status: "COMPLETED" },
          { time: "14:31:18", agent: "ProtocolSentinel", action: "Audited IRB amendments against FDA regulatory requirements", status: "COMPLETED" },
          { time: "14:28:45", agent: "MedWatchMonitor", action: "Monitoring real-time post-market adverse drug events", status: "EXECUTING..." }
        ]
      },
      wtfear: {
        title: "WTFear Core Retainer Ops — Real-Time Agent Stream",
        events: [
          { time: "14:37:10", agent: "SwarmCoordinator-Alpha", action: "Dispatched 6 sub-agents across Docker telemetry pipelines", status: "COMPLETED" },
          { time: "14:36:01", agent: "CI-SecuritySentinel", action: "Audited automated test suites across 14 microservices (0 CVEs)", status: "COMPLETED" },
          { time: "14:33:45", agent: "StripeWebhookWorker", action: "Reconciled recurring multi-tenant retainer billing accounts", status: "COMPLETED" },
          { time: "14:30:12", agent: "TelemetryRelay-Edge", action: "Streaming SSE metrics to executive client dashboards", status: "COMPLETED" }
        ]
      }
    };

    let activeTenantKey = "apex";

    function renderAgentStream() {
      const data = TENANT_DATA[activeTenantKey];
      document.getElementById("currentTenantTitle").innerText = data.title;
      const container = document.getElementById("agentStreamContainer");
      container.innerHTML = data.events.map(ev => {
        const isCompleted = ev.status === "COMPLETED";
        const badge = isCompleted 
          ? '<span class="text-emerald-400 font-semibold flex items-center gap-1"><i data-lucide="check-circle-2" class="w-3 h-3"></i> COMPLETED</span>'
          : '<span class="text-amber-400 font-semibold animate-pulse flex items-center gap-1"><i data-lucide="loader" class="w-3 h-3"></i> EXECUTING...</span>';

        return \`
          <div class="p-3.5 hover:bg-[#1A102C]/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div class="flex items-center gap-3">
              <span class="text-slate-500 text-[11px]">\${ev.time}</span>
              <span class="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30 text-[10px] font-bold">\${ev.agent}</span>
              <span class="text-slate-200 text-xs">\${ev.action}</span>
            </div>
            <div class="text-[11px] shrink-0">\${badge}</div>
          </div>
        \`;
      }).join('');
      lucide.createIcons();
    }

    function selectTenant(key) {
      activeTenantKey = key;
      document.querySelectorAll('.tenant-card').forEach(card => {
        card.classList.remove('border-2', 'border-purple-500', 'shadow-lg');
        card.classList.add('border', 'border-purple-950');
      });
      const activeCard = document.getElementById('tenant-card-' + key);
      if (activeCard) {
        activeCard.classList.remove('border', 'border-purple-950');
        activeCard.classList.add('border-2', 'border-purple-500', 'shadow-lg');
      }
      renderAgentStream();
    }

    function switchTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-purple-600', 'text-white', 'shadow-md');
        btn.classList.add('bg-[#120B1F]', 'text-slate-400');
      });

      const activeContent = document.getElementById('content-' + tabId);
      const activeBtn = document.getElementById('tab-' + tabId);
      if (activeContent) activeContent.classList.remove('hidden');
      if (activeBtn) {
        activeBtn.classList.add('bg-purple-600', 'text-white', 'shadow-md');
        activeBtn.classList.remove('bg-[#120B1F]', 'text-slate-400');
      }

      if (tabId === 'telemetry') {
        initLyraChart();
      }
    }

    function executeSwarmDispatch() {
      const agent = document.getElementById("dispatchAgentType").value;
      const tenant = document.getElementById("dispatchTenant").value;
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      TENANT_DATA[activeTenantKey].events.unshift({
        time: timeStr,
        agent: agent,
        action: "Dispatched autonomous agent swarm for tenant: " + tenant,
        status: "EXECUTING..."
      });
      renderAgentStream();
      showToast("🚀 Asynchronous Agent Swarm Dispatched (" + agent + ")");
      setTimeout(() => {
        TENANT_DATA[activeTenantKey].events[0].status = "COMPLETED";
        renderAgentStream();
      }, 3500);
    }

    function openQuickDispatchModal() {
      switchTab('dispatcher');
      showToast("⚡ Swarm Dispatcher ready. Select goal and execute.");
    }

    function openDeployTenantModal() {
      document.getElementById("deployTenantModal").classList.remove("hidden");
    }

    function triggerApiKeysModal() {
      document.getElementById("apiKeysModal").classList.remove("hidden");
    }

    function closeModal(id) {
      document.getElementById(id).classList.add("hidden");
    }

    function confirmProvisionTenant() {
      closeModal('deployTenantModal');
      showToast("✅ Dedicated Schema Node Provisioned (PostgreSQL RLS Active)");
    }

    function showToast(message) {
      const container = document.getElementById("toastContainer");
      const toast = document.createElement("div");
      toast.className = "pointer-events-auto px-4 py-2.5 rounded-xl bg-[#120B1F] border border-purple-500/40 shadow-2xl text-xs text-white flex items-center gap-2 transform translate-y-2 transition-all";
      toast.innerHTML = \`<span>\${message}</span>\`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 4000);
    }

    let lyraChartInstance = null;
    function initLyraChart() {
      if (lyraChartInstance) return;
      const ctx = document.getElementById('lyraChart');
      if (!ctx) return;
      lyraChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
          datasets: [{
            label: 'Inference Latency (ms)',
            data: [94, 91, 88, 102, 88, 86, 92, 88],
            borderColor: '#9333EA',
            backgroundColor: 'rgba(147, 51, 234, 0.1)',
            fill: true,
            tension: 0.4
          }, {
            label: 'Cached Tokens (k / sec)',
            data: [320, 280, 410, 680, 1140, 920, 810, 740],
            borderColor: '#38BDF8',
            backgroundColor: 'rgba(56, 189, 248, 0.05)',
            fill: true,
            tension: 0.4,
            yAxisID: 'y1'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748B' } },
            y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748B' } },
            y1: { position: 'right', grid: { drawOnChartArea: false }, ticks: { color: '#64748B' } }
          },
          plugins: {
            legend: { labels: { color: '#C084FC', font: { family: 'Plus Jakarta Sans', size: 11 } } }
          }
        }
      });
    }

    function updateClock() {
      const clockEl = document.getElementById("liveClock");
      if (clockEl) {
        const now = new Date();
        clockEl.innerText = now.toUTCString().replace("GMT", "UTC");
      }
    }

    window.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons();
      renderAgentStream();
      updateClock();
      setInterval(updateClock, 1000);
    });
  </script>
</body>
</html>`;

// Write to dist/index.html and root index.html
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent, 'utf-8');
fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf-8');

console.log('✅ LyraCore distribution successfully built into dist/index.html AND root index.html');
