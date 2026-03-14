type Props = {
  rows?: number;
  cols?: number;
};

function SkeletonLine({ width = "100%", height = 14 }: { width?: string | number; height?: number }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 4,
        background: "linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)",
        backgroundSize: "200% 100%",
        animation: "skeleton-shimmer 1.4s infinite",
      }}
    />
  );
}

export function LoadingSkeleton({ rows = 5, cols = 4 }: Props) {
  return (
    <>
      <style>{`
        @keyframes skeleton-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: 12,
              padding: "12px 0",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            {Array.from({ length: cols }).map((_, j) => (
              <SkeletonLine key={j} width={j === 0 ? "60%" : "80%"} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
