import type { ScoreRecord } from "@/types/score";
import { ScoreTypeTag } from "@/components/shared/ScoreTypeTag";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { EmptyState } from "@/components/shared/EmptyState";

type Props = {
  scores: ScoreRecord[];
};

const TH_STYLE: React.CSSProperties = {
  padding: "9px 12px",
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

const TD_STYLE: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid var(--color-border)",
  fontSize: 13,
  verticalAlign: "middle",
};

export function UniversityScoresTab({ scores }: Props) {
  if (scores.length === 0) {
    return (
      <EmptyState
        title="暂无分数线数据"
        description="当前高校暂无收录的分数线记录，正式数据持续录入中"
      />
    );
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 13,
        }}
      >
        <thead>
          <tr>
            <th style={TH_STYLE}>年份</th>
            <th style={TH_STYLE}>省份</th>
            <th style={TH_STYLE}>专业 / 方向</th>
            <th style={TH_STYLE}>科类</th>
            <th style={TH_STYLE}>类型</th>
            <th style={TH_STYLE}>最低分</th>
            <th style={TH_STYLE}>来源</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((s, i) => (
            <tr
              key={s.id}
              style={{
                background:
                  i % 2 === 0
                    ? "var(--color-bg-card)"
                    : "var(--color-bg)",
              }}
            >
              <td style={TD_STYLE}>
                <span style={{ fontWeight: 600 }}>{s.year}</span>
              </td>
              <td style={TD_STYLE}>{s.province}</td>
              <td style={TD_STYLE}>
                {s.major_or_track ?? (
                  <span style={{ color: "var(--color-text-faint)" }}>—</span>
                )}
              </td>
              <td style={TD_STYLE}>
                {s.subject_track ?? (
                  <span style={{ color: "var(--color-text-faint)" }}>—</span>
                )}
              </td>
              <td style={TD_STYLE}>
                <ScoreTypeTag type={s.score_type} />
              </td>
              <td style={TD_STYLE}>
                {s.min_score != null ? (
                  <span
                    style={{
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      fontSize: 15,
                    }}
                  >
                    {s.min_score}
                    {s.score_unit && s.score_unit !== "分" && (
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 400,
                          color: "var(--color-text-muted)",
                          marginLeft: 2,
                        }}
                      >
                        {s.score_unit}
                      </span>
                    )}
                  </span>
                ) : (
                  <span style={{ color: "var(--color-text-faint)" }}>—</span>
                )}
              </td>
              <td style={TD_STYLE}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <SourceBadge level={s.source_level} showLabel={false} />
                  <a
                    href={s.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.source_title}
                    style={{
                      fontSize: 12,
                      color: "var(--color-primary)",
                      textDecoration: "none",
                    }}
                  >
                    {s.source_date}
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          padding: "8px 12px",
          fontSize: 12,
          color: "var(--color-text-muted)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        共 {scores.length} 条记录（演示数据）
      </div>
    </div>
  );
}
