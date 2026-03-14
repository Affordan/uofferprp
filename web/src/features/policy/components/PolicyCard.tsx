"use client";

import { useState } from "react";
import type { PolicyItem } from "@/types/policy";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { SourceDrawer } from "@/features/university/components/SourceDrawer";

const SCOPE_LABEL: Record<string, { text: string; color: string; bg: string }> = {
  national: { text: "国家级", color: "#7c3aed", bg: "#ede9fe" },
  province: { text: "省级", color: "#0891b2", bg: "#cffafe" },
  university: { text: "校级", color: "#16a34a", bg: "#dcfce7" },
};

const DOC_TYPE_LABEL: Record<string, string> = {
  policy: "政策文件",
  notice: "通知 / 公告",
  brochure: "招生简章",
  result: "录取结果",
  score_table: "分数线表",
  other: "其他",
};

type Props = {
  policy: PolicyItem;
  showScope?: boolean;
};

export function PolicyCard({ policy, showScope = false }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scopeCfg = SCOPE_LABEL[policy.scope_type];

  return (
    <>
      <div className="card" style={{ padding: "18px 22px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          {/* 主信息 */}
          <div style={{ flex: 1, minWidth: 220 }}>
            {/* 标签行 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 8,
              }}
            >
              {showScope && (
                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 700,
                    color: scopeCfg.color,
                    background: scopeCfg.bg,
                  }}
                >
                  {scopeCfg.text}
                </span>
              )}
              <SourceBadge level={policy.source.source_level} showLabel={false} />
              <span
                style={{
                  padding: "1px 6px",
                  borderRadius: 4,
                  background: "var(--color-bg-subtle)",
                  border: "1px solid var(--color-border)",
                  fontSize: 11,
                  color: "var(--color-text-muted)",
                }}
              >
                {DOC_TYPE_LABEL[policy.source.doc_type] ?? policy.source.doc_type}
              </span>
              <span style={{ fontSize: 11, color: "var(--color-text-faint)" }}>
                {policy.source.publish_date}
              </span>
              <span style={{ fontSize: 11, color: "var(--color-text-faint)" }}>
                {policy.effective_year} 年起施行
              </span>
            </div>

            {/* 标题 */}
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "var(--color-text)",
                lineHeight: 1.5,
                marginBottom: 6,
              }}
            >
              {policy.topic}
            </div>

            {/* 发布机构 */}
            <div
              style={{
                fontSize: 12,
                color: "var(--color-text-muted)",
                marginBottom: 8,
              }}
            >
              {policy.source.publisher}
            </div>

            {/* 摘要 */}
            <p
              style={{
                fontSize: 13,
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {policy.summary}
            </p>
          </div>

          {/* 右侧操作 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "flex-end",
              flexShrink: 0,
            }}
          >
            <button
              onClick={() => setDrawerOpen(true)}
              style={{
                padding: "5px 12px",
                borderRadius: 6,
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-subtle)",
                fontSize: 12,
                color: "var(--color-primary)",
                cursor: "pointer",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              查看来源
            </button>
            <a
              href={policy.source.official_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "5px 12px",
                borderRadius: 6,
                border: "1px solid var(--color-primary)",
                background: "var(--color-primary-light)",
                fontSize: 12,
                color: "var(--color-primary)",
                fontWeight: 500,
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              官方链接 ↗
            </a>
          </div>
        </div>
      </div>

      <SourceDrawer
        source={policy.source}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      />
    </>
  );
}
