import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: `高校详情 · ${id}` };
}

export default async function UniversityDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        高校详情 · {id}
      </h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 32 }}>
        招生简章 · 入围线 · 录取分数线 · 官方来源
      </p>
      <p style={{ color: "var(--color-text-faint)", fontSize: 13 }}>
        页面建设中，即将上线…
      </p>
    </div>
  );
}
