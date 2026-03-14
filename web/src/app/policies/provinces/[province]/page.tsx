import type { Metadata } from "next";

type Props = { params: Promise<{ province: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province } = await params;
  const name = decodeURIComponent(province);
  return { title: `${name} · 省份政策` };
}

export default async function ProvincePolicyPage({ params }: Props) {
  const { province } = await params;
  const name = decodeURIComponent(province);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        {name} · 强基计划政策信息
      </h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: 32 }}>
        省级教育考试院通知 · 本省报考说明 · 官方来源归档
      </p>
      <p style={{ color: "var(--color-text-faint)", fontSize: 13 }}>
        页面建设中，即将上线…
      </p>
    </div>
  );
}
