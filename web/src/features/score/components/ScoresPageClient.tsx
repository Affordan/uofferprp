"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ScoreFilter } from "@/features/score/components/ScoreFilter";
import { ScoreTable } from "@/features/score/components/ScoreTable";
import { ExportButton, useExportExcel } from "@/components/shared/ExportButton";
import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
import {
  filterScores,
  getAvailableYears,
  getAvailableProvinces,
  getAvailableUniversities,
} from "@/features/score/services/scoreService";
import type { ScoreType } from "@/types/score";
import { ScoreTypeTag } from "@/components/shared/ScoreTypeTag";

function ScorePageInner() {
  const searchParams = useSearchParams();
  const year = searchParams.get("year") ?? "";
  const province = searchParams.get("province") ?? "";
  const university = searchParams.get("university") ?? "";
  const score_type = (searchParams.get("score_type") ?? "") as ScoreType | "";

  const { exportToExcel } = useExportExcel();

  const years = getAvailableYears();
  const provinces = getAvailableProvinces();
  const universities = getAvailableUniversities();

  const results = filterScores({
    year: year || undefined,
    province: province || undefined,
    university: university || undefined,
    score_type: (score_type || undefined) as ScoreType | undefined,
  });

  const typeWarning =
    !score_type && year && results.length > 0
      ? "当前结果包含多种分数线类型，不同类型含义不同，请勿直接比较。建议选择分数线类型进行精准查询。"
      : null;

  const handleExcelExport = () => {
    if (results.length === 0) return;
    exportToExcel({
      headers: ["年份", "省份", "学校", "专业/方向", "类型", "最低分", "科类", "来源", "更新时间"],
      rows: results.map((r) => [
        r.year, r.province, r.university, r.major_or_track ?? "",
        r.score_type, r.min_score ?? "", r.subject_track ?? "",
        r.source_title, r.source_date,
      ]),
      filename: `分数线_${year}${province ? `_${province}` : ""}`,
    });
  };

  return (
    <>
      <ScoreFilter years={years} provinces={provinces} universities={universities} />

      {typeWarning && (
        <div
          style={{
            padding: "10px 14px",
            borderRadius: 6,
            background: "var(--color-danger-light)",
            border: "1px solid #fecaca",
            fontSize: 12,
            color: "#991b1b",
            marginBottom: 16,
          }}
        >
          {typeWarning}
        </div>
      )}

      <div className="card" style={{ overflow: "hidden" }}>
        {year && results.length > 0 && (
          <div
            style={{
              padding: "10px 18px",
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
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <span>
                {year}年{province ? ` / ${province}` : ""}{university ? ` / ${university}` : ""}
              </span>
              {score_type && <ScoreTypeTag type={score_type} />}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <ExportButton format="excel" disabled={false} onClick={handleExcelExport} />
            </div>
          </div>
        )}

        <Suspense fallback={<LoadingSkeleton rows={6} cols={8} />}>
          <ScoreTable data={results} hasYearFilter={!!year} />
        </Suspense>
      </div>

      <div
        style={{
          marginTop: 16,
          padding: "10px 14px",
          borderRadius: 6,
          background: "var(--color-bg-subtle)",
          border: "1px solid var(--color-border)",
          fontSize: 12,
          color: "var(--color-text-muted)",
        }}
      >
        当前数据为演示数据，仅用于功能展示，不代表真实官方录取结果。
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
