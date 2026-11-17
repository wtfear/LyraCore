import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center px-4">
      <div className="max-w-4xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Original Sovereign Architecture by WTFear Agency
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          LYRA<span className="text-purple-400">CORE</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light">
          Institutional Multi-Tenant AI SaaS Foundation &amp; Autonomous Agent Runtime.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 text-left">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/50 transition-colors">
            <h3 className="font-bold text-lg text-purple-300">Multi-Tenant RBAC</h3>
            <p className="text-sm text-slate-400 mt-2">Strict schema-level database isolation with tenant boundary security.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 transition-colors">
            <h3 className="font-bold text-lg text-sky-300">Autonomous Agents</h3>
            <p className="text-sm text-slate-400 mt-2">LangGraph &amp; asynchronous agent execution runtimes via Redis worker pools.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <h3 className="font-bold text-lg text-emerald-300">Sovereign Billing</h3>
            <p className="text-sm text-slate-400 mt-2">Turnkey webhooks for Stripe and Razorpay recurring client retainers.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
