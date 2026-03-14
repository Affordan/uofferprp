export type Region =
  | "华北"
  | "东北"
  | "华东"
  | "华中"
  | "华南"
  | "西南"
  | "西北"
  | "直辖市";

export type Province = {
  id: string;
  name: string;
  region: Region;
};
