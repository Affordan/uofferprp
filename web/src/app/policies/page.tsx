import type { Metadata } from "next";

export const metadata: Metadata = { title: "政策专题" };

export default function PoliciesPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>政策专题</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 32 }}>
        强基计划国家政策、省级通知与高校招生简章归档
      </p>
      <p style={{ color: "var(--color-text-faint)", fontSize: 13 }}>
        页面建设中，即将上线…
      </p>
    </div>
  );
}
