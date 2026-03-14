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
          <div style={{ maxWidth: 320 }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: 14,
                color: "var(--color-text)",
                marginBottom: 6,
              }}
            >
              Uoffer 研录
            </div>
            <p
              style={{
                fontSize: 12,
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
              }}
            >
              面向考生、家长与升学研究者的强基计划信息查询平台。
              数据来源于官方渠道，保留原始出处与来源等级标注。
            </p>
          </div>

          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            <FooterGroup
              title="功能"
              links={[
                { label: "政策专题", href: "/policies" },
                { label: "分数线查询", href: "/scores" },
                { label: "高校库", href: "/universities" },
                { label: "高校对比", href: "/compare" },
              ]}
            />
            <FooterGroup
              title="关于"
              links={[
                { label: "数据说明", href: "/about" },
              ]}
            />
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: 16,
            fontSize: 11,
            color: "var(--color-text-faint)",
            lineHeight: 1.6,
          }}
        >
          <p style={{ margin: 0 }}>
            当前为演示版本，展示数据不代表真实官方录取结果。请以各高校及教育主管部门官方发布为准。
          </p>
          <p style={{ margin: "4px 0 0" }}>
            &copy; {new Date().getFullYear()} Uoffer 研录
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "var(--color-text-muted)",
          marginBottom: 10,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: 12,
              color: "var(--color-text-muted)",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
