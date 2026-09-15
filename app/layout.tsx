import type { Metadata } from "next";
import "./globals.css";
import "./chart.css";
import "./documents.css";
import "./payments.css";

export const metadata: Metadata = {
  title: "Dar Al Binaa — Gestion commerciale",
  description: "Prototype de gestion commerciale et de stock multi-dépôts.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
