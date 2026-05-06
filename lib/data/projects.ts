export type ProjectSlug =
  | "coursesnap"
  | "ai-cultural-visual-system"
  | "shanghai-house-price-forecasting"
  | "casa-rossi-valuation"
  | "monza-esports-hotel"
  | "hedonic-price-regression"
  | "cultural-asset-digital-commercialization"
  | "content-growth"
  | "pre-master"
  | "market-intelligence";

export interface ProjectSummary {
  slug: ProjectSlug;
  title: string;
  cardSubtitle: string;
  shortDescription: string;
  tags: string[];
}

export interface ProjectDetail extends ProjectSummary {
  subtitle: string;
  role: string;
  phase: string;
  headlineOutcome: string;
  projectLens?: string;
  overview: string;
  problem: string;
  whatIDid: string;
  caseSections?: {
    id: string;
    title: string;
    label: string;
    body: string;
    bullets?: string[];
  }[];
  analysisFlow?: {
    title: string;
    description: string;
  }[];
  evidenceCards?: {
    label: string;
    value: string;
    description: string;
  }[];
  decisionPoints?: {
    title: string;
    description: string;
  }[];
  evidenceVisuals?: {
    title: string;
    description: string;
    bars?: {
      label: string;
      value: number;
      displayValue: string;
    }[];
    rows?: {
      label: string;
      value: string;
      note: string;
    }[];
  }[];
  caseTakeaways?: {
    label: string;
    title: string;
    description: string;
  }[];
  result: string;
  keyOutputs?: string[];
  reflection: string;
  reportUrl?: string;
  noteUrl?: string;
  noteLinkLabel?: string;
  relatedLinks?: {
    label: string;
    href: string;
  }[];
}

export const projectSummaries: ProjectSummary[] = [
  {
    slug: "coursesnap",
    title: "CourseSnap",
    cardSubtitle: "AI 学习资料整理工具",
    shortDescription: "把碎片化学习输入整理成可编辑、可复习、可复用的学习输出。",
    tags: ["AI产品", "学习效率", "MVP", "产品迭代"],
  },
  {
    slug: "ai-cultural-visual-system",
    title: "传统文化 AI 视觉",
    cardSubtitle: "生成式内容工作流",
    shortDescription:
      "围绕二十四节气与十二花神主题，搭建一套从主题规划、提示词设计、图像生成、版本筛选到网页画廊展示的生成式内容工作流。",
    tags: ["提示词设计", "视觉策展", "东方美学"],
  },
  {
    slug: "shanghai-house-price-forecasting",
    title: "机器学习驱动的上海房价预测",
    cardSubtitle: "RMSE 320.06 · SHAP 驱动解释",
    shortDescription:
      "基于 2000-2024 年上海房价与宏观金融变量，构建 XGBoost 月度预测模型，并用 SHAP 解释价格惯性、M2 与情绪信号。",
    tags: ["机器学习", "房地产", "XGBoost", "SHAP", "预测建模"],
  },
  {
    slug: "casa-rossi-valuation",
    title: "Casa Rossi 房地产投资估值",
    cardSubtitle: "DCF 情景对比 · ROI 判断",
    shortDescription:
      "用租金比较、DCF 与 WACC 比较保持现状和改造方案，判断历史建筑资产更稳健的投资路径。",
    tags: ["房地产投资", "DCF", "WACC", "估值", "风险评估"],
  },
  {
    slug: "monza-esports-hotel",
    title: "Monza 电竞酒店可行性研究",
    cardSubtitle: "304,134 观众 · EUR 2.13M 租金",
    shortDescription:
      "围绕 F1 赛事流量和电竞消费场景，设计 170 间客房、1,900 sqm 体验空间与复合收入结构。",
    tags: ["可行性研究", "商业模型", "酒店", "电竞", "投资分析"],
  },
  {
    slug: "hedonic-price-regression",
    title: "Hedonic 房价回归分析",
    cardSubtitle: "140 样本 · 12 变量回归",
    shortDescription:
      "用 Hedonic Price Method 检验地铁距离、CBD、学校质量等因素对房价的影响，并谨慎解释弱显著信号。",
    tags: ["计量经济", "房价分析", "回归模型", "城市交通", "数据分析"],
  },
  {
    slug: "cultural-asset-digital-commercialization",
    title: "文化资产数字化与商业化策略",
    cardSubtitle: "93.13 sqm 壁画 · EUR 1.05M 价值",
    shortDescription:
      "以昭化寺壁画为核心资产，设计数字化保护、文旅运营、现金流回收和五年价值测算路径。",
    tags: ["文化资产", "商业化", "DCF", "数字化保护", "策略"],
  },
  {
    slug: "content-growth",
    title: "内容驱动增长",
    cardSubtitle: "内容运营与增长闭环",
    shortDescription: "用内容系统连接用户洞察、表达与转化，形成可复盘的增长闭环。",
    tags: ["增长", "内容策略", "用户洞察", "转化"],
  },
  {
    slug: "pre-master",
    title: "教育咨询业务 0 到 1",
    cardSubtitle: "从用户需求验证到课程产品、社群运营与交付体系搭建",
    shortDescription: "从用户需求验证到课程产品、社群运营与交付体系搭建。",
    tags: ["教育咨询", "社群运营", "商业化"],
  },
  {
    slug: "market-intelligence",
    title: "网易市场分析",
    cardSubtitle: "海外产品市场研究",
    shortDescription: "结构化竞品、用户与市场研究，提升海外产品团队决策效率。",
    tags: ["市场研究", "竞品分析", "商业判断", "决策支持"],
  },
];

const projectSummaryEnglish: Record<ProjectSlug, Omit<ProjectSummary, "slug">> = {
  coursesnap: {
    title: "CourseSnap",
    cardSubtitle: "AI study-material organizer",
    shortDescription:
      "A lightweight AI workflow that turns course screenshots into reusable study materials.",
    tags: ["AI Product", "Learning", "MVP", "Iteration"],
  },
  "ai-cultural-visual-system": {
    title: "Traditional Culture AI Visual System",
    cardSubtitle: "Generative content workflow",
    shortDescription:
      "A visual system exploring Chinese solar terms, flower deities, prompt design, and web presentation.",
    tags: ["Prompt Design", "Visual Curation", "Eastern Aesthetics"],
  },
  "shanghai-house-price-forecasting": {
    title: "Shanghai Housing Price Forecast",
    cardSubtitle: "RMSE 320.06 · SHAP drivers",
    shortDescription:
      "An XGBoost monthly forecast using housing, macro, liquidity, policy, and sentiment variables, with SHAP interpretation for market drivers.",
    tags: ["Machine Learning", "Real Estate", "XGBoost", "SHAP"],
  },
  "casa-rossi-valuation": {
    title: "Casa Rossi Real Estate Valuation",
    cardSubtitle: "DCF scenarios · ROI call",
    shortDescription:
      "A two-scenario valuation comparing current use and showroom conversion through rent comps, DCF, WACC, cost, and risk.",
    tags: ["Real Estate", "DCF", "WACC", "Valuation"],
  },
  "monza-esports-hotel": {
    title: "Monza Esports Hotel Feasibility",
    cardSubtitle: "304,134 spectators · EUR 2.13M rent",
    shortDescription:
      "A hybrid hotel feasibility case built around Grand Prix traffic, 170 rooms, 1,900 sqm experience anchors, and diversified revenue.",
    tags: ["Feasibility", "Business Model", "Hotel", "Esports"],
  },
  "hedonic-price-regression": {
    title: "Hedonic Price Regression",
    cardSubtitle: "140 samples · 12 predictors",
    shortDescription:
      "A hedonic pricing model testing metro distance, CBD access, school quality, and property features while avoiding overclaiming weak signals.",
    tags: ["Regression", "Real Estate", "Pricing", "Analysis"],
  },
  "cultural-asset-digital-commercialization": {
    title: "Cultural Asset Digital Commercialization",
    cardSubtitle: "93.13 sqm frescoes · EUR 1.05M value",
    shortDescription:
      "A heritage strategy linking fresco preservation, visitor experience, digital operations, revenue streams, and five-year value recovery.",
    tags: ["Culture", "Strategy", "Commercialization", "Digital"],
  },
  "content-growth": {
    title: "Content-Driven Growth",
    cardSubtitle: "Content operations and conversion",
    shortDescription:
      "A growth practice connecting content planning, audience feedback, platform data, and collaboration leads.",
    tags: ["Content", "Growth", "Operations", "Data Review"],
  },
  "pre-master": {
    title: "Pre-Master Education Service",
    cardSubtitle: "0-to-1 education service",
    shortDescription:
      "An education consulting service built from positioning and content acquisition to delivery operations.",
    tags: ["Education", "Community", "Service Design", "Growth"],
  },
  "market-intelligence": {
    title: "Market Intelligence Research",
    cardSubtitle: "Market and competitor research",
    shortDescription:
      "A collection of research work around markets, users, competitors, and strategic judgment.",
    tags: ["Market Research", "Competitors", "Strategy", "Insights"],
  },
};

export function getProjectSummaries(locale: "zh" | "en" = "zh"): ProjectSummary[] {
  if (locale === "zh") return projectSummaries;
  return projectSummaries.map((project) => ({
    slug: project.slug,
    ...projectSummaryEnglish[project.slug],
  }));
}

const englishDetailText: Record<
  ProjectSlug,
  Pick<ProjectDetail, "subtitle" | "role" | "phase" | "headlineOutcome" | "projectLens" | "overview" | "problem" | "whatIDid" | "analysisFlow" | "evidenceCards" | "evidenceVisuals" | "caseTakeaways" | "decisionPoints" | "result" | "keyOutputs" | "reflection">
