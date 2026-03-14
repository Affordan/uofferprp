"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type Props = {
  provinces: string[];
};

const INPUT_STYLE: React.CSSProperties = {
  padding: "7px 10px",
  borderRadius: 8,
  border: "1px solid var(--color-border)",
  background: "var(--color-bg-card)",
  fontSize: 13,
  color: "var(--color-text)",
  outline: "none",
  width: "100%",
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

export function UniversityFilter({ provinces }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const q = searchParams.get("q") ?? "";
  const province = searchParams.get("province") ?? "";

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/universities?${params.toString()}`);
    },
    [router, searchParams]
  );

  const clearAll = () => router.push("/universities");
  const hasFilters = q || province;

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
          marginBottom: 14,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600 }}>搜索 / 筛选</span>
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

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {/* 关键词搜索 */}
        <div style={{ flex: "1 1 200px", minWidth: 160 }}>
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
            学校名称
          </label>
          <input
            type="text"
            placeholder="搜索学校名称…"
            value={q}
            onChange={(e) => updateParam("q", e.target.value)}
            style={INPUT_STYLE}
          />
        </div>

        {/* 省份筛选 */}
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
            所在省份
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
      </div>
    </div>
  );
}
