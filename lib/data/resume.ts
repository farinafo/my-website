export type Locale = "zh" | "en";

export type TimelineItem = {
  title: string;
  role: string;
  time: string;
  description?: string;
  paragraphs?: string[];
};

export type SimpleItem = { title: string; description: string };
export type EducationItem = { school: string; meta: string };
export type CapabilityGroup = { title: string; items: string; tools: string };

export type ResumeCopy = {
  metadata: { title: string; description: string };
  hero: { title: string; description: string; tags: string[] };
  profile: { title: string; paragraphs: string[] };
  experience: { title: string; items: TimelineItem[] };
  supplementalExperience: { title: string; items: TimelineItem[] };
  research: { title: string; items: SimpleItem[] };
  education: { title: string; items: EducationItem[] };
  capabilities: { title: string; groups: CapabilityGroup[] };
  contact: { title: string; body: string; email: string; github: string; instagram: string };
};

const zhExperience: TimelineItem[] = [
  {
    title: "联合国 OHRLLS",
    role: "社交媒体实习生",
    time: "2026.06 – 2026.12",
    description: "联合国纽约总部。支持最不发达国家、内陆发展中国家与小岛屿发展中国家（LDCs、LLDCs、SIDS）相关高级别会议及联合国大会高级别周（UNGA）工作；收集、核验并整理部长、政府官员和国际组织嘉宾资料，维护演讲嘉宾与部长信息追踪表，跟进嘉宾简介、照片与确认材料，并协调联合国内部团队、常驻代表团及外部利益相关方，支持会议材料、数字素材和多项活动并行执行。",
  },
  {
    title: "CRAMAI / Moments AI",
    role: "海外市场与产品运营",
    time: "2026.05 – 2026.09",
    description: "围绕从学习到职业发展的产品方向开展用户访谈、需求分析与产品反馈整理；参与产品缺陷与功能需求的优先级梳理、理想客户画像（ICP）与竞品研究、产品定位，并使用 Google Search Console、Reddit Ads 开展搜索引擎优化（SEO）与关键词研究，支持海外市场理解与增长工作。",
  },
  {
    title: "网易游戏海外事业部",
    role: "产品与市场研究实习生",
    time: "2024.02 – 2024.04",
    description: "围绕海外游戏工具产品开展竞品、用户反馈与市场研究，分析 GearUp、ExitLag 等产品的用户痛点，整理 Trustpilot 评论和区域网络指标，并研究 Open Fiber、EOLO 等运营商模式，为产品优化、本地化和市场讨论提供研究支持。",
  },
  {
    title: "Pre-Master",
    role: "创始人 / 产品运营 / 商务拓展",
    time: "2021.01 – 2023.06",
    description: "从 0 到 1 搭建教育咨询业务，参与服务设计、用户获取、社群建设、商业化、团队管理与业务合作。已确认数据：1,500 多名社群成员、服务 1,000 多名用户、150 多次付费咨询、100% 好评率、20 多人团队；4 篇知乎文章获得 1 万多次阅读。",
  },
  {
    title: "上海 HD 规划与建筑",
    role: "建筑项目助理",
    time: "2020.06 – 2022.03",
    description: "参与建筑与规划项目，支持模型制作、图纸输出、建筑摄影、团队沟通与外部协作，将概念方案推进为可汇报、可交付的设计成果。",
  },
  {
    title: "EESTEC",
    role: "项目经理",
    time: "2023.03 – 2025.07",
    description: "负责国际项目与活动的策划、团队协作、外部沟通、志愿者组织、预算及参与者反馈，积累跨文化项目管理经验。",
  },
];

