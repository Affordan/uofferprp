import type { Metadata } from "next";
import Link from "next/link";
import {
  getNationalPolicies,
  getProvincePolicies,
  getAllProvinces,
} from "@/features/policy/services/policyService";
import { PolicyList } from "@/features/policy/components/PolicyList";

export const metadata: Metadata = { title: "政策专题" };

const SCOPE_ENTRIES = [
  {
    icon: "🏛️",
    title: "国家政策",
    desc: "教育部根政策、阳光高考专题、国家级文件",
    href: "/policies/national",
    color: "#7c3aed",
    bg: "#ede9fe",
  },
  {
    icon: "📍",
    title: "省级信息",
    desc: "省级教育考试院通知、报考说明、官方来源汇总",
    href: "#province-section",
    color: "var(--color-accent)",
    bg: "var(--color-accent-light)",
  },
  {
    icon: "🏫",
    title: "高校招生简章",
    desc: "各试点高校招生简章、入围规则、培养方案",
    href: "/universities",
    color: "var(--color-gold)",
    bg: "var(--color-gold-light)",
  },
];

export default function PoliciesPage() {
  const nationalPolicies = getNationalPolicies();
  const provincePolicies = getProvincePolicies();
  const provinces = getAllProvinces();

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      {/* 页头 */}
      <div style={{ marginBottom: 36 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 6 }}>
          政策专题
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: 14, margin: 0 }}>
          强基计划国家政策、省级官方信息与高校招生简章归档 · 所有来源均标注级别与原始链接
        </p>
      </div>

      {/* 三级入口卡片 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
          marginBottom: 48,
        }}
      >
        {SCOPE_ENTRIES.map((entry) => (
          <Link
            key={entry.href}
            href={entry.href}
            style={{ textDecoration: "none" }}
          >
            <div
              className="card card-hover"
              style={{
                padding: "20px 24px",
                borderTop: `3px solid ${entry.color}`,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: entry.bg,
                  fontSize: 20,
                  marginBottom: 12,
                }}
              >
                {entry.icon}
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: entry.color,
                  marginBottom: 6,
                }}
              >
                {entry.title}
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--color-text-muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {entry.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* 国家级政策预览 */}
      <section style={{ marginBottom: 48 }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 16,
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>
            国家政策
          </h2>
          <Link
            href="/policies/national"
            style={{
              fontSize: 13,
              color: "var(--color-primary)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            查看全部 →
          </Link>
        </div>
        <PolicyList policies={nationalPolicies} />
      </section>

      {/* 省级信息入口 */}
      <section id="province-section">
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0, marginBottom: 4 }}>
            省级官方信息
          </h2>
          <p style={{ fontSize: 13, color: "var(--color-text-muted)", margin: 0 }}>
            点击省份查看该省强基计划官方通知、报考说明与来源归档
          </p>
        </div>

        {/* 省份快捷入口 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 20,
          }}
        >
          {provinces.map((p) => (
            <Link
              key={p}
              href={`/policies/provinces/${encodeURIComponent(p)}`}
              style={{ textDecoration: "none" }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg-card)",
                  fontSize: 13,
                  color: "var(--color-text)",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "border-color 0.12s, color 0.12s",
                }}
                className="province-chip"
              >
                {p}
              </span>
            </Link>
          ))}
        </div>

        {/* 省级政策预览（前3条） */}
        <PolicyList policies={provincePolicies.slice(0, 3)} showScope />
      </section>

      {/* Demo 声明 */}
      <div
        style={{
          marginTop: 32,
          padding: "10px 14px",
          borderRadius: 8,
          background: "var(--color-bg-subtle)",
          border: "1px solid var(--color-border)",
          fontSize: 12,
          color: "var(--color-text-muted)",
        }}
      >
        📌 当前数据为演示数据，仅用于功能展示。正式数据以各教育主管部门官方发布为准。
      </div>
    </div>
  );
}
