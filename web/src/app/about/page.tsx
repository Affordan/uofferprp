import type { Metadata } from "next";

export const metadata: Metadata = { title: "数据说明" };

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>数据说明</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 32 }}>
        平台数据来源、准确性说明与分数类型定义
      </p>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
          分数线类型定义
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { type: "入围线", desc: "依据高考成绩进入校测名单的最低标准" },
            { type: "校测结果", desc: "校考成绩或校测相关结果说明" },
            { type: "拟录取综合成绩", desc: "高考+校测+综合素质合成后的分数或最低线" },
            { type: "最终录取结果", desc: "正式录取名单或录取最低分信息" },
            { type: "结果通知类", desc: "只有结果公告、但未公开完整分数表的数据" },
          ].map(({ type, desc }) => (
            <div
              key={type}
              style={{
                padding: "12px 16px",
                borderRadius: 8,
                background: "var(--color-bg-subtle)",
                border: "1px solid var(--color-border)",
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 14 }}>{type}</span>
              <span style={{ color: "var(--color-text-muted)", fontSize: 13, marginLeft: 12 }}>
                {desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
          来源等级说明
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "var(--color-text-muted)" }}>
          <p><strong>A 级：</strong>教育部 / 阳光高考 / 省级教育考试机构 / 高校官方招生网</p>
          <p><strong>B 级：</strong>高校二级单位官方页面</p>
          <p><strong>C 级：</strong>权威媒体转载</p>
          <p><strong>D 级：</strong>非官方整理页</p>
          <p style={{ marginTop: 8 }}>前台默认只展示 A、B 级数据；C、D 级仅供参考。</p>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
          数据免责声明
        </h2>
        <p style={{ fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.8 }}>
          当前平台处于 Demo 阶段，展示的分数线数据为演示用途，不代表真实官方录取结果。
          请以各高校及教育主管部门官方发布的信息为准。任何正式决策前，请务必核对官方原始来源。
        </p>
      </section>
    </div>
  );
}
