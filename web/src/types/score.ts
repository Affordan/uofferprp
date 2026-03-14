import type { SourceLevel } from "./source";

export type ScoreType =
  | "入围线"
  | "校测结果"
  | "拟录取综合成绩"
  | "最终录取结果"
  | "结果通知类";

export type CompletenessLevel =
  | "full"          // 分省+分专业+分值齐全
  | "partial"       // 有省份/专业，字段缺失
  | "unstructured"  // 只有图片或公告
  | "query_only";   // 需登录平台查询

export type ScoreRecord = {
  id: string;
  year: number;
  province: string;
  university: string;
  major_or_track?: string;
  admission_stage?: string;
  score_type: ScoreType;
  min_score?: number;
  avg_score?: number;
  min_rank?: number;
  notes?: string;
  // 补充字段
  score_value?: number;       // 通用分值（综合成绩等）
  score_unit?: string;        // "分" | "综合成绩" | "百分制"
  subject_track?: string;     // "物理组" | "历史组" | "理科" 等
  completeness_level?: CompletenessLevel;
  // 来源
  source_title: string;
  source_url: string;
  source_date: string;
  source_level: SourceLevel;
};
