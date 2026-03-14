"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import type { ScoreType } from "@/types/score";
import { SCORE_TYPES } from "@/features/score/services/scoreService";

type Props = {
  years: number[];
  provinces: string[];
  universities: string[];
};

const SELECT_STYLE: React.CSSProperties = {
  padding: "7px 10px",
  borderRadius: 8,
  border: "1px solid var(--color-border)",
  background: "var(--color-bg-card)",
  fontSize: 13,
  color: "var(--color-text)",
  cursor: "pointer",
  outline: "none",
  minWidth: 120,
};

export function ScoreFilter({ years, provinces, universities }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const year = searchParams.get("year") ?? "";
  const province = searchParams.get("province") ?? "";
  const university = searchParams.get("university") ?? "";
  const score_type = (searchParams.get("score_type") ?? "") as ScoreType | "";

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/scores?${params.toString()}`);
    },
    [router, searchParams]
  );

  const clearAll = () => router.push("/scores");

  const hasFilters = year || province || university || score_type;

  return (
    <div
      style={{
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        borderRadius: 12,
        padding: "20px 24px",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div style={{ fontSize: 14, fontWeight: 600 }}>筛选条件</div>
        {hasFilters && (
          <button
            onClick={clearAll}
            style={{
              fontSize: 12,
              color: "var(--color-text-muted)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 8px",
              borderRadius: 6,
            }}
          >
            清除全部
          </button>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "flex-end",
        }}
      >
        {/* 年份 — 必选 */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--color-text-muted)",
              marginBottom: 5,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            年份 <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <select
            value={year}
            onChange={(e) => updateParam("year", e.target.value)}
            style={SELECT_STYLE}
          >
            <option value="">请选择年份</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>
                {y} 年
              </option>
            ))}
          </select>
        </div>

        {/* 分数线类型 — 必选 */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--color-text-muted)",
              marginBottom: 5,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            分数线类型 <span style={{ color: "#ef4444" }}>*</span>
          </label>
          <select
            value={score_type}
            onChange={(e) => updateParam("score_type", e.target.value)}
            style={SELECT_STYLE}
          >
            <option value="">全部类型</option>
            {SCORE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* 省份 */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--color-text-muted)",
              marginBottom: 5,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            省份
          </label>
          <select
            value={province}
            onChange={(e) => updateParam("province", e.target.value)}
            style={SELECT_STYLE}
          >
            <option value="">全部省份</option>
            {provinces.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* 学校 */}
        <div>
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--color-text-muted)",
              marginBottom: 5,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            学校
          </label>
          <select
            value={university}
            onChange={(e) => updateParam("university", e.target.value)}
            style={SELECT_STYLE}
          >
            <option value="">全部学校</option>
            {universities.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 提示：跨省比较 */}
      {!province && year && (
        <div
          style={{
            marginTop: 14,
            padding: "8px 12px",
            borderRadius: 8,
            background: "var(--color-gold-light)",
            border: "1px solid #fde68a",
            fontSize: 12,
            color: "#92400e",
            display: "flex",
            gap: 6,
            alignItems: "flex-start",
          }}
        >
          <span>⚠️</span>
          <span>
            跨省对比时，各省高考满分、赋分方式不同，分数线不可直接比较，仅供参考。
          </span>
        </div>
      )}
    </div>
  );
}
