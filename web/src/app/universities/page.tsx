import type { Metadata } from "next";
import { UniversitiesPageClient } from "@/features/university/components/UniversitiesPageClient";

export const metadata: Metadata = { title: "高校库" };

export default function UniversitiesPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 6 }}>
          高校库
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: 14, margin: 0 }}>
          强基计划试点高校信息汇总 · 招生简章 · 分数线 · 官方来源 · 筛选状态可通过链接分享
        </p>
      </div>
      <UniversitiesPageClient />
    </div>
  );
}
