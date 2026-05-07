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
  prdSummary?: {
    label: string;
    title?: string;
    description?: string;
    items?: string[];
  }[];
  interfaceWorkflow?: {
    image: string;
    caption: string;
    wide?: boolean;
  }[];
  userFlow?: string[];
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
    tags: ["房地产", "XGBoost", "预测建模"],
  },
  {
    slug: "casa-rossi-valuation",
    title: "Casa Rossi 房地产投资估值",
    cardSubtitle: "DCF 情景对比 · ROI 判断",
    shortDescription:
      "用租金比较、DCF 与 WACC 比较保持现状和改造方案，判断历史建筑资产更稳健的投资路径。",
    tags: ["DCF", "WACC", "风险评估"],
  },
  {
    slug: "monza-esports-hotel",
    title: "Monza 电竞酒店可行性研究",
    cardSubtitle: "304,134 观众 · EUR 2.13M 租金",
    shortDescription:
      "围绕 F1 赛事流量和电竞消费场景，设计 170 间客房、1,900 sqm 体验空间与复合收入结构。",
    tags: ["商业模型", "酒店", "电竞", "投资分析"],
  },
  {
    slug: "hedonic-price-regression",
    title: "Hedonic 房价回归分析",
    cardSubtitle: "140 样本 · 12 变量回归",
    shortDescription:
      "用 Hedonic Price Method 检验地铁距离、CBD、学校质量等因素对房价的影响，并谨慎解释弱显著信号。",
    tags: ["计量经济", "城市交通", "数据分析"],
  },
  {
    slug: "cultural-asset-digital-commercialization",
    title: "文化资产数字化与商业化策略",
    cardSubtitle: "93.13 sqm 壁画 · EUR 1.05M 价值",
    shortDescription:
      "以昭化寺壁画为核心资产，设计数字化保护、文旅运营、现金流回收和五年价值测算路径。",
    tags: ["DCF", "数字化保护"],
  },
  {
    slug: "content-growth",
    title: "内容驱动增长",
    cardSubtitle: "内容运营与增长闭环",
    shortDescription: "用内容系统连接用户洞察、表达与转化，形成可复盘的增长闭环。",
    tags: ["40万+ 单篇浏览", "1.5万+ 单篇互动", "3000+ 粉丝增长"],
  },
  {
    slug: "pre-master",
    title: "教育咨询业务 0 到 1",
    cardSubtitle: "从用户需求验证到课程产品、社群运营与交付体系搭建",
    shortDescription: "从用户需求验证到课程产品、社群运营与交付体系搭建。",
    tags: ["150+ 付费咨询", "1000+ 社群用户服务", "商业化验证"],
  },
  {
    slug: "market-intelligence",
    title: "网易产品欧洲市场",
    cardSubtitle: "海外游戏与工具生态研究",
    shortDescription: "围绕海外游戏工具、加速器、展会、用户差评与欧洲合规环境，整理可进入产品讨论的市场判断材料。",
    tags: ["62条差评归因", "22类工具矩阵", "Gamescom展会研究"],
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
    tags: ["400K+ Views", "15K+ Interactions", "3K+ Follower Growth"],
  },
  "pre-master": {
    title: "Pre-Master Education Service",
    cardSubtitle: "0-to-1 education service",
    shortDescription:
      "An education consulting service built from positioning and content acquisition to delivery operations.",
    tags: ["150+ Paid Consultations", "1000+ Community Users", "Commercial Validation"],
  },
  "market-intelligence": {
    title: "NetEase Product Europe Market",
    cardSubtitle: "Overseas gaming and tool ecosystem research",
    shortDescription:
      "Research across overseas gaming tools, accelerators, exhibitions, user complaints, and European compliance context.",
    tags: ["62 Complaint Records", "22 Tool Matrix", "Gamescom Research"],
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
  Pick<ProjectDetail, "subtitle" | "role" | "phase" | "headlineOutcome" | "projectLens" | "overview" | "problem" | "whatIDid" | "prdSummary" | "interfaceWorkflow" | "userFlow" | "analysisFlow" | "evidenceCards" | "evidenceVisuals" | "caseTakeaways" | "decisionPoints" | "result" | "keyOutputs" | "reflection">
> = {
  coursesnap: {
    subtitle: "An AI learning-material workflow that turns scattered course screenshots, PDFs, and transcripts into structured study notes.",
    role: "Product definition / MVP design / AI workflow design / Product trade-off",
    phase: "Runnable MVP / AI product case",
    headlineOutcome:
      "Built a working MVP in about 10 hours, covering auto screenshot capture, PDF generation, transcript detection, and AI-assisted study-note generation.",
    projectLens: "AI Product / Learning Workflow / Local Tool / MVP",
    overview:
      "CourseSnap started from a small but very real learning workflow: when students watch online courses, replayed meetings, or remote lectures, the full slide deck is often unavailable. They can only take screenshots manually, then spend extra time sorting scattered images into something they can actually review.",
    problem:
      "The product problem was not simply image capture. The real issue was input quality: screenshots are easy to miss, OCR is unstable on slides, transcripts are separated from visual context, and AI summaries become weak when the upstream materials are incomplete or poorly structured.",
    whatIDid:
      "I narrowed the MVP into a clear workflow: detect slide changes, save new screenshots, merge screenshots into a PDF, detect transcript files in the project folder, and use an OpenAI-compatible API call to generate structured study notes. I also packaged the tool for Windows so the PDF workflow could work even when users do not use AI.",
    prdSummary: [
      {
        label: "Target Users",
        description:
          "Online-course students, international students, remote-training users, and anyone who needs to organize lecture or course materials.",
      },
      {
        label: "Core Scenario",
        description:
          "Users watch an online course, meeting replay, or remote lecture where the complete deck cannot be downloaded, so they rely on screenshots and manual organization.",
      },
      {
        label: "Pain Points",
        items: [
          "Manual screenshots are inefficient and easy to miss.",
          "OCR can be unstable on slide screenshots.",
          "Scattered images are hard to review.",
          "Transcripts are separated from course visuals.",
          "AI summaries need higher-quality input to be useful.",
        ],
      },
      {
        label: "Product Goal",
        description:
          "Turn scattered screenshots, PDFs, and transcripts into readable, reviewable study materials that can also be handed to AI for further processing.",
      },
      {
        label: "MVP Scope",
        items: [
          "P0: Auto screenshot capture, page-change detection, project-folder management, and screenshot-to-PDF generation.",
          "P1: Detect PDF plus TXT/DOCX transcripts, then generate structured AI study notes.",
          "P2: OCR, multilingual summaries, cloud sync, automatic transcript capture, and other future capabilities.",
        ],
      },
      {
        label: "Non-functional Requirements",
        items: [
          "Runs locally with a low learning cost.",
          "Works on Windows.",
          "API keys are not embedded in the app.",
          "Protects user privacy.",
          "PDF generation remains useful as a standalone feature.",
        ],
      },
    ],
    interfaceWorkflow: [
      {
        image: "/images/projects/coursesnap/interface.png",
        caption:
          "Main interface: A lightweight desktop interface that brings recording, PDF generation, summarization, and project-folder access into one place.",
      },
      {
        image: "/images/projects/coursesnap/captured-slides.png",
        caption:
          "Auto capture: The system detects slide changes and saves screenshots in sequence as slide files.",
      },
      {
        image: "/images/projects/coursesnap/pdf-output.png",
        caption:
          "PDF output: Captured images are merged into a continuous course PDF for reading, archiving, and further AI processing.",
      },
      {
        image: "/images/projects/coursesnap/missing-transcript.png",
        caption:
          "Error handling: When the transcript is missing, the app guides the user to add the required file before summarization.",
      },
      {
        image: "/images/projects/coursesnap/ai-summary.png",
        caption:
          "AI summary: The tool combines the course PDF and transcript to generate structured study notes, completing the loop from course materials to review-ready outputs.",
        wide: true,
      },
    ],
    userFlow: [
      "Start recording",
      "Detect page changes",
      "Auto-save screenshots",
      "Generate PDF",
      "Detect transcript",
      "AI summary",
      "Export study notes",
    ],
    decisionPoints: [
      {
        title: "Why I moved away from OCR",
        description:
          "The early idea was screenshot to OCR to text to AI summary. In practice, OCR was fragile on slide screenshots and could lose layout, order, and visual context. Keeping the original slides as a PDF made the input more reliable.",
      },
      {
        title: "Why PDF + transcript became the core input",
        description:
          "The PDF preserves the visual structure of the course, while the transcript adds semantic detail. Together they create a higher-quality input for review and AI summarization than OCR text alone.",
      },
      {
        title: "Why the API key is provided by the user",
        description:
          "Embedding a personal API key would create security and maintenance risks. Letting users provide their own key keeps distribution safer and makes the AI layer easier to replace or extend.",
      },
      {
        title: "Why AI is an enhancement, not the entry barrier",
        description:
          "The product still delivers value as an auto-capture and PDF-generation tool. AI improves the workflow, but users can still organize and review materials without model access.",
      },
    ],
    result:
      "CourseSnap became an end-to-end learning-material MVP: course content capture, PDF organization, transcript pairing, and AI-assisted note generation. The case shows my ability to identify a concrete user pain point, scope an MVP, make product trade-offs, and embed AI into a real workflow instead of treating AI as a standalone feature.",
    reflection:
      "This project clarified a product principle I would bring into AI product roles: model capability matters, but the user experience often depends more on input quality, workflow design, privacy expectations, and fallback value when AI is unavailable.",
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
    subtitle: "A growth practice connecting publishing, audience feedback, data review, and commercial collaboration.",
    role: "Content positioning / Topic planning / Publishing / Data review",
    phase: "Multi-platform operation and commercialization validation",
    headlineOutcome: "Reached 400K+ views and 15K+ interactions on a single post, with follower growth and brand collaboration leads.",
    projectLens: "Content Growth / User Insight / Commercial Validation / Platform Operations",
    overview:
      "This project comes from long-term content operation across Xiaohongshu, Zhihu, Bilibili, Douyin, and other platforms. The public Xiaohongshu profile shows study-abroad advice, campus vlogs, travel culture, cross-cultural daily life, and local lifestyle content. Behind that personal expression is a repeated process of testing topics, narratives, covers, audience comments, and conversion signals.",
    problem:
      "The challenge was not creating one viral post, but making content generate usable feedback over time: why people stop, save, comment, message, and eventually trust an account. Traffic does not automatically become trust, and trust does not automatically become commercial value.",
    whatIDid:
      "I handled account positioning, topic planning, scripts, visual structure, filming and editing, cover and title design, publishing rhythm, and data review. I organized topics into three broad content functions: knowledge and decision support, scene and emotional storytelling, and lifestyle or consumption observation; then I used comments, saves, private messages, and collaboration inquiries as user-demand signals for the next round of iteration.",
    analysisFlow: [
      {
        title: "Build a content matrix from personal experience",
        description:
          "I translated study-abroad, travel, city life, and cross-cultural experiences into a content matrix: practical advice that helps users decide, scene-based vlogs that build trust, and lifestyle or travel narratives that create emotional and aesthetic pull.",
      },
      {
        title: "Use platform feedback to read real interest",
        description:
          "Views, likes, saves, comments, and private messages helped distinguish whether a post was solving an information need, offering emotional resonance, providing visual value, or reducing decision uncertainty.",
      },
      {
        title: "Convert high-feedback content into trust assets",
        description:
          "When a topic repeatedly generated saves, questions, or collaboration leads, I turned it into reusable topic angles, narrative patterns, and user-question libraries rather than treating it as a one-off hit.",
      },
      {
        title: "Connect commercialization with user experience",
        description:
          "Consulting and brand collaboration worked best when they extended the account's tone and the audience's real needs instead of interrupting the content experience.",
      },
    ],
    evidenceCards: [
      {
        label: "Single-post views",
        value: "400K+",
        description:
          "The highest-performing post reached more than 400K views, validating topic selection, title, cover, and scenario framing.",
      },
      {
        label: "Single-post interactions",
        value: "15K+",
        description:
          "The strongest post gained around 15K likes and saves, showing that the content was not only seen but also saved and discussed.",
      },
      {
        label: "Follower growth",
        value: "3K+",
        description:
          "Repeated publishing and topic iteration generated cumulative follower growth and moved the account beyond one-off exposure.",
      },
      {
        label: "Publishing scale",
        value: "141 posts",
        description:
          "Published 141 notes and accumulated 23K likes plus 6,791 saves, showing that account growth was not driven by one isolated post.",
      },
    ],
    evidenceVisuals: [
      {
        title: "Content as a feedback loop, not isolated publishing",
        description:
          "Each post generated platform data, audience questions, and possible collaboration signals, which then shaped the next topic and expression choices.",
        rows: [
          {
            label: "Expression",
            value: "Topic / Title / Cover / Narrative",
            note: "Shapes whether people stop and how the platform understands the first layer of the content.",
          },
          {
            label: "Feedback",
            value: "Likes and saves / Comments / Messages",
            note: "Helps identify whether the audience is seeking information, emotional resonance, visual value, or decision support.",
          },
          {
            label: "Conversion",
            value: "Follower growth / Consulting / Brand collaboration",
            note: "When content builds trust consistently, commercial opportunities appear more naturally.",
          },
        ],
      },
    ],
    decisionPoints: [
      {
        title: "Make personal expression legible as a content product",
        description:
          "A personal account cannot rely on life fragments alone; experiences need to be translated into value that others can recognize: information, emotion, taste, methods, or judgment.",
      },
      {
        title: "Interpret growth metrics through user motivation",
        description:
          "Views signal distribution efficiency, likes and saves indicate recognition and future use, and messages or collaboration leads show that trust is forming.",
      },
      {
        title: "Commercialization should protect account trust",
        description:
          "Collaboration opportunities need to match the account tone and audience needs, otherwise short-term conversion can damage long-term trust.",
      },
    ],
    result:
      "The practice generated strong views, interactions, follower growth, and collaboration inquiries from technology, beauty, e-commerce, and platform brands. I have also started testing TikTok as an overseas-platform content channel to observe how study-abroad, travel, and visual narratives behave in a different distribution environment. More importantly, this work trained my ability to extract demand from audience feedback, read opportunity from content data, and translate those signals into product and business discussions.",
    keyOutputs: [
      "Multi-platform content positioning and topic system",
      "Content matrix covering decision support, scene storytelling, and lifestyle observation",
      "Short-video and image-text scripts, editing, and publishing",
      "Title, cover, and narrative-structure testing",
      "Comment, save, and private-message feedback review",
      "Content data review and next-topic iteration",
      "Brand collaboration and commercialization screening",
    ],
    reflection:
      "This experience clarified that content growth is not about packaging life for traffic. It is about understanding when users need information, resonance, or judgment, then organizing scattered feedback into insight that can shape product, content, and business decisions.",
  },
  "pre-master": {
    subtitle: "A 0-to-1 education service built through content trust, campaign conversion, community operations, and service delivery.",
    role: "Content acquisition / Campaign design / Community operations / Service delivery",
    phase: "From demand validation to structured operations",
    headlineOutcome:
      "Used public content, admissions campaigns, and community delivery to validate paid consulting demand and build a repeatable service workflow.",
    projectLens: "Education Service / Content Acquisition / Community / Conversion",
    overview:
      "Pre-Master started from a clear education-consulting problem: students needed practical information on school selection, portfolio preparation, written materials, interviews, and application timelines before they could trust a paid service.",
    problem:
      "For an early education service, trust is the real first product. Users rarely convert only because a service exists; they need to see credible knowledge, a clear offer, and a delivery process that feels dependable.",
    whatIDid:
      "I helped connect the front and back ends of the service: writing platform content, supporting admissions posts and campaign offers, designing service tiers, operating communities, coordinating tutors, and turning repeated questions into clearer delivery workflows.",
    analysisFlow: [
      {
        title: "Build trust with public content",
        description:
          "Zhihu articles answered concrete study-abroad and architecture-application questions, turning scattered user uncertainty into searchable, shareable information.",
      },
      {
        title: "Capture demand with admissions campaigns",
        description:
          "WeChat admissions posts acted as campaign pages: they explained service tiers, clarified what each offer included, and used group-discount mechanics to lower the decision threshold.",
      },
      {
        title: "Turn consulting into a service system",
        description:
          "The service was split into scanning, VIP tutoring, and mock-interview products, making the offer easier to understand and the delivery process easier to coordinate.",
      },
      {
        title: "Use community feedback to iterate",
        description:
          "Questions from communities, comments, and consultations helped identify what users were still confused about, which then fed the next round of content, service scripts, and delivery improvements.",
      },
    ],
    evidenceCards: [
      {
        label: "Paid consulting",
        value: "150+",
        description:
          "Validated that users were willing to pay for application guidance, tutoring, and decision support once trust and service scope were clear.",
      },
      {
        label: "Community users served",
        value: "1000+",
        description:
          "Community operations turned one-off inquiries into a larger service pool for Q&A, follow-up, and repeated user feedback.",
      },
      {
        label: "Article reach",
        value: "2.6w+",
        description:
          "A school-recommendation article became a high-reach trust asset, showing that practical application information could attract users before direct conversion.",
      },
      {
        label: "Campaign offer",
        value: "3 tiers",
        description:
          "The admissions activity packaged services into scanning, VIP tutoring, and mock interview products, with group discounts supporting referral-style acquisition.",
      },
    ],
    evidenceVisuals: [
      {
        title: "Education service growth loop",
        description:
          "The core value was not a single channel, but the loop from public knowledge to campaign conversion, delivery, and feedback.",
        rows: [
          {
            label: "Content trust",
            value: "Zhihu articles and education posts",
            note: "Answer real application questions first, so users can judge expertise before entering a paid conversation.",
          },
          {
            label: "Conversion page",
            value: "WeChat admissions post and group offer",
            note: "Make the service scope, price ladder, and action path explicit enough for users to decide or refer friends.",
          },
          {
            label: "Service delivery",
            value: "Tutoring, mock interview, and community support",
            note: "Break consulting into deliverable modules so the team can coordinate work and users know what they will receive.",
          },
          {
            label: "Feedback iteration",
            value: "Comments, questions, and consultation records",
            note: "Use repeated confusion as input for the next content topic, service explanation, and operational script.",
          },
        ],
      },
    ],
    decisionPoints: [
      {
        title: "Education consulting sells trust before it sells service",
        description:
          "High-intent users need evidence that the team understands their questions. Public content works as a trust layer before paid conversion.",
      },
      {
        title: "Discounts should reduce friction, not weaken value",
        description:
          "The group-discount activity made the decision easier and encouraged peer sharing, while the tiered package still kept service value visible.",
      },
      {
        title: "A service business becomes scalable when questions become modules",
        description:
          "Repeated user questions can be converted into content, templates, tutoring modules, and community answers instead of staying as one-off labor.",
      },
    ],
    result:
      "The project validated paid demand, supported a large user community, and connected content acquisition with service delivery. It also trained my ability to design a user journey across trust-building, conversion, operations, and post-service feedback.",
    keyOutputs: [
      "Zhihu-style education articles and application knowledge content",
      "WeChat admissions campaign post and offer structure",
      "Group-discount acquisition mechanism",
      "Scanning, VIP tutoring, and mock-interview service tiers",
      "Community Q&A and user follow-up operations",
      "Tutor coordination and delivery workflow",
      "Reusable explanations for school selection, documents, and interview preparation",
    ],
    reflection:
      "This project made me realize that 0-to-1 work is less about making something look complete at the beginning, and more about turning uncertainty into a loop: answer what users ask, package what they need, deliver what was promised, then use the next round of feedback to make the system clearer.",
  },
  "market-intelligence": {
    subtitle: "Market research supporting overseas gaming products, accelerator tools, and European product context.",
    role: "Market research / Competitor analysis / User-feedback synthesis",
    phase: "NetEase part-time research work",
    headlineOutcome: "Turned scattered market, competitor, complaint, and compliance signals into structured research inputs for product discussion.",
    projectLens: "Gaming Ecosystem / User Feedback / Competitor Research / European Market",
    overview:
      "This project summarizes research work from my NetEase part-time period. The materials cover overseas gaming exhibitions, game-related tools and websites, accelerator competitors, user complaint analysis, European telecom and compliance context, and AI-tool landscape research.",
    problem:
      "Overseas product decisions often suffer from fragmented signals: competitor features are scattered across websites, user pain points appear in reviews and communities, market context sits in reports, and compliance constraints are hidden in policies and interaction patterns.",
    whatIDid:
      "I collected and organized public information, built comparison tables, extracted complaint themes, reviewed competitor media and promotion mechanics, summarized exhibition and ecosystem trends, and translated these findings into research materials that product and market teams could discuss directly.",
    analysisFlow: [
      {
        title: "Map the market and ecosystem",
        description:
          "I researched Gamescom, major gaming exhibitions, gaming tools, recording tools, community platforms, AI tools, and European network infrastructure to understand where overseas user demand and product opportunities were forming.",
      },
      {
        title: "Compare competitors and adjacent tools",
        description:
          "I built matrices covering game recording tools, voice/community tools, accelerator products, pet-camera/social apps, and router or network services, comparing function, pain point, traffic, contact path, and promotional placement.",
      },
      {
        title: "Extract user pain points from negative reviews",
        description:
          "For GearUP Booster and ExitLag, I organized 62 negative-review records by theme, including pricing, acceleration effect, refund/trust issues, interface experience, and service expectations.",
      },
      {
        title: "Add local market and compliance context",
        description:
          "I also reviewed GDPR, cookie consent patterns, European payment methods, telecom packages, and Italian network products so product judgment would include local rules, payment habits, and infrastructure constraints.",
      },
    ],
    evidenceCards: [
      {
        label: "User complaints",
        value: "62 records",
        description:
          "A structured complaint table for GearUP Booster and ExitLag, translating raw user reviews into themes such as price, acceleration performance, refunds, trust, and interface issues.",
      },
      {
        label: "Tool matrix",
        value: "22 items",
        description:
          "A game-tool and website matrix covering recording software, voice/community tools, boosters, and related traffic, advertising, and contact information.",
      },
      {
        label: "AI tools",
        value: "612 items",
        description:
          "An AI-tool inventory spanning categories, websites, descriptions, and translated summaries, useful for scanning early tool-market structure.",
      },
      {
        label: "Market context",
        value: "24 pages",
        description:
          "A Gamescom research deck covering the exhibition, global game-industry trends, company examples, and comparable gaming events.",
      },
    ],
    evidenceVisuals: [
      {
        title: "How research modules support product judgment",
        description:
          "I grouped materials into user feedback, tool ecosystem, industry context, and local constraints so different sources could answer different product questions.",
        rows: [
          {
            label: "User signal",
            value: "Pain points and trust issues in real reviews",
            note: "Complaint classification helps identify user frustration around price, performance, refund, trust, and product experience.",
          },
          {
            label: "Ecosystem map",
            value: "Player tools, communities, and reach channels",
            note: "Tool matrices reveal adjacent needs around recording, voice, community, acceleration, and sharing.",
          },
          {
            label: "Industry context",
            value: "Exhibitions, company cases, and global trends",
            note: "Exhibition research helps interpret overseas gaming scenes, company moves, and market-activity formats.",
          },
          {
            label: "Local constraints",
            value: "Compliance, payments, and network infrastructure",
            note: "European market context keeps product judgment grounded in rules, payment habits, and infrastructure conditions.",
          },
        ],
      },
    ],
    decisionPoints: [
      {
        title: "A good research file must enter product discussion",
        description:
          "The strongest reports are not the longest files, but those that convert market data, competitor information, or user reviews into decisions a product team can actually debate.",
      },
      {
        title: "Negative reviews are product requirements in disguise",
        description:
          "Complaint themes such as pricing fairness, acceleration reliability, refund policy, and interface friction reveal what users expect from similar products.",
      },
      {
        title: "Overseas products require context beyond feature comparison",
        description:
          "Europe-focused work needs to consider compliance, cookie consent, payments, connectivity, and local platform behavior, not only competitor feature lists.",
      },
    ],
    result:
      "The work created a research base across user feedback, competitor products, market events, regulatory context, and platform channels. It helped convert scattered external information into structured inputs for product positioning, localization, marketing, and operational discussion.",
    keyOutputs: [
      "Gamescom and global gaming-exhibition comparison",
      "Game-related tools and website research matrix",
      "GearUP Booster and ExitLag negative-review classification",
      "WTFast / ExitLag coupon, media, and promotion research",
      "European GDPR and cookie-consent interaction research",
      "European payment, telecom, and network-environment context",
      "AI-tool landscape inventory and category scan",
    ],
    reflection:
      "This project strengthened my ability to read across product, market, user feedback, and local constraints. The transferable ability is not just research collection, but knowing which signals matter, how to classify them, and how to present them so a team can make clearer decisions.",
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
            : link.label === "小红书"
              ? "Xiaohongshu"
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
    prdSummary: [
      {
        label: "目标用户",
        description:
          "网课学生、留学生、线上培训用户，以及需要整理讲座、课程或会议资料的人。",
      },
      {
        label: "核心场景",
        description:
          "用户观看网课、会议回放或线上讲座时，无法直接下载完整课件，只能手动截图并在课后整理资料。",
      },
      {
        label: "核心痛点",
        items: [
          "手动截图低效，容易漏页。",
          "OCR 对 PPT 截图识别不稳定，容易乱码、漏字或顺序混乱。",
          "图片分散，不便阅读、归档和复习。",
          "逐字稿与课程画面分离，难以形成完整上下文。",
          "AI 总结缺少高质量输入，输出容易变得空泛。",
        ],
      },
      {
        label: "产品目标",
        description:
          "把分散的课程截图、PDF 和逐字稿整理成可阅读、可复习、可交给 AI 继续处理的学习资料。",
      },
      {
        label: "MVP 范围",
        items: [
          "P0：自动截图、页面变化检测、项目文件夹管理、截图合成 PDF。",
          "P1：检测 PDF 与 TXT/DOCX 逐字稿，调用 AI 生成结构化学习笔记。",
          "P2：OCR、多语言总结、云端同步、自动逐字稿抓取等后续能力。",
        ],
      },
      {
        label: "非功能需求",
        items: [
          "本地运行，低学习成本，Windows 可用。",
          "API Key 不内置，由用户自行输入。",
          "保护用户隐私，避免上传不必要的学习资料。",
          "PDF 生成功能可独立使用，不把 AI 作为使用门槛。",
        ],
      },
    ],
    interfaceWorkflow: [
      {
        image: "/images/projects/coursesnap/interface.png",
        caption:
          "主界面：将开始录制、生成 PDF、开始总结和项目文件夹入口集中在一个轻量界面中。",
      },
      {
        image: "/images/projects/coursesnap/captured-slides.png",
        caption:
          "自动截图：系统根据页面变化自动保存课程截图，并按顺序生成 slide 文件。",
      },
      {
        image: "/images/projects/coursesnap/pdf-output.png",
        caption:
          "PDF 输出：将分散截图合成为连续课程 PDF，方便阅读、归档和后续 AI 处理。",
      },
      {
        image: "/images/projects/coursesnap/missing-transcript.png",
        caption:
          "异常提醒：在缺少逐字稿时提示用户补充文件，避免总结流程失败。",
      },
      {
        image: "/images/projects/coursesnap/ai-summary.png",
        caption:
          "AI 总结：结合课程 PDF 与逐字稿，生成结构化学习笔记，完成从课程素材到复习资料的闭环。",
        wide: true,
      },
    ],
    userFlow: [
      "开始录制",
      "检测页面变化",
      "自动保存截图",
      "一键生成 PDF",
      "检测逐字稿",
      "AI 总结",
      "导出学习笔记",
    ],
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
        title: "关键产品决策：让 AI 服务真实流程",
        label: "产品决策",
        body:
          "这个项目最重要的部分不是功能堆叠，而是在有限时间里判断哪些链路应该自动化，哪些环节应该保留人工控制，哪些能力可以独立提供价值。",
        bullets: [
          "为什么放弃 OCR：早期方案是“截图 → OCR → 文本 → AI 总结”，但 OCR 对课程截图不稳定，容易丢失 PPT 的版式、顺序和视觉信息。我最终放弃把 OCR 作为核心链路，改为用 PDF 保留原始视觉结构。",
          "为什么采用 PDF + 逐字稿：PDF 保留课程画面的上下文，逐字稿补充语义内容，两者组合比单独 OCR 更适合作为复习材料和 AI 总结输入。",
          "为什么 API Key 由用户输入：AI 功能需要调用外部模型。如果在应用里内置个人 Key，会带来安全、成本和维护风险；让用户输入自己的 Key 更适合个人工具的分发方式。",
          "为什么 AI 是增强功能而不是使用门槛：PDF 生成功能本身就能解决资料整理问题，用户即使不用 AI，也能获得明确价值。AI 总结只是在资料整理完成后进一步提升效率。",
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
    subtitle: "把内容发布、用户反馈、数据复盘和商业合作连接成可迭代的增长实践。",
    role: "内容定位、选题策划、发布运营与数据复盘",
    phase: "多平台持续运营与商业化验证",
    headlineOutcome: "单篇 40万+ 浏览、1.5万+ 互动，并带来粉丝增长与品牌合作邀约。",
    projectLens: "内容增长 / 用户洞察 / 商业化验证 / 平台运营",
    overview:
      "这项实践来自我长期在小红书、知乎、Bilibili、抖音等平台上的内容运营。公开主页中可以看到留学申请、校园 Vlog、旅行文化、跨文化日常和本地生活类内容。它们表面上是个人表达，背后其实是一套不断测试选题、叙事、封面、评论反馈和转化路径的内容系统。",
    problem:
      "内容增长最难的部分不是单次爆款，而是让内容持续产生有效反馈：用户为什么停留、为什么收藏、为什么私信、为什么愿意信任一个账号。流量不天然等于信任，信任也不天然等于商业结果，中间需要明确的定位、稳定的表达和可复盘的数据判断。",
    whatIDid:
      "我独立完成账号定位、选题策划、脚本和图文结构、拍摄剪辑、封面标题、发布节奏和数据复盘；并把内容组织成三类功能：知识与决策支持、场景与情绪表达、生活方式与消费观察。评论、收藏、私信问题和品牌合作邀约会被我当作用户需求信号，反向调整下一轮主题和表达方式。",
    analysisFlow: [
      {
        title: "从个人经历里搭建内容矩阵",
        description:
          "把留学、旅行、城市生活和跨文化经历拆成三组内容：帮助用户做决定的实用信息，建立真实感的场景叙事，以及提供情绪和审美吸引力的生活方式表达。",
      },
      {
        title: "用平台反馈判断真实兴趣",
        description:
          "观察浏览、点赞收藏、评论和私信问题，判断内容到底满足的是信息需求、情绪共鸣、审美保存，还是决策前的不确定感。",
      },
      {
        title: "把高反馈内容转化为信任资产",
        description:
          "当某类内容持续带来收藏、咨询或合作邀约时，不只追求下一条爆款，而是沉淀可复用的选题角度、表达模板和用户问题库。",
      },
      {
        title: "连接商业化和用户体验",
        description:
          "品牌合作和咨询转化不是单独插入的商业动作，而是建立在内容调性、用户信任和真实需求匹配之上的延伸。",
      },
    ],
    evidenceCards: [
      {
        label: "单篇浏览",
        value: "40万+",
        description: "最高单篇内容获得 40 万以上浏览，验证了选题、标题、封面和场景表达的传播效率。",
      },
      {
        label: "单篇互动",
        value: "1.5万+",
        description: "最高单篇内容获得约 1.5 万赞藏互动，说明内容不只是被看到，也能触发保存、认可和后续讨论。",
      },
      {
        label: "粉丝增长",
        value: "3000+",
        description: "通过连续内容发布和主题迭代带来累计粉丝增长，让账号从单次曝光走向长期关系。",
      },
      {
        label: "发布规模",
        value: "141 篇",
        description: "持续发布 141 篇笔记，并沉淀 2.3 万点赞与 6791 收藏，说明账号增长不是单篇偶然表现。",
      },
    ],
    evidenceVisuals: [
      {
        title: "内容不是单点发布，而是一条反馈链路",
        description:
          "每一次发布都同时产生平台数据、用户问题和潜在合作信号，下一轮选题和表达会围绕这些信号继续迭代。",
        rows: [
          {
            label: "前端表达",
            value: "选题 / 标题 / 封面 / 叙事",
            note: "决定用户是否愿意停留，也决定内容被平台分发时的第一层理解。",
          },
          {
            label: "用户反馈",
            value: "点赞收藏 / 评论 / 私信",
            note: "帮助判断用户真实在意的是信息、情绪、审美，还是决策支持。",
          },
          {
            label: "后续转化",
            value: "粉丝增长 / 咨询 / 品牌合作",
            note: "当内容持续建立信任，商业机会会以更自然的方式出现。",
          },
        ],
      },
    ],
    decisionPoints: [
      {
        title: "把个人表达做成可被理解的内容产品",
        description:
          "个人账号不能只依赖生活碎片本身，而要把经历翻译成别人能获得价值的内容：信息、情绪、审美、方法或判断。",
      },
      {
        title: "增长指标要回到用户动机里解释",
        description:
          "浏览量说明分发效率，赞藏说明内容被保存和认可，私信与合作邀约则说明信任开始形成。不同指标对应不同层级的用户关系。",
      },
      {
        title: "商业化不应破坏账号信任",
        description:
          "合作机会需要与账号调性和用户需求匹配，否则短期转化会损害长期信任资产。",
      },
    ],
    result:
      "这套内容实践带来了高浏览、高互动、粉丝增长和多个科技、美妆、电商与平台类品牌合作邀约。近期我也开始测试 TikTok 作为海外平台内容实验，用来观察留学、旅行和视觉叙事在不同分发环境中的反馈差异。更重要的是，它让我形成了从用户反馈中提炼需求、从内容数据中判断机会、再把机会转化为产品和商业讨论的能力。",
    keyOutputs: [
      "多平台内容定位与选题体系",
      "覆盖决策支持、场景叙事与生活方式观察的内容矩阵",
      "图文 / 视频脚本、拍摄剪辑与发布执行",
      "标题、封面与叙事结构测试",
      "评论、收藏、私信反馈整理",
      "内容数据复盘与下一轮选题迭代",
      "品牌合作与商业化机会筛选",
    ],
    reflection:
      "这段经历让我更明确地意识到：内容增长不是把生活包装成流量，而是持续理解用户在什么场景里需要信息、共鸣或判断。真正可迁移的能力，是把分散反馈组织成洞察，并据此调整产品、内容和商业路径。",
    relatedLinks: [
      {
        label: "小红书",
        href: "https://xhslink.com/m/i62qkB9xy0",
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@farina1949?_r=1&_t=ZT-968VDYYy4Y2",
      },
    ],
  },
  "pre-master": {
    ...getProjectSummary("pre-master"),
    subtitle: "从内容信任、招生活动、社群运营到咨询交付的教育服务实践。",
    role: "内容获客、招生活动设计、社群运营与服务交付",
    phase: "从需求验证到结构化运营",
    headlineOutcome: "通过知乎内容、公众号招生帖和社群运营完成付费咨询验证，并逐步形成可复用的服务链路。",
    projectLens: "教育服务 / 内容获客 / 社群运营 / 转化设计",
    overview:
      "该项目最初以 Pre-Master 教育咨询服务形态启动，围绕建筑学、调剂、复试和留学申请等高不确定性问题，为学生提供信息判断、材料准备、面试辅导和社群支持。",
    problem:
      "教育服务早期最难的不是把服务列出来，而是先建立信任。用户在付费前需要看到专业判断是否可靠、服务边界是否清楚、后续交付是否稳定，所以内容、活动和交付必须连在一起。",
    whatIDid:
      "我参与并推动业务从前到后的关键环节：用知乎文章和教育内容回答用户问题，用公众号招生帖承接明确需求，通过集赞优惠和组团报名降低决策门槛，再把咨询、课程、复试模拟和社群答疑组织成可交付的服务流程。",
    analysisFlow: [
      {
        title: "先用内容解决信任问题",
        description:
          "知乎文章围绕建筑学考研、调剂院校、复试流程和申请问题展开，用公开内容先证明判断力，让用户在咨询前就能理解我们的专业视角。",
      },
      {
        title: "再用招生帖承接明确需求",
        description:
          "公众号招生帖把服务拆成扫盲班、VIP 班和复试模拟，并明确每类服务包含什么。集赞优惠和多人团报让用户更容易从观望进入咨询和报名。",
      },
      {
        title: "把咨询拆成可交付模块",
        description:
          "服务不只是一对一回答问题，而是围绕院校信息、调剂规则、作品集、简历、邮件、复试题库和模拟面试形成更清晰的交付模块。",
      },
      {
        title: "用社群反馈继续迭代",
        description:
          "社群里的高频问题、评论区反馈和咨询记录会反过来影响下一轮内容选题、课程说明和服务话术，让业务不依赖一次性流量。",
      },
    ],
    evidenceCards: [
      {
        label: "付费咨询",
        value: "150+",
        description:
          "说明用户愿意为院校判断、申请策略、材料准备和复试辅导付费，完成了早期商业需求验证。",
      },
      {
        label: "社群用户服务",
        value: "1000+",
        description:
          "通过社群答疑、信息跟进和内容分发，把一次性咨询延展成更长期的用户关系。",
      },
      {
        label: "内容触达",
        value: "2.6 万+",
        description:
          "调剂院校推荐文章获得较高阅读，证明具体、及时、可操作的申请信息能成为有效的信任入口。",
      },
      {
        label: "活动产品",
        value: "3 档",
        description:
          "招生帖把服务分成扫盲班、VIP 班和复试模拟，并配合集赞、组团优惠完成转化承接。",
      },
    ],
    evidenceVisuals: [
      {
        title: "教育服务的增长链路",
        description:
          "这个项目的重点不是单一平台数据，而是把内容、活动、社群和交付串成完整路径。",
        rows: [
          {
            label: "内容信任",
            value: "知乎文章与教育内容",
            note: "先回答用户真正关心的问题，让专业判断在公开内容里被看见。",
          },
          {
            label: "活动承接",
            value: "公众号招生帖与优惠机制",
            note: "用清晰的服务分层、价格锚点和集赞 / 组团活动降低报名阻力。",
          },
          {
            label: "服务交付",
            value: "咨询、辅导、模拟与社群",
            note: "把模糊的咨询需求拆成具体模块，方便团队协作，也方便用户理解交付内容。",
          },
          {
            label: "反馈迭代",
            value: "评论、问题与咨询记录",
            note: "把高频困惑沉淀为下一轮内容、课程说明和服务流程，而不是停留在零散答疑。",
          },
        ],
      },
    ],
    decisionPoints: [
      {
        title: "教育咨询先卖信任，再卖服务",
        description:
          "用户不是因为看见一个服务名就付费，而是因为在内容和沟通里确认你真的理解他的问题。",
      },
      {
        title: "优惠机制的作用是降低决策阻力",
        description:
          "集赞和组团优惠不是单纯降价，而是把用户的犹豫转成更轻的行动入口，同时促成朋友圈传播和同伴报名。",
      },
      {
        title: "可迁移的能力在于把问题模块化",
        description:
          "当大量用户反复问相似问题时，就可以把它们转成内容、模板、课程、社群答疑和交付 SOP。",
      },
    ],
    result:
      "项目完成了付费咨询和用户服务的早期验证，也让我完整经历了从内容获客、招生活动、社群运营到服务交付的闭环。它展示的不是单一教育咨询经历，而是把用户问题转化为内容、产品和运营动作的能力。",
    keyOutputs: [
      "知乎专栏与教育类知识内容",
      "公众号招生帖与活动转化设计",
      "集赞优惠和多人团报机制",
      "扫盲班、VIP 班、复试模拟等服务分层",
      "社群答疑、用户跟进与信息分发",
      "导师协作和咨询交付流程",
      "围绕院校、文书、作品集和复试的可复用说明材料",
    ],
    reflection:
      "0 到 1 的关键不只是创造新东西，而是持续降低不确定性：先回答用户为什么需要你，再设计用户如何进入服务，最后把真实交付中反复出现的问题沉淀成更稳定的内容和流程。",
  },
  "market-intelligence": {
    ...getProjectSummary("market-intelligence"),
    subtitle: "围绕海外游戏产品、加速器工具和欧洲市场环境形成的研究输入。",
    role: "市场研究、竞品分析、用户反馈整理与决策支持",
    phase: "网易兼职研究工作",
    headlineOutcome: "把展会、竞品、用户差评、合规与本地市场信号整理成可进入产品讨论的判断材料。",
    projectLens: "海外游戏生态 / 用户反馈 / 竞品研究 / 欧洲市场",
    overview:
      "这组项目来自我在网易兼职期间完成的研究工作，内容覆盖海外游戏展会、游戏相关工具与网站、游戏加速器竞品、用户差评、欧洲电信与支付环境、GDPR / Cookie 合规以及 AI 工具生态等方向。",
    problem:
      "海外产品判断往往不缺资料，缺的是能够进入产品讨论的结构化信息。竞品功能分散在网站和广告里，用户痛点藏在评论和社区里，市场环境散落在报告和表格里，而欧洲市场还需要额外考虑合规、支付、网络基础设施和本地使用习惯。",
    whatIDid:
      "我负责公开信息收集、竞品矩阵整理、用户评论归因、海外展会与行业趋势梳理、竞品媒体内容和券码机制分析，以及欧洲合规、支付、网络环境等本地市场资料整理。",
    analysisFlow: [
      {
        title: "搭建市场与生态图谱",
        description:
          "我梳理 Gamescom 等游戏展会、游戏录像和语音工具、社区平台、AI 工具、欧洲网络环境和运营商信息，先判断海外游戏相关产品所处的生态位置。",
      },
      {
        title: "拆解竞品与相邻工具",
        description:
          "我用表格对游戏录像、语音社区、加速器、宠物相机 / 社交应用、路由器和网络安全服务进行对比，记录功能、解决痛点、流量来源、广告位和联系方式。",
      },
      {
        title: "从差评中提炼用户痛点",
        description:
          "针对 GearUP Booster 与 ExitLag，我整理 62 条差评记录，按价格、加速效果、退款、信任、界面体验和服务预期等主题归因。",
      },
      {
        title: "补充本地市场和合规约束",
        description:
          "我还整理 GDPR、Cookie 交互、欧洲支付方式、电信套餐、意大利网络产品等资料，让海外产品判断不只停留在功能对比，而能纳入合规、支付和基础设施条件。",
      },
    ],
    evidenceCards: [
      {
        label: "用户差评",
        value: "62 条",
        description: "GearUP Booster 与 ExitLag 差评归因表，把原始评论转化为价格、加速效果、退款、信任和体验问题。",
      },
      {
        label: "工具矩阵",
        value: "22 项",
        description: "游戏相关工具和网站矩阵，覆盖录像、语音、社区、加速器等工具的功能、痛点、广告位和联系方式。",
      },
      {
        label: "AI 工具库",
        value: "612 项",
        description: "AI 工具汇总表按类别、网址、描述和中文摘要整理，作为早期工具生态扫描材料。",
      },
      {
        label: "展会研究",
        value: "24 页",
        description: "Gamescom 调研报告梳理展会定位、全球游戏行业趋势、公司案例和同类展会对比。",
      },
    ],
    evidenceVisuals: [
      {
        title: "研究模块如何支撑产品判断",
        description:
          "我把资料分成用户反馈、工具生态、行业场景和本地约束四类，让不同来源的信息分别回答产品判断中的不同问题。",
        rows: [
          {
            label: "用户信号",
            value: "真实评论里的痛点与信任问题",
            note: "差评归因用来识别用户对价格、效果、退款和体验的真实不满，帮助判断产品改进优先级。",
          },
          {
            label: "生态图谱",
            value: "玩家工具、社区与触达渠道",
            note: "工具矩阵用来观察玩家在录制、语音、社区、加速和分享等场景里的相邻需求。",
          },
          {
            label: "行业语境",
            value: "展会、厂商案例与全球趋势",
            note: "展会研究帮助判断海外游戏行业的传播场景、公司动作和可借鉴的市场活动形式。",
          },
          {
            label: "本地约束",
            value: "合规、支付和网络基础设施",
            note: "欧洲市场资料用来提醒产品判断不能只看功能，还要纳入合规、支付习惯和基础设施条件。",
          },
        ],
      },
    ],
    decisionPoints: [
      {
        title: "有价值的研究必须能进入产品讨论",
        description:
          "最有价值的报告不是最长的文件，而是能把市场数据、竞品信息或用户声音转化为产品团队可以讨论和取舍的问题。",
      },
      {
        title: "差评是被压缩过的需求文档",
        description:
          "价格公平、加速稳定性、退款信任、界面体验和服务预期这些差评主题，实际上反映了用户对同类产品的隐性需求。",
      },
      {
        title: "海外市场判断不能只做功能对比",
        description:
          "欧洲相关产品还需要理解 GDPR、Cookie 授权、支付习惯、网络基础设施和本地运营商环境，否则结论很容易停在表面。",
      },
    ],
    result:
      "这组工作沉淀了用户反馈、竞品产品、市场活动、合规环境和本地渠道的研究材料，帮助把分散的外部信息转化为产品定位、本地化、市场投放和运营讨论中的结构化输入。",
    keyOutputs: [
      "Gamescom 与全球游戏展会对比研究",
      "游戏相关工具及网站调研矩阵",
      "GearUP Booster / ExitLag 差评归因表",
      "WTFast / ExitLag 券码、媒体内容与推广机制分析",
      "GDPR 与 Cookie 授权交互方式研究",
      "欧洲支付、电信套餐与网络环境资料整理",
      "AI 工具生态与类别扫描表",
    ],
    reflection:
      "这段经历让我更重视研究材料的可用性。真正可迁移的能力不是把资料收得越多越好，而是知道哪些信号值得看、如何分类、怎样解释，以及如何把它们呈现成团队可以据此行动的判断框架。",
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
