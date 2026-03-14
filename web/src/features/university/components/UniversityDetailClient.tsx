"use client";

import Link from "next/link";
import * as Tabs from "@radix-ui/react-tabs";
import type { University } from "@/types/university";
import { SourceDocList } from "./SourceDocList";
import { UniversityScoresTab } from "./UniversityScoresTab";
import {
  getBrochures,
  getUniversityDocs,
  getScoresByUniversity,
  getAllSourceDocs,
} from "@/features/university/services/universityService";

const TAB_TRIGGER_BASE: React.CSSProperties = {
  padding: "10px 18px",
  fontSize: 14,
  fontWeight: 500,
  color: "var(--color-text-muted)",
  background: "transparent",
  border: "none",
  borderBottom: "2px solid transparent",
  cursor: "pointer",
  transition: "color 0.12s, border-color 0.12s",
  whiteSpace: "nowrap",
};

type Props = {
  university: University;
};

export function UniversityDetailClient({ university }: Props) {
  const brochures = getBrochures(university.id);
  const docs = getUniversityDocs(university.id);
  const scores = getScoresByUniversity(university.id);
  const allSources = getAllSourceDocs(university.id);

  return (
    <div>
      {/* ── 基本信息面板 ──────────────────────────────── */}
      <div
        className="card"
        style={{
          padding: "28px 32px",
          marginBottom: 24,
          borderTop: "3px solid var(--color-primary)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {/* 主信息 */}
          <div style={{ flex: 1, minWidth: 240 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 8,
              }}
            >
              <h1
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: "var(--color-text)",
                  margin: 0,
                  letterSpacing: "-0.01em",
                }}
              >
                {university.name}
              </h1>
              <span
                style={{
                  padding: "3px 9px",
                  borderRadius: 999,
                  background: "var(--color-primary-light)",
                  color: "var(--color-primary)",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {university.short_name}
              </span>
              <span
                style={{
                  padding: "3px 9px",
                  borderRadius: 999,
                  background: "var(--color-bg-subtle)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                  fontSize: 12,
                }}
              >
                {university.province}
              </span>
            </div>

            {/* Tags */}
            {university.tags && university.tags.length > 0 && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                {university.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "2px 7px",
                      borderRadius: 4,
                      background: "var(--color-bg-subtle)",
                      border: "1px solid var(--color-border)",
                      fontSize: 11,
                      color: "var(--color-text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {university.discipline_note && (
              <p style={{ fontSize: 12, color: "var(--color-text-faint)", margin: "0 0 8px" }}>
                {university.discipline_note}
              </p>
            )}

            {university.intro && (
              <p
                style={{
                  fontSize: 13,
                  color: "var(--color-text-muted)",
                  lineHeight: 1.75,
                  margin: 0,
                  maxWidth: 620,
                }}
              >
                {university.intro}
              </p>
            )}
          </div>

          {/* Stats + compare link */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}>
            <Link
              href={`/compare?universities=${encodeURIComponent(university.name)}`}
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                border: "1px solid var(--color-primary)",
                background: "var(--color-primary-50)",
                color: "var(--color-primary)",
                fontSize: 12,
                fontWeight: 600,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              加入对比
            </Link>
          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            {[
              { label: "招生简章", value: brochures.length },
              { label: "分数线记录", value: scores.length },
              { label: "来源文档", value: allSources.length },
            ].map(({ label, value }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "var(--color-primary)",
                    lineHeight: 1.1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--color-text-muted)",
                    marginTop: 3,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ──────────────────────────────────────── */}
      <Tabs.Root defaultValue="brochure">
        {/* Tab 导航栏 */}
        <Tabs.List
          style={{
            display: "flex",
            borderBottom: "2px solid var(--color-border)",
            marginBottom: 20,
            overflowX: "auto",
          }}
          aria-label="高校信息"
        >
          {[
            { value: "brochure", label: `招生简章（${brochures.length}）` },
            { value: "scores", label: `分数线（${scores.length}）` },
            { value: "sources", label: `来源库（${docs.length}）` },
          ].map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              style={TAB_TRIGGER_BASE}
              // 激活态通过 data attribute 控制（Radix 注入 data-state）
              className="uni-tab-trigger"
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* 内嵌激活样式 */}
        <style>{`
          .uni-tab-trigger[data-state="active"] {
            color: var(--color-primary) !important;
            border-bottom-color: var(--color-primary) !important;
            font-weight: 600 !important;
          }
          .uni-tab-trigger:hover:not([data-state="active"]) {
            color: var(--color-text) !important;
          }
        `}</style>

        {/* 招生简章 Tab */}
        <Tabs.Content value="brochure">
          <SourceDocList
            docs={brochures}
            emptyTitle="暂无招生简章"
            emptyDesc="当前高校暂无收录的招生简章，正式数据持续录入中"
          />
        </Tabs.Content>

        {/* 分数线 Tab */}
        <Tabs.Content value="scores">
          <UniversityScoresTab scores={scores} />
          {scores.length > 0 && (
            <div
              style={{
                marginTop: 12,
                fontSize: 12,
                color: "var(--color-text-muted)",
                padding: "8px 12px",
                background: "var(--color-gold-light)",
                borderRadius: 8,
                border: "1px solid #fde68a",
              }}
            >
              分数线数据为演示数据，不代表真实录取结果。如需完整查询，请前往{" "}
              <a
                href={`/scores?university=${encodeURIComponent(university.name)}`}
                style={{ color: "var(--color-primary)", fontWeight: 500 }}
              >
                分数线查询页
              </a>{" "}
              使用筛选功能。
            </div>
          )}
        </Tabs.Content>

        {/* 来源库 Tab */}
        <Tabs.Content value="sources">
          <SourceDocList
            docs={docs}
            emptyTitle="暂无来源文档"
            emptyDesc="当前高校暂无收录的官方来源文档"
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
