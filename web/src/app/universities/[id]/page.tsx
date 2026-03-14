import type { Metadata } from "next";
import Link from "next/link";
import { getUniversityById } from "@/features/university/services/universityService";
import { UniversityDetailClient } from "@/features/university/components/UniversityDetailClient";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const uni = getUniversityById(id);
  return { title: uni ? `${uni.name} · 强基计划` : "高校详情" };
}

export default async function UniversityDetailPage({ params }: Props) {
  const { id } = await params;
  const uni = getUniversityById(id);

  if (!uni) {
    return (
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        <div
          style={{
            textAlign: "center",
            padding: "80px 24px",
            color: "var(--color-text-muted)",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 16, opacity: 0.2, fontWeight: 300 }}>&mdash;</div>
          <h1
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: 8,
            }}
          >
            未找到该高校
          </h1>
          <p style={{ fontSize: 13, marginBottom: 20 }}>
            高校 ID「{id}」不在当前收录范围内，或数据尚未录入。
          </p>
          <Link
            href="/universities"
            style={{
              padding: "9px 20px",
              borderRadius: 8,
              background: "var(--color-primary)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            返回高校库
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      {/* 面包屑 */}
      <div
        style={{
          fontSize: 13,
          color: "var(--color-text-muted)",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Link
          href="/universities"
          style={{ color: "var(--color-primary)", textDecoration: "none" }}
        >
          高校库
        </Link>
        <span>›</span>
        <span>{uni.name}</span>
      </div>

      <UniversityDetailClient university={uni} />
    </div>
  );
}
