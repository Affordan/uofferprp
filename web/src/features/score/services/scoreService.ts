import type { ScoreRecord, ScoreType } from "@/types/score";
import { mockScores } from "@/mock";

export type ScoreFilter = {
  year?: string;
  province?: string;
  university?: string;
  score_type?: ScoreType;
};

export function filterScores(filter: ScoreFilter): ScoreRecord[] {
  let results = mockScores;

  if (filter.year) {
    const y = parseInt(filter.year, 10);
    results = results.filter((s) => s.year === y);
  }
  if (filter.province) {
    results = results.filter((s) => s.province === filter.province);
  }
  if (filter.university) {
    results = results.filter((s) =>
      s.university.includes(filter.university!)
    );
  }
  if (filter.score_type) {
    results = results.filter((s) => s.score_type === filter.score_type);
  }

  return results;
}

export function getAvailableYears(): number[] {
  const years = [...new Set(mockScores.map((s) => s.year))];
  return years.sort((a, b) => b - a);
}

export function getAvailableProvinces(): string[] {
  return [...new Set(mockScores.map((s) => s.province))].sort();
}

export function getAvailableUniversities(): string[] {
  return [...new Set(mockScores.map((s) => s.university))].sort();
}

export const SCORE_TYPES: ScoreType[] = [
  "入围线",
  "校测结果",
  "拟录取综合成绩",
  "最终录取结果",
  "结果通知类",
];
