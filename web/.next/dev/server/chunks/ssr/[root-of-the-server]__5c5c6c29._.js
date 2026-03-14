module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/mock/provinces.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/mock/universities.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/mock/scores.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/mock/policies.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/mock/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Mock 数据统一出口
 * 所有数据均为演示用途，非真实官方数据
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$provinces$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/provinces.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$universities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/universities.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$scores$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/scores.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$policies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/policies.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/src/components/shared/SourceBadge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SourceBadge",
    ()=>SourceBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/mock/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$universities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/universities.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$policies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/mock/policies.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SourceBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SourceBadge.tsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "强基信息平台 — 强基计划政策与分数线查询"
};
const ENTRY_CARDS = [
    {
        icon: "📋",
        title: "查政策",
        desc: "国家教育部根政策、省级通知、高校招生简章，全部来源可追溯",
        href: "/policies",
        color: "var(--color-primary)",
        bg: "var(--color-primary-light)"
    },
    {
        icon: "📊",
        title: "查分数线",
        desc: "入围线、综合成绩、最终录取分数，按年份 / 省份 / 学校 / 类型筛选",
        href: "/scores",
        color: "var(--color-accent)",
        bg: "var(--color-accent-light)"
    },
    {
        icon: "⚖️",
        title: "做对比",
        desc: "同条件下多高校横向对比，图表与表格双视图，差异一目了然",
        href: "/compare",
        color: "var(--color-gold)",
        bg: "var(--color-gold-light)"
    }
];
const HOT_UNIVERSITIES = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$universities$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockUniversities"].slice(0, 8);
const LATEST_POLICIES = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$mock$2f$policies$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockPolicies"].slice(0, 3);
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 60%, #0891b2 100%)",
                    padding: "72px 24px 80px",
                    color: "#fff"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 800,
                        margin: "0 auto",
                        textAlign: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 6,
                                padding: "4px 12px",
                                borderRadius: 999,
                                background: "rgba(255,255,255,0.12)",
                                fontSize: 12,
                                fontWeight: 500,
                                marginBottom: 24
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "🎓"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "强基计划试点高校 39 所 · 数据来源可追溯"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: "clamp(28px, 5vw, 48px)",
                                fontWeight: 800,
                                lineHeight: 1.2,
                                margin: "0 0 16px",
                                letterSpacing: "-0.02em"
                            },
                            children: [
                                "强基计划信息",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#93c5fd"
                                    },
                                    children: "一站查询 · 来源可信"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: 16,
                                color: "rgba(255,255,255,0.8)",
                                lineHeight: 1.7,
                                maxWidth: 540,
                                margin: "0 auto 36px"
                            },
                            children: "收录国家政策、省级通知与高校招生简章，提供分省分专业分数线查询与多校对比，所有数据标注官方来源。"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                background: "#fff",
                                borderRadius: 12,
                                padding: "4px 4px 4px 16px",
                                maxWidth: 520,
                                margin: "0 auto",
                                boxShadow: "0 8px 32px rgba(0,0,0,0.15)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 18,
                                        marginRight: 8,
                                        opacity: 0.4
                                    },
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "搜索学校、省份、专业、年份…",
                                    style: {
                                        flex: 1,
                                        border: "none",
                                        outline: "none",
                                        fontSize: 14,
                                        color: "var(--color-text)",
                                        background: "transparent",
                                        padding: "10px 0"
                                    },
                                    readOnly: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/scores",
                                    style: {
                                        padding: "10px 20px",
                                        borderRadius: 9,
                                        background: "var(--color-primary)",
                                        color: "#fff",
                                        fontSize: 14,
                                        fontWeight: 600,
                                        textDecoration: "none",
                                        whiteSpace: "nowrap"
                                    },
                                    children: "查询"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginTop: 12,
                                fontSize: 12,
                                color: "rgba(255,255,255,0.5)"
                            },
                            children: "全文搜索即将上线，当前可通过下方入口进行筛选查询"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "56px 24px 48px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: 22,
                            fontWeight: 700,
                            marginBottom: 24,
                            textAlign: "center"
                        },
                        children: "快速入口"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: 20
                        },
                        children: ENTRY_CARDS.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: card.href,
                                style: {
                                    textDecoration: "none"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card card-hover",
                                    style: {
                                        padding: 28,
                                        cursor: "pointer",
                                        borderTop: `3px solid ${card.color}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: 48,
                                                height: 48,
                                                borderRadius: 12,
                                                background: card.bg,
                                                fontSize: 22,
                                                marginBottom: 16
                                            },
                                            children: card.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: 18,
                                                fontWeight: 700,
                                                marginBottom: 8,
                                                color: card.color
                                            },
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: 13,
                                                color: "var(--color-text-muted)",
                                                lineHeight: 1.7,
                                                margin: 0
                                            },
                                            children: card.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)
                            }, card.href, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: "var(--color-bg-subtle)",
                    padding: "48px 24px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1200,
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "baseline",
                                justifyContent: "space-between",
                                marginBottom: 24,
                                flexWrap: "wrap",
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: 22,
                                        fontWeight: 700,
                                        margin: 0
                                    },
                                    children: "热门高校"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/universities",
                                    style: {
                                        fontSize: 13,
                                        color: "var(--color-primary)",
                                        textDecoration: "none",
                                        fontWeight: 500
                                    },
                                    children: "查看全部 39 所 →"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                                gap: 12
                            },
                            children: HOT_UNIVERSITIES.map((uni)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/universities/${uni.id}`,
                                    style: {
                                        textDecoration: "none"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card card-hover",
                                        style: {
                                            padding: "16px 20px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 600,
                                                    fontSize: 15,
                                                    color: "var(--color-text)",
                                                    marginBottom: 4
                                                },
                                                children: uni.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 12,
                                                    color: "var(--color-text-muted)"
                                                },
                                                children: uni.province
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this)
                                }, uni.id, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "48px 24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "space-between",
                            marginBottom: 24,
                            flexWrap: "wrap",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 22,
                                    fontWeight: 700,
                                    margin: 0
                                },
                                children: "政策动态"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/policies",
                                style: {
                                    fontSize: 13,
                                    color: "var(--color-primary)",
                                    textDecoration: "none",
                                    fontWeight: 500
                                },
                                children: "查看全部政策 →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 12
                        },
                        children: LATEST_POLICIES.map((policy)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                style: {
                                    padding: "16px 20px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 12,
                                        flexWrap: "wrap"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                minWidth: 200
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontWeight: 600,
                                                        fontSize: 14,
                                                        color: "var(--color-text)",
                                                        marginBottom: 4,
                                                        lineHeight: 1.5
                                                    },
                                                    children: policy.topic
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: "var(--color-text-muted)",
                                                        lineHeight: 1.6
                                                    },
                                                    children: [
                                                        policy.summary.slice(0, 80),
                                                        "…"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8,
                                                flexShrink: 0,
                                                flexWrap: "wrap"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SourceBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SourceBadge"], {
                                                    level: policy.source.source_level
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 12,
                                                        color: "var(--color-text-faint)"
                                                    },
                                                    children: policy.source.publish_date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this)
                            }, policy.id, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: "var(--color-bg-subtle)",
                    padding: "40px 24px",
                    borderTop: "1px solid var(--color-border)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: 1200,
                        margin: "0 auto",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 32,
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                minWidth: 240
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: 16,
                                        fontWeight: 700,
                                        marginBottom: 6
                                    },
                                    children: "数据来源说明"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: 13,
                                        color: "var(--color-text-muted)",
                                        lineHeight: 1.7,
                                        margin: 0
                                    },
                                    children: "平台数据来源于教育部、省级教育考试院、高校官方招生网等权威渠道，每条数据均标注来源级别与原始链接。当前 Demo 阶段展示为演示数据，正式数据持续录入中。"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: 12,
                                flexWrap: "wrap"
                            },
                            children: [
                                "A",
                                "B",
                                "C",
                                "D"
                            ].map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SourceBadge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SourceBadge"], {
                                    level: level,
                                    showLabel: true
                                }, level, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5c5c6c29._.js.map