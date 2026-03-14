import type { Metadata } from "next";
import Link from "next/link";
import { mockUniversities, mockPolicies } from "@/mock";
import { SourceBadge } from "@/components/shared/SourceBadge";

export const metadata: Metadata = {
  title: "强基信息平台 — 强基计划政策与分数线查询",
};

const ENTRY_CARDS = [
  {
    icon: "📋",
    title: "查政策",
    desc: "国家教育部根政策、省级通知、高校招生简章，全部来源可追溯",
    href: "/policies",
    color: "var(--color-primary)",
    bg: "var(--color-primary-light)",
  },
  {
    icon: "📊",
    title: "查分数线",
    desc: "入围线、综合成绩、最终录取分数，按年份 / 省份 / 学校 / 类型筛选",
    href: "/scores",
    color: "var(--color-accent)",
    bg: "var(--color-accent-light)",
  },
  {
    icon: "⚖️",
    title: "做对比",
    desc: "同条件下多高校横向对比，图表与表格双视图，差异一目了然",
    href: "/compare",
    color: "var(--color-gold)",
    bg: "var(--color-gold-light)",
  },
];

const HOT_UNIVERSITIES = mockUniversities.slice(0, 8);
const LATEST_POLICIES = mockPolicies.slice(0, 3);

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 60%, #0891b2 100%)",
          padding: "72px 24px 80px",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.12)",
              fontSize: 12,
              fontWeight: 500,
              marginBottom: 24,
            }}
          >
            <span>🎓</span>
            <span>强基计划试点高校 39 所 · 数据来源可追溯</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            强基计划信息
            <br />
            <span style={{ color: "#93c5fd" }}>一站查询 · 来源可信</span>
          </h1>

          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              maxWidth: 540,
              margin: "0 auto 36px",
            }}
          >
            收录国家政策、省级通知与高校招生简章，提供分省分专业分数线查询与多校对比，所有数据标注官方来源。
          </p>

          {/* 搜索框占位 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: 12,
              padding: "4px 4px 4px 16px",
              maxWidth: 520,
              margin: "0 auto",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
          >
            <span style={{ fontSize: 18, marginRight: 8, opacity: 0.4 }}>🔍</span>
            <input
              type="text"
              placeholder="搜索学校、省份、专业、年份…"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 14,
                color: "var(--color-text)",
                background: "transparent",
                padding: "10px 0",
              }}
              readOnly
            />
            <Link
              href="/scores"
              style={{
                padding: "10px 20px",
                borderRadius: 9,
                background: "var(--color-primary)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              查询
            </Link>
          </div>
          <p
            style={{
              marginTop: 12,
              fontSize: 12,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            全文搜索即将上线，当前可通过下方入口进行筛选查询
          </p>
        </div>
      </section>

      {/* ── 三大入口 ─────────────────────────────────────── */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 48px" }}
      >
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          快速入口
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {ENTRY_CARDS.map((card) => (
            <Link key={card.href} href={card.href} style={{ textDecoration: "none" }}>
              <div
                className="card card-hover"
                style={{
                  padding: 28,
                  cursor: "pointer",
                  borderTop: `3px solid ${card.color}`,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: card.bg,
                    fontSize: 22,
                    marginBottom: 16,
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 8,
                    color: card.color,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--color-text-muted)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 热门高校 ─────────────────────────────────────── */}
      <section style={{ background: "var(--color-bg-subtle)", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 24,
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>热门高校</h2>
            <Link
              href="/universities"
              style={{ fontSize: 13, color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}
            >
              查看全部 39 所 →
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 12,
            }}
          >
            {HOT_UNIVERSITIES.map((uni) => (
              <Link key={uni.id} href={`/universities/${uni.id}`} style={{ textDecoration: "none" }}>
                <div className="card card-hover" style={{ padding: "16px 20px" }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 15,
                      color: "var(--color-text)",
                      marginBottom: 4,
                    }}
                  >
                    {uni.name}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
                    {uni.province}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 政策动态 ─────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>政策动态</h2>
          <Link
            href="/policies"
            style={{ fontSize: 13, color: "var(--color-primary)", textDecoration: "none", fontWeight: 500 }}
          >
            查看全部政策 →
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {LATEST_POLICIES.map((policy) => (
            <div key={policy.id} className="card" style={{ padding: "16px 20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      color: "var(--color-text)",
                      marginBottom: 4,
                      lineHeight: 1.5,
                    }}
                  >
                    {policy.topic}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--color-text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {policy.summary.slice(0, 80)}…
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexShrink: 0,
                    flexWrap: "wrap",
                  }}
                >
                  <SourceBadge level={policy.source.source_level} />
                  <span style={{ fontSize: 12, color: "var(--color-text-faint)" }}>
                    {policy.source.publish_date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 来源说明 ─────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-bg-subtle)",
          padding: "40px 24px",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, minWidth: 240 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
              数据来源说明
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              平台数据来源于教育部、省级教育考试院、高校官方招生网等权威渠道，每条数据均标注来源级别与原始链接。当前 Demo 阶段展示为演示数据，正式数据持续录入中。
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {(["A", "B", "C", "D"] as const).map((level) => (
              <SourceBadge key={level} level={level} showLabel />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
