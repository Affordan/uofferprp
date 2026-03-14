export type UniversityTag =
  | "985"
  | "211"
  | "双一流"
  | "C9"
  | "华五"
  | "强基计划";

export type University = {
  id: string;
  name: string;
  short_name: string;
  province: string;
  city?: string;
  logo_url?: string;
  intro?: string;
  tags?: UniversityTag[];
  /** 简要学科优势，公开信息 */
  discipline_note?: string;
};
