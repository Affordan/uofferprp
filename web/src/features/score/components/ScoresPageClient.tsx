"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ScoreFilter } from "@/features/score/components/ScoreFilter";
import { ScoreTable } from "@/features/score/components/ScoreTable";
import { ExportButton } from "@/components/shared/ExportButton";
import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
import {
  filterScores,
  getAvailableYears,
  getAvailableProvinces,
  getAvailableUniversities,
  SCORE_TYPES,
} from "@/features/score/services/scoreService";
import type { ScoreType } from "@/types/score";
import { ScoreTypeTag } from "@/components/shared/ScoreTypeTag";

function ScorePageInner() {
  const searchParams = useSearchParams();
  const year = searchParams.get("year") ?? "";
  const province = searchParams.get("province") ?? "";
  const university = searchParams.get("university") ?? "";
  const score_type = (searchParams.get("score_type") ?? "") as ScoreType | "";

  const years = getAvailableYears();
  const provinces = getAvailableProvinces();
  const universities = getAvailableUniversities();

  const results = filterScores({
    year: year || undefined,
    province: province || undefined,
    university: university || undefined,
    score_type: (score_type || undefined) as ScoreType | undefined,
  });

  // 不同类型不可混比警告
  const typeWarning =
    !score_type && year && results.length > 0
      ? `当前结果包含多种分数线类型（${SCORE_TYPES.slice(0, 3).join("、")}等），不同类型分数线含义不同，请勿直接比较。建议选择"分数线类型"进行精准查询。`
      : null;

  return (
    <>
      {/* 筛选栏 */}
      <ScoreFilter years={years} provinces={provinces} universities={universities} />

      {/* 类型混比警告 */}
      {typeWarning && (
        <div
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            background: "#fef2f2",
            border: "1px solid #fecaca",
            fontSize: 12,
            color: "#991b1b",
            marginBottom: 16,
            display: "flex",
            gap: 6,
          }}
        >
          <span>⚠️</span>
          <span>{typeWarning}</span>
        </div>
      )}

      {/* 结果区 */}
      <div
        className="card"
        style={{ overflow: "hidden" }}
      >
        {/* 结果头部 */}
        {year && results.length > 0 && (
          <div
            style={{
              padding: "12px 20px",
              borderBottom: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "var(--color-text-muted)",
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span>
                {year} 年{province ? ` · ${province}` : ""}{" "}
                {university ? ` · ${university}` : ""}
              </span>
              {score_type && <ScoreTypeTag type={score_type} />}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <ExportButton format="excel" />
              <ExportButton format="png" />
            </div>
          </div>
        )}

        {/* 表格 */}
        <Suspense fallback={<LoadingSkeleton rows={6} cols={8} />}>
          <ScoreTable data={results} hasYearFilter={!!year} />
        </Suspense>
      </div>

      {/* Demo 声明 */}
      <div
        style={{
          marginTop: 16,
          padding: "10px 14px",
          borderRadius: 8,
          background: "var(--color-bg-subtle)",
          border: "1px solid var(--color-border)",
          fontSize: 12,
          color: "var(--color-text-muted)",
        }}
      >
        📌 当前数据为演示数据，仅用于功能展示，不代表真实官方录取结果。请以各高校及教育主管部门官方发布为准。
      </div>
    </>
  );
}

export function ScoresPageClient() {
  return (
    <Suspense fallback={<LoadingSkeleton rows={8} cols={6} />}>
      <ScorePageInner />
    </Suspense>
  );
}
