import type { SourceLevel } from "@/types/source";

const LEVEL_CONFIG: Record<
  SourceLevel,
  { label: string; color: string; bg: string; title: string }
> = {
  A: {
    label: "A",
    color: "var(--color-source-a)",
    bg: "var(--color-source-a-bg)",
    title: "教育部 / 阳光高考 / 省级教育考试机构 / 高校官方招生网",
  },
  B: {
    label: "B",
    color: "var(--color-source-b)",
    bg: "var(--color-source-b-bg)",
    title: "高校二级单位官方页面",
  },
  C: {
    label: "C",
    color: "var(--color-source-c)",
    bg: "var(--color-source-c-bg)",
    title: "权威媒体转载",
  },
  D: {
    label: "D",
    color: "var(--color-source-d)",
    bg: "var(--color-source-d-bg)",
    title: "非官方整理页",
  },
};

type Props = {
  level: SourceLevel;
  showLabel?: boolean;
};

export function SourceBadge({ level, showLabel = true }: Props) {
  const cfg = LEVEL_CONFIG[level];
  return (
    <span
      title={cfg.title}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "2px 7px",
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 700,
        color: cfg.color,
        background: cfg.bg,
        whiteSpace: "nowrap",
        cursor: "default",
        letterSpacing: "0.03em",
      }}
    >
      {cfg.label}
      {showLabel && (
        <span style={{ fontWeight: 400, fontSize: 11 }}>级来源</span>
      )}
    </span>
  );
}
