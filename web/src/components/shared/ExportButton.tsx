type ExportFormat = "excel" | "png";

type Props = {
  format: ExportFormat;
  disabled?: boolean;
  label?: string;
};

const FORMAT_CONFIG: Record<ExportFormat, { label: string; icon: string; color: string }> = {
  excel: {
    label: "导出 Excel",
    icon: "⬇",
    color: "#16a34a",
  },
  png: {
    label: "导出 PNG",
    icon: "🖼",
    color: "#2563eb",
  },
};

export function ExportButton({ format, disabled = true, label }: Props) {
  const cfg = FORMAT_CONFIG[format];
  const displayLabel = label ?? cfg.label;

  return (
    <button
      disabled={disabled}
      title={disabled ? "导出功能即将上线" : displayLabel}
      onClick={() => {
        if (!disabled) {
          // 占位：后续接入真实导出逻辑
          console.warn("Export not implemented");
        }
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "5px 10px",
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 500,
        border: `1px solid var(--color-border)`,
        background: disabled ? "var(--color-bg-subtle)" : cfg.color,
        color: disabled ? "var(--color-text-faint)" : "#fff",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.65 : 1,
        transition: "opacity 0.1s",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontSize: 11 }}>{cfg.icon}</span>
      {displayLabel}
    </button>
  );
}
