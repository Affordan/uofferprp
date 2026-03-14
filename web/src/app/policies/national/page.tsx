import type { Metadata } from "next";
import Link from "next/link";
import { getNationalPolicies } from "@/features/policy/services/policyService";
import { PolicyList } from "@/features/policy/components/PolicyList";

export const metadata: Metadata = { title: "国家政策" };

// 国家强基计划关键信息（公开信息，无需 mock）
const KEY_FACTS = [
  { label: "实施年份", value: "2020 年起" },
  { label: "试点高校", value: "39 所" },
  { label: "招生方向", value: "数学、物理、化学、生物、历史、哲学、古文字学等" },
  { label: "高考成绩占比", value: "不低于 85%" },
  { label: "录取模式", value: "高考成绩 + 高校考核 + 综合素质评价" },
  { label: "报名入口", value: "阳光高考平台统一报名" },
];

export default function NationalPolicyPage() {
  const policies = getNationalPolicies();

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      {/* 面包屑 */}
      <div
        style={{
          fontSize: 13,
          color: "var(--color-text-muted)",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Link
          href="/policies"
          style={{ color: "var(--color-primary)", textDecoration: "none" }}
        >
          政策专题
        </Link>
        <span>›</span>
        <span>国家政策</span>
      </div>

      {/* 页头 */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <span
            style={{
              padding: "3px 10px",
              borderRadius: 999,
              background: "#ede9fe",
              color: "#7c3aed",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            国家级
          </span>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0 }}>
            国家强基计划政策
          </h1>
        </div>
        <p style={{ color: "var(--color-text-muted)", fontSize: 14, margin: 0 }}>
          教育部根政策 · 阳光高考专题 · 国家层面官方文件汇总
        </p>
      </div>

      {/* 关键事实卡片 */}
      <div
        className="card"
        style={{
          padding: "20px 24px",
          marginBottom: 32,
          borderLeft: "4px solid #7c3aed",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "var(--color-text-muted)",
            marginBottom: 14,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          强基计划核心规则（公开信息）
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 14,
          }}
        >
          {KEY_FACTS.map(({ label, value }) => (
            <div key={label}>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--color-text-muted)",
                  marginBottom: 3,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {label}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)" }}>
                {value}
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: 11,
            color: "var(--color-text-faint)",
            margin: "14px 0 0",
          }}
        >
          以上信息来源于教育部公开政策文件，仅作结构化展示。具体规则以当年官方发布为准，请点击下方来源链接查阅原文。
        </p>
      </div>

      {/* 政策文件列表 */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 14 }}>
          官方政策文件（{policies.length} 条）
        </h2>
        <PolicyList
          policies={policies}
          emptyTitle="暂无国家级政策数据"
          emptyDesc="正式数据持续录入中"
        />
      </section>

      {/* 说明 */}
      <div
        style={{
          padding: "14px 18px",
          borderRadius: 8,
          background: "var(--color-bg-subtle)",
          border: "1px solid var(--color-border)",
          fontSize: 13,
          color: "var(--color-text-muted)",
          lineHeight: 1.75,
        }}
      >
        <strong style={{ color: "var(--color-text)" }}>关于国家层面政策：</strong>
        <br />
        国家层面有教育部根政策与阳光高考专题；省级层面常见省级教育考试院专题页、报考说明、公示；
        高校层面有招生简章、入围标准、录取结果通知。各层级信息来源与格式差异较大，本平台按来源等级标注，请以各官方页面为准。
      </div>
    </div>
  );
}
