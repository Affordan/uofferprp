import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Uoffer 研录 - 强基计划信息平台",
    template: "%s | Uoffer 研录",
  },
  description:
    "面向考生、家长与升学研究者的强基计划政策与分数线查询平台，提供政策归档、来源追溯、分数线查询与高校对比。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: 0,
        }}
      >
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
