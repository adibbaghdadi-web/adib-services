import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADIB | منصة خدمات شاملة",
  description:
    "منصة خدمات شاملة للتصميم والتوصيل والخدمات حسب الطلب في مكان واحد.",
  keywords: [
    "ADIB",
    "خدمات",
    "تصميم",
    "توصيل",
    "طلبات",
    "خدمات حسب الطلب",
    "إسطنبول",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#07070a] text-white antialiased">
        {children}
       
      </body>
    </html>
  );
}