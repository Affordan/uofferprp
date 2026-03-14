"use client";

import { useState } from "react";
import type { SourceDocument } from "@/types/source";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { SourceDrawer } from "./SourceDrawer";
import { EmptyState } from "@/components/shared/EmptyState";

const DOC_TYPE_LABELS: Record<string, string> = {
  notice: "通知",
  brochure: "招生简章",
  policy: "政策",
  result: "录取结果",
  score_table: "分数线表",
  other: "其他",
};

type Props = {
  docs: SourceDocument[];
  emptyTitle?: string;
  emptyDesc?: string;
};

export function SourceDocList({ docs, emptyTitle, emptyDesc }: Props) {
  const [selected, setSelected] = useState<SourceDocument | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpen = (doc: SourceDocument) => {
    setSelected(doc);
    setDrawerOpen(true);
  };

  if (docs.length === 0) {
    return (
      <EmptyState
        title={emptyTitle ?? "暂无文档"}
        description={emptyDesc ?? "当前高校暂无收录的来源文档"}
      />
    );
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {docs.map((doc) => (
          <div
            key={doc.id}
            className="card"
            style={{ padding: "14px 18px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              {/* 左侧信息 */}
              <div style={{ flex: 1, minWidth: 200 }}>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--color-text)",
                    lineHeight: 1.5,
                    marginBottom: 6,
                  }}
                >
                  {doc.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <SourceBadge level={doc.source_level} showLabel={false} />
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
                    {DOC_TYPE_LABELS[doc.doc_type] ?? doc.doc_type}
                  </span>
                  <span
                    style={{ fontSize: 11, color: "var(--color-text-faint)" }}
                  >
                    {doc.publish_date}
                  </span>
                  <span
                    style={{ fontSize: 11, color: "var(--color-text-faint)" }}
                  >
                    {doc.publisher}
                  </span>
                </div>
              </div>

              {/* 右侧操作 */}
              <button
                onClick={() => handleOpen(doc)}
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
                  flexShrink: 0,
                }}
              >
                查看来源
              </button>
            </div>
          </div>
        ))}
      </div>

      <SourceDrawer
        source={selected}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
      />
    </>
  );
}
