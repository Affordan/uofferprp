(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/mock/provinces.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockProvinces",
    ()=>mockProvinces
]);
const mockProvinces = [
    {
        id: "beijing",
        name: "北京",
        region: "直辖市"
    },
    {
        id: "shanghai",
        name: "上海",
        region: "直辖市"
    },
    {
        id: "guangdong",
        name: "广东",
        region: "华南"
    },
    {
        id: "zhejiang",
        name: "浙江",
        region: "华东"
    },
    {
        id: "jiangsu",
        name: "江苏",
        region: "华东"
    },
    {
        id: "shandong",
        name: "山东",
        region: "华东"
    },
    {
        id: "hubei",
        name: "湖北",
        region: "华中"
    },
    {
        id: "sichuan",
        name: "四川",
        region: "西南"
    },
    {
        id: "shaanxi",
        name: "陕西",
        region: "西北"
    },
    {
        id: "liaoning",
        name: "辽宁",
        region: "东北"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/mock/universities.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockUniversities",
    ()=>mockUniversities
]);
const mockUniversities = [
    {
        id: "PKU",
        name: "北京大学",
        short_name: "北大",
        province: "北京",
        intro: "北京大学强基计划覆盖数学、物理、化学、生物、历史、哲学、古文字学等专业方向。"
    },
    {
        id: "THU",
        name: "清华大学",
        short_name: "清华",
        province: "北京",
        intro: "清华大学强基计划重点支持数学、物理、化学、生物及基础工科交叉方向。"
    },
    {
        id: "FDU",
        name: "复旦大学",
        short_name: "复旦",
        province: "上海",
        intro: "复旦大学强基计划涵盖数学、物理、化学、生物科学、历史学、哲学等基础学科。"
    },
    {
        id: "SJTU",
        name: "上海交通大学",
        short_name: "交大",
        province: "上海",
        intro: "上海交通大学强基计划聚焦数学、物理、化学、生物科学等基础学科拔尖人才培养。"
    },
    {
        id: "ZJU",
        name: "浙江大学",
        short_name: "浙大",
        province: "浙江",
        intro: "浙江大学强基计划覆盖数学、物理学、化学、生物科学等核心基础学科。"
    },
    {
        id: "NJU",
        name: "南京大学",
        short_name: "南大",
        province: "江苏",
        intro: "南京大学强基计划重点培养数学与应用数学、物理学、化学、天文学等方向拔尖人才。"
    },
    {
        id: "WHU",
        name: "武汉大学",
        short_name: "武大",
        province: "湖北",
        intro: "武汉大学强基计划覆盖数学、物理学、化学、生物科学及历史学等专业方向。"
    },
    {
        id: "SCU",
        name: "四川大学",
        short_name: "川大",
        province: "四川",
        intro: "四川大学强基计划重点支持数学、物理学、化学、生物科学等基础学科培养。"
    },
    {
        id: "SDU",
        name: "山东大学",
        short_name: "山大",
        province: "山东",
        intro: "山东大学强基计划覆盖数学、物理学、化学、生物科学及古文字学等方向。"
    },
    {
        id: "SYSU",
        name: "中山大学",
        short_name: "中大",
        province: "广东",
        intro: "中山大学强基计划覆盖数学、物理学、化学、生物科学及历史学等基础学科方向。"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/mock/scores.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockScores",
    ()=>mockScores
]);
const mockScores = [
    // ── 北京大学 ──────────────────────────────────────────
    {
        id: "s001",
        year: 2024,
        province: "北京",
        university: "北京大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 690,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】北京大学2024年强基计划入围标准",
        source_url: "https://example.com/pku-2024-mock",
        source_date: "2024-06-15",
        source_level: "A"
    },
    {
        id: "s002",
        year: 2024,
        province: "北京",
        university: "北京大学",
        major_or_track: "数学类",
        score_type: "拟录取综合成绩",
        min_score: 912,
        score_unit: "综合成绩",
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】北京大学2024年强基计划综合成绩公示",
        source_url: "https://example.com/pku-2024-comp-mock",
        source_date: "2024-07-10",
        source_level: "A"
    },
    {
        id: "s003",
        year: 2024,
        province: "广东",
        university: "北京大学",
        major_or_track: "物理学类",
        score_type: "入围线",
        min_score: 698,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】北京大学2024年强基计划入围标准（广东）",
        source_url: "https://example.com/pku-2024-gd-mock",
        source_date: "2024-06-15",
        source_level: "A"
    },
    {
        id: "s004",
        year: 2023,
        province: "北京",
        university: "北京大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 688,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】北京大学2023年强基计划入围标准",
        source_url: "https://example.com/pku-2023-mock",
        source_date: "2023-06-16",
        source_level: "A"
    },
    // ── 清华大学 ──────────────────────────────────────────
    {
        id: "s005",
        year: 2024,
        province: "北京",
        university: "清华大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 693,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】清华大学2024年强基计划入围公示",
        source_url: "https://example.com/thu-2024-mock",
        source_date: "2024-06-16",
        source_level: "A"
    },
    {
        id: "s006",
        year: 2024,
        province: "广东",
        university: "清华大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 703,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】清华大学2024年强基计划入围公示（广东）",
        source_url: "https://example.com/thu-2024-gd-mock",
        source_date: "2024-06-16",
        source_level: "A"
    },
    {
        id: "s007",
        year: 2023,
        province: "北京",
        university: "清华大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 691,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】清华大学2023年强基计划入围公示",
        source_url: "https://example.com/thu-2023-mock",
        source_date: "2023-06-17",
        source_level: "A"
    },
    // ── 复旦大学 ──────────────────────────────────────────
    {
        id: "s008",
        year: 2024,
        province: "上海",
        university: "复旦大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 582,
        subject_track: "物理组",
        completeness_level: "full",
        notes: "上海高考满分660分",
        source_title: "【演示数据】复旦大学2024年强基计划入围标准",
        source_url: "https://example.com/fdu-2024-mock",
        source_date: "2024-06-15",
        source_level: "A"
    },
    {
        id: "s009",
        year: 2024,
        province: "浙江",
        university: "复旦大学",
        major_or_track: "物理学类",
        score_type: "入围线",
        min_score: 696,
        completeness_level: "partial",
        source_title: "【演示数据】复旦大学2024年强基计划入围标准（浙江）",
        source_url: "https://example.com/fdu-2024-zj-mock",
        source_date: "2024-06-15",
        source_level: "A"
    },
    // ── 浙江大学 ──────────────────────────────────────────
    {
        id: "s010",
        year: 2024,
        province: "浙江",
        university: "浙江大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 694,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】浙江大学2024年强基计划入围分数线",
        source_url: "https://example.com/zju-2024-mock",
        source_date: "2024-06-17",
        source_level: "A"
    },
    {
        id: "s011",
        year: 2024,
        province: "浙江",
        university: "浙江大学",
        major_or_track: "物理学类",
        score_type: "入围线",
        min_score: 691,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】浙江大学2024年强基计划入围分数线",
        source_url: "https://example.com/zju-2024-mock",
        source_date: "2024-06-17",
        source_level: "A"
    },
    {
        id: "s012",
        year: 2023,
        province: "浙江",
        university: "浙江大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 689,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】浙江大学2023年强基计划入围分数线",
        source_url: "https://example.com/zju-2023-mock",
        source_date: "2023-06-18",
        source_level: "A"
    },
    // ── 南京大学 ──────────────────────────────────────────
    {
        id: "s013",
        year: 2024,
        province: "江苏",
        university: "南京大学",
        major_or_track: "数学与应用数学",
        score_type: "入围线",
        min_score: 693,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】南京大学2024年强基计划招生简章附件",
        source_url: "https://example.com/nju-2024-mock",
        source_date: "2024-04-20",
        source_level: "A"
    },
    {
        id: "s014",
        year: 2024,
        province: "江苏",
        university: "南京大学",
        major_or_track: "历史学",
        score_type: "入围线",
        min_score: 668,
        subject_track: "历史组",
        completeness_level: "full",
        source_title: "【演示数据】南京大学2024年强基计划招生简章附件",
        source_url: "https://example.com/nju-2024-mock",
        source_date: "2024-04-20",
        source_level: "A"
    },
    // ── 武汉大学 ──────────────────────────────────────────
    {
        id: "s015",
        year: 2024,
        province: "湖北",
        university: "武汉大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 675,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】武汉大学2024年强基计划入围标准",
        source_url: "https://example.com/whu-2024-mock",
        source_date: "2024-06-14",
        source_level: "A"
    },
    {
        id: "s016",
        year: 2024,
        province: "湖北",
        university: "武汉大学",
        major_or_track: "历史学",
        score_type: "入围线",
        min_score: 640,
        subject_track: "历史组",
        completeness_level: "full",
        source_title: "【演示数据】武汉大学2024年强基计划入围标准",
        source_url: "https://example.com/whu-2024-mock",
        source_date: "2024-06-14",
        source_level: "A"
    },
    // ── 山东大学 ──────────────────────────────────────────
    {
        id: "s017",
        year: 2024,
        province: "山东",
        university: "山东大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 672,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】山东大学2024年强基计划分省入围分数线",
        source_url: "https://example.com/sdu-2024-mock",
        source_date: "2024-06-18",
        source_level: "A"
    },
    {
        id: "s018",
        year: 2024,
        province: "山东",
        university: "山东大学",
        major_or_track: "古文字学",
        score_type: "入围线",
        min_score: 648,
        subject_track: "历史组",
        completeness_level: "full",
        source_title: "【演示数据】山东大学2024年强基计划分省入围分数线",
        source_url: "https://example.com/sdu-2024-mock",
        source_date: "2024-06-18",
        source_level: "A"
    },
    // ── 中山大学 ──────────────────────────────────────────
    {
        id: "s019",
        year: 2024,
        province: "广东",
        university: "中山大学",
        major_or_track: "数学类",
        score_type: "入围线",
        min_score: 683,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】中山大学2024年强基计划入围名单",
        source_url: "https://example.com/sysu-2024-mock",
        source_date: "2024-06-16",
        source_level: "A"
    },
    // ── 四川大学 ──────────────────────────────────────────
    {
        id: "s020",
        year: 2024,
        province: "四川",
        university: "四川大学",
        major_or_track: "数学与应用数学",
        score_type: "入围线",
        min_score: 655,
        subject_track: "物理组",
        completeness_level: "full",
        source_title: "【演示数据】四川大学2024年强基计划入围公告",
        source_url: "https://example.com/scu-2024-mock",
        source_date: "2024-06-17",
        source_level: "A"
    },
    {
        id: "s021",
        year: 2024,
        province: "四川",
        university: "四川大学",
        major_or_track: "历史学",
        score_type: "入围线",
        min_score: 625,
        subject_track: "历史组",
        completeness_level: "partial",
        notes: "历史学类数据不完整，待补充",
        source_title: "【演示数据】四川大学2024年强基计划入围公告",
        source_url: "https://example.com/scu-2024-mock",
        source_date: "2024-06-17",
        source_level: "A"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/mock/policies.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockPolicies",
    ()=>mockPolicies
]);
const mockPolicies = [
    // ── 国家级 ──────────────────────────────────────────
    {
        id: "p001",
        scope_type: "national",
        topic: "教育部关于在部分高校开展基础学科招生改革试点工作的意见",
        summary: "强基计划自2020年起实施，聚焦数学、物理、化学、生物、历史、哲学、古文字学等基础学科，面向服务国家重大战略需求，录取模式为高考成绩+高校考核+综合素质评价，高考成绩占比不低于85%，试点高校共39所。",
        effective_year: 2020,
        source: {
            id: "src-p001",
            title: "教育部关于在部分高校开展基础学科招生改革试点工作的意见",
            source_level: "A",
            publisher: "教育部",
            official_url: "http://www.moe.gov.cn/srcsite/A15/s3258/202001/t20200115_415588.html",
            publish_date: "2020-01-13",
            doc_type: "policy",
            is_official: true
        }
    },
    {
        id: "p002",
        scope_type: "national",
        topic: "阳光高考强基计划专题页",
        summary: "阳光高考平台汇总39所强基计划试点高校招生简章、报名入口、政策说明等官方信息，是考生报名的统一入口。",
        effective_year: 2024,
        source: {
            id: "src-p002",
            title: "阳光高考强基计划专题",
            source_level: "A",
            publisher: "教育部阳光高考平台",
            official_url: "https://gaokao.chsi.com.cn/qjjh/",
            publish_date: "2024-03-01",
            doc_type: "notice",
            is_official: true
        }
    },
    // ── 省级：北京 ──────────────────────────────────────
    {
        id: "p003",
        scope_type: "province",
        province: "北京",
        topic: "北京市2024年强基计划报考说明",
        summary: "北京市考生高考成绩满足各高校要求后可参与强基计划志愿填报，校测时间安排见各高校通知。北京高考满分750分，考生需关注高校公布的分省入围分数线。",
        effective_year: 2024,
        source: {
            id: "src-p003",
            title: "【演示数据】北京市2024年强基计划报考指引",
            source_level: "A",
            publisher: "北京市教育考试院",
            official_url: "https://example.com/beijing-2024-qjjh-mock",
            publish_date: "2024-04-10",
            doc_type: "notice",
            is_official: true
        }
    },
    // ── 省级：浙江 ──────────────────────────────────────
    {
        id: "p004",
        scope_type: "province",
        province: "浙江",
        topic: "浙江省2024年强基计划39所高校招生简章汇编",
        summary: "浙江省教育考试院汇总发布39所强基计划试点高校招生简章，供浙江考生统一查阅。浙江采用选考制度，高校入围时会说明首选科目要求。",
        effective_year: 2024,
        source: {
            id: "src-p004",
            title: "【演示数据】浙江省2024年强基计划招生简章汇编",
            source_level: "A",
            publisher: "浙江省教育考试院",
            official_url: "https://example.com/zhejiang-2024-qjjh-mock",
            publish_date: "2024-04-12",
            doc_type: "brochure",
            is_official: true
        }
    },
    // ── 省级：广东 ──────────────────────────────────────
    {
        id: "p005",
        scope_type: "province",
        province: "广东",
        topic: "广东省2024年强基计划报考提醒",
        summary: "广东省考试院提醒考生：强基计划报名时间、校测安排、入围公示等关键节点请以各高校官方公告为准，省考试院不统一汇总入围分数线。",
        effective_year: 2024,
        source: {
            id: "src-p005",
            title: "【演示数据】广东省2024年强基计划考生须知",
            source_level: "A",
            publisher: "广东省教育考试院",
            official_url: "https://example.com/guangdong-2024-qjjh-mock",
            publish_date: "2024-04-15",
            doc_type: "notice",
            is_official: true
        }
    },
    // ── 省级：江苏 ──────────────────────────────────────
    {
        id: "p006",
        scope_type: "province",
        province: "江苏",
        topic: "江苏省2024年强基计划报考说明",
        summary: "江苏省2021年起恢复使用750分制高考，考生参加强基计划时成绩计算方式与其他省份一致。江苏省教育考试院发布本省考生可报名高校及报名流程说明。",
        effective_year: 2024,
        source: {
            id: "src-p006",
            title: "【演示数据】江苏省2024年强基计划报考说明",
            source_level: "A",
            publisher: "江苏省教育考试院",
            official_url: "https://example.com/jiangsu-2024-qjjh-mock",
            publish_date: "2024-04-08",
            doc_type: "notice",
            is_official: true
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/mock/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Mock 数据统一出口
 * 所有数据均为演示用途，非真实官方数据
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$provinces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/provinces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$universities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/universities.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$scores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/scores.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$policies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/policies.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/score/services/scoreService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SCORE_TYPES",
    ()=>SCORE_TYPES,
    "filterScores",
    ()=>filterScores,
    "getAvailableProvinces",
    ()=>getAvailableProvinces,
    "getAvailableUniversities",
    ()=>getAvailableUniversities,
    "getAvailableYears",
    ()=>getAvailableYears
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/mock/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$scores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/scores.ts [app-client] (ecmascript)");
;
function filterScores(filter) {
    let results = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$scores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockScores"];
    if (filter.year) {
        const y = parseInt(filter.year, 10);
        results = results.filter((s)=>s.year === y);
    }
    if (filter.province) {
        results = results.filter((s)=>s.province === filter.province);
    }
    if (filter.university) {
        results = results.filter((s)=>s.university.includes(filter.university));
    }
    if (filter.score_type) {
        results = results.filter((s)=>s.score_type === filter.score_type);
    }
    return results;
}
function getAvailableYears() {
    const years = [
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$scores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockScores"].map((s)=>s.year))
    ];
    return years.sort((a, b)=>b - a);
}
function getAvailableProvinces() {
    return [
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$scores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockScores"].map((s)=>s.province))
    ].sort();
}
function getAvailableUniversities() {
    return [
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$scores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockScores"].map((s)=>s.university))
    ].sort();
}
const SCORE_TYPES = [
    "入围线",
    "校测结果",
    "拟录取综合成绩",
    "最终录取结果",
    "结果通知类"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/score/components/ScoreFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoreFilter",
    ()=>ScoreFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$services$2f$scoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/score/services/scoreService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SELECT_STYLE = {
    padding: "7px 10px",
    borderRadius: 8,
    border: "1px solid var(--color-border)",
    background: "var(--color-bg-card)",
    fontSize: 13,
    color: "var(--color-text)",
    cursor: "pointer",
    outline: "none",
    minWidth: 120
};
function ScoreFilter({ years, provinces, universities }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const year = searchParams.get("year") ?? "";
    const province = searchParams.get("province") ?? "";
    const university = searchParams.get("university") ?? "";
    const score_type = searchParams.get("score_type") ?? "";
    const updateParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScoreFilter.useCallback[updateParam]": (key, value)=>{
            const params = new URLSearchParams(searchParams.toString());
            if (value) {
                params.set(key, value);
            } else {
                params.delete(key);
            }
            router.push(`/scores?${params.toString()}`);
        }
    }["ScoreFilter.useCallback[updateParam]"], [
        router,
        searchParams
    ]);
    const clearAll = ()=>router.push("/scores");
    const hasFilters = year || province || university || score_type;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: 12,
            padding: "20px 24px",
            marginBottom: 20
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                    flexWrap: "wrap",
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 14,
                            fontWeight: 600
                        },
                        children: "筛选条件"
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    hasFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearAll,
                        style: {
                            fontSize: 12,
                            color: "var(--color-text-muted)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "4px 8px",
                            borderRadius: 6
                        },
                        children: "清除全部"
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 12,
                    alignItems: "flex-end"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: "var(--color-text-muted)",
                                    marginBottom: 5,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                },
                                children: [
                                    "年份 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#ef4444"
                                        },
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                        lineNumber: 112,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: year,
                                onChange: (e)=>updateParam("year", e.target.value),
                                style: SELECT_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "请选择年份"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    years.map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: String(y),
                                            children: [
                                                y,
                                                " 年"
                                            ]
                                        }, y, true, {
                                            fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: "var(--color-text-muted)",
                                    marginBottom: 5,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                },
                                children: [
                                    "分数线类型 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#ef4444"
                                        },
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: score_type,
                                onChange: (e)=>updateParam("score_type", e.target.value),
                                style: SELECT_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "全部类型"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$services$2f$scoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCORE_TYPES"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: t,
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: "var(--color-text-muted)",
                                    marginBottom: 5,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                },
                                children: "省份"
                            }, void 0, false, {
                                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: province,
                                onChange: (e)=>updateParam("province", e.target.value),
                                style: SELECT_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "全部省份"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    provinces.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p,
                                            children: p
                                        }, p, false, {
                                            fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: "var(--color-text-muted)",
                                    marginBottom: 5,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                },
                                children: "学校"
                            }, void 0, false, {
                                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: university,
                                onChange: (e)=>updateParam("university", e.target.value),
                                style: SELECT_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "全部学校"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    universities.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: u,
                                            children: u
                                        }, u, false, {
                                            fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            !province && year && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 14,
                    padding: "8px 12px",
                    borderRadius: 8,
                    background: "var(--color-gold-light)",
                    border: "1px solid #fde68a",
                    fontSize: 12,
                    color: "#92400e",
                    display: "flex",
                    gap: 6,
                    alignItems: "flex-start"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "跨省对比时，各省高考满分、赋分方式不同，分数线不可直接比较，仅供参考。"
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                        lineNumber: 233,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/score/components/ScoreFilter.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(ScoreFilter, "AA6ZEVWtP6mwRMBG4pMMHel1VpM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ScoreFilter;
var _c;
__turbopack_context__.k.register(_c, "ScoreFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/SourceBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SourceBadge",
    ()=>SourceBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LEVEL_CONFIG = {
    A: {
        label: "A",
        color: "var(--color-source-a)",
        bg: "var(--color-source-a-bg)",
        title: "教育部 / 阳光高考 / 省级教育考试机构 / 高校官方招生网"
    },
    B: {
        label: "B",
        color: "var(--color-source-b)",
        bg: "var(--color-source-b-bg)",
        title: "高校二级单位官方页面"
    },
    C: {
        label: "C",
        color: "var(--color-source-c)",
        bg: "var(--color-source-c-bg)",
        title: "权威媒体转载"
    },
    D: {
        label: "D",
        color: "var(--color-source-d)",
        bg: "var(--color-source-d-bg)",
        title: "非官方整理页"
    }
};
function SourceBadge({ level, showLabel = true }) {
    const cfg = LEVEL_CONFIG[level];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        title: cfg.title,
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "2px 7px",
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            color: cfg.color,
            background: cfg.bg,
            whiteSpace: "nowrap",
            cursor: "default",
            letterSpacing: "0.03em"
        },
        children: [
            cfg.label,
            showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontWeight: 400,
                    fontSize: 11
                },
                children: "级来源"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/SourceBadge.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/SourceBadge.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = SourceBadge;
var _c;
__turbopack_context__.k.register(_c, "SourceBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/ScoreTypeTag.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoreTypeTag",
    ()=>ScoreTypeTag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const TYPE_CONFIG = {
    入围线: {
        color: "#2563eb",
        bg: "#dbeafe",
        border: "#bfdbfe"
    },
    校测结果: {
        color: "#7c3aed",
        bg: "#ede9fe",
        border: "#ddd6fe"
    },
    拟录取综合成绩: {
        color: "#0891b2",
        bg: "#cffafe",
        border: "#a5f3fc"
    },
    最终录取结果: {
        color: "#16a34a",
        bg: "#dcfce7",
        border: "#bbf7d0"
    },
    结果通知类: {
        color: "#64748b",
        bg: "#f1f5f9",
        border: "#e2e8f0"
    }
};
function ScoreTypeTag({ type }) {
    const cfg = TYPE_CONFIG[type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-block",
            padding: "2px 8px",
            borderRadius: 6,
            fontSize: 11,
            fontWeight: 500,
            color: cfg.color,
            background: cfg.bg,
            border: `1px solid ${cfg.border}`,
            whiteSpace: "nowrap"
        },
        children: type
    }, void 0, false, {
        fileName: "[project]/src/components/shared/ScoreTypeTag.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = ScoreTypeTag;
var _c;
__turbopack_context__.k.register(_c, "ScoreTypeTag");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/ExportButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportButton",
    ()=>ExportButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const FORMAT_CONFIG = {
    excel: {
        label: "导出 Excel",
        icon: "⬇",
        color: "#16a34a"
    },
    png: {
        label: "导出 PNG",
        icon: "🖼",
        color: "#2563eb"
    }
};
function ExportButton({ format, disabled = true, label }) {
    const cfg = FORMAT_CONFIG[format];
    const displayLabel = label ?? cfg.label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        disabled: disabled,
        title: disabled ? "导出功能即将上线" : displayLabel,
        onClick: ()=>{
            if (!disabled) {
                // 占位：后续接入真实导出逻辑
                console.warn("Export not implemented");
            }
        },
        style: {
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: "5px 10px",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 500,
            border: `1px solid var(--color-border)`,
            background: disabled ? "var(--color-bg-subtle)" : cfg.color,
            color: disabled ? "var(--color-text-faint)" : "#fff",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.65 : 1,
            transition: "opacity 0.1s",
            whiteSpace: "nowrap"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 11
                },
                children: cfg.icon
            }, void 0, false, {
                fileName: "[project]/src/components/shared/ExportButton.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            displayLabel
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/ExportButton.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = ExportButton;
var _c;
__turbopack_context__.k.register(_c, "ExportButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/EmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function EmptyState({ title = "暂无数据", description = "当前条件下没有找到相关记录", icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 24px",
            color: "var(--color-text-muted)",
            textAlign: "center"
        },
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 16,
                    opacity: 0.4,
                    fontSize: 40
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/shared/EmptyState.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            !icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: 16,
                    opacity: 0.25,
                    fontSize: 36
                },
                children: "○"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/EmptyState.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--color-text)",
                    marginBottom: 6
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/shared/EmptyState.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: 13,
                    color: "var(--color-text-muted)",
                    margin: 0
                },
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/shared/EmptyState.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/EmptyState.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/score/components/ScoreTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoreTable",
    ()=>ScoreTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SourceBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SourceBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScoreTypeTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ScoreTypeTag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ExportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ExportButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/EmptyState.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
// React Compiler skip: useReactTable returns functions incompatible with auto-memoization
"use no memo";
;
;
;
;
;
const col = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createColumnHelper"])();
const columns = [
    col.accessor("year", {
        header: "年份",
        cell: (info)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontWeight: 600,
                    color: "var(--color-text)"
                },
                children: info.getValue()
            }, void 0, false, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        size: 70
    }),
    col.accessor("province", {
        header: "省份",
        size: 80
    }),
    col.accessor("university", {
        header: "学校",
        cell: (info)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontWeight: 500
                },
                children: info.getValue()
            }, void 0, false, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        size: 120
    }),
    col.accessor("major_or_track", {
        header: "专业/方向",
        cell: (info)=>info.getValue() ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: "var(--color-text-faint)"
                },
                children: "—"
            }, void 0, false, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 42,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0)),
        size: 130
    }),
    col.accessor("score_type", {
        header: "类型",
        cell: (info)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScoreTypeTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreTypeTag"], {
                type: info.getValue()
            }, void 0, false, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 47,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)),
        size: 140
    }),
    col.accessor("min_score", {
        header: "分值（最低）",
        cell: (info)=>{
            const v = info.getValue();
            const unit = info.row.original.score_unit;
            if (v == null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: "var(--color-text-faint)"
                },
                children: "—"
            }, void 0, false, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 55,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    fontSize: 15
                },
                children: [
                    v,
                    unit && unit !== "分" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: 11,
                            fontWeight: 400,
                            color: "var(--color-text-muted)",
                            marginLeft: 2
                        },
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        },
        size: 110
    }),
    col.accessor("subject_track", {
        header: "科类",
        cell: (info)=>info.getValue() ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: "var(--color-text-faint)"
                },
                children: "—"
            }, void 0, false, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 71,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0)),
        size: 90
    }),
    col.accessor("source_title", {
        header: "来源",
        cell: (info)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SourceBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SourceBadge"], {
                        level: info.row.original.source_level,
                        showLabel: false
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: info.row.original.source_url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: info.getValue(),
                        style: {
                            fontSize: 12,
                            color: "var(--color-primary)",
                            textDecoration: "none",
                            maxWidth: 160,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "block"
                        },
                        children: "来源链接"
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        size: 120
    }),
    col.accessor("source_date", {
        header: "更新时间",
        cell: (info)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: 12,
                    color: "var(--color-text-muted)"
                },
                children: info.getValue()
            }, void 0, false, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        size: 110
    }),
    col.display({
        id: "actions",
        header: "操作",
        cell: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 4,
                    flexWrap: "nowrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        title: "加入对比（即将上线）",
                        disabled: true,
                        style: {
                            padding: "4px 8px",
                            borderRadius: 6,
                            border: "1px solid var(--color-border)",
                            background: "var(--color-bg-subtle)",
                            fontSize: 11,
                            color: "var(--color-text-faint)",
                            cursor: "not-allowed"
                        },
                        children: "+ 对比"
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ExportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportButton"], {
                        format: "excel",
                        label: "Excel"
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ExportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportButton"], {
                        format: "png",
                        label: "PNG"
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
        size: 180
    })
];
function ScoreTable({ data, hasYearFilter }) {
    _s();
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data,
        columns,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreRowModel"])()
    });
    if (!hasYearFilter) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
            title: "请先选择年份",
            description: "为避免数据量过大，请先选择查询年份，再选择其他筛选条件"
        }, void 0, false, {
            fileName: "[project]/src/features/score/components/ScoreTable.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this);
    }
    if (data.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
            title: "未找到匹配数据",
            description: "请调整筛选条件后重试，或查看其他年份的数据"
        }, void 0, false, {
            fileName: "[project]/src/features/score/components/ScoreTable.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            overflowX: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                style: {
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: 13,
                    tableLayout: "auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: table.getHeaderGroups().map((hg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: hg.headers.map((header)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: {
                                            padding: "10px 12px",
                                            textAlign: "left",
                                            fontSize: 11,
                                            fontWeight: 700,
                                            color: "var(--color-text-muted)",
                                            background: "var(--color-bg-subtle)",
                                            borderBottom: "2px solid var(--color-border)",
                                            whiteSpace: "nowrap",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.04em"
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
                                    }, header.id, false, {
                                        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                                        lineNumber: 182,
                                        columnNumber: 17
                                    }, this))
                            }, hg.id, false, {
                                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: table.getRowModel().rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                style: {
                                    background: i % 2 === 0 ? "var(--color-bg-card)" : "var(--color-bg)",
                                    transition: "background 0.1s"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = "var(--color-primary-light)";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = i % 2 === 0 ? "var(--color-bg-card)" : "var(--color-bg)";
                                },
                                children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: "10px 12px",
                                            borderBottom: "1px solid var(--color-border)",
                                            verticalAlign: "middle"
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                    }, cell.id, false, {
                                        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this))
                            }, row.id, false, {
                                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "10px 12px",
                    fontSize: 12,
                    color: "var(--color-text-muted)",
                    borderTop: "1px solid var(--color-border)"
                },
                children: [
                    "共 ",
                    data.length,
                    " 条记录"
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/score/components/ScoreTable.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/score/components/ScoreTable.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(ScoreTable, "+qfJc9U8evODZQ8bBg9G2KVouAc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"]
    ];
});
_c = ScoreTable;
var _c;
__turbopack_context__.k.register(_c, "ScoreTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/LoadingSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSkeleton",
    ()=>LoadingSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SkeletonLine({ width = "100%", height = 14 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width,
            height,
            borderRadius: 4,
            background: "linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)",
            backgroundSize: "200% 100%",
            animation: "skeleton-shimmer 1.4s infinite"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/shared/LoadingSkeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = SkeletonLine;
function LoadingSkeleton({ rows = 5, cols = 4 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes skeleton-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/shared/LoadingSkeleton.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 12
                },
                children: Array.from({
                    length: rows
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: `repeat(${cols}, 1fr)`,
                            gap: 12,
                            padding: "12px 0",
                            borderBottom: "1px solid var(--color-border)"
                        },
                        children: Array.from({
                            length: cols
                        }).map((_, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonLine, {
                                width: j === 0 ? "60%" : "80%"
                            }, j, false, {
                                fileName: "[project]/src/components/shared/LoadingSkeleton.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this))
                    }, i, false, {
                        fileName: "[project]/src/components/shared/LoadingSkeleton.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/LoadingSkeleton.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = LoadingSkeleton;
var _c, _c1;
__turbopack_context__.k.register(_c, "SkeletonLine");
__turbopack_context__.k.register(_c1, "LoadingSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/score/components/ScoresPageClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoresPageClient",
    ()=>ScoresPageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$components$2f$ScoreFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/score/components/ScoreFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$components$2f$ScoreTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/score/components/ScoreTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ExportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ExportButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/LoadingSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$services$2f$scoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/score/services/scoreService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScoreTypeTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ScoreTypeTag.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ScorePageInner() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const year = searchParams.get("year") ?? "";
    const province = searchParams.get("province") ?? "";
    const university = searchParams.get("university") ?? "";
    const score_type = searchParams.get("score_type") ?? "";
    const years = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$services$2f$scoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailableYears"])();
    const provinces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$services$2f$scoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailableProvinces"])();
    const universities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$services$2f$scoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailableUniversities"])();
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$services$2f$scoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterScores"])({
        year: year || undefined,
        province: province || undefined,
        university: university || undefined,
        score_type: score_type || undefined
    });
    // 不同类型不可混比警告
    const typeWarning = !score_type && year && results.length > 0 ? `当前结果包含多种分数线类型（${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$services$2f$scoreService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCORE_TYPES"].slice(0, 3).join("、")}等），不同类型分数线含义不同，请勿直接比较。建议选择"分数线类型"进行精准查询。` : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$components$2f$ScoreFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreFilter"], {
                years: years,
                provinces: provinces,
                universities: universities
            }, void 0, false, {
                fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            typeWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "10px 14px",
                    borderRadius: 8,
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                    fontSize: 12,
                    color: "#991b1b",
                    marginBottom: 16,
                    display: "flex",
                    gap: 6
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: typeWarning
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    overflow: "hidden"
                },
                children: [
                    year && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "12px 20px",
                            borderBottom: "1px solid var(--color-border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 13,
                                    color: "var(--color-text-muted)",
                                    display: "flex",
                                    gap: 8,
                                    flexWrap: "wrap",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            year,
                                            " 年",
                                            province ? ` · ${province}` : "",
                                            " ",
                                            university ? ` · ${university}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    score_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ScoreTypeTag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreTypeTag"], {
                                        type: score_type
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                                        lineNumber: 100,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ExportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportButton"], {
                                        format: "excel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ExportButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportButton"], {
                                        format: "png"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSkeleton"], {
                            rows: 6,
                            cols: 8
                        }, void 0, false, {
                            fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                            lineNumber: 110,
                            columnNumber: 29
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$score$2f$components$2f$ScoreTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScoreTable"], {
                            data: results,
                            hasYearFilter: !!year
                        }, void 0, false, {
                            fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16,
                    padding: "10px 14px",
                    borderRadius: 8,
                    background: "var(--color-bg-subtle)",
                    border: "1px solid var(--color-border)",
                    fontSize: 12,
                    color: "var(--color-text-muted)"
                },
                children: "📌 当前数据为演示数据，仅用于功能展示，不代表真实官方录取结果。请以各高校及教育主管部门官方发布为准。"
            }, void 0, false, {
                fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ScorePageInner, "a+DZx9DY26Zf8FVy1bxe3vp9l1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = ScorePageInner;
function ScoresPageClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSkeleton"], {
            rows: 8,
            cols: 6
        }, void 0, false, {
            fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
            lineNumber: 135,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScorePageInner, {}, void 0, false, {
            fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/score/components/ScoresPageClient.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_c1 = ScoresPageClient;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScorePageInner");
__turbopack_context__.k.register(_c1, "ScoresPageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2fff50b6._.js.map