> = {
  coursesnap: {
    subtitle: "A lightweight AI product workflow for collecting, organizing, and summarizing course materials.",
    role: "Product planning / MVP development / AI workflow design",
    phase: "Runnable MVP",
    headlineOutcome:
      "Built a working MVP that turns course screenshots into PDFs and supports AI-assisted study notes.",
    projectLens: "AI Product / Learning Efficiency / Local Tool / MVP",
    overview:
      "CourseSnap started from a concrete learning problem: course slides and replay materials are often hard to download, so learners rely on repeated screenshots and manual organization.",
    problem:
      "The key challenge was not only capturing content, but turning scattered screenshots, transcripts, and notes into a structured input that can be reviewed and reused.",
    whatIDid:
      "I designed a compact workflow covering automatic slide capture, PDF assembly, transcript detection, and AI summarization, then packaged the MVP for local use.",
    result:
      "The project became an end-to-end learning-material workflow, proving that a small AI product can create value when it is anchored in a real user task.",
    reflection:
      "This project reinforced that AI product value depends on input quality, process design, and user trust, not only on model capability.",
  },
  "ai-cultural-visual-system": {
    subtitle: "A generative visual workflow connecting prompt design, visual selection, and web presentation.",
    role: "Theme planning / Prompt design / Visual curation / Web presentation",
    phase: "Ongoing iteration",
    headlineOutcome:
      "Built a visual experiment system around Chinese solar terms and flower deities, with gallery-style presentation on the website.",
    projectLens: "Generative AI / Content Workflow / Visual System / Cultural Expression",
    overview:
      "This project explores how traditional cultural themes can become a consistent AI visual system rather than a set of isolated images.",
    problem:
      "Single images are easy to generate, but a visual series needs consistency, variation, and a clear method for selecting and refining outputs.",
    whatIDid:
      "I organized the work around theme structure, style rules, prompt templates, version selection, and web-based presentation.",
    result:
      "The project created a reusable approach for transforming AI-generated images into a browsable and iterative content system.",
    reflection:
      "The value of generative AI here lies in process design: prompts, constraints, selection criteria, and presentation all shape the final experience.",
  },
  "shanghai-house-price-forecasting": {
    subtitle: "An explainable forecasting model for Shanghai monthly housing-price growth.",
    role: "Data collection / Feature engineering / XGBoost modeling / SHAP interpretation",
    phase: "Master thesis research, model iteration, and market interpretation",
    headlineOutcome:
      "Reduced forecast error by more than 98% versus the baseline model and identified momentum, liquidity, and sentiment signals.",
    projectLens: "Machine Learning / Real Estate / Forecasting / Explainable AI",
    overview:
      "This thesis reframes Shanghai housing-price analysis as a monthly growth forecasting problem. Instead of only describing long-term market trends, it builds a model that can capture short-term movements using housing prices, macro-financial indicators, policy signals, stock-market variables, and consumer sentiment.",
    problem:
      "A black-box forecast is not very useful for market judgment. The project needed to answer two questions at the same time: whether monthly housing-price movements could be predicted more accurately than a traditional linear model, and which variables were actually driving the model's prediction.",
    whatIDid:
      "I collected and aligned multi-source data from 2000 to 2024, transformed annual and cumulative indicators into monthly features, built lagged variables for policy, LPR, M2, stock-market and sentiment signals, trained iterative XGBoost models, compared them with linear regression, and used SHAP to interpret feature contribution.",
    analysisFlow: [
      {
        title: "Reframe the target",
        description:
          "The target was changed from raw price level to next-month growth, making it consistent with percentage-based macro and financial inputs.",
      },
      {
        title: "Build market features",
        description:
          "The model combined recent price momentum, M2, LPR, CPI, policy scores, stock-market indicators, consumer confidence, and seasonal variables.",
      },
      {
        title: "Compare model versions",
        description:
          "XGBoost was iterated against a baseline model and evaluated on reconstructed price levels using RMSE and MAE.",
      },
      {
        title: "Explain the result",
        description:
          "SHAP analysis translated model output into market logic: momentum, liquidity, seasonality, and investor sentiment became interpretable drivers.",
      },
    ],
    evidenceCards: [
      {
        label: "FINAL MODEL",
        value: "RMSE 320.06 / MAE 176.82",
        description:
          "The final XGBoost version tracked Shanghai monthly housing prices from 2021 to 2024 with much lower error than the baseline.",
      },
      {
        label: "ERROR REDUCTION",
        value: "98%+",
        description:
          "Compared with the initial baseline RMSE of 18,222.69, the final model achieved a substantial improvement after target redesign and feature engineering.",
      },
      {
        label: "TOP SIGNAL",
        value: "Price momentum",
        description:
          "SHAP results showed that previous-month growth was the most influential predictor, indicating market inertia in short-term price movement.",
      },
      {
        label: "MACRO DRIVER",
        value: "M2 liquidity",
        description:
          "Money supply emerged as an important macro-financial predictor, linking liquidity conditions to housing-market expectations.",
      },
    ],
    evidenceVisuals: [
      {
        title: "Model Performance Snapshot",
        description: "The final model sharply reduced error after target redesign and feature engineering.",
        bars: [
          { label: "Baseline RMSE", value: 100, displayValue: "18,222.69" },
          { label: "Final XGBoost RMSE", value: 4, displayValue: "320.06" },
          { label: "Final XGBoost MAE", value: 4, displayValue: "176.82" },
        ],
      },
      {
        title: "Market Driver Map",
        description: "The model was presented as a market-explanation framework, not only a prediction engine.",
        rows: [
          { label: "Momentum", value: "Previous-month growth", note: "The strongest short-term predictor in SHAP analysis." },
          { label: "Liquidity", value: "M2 money supply", note: "A macro-financial signal linked to market expectation." },
          { label: "Sentiment", value: "Consumer confidence / stock market", note: "Signals investor mood and capital reallocation pressure." },
        ],
      },
    ],
    caseTakeaways: [
      {
        label: "BUSINESS QUESTION",
        title: "Can housing movement be read before it becomes obvious?",
        description:
          "The case turns a broad real-estate topic into a monthly forecasting problem, so the model can support earlier market judgment instead of only explaining past price changes.",
      },
      {
        label: "REPORT EVIDENCE",
        title: "98%+ error reduction with interpretable drivers",
        description:
          "XGBoost reduced RMSE from 18,222.69 to 320.06, while SHAP identified price momentum, M2 liquidity, stock-market signals, and consumer confidence as readable market drivers.",
      },
      {
        label: "STRATEGY SIGNAL",
        title: "Use it as an early-warning framework",
        description:
          "The output is strongest when translated into a dashboard for momentum, liquidity, sentiment, and policy direction, helping analysts discuss market timing and risk.",
      },
    ],
    decisionPoints: [
      {
        title: "Use the model as an early-warning lens, not an automatic investment rule",
        description:
          "The strongest value is not a single price forecast, but a repeatable framework for detecting when momentum, liquidity, sentiment, and policy signals begin to move in the same direction.",
      },
      {
        title: "Translate SHAP output into market narratives",
        description:
          "For stakeholders, the model should be presented as a structured explanation of what is driving the market, so analysts can connect technical output with housing-policy and investment discussions.",
      },
    ],
    result:
      "The final workflow produced an accurate and explainable model for short-term Shanghai housing-price dynamics. It showed that price momentum, liquidity conditions, seasonality, financial-market indicators, and sentiment variables can jointly improve forecasting and interpretation.",
    keyOutputs: [
      "Monthly feature matrix covering housing, macroeconomic, policy, financial-market, and sentiment variables",
      "XGBoost forecasting model for next-month housing-price growth",
      "Benchmark comparison with linear regression",
      "RMSE / MAE evaluation on reconstructed price levels",
      "SHAP feature-importance interpretation",
      "Market explanation of momentum, liquidity, and sentiment effects",
    ],
    reflection:
      "For job-facing presentation, this is my strongest data case: it shows that I can move from messy real-world data to model design, performance evaluation, interpretability, and business-facing market judgment.",
  },
  "casa-rossi-valuation": {
    subtitle: "A two-scenario valuation comparing preservation and adaptive reuse for a historic Milan asset.",
    role: "Real estate valuation / Rental market analysis / DCF comparison",
    phase: "Scenario design, rent estimation, valuation, and investment recommendation",
    headlineOutcome: "Compared the current-use scenario with a showroom/fashion-atelier conversion and recommended the higher-ROI option.",
    projectLens: "Real Estate Investment / DCF / Adaptive Reuse / Scenario Analysis",
    overview:
      "Casa Rossi is a historic building on Corso Magenta in Milan with cultural-heritage constraints. The investment question was not simply what the building was worth, but which operating scenario created the better risk-return profile under preservation limits.",
    problem:
      "The asset had two plausible strategies: keep the existing mixed-use structure with lower cost, or convert it into showrooms and fashion ateliers with higher revenue potential but higher renovation cost. The decision required comparing revenue upside against capital expenditure and regulatory constraints.",
    whatIDid:
      "I estimated market rent by function, adjusted comparable listings with feature coefficients, calculated rentable areas, built discounted cash-flow logic for both scenarios, and compared return on investment rather than relying on headline revenue alone.",
    analysisFlow: [
      {
        title: "Define scenarios",
        description:
          "Scenario 1 keeps the building in its current mixed-use state; Scenario 2 converts it into showrooms or fashion ateliers aligned with the location and architectural identity.",
      },
      {
        title: "Estimate rent by use",
        description:
          "Comparable market rents were collected by function and adjusted for building characteristics to estimate annual rental income.",
      },
      {
        title: "Build DCF comparison",
        description:
          "Annual rent, growth, costs, renovation investment, and discounting were used to estimate open-market value and return.",
      },
      {
        title: "Make the investment call",
        description:
          "The analysis compared revenue, cost, heritage constraints, and ROI to select the more feasible scenario.",
      },
    ],
    evidenceCards: [
      {
        label: "SCENARIO 1",
        value: "Keep current use",
        description:
          "Lower intervention cost and fewer regulatory risks made the current-use scenario more attractive from an ROI perspective.",
      },
      {
        label: "SCENARIO 2",
        value: "Showrooms / ateliers",
        description:
          "The adaptive-reuse option had stronger revenue potential but required higher renovation cost and greater execution risk.",
      },
      {
        label: "METHOD",
        value: "Rent comps + DCF",
        description:
          "The valuation combined market comparison for rent estimation with discounted cash-flow logic for investment judgment.",
      },
    ],
    evidenceVisuals: [
      {
        title: "Scenario Comparison",
        description: "The investment call is based on the tradeoff between revenue upside and intervention cost.",
        rows: [
          { label: "Scenario 1", value: "Keep current use", note: "Lower cost, fewer heritage-intervention risks, stronger ROI profile." },
          { label: "Scenario 2", value: "Showrooms / ateliers", note: "Higher rent potential, but higher renovation cost and execution complexity." },
          { label: "Decision", value: "Prefer Scenario 1", note: "The original-state scenario is more attractive after cost and return comparison." },
        ],
      },
    ],
    caseTakeaways: [
      {
        label: "BUSINESS QUESTION",
        title: "Which asset strategy creates better risk-adjusted return?",
        description:
          "The case compares preservation-led current use with an adaptive-reuse showroom strategy, making the decision about return quality rather than surface-level revenue.",
      },
      {
        label: "REPORT EVIDENCE",
        title: "Rent comps and DCF separate upside from cost",
        description:
          "The report estimates rental income by functional space, then tests both scenarios through cash-flow assumptions, renovation cost, and heritage constraints.",
      },
      {
        label: "STRATEGY SIGNAL",
        title: "Prefer the lower-intervention scenario",
        description:
          "The current-use option is more convincing because it protects ROI and execution certainty, even though the showroom scenario has stronger headline rent potential.",
      },
    ],
    decisionPoints: [
      {
        title: "Higher revenue does not automatically mean better investment",
        description:
          "The final recommendation favored the original-state scenario because the incremental revenue from conversion did not fully compensate for higher cost and risk.",
      },
      {
        title: "Heritage constraints are part of the financial model",
        description:
          "For protected assets, renovation limits, maintenance obligations, and permitted-use constraints must be treated as valuation inputs, not background description.",
      },
    ],
    result:
      "The final recommendation was to keep Casa Rossi closer to its original state. The showroom/fashion-atelier scenario could generate higher revenue, but the current-use scenario offered a better investment profile after cost and ROI comparison.",
    keyOutputs: [
      "Two-scenario investment comparison",
      "Rental market analysis by functional space",
      "Rentable-area based income estimation",
      "Discounted cash-flow valuation",
      "ROI-based investment recommendation",
      "Heritage-constraint risk interpretation",
    ],
    reflection:
      "This case is useful for showing investment judgment: the work moves beyond valuation mechanics and demonstrates how to choose between competing asset strategies.",
  },
  "monza-esports-hotel": {
    subtitle: "A feasibility study for a hybrid racing-esports hotel near the Monza circuit.",
    role: "Market research / Concept positioning / Revenue structure / Cash-flow feasibility",
    phase: "Site analysis, business model design, and financial feasibility study",
    headlineOutcome: "Positioned the project as a racing-esports hotel and built revenue, lease, and management logic around event-driven demand.",
    projectLens: "Hospitality / Esports / Real Estate Feasibility / Revenue Model",
    overview:
      "The project evaluates whether a former industrial site in Monza can be redeveloped into a hotel complex combining accommodation, racing simulators, gaming lounges, events, F&B, and merchandise.",
    problem:
      "A themed hotel concept needs more than an attractive idea. It must prove target demand, seasonal revenue logic, management structure, lease feasibility, and the ability to stay active beyond Formula 1 peak periods.",
    whatIDid:
      "I analyzed territorial context, tourist flows, esports market growth, comparable gaming-hotel cases, target users, revenue streams, marketing strategy, lease assumptions, and discounted cash flow. The proposal also compared single versus separate management structures and recommended a joint-venture approach.",
    analysisFlow: [
      {
        title: "Validate location advantage",
        description:
          "The site benefits from Monza's racing identity, proximity to Milan, historical assets, and Formula 1 visitor peaks, including more than 300,000 spectators during the 2023 Grand Prix weekend.",
      },
      {
        title: "Define the product concept",
        description:
          "The proposal combines hotel rooms, a 900 sqm gaming lounge, a 1,000 sqm racing simulator area, event space, themed F&B, and merchandise retail.",
      },
      {
        title: "Design revenue structure",
        description:
          "Revenue streams include room bookings, events, sponsorships, strategic partnerships, restaurant/bar income, and merchandise.",
      },
      {
        title: "Choose operating model",
        description:
          "Unified management through a joint venture was recommended to keep brand experience coherent while combining hospitality, esports, F&B, and retail expertise.",
      },
    ],
    evidenceCards: [
      {
        label: "MARKET PEAK",
        value: "304,134 spectators",
        description:
          "The 2023 Monza Grand Prix visitor volume provided evidence for event-driven hospitality demand.",
      },
      {
        label: "FIRST-YEAR RENT",
        value: "EUR 2.13M",
        description:
          "The lease proposal estimated first-year rent at EUR 2,133,600, with annual growth built into the feasibility logic.",
      },
      {
        label: "ROOM MIX",
        value: "170 rooms",
        description:
          "The concept included single, double, triple, quad, and deluxe suite configurations to serve different travel groups.",
      },
      {
        label: "ANCHOR SPACE",
        value: "1,900 sqm",
        description:
          "Gaming lounge and racing simulator areas were used as experience anchors beyond conventional accommodation.",
      },
    ],
    evidenceVisuals: [
      {
        title: "Revenue Platform",
        description: "The concept depends on diversified revenue rather than ordinary room sales alone.",
        rows: [
          { label: "Core", value: "Hotel revenue", note: "Room bookings create the continuous baseline income stream." },
          { label: "Experience", value: "Gaming lounge + racing simulators", note: "A differentiator for esports tourists and racing fans." },
          { label: "Stabilizer", value: "Events, sponsorships, F&B, merchandise", note: "Used to reduce seasonality and fill off-peak periods." },
        ],
      },
      {
        title: "Space Program",
        description: "Experience anchors make the project more than a themed accommodation concept.",
        bars: [
          { label: "Racing simulator area", value: 100, displayValue: "1,000 sqm" },
          { label: "Gaming lounge", value: 90, displayValue: "900 sqm" },
          { label: "Event space", value: 60, displayValue: "600 sqm" },
        ],
      },
    ],
    caseTakeaways: [
      {
        label: "BUSINESS QUESTION",
        title: "Can a hotel become a motorsport-esports revenue platform?",
        description:
          "The case tests whether Monza's racing traffic can support a hybrid concept that combines lodging, simulators, gaming, events, F&B, and brand partnerships.",
      },
      {
        label: "REPORT EVIDENCE",
        title: "304,134 spectators and 1,900 sqm of experience anchors",
        description:
          "The report grounds demand in Grand Prix traffic, then designs a 170-room program with gaming lounge, racing simulators, event space, and diversified revenue streams.",
      },
      {
        label: "STRATEGY SIGNAL",
        title: "Operate it as an event business, not a themed hotel",
        description:
          "The investment logic depends on year-round tournaments, sponsorships, and experiential consumption that reduce dependence on ordinary room revenue.",
      },
    ],
    decisionPoints: [
      {
        title: "Make the hotel an event platform, not only lodging",
        description:
          "The investment logic depends on using tournaments, brand partnerships, and racing-themed experiences to fill off-peak periods and diversify revenue.",
      },
      {
        title: "Use unified management to protect the customer experience",
        description:
          "A fragmented operator structure could weaken the concept. A joint venture creates a single brand narrative and better coordination across hotel, esports, F&B, and retail.",
      },
    ],
    result:
      "The feasibility study proposed a hybrid racing-esports hotel positioned around Monza's motorsport identity. It clarified customer segments, space programming, revenue streams, lease assumptions, and a joint-venture management model.",
    keyOutputs: [
      "Territorial and event-demand analysis",
      "Target user segmentation for esports, tourists, corporate groups, and local residents",
      "Hybrid hotel concept and space program",
      "Revenue stream design",
      "Lease and discounted cash-flow assumptions",
      "Unified-management joint venture recommendation",
    ],
    reflection:
      "This project is a strong business-case example because it links market opportunity, concept design, revenue planning, and real estate feasibility in one decision framework.",
  },
  "hedonic-price-regression": {
    subtitle: "An econometric model estimating how the Jin-Yi-Dong rail line affects Yiwu housing prices.",
    role: "Sample collection / Variable design / Double-log regression / Result interpretation",
    phase: "Data collection, model refinement, and urban-investment interpretation",
    headlineOutcome: "Built a hedonic pricing model using 140 housing samples and identified metro distance as a weak but meaningful price factor.",
    projectLens: "Econometrics / Urban Transport / Housing Price / Policy Evaluation",
    overview:
      "The project evaluates whether a new intercity rail line creates measurable housing-price premiums in Yiwu's urban area. It uses hedonic price modeling to isolate transport effects while controlling for property and neighborhood attributes.",
    problem:
      "Rail transit investment is often assumed to raise property values, but the effect may be uneven or limited in mature urban districts. The key task was to separate metro accessibility from other value drivers such as school quality, CBD distance, balcony, elevator, property type, and decoration.",
    whatIDid:
      "I helped collect 140 housing samples across seven districts, defined 12 variables, cleaned outliers, tested multicollinearity with VIF, compared the initial model with a log-transformed regression, and interpreted significant and non-significant predictors.",
    analysisFlow: [
      {
        title: "Collect comparable samples",
        description:
          "Twenty observations were selected from each of Yiwu's seven urban districts, covering price, size, floor, elevator, decoration, school, CBD, rail, and metro distance variables.",
      },
      {
        title: "Build the initial model",
        description:
          "A first regression exposed residual variability and showed that the model needed refinement before interpretation.",
      },
      {
        title: "Use log transformation",
        description:
          "A double-log form improved model fit and made coefficients easier to interpret as elasticities.",
      },
      {
        title: "Translate coefficients",
        description:
          "The model separated positive, negative, and non-significant predictors to support a more nuanced view of rail-transit value capture.",
      },
    ],
    evidenceCards: [
      {
        label: "SAMPLE SIZE",
        value: "140 observations",
        description:
          "The dataset covered seven urban districts with 20 randomly selected residential samples per district.",
      },
      {
        label: "VARIABLES",
        value: "12 predictors",
        description:
          "The model included property attributes, school quality, CBD distance, railway distance, and nearest metro-station distance.",
      },
      {
        label: "METRO EFFECT",
        value: "-7.03%",
        description:
          "A 1% increase in distance to the nearest metro station was associated with a 7.03% decrease in price per square meter, with marginal significance.",
      },
      {
        label: "MODEL CHECK",
        value: "VIF tested",
        description:
          "Variance Inflation Factor was used to check multicollinearity before interpreting regression results.",
      },
    ],
    evidenceVisuals: [
      {
        title: "Regression Interpretation",
        description: "The output separates direct property features from urban-accessibility effects.",
        rows: [
          { label: "Positive", value: "Balcony / elevator / school quality", note: "Attributes associated with higher price per square meter." },
          { label: "Negative", value: "CBD and metro distance", note: "Greater distance generally weakens property value." },
          { label: "Caution", value: "Metro effect is marginal", note: "The rail signal exists, but should not be overclaimed." },
        ],
      },
    ],
    caseTakeaways: [
      {
        label: "BUSINESS QUESTION",
        title: "How much does rail access really affect property value?",
        description:
          "The case tests a common investment assumption with regression evidence, separating transport accessibility from property quality, CBD distance, and school factors.",
      },
      {
        label: "REPORT EVIDENCE",
        title: "140 samples, 12 predictors, marginal metro signal",
        description:
          "The double-log model suggests a negative relationship between metro distance and price, but the significance level requires careful interpretation rather than overclaiming.",
      },
      {
        label: "STRATEGY SIGNAL",
        title: "Use rail access as one signal inside a wider valuation frame",
        description:
          "For investment or planning, metro proximity should be combined with school quality, CBD access, property features, and local market maturity.",
      },
    ],
    decisionPoints: [
      {
        title: "The rail line has positive but limited urban price impact",
        description:
          "The result suggests some value premium near metro stations, but the effect is not strong enough to treat rail access as the only investment signal.",
      },
      {
        title: "Infrastructure value should be read with local context",
        description:
          "The line may create broader regional integration benefits even if immediate urban property-price uplift is limited.",
      },
    ],
    result:
      "The model found that balcony, elevator, school quality, and some location variables were meaningful price predictors. Metro distance showed a negative relationship with price per square meter, suggesting a positive but relatively limited rail-transit value effect in Yiwu's urban market.",
    keyOutputs: [
      "140-sample housing dataset",
      "12-variable hedonic pricing framework",
      "Initial and log-transformed regression comparison",
      "VIF and residual checks",
      "Metro-distance coefficient interpretation",
      "Urban transport and property-value implication",
    ],
    reflection:
      "This case is useful because it shows how to avoid overclaiming: the model identifies a signal, explains its limits, and converts statistical output into a realistic urban-investment judgment.",
  },
  "cultural-asset-digital-commercialization": {
    subtitle: "A cultural-asset valorisation strategy for Zhaohua Temple, combining heritage protection, tourism, business planning, and digital preservation.",
    role: "Context research / SWOT-PESTEL analysis / Business planning / Digital conservation strategy",
    phase: "Heritage assessment, strategy design, revenue planning, and digital-technology proposal",
    headlineOutcome: "Proposed a sustainable operation path linking cultural tourism, digital fresco preservation, visitor experience, and five-year value recovery.",
    projectLens: "Cultural Asset / Business Strategy / Digital Preservation / DCF",
    overview:
      "Zhaohua Temple is a Ming-dynasty cultural heritage site with valuable frescoes, but its current protection, visitor experience, and operating model do not fully match its cultural value. The project explores how to create public and economic value without breaking conservation boundaries.",
    problem:
      "The site needs a strategy that can balance four tensions: preserving fragile frescoes, attracting visitors, improving local cultural tourism, and building a sustainable revenue model. A pure conservation plan would be too passive, while over-commercialization would risk damaging the asset.",
    whatIDid:
      "I contributed to context analysis, cultural-value assessment, SWOT and PESTEL analysis, visitor targeting, business-plan design, revenue stream logic, discounted cash-flow estimation, and digital preservation scenarios such as high-resolution fresco archiving, panoramic roaming, and integrated O&M management.",
    analysisFlow: [
      {
        title: "Assess the asset",
        description:
          "The report mapped the temple's history, architectural value, fresco characteristics, location, accessibility, population, tourism, and heritage context.",
      },
      {
        title: "Define visitor scenarios",
        description:
          "The proposal separated believers and meditation visitors, general tourists, cultural-experience users, and digital/online audiences.",
      },
      {
        title: "Design revenue streams",
        description:
          "Income sources included special tickets, transport, exhibitions, restaurants, accommodation, souvenirs, parking, donations, and public funding.",
      },
      {
        title: "Add digital infrastructure",
        description:
          "Digital fresco preservation, panoramic roaming, digital archives, virtual restoration, and integrated O&M systems were proposed to support long-term operation.",
      },
    ],
    evidenceCards: [
      {
        label: "HERITAGE ASSET",
        value: "93.13 sqm frescoes",
        description:
          "The Daxiong Hall contains Ming-dynasty frescoes with more than 500 figures, giving the site distinctive cultural and visual value.",
      },
      {
        label: "TOURISM CONTEXT",
        value: "25.174B RMB",
        description:
          "Zhangjiakou's 2022 tourism revenue showed a large regional tourism base that could support cultural-heritage activation.",
      },
      {
        label: "DCF ASSUMPTION",
        value: "6.6% discount rate",
        description:
          "The base case used discounted cash-flow logic to estimate the museum's value after five years of operation.",
      },
      {
        label: "FIVE-YEAR VALUE",
        value: "EUR 1.05M",
        description:
          "The report estimated a base-case market value of EUR 1,047,387.65 after five years of operation.",
      },
    ],
    evidenceVisuals: [
      {
        title: "Valorisation Roadmap",
        description: "The strategy connects conservation, visitor experience, revenue, and digital operation.",
        rows: [
          { label: "Protect", value: "Digital fresco archive", note: "High-resolution preservation reduces pressure on fragile murals." },
          { label: "Activate", value: "Cultural tourism and visitor experience", note: "Tickets, exhibitions, restaurants, accommodation, and souvenirs create operating income." },
          { label: "Operate", value: "Digital O&M management", note: "Integrated digital records support long-term maintenance and public access." },
        ],
      },
    ],
    caseTakeaways: [
      {
        label: "BUSINESS QUESTION",
        title: "How can heritage protection become a sustainable operating model?",
        description:
          "The case treats Zhaohua Temple as both a fragile cultural asset and an underdeveloped visitor product, balancing conservation, access, and revenue.",
      },
      {
        label: "REPORT EVIDENCE",
        title: "93.13 sqm frescoes and EUR 1.05M five-year value case",
        description:
          "The report links cultural-asset inventory, regional tourism context, DCF assumptions, and digital preservation scenarios into one valuation narrative.",
      },
      {
        label: "STRATEGY SIGNAL",
        title: "Let digital preservation fund and extend public access",
        description:
          "High-resolution archives, virtual restoration, panoramic roaming, and O&M systems can reduce physical pressure while creating visitor products and operating data.",
      },
    ],
    decisionPoints: [
      {
        title: "Commercialization should serve conservation",
        description:
          "Visitor products, cultural streets, events, and merchandise should be designed to fund protection and interpretation rather than replace the heritage narrative.",
      },
      {
        title: "Digital tools create both protection and product value",
        description:
          "High-resolution archiving, virtual restoration, panoramic roaming, and digital O&M systems can reduce physical pressure on frescoes while expanding public access.",
      },
    ],
    result:
      "The project proposed a multi-layer valorisation strategy: protect and digitize frescoes, improve visitor interpretation, connect the temple with regional tourism routes, build diversified revenue streams, and use digital management tools to support long-term operation.",
    keyOutputs: [
      "Cultural and historical asset assessment",
      "SWOT and PESTEL strategy analysis",
      "Visitor targeting and experience design",
      "Revenue stream and cost structure",
      "Discounted cash-flow feasibility estimate",
      "Digital preservation and O&M management proposal",
    ],
    reflection:
      "This project is stronger when presented as a strategy case: it shows that I can connect cultural value, stakeholder constraints, business-model design, and digital operations into one feasible roadmap.",
  },
  "content-growth": {
    subtitle: "A growth practice connecting content planning, platform feedback, and collaboration leads.",
    role: "Content operations / Growth analysis",
    phase: "Ongoing practice",
    headlineOutcome: "Generated high-performing content and attracted brand collaboration opportunities.",
    projectLens: "Content Growth / Operations / Data Review",
    overview: "The project records how content can become a repeatable growth system rather than isolated posts.",
    problem: "The main challenge is turning audience feedback and platform data into consistent iteration.",
    whatIDid: "I handled positioning, topic selection, scripting, production, publishing, and data review.",
    result: "The practice produced strong content performance and multiple collaboration opportunities.",
    reflection: "Content growth works best when creative judgment and operational review reinforce each other.",
  },
  "pre-master": {
    subtitle: "A 0-to-1 education service built from content acquisition to delivery operations.",
    role: "Founder / Service design / Operations",
    phase: "Early business validation",
    headlineOutcome: "Validated paid consulting demand and built a repeatable education-service workflow.",
    projectLens: "0-to-1 Business / Education / Community",
    overview: "The project began as a small education consulting service and evolved into a more structured operation.",
    problem: "The core challenge was building trust, acquiring users, and delivering a consistent service experience.",
    whatIDid: "I designed the service, operated content channels, managed communities, and coordinated delivery.",
    result: "The project validated paid demand and supported a larger user community.",
    reflection: "This experience gave me a practical understanding of product, service, growth, and operations together.",
  },
  "market-intelligence": {
    subtitle: "A collection of market and competitor research work supporting product and business judgment.",
    role: "Market research / Competitive analysis",
    phase: "Research practice",
    headlineOutcome: "Built structured views of markets, competitors, users, and strategic signals.",
    projectLens: "Market Intelligence / Competitor Research / Strategy",
    overview: "The project collects research work around markets, competitors, and business context.",
    problem: "Good decisions require structured signals instead of scattered observations.",
    whatIDid: "I gathered market information, compared competitors, summarized user signals, and formed research conclusions.",
    result: "The work supported clearer product and business judgment.",
    reflection: "This project strengthened my ability to organize messy market information into useful insight.",
  },
};

