import type { Metadata } from "next";
import { ComparePageClient } from "@/features/compare/components/ComparePageClient";

export const metadata: Metadata = { title: "高校对比" };

export default function ComparePage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>
          高校对比
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: 13, margin: 0 }}>
          同年份、同类型条件下 2-6 所高校横向对比 / 筛选状态可通过链接分享
        </p>
      </div>
      <ComparePageClient />
    </div>
  );
}
