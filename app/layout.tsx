import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "ADIB",
    "خدمات",
    "تصميم",
    "مواقع",
    "ذكاء اصطناعي",
    "خدمات رقمية",
    "Istanbul",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#07070a] text-white antialiased">{children}</body>
    </html>
  );
}