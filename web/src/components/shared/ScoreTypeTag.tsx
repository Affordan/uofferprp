import type { ScoreType } from "@/types/score";

const TYPE_CONFIG: Record<
  ScoreType,
  { color: string; bg: string; border: string }
> = {
  入围线: {
    color: "#2563eb",
    bg: "#dbeafe",
    border: "#bfdbfe",
  },
  校测结果: {
    color: "#7c3aed",
    bg: "#ede9fe",
    border: "#ddd6fe",
  },
  拟录取综合成绩: {
    color: "#0891b2",
    bg: "#cffafe",
    border: "#a5f3fc",
  },
  最终录取结果: {
    color: "#16a34a",
    bg: "#dcfce7",
    border: "#bbf7d0",
  },
  结果通知类: {
    color: "#64748b",
    bg: "#f1f5f9",
    border: "#e2e8f0",
  },
};

type Props = {
  type: ScoreType;
};

export function ScoreTypeTag({ type }: Props) {
  const cfg = TYPE_CONFIG[type];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 500,
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.border}`,
        whiteSpace: "nowrap",
      }}
    >
      {type}
    </span>
  );
}
