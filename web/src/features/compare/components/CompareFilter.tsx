"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  getCompareYears,
  getCompareProvinces,
  getCompareUniversities,
  MAX_COMPARE,
} from "@/features/compare/services/compareService";
import { SCORE_TYPES } from "@/features/score/services/scoreService";

const SELECT_STYLE: React.CSSProperties = {
  padding: "6px 10px",
  borderRadius: 6,
  border: "1px solid var(--color-border)",
  background: "var(--color-bg-card)",
  fontSize: 13,
  color: "var(--color-text)",
  cursor: "pointer",
  outline: "none",
  minWidth: 110,
};

type Props = {
  year: string;
  province: string;
  scoreType: string;
  selectedUnis: string[];
};

export function CompareFilter({ year, province, scoreType, selectedUnis }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const years = getCompareYears();
  const provinces = getCompareProvinces();
  const allUnis = getCompareUniversities();

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/compare?${params.toString()}`);
    },
    [router, searchParams]
  );

  const addUniversity = useCallback(
    (name: string) => {
      if (!name || selectedUnis.includes(name) || selectedUnis.length >= MAX_COMPARE) return;
      const params = new URLSearchParams(searchParams.toString());
      params.set("universities", [...selectedUnis, name].join(","));
      router.push(`/compare?${params.toString()}`);
    },
    [router, searchParams, selectedUnis]
  );

  const removeUniversity = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const filtered = selectedUnis.filter((u) => u !== name);
      if (filtered.length) {
        params.set("universities", filtered.join(","));
      } else {
        params.delete("universities");
      }
      router.push(`/compare?${params.toString()}`);
    },
    [router, searchParams, selectedUnis]
  );

  const clearAll = () => router.push("/compare");

  return (
    <div
      className="card"
      style={{ padding: "18px 22px", marginBottom: 16 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 600 }}>对比条件</span>
        {(year || province || scoreType || selectedUnis.length > 0) && (
          <button
            onClick={clearAll}
            style={{
              fontSize: 12,
              color: "var(--color-text-muted)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            清除全部
          </button>
        )}
      </div>

      {/* Row 1: filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
        <div>
          <Label text="年份" required />
          <select value={year} onChange={(e) => updateParam("year", e.target.value)} style={SELECT_STYLE}>
            <option value="">选择年份</option>
            {years.map((y) => <option key={y} value={String(y)}>{y}年</option>)}
          </select>
        </div>
        <div>
          <Label text="分数线类型" required />
          <select value={scoreType} onChange={(e) => updateParam("score_type", e.target.value)} style={SELECT_STYLE}>
            <option value="">选择类型</option>
            {SCORE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <Label text="省份" />
          <select value={province} onChange={(e) => updateParam("province", e.target.value)} style={SELECT_STYLE}>
            <option value="">全部省份</option>
            {provinces.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </div>

      {/* Row 2: university selector */}
      <div>
        <Label text={`高校选择（${selectedUnis.length}/${MAX_COMPARE}）`} />
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <select
            value=""
            onChange={(e) => addUniversity(e.target.value)}
            style={SELECT_STYLE}
            disabled={selectedUnis.length >= MAX_COMPARE}
          >
            <option value="">添加高校...</option>
            {allUnis.filter((u) => !selectedUnis.includes(u)).map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
          {selectedUnis.map((name) => (
            <span
              key={name}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                padding: "3px 8px 3px 10px",
                borderRadius: 4,
                background: "var(--color-primary-50)",
                border: "1px solid var(--color-primary-light)",
                fontSize: 12,
                color: "var(--color-primary)",
                fontWeight: 500,
              }}
            >
              {name}
              <button
                onClick={() => removeUniversity(name)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  color: "var(--color-primary)",
                  lineHeight: 1,
                  padding: 0,
                }}
                title="移除"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 600,
        color: "var(--color-text-muted)",
        marginBottom: 4,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
      }}
    >
      {text}
      {required && <span style={{ color: "var(--color-danger)", marginLeft: 2 }}>*</span>}
    </div>
  );
}
