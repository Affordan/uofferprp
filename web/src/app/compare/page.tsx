import type { Metadata } from "next";

export const metadata: Metadata = { title: "高校对比" };

export default function ComparePage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>高校对比</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 32 }}>
        同年份、同省份、同分数线类型下多校对比
      </p>
      <p style={{ color: "var(--color-text-faint)", fontSize: 13 }}>
        页面建设中，即将上线…
      </p>
    </div>
  );
}
