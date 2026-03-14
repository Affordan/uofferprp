"use client";

import { useCallback, useState } from "react";
import * as XLSX from "xlsx";
import { toPng } from "html-to-image";

type ExportFormat = "excel" | "png";

type ExcelExportData = {
  headers: string[];
  rows: (string | number | undefined | null)[][];
  filename: string;
};

export function useExportExcel() {
  const [exporting, setExporting] = useState(false);

  const exportToExcel = useCallback((data: ExcelExportData) => {
    setExporting(true);
    try {
      const ws = XLSX.utils.aoa_to_sheet([data.headers, ...data.rows]);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "数据");
      const timestamp = new Date().toISOString().slice(0, 10);
      XLSX.writeFile(wb, `${data.filename}_${timestamp}.xlsx`);
    } finally {
      setExporting(false);
    }
  }, []);

  return { exportToExcel, exporting };
}

export function useExportPng() {
  const [exporting, setExporting] = useState(false);

  const exportToPng = useCallback(async (elementId: string, filename: string) => {
    const el = document.getElementById(elementId);
    if (!el) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(el, {
        backgroundColor: "#ffffff",
        pixelRatio: 2,
      });
      const link = document.createElement("a");
      const timestamp = new Date().toISOString().slice(0, 10);
      link.download = `${filename}_${timestamp}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setExporting(false);
    }
  }, []);

  return { exportToPng, exporting };
}

type ExportButtonProps = {
  format: ExportFormat;
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
};

const ICONS: Record<ExportFormat, string> = {
  excel: "XLS",
  png: "PNG",
};

export function ExportButton({
  format,
  disabled = false,
  label,
  onClick,
}: ExportButtonProps) {
  const displayLabel = label ?? (format === "excel" ? "导出 Excel" : "导出 PNG");

  return (
    <button
      disabled={disabled}
      title={disabled ? "暂无可导出数据" : displayLabel}
      onClick={() => {
        if (!disabled && onClick) onClick();
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "4px 10px",
        borderRadius: 5,
        fontSize: 12,
        fontWeight: 500,
        border: "1px solid var(--color-border)",
        background: disabled ? "var(--color-bg-subtle)" : "var(--color-bg-card)",
        color: disabled ? "var(--color-text-faint)" : "var(--color-text-muted)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "opacity 0.1s, border-color 0.1s",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          fontSize: 9,
          fontWeight: 700,
          padding: "1px 3px",
          borderRadius: 2,
          background: disabled ? "var(--color-bg)" : "var(--color-primary-50)",
          color: disabled ? "var(--color-text-faint)" : "var(--color-primary)",
          letterSpacing: "0.03em",
        }}
      >
        {ICONS[format]}
      </span>
      {displayLabel}
    </button>
  );
}
