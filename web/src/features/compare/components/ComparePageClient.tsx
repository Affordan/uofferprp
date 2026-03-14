"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CompareFilter } from "./CompareFilter";
import { CompareChart } from "./CompareChart";
import { CompareTable } from "./CompareTable";
import { EmptyState } from "@/components/shared/EmptyState";
import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
import { ExportButton, useExportExcel, useExportPng } from "@/components/shared/ExportButton";
import {
  parseCompareParams,
  getCompareResults,
  isCrossProvince,
} from "@/features/compare/services/compareService";

function ComparePageInner() {
  const searchParams = useSearchParams();
  const filter = parseCompareParams(searchParams);
  const { exportToExcel } = useExportExcel();
  const { exportToPng } = useExportPng();

  const year = filter.year ?? "";
  const province = filter.province ?? "";
  const scoreType = filter.score_type ?? "";
  const selectedUnis = filter.universities ?? [];

  const hasRequired = !!year && !!scoreType;
  const hasEnoughUnis = selectedUnis.length >= 2;

  const results = hasRequired && hasEnoughUnis ? getCompareResults(filter) : [];
  const crossProvince = results.length > 0 && isCrossProvince(results);

  const handleExcelExport = () => {
    if (results.length === 0) return;
    exportToExcel({
      headers: ["学校", "省份", "年份", "专业/方向", "类型", "最低分", "科类", "来源", "更新时间"],
      rows: results.map((r) => [
        r.university, r.province, r.year, r.major_or_track ?? "", r.score_type,
        r.min_score ?? "", r.subject_track ?? "", r.source_title, r.source_date,
      ]),
      filename: `对比_${year}_${scoreType}`,
    });
  };

  const handlePngExport = () => {
    exportToPng("compare-export-area", `对比_${year}_${scoreType}`);
  };

  return (
    <>
      <CompareFilter
        year={year}
        province={province}
        scoreType={scoreType}
        selectedUnis={selectedUnis}
      />

      {/* Validation messages */}
      {!year && (
        <EmptyState title="请选择年份" description="年份为必选条件，请先选择对比年份" />
      )}
      {year && !scoreType && (
        <EmptyState title="请选择分数线类型" description="分数线类型为必选条件，不同类型不可混合比较" />
      )}
      {year && scoreType && !hasEnoughUnis && (
        <EmptyState
          title="请至少选择 2 所高校"
          description={selectedUnis.length === 0
            ? "在上方筛选条件中添加要对比的高校"
            : `已选择 ${selectedUnis.length} 所，至少需要 2 所才能开始对比`}
        />
      )}

      {hasRequired && hasEnoughUnis && results.length === 0 && (
        <EmptyState
          title="未找到匹配数据"
          description="当前筛选条件下没有对应的分数线记录，请调整条件后重试"
        />
      )}

      {results.length > 0 && (
        <>
          {/* Cross-province warning */}
          {crossProvince && (
            <div
              style={{
                padding: "10px 14px",
                borderRadius: 6,
                background: "var(--color-gold-light)",
                border: "1px solid #fde68a",
                fontSize: 12,
                color: "#78350f",
                marginBottom: 16,
                lineHeight: 1.6,
              }}
            >
              <strong>跨省对比提示：</strong>
              当前结果涉及多个省份，各省高考满分、赋分方式存在差异，分数线不可直接等价比较，仅供参考。
            </div>
          )}

          {/* Summary cards */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
            {[
              { label: "高校数", value: selectedUnis.length },
              { label: "年份", value: year },
              { label: "分数类型", value: scoreType },
              { label: "记录数", value: results.length },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="card"
                style={{ padding: "10px 16px", minWidth: 80, textAlign: "center" }}
              >
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--color-primary)" }}>
                  {value}
                </div>
                <div style={{ fontSize: 11, color: "var(--color-text-muted)" }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Export buttons */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <ExportButton format="excel" disabled={false} onClick={handleExcelExport} />
            <ExportButton format="png" disabled={false} onClick={handlePngExport} />
          </div>

          {/* Export area for PNG */}
          <div id="compare-export-area">
            {/* Chart */}
            <div className="card" style={{ padding: 16, marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                {year}年 {scoreType} 对比
                {province ? ` / ${province}` : ""}
              </div>
              <CompareChart data={results} />
            </div>

            {/* Table */}
            <div className="card" style={{ overflow: "hidden" }}>
              <CompareTable data={results} />
            </div>
          </div>

          {/* Demo notice */}
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
      )}
    </>
  );
}

export function ComparePageClient() {
  return (
    <Suspense fallback={<LoadingSkeleton rows={6} cols={4} />}>
      <ComparePageInner />
    </Suspense>
  );
}
