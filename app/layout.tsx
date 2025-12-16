import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Prism | AI Photo Sharing Reinvented",
  description: "Prism is the intelligent AI-powered platform for secure, cinematic photo sharing in the tech-noir future."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-void-black text-white selection:bg-prism-yellow/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
