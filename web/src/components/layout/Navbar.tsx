"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "首页", href: "/" },
  { label: "政策专题", href: "/policies" },
  { label: "分数线查询", href: "/scores" },
  { label: "高校库", href: "/universities" },
  { label: "高校对比", href: "/compare" },
  { label: "数据说明", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      style={{
        background: "var(--color-bg-card)",
        borderBottom: "1px solid var(--color-border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "var(--color-primary)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            强基
          </span>
          <span
            style={{
              fontWeight: 700,
              fontSize: 16,
              color: "var(--color-text)",
              letterSpacing: "-0.01em",
            }}
          >
            强基信息平台
          </span>
        </Link>

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            overflowX: "auto",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: "6px 12px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-text-muted)",
                  background: isActive
                    ? "var(--color-primary-light)"
                    : "transparent",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.12s, background 0.12s",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
