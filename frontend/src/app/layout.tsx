import React from "react";

export const metadata = {
  title: "LyraCore | Sovereign Multi-Tenant AI SaaS Foundation",
  description: "Enterprise Multi-Tenant AI SaaS Architecture by WTFear Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
