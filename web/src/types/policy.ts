import type { SourceDocument } from "./source";

export type PolicyScope = "national" | "province" | "university";

export type PolicyItem = {
  id: string;
  scope_type: PolicyScope;
  province?: string;
  university?: string;
  topic: string;
  summary: string;
  effective_year: number;
  source: SourceDocument;
};
