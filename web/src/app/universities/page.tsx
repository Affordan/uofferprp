import type { Metadata } from "next";

export const metadata: Metadata = { title: "高校库" };

export default function UniversitiesPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>高校库</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 32 }}>
        39 所强基计划试点高校信息汇总
      </p>
      <p style={{ color: "var(--color-text-faint)", fontSize: 13 }}>
        页面建设中，即将上线…
      </p>
    </div>
  );
}
