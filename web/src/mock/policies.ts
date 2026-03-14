import type { PolicyItem } from "@/types/policy";

/**
 * 政策数据
 * 国家级链接为已验证的公开链接
 * 省级链接：部分为真实公开链接，部分为演示占位（标题带【演示数据】前缀）
 * 政策摘要为结构性示意，请以官方来源为准
 */
export const mockPolicies: PolicyItem[] = [
  // ── 国家级（已验证公开链接）──────────────────────────
  {
    id: "p001",
    scope_type: "national",
    topic: "教育部关于在部分高校开展基础学科招生改革试点工作的意见",
    summary:
      "强基计划自2020年起实施，聚焦数学、物理、化学、生物、历史、哲学、古文字学等基础学科，面向服务国家重大战略需求，录取模式为高考成绩+高校考核+综合素质评价，高考成绩占比不低于85%，试点高校共39所。",
    effective_year: 2020,
    source: {
      id: "src-p001",
      title: "教育部关于在部分高校开展基础学科招生改革试点工作的意见",
      source_level: "A",
      publisher: "教育部",
      official_url: "http://www.moe.gov.cn/srcsite/A15/s3258/202001/t20200115_415588.html",
      publish_date: "2020-01-13",
      doc_type: "policy",
      is_official: true,
    },
  },
  {
    id: "p002",
    scope_type: "national",
    topic: "阳光高考强基计划专题页",
    summary:
      "阳光高考平台汇总39所强基计划试点高校招生简章、报名入口、政策说明等官方信息，是考生报名的统一入口。",
    effective_year: 2024,
    source: {
      id: "src-p002",
      title: "阳光高考强基计划专题",
      source_level: "A",
      publisher: "教育部阳光高考平台",
      official_url: "https://gaokao.chsi.com.cn/qjjh/",
      publish_date: "2024-03-01",
      doc_type: "notice",
      is_official: true,
    },
  },
  // ── 省级：北京（演示数据）──────────────────────────────
  {
    id: "p003",
    scope_type: "province",
    province: "北京",
    topic: "北京市2024年强基计划报考说明",
    summary:
      "北京市考生高考成绩满足各高校要求后可参与强基计划志愿填报，校测时间安排见各高校通知。北京高考满分750分，考生需关注高校公布的分省入围分数线。",
    effective_year: 2024,
    source: {
      id: "src-p003",
      title: "【演示数据】北京市2024年强基计划报考指引",
      source_level: "A",
      publisher: "北京教育考试院",
      official_url: "https://www.bjeea.cn/",
      publish_date: "2024-04-10",
      doc_type: "notice",
      is_official: true,
      parse_status: "pending",
    },
  },
  // ── 省级：浙江（演示数据）──────────────────────────────
  {
    id: "p004",
    scope_type: "province",
    province: "浙江",
    topic: "浙江省2024年强基计划39所高校招生简章汇编",
    summary:
      "浙江省教育考试院汇总发布39所强基计划试点高校招生简章，供浙江考生统一查阅。浙江采用选考制度，高校入围时会说明首选科目要求。",
    effective_year: 2024,
    source: {
      id: "src-p004",
      title: "【演示数据】浙江省2024年强基计划招生简章汇编",
      source_level: "A",
      publisher: "浙江省教育考试院",
      official_url: "https://www.zjzs.net/",
      publish_date: "2024-04-12",
      doc_type: "brochure",
      is_official: true,
      parse_status: "pending",
    },
  },
  // ── 省级：广东（演示数据）──────────────────────────────
  {
    id: "p005",
    scope_type: "province",
    province: "广东",
    topic: "广东省2024年强基计划报考提醒",
    summary:
      "广东省考试院提醒考生：强基计划报名时间、校测安排、入围公示等关键节点请以各高校官方公告为准，省考试院不统一汇总入围分数线。",
    effective_year: 2024,
    source: {
      id: "src-p005",
      title: "【演示数据】广东省2024年强基计划考生须知",
      source_level: "A",
      publisher: "广东省教育考试院",
      official_url: "https://eea.gd.gov.cn/",
      publish_date: "2024-04-15",
      doc_type: "notice",
      is_official: true,
      parse_status: "pending",
    },
  },
  // ── 省级：江苏（演示数据）──────────────────────────────
  {
    id: "p006",
    scope_type: "province",
    province: "江苏",
    topic: "江苏省2024年强基计划报考说明",
    summary:
      "江苏省2021年起恢复使用750分制高考，考生参加强基计划时成绩计算方式与其他省份一致。江苏省教育考试院发布本省考生可报名高校及报名流程说明。",
    effective_year: 2024,
    source: {
      id: "src-p006",
      title: "【演示数据】江苏省2024年强基计划报考说明",
      source_level: "A",
      publisher: "江苏省教育考试院",
      official_url: "https://www.jseea.cn/",
      publish_date: "2024-04-08",
      doc_type: "notice",
      is_official: true,
      parse_status: "pending",
    },
  },
];
