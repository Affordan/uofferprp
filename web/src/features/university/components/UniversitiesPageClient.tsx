"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { UniversityFilter } from "./UniversityFilter";
import { UniversityCard } from "./UniversityCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { LoadingSkeleton } from "@/components/shared/LoadingSkeleton";
import {
  searchUniversities,
  getUniversityProvinces,
} from "@/features/university/services/universityService";

function UniversitiesPageInner() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const province = searchParams.get("province") ?? "";

  const provinces = getUniversityProvinces();
  const results = searchUniversities(q, province);

  return (
    <>
      <UniversityFilter provinces={provinces} />

      {/* 结果统计 */}
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
        <span
          style={{ fontSize: 13, color: "var(--color-text-muted)" }}
        >
          {q || province
            ? `找到 ${results.length} 所符合条件的高校`
            : `共收录 ${results.length} 所强基计划试点高校（演示）`}
        </span>
      </div>

      {/* 卡片网格 */}
      {results.length === 0 ? (
        <EmptyState
          title="未找到匹配高校"
          description="请调整搜索词或省份筛选条件后重试"
        />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {results.map((uni) => (
            <UniversityCard key={uni.id} university={uni} />
          ))}
        </div>
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
        当前收录 39 所强基计划试点高校基础信息，正式数据持续完善中。
      </div>
    </>
  );
}

export function UniversitiesPageClient() {
  return (
    <Suspense fallback={<LoadingSkeleton rows={6} cols={3} />}>
      <UniversitiesPageInner />
    </Suspense>
  );
}
