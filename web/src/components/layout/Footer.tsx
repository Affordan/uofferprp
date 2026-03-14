import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg-card)",
        borderTop: "1px solid var(--color-border)",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          {/* 品牌 */}
          <div style={{ maxWidth: 320 }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: "var(--color-text)",
                marginBottom: 6,
              }}
            >
              强基信息平台
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
              }}
            >
              面向考生、家长与升学研究者的强基计划官方政策与分数线查询平台。
              所有数据尽量来源于官方渠道，并保留原始出处。
            </p>
          </div>

          {/* 链接 */}
          <div
            style={{
              display: "flex",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--color-text-muted)",
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                功能
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "政策专题", href: "/policies" },
                  { label: "分数线查询", href: "/scores" },
                  { label: "高校库", href: "/universities" },
                  { label: "高校对比", href: "/compare" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: 13,
                      color: "var(--color-text-muted)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--color-text-muted)",
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                说明
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Link
                  href="/about"
                  style={{
                    fontSize: 13,
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                  }}
                >
                  数据说明
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 底部声明 */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: 16,
            fontSize: 12,
            color: "var(--color-text-faint)",
            lineHeight: 1.6,
          }}
        >
          <p>
            当前展示数据为演示用途，不代表真实官方录取结果。请以各高校及教育主管部门官方发布为准。
          </p>
          <p style={{ marginTop: 4 }}>
            © {new Date().getFullYear()} 强基信息平台 Demo
          </p>
        </div>
      </div>
    </footer>
  );
}
