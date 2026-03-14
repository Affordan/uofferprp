import type { Metadata } from "next";
import Link from "next/link";
import {
  getPoliciesByProvince,
  getAllProvinces,
} from "@/features/policy/services/policyService";
import { PolicyList } from "@/features/policy/components/PolicyList";
import { mockScores } from "@/mock";
import { mockUniversities } from "@/mock";

type Props = { params: Promise<{ province: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province } = await params;
  const name = decodeURIComponent(province);
  return { title: `${name} · 强基计划信息` };
}

export default async function ProvincePolicyPage({ params }: Props) {
  const { province } = await params;
  const name = decodeURIComponent(province);

  const policies = getPoliciesByProvince(name);
  const allProvinces = getAllProvinces();
  const hasData = allProvinces.includes(name);

  // 统计本省相关数据
  const provinceScores = mockScores.filter((s) => s.province === name);
  const provinceUnis = mockUniversities.filter((u) => u.province === name);

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
          href="/policies"
          style={{ color: "var(--color-primary)", textDecoration: "none" }}
        >
          政策专题
        </Link>
        <span>›</span>
        <span>省级信息</span>
        <span>›</span>
        <span>{name}</span>
      </div>

      {/* 页头 */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 8,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              padding: "3px 10px",
              borderRadius: 999,
              background: "var(--color-accent-light)",
              color: "var(--color-accent)",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            省级信息
          </span>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>
            {name} · 强基计划官方信息集合
          </h1>
        </div>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: 13,
            margin: 0,
            lineHeight: 1.7,
          }}
        >
          本页收录{name}省级教育考试院发布的强基计划相关通知、报考说明及官方来源归档。
          各省信息格式不统一，本页不强行定义&ldquo;每省一套政策&rdquo;，而是作为本省官方信息的集合页。
        </p>
      </div>

      {/* 统计数据快览 */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginBottom: 32,
          flexWrap: "wrap",
        }}
      >
        {[
          {
            label: "省级通知",
            value: policies.length,
            suffix: "条",
            color: "var(--color-accent)",
          },
          {
            label: "分数线记录",
            value: provinceScores.length,
            suffix: "条",
            color: "var(--color-primary)",
            href: `/scores?province=${encodeURIComponent(name)}`,
          },
          {
            label: "本省高校",
            value: provinceUnis.length,
            suffix: "所",
            color: "var(--color-gold)",
            href: `/universities?province=${encodeURIComponent(name)}`,
          },
        ].map(({ label, value, suffix, color, href }) => {
          const inner = (
            <div
              className="card"
              style={{
                padding: "14px 20px",
                minWidth: 120,
                textAlign: "center",
                cursor: href ? "pointer" : "default",
                borderTop: `3px solid ${color}`,
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color,
                  lineHeight: 1.1,
                  marginBottom: 3,
                }}
              >
                {value}
                <span style={{ fontSize: 14, fontWeight: 400, marginLeft: 2 }}>
                  {suffix}
                </span>
              </div>
              <div style={{ fontSize: 11, color: "var(--color-text-muted)" }}>
                {label}
                {href && (
                  <span style={{ marginLeft: 4, color }}>↗</span>
                )}
              </div>
            </div>
          );
          return href ? (
            <Link key={label} href={href} style={{ textDecoration: "none" }}>
              {inner}
            </Link>
          ) : (
            <div key={label}>{inner}</div>
          );
        })}
      </div>

      {/* 本省官方信息列表 */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 14 }}>
          本省官方信息
          {policies.length > 0 && (
            <span
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: "var(--color-text-muted)",
                marginLeft: 8,
              }}
            >
              {policies.length} 条
            </span>
          )}
        </h2>

        {!hasData ? (
          <div
            className="card"
            style={{
              padding: "32px 24px",
              textAlign: "center",
              color: "var(--color-text-muted)",
            }}
          >
            <div style={{ fontSize: 13, marginBottom: 8 }}>
              当前暂未收录「{name}」的省级强基计划信息。
            </div>
            <div style={{ fontSize: 12, color: "var(--color-text-faint)" }}>
              各省信息格式与公开程度差异较大，部分省份未独立发布汇总页，请直接查阅各高校官方公告。
            </div>
          </div>
        ) : (
          <PolicyList
            policies={policies}
            emptyTitle={`暂无 ${name} 的政策数据`}
            emptyDesc="当前省份暂无收录的政策条目，正式数据持续录入中"
          />
        )}
      </section>

      {/* 注意事项 */}
      <div
        style={{
          padding: "14px 18px",
          borderRadius: 8,
          background: "var(--color-gold-light)",
          border: "1px solid #fde68a",
          fontSize: 13,
          color: "#78350f",
          lineHeight: 1.75,
          marginBottom: 24,
        }}
      >
        <strong>重要提示：</strong>
        各省强基计划信息格式与公开程度不统一，部分省份省级教育考试院仅发布报考提醒，
        不汇总各校入围分数线。获取完整分数线数据，请结合{" "}
        <Link
          href={`/scores?province=${encodeURIComponent(name)}`}
          style={{ color: "var(--color-primary)", fontWeight: 600 }}
        >
          分数线查询页
        </Link>{" "}
        查阅各高校分省数据。
      </div>

      {/* 省份快速切换 */}
      {allProvinces.length > 1 && (
        <section>
          <div
            style={{
              fontSize: 12,
              color: "var(--color-text-muted)",
              marginBottom: 10,
              fontWeight: 600,
            }}
          >
            其他省份
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {allProvinces
              .filter((p) => p !== name)
              .map((p) => (
                <Link
                  key={p}
                  href={`/policies/provinces/${encodeURIComponent(p)}`}
                  style={{ textDecoration: "none" }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      borderRadius: 6,
                      border: "1px solid var(--color-border)",
                      background: "var(--color-bg-card)",
                      fontSize: 12,
                      color: "var(--color-text-muted)",
                      cursor: "pointer",
                    }}
                  >
                    {p}
                  </span>
                </Link>
              ))}
          </div>
        </section>
      )}

      {/* Demo 声明 */}
      <div
        style={{
          marginTop: 24,
          padding: "10px 14px",
          borderRadius: 8,
          background: "var(--color-bg-subtle)",
          border: "1px solid var(--color-border)",
          fontSize: 12,
          color: "var(--color-text-muted)",
        }}
      >
        📌 当前数据为演示数据，仅用于功能展示。请以各省教育考试院官方发布为准。
      </div>
    </div>
  );
}
