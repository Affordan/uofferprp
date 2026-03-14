import type { Metadata } from "next";
import Link from "next/link";
import { SourceBadge } from "@/components/shared/SourceBadge";

export const metadata: Metadata = { title: "数据说明" };

const SCORE_TYPES = [
  { type: "入围线", desc: "依据高考成绩进入校测名单的最低标准。各高校按省份公布，是最常见的公开数据类型。" },
  { type: "校测结果", desc: "校考成绩或校测相关结果说明。部分高校会公布校测通过线或成绩分布。" },
  { type: "拟录取综合成绩", desc: "高考成绩 + 校测成绩 + 综合素质评价合成后的总分或最低线。高考成绩占比不低于 85%。" },
  { type: "最终录取结果", desc: "正式录取名单或录取最低分信息。部分高校仅在平台上提供查询，不公开完整分数表。" },
  { type: "结果通知类", desc: "只有结果公告但未公开完整分数表的数据。仅记录通知存在，不含结构化分值。" },
];

const SOURCE_LEVELS = [
  { level: "A" as const, label: "A 级", desc: "教育部 / 阳光高考 / 省级教育考试机构 / 高校官方招生网" },
  { level: "B" as const, label: "B 级", desc: "高校二级单位官方页面" },
  { level: "C" as const, label: "C 级", desc: "权威媒体转载" },
  { level: "D" as const, label: "D 级", desc: "非官方整理页" },
];

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "40px 24px" }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>数据说明</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: 13, marginBottom: 40 }}>
        平台定位、数据来源、分数类型定义、使用须知与免责声明
      </p>

      {/* 1. 平台简介 */}
      <Section title="关于本平台">
        <P>
          Uoffer 研录是一个面向考生、家长与升学研究者的强基计划信息查询平台。当前为前台演示版（MVP），
          旨在展示强基计划政策归档、分省分专业分数线查询与多校对比的核心能力。
        </P>
        <P>
          平台适合用于：了解强基计划政策框架、查阅各校各省分数线、横向对比不同高校的入围标准，
          以及追溯每条数据的官方原始来源。
        </P>
      </Section>

      {/* 2. 数据来源说明 */}
      <Section title="数据来源与等级">
        <P>
          平台数据尽可能来源于教育主管部门、省级教育考试院和高校官方招生网站。每条数据均标注来源等级与原始链接，
          便于用户自行核对。我们采用四级来源分类体系：
        </P>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
          {SOURCE_LEVELS.map(({ level, label, desc }) => (
            <div
              key={level}
              className="card"
              style={{
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <SourceBadge level={level} showLabel={false} />
              <div>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{label}</span>
                <span style={{ fontSize: 12, color: "var(--color-text-muted)", marginLeft: 8 }}>
                  {desc}
                </span>
              </div>
            </div>
          ))}
        </div>
        <P style={{ marginTop: 12 }}>
          前台默认展示 A、B 级数据。C、D 级数据仅供参考，不作为决策依据。
        </P>
      </Section>

      {/* 3. 分数线类型 */}
      <Section title="分数线类型定义">
        <P>
          强基计划录取流程涉及多个环节，不同环节产生的分数含义不同。高校公开口径各异，
          我们将数据归类为以下五种类型，<strong>不同类型默认不可直接混合比较</strong>：
        </P>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
          {SCORE_TYPES.map(({ type, desc }) => (
            <div
              key={type}
              className="card"
              style={{ padding: "10px 14px" }}
            >
              <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{type}</div>
              <div style={{ fontSize: 12, color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. 比较与使用说明 */}
      <Section title="比较与使用说明">
        <P>
          <strong>同年份、同类型更适合比较：</strong>不同年份的分数线受试题难度、报考人数等因素影响，
          不同分数类型（如入围线 vs. 综合成绩）含义不同，直接比较可能产生误导。
        </P>
        <P>
          <strong>跨省比较需要谨慎：</strong>各省高考满分不同（如上海满分 660 分、多数省份 750 分），
          赋分方式和选科制度也有差异，分数线数值不可直接等价。平台在跨省对比时会显示风险提示。
        </P>
        <P>
          <strong>部分数据仍为演示占位：</strong>当前版本中，分数线数据以演示数据为主，
          政策链接正在逐步替换为真实公开来源。请留意各页面底部的数据状态说明。
        </P>
      </Section>

      {/* 5. 当前版本边界 */}
      <Section title="当前版本说明">
        <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13, color: "var(--color-text-muted)" }}>
          <BulletItem>当前为前台演示版，尚未接入正式数据库与后台管理</BulletItem>
          <BulletItem>国家级政策页的部分链接已指向真实官方来源</BulletItem>
          <BulletItem>分数线数据以演示数据为主，来源链接标注为 example.com 的均为占位</BulletItem>
          <BulletItem>高校库已收录 39 所强基计划试点高校基础信息</BulletItem>
          <BulletItem>Excel 导出为基础功能，PNG 导出为最小可用版本</BulletItem>
          <BulletItem>后续版本将逐步接入真实数据源、完善导出格式、增加数据审核机制</BulletItem>
        </div>
      </Section>

      {/* 6. 免责声明 */}
      <Section title="免责声明" last>
        <div
          style={{
            padding: "16px 18px",
            borderRadius: 6,
            background: "var(--color-bg-subtle)",
            border: "1px solid var(--color-border)",
            fontSize: 13,
            color: "var(--color-text-muted)",
            lineHeight: 1.8,
          }}
        >
          <p style={{ margin: "0 0 8px" }}>
            本平台为信息整理与演示用途，不构成任何招生录取建议。平台展示的分数线、政策摘要、高校信息等内容，
            均以各教育主管部门和高校官方最新公告为准。
          </p>
          <p style={{ margin: 0 }}>
            用户在做出任何与升学相关的决定前，请务必核对官方原始来源，本平台不对因使用展示数据而产生的任何后果承担责任。
          </p>
        </div>
      </Section>

      {/* 底部导航 */}
      <div
        style={{
          marginTop: 40,
          paddingTop: 20,
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <Link href="/scores" style={{ fontSize: 13, color: "var(--color-primary)", textDecoration: "none" }}>
          分数线查询
        </Link>
        <Link href="/universities" style={{ fontSize: 13, color: "var(--color-primary)", textDecoration: "none" }}>
          高校库
        </Link>
        <Link href="/policies" style={{ fontSize: 13, color: "var(--color-primary)", textDecoration: "none" }}>
          政策专题
        </Link>
        <Link href="/compare" style={{ fontSize: 13, color: "var(--color-primary)", textDecoration: "none" }}>
          高校对比
        </Link>
      </div>
    </div>
  );
}

function Section({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <section style={{ marginBottom: last ? 0 : 36 }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: "var(--color-text)" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function P({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.8, margin: "0 0 8px", ...style }}>
      {children}
    </p>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
      <span style={{ color: "var(--color-text-faint)", flexShrink: 0 }}>&bull;</span>
      <span style={{ lineHeight: 1.7 }}>{children}</span>
    </div>
  );
}
