import Link from "next/link";
import type { University } from "@/types/university";

type Props = {
  university: University;
};

export function UniversityCard({ university }: Props) {
  return (
    <Link
      href={`/universities/${university.id}`}
      style={{ textDecoration: "none" }}
    >
      <div
        className="card card-hover"
        style={{
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          height: "100%",
          cursor: "pointer",
        }}
      >
        {/* 头部：名称 + 简称 */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "var(--color-text)",
              lineHeight: 1.3,
            }}
          >
            {university.name}
          </span>
          <span
            style={{
              padding: "2px 7px",
              borderRadius: 999,
              background: "var(--color-primary-light)",
              color: "var(--color-primary)",
              fontSize: 11,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {university.short_name}
          </span>
        </div>

        {/* 省份 */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
            {university.province}
          </span>
        </div>

        {/* 简介 */}
        {university.intro && (
          <p
            style={{
              fontSize: 13,
              color: "var(--color-text-muted)",
              lineHeight: 1.65,
              margin: 0,
              flex: 1,
              // 最多 3 行
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {university.intro}
          </p>
        )}

        {/* 链接提示 */}
        <div
          style={{
            fontSize: 12,
            color: "var(--color-primary)",
            fontWeight: 500,
            marginTop: 4,
          }}
        >
          查看详情 →
        </div>
      </div>
    </Link>
  );
}
