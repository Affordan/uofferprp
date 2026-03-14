"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { SourceDocument } from "@/types/source";
import { SourceBadge } from "@/components/shared/SourceBadge";

const DOC_TYPE_LABELS: Record<string, string> = {
  notice: "通知 / 公告",
  brochure: "招生简章",
  policy: "政策文件",
  result: "录取结果",
  score_table: "分数线表",
  other: "其他",
};

const PARSE_STATUS_LABELS: Record<string, { label: string; color: string }> = {
  pending: { label: "待解析", color: "var(--color-text-faint)" },
  parsed: { label: "已解析", color: "var(--color-source-a)" },
  failed: { label: "解析失败", color: "#ef4444" },
  manual: { label: "人工录入", color: "var(--color-gold)" },
};

type Props = {
  source: SourceDocument | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SourceDrawer({ source, open, onOpenChange }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* 遮罩 */}
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.35)",
            zIndex: 100,
          }}
        />

        {/* 抽屉面板：右侧固定 */}
        <Dialog.Content
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: "auto",
            width: "min(480px, 100vw)",
            background: "var(--color-bg-card)",
            boxShadow: "-4px 0 24px rgba(0, 0, 0, 0.12)",
            zIndex: 101,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
          // 覆盖 Radix 默认的居中 transform
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {/* 头部 */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 12,
              padding: "20px 24px 16px",
              borderBottom: "1px solid var(--color-border)",
              flexShrink: 0,
            }}
          >
            <div>
              <Dialog.Title
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--color-text)",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                来源详情
              </Dialog.Title>
              <Dialog.Description
                style={{
                  fontSize: 12,
                  color: "var(--color-text-muted)",
                  marginTop: 2,
                }}
              >
                官方来源信息与解析状态
              </Dialog.Description>
            </div>
            <Dialog.Close
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-subtle)",
                cursor: "pointer",
                fontSize: 16,
                color: "var(--color-text-muted)",
                flexShrink: 0,
              }}
              aria-label="关闭"
            >
              ✕
            </Dialog.Close>
          </div>

          {/* 内容区（可滚动） */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {!source ? (
              <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>
                未选择来源
              </p>
            ) : (
              <>
                {/* 标题 */}
                <div>
                  <Label>文件标题</Label>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--color-text)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {source.title}
                  </p>
                </div>

                {/* 来源等级 */}
                <Row label="来源等级">
                  <SourceBadge level={source.source_level} showLabel />
                </Row>

                {/* 发布机构 */}
                <Row label="发布机构">
                  <span style={{ fontSize: 13, color: "var(--color-text)" }}>
                    {source.publisher}
                  </span>
                </Row>

                {/* 发布时间 */}
                <Row label="发布时间">
                  <span style={{ fontSize: 13, color: "var(--color-text)" }}>
                    {source.publish_date}
                  </span>
                </Row>

                {/* 文件类型 */}
                <Row label="文件类型">
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: "var(--color-bg-subtle)",
                      border: "1px solid var(--color-border)",
                      fontSize: 12,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {DOC_TYPE_LABELS[source.doc_type] ?? source.doc_type}
                  </span>
                </Row>

                {/* 是否官方 */}
                {source.is_official !== undefined && (
                  <Row label="是否官方">
                    <span
                      style={{
                        fontSize: 13,
                        color: source.is_official
                          ? "var(--color-source-a)"
                          : "#ef4444",
                        fontWeight: 600,
                      }}
                    >
                      {source.is_official ? "✓ 官方来源" : "✗ 非官方"}
                    </span>
                  </Row>
                )}

                {/* 解析状态 */}
                {source.parse_status && (
                  <Row label="解析状态">
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: PARSE_STATUS_LABELS[source.parse_status]?.color,
                      }}
                    >
                      {PARSE_STATUS_LABELS[source.parse_status]?.label ??
                        source.parse_status}
                    </span>
                  </Row>
                )}

                {/* 官方链接 */}
                <div>
                  <Label>官方链接</Label>
                  <a
                    href={source.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 12,
                      color: "var(--color-primary)",
                      wordBreak: "break-all",
                      lineHeight: 1.6,
                    }}
                  >
                    {source.official_url}
                  </a>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--color-text-faint)",
                      marginTop: 4,
                    }}
                  >
                    演示链接不可访问，实际数据将对接真实官方来源
                  </p>
                </div>

                {/* 摘要 */}
                {source.summary && (
                  <div>
                    <Label>内容摘要</Label>
                    <p
                      style={{
                        fontSize: 13,
                        color: "var(--color-text-muted)",
                        lineHeight: 1.75,
                        margin: 0,
                        padding: "12px 14px",
                        background: "var(--color-bg-subtle)",
                        borderRadius: 8,
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {source.summary}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* 底部 */}
          <div
            style={{
              borderTop: "1px solid var(--color-border)",
              padding: "12px 24px",
              flexShrink: 0,
            }}
          >
            <p style={{ fontSize: 11, color: "var(--color-text-faint)", margin: 0 }}>
              当前为演示数据，来源信息仅供展示。按 ESC 或点击背景关闭。
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// 内部小组件
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        color: "var(--color-text-muted)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        marginBottom: 6,
      }}
    >
      {children}
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
    </div>
  );
}
