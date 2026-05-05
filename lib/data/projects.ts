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
    title: "传统文化AI视觉",
    cardSubtitle: "生成式内容工作流",
    shortDescription:
      "围绕二十四节气与十二花神主题，搭建一套从主题规划、提示词设计、图像生成、版本筛选到网页画廊展示的生成式内容工作流。",
    tags: ["提示词设计", "视觉策展", "东方美学"],
  },
  {
    slug: "shanghai-house-price-forecasting",
    title: "机器学习驱动的上海房价预测",
    cardSubtitle: "房价预测与可解释建模",
    shortDescription:
      "基于 2000-2024 年上海住房价格、宏观经济、金融、政策与情绪变量，构建 XGBoost 模型预测月度房价趋势，并用 SHAP 解释关键影响因素。",
    tags: ["机器学习", "房地产", "XGBoost", "SHAP", "预测建模"],
  },
  {
    slug: "casa-rossi-valuation",
    title: "Casa Rossi 房地产投资估值",
    cardSubtitle: "房地产投资估值",
    shortDescription:
      "基于市场比较法、租金收益模型、DCF 与 WACC，对 Casa Rossi 进行投资价值评估与回报测算。",
    tags: ["房地产投资", "DCF", "WACC", "估值", "风险评估"],
  },
  {
    slug: "monza-esports-hotel",
    title: "Monza 电竞酒店可行性研究",
    cardSubtitle: "酒店业态商业可行性",
    shortDescription:
      "围绕 Monza 电竞酒店概念，完成市场分析、用户需求、商业模式、收入结构与财务可行性评估。",
    tags: ["可行性研究", "商业模型", "酒店", "电竞", "投资分析"],
  },
  {
    slug: "hedonic-price-regression",
    title: "Hedonic 房价回归分析",
    cardSubtitle: "计量经济与房价分析",
    shortDescription:
      "使用 Hedonic Price Method 分析地铁等城市基础设施因素对房价的影响，建立回归模型解释房地产价格差异。",
    tags: ["计量经济", "房价分析", "回归模型", "城市交通", "数据分析"],
  },
  {
    slug: "cultural-asset-digital-commercialization",
    title: "文化资产数字化与商业化策略",
    cardSubtitle: "文化资产运营策略",
    shortDescription:
      "以昭化寺历史文化遗产为对象，设计保护、运营、商业化和数字化展示路径，实现文化价值与经济价值的平衡。",
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
