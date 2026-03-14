"use client";
// React Compiler skip: useReactTable returns functions incompatible with auto-memoization
"use no memo";

import { useRouter, useSearchParams } from "next/navigation";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import type { ScoreRecord } from "@/types/score";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { ScoreTypeTag } from "@/components/shared/ScoreTypeTag";
import { EmptyState } from "@/components/shared/EmptyState";
import { addToCompareUrl } from "@/features/compare/services/compareService";

const col = createColumnHelper<ScoreRecord>();

const columns = [
  col.accessor("year", {
    header: "年份",
    cell: (info) => (
      <span style={{ fontWeight: 600, color: "var(--color-text)" }}>
        {info.getValue()}
      </span>
    ),
    size: 70,
  }),
  col.accessor("province", {
    header: "省份",
    size: 80,
  }),
  col.accessor("university", {
    header: "学校",
    cell: (info) => (
      <span style={{ fontWeight: 500 }}>{info.getValue()}</span>
    ),
    size: 120,
  }),
  col.accessor("major_or_track", {
    header: "专业/方向",
    cell: (info) => info.getValue() ?? <span style={{ color: "var(--color-text-faint)" }}>&mdash;</span>,
    size: 130,
  }),
  col.accessor("score_type", {
    header: "类型",
    cell: (info) => <ScoreTypeTag type={info.getValue()} />,
    size: 140,
  }),
  col.accessor("min_score", {
    header: "最低分",
    cell: (info) => {
      const v = info.getValue();
      const unit = info.row.original.score_unit;
      if (v == null) return <span style={{ color: "var(--color-text-faint)" }}>&mdash;</span>;
      return (
        <span style={{ fontWeight: 700, color: "var(--color-primary)", fontSize: 15 }}>
          {v}
          {unit && unit !== "分" && (
            <span style={{ fontSize: 11, fontWeight: 400, color: "var(--color-text-muted)", marginLeft: 2 }}>
              {unit}
            </span>
          )}
        </span>
      );
    },
    size: 100,
  }),
  col.accessor("subject_track", {
    header: "科类",
    cell: (info) => info.getValue() ?? <span style={{ color: "var(--color-text-faint)" }}>&mdash;</span>,
    size: 80,
  }),
  col.accessor("source_title", {
    header: "来源",
    cell: (info) => (
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <SourceBadge level={info.row.original.source_level} showLabel={false} />
        <span style={{ fontSize: 12, color: "var(--color-text-faint)" }}>
          {info.row.original.source_date}
        </span>
      </div>
    ),
    size: 110,
  }),
];

type Props = {
  data: ScoreRecord[];
  hasYearFilter: boolean;
};

export function ScoreTable({ data, hasYearFilter }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const table = useReactTable({
    data,
    columns: [
      ...columns,
      col.display({
        id: "actions",
        header: "",
        cell: (info) => {
          const uni = info.row.original.university;
          const year = searchParams.get("year") ?? "";
          const province = searchParams.get("province") ?? "";
          const scoreType = searchParams.get("score_type") ?? "";

          return (
            <button
              onClick={() => {
                const url = addToCompareUrl(
                  window.location.href,
                  uni,
                  { year, province, score_type: scoreType }
                );
                router.push(url);
              }}
              title={`将 ${uni} 加入对比`}
              style={{
                padding: "3px 8px",
                borderRadius: 4,
                border: "1px solid var(--color-border)",
                background: "var(--color-bg-card)",
                fontSize: 11,
                color: "var(--color-primary)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                fontWeight: 500,
              }}
            >
              加入对比
            </button>
          );
        },
        size: 80,
      }),
    ],
    getCoreRowModel: getCoreRowModel(),
  });

  if (!hasYearFilter) {
    return (
      <EmptyState
        title="请先选择年份"
        description="为避免数据量过大，请先选择查询年份后再筛选"
      />
    );
  }

  if (data.length === 0) {
    return (
      <EmptyState
        title="未找到匹配数据"
        description="请调整筛选条件后重试"
      />
    );
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 13,
        }}
      >
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    padding: "8px 12px",
                    textAlign: "left",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--color-text-muted)",
                    background: "var(--color-bg-subtle)",
                    borderBottom: "2px solid var(--color-border)",
                    whiteSpace: "nowrap",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, i) => (
            <tr
              key={row.id}
              style={{
                background: i % 2 === 0 ? "var(--color-bg-card)" : "var(--color-bg)",
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    padding: "9px 12px",
                    borderBottom: "1px solid var(--color-border)",
                    verticalAlign: "middle",
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          padding: "8px 12px",
          fontSize: 12,
          color: "var(--color-text-muted)",
        }}
      >
        共 {data.length} 条记录
      </div>
    </div>
  );
}
