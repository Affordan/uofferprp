import type { University } from "@/types/university";
import type { SourceDocument } from "@/types/source";
import type { ScoreRecord } from "@/types/score";
import {
  mockUniversities,
  mockBrochures,
  mockUniversityDocs,
  mockScores,
} from "@/mock";

export function getUniversityById(id: string): University | undefined {
  return mockUniversities.find((u) => u.id === id);
}

export function getUniversityProvinces(): string[] {
  return [...new Set(mockUniversities.map((u) => u.province))].sort();
}

export function searchUniversities(q: string, province: string): University[] {
  let results = mockUniversities;

  if (province) {
    results = results.filter((u) => u.province === province);
  }

  if (q.trim()) {
    const keyword = q.trim().toLowerCase();
    results = results.filter(
      (u) =>
        u.name.toLowerCase().includes(keyword) ||
        u.short_name.toLowerCase().includes(keyword)
    );
  }

  return results;
}

export function getBrochures(universityId: string): SourceDocument[] {
  return mockBrochures[universityId] ?? [];
}

export function getUniversityDocs(universityId: string): SourceDocument[] {
  return mockUniversityDocs[universityId] ?? [];
}

export function getAllSourceDocs(universityId: string): SourceDocument[] {
  const brochures = getBrochures(universityId);
  const docs = getUniversityDocs(universityId);
  // 合并，简章排在前
  return [...brochures, ...docs];
}

export function getScoresByUniversity(universityId: string): ScoreRecord[] {
  // ScoreRecord.university 存高校全名，需通过 id 找到 name 再过滤
  const uni = getUniversityById(universityId);
  if (!uni) return [];
  return mockScores.filter((s) => s.university === uni.name);
}
