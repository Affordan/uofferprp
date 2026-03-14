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
        background: "rgba(255,255,255,0.95)",
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
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Brand */}
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
              width: 28,
              height: 28,
              borderRadius: 6,
              background: "var(--color-primary)",
              color: "#fff",
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: "-0.02em",
            }}
          >
            U
          </span>
          <span
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: "var(--color-text)",
              letterSpacing: "-0.01em",
            }}
          >
            Uoffer <span style={{ fontWeight: 400, color: "var(--color-text-muted)" }}>研录</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
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
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-text-muted)",
                  background: isActive
                    ? "var(--color-primary-50)"
                    : "transparent",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.1s, background 0.1s",
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