const enExperience: TimelineItem[] = [
  {
    title: "United Nations OHRLLS",
    role: "Social Media Intern",
    time: "2026.06 – 2026.12",
    description: "United Nations Headquarters, New York. Support high-level meetings and international programs related to LDCs, LLDCs, and SIDS, including UNGA High-Level Week. Collect, verify, and organize information on ministers, government officials, and international-organization guests; maintain speaker / minister tracking data; follow up on biographies, photos, and confirmations; coordinate with UN teams, permanent missions, and external stakeholders; and support meeting materials, digital assets, and parallel event delivery.",
  },
  {
    title: "CRAMAI / Moments AI",
    role: "Overseas Market & Product Operations",
    time: "2026.05 – 2026.09",
    description: "Conducted user interviews and needs analysis, organized product feedback, and contributed to bug and feature prioritization. Work also included ICP and competitor research, product positioning, Google Search Console, Reddit Ads, SEO and keyword research, overseas growth, and research into Study → Career product directions.",
  },
  {
    title: "NetEase Games",
    role: "Product & Market Intern",
    time: "2024.02 – 2024.04",
    description: "Conducted competitor, user-feedback, and market research for overseas gaming utility products. Analyzed pain points for products such as GearUp and ExitLag, reviewed Trustpilot feedback and regional network indicators, and researched operator models including Open Fiber and EOLO to support product, localization, and market discussions.",
  },
  {
    title: "Pre-Master",
    role: "Founder / Product Operations / Business Development",
    time: "2021.01 – 2023.06",
    description: "Built an education service from 0 to 1 across service design, user acquisition, community, commercialization, team management, and business partnerships. Confirmed figures: 1,500+ community members, 1,000+ users served, 150+ paid consultations, a 100% positive rating, and a 20+ person team. Four Zhihu articles received 10k+ views.",
  },
  {
    title: "Shanghai HD Planning & Architecture",
    role: "Architectural Project Assistant",
    time: "2020.06 – 2022.03",
    description: "Supported architectural and planning projects through model making, drawing production, architectural photography, team communication, and partner coordination, helping carry concepts into presentable project outputs.",
  },
  {
    title: "EESTEC",
    role: "Project Manager",
    time: "2023.03 – 2025.07",
    description: "Managed international projects and events, including planning, team coordination, external communication, volunteer organization, budget management, and participant feedback.",
  },
];

const zhResearch: SimpleItem[] = [
  { title: "能源与政策分析", description: "以多准则分析比较能源政策选项与评估标准；保留为课程研究，不代表政策建议已被采纳。" },
  { title: "区域经济结构", description: "使用欧洲统计局数据、区位商（LQ）、赫芬达尔—赫希曼指数（HHI）与份额变动分析，研究区域产业结构，并结合回归与案例比较。" },
  { title: "供应链与运营", description: "以 ABC 库存分析、补货趋势与风险框架讨论生产模式和供应连续性。" },
  { title: "金融与资产分析", description: "以财务指标比较、DCF、WACC 和情景分析研究企业与房地产资产。" },
];

const enResearch: SimpleItem[] = [
  { title: "Energy & Policy Analysis", description: "A multi-criteria analysis comparing energy-policy options and evaluation criteria; an academic study, not an adopted policy recommendation." },
  { title: "Regional Economics", description: "Eurostat data, LQ, HHI, and shift-share analysis of regional industry structure, alongside regression and case comparison." },
  { title: "Supply Chain & Operations", description: "ABC inventory analysis, replenishment trends, and risk frameworks to examine production modes and supply continuity." },
  { title: "Financial & Asset Analysis", description: "Financial-ratio comparison, DCF, WACC, and scenario analysis across companies and real-estate assets." },
];

const zhCapabilities: CapabilityGroup[] = [
  { title: "数据与分析", items: "数据分析、机器学习、计量经济分析、模型解释与可视化", tools: "Python / Pandas / NumPy / XGBoost / SHAP / Matplotlib / Excel / SQL（基础）/ Tableau" },
  { title: "研究", items: "市场研究、行业研究、竞争分析、用户研究", tools: "市场研究 / 行业研究 / 竞争分析 / 用户研究 / 计量经济学" },
  { title: "战略与商业", items: "产品战略、全球市场分析、投资分析、可行性分析、创业与商业化", tools: "产品战略 / 全球市场分析 / 投资分析 / 可行性分析 / 创业" },
  { title: "投资与实体资产", items: "DCF、WACC、ROI、情景分析、风险评估、房地产分析", tools: "现金流折现 / 加权平均资本成本 / 投资回报率 / 情景分析 / 风险评估 / 房地产分析" },
  { title: "产品与增长", items: "AI 产品运营、理想客户画像（ICP）、市场进入策略（GTM）、搜索引擎优化（SEO）与关键词研究", tools: "Google Search Console / Reddit Ads / 搜索引擎优化 / 关键词研究" },
  { title: "项目与国际协作", items: "项目管理、利益相关方协调、跨文化沟通", tools: "项目管理 / 利益相关方协调 / 跨文化沟通" },
];

