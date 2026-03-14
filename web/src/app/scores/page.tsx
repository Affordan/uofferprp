import type { Metadata } from "next";
import { ScoresPageClient } from "@/features/score/components/ScoresPageClient";

export const metadata: Metadata = { title: "分数线查询" };

export default function ScoresPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      {/* 页头 */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 6 }}>
          分数线查询
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: 14, margin: 0 }}>
          按年份、省份、学校、专业、分数线类型筛选 · 数据均标注官方来源 · 筛选状态可通过链接分享
        </p>
      </div>

      <ScoresPageClient />
    </div>
  );
}
