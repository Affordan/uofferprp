type Props = {
  title?: string;
  description?: string;
};

export function EmptyState({
  title = "暂无数据",
  description = "当前条件下没有找到相关记录",
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "56px 24px",
        color: "var(--color-text-muted)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--color-bg-subtle)",
          border: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
          fontSize: 20,
          color: "var(--color-text-faint)",
        }}
      >
        &mdash;
      </div>
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "var(--color-text)",
          marginBottom: 4,
        }}
      >
        {title}
      </div>
      <p style={{ fontSize: 13, color: "var(--color-text-muted)", margin: 0, maxWidth: 320 }}>
        {description}
      </p>
    </div>
  );
}
