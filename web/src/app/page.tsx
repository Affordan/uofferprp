import type { Metadata } from "next";
import Link from "next/link";
import { mockUniversities, mockPolicies } from "@/mock";
import { SourceBadge } from "@/components/shared/SourceBadge";

export const metadata: Metadata = {
  title: "Uoffer 研录 - 强基计划政策与分数线查询平台",
};

const ENTRY_CARDS = [
  {
    title: "政策专题",
    desc: "教育部根政策、省级通知、高校招生简章，来源分级标注，可追溯原文",
    href: "/policies",
    color: "var(--color-primary)",
  },
  {
    title: "分数线查询",
    desc: "入围线、综合成绩、录取分数，按年份、省份、学校、类型精准筛选",
    href: "/scores",
    color: "var(--color-accent)",
  },
  {
    title: "高校对比",
    desc: "同条件多校横向对比，图表与表格双视图，差异可视化呈现",
    href: "/compare",
    color: "var(--color-gold)",
  },
];

const HOT_UNIVERSITIES = mockUniversities.slice(0, 12);
const LATEST_POLICIES = mockPolicies.slice(0, 3);

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(145deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%)",
          padding: "64px 24px 72px",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.1)",
              fontSize: 12,
              fontWeight: 500,
              marginBottom: 20,
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            强基计划 39 所试点高校 / 数据来源可追溯
          </div>

          <h1
            style={{
              fontSize: "clamp(26px, 4.5vw, 42px)",
              fontWeight: 800,
              lineHeight: 1.25,
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            强基计划信息，
            <br />
            <span style={{ color: "rgba(191,219,254,0.9)" }}>
              一站查询，来源可信
            </span>
          </h1>

          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              maxWidth: 480,
              margin: "0 auto 32px",
            }}
          >
            收录国家政策、省级通知与高校招生简章，提供分省分专业分数线查询与多校对比，所有数据标注官方来源等级。
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/scores"
              style={{
                padding: "10px 24px",
                borderRadius: 6,
                background: "#fff",
                color: "var(--color-primary)",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              查询分数线
            </Link>
            <Link
              href="/universities"
              style={{
                padding: "10px 24px",
                borderRadius: 6,
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              浏览高校库
            </Link>
          </div>
        </div>
      </section>

      {/* Entry cards */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 40px" }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>
          快速入口
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {ENTRY_CARDS.map((card) => (
            <Link key={card.href} href={card.href} style={{ textDecoration: "none" }}>
              <div
                className="card card-hover"
                style={{
                  padding: "20px 24px",
                  borderLeft: `3px solid ${card.color}`,
                }}
              >
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    marginBottom: 6,
                    color: "var(--color-text)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--color-text-muted)",
                    lineHeight: 1.65,
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

      {/* Universities */}
      <section style={{ background: "var(--color-bg-subtle)", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
              试点高校
            </h2>
            <Link
              href="/universities"
              style={{ fontSize: 13, color: "var(--color-primary)", textDecoration: "none" }}
            >
              查看全部 39 所
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 10,
            }}
          >
            {HOT_UNIVERSITIES.map((uni) => (
              <Link key={uni.id} href={`/universities/${uni.id}`} style={{ textDecoration: "none" }}>
                <div
                  className="card card-hover"
                  style={{ padding: "12px 16px" }}
                >
                  <div style={{ fontWeight: 600, fontSize: 14, color: "var(--color-text)" }}>
                    {uni.name}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-text-faint)", marginTop: 2 }}>
                    {uni.province}
                    {uni.tags?.includes("C9") && (
                      <span style={{ marginLeft: 6, fontSize: 10, color: "var(--color-primary)", fontWeight: 600 }}>
                        C9
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest policies */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
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
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>政策动态</h2>
          <Link
            href="/policies"
            style={{ fontSize: 13, color: "var(--color-primary)", textDecoration: "none" }}
          >
            查看全部
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {LATEST_POLICIES.map((policy) => (
            <div key={policy.id} className="card" style={{ padding: "14px 18px" }}>
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
                      fontSize: 13,
                      color: "var(--color-text)",
                      marginBottom: 4,
                      lineHeight: 1.5,
                    }}
                  >
                    {policy.topic}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                    {policy.summary.slice(0, 80)}...
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
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

      {/* Source explanation */}
      <section
        style={{
          background: "var(--color-bg-subtle)",
          padding: "32px 24px",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, minWidth: 240 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>
              数据来源说明
            </h3>
            <p style={{ fontSize: 12, color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
              数据来源于教育部、省级教育考试院、高校官方招生网等权威渠道，每条数据均标注来源等级与原始链接。当前版本为演示版，正式数据持续录入中。
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {(["A", "B", "C", "D"] as const).map((level) => (
              <SourceBadge key={level} level={level} showLabel />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
