1. 执行原则

这个项目建议采用 AI-first 开发模式：

AI 写代码

AI 跑检查

AI 读报错

AI 自修复

AI 生成 PR / 变更说明

人工只审批与验收，不手写修 bug

这套模式是可行的，因为 Claude Code 适合大任务拆解、终端与 IDE 内连续开发，Anthropic 也提供了把 Claude Code 当库使用的 Agent SDK；Codex 则适合本地终端、IDE、云端、代码审查和 SDK/CI 集成。

2. 角色分工
   2.1 人的职责

你只负责四件事：

决定优先级

审核产品效果

审核高风险发布

抽检数据与页面结果

2.2 Claude Code 的职责

更适合承担：

项目初始化与目录搭建

大范围页面生成

后端接口批量实现

数据库 schema 起草与迁移

数据采集脚本搭建

长链路重构

根据测试日志做多轮修复

2.3 Codex 的职责

更适合承担：

精准补丁

报错定位

code review

PR 级修复建议

CLI 自动执行 lint / test / build / deploy 检查

CI/CD 中的自动修复与自动提交候选 patch

2.4 推荐协作模式

Claude Code 负责“生成主骨架 + 大块实现”

Codex 负责“查错 + 精修 + 代码审查 + 自动补丁”

两者都不直接决定生产发布，最终由你点头

3. 推荐研发架构
   3.1 仓库结构

建议 monorepo：

apps/web：前台站点

apps/admin：后台管理

packages/ui：共享组件

packages/config：eslint / tsconfig / prettier / tailwind config

packages/db：Prisma schema 与数据库访问

packages/etl：数据采集与解析

packages/shared：类型与工具函数

infra：部署脚本、Docker、CI 配置

docs：PRD、接口说明、数据字典、AI 运行手册

3.2 环境划分

local

dev

staging

prod

3.3 Git 策略

main：生产

develop：集成

feature/\*

fix/\*

data/\*

4. AI 协作开发规范
   4.1 任务路由规则
   交给 Claude Code 的任务

“根据 PRD 初始化全栈项目”

“生成首页 / 查询页 / 高校详情页”

“根据 schema 生成 CRUD 接口”

“生成后台录入流程”

“做一次大重构，把查询逻辑提取成 service”

交给 Codex 的任务

“修复 build error / type error / lint error”

“根据 failing test 修复 bug，最小改动”

“审查本次 PR 的边界条件”

“修复部署脚本和环境变量问题”

“生成回归测试补丁”

4.2 禁止事项

不允许 AI 直接修改生产数据库

不允许 AI 直接跳过测试强推

不允许 AI 删除审计日志

不允许 AI 在没有说明的情况下批量改 schema

4.3 必须执行的门禁

每次提交前必须自动通过：

lint

typecheck

unit test

e2e

build

5. 自动纠错闭环

这是你要的重点：尽量不用人工写纠错。

5.1 闭环流程

AI 生成代码

CI 自动运行检查

若失败，日志自动汇总

Codex 读取日志，生成第一轮修复补丁

再跑检查

若仍失败，Claude Code 根据上下文做第二轮系统性修复

再跑检查

全绿后自动生成 PR 摘要

人工只做验收，不手写修复

5.2 修复优先级

构建错误

类型错误

核心路径 e2e 失败

API 契约错误

样式与交互问题

性能与体验问题

5.3 自动修复上限

建议每个失败任务：

Codex 最多 2 轮

Claude Code 最多 1 轮总修复

超过上限转人工判定，不转人工写代码

这样避免 agent 无限制打转。

6. 技术选型执行版
   6.1 前端

Next.js App Router

TypeScript

Tailwind CSS

shadcn/ui

Framer Motion

TanStack Query

TanStack Table

ECharts

Zod

React Hook Form

6.2 后端

Next.js API Route / Server Actions

Prisma

PostgreSQL

Redis（可选，用于缓存）

NextAuth 或 Clerk（后台登录）

6.3 数据链路

Playwright：抓取页面、截图、快照

Cheerio：解析 HTML

Python：处理 PDF、OCR、表格清洗

BullMQ / Trigger.dev（可选）：任务编排

6.4 测试体系

Vitest

Testing Library

Playwright E2E

Mock Service Worker

Percy / Playwright screenshot diff（可选）

6.5 部署

Web：Vercel 或云主机 Docker

DB：PostgreSQL 托管

对象存储：OSS/COS/S3

监控：Sentry + Uptime + 日志平台

7. 里程碑计划
   阶段 0：项目定义与设计冻结

产出

PRD 冻结

数据字典冻结

页面 IA 冻结

技术栈冻结

仓库初始化

AI 分工

Claude Code：生成工程骨架、目录结构、基础依赖

Codex：审查目录结构、脚本和配置风险

验收

