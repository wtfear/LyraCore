import React from "react";
import "./globals.css";

export const metadata = {
  title: "LyraCore | Sovereign Multi-Tenant AI SaaS Foundation & Runtime",
  description: "Enterprise Multi-Tenant AI SaaS Architecture & Autonomous Agent Runtime by WTFear Agency",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