const enCapabilities: CapabilityGroup[] = [
  { title: "Data & Analytics", items: "Data analytics, machine learning, econometrics, model interpretation, and visualization", tools: "Python / Pandas / NumPy / XGBoost / SHAP / Matplotlib / Excel / SQL (basic) / Tableau" },
  { title: "Research", items: "Market research, industry research, competitive analysis, and user research", tools: "Market research / Industry research / Competitive analysis / User research / Econometrics" },
  { title: "Strategy & Business", items: "Product strategy, global market analysis, investment analysis, feasibility analysis, entrepreneurship, and commercialization", tools: "Product strategy / Global market analysis / Investment analysis / Feasibility / Entrepreneurship" },
  { title: "Investment & Real Assets", items: "DCF, WACC, ROI, scenario analysis, risk assessment, and real-estate analysis", tools: "DCF / WACC / ROI / Scenario analysis / Risk assessment / Real estate analysis" },
  { title: "Product & Growth", items: "AI product operations, ICP research, GTM research, SEO, and keyword research", tools: "Google Search Console / Reddit Ads / SEO / Keyword research" },
  { title: "Project & International", items: "Project management, stakeholder coordination, and cross-cultural communication", tools: "Project management / Stakeholder coordination / Cross-cultural communication" },
];

export const resumeCopy: Record<Locale, ResumeCopy> = {
  zh: {
    metadata: { title: "经历", description: "陈凡在研究、战略、数据分析、国际项目与商业实践方面的经历。" },
    hero: { title: "经历", description: "研究、战略与数据分析。结合定量分析、市场情报、产品思维与国际经验，将复杂信息整理为战略判断。", tags: ["数据与研究", "战略与商业", "国际事务与政策"] },
    profile: { title: "职业简介", paragraphs: ["我以研究、战略与数据分析为主线，关注 AI、全球市场、房地产及实体资产中的商业问题。", "我的经历横跨联合国国际项目、AI 产品与海外市场研究、游戏行业研究、创业、建筑规划和跨文化项目管理。"] },
    experience: { title: "经历", items: zhExperience },
    supplementalExperience: { title: "补充经历", items: [{ title: "上海时装周秋季展厅", role: "品牌助理", time: "2026.03", description: "参与 VINZOO 展位现场执行、样品整理、买手接待与活动后信息整理。" }] },
    research: { title: "研究与分析", items: zhResearch },
    education: { title: "教育背景", items: [
      { school: "米兰理工大学", meta: "建成环境管理理学硕士 · 经济学课程方向 · 2022.09–2025.07 · 2025 年 7 月毕业" },
      { school: "瑞典皇家理工学院（KTH）", meta: "交换学习 · 2025.01–2025.06" },
      { school: "淮阴工学院", meta: "建筑学 · 2014.09–2019.06" },
      { school: "中华大学", meta: "交换学习 · 2016.09–2017.01" },
    ] },
    capabilities: { title: "能力概览", groups: zhCapabilities },
    contact: { title: "联系", body: "欢迎就研究、战略、数据分析、AI 与国际市场相关机会联系。", email: "chenfan1949@163.com", github: "farinafo", instagram: "Instagram · farinafo" },
  },
  en: {
    metadata: { title: "Experience", description: "Fan Chen's experience across research, strategy, data analytics, international programs, and business." },
    hero: { title: "Experience", description: "Research + Strategy + Data. I combine quantitative analysis, market intelligence, product thinking, and international experience to inform strategic decisions.", tags: ["Data & Research", "Strategy & Business", "International & Policy"] },
    profile: { title: "Profile", paragraphs: ["My work centers on research, strategy, and data analysis, with interests across AI, global markets, real estate, and real assets.", "My experience spans UN international programs, AI product and overseas-market work, games market research, entrepreneurship, architecture and planning, and cross-cultural project management."] },
    experience: { title: "Experience", items: enExperience },
    supplementalExperience: { title: "Additional Experience", items: [{ title: "Shanghai Fashion Week Autumn Showroom", role: "Brand Assistant", time: "2026.03", description: "Supported VINZOO on-site execution, sample organization, buyer reception, and post-event information organization." }] },
    research: { title: "Research & Analysis", items: enResearch },
    education: { title: "Education", items: [
      { school: "Politecnico di Milano", meta: "MSc in Management of Built Environment · Economic Curriculum · 2022.09–2025.07 · Graduated July 2025" },
      { school: "KTH Royal Institute of Technology", meta: "Exchange · 2025.01–2025.06" },
      { school: "Huaiyin Institute of Technology", meta: "Architecture · 2014.09–2019.06" },
      { school: "Chung Hua University", meta: "Exchange · 2016.09–2017.01" },
    ] },
    capabilities: { title: "Capabilities", groups: enCapabilities },
    contact: { title: "Contact", body: "I welcome conversations about research, strategy, data analysis, AI, and international markets.", email: "chenfan1949@163.com", github: "farinafo", instagram: "Instagram · farinafo" },
  },
};
