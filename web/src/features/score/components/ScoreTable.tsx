"use client";
// React Compiler skip: useReactTable returns functions incompatible with auto-memoization
"use no memo";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import type { ScoreRecord } from "@/types/score";
import { SourceBadge } from "@/components/shared/SourceBadge";
import { ScoreTypeTag } from "@/components/shared/ScoreTypeTag";
import { ExportButton } from "@/components/shared/ExportButton";
import { EmptyState } from "@/components/shared/EmptyState";

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
    cell: (info) => info.getValue() ?? <span style={{ color: "var(--color-text-faint)" }}>—</span>,
    size: 130,
  }),
  col.accessor("score_type", {
    header: "类型",
    cell: (info) => <ScoreTypeTag type={info.getValue()} />,
    size: 140,
  }),
  col.accessor("min_score", {
    header: "分值（最低）",
    cell: (info) => {
      const v = info.getValue();
      const unit = info.row.original.score_unit;
      if (v == null) return <span style={{ color: "var(--color-text-faint)" }}>—</span>;
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
    size: 110,
  }),
  col.accessor("subject_track", {
    header: "科类",
    cell: (info) => info.getValue() ?? <span style={{ color: "var(--color-text-faint)" }}>—</span>,
    size: 90,
  }),
  col.accessor("source_title", {
    header: "来源",
    cell: (info) => (
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <SourceBadge level={info.row.original.source_level} showLabel={false} />
        <a
          href={info.row.original.source_url}
          target="_blank"
          rel="noopener noreferrer"
          title={info.getValue()}
          style={{
            fontSize: 12,
            color: "var(--color-primary)",
            textDecoration: "none",
            maxWidth: 160,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display: "block",
          }}
        >
          来源链接
        </a>
      </div>
    ),
    size: 120,
  }),
  col.accessor("source_date", {
    header: "更新时间",
    cell: (info) => (
      <span style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
        {info.getValue()}
      </span>
    ),
    size: 110,
  }),
  col.display({
    id: "actions",
    header: "操作",
    cell: () => (
      <div style={{ display: "flex", gap: 4, flexWrap: "nowrap" }}>
        <button
          title="加入对比（即将上线）"
          disabled
          style={{
            padding: "4px 8px",
            borderRadius: 6,
            border: "1px solid var(--color-border)",
            background: "var(--color-bg-subtle)",
            fontSize: 11,
            color: "var(--color-text-faint)",
            cursor: "not-allowed",
          }}
        >
          + 对比
        </button>
        <ExportButton format="excel" label="Excel" />
        <ExportButton format="png" label="PNG" />
      </div>
    ),
    size: 180,
  }),
];

type Props = {
  data: ScoreRecord[];
  hasYearFilter: boolean;
};

export function ScoreTable({ data, hasYearFilter }: Props) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!hasYearFilter) {
    return (
      <EmptyState
        title="请先选择年份"
        description="为避免数据量过大，请先选择查询年份，再选择其他筛选条件"
      />
    );
  }

  if (data.length === 0) {
    return (
      <EmptyState
        title="未找到匹配数据"
        description="请调整筛选条件后重试，或查看其他年份的数据"
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
          tableLayout: "auto",
        }}
      >
        <thead>
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    padding: "10px 12px",
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
                transition: "background 0.1s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLTableRowElement).style.background =
                  "var(--color-primary-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLTableRowElement).style.background =
                  i % 2 === 0 ? "var(--color-bg-card)" : "var(--color-bg)";
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    padding: "10px 12px",
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
          padding: "10px 12px",
          fontSize: 12,
          color: "var(--color-text-muted)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        共 {data.length} 条记录
      </div>
    </div>
  );
}
