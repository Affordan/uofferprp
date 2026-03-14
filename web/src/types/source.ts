export type SourceLevel = "A" | "B" | "C" | "D";

export type ParseStatus = "pending" | "parsed" | "failed" | "manual";

export type DocType =
  | "notice"       // 通知/公告
  | "brochure"     // 招生简章
  | "policy"       // 政策文件
  | "result"       // 录取结果
  | "score_table"  // 分数线表
  | "other";

export type SourceDocument = {
  id: string;
  title: string;
  source_level: SourceLevel;
  publisher: string;
  official_url: string;
  publish_date: string;
  doc_type: DocType;
  summary?: string;
  // 扩展字段（对齐数据库模型，MVP 阶段可为空）
  is_official?: boolean;
  raw_snapshot_path?: string;
  parse_status?: ParseStatus;
};
