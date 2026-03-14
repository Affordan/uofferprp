"use client";

import { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { ScoreRecord } from "@/types/score";

type Props = {
  data: ScoreRecord[];
  chartId?: string;
};

export function CompareChart({ data, chartId = "compare-chart" }: Props) {
  const option = useMemo(() => {
    // Group by university
    const uniMap = new Map<string, ScoreRecord[]>();
    for (const r of data) {
      const list = uniMap.get(r.university) ?? [];
      list.push(r);
      uniMap.set(r.university, list);
    }

    const universities = [...uniMap.keys()];
    // For bar chart: show min_score for each university (average if multiple records)
    const scores = universities.map((uni) => {
      const records = uniMap.get(uni)!;
      const validScores = records.filter((r) => r.min_score != null).map((r) => r.min_score!);
      if (validScores.length === 0) return 0;
      return Math.round(validScores.reduce((a, b) => a + b, 0) / validScores.length);
    });

    // Find min/max for axis range
    const validScores = scores.filter((s) => s > 0);
    const minVal = validScores.length ? Math.min(...validScores) : 0;
    const axisMin = Math.max(0, minVal - 30);

    return {
      tooltip: {
        trigger: "axis" as const,
        axisPointer: { type: "shadow" as const },
        formatter: (params: Array<{ name: string; value: number }>) => {
          if (!Array.isArray(params) || params.length === 0) return "";
          const p = params[0];
          return `${p.name}<br/>分数：<b>${p.value}</b>`;
        },
      },
      grid: {
        left: 16,
        right: 16,
        top: 32,
        bottom: 8,
        containLabel: true,
      },
      xAxis: {
        type: "category" as const,
        data: universities,
        axisLabel: {
          fontSize: 11,
          color: "#475569",
          rotate: universities.length > 4 ? 15 : 0,
        },
        axisLine: { lineStyle: { color: "#e2e8f0" } },
        axisTick: { show: false },
      },
      yAxis: {
        type: "value" as const,
        min: axisMin,
        axisLabel: { fontSize: 11, color: "#94a3b8" },
        splitLine: { lineStyle: { color: "#f1f5f9" } },
      },
      series: [
        {
          type: "bar" as const,
          data: scores,
          barWidth: universities.length <= 3 ? 48 : 32,
          itemStyle: {
            color: "#1e40af",
            borderRadius: [3, 3, 0, 0],
          },
          label: {
            show: true,
            position: "top" as const,
            fontSize: 12,
            fontWeight: 600,
            color: "#1e40af",
          },
        },
      ],
    };
  }, [data]);

  if (data.length === 0) return null;

  return (
    <div id={chartId}>
      <ReactECharts
        option={option}
        style={{ height: 320, width: "100%" }}
        notMerge
        opts={{ renderer: "svg" }}
      />
    </div>
  );
}
