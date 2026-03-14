import type { SourceDocument } from "@/types/source";

/**
 * Mock 数据 — 仅用于演示，非真实官方招生简章
 * 结构：Record<universityId, SourceDocument[]>
 */
export const mockBrochures: Record<string, SourceDocument[]> = {
  PKU: [
    {
      id: "br-pku-2024",
      title: "【演示数据】北京大学2024年强基计划招生简章",
      source_level: "A",
      publisher: "北京大学招生办公室",
      official_url: "https://example.com/pku-2024-brochure-mock",
      publish_date: "2024-04-01",
      doc_type: "brochure",
      is_official: true,
      parse_status: "parsed",
      summary:
        "北京大学2024年强基计划招生方向涵盖数学科学学院、物理学院、化学与分子工程学院、生命科学学院等，重点培养基础学科拔尖人才，高考成绩占综合成绩85%以上，另含校测笔试和面试环节。",
    },
  ],
  THU: [
    {
      id: "br-thu-2024",
      title: "【演示数据】清华大学2024年强基计划招生简章",
      source_level: "A",
      publisher: "清华大学招生办公室",
      official_url: "https://example.com/thu-2024-brochure-mock",
      publish_date: "2024-04-02",
      doc_type: "brochure",
      is_official: true,
      parse_status: "parsed",
      summary:
        "清华大学2024年强基计划围绕数学、物理学、化学、生物科学及基础工科交叉方向招生，实行书院制培养，强调跨学科交叉与国际化培养，综合成绩以高考成绩为主体，辅以学校考核。",
    },
  ],
  FDU: [
    {
      id: "br-fdu-2024",
      title: "【演示数据】复旦大学2024年强基计划招生简章",
      source_level: "A",
      publisher: "复旦大学招生办公室",
      official_url: "https://example.com/fdu-2024-brochure-mock",
      publish_date: "2024-04-03",
      doc_type: "brochure",
      is_official: true,
      parse_status: "parsed",
      summary:
        "复旦大学2024年强基计划覆盖数学、物理学、化学、生物科学、历史学、哲学等专业，实施本博贯通培养模式，着重考察学生学术潜力与科研素养，校测分笔试和面试两部分。",
    },
  ],
  SJTU: [
    {
      id: "br-sjtu-2024",
      title: "【演示数据】上海交通大学2024年强基计划招生简章",
      source_level: "A",
      publisher: "上海交通大学招生办公室",
      official_url: "https://example.com/sjtu-2024-brochure-mock",
      publish_date: "2024-04-04",
      doc_type: "brochure",
      is_official: true,
      parse_status: "parsed",
      summary:
        "上海交通大学2024年强基计划聚焦数学、物理学、化学、生物科学等基础学科，依托致远学院精英培养体系，实行小班教学和导师制，高考成绩与校测各有权重，综合评价择优录取。",
    },
  ],
  ZJU: [
    {
      id: "br-zju-2024",
      title: "【演示数据】浙江大学2024年强基计划招生简章",
      source_level: "A",
      publisher: "浙江大学招生办公室",
      official_url: "https://example.com/zju-2024-brochure-mock",
      publish_date: "2024-04-05",
      doc_type: "brochure",
      is_official: true,
      parse_status: "parsed",
      summary:
        "浙江大学2024年强基计划涵盖数学、物理学、化学、生物科学、历史学等专业方向，依托竺可桢学院荣誉培养体系，强调基础学科与前沿研究结合，校测包含笔试与综合素质面试。",
    },
  ],
  NJU: [
    {
      id: "br-nju-2024",
      title: "【演示数据】南京大学2024年强基计划招生简章",
      source_level: "A",
      publisher: "南京大学招生办公室",
      official_url: "https://example.com/nju-2024-brochure-mock",
      publish_date: "2024-04-06",
      doc_type: "brochure",
      is_official: true,
      parse_status: "parsed",
      summary:
        "南京大学2024年强基计划重点招收数学与应用数学、物理学、化学、天文学及历史学等方向，匡亚明学院进行拔尖培养，实施弹性学制与个性化培养方案，高考成绩权重不低于85%。",
    },
  ],
  WHU: [
    {
      id: "br-whu-2024",
      title: "【演示数据】武汉大学2024年强基计划招生简章",
      source_level: "A",
      publisher: "武汉大学招生办公室",
      official_url: "https://example.com/whu-2024-brochure-mock",
      publish_date: "2024-04-07",
      doc_type: "brochure",
      is_official: true,
      parse_status: "parsed",
      summary:
        "武汉大学2024年强基计划覆盖数学、物理学、化学、生物科学、历史学、哲学等方向，弘毅学堂负责拔尖人才培养，校测分专业笔试和综合素质考核，培养期间可申请直博资格。",
    },
  ],
  SCU: [
    {
      id: "br-scu-2024",
      title: "【演示数据】四川大学2024年强基计划招生简章",
      source_level: "A",
      publisher: "四川大学招生办公室",
      official_url: "https://example.com/scu-2024-brochure-mock",
      publish_date: "2024-04-08",
      doc_type: "brochure",
      is_official: true,
      parse_status: "parsed",
      summary:
        "四川大学2024年强基计划面向数学与应用数学、物理学、化学、生物科学、历史学等专业，吴玉章学院统一管理拔尖学生，提供一流科研平台和海外交流资助，综合成绩由高考和校测合成。",
    },
  ],
  SDU: [
    {
      id: "br-sdu-2024",
      title: "【演示数据】山东大学2024年强基计划招生简章",
      source_level: "A",
      publisher: "山东大学招生办公室",
      official_url: "https://example.com/sdu-2024-brochure-mock",
      publish_date: "2024-04-09",
      doc_type: "brochure",
      is_official: true,
      parse_status: "parsed",
      summary:
        "山东大学2024年强基计划特色方向包含古文字学，另有数学、物理学、化学、生物科学等方向，泰山学堂负责精英培养，校测分笔试和综合面试两个环节，鼓励参与国际顶尖科研合作。",
    },
  ],
  SYSU: [
    {
      id: "br-sysu-2024",
      title: "【演示数据】中山大学2024年强基计划招生简章",
      source_level: "A",
      publisher: "中山大学招生办公室",
      official_url: "https://example.com/sysu-2024-brochure-mock",
      publish_date: "2024-04-10",
      doc_type: "brochure",
      is_official: true,
      parse_status: "parsed",
      summary:
        "中山大学2024年强基计划覆盖数学、物理学、化学、生物科学及历史学方向，博雅学院提供精英通识教育，强调人文与理工交叉融合，校测包含专业能力测试与综合素质面试，实行滚动分流机制。",
    },
  ],
};
