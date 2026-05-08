export type Locale = "zh" | "en";

export type TimelineItem = {
  title: string;
  role: string;
  time: string;
  description?: string;
  paragraphs?: string[];
};

export type SimpleItem = {
  title: string;
  description: string;
};

export type EducationItem = {
  school: string;
  meta: string;
};

export type CapabilityGroup = {
  title: string;
  items: string;
  tools: string;
};

export type ResumeCopy = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
    tags: string[];
  };
  profile: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    items: TimelineItem[];
  };
  supplementalExperience: {
    title: string;
    items: TimelineItem[];
  };
  research: {
    title: string;
    items: SimpleItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  capabilities: {
    title: string;
    groups: CapabilityGroup[];
  };
  contact: {
    title: string;
    body: string;
    email: string;
    github: string;
    instagram: string;
  };
};

export const resumeCopy: Record<Locale, ResumeCopy> = {
  zh: {
    metadata: {
      title: "履历",
      description: "教育背景、代表经历、研究分析与能力概览。",
    },
    hero: {
      title: "经验方向",
      description:
        "这里集中梳理我在 AI 产品、数据分析、商业研究、增长运营与跨文化项目推进中的经历与能力。",
      tags: ["AI 产品", "数据分析", "增长运营", "商业策略", "跨文化协作"],
    },
    profile: {
      title: "个人概况",
      paragraphs: [
        "我拥有建筑环境管理经济方向硕士背景，并在瑞典皇家理工学院交换学习，经历横跨建筑环境、经济管理、数据分析与产品实践。相比单一职能，我更适合处理需要产品思维、市场理解、数据判断和跨团队推进共同参与的问题。",
        "我关注 AI 产品、学习效率工具、内容增长和数据驱动决策，也希望把房地产、城市资产和商业分析背景转化为更具体的产品与策略能力。",
      ],
    },
    experience: {
      title: "代表经历",
      items: [
        {
          title: "米兰理工创业俱乐部",
          role: "数字内容运营与品牌增长",
          time: "2022.12 – 至今",
          description:
            "独立运营小红书、知乎、Bilibili、抖音等平台账号，完成内容定位、选题、脚本、拍摄剪辑、发布与数据复盘。单条内容最高获得 40 万+ 浏览和约 1.5 万赞藏互动，累计吸引多个科技、美妆、电商与平台类品牌合作邀约。",
        },
        {
          title: "EESTEC 欧洲电气电子工程学生组织",
          role: "项目经理",
          time: "2023.03 – 2025.07",
          description:
            "参与和执行学校开放日、短期研学营、全球学术研讨会、文化活动与国际交流项目，负责活动策划、外联沟通、团队协作、志愿者组织、预算控制与参与者反馈收集，提升跨文化协作和项目推进能力。",
        },
        {
          title: "网易互娱海外事业部",
          role: "产品与市场实习生",
          time: "2024.02 – 2024.04",
          description:
            "围绕海外游戏工具产品进行竞品分析、用户反馈整理与市场研究。分析 GearUp、ExitLag 等竞品差评与用户痛点，处理 Trustpilot 文本与区域网络指标，并研究 Open Fiber、EOLO 等海外运营商业务模式，为产品优化、本地化策略和市场决策提供支持。",
        },
        {
          title: "教育咨询业务 0 到 1",
          role: "创始人",
          time: "2021.01 – 2023.06",
          description:
            "从 0 搭建教育咨询服务，完成课程产品、社群运营、内容获客和交付体系建设。通过知乎等渠道获得 4 篇阅读量过万文章，累计完成 150+ 付费咨询，好评率 100%；运营 1500+ 人社群，为 1000+ 用户提供教学服务，并管理 20+ 人团队推进产品迭代。",
        },
        {
          title: "上海华都建筑规划设计有限公司",
          role: "建筑师项目助理",
          time: "2020.06 – 2022.03",
          description:
            "参与建筑设计与规划项目，负责模型与图纸制作、建筑摄影、跨团队沟通与外部合作方协调，将概念方案推进为可汇报、可交付的设计成果。",
        },
      ],
    },
    supplementalExperience: {
      title: "补充经历",
      items: [
        {
          title: "上海时装周 Autumn Showroom",
          role: "品牌助理",
          time: "2026.03",
          paragraphs: [
            "参与 VINZOO 品牌在上海时装周 Autumn Showroom 的现场执行，完成展前品牌与流程培训，了解订货展厅与买手店订货流程，包括折扣倍率、提货地点、物流关税等基础机制。",
            "负责样衣整理、陈列布置与搭配熟悉；现场协助买手接待、模特搭配展示与展示图拍摄，支持品牌方完成商品展示与买手沟通。",
            "活动后整理买手选款信息与款式表格，并完成样衣打包寄送，支持从现场展示到后续交付的执行闭环。",
          ],
        },
      ],
    },
    research: {
      title: "研究与分析",
      items: [
        {
          title: "机器学习与市场趋势预测",
          description:
            "使用 Python 完成数据清洗、特征工程与 XGBoost 建模，并结合 SHAP 解释关键影响因素。",
        },
        {
          title: "房地产投资与资产价值分析",
          description:
            "使用市场比较法、DCF、WACC 与现金流模型，评估历史建筑与房地产资产的投资可行性。",
        },
        {
          title: "区域与财务分析",
          description:
            "基于 Eurostat 数据、LQ、HHI、Shift-share 与回归分析，研究区域经济结构；同时完成跨国企业财务指标对比。",
        },
        {
          title: "供应链与运营优化",
          description:
            "结合供应链、生产管理与企业运营案例，使用 ABC 分析、风险矩阵与库存补货机制评估资源配置与运营风险。",
        },
      ],
    },
    education: {
      title: "教育背景",
      items: [
        { school: "米兰理工大学", meta: "2022.09 – 2025.07｜建筑环境管理经济方向｜硕士" },
        { school: "瑞典皇家理工学院", meta: "2025.01 – 2025.06｜交换学习" },
        { school: "淮阴工学院", meta: "2014.09 – 2019.06｜国际经济与贸易 / 建筑学｜本科" },
        { school: "台湾中华大学", meta: "2016.09 – 2017.01｜交换学习" },
      ],
    },
    capabilities: {
      title: "能力概览",
      groups: [
        {
          title: "产品与 AI",
          items: "AI 产品思考、用户研究、竞品分析、需求拆解、MVP 迭代、用户体验优化",
          tools: "工具：ChatGPT、Claude、DeepSeek、Gemini、Midjourney、Cursor、Codex、Axure",
        },
        {
          title: "数据与分析",
          items: "数据清洗、特征工程、机器学习建模、模型解释、回归分析、数据可视化",
          tools: "工具：Python（Pandas、NumPy、XGBoost、SHAP、Matplotlib）、SQL、Excel、Power BI、Tableau",
        },
        {
          title: "商业与策略",
          items: "市场研究、财务分析、DCF、WACC、商业模式分析、投资可行性分析",
          tools: "工具：Excel、PowerPoint、Word",
        },
        {
          title: "增长与运营",
          items: "内容运营、社群运营、品牌合作、品牌展示、内容拍摄支持、数据复盘、用户增长",
          tools: "平台与工具：小红书、知乎、Bilibili、抖音、TikTok、Instagram、剪映、Canva、Photoshop、InDesign",
        },
        {
          title: "项目推进",
          items: "跨团队沟通、外部合作、现场执行、物料管理、信息交付、预算控制、多任务管理",
          tools: "工具：Notion、Trello、Excel、PowerPoint、Word",
        },
      ],
    },
    contact: {
      title: "联系",
      body: "我目前关注 AI 产品、数据驱动决策、商业分析与增长策略相关机会，尤其是那些需要产品理解、市场判断和分析能力结合起来的岗位或项目。",
      email: "chenfan1949@163.com",
      github: "farinafo",
      instagram: "Instagram · farinafo",
    },
  },
  en: {
    metadata: {
      title: "Resume",
      description: "Education, experience, research, tools, and contact information.",
    },
    hero: {
      title: "Experience",
      description:
        "A concise overview of my work across AI products, data analysis, business research, growth operations, and cross-cultural project execution.",
      tags: ["AI Product", "Data Analysis", "Growth", "Business Strategy", "Cross-Cultural Work"],
    },
    profile: {
      title: "Profile",
      paragraphs: [
        "I have a master's background in Architecture, Built Environment and Management, with exchange study at KTH Royal Institute of Technology. My experience spans built environment, economic management, data analysis, and product practice. Rather than fitting into a single narrow function, I am better suited to problems that require product thinking, market understanding, data judgment, and cross-team execution at the same time.",
        "I focus on AI products, learning-efficiency tools, content growth, and data-driven decision making. I also hope to translate my background in real estate, urban assets, and business analysis into more concrete product and strategy capabilities.",
      ],
    },
    experience: {
      title: "Selected Experience",
      items: [
        {
          title: "Polimi Entrepreneurship Club",
          role: "Digital Content Operations & Brand Growth",
          time: "2022.12 – Present",
          description:
            "Independently operated accounts across Xiaohongshu, Zhihu, Bilibili, Douyin, and other platforms, covering content positioning, topic selection, scripting, shooting and editing, publishing, and data review. One post reached 400k+ views and around 15k likes/saves/interactions, and the content work attracted collaboration invitations from multiple technology, beauty, e-commerce, and platform brands.",
        },
        {
          title: "EESTEC",
          role: "Project Manager",
          time: "2023.03 – 2025.07",
          description:
            "Participated in and executed university open days, short study camps, global academic seminars, cultural activities, and international exchange projects. My work covered event planning, external communication, team collaboration, volunteer organization, budget control, and participant feedback collection, strengthening my cross-cultural collaboration and project execution skills.",
        },
        {
          title: "NetEase Games Overseas Business Unit",
          role: "Product & Market Intern",
          time: "2024.02 – 2024.04",
          description:
            "Conducted competitor analysis, user-feedback review, and market research for overseas gaming utility products. I analyzed negative reviews and user pain points for competitors such as GearUp and ExitLag, processed Trustpilot text and regional network indicators, and researched overseas operators such as Open Fiber and EOLO to support product optimization, localization strategy, and market decisions.",
        },
        {
          title: "Education Consulting Service 0-to-1",
          role: "Founder",
          time: "2021.01 – 2023.06",
          description:
            "Built an education consulting service from scratch, including course products, community operations, content-based acquisition, and delivery workflows. Through channels such as Zhihu, I produced 4 articles with 10k+ reads, completed 150+ paid consultations with a 100% positive-review rate, operated a 1,500+ member community, served 1,000+ users through teaching support, and managed a 20+ person team to push product iteration forward.",
        },
        {
          title: "Shanghai Huadu Architecture & Planning Design",
          role: "Architectural Project Assistant",
          time: "2020.06 – 2022.03",
          description:
            "Participated in architectural design and planning projects, supporting model making, drawing production, architectural photography, cross-team communication, and external partner coordination. I helped turn conceptual schemes into presentable and deliverable design outputs.",
        },
      ],
    },
    supplementalExperience: {
      title: "Additional Experience",
      items: [
        {
          title: "Shanghai Fashion Week Autumn Showroom",
          role: "Brand Assistant",
          time: "2026.03",
          paragraphs: [
            "Supported on-site execution for VINZOO at Shanghai Fashion Week Autumn Showroom and completed pre-event brand and process training.",
            "Assisted with sample organization, display setup, buyer reception, model styling presentation, and product-photo support.",
            "After the event, organized buyer selection information and style sheets, then supported sample packing and delivery follow-up.",
          ],
        },
      ],
    },
    research: {
      title: "Research & Analysis",
      items: [
        {
          title: "Machine Learning & Market Trend Forecasting",
          description:
            "Used Python for data cleaning, feature engineering, and XGBoost modeling, with SHAP used to explain key influencing factors.",
        },
        {
          title: "Real Estate Investment & Asset Valuation",
          description:
            "Used market comparison, DCF, WACC, and cash-flow modeling to evaluate the investment feasibility of historic and real estate assets.",
        },
        {
          title: "Regional & Financial Analysis",
          description:
            "Used Eurostat data, LQ, HHI, Shift-share, and regression analysis to study regional economic structure, alongside financial indicator comparison for multinational companies.",
        },
        {
          title: "Supply Chain & Operations Optimization",
          description:
            "Applied ABC analysis, risk matrices, and inventory replenishment logic to evaluate resource allocation and operational risk.",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          school: "Politecnico di Milano",
          meta: "2022.09 – 2025.07 | Architecture, Built Environment and Management | Master",
        },
        { school: "KTH Royal Institute of Technology", meta: "2025.01 – 2025.06 | Exchange Study" },
        {
          school: "Huaiyin Institute of Technology",
          meta: "2014.09 – 2019.06 | International Economics and Trade / Architecture | Bachelor",
        },
        { school: "Chung Hua University", meta: "2016.09 – 2017.01 | Exchange Study" },
      ],
    },
    capabilities: {
      title: "Capabilities",
      groups: [
        {
          title: "Product & AI",
          items: "AI product thinking, user research, competitor analysis, requirement breakdown, MVP iteration, UX optimization",
          tools: "Tools: ChatGPT, Claude, DeepSeek, Gemini, Midjourney, Cursor, Codex, Axure",
        },
        {
          title: "Data & Analysis",
          items: "Data cleaning, feature engineering, machine-learning modeling, model interpretation, regression analysis, data visualization",
          tools: "Tools: Python (Pandas, NumPy, XGBoost, SHAP, Matplotlib), SQL, Excel, Power BI, Tableau",
        },
        {
          title: "Business & Strategy",
          items: "Market research, financial analysis, DCF, WACC, business-model analysis, investment feasibility analysis",
          tools: "Tools: Excel, PowerPoint, Word",
        },
        {
          title: "Growth & Operations",
          items: "Content operations, community operations, brand collaboration, brand display, content-shoot support, data review, user growth",
          tools: "Platforms & tools: Xiaohongshu, Zhihu, Bilibili, Douyin, TikTok, Instagram, CapCut, Canva, Photoshop, InDesign",
        },
        {
          title: "Project Execution",
          items: "Cross-team communication, external collaboration, on-site execution, material management, information delivery, budgeting, multitasking",
          tools: "Tools: Notion, Trello, Excel, PowerPoint, Word",
        },
      ],
    },
    contact: {
      title: "Contact",
      body: "I am currently interested in opportunities around AI products, data-informed decision making, business analysis, and growth strategy.",
      email: "chenfan1949@163.com",
      github: "farinafo",
      instagram: "Instagram · farinafo",
    },
  },
};