项目可启动

基础路由可访问

CI 可跑通空项目

阶段 1：设计系统与基础框架

产出

UI token

全局布局

Header / Footer / 搜索框

主题、暗色策略（可选）

公共组件库

AI 分工

Claude Code：批量生成组件与布局

Codex：修复样式冲突、无障碍问题、SSR 问题

验收

首页框架完成

组件复用正常

Lighthouse 基础达标

阶段 2：数据库与后台基础

产出

Prisma schema

后台登录

来源录入页

数据审核页

修订记录页

AI 分工

Claude Code：生成 schema、后台 CRUD

Codex：修复 migration、权限与数据校验问题

验收

可录入来源

可审核并发布

可记录修订历史

阶段 3：前台核心查询能力

产出

省份政策页

分数线查询页

高校详情页

来源详情抽屉

AI 分工

Claude Code：实现查询逻辑、页面结构、图表联动

Codex：修复筛选 bug、空状态 bug、导出 bug

验收

能按年份 / 省份 / 学校查询

能打开来源详情

图表与表格联动正常

阶段 4：高校对比与导出

产出

对比页

Excel 导出

PNG 导出

对比约束逻辑

AI 分工

Claude Code：实现导出与对比逻辑

Codex：修复文件名、中文编码、截图边界问题

验收

多高校对比可用

导出格式正确

导出内容可复现筛选结果

阶段 5：数据采集与发布链路

产出

来源抓取脚本

快照存储

结构化抽取脚本

后台审核发布流程

AI 分工

Claude Code：实现 ETL 主流程

Codex：针对不同站点补 parser 和修异常

验收

至少接通一批示范来源

数据能从抓取到发布闭环流转

阶段 6：上线准备

产出

部署脚本

环境变量模板

监控报警

回滚方案

上线检查清单

AI 分工

Claude Code：整理部署说明与环境配置

Codex：检查 build、部署、回滚链路

验收

staging 可完整演示

prod 可一键发布

回滚脚本可执行

8. AI 驱动的 CI/CD 设计

建议建立以下流水线：

PR 流水线

安装依赖

lint

typecheck

unit tests

e2e tests

build

bundle 分析

生成预览环境

AI 修复流水线

当 PR 失败时：

收集失败日志

调用 Codex 修复

自动生成 patch branch

重新跑 CI

仍失败则调用 Claude Code 做第二轮修复建议

自动生成修复报告

发布流水线

合并 main

数据库迁移检查

打包部署

健康检查

监控打点

回滚标记

Codex 官方文档已经明确支持 CLI、代码审查、多 agent、SDK 与云端任务，适合把“修 CI / 修 PR / 修本地仓库问题”自动化；Claude 侧则有 Agent SDK 和 Claude Code 能力，适合承接更长链路的实现与改造。

9. 数据采集执行计划
   9.1 来源优先级

第一优先级：

教育部

阳光高考

省级教育考试院

高校本科招生网

这是因为这些渠道是最稳定、最权威的强基信息来源。教育部是根政策来源，阳光高考是高校招生阳光工程指定平台，省级考试机构与高校招办承担大量具体通知、公示与结果发布。

9.2 数据接入顺序

先接：

国家政策

浙江这类省级汇总页

5–8 所示范高校

再扩展到更多学校和更多年份

9.3 录入模式

自动抓取原文

AI 提取结构化字段

人工审核字段

发布到前台

10. 风险与对策
    10.1 风险：官方页面格式差异大

对策
把“来源快照 + 结构化提取 + 人工审核”做成标准流程。

10.2 风险：分数口径误用

对策
强制分数类型字段；前台默认不允许混比。

10.3 风险：AI 修复引入新 bug

对策
所有自动修复必须经过测试门禁与 PR review，总是最小改动。

10.4 风险：部署环境复杂

对策
容器化、环境变量模板化、staging 先验证、生产一键回滚。

10.5 风险：你不想人工写纠错

对策
把“修复”流程产品化，而不是依赖个人手改：

日志归档

自动补丁

自动回归

自动 PR

人工只审批

11. 最终推荐工作方式

我建议你从第一天就按下面方式推进：

开发原则

Claude Code：主开发

Codex：主审查 + 主修复

人工：主决策 + 主验收

工作顺序

先冻结 PRD、数据字典、页面结构

让 Claude Code 生成项目骨架

让 Codex 审查并修复初始化问题

先做查询主链路，再做后台，再做导出

最后接采集和发布

你真正要盯的只有 3 件事

这页好不好看

这个查询准不准确

这个发布稳不稳定

12. 你现在就可以采用的项目口号

一句话版本：
做一个“有官方证据、能查能比能导出、可持续维护”的强基计划信息系统。

研发口号版本：
AI 写代码，AI 修错误，AI 跑回归，人只做判断。