export function getProjectBySlugLocalized(
  slug: ProjectSlug | string,
  locale: "zh" | "en" = "zh"
): ProjectDetail | undefined {
  const project = getProjectBySlug(slug);
  if (!project || locale === "zh") return project;
  const summary = projectSummaryEnglish[project.slug];
  const detail = englishDetailText[project.slug];
  return {
    ...project,
    ...summary,
    ...detail,
    caseSections: undefined,
    noteLinkLabel: project.noteUrl ? "Read the full CourseSnap iteration note" : undefined,
    relatedLinks: project.relatedLinks?.map((link) => ({
      href: link.href.startsWith("/lab") ? `/en${link.href}` : link.href,
      label:
        link.label === "GitHub 仓库"
          ? "GitHub Repository"
          : link.label === "MVP 下载"
            ? "MVP Download"
            : link.label === "查看二十四节气画廊"
              ? "View Solar Terms Gallery"
              : link.label === "查看实验页面"
                ? "View Lab"
                : link.label,
    })),
  };
}

const getProjectSummary = (slug: ProjectSlug) => {
  const summary = projectSummaries.find((project) => project.slug === slug);
  if (!summary) {
    throw new Error(`Missing project summary: ${slug}`);
  }
  return summary;
};

const projectDetails: Record<ProjectSlug, ProjectDetail> = {
  coursesnap: {
    ...getProjectSummary("coursesnap"),
    subtitle: "课程内容采集与 AI 学习资料整理工具",
    role: "产品定义 / MVP 设计 / 功能取舍 / AI 工作流设计",
    phase: "可运行 MVP / 个人产品实践",
    headlineOutcome:
      "约 10 小时完成可运行 MVP，打通自动截图、PDF 合成与 AI 总结的端到端学习资料整理流程。",
    projectLens: "AI 产品 / 学习效率 / 本地工具 / MVP 迭代",
    tags: ["自动截图", "PDF 整理", "逐字稿", "AI 总结", "产品取舍"],
    overview:
      "CourseSnap 起点来自一个非常具体的学习场景：很多网课、讲座或会议回放无法直接下载完整课件，用户只能手动截图保存 PPT 页面。这个过程低效、容易漏页，后续整理也很困难。最初我想解决的不是做一个复杂 AI 产品，而是先让课程资料更容易被保存和复习。",
    problem:
      "用户在课程结束后通常会拥有很多分散材料：截图、课件、逐字稿、笔记、聊天记录等。问题不只是“能不能识别文字”，而是这些材料很难被组织成一个可阅读、可复习、可继续交给 AI 处理的结构化输入。",
    whatIDid:
      "我将产品流程收敛为三步：自动截图检测课程页面变化，只保存新的 PPT 页面；PDF 整理将截图按顺序合成为 PDF，保留课程视觉结构；AI 总结检测 PDF 与 TXT/DOCX 逐字稿，生成结构化学习笔记。最终流程是：自动截图 → 一键合成 PDF → 放入逐字稿 → AI 总结。",
    caseSections: [
      {
        id: "section-overview",
        title: "背景：从真实学习场景出发",
        label: "背景",
        body:
          "CourseSnap 起点来自一个非常具体的学习场景：很多网课、讲座或会议回放无法直接下载完整课件，用户只能手动截图保存 PPT 页面。这个过程低效、容易漏页，后续整理也很困难。最初我想解决的不是做一个复杂 AI 产品，而是先让课程资料更容易被保存和复习。",
      },
      {
        id: "section-problem",
        title: "用户痛点：资料不是没有，而是难以整理",
        label: "用户痛点",
        body:
          "用户在课程结束后通常会拥有很多分散材料：截图、课件、逐字稿、笔记、聊天记录等。问题不只是“能不能识别文字”，而是这些材料很难被组织成一个可阅读、可复习、可继续交给 AI 处理的结构化输入。",
        bullets: [
          "手动截图效率低，容易漏页。",
          "OCR 对 PPT 截图识别不稳定，容易乱码、漏字、顺序混乱。",
          "图片太分散，不适合阅读和复习。",
          "逐字稿与课程画面分离，AI 总结缺少完整上下文。",
        ],
      },
      {
        id: "section-mvp",
        title: "MVP 方案：自动截图 → PDF → AI 总结",
        label: "MVP 方案",
        body:
          "我将产品流程收敛为三步：自动截图检测课程页面变化，只保存新的 PPT 页面；PDF 整理将截图按顺序合成为 PDF，保留课程视觉结构；AI 总结检测 PDF 与 TXT/DOCX 逐字稿，生成结构化学习笔记。最终流程是：自动截图 → 一键合成 PDF → 放入逐字稿 → AI 总结。",
      },
      {
        id: "section-decisions",
        title: "关键产品决策",
        label: "产品决策",
        body:
          "这个项目最重要的部分不是功能堆叠，而是在有限时间里判断哪些链路应该自动化，哪些环节应该保留人工控制，哪些能力可以独立提供价值。",
        bullets: [
          "决策一：从 OCR 转向 PDF + 逐字稿。早期方案是“截图 → OCR → 文本 → AI 总结”，但 OCR 对课程截图不稳定，容易丢失 PPT 的结构信息。我最终放弃把 OCR 作为核心链路，改为用 PDF 保留原始视觉结构，用逐字稿补充语义内容。这个取舍让输入质量更稳定，也更接近真实学习场景。",
          "决策二：把 PDF 生成功能做成独立模块。PDF 不只是 AI 总结前的一步，也可以作为独立工具使用。用户可以把任意图片合成为 PDF，这让产品即使不使用 AI，也能提供明确价值。",
          "决策三：逐字稿采用半自动设计。逐字稿不强行自动抓取，而是让用户把 TXT 或 DOCX 文件放入当前项目文件夹。产品只负责自动检测是否存在 PDF 和逐字稿，并在缺失时弹窗提醒。这样可以降低开发复杂度，同时保证输入质量。",
          "决策四：AI 总结是增强功能，不是使用门槛。AI 功能需要用户自己输入 API Key，避免分发个人密钥带来的安全和维护风险。同时，用户也可以把 PDF 和逐字稿交给外部 AI 工具处理。这个设计让产品核心价值不完全依赖模型调用。",
        ],
      },
      {
        id: "section-build",
        title: "技术与实现",
        label: "技术实现",
        body:
          "这个 MVP 是一个 Python 桌面工具。我使用 PIL / ImageGrab 进行屏幕截图，通过页面变化检测避免重复保存相同页面，并将截图按顺序保存。随后，工具可以把图片合成为 PDF，并自动检测项目文件夹中的 PDF 与 TXT/DOCX 逐字稿。AI 总结部分使用 DashScope 兼容 OpenAI 接口完成调用，最终通过 PyInstaller 打包为 Windows 可运行程序。",
      },
      {
        id: "section-result",
        title: "结果",
        label: "结果",
        body:
          "我约 10 小时完成了可运行 MVP。产品从一个自动截图工具，迭代为“课程资料采集 → PDF 整理 → AI 总结”的完整学习资料整理流程，完成了从用户痛点、产品方案、技术实现到交互打包的端到端实践。这个项目证明我能够快速识别具体问题、做功能取舍，并把 AI 能力嵌入真实用户流程，而不是为了 AI 而 AI。",
      },
      {
        id: "section-reflection",
        title: "复盘：AI 产品不是堆功能，而是优化输入与流程",
        label: "复盘",
        body:
          "这个项目让我意识到，AI 产品的关键不只是模型能力，而是输入质量、流程设计和用户信任。很多时候，真正影响结果的不是能不能调用 AI，而是用户是否能轻松把高质量材料放进流程，并得到稳定、可理解、可继续使用的输出。",
      },
    ],
    result:
      "我约 10 小时完成了可运行 MVP。产品从一个自动截图工具，迭代为“课程资料采集 → PDF 整理 → AI 总结”的完整学习资料整理流程，完成了从用户痛点、产品方案、技术实现到交互打包的端到端实践。",
    reflection:
      "这个项目让我意识到，AI 产品的关键不只是模型能力，而是输入质量、流程设计和用户信任。很多时候，真正影响结果的不是能不能调用 AI，而是用户是否能轻松把高质量材料放进流程，并得到稳定、可理解、可继续使用的输出。",
    noteUrl: "/notes",
    noteLinkLabel: "查看完整迭代记录：《CourseSnap：从自动截取 PPT，到 PDF 整理，再到 AI 总结》",
    relatedLinks: [
      { label: "GitHub 仓库", href: "https://github.com/farinafo/CourseSnap" },
      { label: "MVP 下载", href: "https://github.com/farinafo/CourseSnap/releases" },
    ],
  },
  "ai-cultural-visual-system": {
    ...getProjectSummary("ai-cultural-visual-system"),
    subtitle: "从提示词设计到网页画廊的生成式内容工作流",
    role: "主题策划 / 提示词设计 / 视觉筛选 / 网页展示规划",
    phase: "持续迭代中",
    headlineOutcome:
      "形成围绕二十四节气与十二花神的 AI 视觉实验体系，并接入个人网站实验页面，以画廊方式展示生成式图像、主题设定与版本迭代。",
    projectLens: "生成式 AI / 内容工作流 / 视觉系统 / 文化表达",
    tags: ["二十四节气", "十二花神", "提示词模板", "风格控制", "版本迭代", "网页画廊"],
    overview:
      "这个项目并不是单纯生成几张好看的图片，而是一次关于生成式 AI 内容生产流程的实验。我选择「二十四节气」与「十二花神」作为主题，是因为它们本身具有清晰的时间结构、文化意象和系列化表达空间，适合被设计成一套可持续迭代的视觉内容系统。",
    problem:
      "AI 图像生成的难点不是生成，而是一致性。单张图容易生成，但系列图很难保持统一风格；传统文化主题也容易变成表面元素堆砌。如果缺少提示词模板和筛选标准，结果会随机、混乱、难以复用。",
    whatIDid:
      "我把项目拆成主题结构、视觉规则、提示词模板、版本筛选和网页展示五个环节：先规划二十四节气与十二花神两个系列，再用统一画风、构图、材质感、色彩约束和禁用项控制整体质量，最后把结果接入网站实验页面。",
    caseSections: [
      {
        id: "section-overview",
        title: "背景：从单张图片到内容系统",
        label: "背景",
        body:
          "这个项目并不是单纯生成几张好看的图片，而是一次关于生成式 AI 内容生产流程的实验。我选择「二十四节气」与「十二花神」作为主题，是因为它们本身具有清晰的时间结构、文化意象和系列化表达空间，适合被设计成一套可持续迭代的视觉内容系统。",
      },
      {
        id: "section-problem",
        title: "问题：AI 图像生成的难点不是生成，而是一致性",
        label: "问题",
        body:
          "单张图容易生成，但系列图很难保持统一风格。传统文化主题如果只停留在符号层面，也容易变成表面元素堆砌。不同节气与花神需要有差异化，但又不能失去整体视觉系统；如果缺少提示词模板和筛选标准，结果会随机、混乱、难以复用。作品如果只停留在本地文件夹里，也无法形成可展示、可传播的内容资产。",
        bullets: [
          "单张图容易生成，但系列图很难保持统一风格。",
          "传统文化主题容易变成表面元素堆砌。",
          "不同节气与花神需要有差异化，但又不能失去整体视觉系统。",
          "缺少提示词模板和筛选标准时，结果会随机、混乱、难以复用。",
          "作品只停留在本地文件夹里，无法形成可展示、可传播的内容资产。",
        ],
      },
      {
        id: "section-solution",
        title: "方案：主题结构 + 提示词模板 + 网页画廊",
        label: "方案",
        body:
          "我的解决方案是把生成式内容拆成可以复用的工作流：用主题结构确定系列边界，用视觉规则控制统一性，用提示词模板控制人物、场景、季节元素、主色调和画面风格，再通过版本筛选和网页画廊把结果沉淀成可浏览、可解释、可持续更新的作品系统。",
        bullets: [
          "主题结构：将内容拆成「二十四节气」和「十二花神」两个系列。",
          "视觉规则：为每个系列设定统一画风、构图、材质感、色彩约束和禁用项。",
          "提示词模板：用可复用结构控制人物、场景、季节元素、主色调和画面风格。",
          "版本筛选：对生成结果进行比较、筛选和迭代，记录 V1.0 / V2 / V3 等版本。",
          "网页展示：将最终图像放入网站「实验」页面，以画廊形式展示，并为后续补充提示词、说明和版本记录预留结构。",
        ],
      },
      {
        id: "section-decisions",
        title: "关键产品决策",
        label: "产品决策",
        body:
          "这个项目的重点不是把图片全部堆出来，而是把生成过程产品化：让主题、提示词、筛选标准和展示方式都成为可持续迭代的系统。",
        bullets: [
          "决策一：把它做成「系列内容」，而不是单张作品。单张 AI 图像只能展示审美，但系列内容可以展示结构化规划能力。我将二十四节气和十二花神拆成两个完整系列，让每张图都服务于一个更大的内容系统。",
          "决策二：先统一风格，再做局部差异。为了避免系列图风格发散，我先固定整体美术方向，例如东方绘本感、新中式装饰插画、宣纸质感、矿物色、克制的面部细节等；再根据不同节气或花神调整人物动作、植物、季节氛围和主色调。",
          "决策三：将提示词当作可迭代资产。提示词不是一次性描述，而是可以复用、修改和沉淀的生产工具。我通过不断调整正向提示和负向约束，逐步减少过度华丽、表情不统一、场景过于开放、人物与主题关系不清等问题。",
          "决策四：用网页画廊承接生成结果。生成式内容如果只保存在文件夹里，很难体现完整价值。我将图像接入个人网站的「实验」页面，使其成为可浏览、可解释、可持续更新的作品系统，而不是零散图片。",
        ],
      },
      {
        id: "section-workflow",
        title: "工作流",
        label: "工作流",
        body:
          "整个流程从主题选择开始，逐步进入文化意象拆解、提示词模板设计、图像生成、版本筛选、局部提示词修正、网页画廊展示，并为后续补充说明与提示词记录留下结构。",
        bullets: [
          "主题选择",
          "文化意象拆解",
          "提示词模板设计",
          "图像生成",
          "版本筛选",
          "局部提示词修正",
          "网页画廊展示",
          "后续补充说明与提示词记录",
        ],
      },
      {
        id: "section-result",
        title: "结果",
        label: "结果",
        body:
          "目前项目已经形成十二花神系列的视觉展示基础，并为二十四节气系列建立网页画廊结构。它沉淀了一套可复用的 AI 图像提示词方法，也将生成式图像从「单次出图」转化为「可展示、可迭代、可归档」的内容系统。",
        bullets: [
          "已形成十二花神系列的视觉展示基础。",
          "已为二十四节气系列建立网页画廊结构。",
          "形成了可复用的 AI 图像提示词方法。",
          "将生成式图像从「单次出图」转化为「可展示、可迭代、可归档」的内容系统。",
          "展示了我对生成式 AI 内容生产流程、风格控制和产品化展示的理解。",
        ],
      },
      {
        id: "section-reflection",
        title: "复盘：生成式 AI 的价值在于流程设计",
        label: "复盘",
        body:
          "这个项目让我意识到，生成式 AI 的核心不只是会不会使用工具，而是能否把不稳定的生成能力组织成稳定的内容流程。对于 AI 产品而言，提示词、输入结构、筛选标准、版本记录和展示方式，都会直接影响最终体验。",
      },
    ],
    result:
      "项目已经形成十二花神系列的视觉展示基础，并为二十四节气系列建立网页画廊结构，将生成式图像从「单次出图」转化为「可展示、可迭代、可归档」的内容系统。",
    reflection:
      "生成式 AI 的核心不只是会不会使用工具，而是能否把不稳定的生成能力组织成稳定的内容流程。",
    relatedLinks: [
      { label: "查看二十四节气画廊", href: "/lab/solar-terms" },
      { label: "查看实验页面", href: "/lab" },
    ],
  },
  "shanghai-house-price-forecasting": {
    ...getProjectSummary("shanghai-house-price-forecasting"),
    reportUrl: "/files/shanghai-housing-price-ml.pdf",
    subtitle: "基于 XGBoost 与 SHAP 的上海月度房价趋势预测。",
    role: "机器学习建模与解释分析",
    phase: "数据清洗、建模、解释与评估",
    headlineOutcome:
      "最终模型 RMSE 320.06，MAE 176.82，明显优于线性回归，并识别上月价格增长、M2、股市指标、消费者信心等关键变量。",
    overview:
      "上海房地产市场波动明显，影响因素横跨宏观经济、金融环境、政策变化和市场情绪。传统线性模型很难捕捉这些变量之间的复杂关系。",
    problem:
      "这个项目关注两个问题：如何用机器学习预测短期房价趋势，以及如何解释影响价格变化的关键变量，而不是只得到一个黑箱预测结果。",
    whatIDid:
      "我完成数据清洗、特征工程、XGBoost 建模、线性回归对比和 SHAP 解释分析，将 2000-2024 年上海住房价格、宏观经济、金融、政策与情绪变量整合进同一套预测框架。",
    analysisFlow: [
      {
        title: "数据整理",
        description:
          "整合 2000–2024 年上海房价、宏观经济、金融、政策与情绪变量，并构建滞后特征。",
      },
      {
        title: "模型训练",
        description: "使用 XGBoost 建立预测模型，并以线性回归作为基准模型进行对比。",
      },
      {
        title: "模型评估",
        description: "通过 RMSE、MAE 验证预测效果，判断模型是否具备稳定解释价值。",
      },
      {
        title: "结果解释",
        description: "使用 SHAP 分析关键变量贡献，将模型输出转化为可理解的市场判断。",
      },
    ],
    evidenceCards: [
      {
        label: "最终模型",
        value: "RMSE 320.06 / MAE 176.82",
        description: "最终 XGBoost 模型能够较稳定地追踪 2021-2024 年上海月度房价走势。",
      },
      {
        label: "误差改善",
        value: "98%+",
        description: "相比初始基准模型 RMSE 18,222.69，经过目标重构和特征工程后预测误差显著下降。",
      },
      {
        label: "核心信号",
        value: "价格惯性",
        description: "SHAP 显示上月价格增长是最重要变量，说明短期房价变化具有明显动量特征。",
      },
      {
        label: "宏观驱动",
        value: "M2 流动性",
        description: "货币供应量是重要宏观金融变量，可用于解释市场预期和资金环境变化。",
      },
    ],
    evidenceVisuals: [
      {
        title: "模型效果快照",
        description: "目标重构和特征工程后，最终模型相比基准模型显著降低误差。",
        bars: [
          { label: "基准 RMSE", value: 100, displayValue: "18,222.69" },
          { label: "最终 XGBoost RMSE", value: 4, displayValue: "320.06" },
          { label: "最终 XGBoost MAE", value: 4, displayValue: "176.82" },
        ],
      },
      {
        title: "市场驱动地图",
        description: "这个模型更适合作为市场解释框架，而不是只输出一个预测数字。",
        rows: [
          { label: "动量", value: "上月价格增长", note: "SHAP 分析中最强的短期预测变量。" },
          { label: "流动性", value: "M2 货币供应", note: "连接资金环境与市场预期的宏观金融信号。" },
          { label: "情绪", value: "消费信心 / 股市指标", note: "反映投资者情绪和资金再配置压力。" },
        ],
      },
    ],
    caseTakeaways: [
      {
        label: "业务问题",
        title: "能否在房价趋势明显前读出市场变化？",
        description: "这个项目把宽泛的房地产研究转化为月度预测问题，让模型不只是解释过去，而是支持更早的市场判断。",
      },
      {
        label: "报告证据",
        title: "误差改善 98%+，并能解释关键驱动",
        description: "XGBoost 将 RMSE 从 18,222.69 降到 320.06，SHAP 进一步指出价格惯性、M2、股市指标和消费者信心等核心变量。",
      },
      {
        label: "策略信号",
        title: "更适合作为市场预警框架",
        description: "模型结果可以转化成动量、流动性、情绪和政策方向的观察面板，帮助分析师讨论市场时点和风险。",
      },
    ],
    decisionPoints: [
      {
        title: "把模型作为市场预警工具，而不是自动投资指令",
        description: "模型的价值在于持续观察价格惯性、流动性、情绪和政策信号是否同向变化，帮助形成更早的市场判断。",
      },
      {
        title: "把 SHAP 结果翻译成业务语言",
        description: "面向业务或投资讨论时，重点不是展示算法复杂度，而是解释哪些因素正在推动市场变化。",
      },
    ],
    result:
      "最终 XGBoost 模型 RMSE 为 320.06，MAE 为 176.82，明显优于线性回归。SHAP 结果显示，上月价格增长、M2、股市指标、消费者信心等变量对预测具有重要影响。",
    keyOutputs: [
      "上海房价月度趋势预测模型",
      "XGBoost 与线性回归模型对比",
      "RMSE / MAE 模型评估结果",
      "SHAP 变量重要性解释",
      "房地产市场影响因素分析",
      "可视化分析报告",
    ],
    reflection:
      "这个项目连接了房地产、宏观经济、机器学习和可解释 AI，是我从建筑环境管理转向数据驱动决策的核心项目。",
  },
  "casa-rossi-valuation": {
    ...getProjectSummary("casa-rossi-valuation"),
    reportUrl: "/files/casa-rossi-dcf.pdf",
    subtitle: "基于 DCF 与 WACC 的房地产投资价值评估。",
    role: "房地产投资分析与估值建模",
    phase: "估值、现金流预测与风险判断",
    headlineOutcome: "形成 Casa Rossi 的物业估值、现金流预测与投资判断。",
    overview:
      "历史建筑类资产的投资判断需要同时考虑市场价值、租金收益、改造成本、维护成本和潜在风险，不能只依赖单一价格比较。",
    problem:
      "项目的核心问题是：目标物业是否具备投资可行性，主要收益和风险来自哪里，以及不同假设会如何影响最终判断。",
    whatIDid:
      "我使用市场比较法、DCF、WACC、租金收益测算和情景分析，对 Casa Rossi 的资产价值、未来现金流和投资回报进行评估。",
    analysisFlow: [
      {
        title: "资产与市场判断",
        description:
          "梳理 Casa Rossi 的物业属性、历史建筑特征、区位条件和市场参考价格。",
      },
      {
        title: "收益模型搭建",
        description: "基于租金假设、运营成本和交易成本，建立未来现金流测算框架。",
      },
      {
        title: "估值方法交叉验证",
        description: "结合市场比较法、DCF 和 WACC，对物业价值进行多角度判断。",
      },
      {
        title: "投资风险识别",
        description: "评估改造成本、出租率、维护成本、折现率变化对投资回报的影响。",
      },
    ],
    evidenceCards: [
      {
        label: "方案一",
        value: "保持现状",
        description: "干预成本更低、监管风险更小，最终从 ROI 角度更具吸引力。",
      },
      {
        label: "方案二",
        value: "Showroom / Atelier",
        description: "改造方案有更高收入潜力，但也带来更高改造成本和执行风险。",
      },
      {
        label: "估值方法",
        value: "租金比较 + DCF",
        description: "用市场租金比较估算收入，再通过折现现金流判断投资价值。",
      },
    ],
    evidenceVisuals: [
      {
        title: "投资方案对比",
        description: "最终判断来自收入上行空间、改造成本和保护限制之间的权衡。",
        rows: [
          { label: "方案一", value: "保持现状", note: "成本较低、历史建筑干预风险较小，ROI 更有吸引力。" },
          { label: "方案二", value: "Showroom / Atelier", note: "租金潜力更高，但改造成本和执行复杂度也更高。" },
          { label: "判断", value: "优先方案一", note: "从成本与回报综合比较看，保持原状态更稳健。" },
        ],
      },
    ],
    caseTakeaways: [
      {
        label: "业务问题",
        title: "哪种资产策略能带来更好的风险调整回报？",
        description: "这个项目比较保持现状和改造为 showroom / atelier 两种方案，把判断重点放在回报质量，而不是表面租金高低。",
      },
      {
        label: "报告证据",
        title: "用租金比较和 DCF 拆分收入上行与成本",
        description: "报告按空间功能估算租金收入，再结合现金流假设、改造成本和历史建筑约束，测试两种投资路径。",
      },
      {
        label: "策略信号",
        title: "优先低干预、低执行风险方案",
        description: "保持现状虽然收入想象空间较小，但 ROI 和执行确定性更好，因此比高改造成本方案更稳健。",
      },
    ],
    decisionPoints: [
      {
        title: "更高收入不等于更好投资",
        description: "最终建议倾向保持原状态，因为改造带来的增量收入不足以完全覆盖更高成本和风险。",
      },
      {
        title: "历史建筑限制应进入财务模型",
        description: "保护限制、维护责任和用途边界不是背景信息，而是会直接影响估值和投资决策的变量。",
      },
    ],
    result:
      "项目形成了物业估值、现金流预测与投资判断，为是否进入该类历史建筑资产提供了结构化依据。",
    keyOutputs: [
      "Casa Rossi 物业估值框架",
      "租金收益与现金流预测",
      "DCF 投资测算模型",
      "WACC 折现逻辑",
      "投资回报与风险判断",
      "历史建筑资产运营建议",
    ],
    reflection:
      "这个项目体现了我用财务模型支持房地产投资决策的能力，也让我更重视假设透明度和风险解释。",
  },
  "monza-esports-hotel": {
    ...getProjectSummary("monza-esports-hotel"),
    reportUrl: "/files/monza-esports-hotel-feasibility.pdf",
    subtitle: "围绕电竞酒店复合业态的市场与财务可行性研究。",
    role: "商业分析与可行性研究",
    phase: "市场研究、商业模型与财务测算",
    headlineOutcome: "形成酒店与电竞复合业态的可行性判断和商业化路径。",
    overview:
      "电竞、旅游和酒店业态正在出现交叉机会，Monza 具备赛事资源和城市流量基础，适合探索新的酒店体验和消费场景。",
    problem:
      "项目需要回答电竞酒店是否有明确市场需求、目标用户是谁、收入结构是否成立，以及是否具备可持续商业回报。",
    whatIDid:
      "我围绕市场研究、竞品分析、用户定位、商业模式设计、现金流预测和投资可行性分析，搭建从机会识别到财务判断的完整框架。",
    analysisFlow: [
      {
        title: "市场机会识别",
        description: "分析 Monza 的城市流量、赛事资源、旅游基础和电竞消费趋势。",
      },
      {
        title: "用户与场景定义",
        description: "拆解电竞玩家、游客、赛事观众和社交娱乐用户的潜在需求。",
      },
      {
        title: "商业模型设计",
        description: "构建住宿、电竞空间、活动运营和配套服务组成的复合收入结构。",
      },
      {
        title: "财务可行性判断",
        description: "结合投资成本、运营成本、收入预测和现金流，评估项目商业可行性。",
      },
    ],
    evidenceCards: [
      {
        label: "赛事流量",
        value: "304,134 人",
        description: "2023 年 Monza F1 大奖赛三天观众规模，支撑事件型住宿和消费需求判断。",
      },
      {
        label: "首年租金",
        value: "EUR 2.13M",
        description: "租赁方案估算首年租金为 2,133,600 欧元，并设置逐年增长逻辑。",
      },
      {
        label: "房间规划",
        value: "170 间",
        description: "包含单人、双人、三人、四人和套房，覆盖不同旅行和赛事人群。",
      },
      {
        label: "体验核心",
        value: "1,900 sqm",
        description: "游戏大厅和赛车模拟器区域构成区别于普通酒店的核心体验空间。",
      },
    ],
    evidenceVisuals: [
      {
        title: "收入平台",
        description: "项目不能只依赖普通客房收入，而要形成复合收入结构。",
        rows: [
          { label: "核心", value: "酒店住宿收入", note: "房间预订提供连续的基础现金流。" },
          { label: "体验", value: "游戏大厅 + 赛车模拟器", note: "面向电竞游客和赛车粉丝形成差异化体验。" },
          { label: "稳定器", value: "活动、赞助、餐饮、零售", note: "用于降低季节性，填补非赛事高峰期。" },
        ],
      },
      {
        title: "空间规划",
        description: "体验型空间让项目不只是主题酒店，而是可运营的活动平台。",
        bars: [
          { label: "赛车模拟器区域", value: 100, displayValue: "1,000 sqm" },
          { label: "游戏大厅", value: 90, displayValue: "900 sqm" },
          { label: "活动空间", value: 60, displayValue: "600 sqm" },
        ],
      },
    ],
    caseTakeaways: [
      {
        label: "业务问题",
        title: "酒店能否成为赛车电竞复合收入平台？",
        description: "这个项目验证 Monza 的赛事流量是否能支撑住宿、赛车模拟、电竞、活动、餐饮和品牌合作组成的复合业态。",
      },
      {
        label: "报告证据",
        title: "304,134 名观众 + 1,900 sqm 体验空间",
        description: "报告用 F1 大奖赛流量支撑需求判断，并设计 170 间客房、游戏大厅、赛车模拟器、活动空间和多元收入结构。",
      },
      {
        label: "策略信号",
        title: "把它运营成事件生意，而不是主题酒店",
        description: "项目价值来自全年赛事、赞助和体验消费，降低对普通房费收入和单一赛事高峰的依赖。",
      },
    ],
    decisionPoints: [
      {
        title: "把酒店做成事件平台，而不只是住宿空间",
        description: "项目需要通过赛事、品牌合作和赛车电竞体验填补淡季，并分散单一房费收入风险。",
      },
      {
        title: "统一管理能保护用户体验",
        description: "联合运营可以把酒店、电竞、餐饮和零售整合成统一品牌叙事，避免体验割裂。",
      },
    ],
    result:
      "项目形成了酒店+电竞复合业态的可行性判断和商业化路径，明确了潜在客群、收入来源和投资评估逻辑。",
    keyOutputs: [
      "Monza 电竞酒店概念定位",
      "目标用户与消费场景拆解",
      "酒店 + 电竞复合商业模型",
      "收入结构与成本逻辑",
      "现金流与投资可行性判断",
      "商业化路径建议",
    ],
    reflection:
      "这个项目更接近真实商业分析，体现从市场机会到商业模型的完整判断过程。",
  },
  "hedonic-price-regression": {
    ...getProjectSummary("hedonic-price-regression"),
    reportUrl: "/files/hedonic-price-model.pdf",
    subtitle: "用 Hedonic Price Method 解释城市基础设施对房价的影响。",
    role: "计量模型与房地产数据分析",
    phase: "变量筛选、回归建模与结果解释",
    headlineOutcome: "识别影响房价的关键因素，并将模型结果转化为城市和投资决策参考。",
    overview:
      "城市交通设施会影响住房价值，但影响程度需要通过数据量化，才能为城市规划和房地产投资判断提供依据。",
    problem:
      "项目关注地铁距离等变量是否显著影响房价，以及这些变量如何与其他住房属性一起解释价格差异。",
    whatIDid:
      "我使用 Hedonic Price Method、双对数回归、变量筛选和结果解释，建立回归模型分析房地产价格差异。",
    analysisFlow: [
      {
        title: "变量框架构建",
        description: "将房价拆解为区位、交通、物业特征等多个解释维度。",
      },
      {
        title: "数据整理与变量筛选",
        description: "处理样本数据，并筛选与房价相关的核心解释变量。",
      },
      {
        title: "回归模型建立",
        description:
          "使用 Hedonic Price Method 建立回归模型，解释不同因素对房价的影响。",
      },
      {
        title: "结果解释与决策转化",
        description: "将模型结果转化为对城市交通、房地产价值和投资判断的参考。",
      },
    ],
    evidenceCards: [
      {
        label: "样本量",
        value: "140 个样本",
        description: "义乌主城区七个区域，每个区域随机抽取 20 个住宅样本。",
      },
      {
        label: "变量数量",
        value: "12 个解释变量",
        description: "覆盖住宅属性、学校质量、CBD 距离、铁路距离和最近地铁站距离等因素。",
      },
      {
        label: "地铁影响",
        value: "-7.03%",
        description: "距离最近地铁站增加 1%，每平方米房价约下降 7.03%，但显著性较弱。",
      },
      {
        label: "模型检查",
        value: "VIF 检验",
        description: "使用方差膨胀因子检查多重共线性，避免误读变量影响。",
      },
    ],
    evidenceVisuals: [
      {
        title: "回归结果解释",
        description: "模型把住宅属性影响和城市可达性影响拆开解释。",
        rows: [
          { label: "正向因素", value: "阳台 / 电梯 / 学校质量", note: "这些属性与更高的每平方米房价相关。" },
          { label: "负向因素", value: "CBD 与地铁距离", note: "距离增加通常会削弱住宅价值。" },
          { label: "注意", value: "地铁影响显著性较弱", note: "可以说明存在信号，但不应过度放大。" },
        ],
      },
    ],
    caseTakeaways: [
      {
        label: "业务问题",
        title: "轨道交通到底能多大程度影响房价？",
        description: "这个项目用回归证据检验常见投资假设，把交通可达性与住宅品质、CBD 距离、学校质量等因素分开判断。",
      },
      {
        label: "报告证据",
        title: "140 个样本、12 个变量，地铁信号存在但不强",
        description: "双对数模型显示地铁距离与房价存在负向关系，但显著性较弱，因此需要谨慎解释，不能过度放大。",
      },
      {
        label: "策略信号",
        title: "把轨道交通作为估值框架中的一个信号",
        description: "投资或规划判断中，地铁可达性需要和学校质量、CBD 可达性、物业特征、地方市场成熟度一起看。",
      },
    ],
    decisionPoints: [
      {
        title: "轨道交通对城市房价有正向但有限的影响",
        description: "结果说明地铁可达性存在价格溢价，但不能把轨道距离当作唯一投资信号。",
      },
      {
        title: "基础设施价值需要结合地方语境理解",
        description: "即使城市核心区房价提升有限，轨道交通仍可能通过区域融合和公共服务改善创造长期价值。",
      },
    ],
    result:
      "模型帮助识别影响房价的关键因素，并将计量结果转化为城市和投资决策参考。",
    keyOutputs: [
      "Hedonic Price Method 回归模型",
      "房价影响因素识别",
      "城市交通与房价关系分析",
      "变量显著性与方向判断",
      "房地产价值解释框架",
      "城市与投资决策参考",
    ],
    reflection:
      "这个项目体现我用计量方法分析现实房地产问题的能力，也训练了我把统计结果翻译成业务判断的能力。",
  },
  "cultural-asset-digital-commercialization": {
    ...getProjectSummary("cultural-asset-digital-commercialization"),
    reportUrl: "/files/cultural-asset-commercialization.pdf",
    subtitle: "昭化寺历史文化遗产的保护、运营与数字化商业化策略。",
    role: "文化资产策略与商业化分析",
    phase: "战略分析、商业模式与现金流路径设计",
    headlineOutcome: "提出文旅业态、数字展示、运营合作和现金流回收路径。",
    overview:
      "历史文化建筑具有重要文化价值，但常缺乏可持续运营模式，保护、开放、体验和商业化之间需要被放在同一套策略中平衡。",
    problem:
      "项目关注如何在保护边界内实现文化资产的长期运营和价值转化，让文化价值与经济价值形成正向循环。",
    whatIDid:
      "我使用 SWOT、PESTEL、商业模式设计、DCF、数字化保护与展示方案，设计昭化寺历史文化遗产的保护、运营和商业化路径。",
    analysisFlow: [
      {
        title: "文化资产评估",
        description: "识别历史建筑的文化价值、保护边界、资源优势和运营限制。",
      },
      {
        title: "外部环境分析",
        description: "使用 SWOT 和 PESTEL 分析政策、市场、文化消费和商业化风险。",
      },
      {
        title: "商业场景设计",
        description:
          "设计文旅融合、研学课程、主题展陈、文创产品和数字展示等运营场景。",
      },
      {
        title: "现金流与可持续性判断",
        description: "结合投入成本、运营收益和回收周期，判断项目长期运营可行性。",
      },
    ],
    evidenceCards: [
      {
        label: "文化资产",
        value: "93.13 sqm 壁画",
        description: "大雄宝殿保存明代水陆壁画，包含 500 多个人物，具备独特历史和视觉价值。",
      },
      {
        label: "旅游基础",
        value: "251.74 亿元",
        description: "张家口 2022 年旅游总收入显示区域文旅市场具备较大的承接基础。",
      },
      {
        label: "DCF 假设",
        value: "6.6% 折现率",
        description: "报告用折现现金流方法估算项目运营后的市场价值。",
      },
      {
        label: "五年价值",
        value: "EUR 1.05M",
        description: "基准情景下，博物馆五年运营后的市场价值估算为 1,047,387.65 欧元。",
      },
    ],
    evidenceVisuals: [
      {
        title: "价值转化路径",
        description: "策略把保护、体验、收入和数字化运营放进同一条路线。",
        rows: [
          { label: "保护", value: "壁画数字档案", note: "高精度采集能降低脆弱壁画的实体展示压力。" },
          { label: "激活", value: "文旅体验与游客运营", note: "门票、展览、餐饮、住宿和文创形成经营收入。" },
          { label: "运营", value: "数字化运维系统", note: "数字档案支持长期维护、检索和公众访问。" },
        ],
      },
    ],
    caseTakeaways: [
      {
        label: "业务问题",
        title: "文化遗产保护如何变成可持续运营模型？",
        description: "这个项目把昭化寺同时看作脆弱文化资产和待激活游客产品，在保护、开放和收入之间寻找平衡。",
      },
      {
        label: "报告证据",
        title: "93.13 sqm 壁画 + EUR 1.05M 五年价值测算",
        description: "报告把文化资产盘点、区域文旅基础、DCF 假设和数字化保护方案连接成一套价值叙事。",
      },
      {
        label: "策略信号",
        title: "让数字化保护同时创造访问和运营价值",
        description: "高清档案、虚拟修复、全景漫游和数字运维系统既能降低实体文物压力，也能形成游客产品和运营数据。",
      },
    ],
    decisionPoints: [
      {
        title: "商业化应该服务于保护",
        description: "门票、文创、活动和街区运营应为文化解释和保护提供资金，而不是替代遗产本身的叙事。",
      },
      {
        title: "数字化工具同时创造保护价值和产品价值",
        description: "高清采集、虚拟修复、全景漫游和数字运维系统既能降低实体文物压力，也能扩大公众访问。",
      },
    ],
    result:
      "项目提出文旅业态、数字展示、运营合作和现金流回收路径，为历史文化资产的可持续运营提供策略方案。",
    keyOutputs: [
      "文化资产保护与运营框架",
      "SWOT / PESTEL 分析",
      "文旅融合商业场景",
      "数字化展示与互动体验方案",
      "现金流与投资回收逻辑",
      "文化价值与商业价值平衡策略",
    ],
    reflection:
      "这个项目体现了我在文化资产、商业策略和数字化场景之间建立连接的能力。",
  },
  "content-growth": {
    ...getProjectSummary("content-growth"),
    subtitle: "用户增长、内容运营与商业化实践。",
    role: "内容策略与增长闭环搭建",
    phase: "持续运营与商业验证",
    headlineOutcome: "让内容从流量工具升级为信任资产和商业入口。",
    overview:
      "这项实践来自我长期在多个平台上的内容运营。相比把内容仅仅看成曝光工具，我更把它当作低成本、高反馈密度的增长系统。",
    problem:
      "很多增长工作的难点不是拿不到流量，而是流量与后续转化之间断层明显。注意力不天然等于信任，更不天然等于商业结果。",
    whatIDid:
      "我负责从定位、选题、脚本、制作、发布到复盘的完整链路，并把互动数据、评论反馈、私信问题和合作转化情况放回内容系统里迭代。",
    result:
      "表现较好的内容带来显著浏览和互动，同时也带来品牌合作机会。更重要的是，这套实践沉淀了选题判断、用户理解和商业化机会。",
    reflection:
      "好的增长内容不是依赖产量堆出来的，而是依赖对用户情绪、场景和时机的精准判断。",
  },
  "pre-master": {
    ...getProjectSummary("pre-master"),
    subtitle: "从用户需求验证到课程产品、社群运营与交付体系搭建。",
    role: "业务搭建与团队推进",
    phase: "从验证到结构化运营",
    headlineOutcome: "完成早期商业验证，并把副项目逐步推向可复用的运营模型。",
    overview:
      "该项目最初以 Pre-Master 教育咨询服务形态启动。它从一场偏实验性质的创业尝试，逐步发展成更完整的教育服务系统。",
    problem:
      "教育服务早期几乎没有品牌资产可以依赖，用户购买决策高度依赖信任感，而信任既取决于前端表达，也取决于后端交付是否稳定。",
    whatIDid:
      "我参与并推动业务从前到后的关键环节，包括搭建早期内容引流、设计服务逻辑、管理团队、运营社群，以及在真实交付中调整咨询与服务流程。",
    result:
      "项目完成了付费咨询和用户服务的早期验证，并逐步从一次性副项目演化为更有结构的运营模型。",
    reflection:
      "0 到 1 的关键不只是创造新东西，而是持续降低不确定性，让团队知道什么可以标准化、什么需要保留弹性。",
  },
  "market-intelligence": {
    ...getProjectSummary("market-intelligence"),
    subtitle: "为海外游戏产品决策提供竞品分析、市场研究与结构化输入。",
    role: "研究分析与决策支持",
    phase: "国际市场判断支撑",
    headlineOutcome: "把分散信息整理成产品与市场团队可直接讨论的判断材料。",
    overview:
      "在网易游戏实习期间，我参与竞品分析、用户反馈整理、区域市场研究，以及支持海外产品与市场判断的材料输出。",
    problem:
      "海外产品判断往往不缺数据，缺的是能够进入决策讨论的结构化信息。竞品、用户声音和本地化因素常常分散在不同来源里。",
    whatIDid:
      "我分析同类产品，归纳用户痛点、产品差异与潜在机会，并把用户反馈、性能问题、信任成本等信息整理成结构化内容。",
    result:
      "这项工作帮助团队把竞品信息、用户反馈与市场背景更有效地串联起来，提升围绕定位、本地化和市场机会判断的讨论效率。",
    reflection:
      "好的分析不是把资料收得越多越好，而是能否把复杂问题翻译成团队可以据此行动的判断框架。",
  },
};

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  if (slug in projectDetails) {
    return projectDetails[slug as ProjectSlug];
  }
  return undefined;
}

export function getAllProjectSlugs(): ProjectSlug[] {
  return projectSummaries.map((p) => p.slug);
}
