type Props = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};

export function EmptyState({
  title = "暂无数据",
  description = "当前条件下没有找到相关记录",
  icon,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        color: "var(--color-text-muted)",
        textAlign: "center",
      }}
    >
      {icon && (
        <div style={{ marginBottom: 16, opacity: 0.4, fontSize: 40 }}>
          {icon}
        </div>
      )}
      {!icon && (
        <div
          style={{
            marginBottom: 16,
            opacity: 0.25,
            fontSize: 36,
          }}
        >
          ○
        </div>
      )}
      <div
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: "var(--color-text)",
          marginBottom: 6,
        }}
      >
        {title}
      </div>
      <p style={{ fontSize: 13, color: "var(--color-text-muted)", margin: 0 }}>
        {description}
      </p>
    </div>
  );
}
