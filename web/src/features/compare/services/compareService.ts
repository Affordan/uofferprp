import type { ScoreRecord, ScoreType } from "@/types/score";
import { mockScores } from "@/mock";
import { mockUniversities } from "@/mock";

export const MAX_COMPARE = 6;

export type CompareFilter = {
  year?: string;
  province?: string;
  score_type?: ScoreType;
  universities?: string[]; // university names
};

export function parseCompareParams(sp: URLSearchParams): CompareFilter {
  const uniParam = sp.get("universities");
  return {
    year: sp.get("year") ?? undefined,
    province: sp.get("province") ?? undefined,
    score_type: (sp.get("score_type") ?? undefined) as ScoreType | undefined,
    universities: uniParam ? uniParam.split(",").filter(Boolean) : [],
  };
}

export function buildCompareUrl(filter: CompareFilter): string {
  const params = new URLSearchParams();
  if (filter.year) params.set("year", filter.year);
  if (filter.province) params.set("province", filter.province);
  if (filter.score_type) params.set("score_type", filter.score_type);
  if (filter.universities?.length) params.set("universities", filter.universities.join(","));
  const qs = params.toString();
  return qs ? `/compare?${qs}` : "/compare";
}

export function getCompareResults(filter: CompareFilter): ScoreRecord[] {
  let results = mockScores;

  if (filter.year) {
    const y = parseInt(filter.year, 10);
    results = results.filter((s) => s.year === y);
  }
  if (filter.province) {
    results = results.filter((s) => s.province === filter.province);
  }
  if (filter.score_type) {
    results = results.filter((s) => s.score_type === filter.score_type);
  }
  if (filter.universities?.length) {
    results = results.filter((s) => filter.universities!.includes(s.university));
  }

  return results;
}

export function getCompareYears(): number[] {
  return [...new Set(mockScores.map((s) => s.year))].sort((a, b) => b - a);
}

export function getCompareProvinces(): string[] {
  return [...new Set(mockScores.map((s) => s.province))].sort();
}

export function getCompareUniversities(): string[] {
  return [...new Set(mockScores.map((s) => s.university))].sort();
}

export function isCrossProvince(records: ScoreRecord[]): boolean {
  const provinces = new Set(records.map((r) => r.province));
  return provinces.size > 1;
}

export function getUniversityIdByName(name: string): string | undefined {
  return mockUniversities.find((u) => u.name === name)?.id;
}

export function addToCompareUrl(
  currentUrl: string,
  universityName: string,
  context?: { year?: string; province?: string; score_type?: string }
): string {
  const url = new URL(currentUrl, "http://localhost");
  const params = new URLSearchParams(url.search);
  const existing = params.get("universities")?.split(",").filter(Boolean) ?? [];

  if (existing.includes(universityName)) return `/compare?${params.toString()}`;
  if (existing.length >= MAX_COMPARE) return `/compare?${params.toString()}`;

  existing.push(universityName);
  params.set("universities", existing.join(","));

  if (context?.year && !params.get("year")) params.set("year", context.year);
  if (context?.province && !params.get("province")) params.set("province", context.province);
  if (context?.score_type && !params.get("score_type")) params.set("score_type", context.score_type);

  return `/compare?${params.toString()}`;
}
