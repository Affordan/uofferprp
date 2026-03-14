"use client";

import { useState } from "react";
import type { ScoreRecord } from "@/types/score";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { ScoreTypeTag } from "@/components/shared/ScoreTypeTag";
import { SourceDrawer } from "@/features/university/components/SourceDrawer";
import type { SourceDocument } from "@/types/source";

const TH: React.CSSProperties = {
  padding: "8px 12px",
  textAlign: "left",
  fontSize: 11,
  fontWeight: 700,
  color: "var(--color-text-muted)",
  background: "var(--color-bg-subtle)",
  borderBottom: "2px solid var(--color-border)",
  whiteSpace: "nowrap",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

const TD: React.CSSProperties = {
  padding: "9px 12px",
  borderBottom: "1px solid var(--color-border)",
  fontSize: 13,
  verticalAlign: "middle",
};

type Props = {
  data: ScoreRecord[];
};

export function CompareTable({ data }: Props) {
  const [drawerSource, setDrawerSource] = useState<SourceDocument | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openSource = (r: ScoreRecord) => {
    setDrawerSource({
      id: r.id,
      title: r.source_title,
      source_level: r.source_level,
      publisher: "",
      official_url: r.source_url,
      publish_date: r.source_date,
      doc_type: "score_table",
    });
    setDrawerOpen(true);
  };

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={TH}>学校</th>
              <th style={TH}>省份</th>
              <th style={TH}>年份</th>
              <th style={TH}>专业/方向</th>
              <th style={TH}>类型</th>
              <th style={TH}>最低分</th>
              <th style={TH}>科类</th>
              <th style={TH}>来源</th>
              <th style={TH}>更新</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr
                key={r.id}
                style={{
                  background: i % 2 === 0 ? "var(--color-bg-card)" : "var(--color-bg)",
                }}
              >
                <td style={{ ...TD, fontWeight: 600 }}>{r.university}</td>
                <td style={TD}>{r.province}</td>
                <td style={TD}>{r.year}</td>
                <td style={TD}>{r.major_or_track ?? <Muted />}</td>
                <td style={TD}><ScoreTypeTag type={r.score_type} /></td>
                <td style={TD}>
                  {r.min_score != null ? (
                    <span style={{ fontWeight: 700, color: "var(--color-primary)", fontSize: 15 }}>
                      {r.min_score}
                    </span>
                  ) : (
                    <Muted />
                  )}
                </td>
                <td style={TD}>{r.subject_track ?? <Muted />}</td>
                <td style={TD}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <SourceBadge level={r.source_level} showLabel={false} />
                    <button
                      onClick={() => openSource(r)}
                      style={{
                        fontSize: 12,
                        color: "var(--color-primary)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      查看
                    </button>
                  </div>
                </td>
                <td style={{ ...TD, fontSize: 12, color: "var(--color-text-faint)" }}>
                  {r.source_date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: "8px 12px", fontSize: 12, color: "var(--color-text-faint)" }}>
          共 {data.length} 条对比记录
        </div>
      </div>
      <SourceDrawer source={drawerSource} open={drawerOpen} onOpenChange={setDrawerOpen} />
    </>
  );
}

function Muted() {
  return <span style={{ color: "var(--color-text-faint)" }}>&mdash;</span>;
}
