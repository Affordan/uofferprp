import type { Metadata } from "next";

export const metadata: Metadata = { title: "国家政策" };

export default function NationalPolicyPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>国家强基计划政策</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 32 }}>
        教育部根政策 · 阳光高考专题 · 国家级文件汇总
      </p>
      <p style={{ color: "var(--color-text-faint)", fontSize: 13 }}>
        页面建设中，即将上线…
      </p>
    </div>
  );
}
