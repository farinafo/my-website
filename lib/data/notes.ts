export interface Note {
  id: string;
  title: string;
  summary: string;
  content: string;
  date?: string;
  tags?: string[];
}

export const notes: Note[] = [
  {
    id: "coursesnap-note",
    title: "CourseSnap：从自动截取 PPT，到 PDF 整理，再到 AI 总结",
    date: "2026-04-22",
    summary: "从自动截图的小工具，到完整学习流程产品的一次真实产品迭代过程。",
    tags: ["AI产品", "产品思考", "工具实践"],
    content: `CourseSnap 这个项目，最开始并不是为了做一个完整的 AI 产品。

它的起点其实非常简单：我在上网课或者看回放的时候，不想再手动一张张截图 PPT 了。

很多网课平台不能直接下载课件，而手动截图既低效又容易漏页。所以我最初做的，只是一个工具：自动检测 PPT 页面变化，并自动保存截图。

---

## 1. 起点：自动截图

第一版的核心非常简单：

自动检测页面变化 -> 自动截图 -> 保存到文件夹

这个阶段，我解决的只是“如何更高效获取课件”。

---

## 2. 第一版流程：截图 + OCR + AI

一开始我就有 AI 总结的想法，所以第一版是：

截图 -> OCR逐张识别 -> 文本 -> AI总结

这里 OCR 是针对每一张图片，而不是 PDF。

但很快出现问题。

---

## 3. 为什么放弃 OCR

OCR 的问题：

- 识别不稳定（乱码、漏字）
- PPT结构丢失
- 内容顺序混乱
- AI输入质量下降

让我意识到：

问题不是“提取文字”，而是“保留信息”

---

## 4. 关键迭代：PDF

截图多了以后，我发现：

图片太散本身就是问题

于是加入：

截图 -> 一键合成 PDF

带来的变化：

- 保留结构
- 更好阅读
- 更适合 AI 输入

---

## 5. PDF 也是独立工具

我没有把 PDF 限制为流程的一部分，而是支持：

- 任意图片导入
- 独立生成 PDF

做了模块解耦

---

## 6. AI 总结升级：PDF + 逐字稿

AI 一直存在，但输入变了：

初版：OCR文本

优化：PDF + 逐字稿

逐字稿来源：

- 平台下载
- 或复制到 Word

最终流程：

截图 -> PDF -> PDF + 逐字稿 -> AI总结

---

## 7. 逐字稿设计

逐字稿不是自动获取，而是：

- 手动放入文件夹
- 一键打开文件夹
- 自动检测 PDF + TXT/DOCX
- 缺失弹窗提醒

半自动设计：低成本 + 高质量

---

## 8. AI 功能定位

AI 需要 API Key（首次输入）

但不是必须：

用户可以用外部 AI 完成

所以它是：

增强功能，而不是门槛

---

## 9. 交互设计

我做了基础优化：

- 黄色主按钮 -> 引导操作
- 圆角UI -> 降低技术感
- 弹窗反馈 -> 减少不确定性

目标：

不用学习也能用

---

## 10. 中英文版本

后期做了中英文版本，让产品表达更清晰：

自动截图 + PDF + AI总结

---

## 11. 工具与工作方式

这是一个 AI-native 开发过程：

- ChatGPT：产品讨论、方案推演
- Cursor：前期开发
- Windsurf：中间切换
- Codex：后期开发与网站集成
- Python / PowerShell：运行调试
- GitHub：项目整理

我在不同工具之间切换，而不是依赖单一平台。

---

## 12. 总结

这个项目让我意识到：

产品不是不断加功能，而是不断做取舍

以及：

在 AI 时代，输入和流程，比模型更重要

---

## 结语

CourseSnap 从一个自动截图工具，变成了一个完整学习流程产品。

它不是设计出来的，而是在使用和迭代中“长出来的”。`,
  },
  {
    id: "cross-border-travel-market-notes",
    title: "从自由行内容到跨境增长：旅行市场观察",
    date: "2026-05-06",
    summary:
      "把个人旅行经验、小红书内容反馈和跨文化观察，整理成面向海外运营、旅行平台与品牌出海的市场分析框架。",
    tags: ["跨境增长", "旅行市场", "内容运营", "用户洞察"],
    content: `## 1. 为什么关注这个问题

我自己的旅行经验比较多，既包括国内目的地，也包括海外自由行。对我来说，旅行不只是消费经历，也是一种高密度的用户研究场景：人在陌生城市里如何做决策、如何建立信任、如何筛选信息、如何被内容影响，都会非常具体地暴露出来。

同时，我在小红书等内容平台长期发布和观察旅行相关内容。旅行内容的收藏、评论和私信反馈，往往能反映用户在真实决策前最关心的问题：安全、路线、预算、交通、审美、住宿、打卡价值、文化理解和避坑信息。

## 2. 可以服务哪些岗位

这类经验可以转化为三类岗位能力。

- 海外运营：理解不同市场用户如何获取信息、比较方案和建立信任。
- 旅行平台 / 文旅产品：把目的地经验转化为路线、内容专题、用户决策工具和服务产品。
- 品牌出海 / 跨境电商：用内容平台观察用户兴趣、消费场景和种草路径，支持选品、内容和渠道策略。

## 3. 分析框架

我会把旅行内容拆成四层。

第一层是目的地选择：用户为什么想去这里，是因为价格、签证、文化、美学、社交传播，还是某种生活方式想象。

第二层是决策阻力：用户真正担心的是什么，例如交通复杂、安全不确定、语言障碍、预算不可控、信息太碎片化。

第三层是内容触发：什么样的内容更容易被收藏或转发，是路线攻略、真实体验、审美图片、花费清单，还是具体避坑。

第四层是商业转化：内容能否进一步连接到路线产品、酒店、当地体验、品牌合作、旅行装备或跨境消费。

## 4. 关键观察

旅行内容的价值不只在于展示目的地，而在于降低用户决策成本。好的内容往往会同时回答三个问题：这里值不值得去、怎么去更顺、我去了以后能获得什么样的体验。

从内容反馈看，高收藏内容通常更接近“决策工具”而不是单纯图文分享。用户会保存路线、预算、交通、住宿、避坑和季节信息，因为这些内容能直接帮助他们完成一次真实出行。

## 5. 产品与增长机会

如果把旅行内容进一步产品化，可以形成几类机会：

- 目的地决策内容：帮助用户在多个城市、季节和预算方案之间做选择。
- 路线与服务组合：把交通、住宿、景点、餐饮和本地体验组合成更清晰的行程方案。
- 文化内容转译：把建筑、历史、美术和地方文化转化为更容易理解的旅行叙事。
- 跨境消费连接：在旅行装备、酒店、当地体验和生活方式品牌之间建立内容转化路径。

这类场景非常依赖信任、内容质量和本地化理解，也适合用 AI 辅助完成信息整理、评论聚类、多语言表达和个性化推荐。`,
  },
  {
    id: "meazza-smart-stadium-strategy",
    title: "Meazza 智能球场策略观察",
    date: "2024-04-22",
    summary:
      "分析体育场更新如何结合城市基础设施、商业收入、可持续设计和公共价值。",
    tags: ["智慧基建", "体育商业", "城市策略"],
    content: `## 1. 为什么关注这个问题

体育场不只是比赛场地，它也是城市基础设施、商业空间、公共活动平台和品牌资产。传统体育场往往存在使用频率低、运营收入单一、维护成本高等问题，因此新一代球场更新越来越强调多功能、数字化和可持续运营。

我关注这个案例，是因为它连接了城市更新、体育商业、智慧基础设施和用户体验。一个球场能否成功，不只取决于建筑本身，而取决于它能否在非比赛日也持续创造价值。

## 2. 使用的分析框架

这个分析主要从商业模式、城市功能、可持续策略和用户体验四个角度展开。

商业模式部分关注票务、商业租赁、餐饮、活动、演唱会和品牌合作等收入来源。城市功能部分关注球场与交通、公共空间和周边片区的关系。可持续策略关注能源效率、材料使用和长期运营成本。用户体验则关注观众动线、数字服务、沉浸式体验和多场景使用。

## 3. 关键发现

智能球场的价值不在于简单加入技术设备，而在于通过技术和空间运营提高资产使用效率。比赛日提供观赛体验，非比赛日提供商业、文化、娱乐和公共活动空间，才能让体育场从单一设施变成城市级复合资产。

这个案例也说明，体育基础设施的更新需要同时考虑商业回报和公共价值。如果只追求商业化，容易削弱城市公共性；如果只强调公共属性，又可能缺乏可持续运营能力。

## 4. 对我的启发

这个案例让我理解了“空间资产产品化”的思路。一个大型基础设施也可以像产品一样思考：目标用户是谁，使用场景是什么，核心价值如何被持续交付，收入模型如何支撑长期运营。

这对我理解商业产品也有帮助。无论是数字产品还是空间产品，真正重要的都是让资源、用户和场景之间形成稳定循环。`,
  },
  {
    id: "energy-policy-mca-decision-analysis",
    title: "能源政策 MCA 决策分析",
    date: "2024-03-26",
    summary:
      "使用多准则决策分析方法比较不同能源政策路径，理解政策选择中的经济、环境与社会权衡。",
    tags: ["能源政策", "MCA", "决策分析"],
    content: `## 1. 为什么关注这个问题

能源政策不是简单的技术选择，而是经济成本、环境影响、社会接受度和长期可持续性之间的权衡。不同政策路径往往各有优势，也各有代价，因此很难只用单一指标判断“哪个最好”。

我关注这个案例，是因为它体现了真实决策中的复杂性。很多时候，决策者面对的不是一个绝对正确的答案，而是需要在多个目标之间做取舍。MCA 多准则决策分析正适合用来处理这类问题。

## 2. 使用的分析框架

这个分析使用 MCA，也就是多准则决策分析。它的核心是先定义若干评价标准，再对不同方案进行比较，而不是只依据单一经济指标下结论。

评价维度可以包括能源成本、减排效果、实施难度、社会影响、政策可行性和长期稳定性等。通过把定性因素和定量因素放在同一个框架中比较，MCA 能帮助分析不同能源政策路径在多目标条件下的综合表现。

## 3. 关键发现

能源政策的难点不在于找到单一最优方案，而在于理解不同方案背后的权衡关系。例如，某些方案可能减排效果好，但成本高、落地周期长；另一些方案可能短期可行性更强，但长期环境收益有限。

这个分析让我看到，政策评估的重点不是简单排序，而是明确每个方案适合什么目标、承担什么代价、在什么条件下更有优势。真正有价值的决策分析，应该帮助决策者看清楚选择背后的逻辑。

## 4. 对我的启发

这个案例让我意识到，很多产品和商业决策其实也类似能源政策：都不是单目标优化，而是多目标权衡。用户体验、成本、增长、风险、技术复杂度之间，经常存在冲突。

因此，MCA 给我的启发不是某个具体能源结论，而是一种思考方法：在复杂问题里，先明确评价标准，再比较方案，而不是直接跳到答案。`,
  },
  {
    id: "cross-industry-supply-chain-strategy",
    title: "跨行业供应链策略观察",
    date: "2023-12-22",
    summary: "基于汽车、快时尚、科技与酒业案例，比较不同行业供应链结构、风险来源、响应速度与可持续策略差异。",
    tags: ["全球供应链", "跨行业分析", "运营策略"],
    content: `## 1. 为什么关注这个问题

供应链不是单纯的物流问题，而是连接产品、成本、风险、交付和商业模式的系统。汽车、快时尚、科技与酒业面对的供应链约束完全不同，因此很难用同一套标准判断它们的运营策略。

我关注这个主题，是因为供应链分析能帮助我理解企业背后的运营逻辑。一个公司是否具备长期竞争力，不只取决于产品本身，也取决于它能否稳定获得资源、控制成本、应对风险，并把供应链能力转化为商业优势。

## 2. 使用的分析框架

这个分析以多个行业案例为基础，比较它们在供应链结构、风险来源、响应速度、库存管理和可持续性方面的差异。

汽车行业关注全球零部件网络、供应链金融和原材料风险；快时尚行业关注需求预测、快速反应和库存周转；科技行业关注全球物流、供应安全、S&OP 和全球产能协同；酒业关注农业原料、天气风险、产区限制和长期库存周期。

## 3. 关键发现

不同产业不存在统一的“最佳供应链”，只有与商业模式匹配的供应链。高复杂度行业更依赖全球协同和风险管理，高时效行业更依赖快速反应和库存周转，资源依赖型行业更需要冗余和长期稳定性。

这个分析也说明，供应链策略本质上是在成本、速度、稳定性和风险之间做平衡。企业的供应链能力越成熟，越能在不确定环境下保持交付能力和商业韧性。

## 4. 对我的启发

这个主题让我意识到，商业分析不能只看市场前端，也要理解后台系统。用户看到的是产品和服务，但真正支撑体验的往往是供应链、运营流程、库存机制和风险管理。

这对我理解产品经理工作也有帮助。一个产品能否长期稳定运行，不只是界面和功能问题，也取决于背后的资源配置、流程设计和系统协同能力。`,
  },
  {
    id: "casa-viareggio-building-maintenance",
    title: "Casa Viareggio 建筑维护分析",
    date: "2023-12-15",
    summary:
      "基于历史住宅维护方案、value analysis 和成本估算，理解建筑资产长期运营与维护决策。",
    tags: ["建筑维护", "Value Analysis", "成本评估"],
    content: `## 1. 为什么关注这个问题

建筑资产的价值不只体现在建设和交易阶段，也体现在长期维护和运营阶段。尤其是历史住宅或老旧建筑，如果缺乏系统维护策略，很容易出现性能下降、成本失控和资产价值损失。

我关注这个案例，是因为它补充了我对房地产资产的理解。投资分析通常关注估值和回报，但建筑维护分析提醒我：资产能否长期保值，取决于它在使用周期中的维护、更新和成本控制。

## 2. 使用的分析框架

这个分析主要围绕建筑构件、维护方案、value analysis 和成本评估展开。

建筑构件层面关注墙体、屋顶、窗户、楼板等关键部位的性能问题。维护方案用于比较不同技术路径的可行性。Value analysis 则从成本、性能、耐久性和实施难度之间寻找平衡。成本评估帮助判断维护策略是否具备长期经济合理性。

## 3. 关键发现

建筑维护决策不能只看单次维修成本。某些方案短期投入较低，但可能导致后期维护频率增加；某些方案初始成本更高，却可能在耐久性、节能性和长期资产保护方面更有优势。

这个案例说明，建筑资产管理的关键是全生命周期思维。维护不是被动修补，而是主动管理资产性能、风险和长期价值。

## 4. 对我的启发

这个案例让我意识到，房地产和建筑资产的决策不能只停留在开发和投资阶段。真正成熟的资产判断，需要把建设、运营、维护、更新和退出都纳入考虑。

这也让我在看待项目时更关注长期成本和系统稳定性。无论是建筑资产还是数字产品，初始上线只是开始，后续维护、迭代和持续运营同样决定最终价值。`,
  },
  {
    id: "assolombarda-workplace-experience",
    title: "Assolombarda 办公空间体验优化",
    date: "2023-07-18",
    summary:
      "基于员工画像、工作流数据和用户旅程图，分析办公空间如何影响效率、协作和员工体验。",
    tags: ["用户体验", "办公空间", "Journey Map"],
    content: `## 1. 为什么关注这个问题

办公空间不是单纯的物理环境，它会影响员工的协作方式、专注效率、沟通质量和整体工作体验。尤其在混合办公成为常态之后，办公室的价值不再只是提供工位，而是要支持不同类型的工作场景。

我关注这个案例，是因为它和用户体验设计有明显关系。虽然对象是办公空间，但分析逻辑和产品设计类似：都需要理解用户是谁、他们在什么场景下遇到什么问题，以及如何通过系统设计改善体验。

## 2. 使用的分析框架

这个分析结合了 persona、工作流数据、用户旅程图和空间 zoning 策略。

Persona 用来定义不同员工类型和需求差异，例如通勤方式、到岗频率、工作内容和协作需求。工作流数据用于分析 individual work、collaborative work、online、hybrid 和 presence 等工作模式比例。Journey map 用来观察员工一天中的压力点、情绪变化和体验断点。Zoning 则把这些洞察转化为 productive area、quiet zone、hospitality area 和 break zone 等空间策略。

## 3. 关键发现

办公空间体验的核心，不是把空间设计得更“好看”，而是让不同工作任务找到合适的环境。需要专注时，员工需要安静和私密；需要协作时，需要灵活和开放；需要恢复精力时，也需要休息和社交空间。

这个项目说明，体验优化必须从真实行为出发，而不是从设计偏好出发。员工画像、工作节奏和情绪路径，比单纯的平面布局更能解释空间应该如何被组织。

## 4. 对我的启发

这个案例让我看到，用户体验并不只存在于 App 或网页里。只要一个系统中存在用户、任务、路径和痛点，就可以用体验设计的方法去分析和优化。

这对我理解 AI 产品也有启发：产品功能本身不等于体验，真正重要的是用户在具体场景中如何完成任务、哪里产生摩擦、什么设计能降低认知和操作成本。`,
  },
  {
    id: "berlin-regional-economy-structure",
    title: "柏林区域经济结构分析",
    date: "2023-05-22",
    summary:
      "基于 Eurostat 数据，使用 LQ、HHI、Shift-share 和回归分析理解柏林的产业结构与区域增长模式。",
    tags: ["区域经济", "Eurostat", "LQ-HHI"],
    content: `## 1. 为什么关注这个问题

城市和区域的发展并不是均衡发生的。一个城市的产业结构、就业分布和增长动力，会直接影响它的竞争力、抗风险能力和长期发展路径。柏林作为德国和欧洲的重要城市，本身具有明显的服务业和公共部门特征，因此适合用区域经济工具进行结构分析。

我关注这个案例，是因为它能帮助我理解“城市为什么会以某种方式增长”。相比只看 GDP 或就业总量，区域经济分析更重要的是解释：哪些产业构成了城市优势，哪些部门正在收缩，哪些变量可能真正影响区域增长。

## 2. 使用的分析框架

这个分析主要使用 Eurostat 数据，并结合 LQ、HHI、Shift-share 和回归分析。

LQ 用来判断某个产业在柏林是否相对集中，帮助识别区域专业化特征。HHI 用来观察产业集中度，判断经济结构是否过度依赖少数部门。Shift-share 分析用于拆解区域增长来源，区分增长来自整体经济趋势、产业结构优势，还是本地竞争力。回归分析则用于观察教育水平、就业率、人口密度等变量与区域 GDP 之间的关系。

## 3. 关键发现

柏林的经济结构更偏向服务业和公共部门，制造业比重相对较低，呈现出明显的后工业城市特征。这种结构使柏林在公共服务、创意经济和知识型产业方面具有优势，但也意味着它的增长逻辑与传统制造业城市不同。

从区域增长角度看，柏林的发展并不是单纯依赖某一个产业，而是由人口结构、教育资源、服务业基础和城市功能共同推动。区域经济分析的价值就在于，它能把“城市发展”从一个宏观概念拆解成更具体的产业、人口和空间变量。

## 4. 对我的启发

这个案例让我意识到，城市分析不能只看表面繁荣，也不能只看单一指标。一个地区是否具有长期潜力，需要同时看产业结构、增长来源、就业质量和空间功能。

这对我后续理解房地产、城市投资和市场选择也很有帮助。无论是判断一个物业、一个城市项目，还是一个区域市场，都需要先理解它背后的经济结构和增长动力。`,
  },
  {
    id: "seguin-island-urban-renewal",
    title: "Seguin Island 城市更新观察",
    date: "2023-05-19",
    summary:
      "从政府、开发商、反对组织和公共利益角度，分析 Seguin Island 城市更新项目中的利益冲突和策略选择。",
    tags: ["城市更新", "Stakeholder", "可持续"],
    content: `## 1. 为什么关注这个问题

城市更新项目往往不是单纯的开发问题，而是公共利益、商业利益、文化记忆和生态价值之间的冲突。Seguin Island 这类项目尤其典型，因为它涉及政府、开发商、居民、反对组织和未来使用者等多个利益相关方。

我关注这个案例，是因为城市更新中的争议本身很有价值。反对声音并不一定意味着项目失败，它也可能揭示了项目在公共性、透明度、环境影响或社会接受度上的潜在问题。

## 2. 使用的分析框架

这个分析主要使用 stakeholder analysis、SWOT 和 critical review。

Stakeholder analysis 用来识别不同参与方的目标、利益和冲突点。SWOT 用来分析项目的优势、劣势、机会和威胁。Critical review 则关注项目方案本身是否回应了公共空间、可持续性、文化保留和社会公平等问题。

## 3. 关键发现

Seguin Island 的核心问题不只是“如何开发一块城市土地”，而是如何平衡经济开发与公共价值。大型城市更新项目如果只强调商业回报和形象塑造，很容易忽视当地居民、公共空间和长期城市功能。

这个案例说明，城市项目的成功不能只用建筑形态或投资规模衡量。真正关键的是：项目是否形成可持续的城市功能，是否处理好各方利益，是否让公共性成为开发逻辑的一部分。

## 4. 对我的启发

这个案例让我意识到，任何复杂项目都需要先识别利益相关方。很多项目失败不是因为方案不够漂亮，而是因为没有理解谁会受影响、谁会反对、谁真正使用它。

这对产品和商业项目同样适用。用户、平台、合作方、监管者和商业目标之间经常存在张力，好的方案不是回避冲突，而是把冲突纳入设计和决策过程。`,
  },
  {
    id: "riwega-production-management-operations",
    title: "RIWEGA 生产管理与运营优化案例",
    date: "2022-12-21",
    summary: "基于 RIWEGA 建筑材料企业案例，分析其库存结构、核心产品补货趋势、生产模式、可持续供应链与风险管理问题。",
    tags: ["生产管理", "库存分析", "风险管理"],
    content: `## 1. 为什么关注这个问题

生产管理决定了企业如何把市场需求转化为稳定交付。相比前端市场分析，生产管理更关注库存、补货、产能、供应风险和运营效率。RIWEGA 作为建筑材料企业，其产品线、库存结构和生产策略能够很好地反映中小制造企业如何在服务水平、库存成本和风险控制之间做平衡。

我关注这个案例，是因为它补充了我对企业后台运营系统的理解。一个企业能否稳定满足客户需求，不只取决于产品本身，也取决于它是否能够合理安排库存、预测需求、控制补货节奏，并在不确定环境下保持供应能力。

## 2. 使用的分析框架

这个分析主要围绕 ABC-ABC 库存分析、核心产品月度趋势、生产模式判断、可持续供应链和风险管理展开。

ABC-ABC 分析用于识别对库存价值和消耗贡献最高的关键产品；核心产品月度趋势用于观察销售、库存和补货之间的匹配关系；生产模式分析用于区分 Make to Stock 和 Make to Order 的适用场景；可持续供应链部分关注 LCA、EPD 和材料研发；风险管理则用于识别原材料短缺、供应中断和突发事件对利润与交付的影响。

## 3. 关键发现

RIWEGA 的核心产品集中在 Eternity Comfort 等主要产品线，少数关键产品贡献了较高库存价值和消耗水平，因此需要更精细的需求预测和库存管理。对于 A-A 类核心产品，企业更适合通过提前补货和库存规划保证服务水平；而对于非核心或定制化产品，则更适合采用按订单生产的方式降低库存压力。

这个案例也显示，库存过高会造成资金冻结，库存不足又会影响交付能力。疫情期间的原材料短缺进一步说明，单纯依赖二级供应商并不足以应对系统性风险，企业需要更主动的安全库存、替代供应和风险预案。

## 4. 对我的启发

这个案例让我意识到，运营能力是商业模式能否成立的重要基础。市场前端看到的是产品和服务，但真正支撑客户体验的，是库存、产能、补货、供应商和风险管理等后台系统。

这对我理解产品经理工作也有启发。一个产品能否稳定交付，不只是功能设计问题，也取决于资源配置、流程设计和系统韧性。无论是数字产品还是实体业务，运营系统都是长期竞争力的一部分。`,
  },
  {
    id: "amazon-alibaba-financial-analysis",
    title: "Amazon vs Alibaba 财务分析",
    date: "2022-12-18",
    summary:
      "通过 ROA、ROE、利润率、周转率、流动性与资本结构等指标，对 Amazon 与 Alibaba 的经营表现进行对比分析。",
    tags: ["财务分析", "商业模式", "企业对比"],
    content: `## 1. 为什么关注这个问题

Amazon 和 Alibaba 都是平台型企业，但它们的增长逻辑、收入结构和资本使用方式并不完全相同。单看营收规模，很容易把它们理解为“电商巨头”的横向对比；但如果进一步拆到盈利能力、资产效率、流动性和资本结构，就能看到两家公司在商业模式和经营风险上的差异。

我关注这个案例，是因为财务指标不是孤立数字，而是企业战略和运营模式的结果。通过对 Amazon 与 Alibaba 的对比，可以更清楚地理解：同样是平台公司，不同市场环境、业务组合和投资节奏，会如何影响公司的财务表现。

## 2. 使用的分析框架

这个分析主要围绕四类财务能力展开：盈利能力、运营效率、流动性和资本结构。

盈利能力方面，我关注 ROA、ROE、利润率等指标，用来判断企业把资产和股东权益转化为收益的能力。运营效率方面，我比较资产周转率、库存周转和应收账款周期，观察企业资源使用效率。流动性方面，我关注 current ratio、quick ratio 和 cash flow ratio，判断企业短期偿债和现金流安全性。资本结构方面，我比较 debt/equity 和 debt coverage ratio，分析企业对债务融资的依赖程度和长期风险。

## 3. 关键发现

Amazon 在营收扩张和业务规模上表现突出，但它的商业模式需要持续投入物流、云服务、内容和基础设施，因此利润率和资本效率会受到投资周期影响。相比之下，Alibaba 的平台模式更轻，资产使用效率和现金流表现相对稳健，在部分财务指标上展现出更强的盈利弹性。

这个对比说明，企业规模增长并不必然等于财务质量更优。Amazon 更像是以长期基础设施和生态扩张换取未来增长空间，而 Alibaba 更体现平台型业务在资产效率和盈利能力上的优势。两者的差异，实际上反映了“重资产扩张型平台”和“轻资产平台型商业模式”之间的不同经营逻辑。

## 4. 对我的启发

这个案例让我意识到，财务分析的价值不是单纯判断哪个公司“更好”，而是理解指标背后的商业模式。ROE、利润率、现金流和负债结构，最终都指向一个问题：企业如何增长，以及这种增长是否可持续。

这也影响了我后来做产品和商业分析时的思考方式：一个项目是否值得做，不能只看表面的增长数据，还要看增长背后的成本结构、资源占用、现金流压力和长期回报。`,
  },

];

export function getNoteById(id: string): Note | undefined {
  return notes.find((note) => note.id === id);
}

export function getAllNotes(): Note[] {
  return notes;
}

const englishNoteCopy: Record<string, Pick<Note, "title" | "summary" | "content" | "tags">> = {
  "coursesnap-note": {
    title: "CourseSnap: From Slide Capture to PDF Organization and AI Summary",
    summary: "A real product iteration from a small screenshot utility to a learning-material workflow.",
    tags: ["AI Product", "Product Thinking", "Tool Practice"],
    content: `CourseSnap did not begin as a fully formed AI product.

It started with a very plain learning problem: when I was watching online courses or replay videos, I did not want to keep taking screenshots of every slide by hand.

Many course platforms do not allow users to download the original slide deck. Manual screenshots are slow, repetitive, and easy to miss. So the first version was simply a tool that detected slide changes and saved screenshots automatically.

---

## 1. Starting Point: Automatic Slide Capture

The first workflow was intentionally simple:

Detect slide changes -> capture screenshot -> save to folder

At this stage, I was only solving one problem: how to collect course materials more efficiently.

---

## 2. First Workflow: Screenshots + OCR + AI

I already had AI summarization in mind, so the first full workflow looked like this:

Screenshots -> OCR for each image -> text -> AI summary

OCR was applied to individual images rather than to a structured document.

The problems appeared quickly.

---

## 3. Why I Moved Away From OCR

OCR created several issues:

- Recognition was unstable, especially with garbled text or missing words
- Slide structure was lost
- Content order became messy
- The quality of the AI input dropped

That made me realize the real problem was not simply "extracting text."

The real problem was preserving information.

---

## 4. The Key Iteration: PDF

Once there were many screenshots, I noticed that scattered images had become a problem of their own.

So I added one-click PDF generation:

Screenshots -> one PDF

This changed the experience in three ways:

- The visual structure was preserved
- The material became easier to read
- The output became more suitable as AI input

---

## 5. PDF as an Independent Tool

I did not treat PDF generation only as an intermediate step.

I also supported:

- Importing any images
- Generating a PDF independently

This made the module useful even without the AI summary feature.

---

## 6. AI Summary Upgrade: PDF + Transcript

AI was always part of the idea, but the input changed.

Initial input: OCR text

Improved input: PDF + transcript

The transcript could come from:

- A platform download
- Text copied into a Word document

The final workflow became:

Screenshots -> PDF -> PDF + transcript -> AI summary

---

## 7. Transcript Design

The transcript is not fetched automatically.

Instead, the design asks the user to:

- Put the transcript file into the project folder
- Open the folder with one click
- Let the tool detect PDF + TXT/DOCX files automatically
- Receive a pop-up reminder if something is missing

This semi-automatic design keeps development cost low while preserving input quality.

---

## 8. How I Positioned the AI Feature

The AI feature requires an API key on first use.

But it is not mandatory.

Users can also take the PDF and transcript to an external AI tool.

So AI is an enhancement, not the entry barrier.

---

## 9. Interaction Design

I made a few basic interface decisions:

- A yellow primary button to guide the main action
- Rounded UI elements to reduce the "technical tool" feeling
- Pop-up feedback to reduce uncertainty

The goal was simple:

Users should be able to use it without learning the tool first.

---

## 10. Chinese and English Versions

Later, I added Chinese and English versions so the product expression would be clearer:

Automatic capture + PDF organization + AI summary

---

## 11. Tools and Working Style

This was an AI-native development process:

- ChatGPT for product discussion and solution exploration
- Cursor for early development
- Windsurf during the middle stage
- Codex for later development and website integration
- Python / PowerShell for running and debugging
- GitHub for organizing the project

I moved between tools instead of relying on a single platform.

---

## 12. Takeaway

This project taught me that product work is not about adding more and more features.

It is about making decisions and trade-offs.

It also reminded me that in the AI era, input quality and workflow design often matter more than the model itself.

---

## Closing

CourseSnap grew from an automatic screenshot utility into a complete learning-material workflow.

It was not designed perfectly from the beginning. It grew through use, friction, and iteration.`,
  },
  "cross-border-travel-market-notes": {
    title: "From Independent Travel Content to Cross-border Growth",
    summary:
      "A market-observation framework connecting travel experience, Xiaohongshu content feedback, and cross-cultural user insight for overseas operations and brand growth.",
    tags: ["Cross-border Growth", "Travel Market", "Content Operations", "User Insight"],
    content: `## 1. Why This Matters

My travel experience covers both domestic and international independent trips. I do not see travel only as consumption; I see it as a dense user-research context. When people make decisions in unfamiliar cities, their needs around trust, information filtering, route planning, safety, budget, aesthetics, and cultural understanding become very visible.

I have also observed and published travel-related content on platforms such as Xiaohongshu. Saves, comments, and private-message questions often reveal what users care about before they make a real travel decision: safety, itinerary logic, transportation, accommodation, budget, photo value, local culture, and practical risk avoidance.

## 2. Relevant Career Directions

This experience can support three types of roles.

- Overseas operations: understanding how users in different markets search, compare, trust, and convert.
- Travel platforms or cultural-tourism products: turning destination knowledge into routes, content topics, planning tools, or service products.
- Cross-border e-commerce and brand marketing: using content platforms to read user interest, consumption scenarios, seeding paths, and channel opportunities.

## 3. Analysis Framework

I would break travel content into four layers.

The first layer is destination choice: why users want to go somewhere, whether because of price, visa convenience, cultural identity, aesthetics, social media exposure, or lifestyle imagination.

The second layer is decision friction: what actually stops users from acting, such as transportation complexity, safety concerns, language barriers, uncertain budget, or fragmented information.

The third layer is content trigger: what type of content is more likely to be saved or shared, such as itinerary guides, first-hand experience, visual storytelling, budget breakdowns, or specific warnings.

The fourth layer is commercial conversion: whether content can connect to route products, hotels, local experiences, brand collaborations, travel gear, or cross-border consumption.

## 4. Key Observation

The value of travel content is not only showing a destination. It is reducing the user's decision cost. Strong content usually answers three questions at once: whether the place is worth visiting, how to plan the trip smoothly, and what kind of experience the user can expect.

From content feedback, highly saved travel posts often behave more like decision tools than simple visual sharing. Users save route plans, budgets, transport details, accommodation notes, seasonal timing, and risk-avoidance information because these details help them complete a real trip.

## 5. Product and Growth Opportunities

If travel content is further productized, several opportunities appear:

- Destination-decision content: helping users compare cities, seasons, budgets, and travel styles.
- Route and service bundles: combining transport, accommodation, attractions, food, and local experiences into clearer itinerary products.
- Cultural translation: turning architecture, history, art, and local culture into accessible travel narratives.
- Cross-border consumption links: connecting travel gear, hotels, local experiences, and lifestyle brands through content-led conversion.

These scenarios depend heavily on trust, content quality, and localization. They are also suitable for AI-assisted information organization, comment clustering, multilingual expression, and personalized recommendation.`,
  },
  "meazza-smart-stadium-strategy": {
    title: "Meazza Smart Stadium Strategy Observation",
    summary:
      "How stadium renewal can connect urban infrastructure, commercial revenue, sustainable design, and public value.",
    tags: ["Smart Infrastructure", "Sports Business", "Urban Strategy"],
    content: `## 1. Why I Looked at This Topic

A stadium is not only a place for matches. It is also urban infrastructure, commercial space, a public-event platform, and a brand asset.

Traditional stadiums often face low usage outside match days, limited revenue streams, and high maintenance costs. That is why a new generation of stadium renewal projects increasingly emphasizes multi-functionality, digital operations, and long-term sustainability.

I was interested in this case because it connects urban renewal, sports business, smart infrastructure, and user experience. Whether a stadium succeeds does not depend only on the building itself. It depends on whether the venue can continue to create value even when there is no match.

## 2. Analysis Framework

I looked at the case from four angles: business model, urban function, sustainability strategy, and user experience.

The business-model layer focuses on revenue sources such as ticketing, commercial leasing, food and beverage, events, concerts, and brand partnerships.

The urban-function layer looks at how the stadium connects with transport, public space, and the surrounding district.

The sustainability layer considers energy efficiency, material choices, and long-term operating cost.

The user-experience layer focuses on spectator flow, digital services, immersive experience, and multi-scenario use.

## 3. Key Findings

The value of a smart stadium is not created by simply adding technology.

Its value comes from using technology and spatial operations to improve asset utilization.

On match days, the stadium should deliver a strong spectator experience. On non-match days, it should support commercial, cultural, entertainment, and public activities. Only then can the stadium move from a single-purpose facility to a city-level mixed-use asset.

This case also shows that sports infrastructure renewal needs to consider commercial return and public value at the same time.

If the project only pursues commercialization, it may weaken the public character of the city. If it only emphasizes public value, it may lack the operating logic needed to sustain itself.

## 4. What It Taught Me

This case helped me understand the idea of productizing a spatial asset.

A large piece of infrastructure can also be analyzed like a product:

Who are the target users?

What are the usage scenarios?

How is core value delivered repeatedly?

How does the revenue model support long-term operation?

This also helps me think about digital products. Whether the product is physical or digital, what matters is building a stable loop between resources, users, and scenarios.`,
  },
  "energy-policy-mca-decision-analysis": {
    title: "Energy Policy MCA Decision Analysis",
    summary:
      "Using multi-criteria decision analysis to compare energy policy paths and understand economic, environmental, and social trade-offs.",
    tags: ["Energy Policy", "MCA", "Decision Analysis"],
    content: `## 1. Why I Looked at This Topic

Energy policy is not a simple technical choice. It is a trade-off between economic cost, environmental impact, social acceptance, and long-term sustainability.

Different policy paths usually have their own strengths and costs, so it is difficult to judge them with one single indicator.

I was interested in this case because it reflects the complexity of real decision-making. Decision makers often do not face one obviously correct answer. They need to choose between multiple goals. MCA, or multi-criteria decision analysis, is useful for this type of problem.

## 2. Analysis Framework

This analysis uses MCA as the core framework.

The idea is to define several evaluation criteria first, and then compare policy options against those criteria instead of relying on one economic metric.

Possible criteria include energy cost, emission reduction, implementation difficulty, social impact, policy feasibility, and long-term stability.

By placing qualitative and quantitative factors into the same framework, MCA helps compare how different energy policy paths perform under multiple objectives.

## 3. Key Findings

The difficulty of energy policy is not finding one perfect option.

The real difficulty is understanding the trade-offs behind each option.

For example, one path may deliver strong emission reduction but require high cost and a long implementation cycle. Another path may be more feasible in the short term but provide limited environmental benefit over time.

This analysis showed me that policy evaluation should not stop at ranking alternatives. It should clarify what each option is good for, what cost it carries, and under what conditions it becomes more attractive.

Good decision analysis should make the logic behind the choice visible.

## 4. What It Taught Me

Many product and business decisions are similar to energy policy.

They are rarely single-objective optimizations. User experience, cost, growth, risk, and technical complexity often conflict with one another.

For me, the value of MCA is not only about energy policy. It is a way of thinking:

In a complex problem, define the criteria before comparing options. Do not jump straight to the answer.`,
  },
  "cross-industry-supply-chain-strategy": {
    title: "Cross-Industry Supply Chain Strategy Observation",
    summary:
      "A comparison of supply chain structures, risk sources, response speed, and sustainability strategies across automotive, fast fashion, technology, and wine industries.",
    tags: ["Global Supply Chain", "Cross-Industry Analysis", "Operations Strategy"],
    content: `## 1. Why I Looked at This Topic

Supply chain is not just a logistics problem. It is a system that connects product, cost, risk, delivery, and business model.

Automotive, fast fashion, technology, and wine companies face very different supply chain constraints, so it is difficult to judge their operations with one universal standard.

I focused on this topic because supply chain analysis helps me understand the operating logic behind a company. Long-term competitiveness does not depend only on the product itself. It also depends on whether the company can secure resources, control cost, respond to risk, and turn supply chain capability into business advantage.

## 2. Analysis Framework

The analysis compares several industries across supply chain structure, sources of risk, response speed, inventory management, and sustainability.

The automotive industry depends on global component networks, supply chain finance, and raw-material risk management.

Fast fashion focuses on demand forecasting, fast response, and inventory turnover.

Technology companies need to manage global logistics, supply security, S&OP, and global capacity coordination.

The wine industry depends on agricultural materials, weather conditions, production-region limitations, and long inventory cycles.

## 3. Key Findings

There is no universal "best supply chain."

There is only a supply chain that matches the business model.

High-complexity industries rely more on global coordination and risk management. High-speed industries rely more on quick response and inventory turnover. Resource-dependent industries need more redundancy and long-term stability.

Supply chain strategy is fundamentally a balance between cost, speed, reliability, and risk.

The more mature a company's supply chain capability is, the better it can protect delivery and business resilience under uncertainty.

## 4. What It Taught Me

This topic reminded me that business analysis should not only look at the market-facing side.

Users see products and services, but the experience is often supported by supply chains, operating processes, inventory systems, and risk management.

This also matters for product management. Whether a product can run steadily over time is not only about interface and features. It also depends on resource allocation, process design, and system coordination.`,
  },
  "casa-viareggio-building-maintenance": {
    title: "Casa Viareggio Building Maintenance Analysis",
    summary:
      "Understanding long-term building asset operation and maintenance decisions through maintenance planning, value analysis, and cost estimation.",
    tags: ["Building Maintenance", "Value Analysis", "Cost Assessment"],
    content: `## 1. Why I Looked at This Topic

The value of a building asset does not only appear during construction or transaction. It also depends on long-term maintenance and operation.

This is especially true for historical housing and older buildings. Without a systematic maintenance strategy, they can suffer from declining performance, uncontrolled cost, and loss of asset value.

I focused on this case because it adds another layer to my understanding of real estate assets. Investment analysis often focuses on valuation and return, but building maintenance analysis reminds me that long-term value depends on how the asset is maintained, renewed, and managed during its life cycle.

## 2. Analysis Framework

The analysis focuses on building components, maintenance options, value analysis, and cost assessment.

At the component level, it looks at walls, roofs, windows, floors, and other critical parts of the building.

Maintenance options are compared to understand the feasibility of different technical paths.

Value analysis helps balance cost, performance, durability, and implementation difficulty.

Cost assessment helps judge whether a maintenance strategy makes long-term economic sense.

## 3. Key Findings

Maintenance decisions should not be based only on one-time repair cost.

Some options may look cheaper in the short term but lead to more frequent maintenance later. Other options may require higher initial investment but perform better in durability, energy efficiency, and long-term asset protection.

This case shows that building asset management requires life-cycle thinking.

Maintenance should not be passive repair. It should be active management of performance, risk, and long-term value.

## 4. What It Taught Me

This case reminded me that real estate and building-asset decisions should not stop at development or investment.

A mature asset judgment needs to consider construction, operation, maintenance, renewal, and exit.

It also made me pay more attention to long-term cost and system stability. Whether the asset is a building or a digital product, launch is only the beginning. Maintenance, iteration, and continuous operation shape the final value.`,
  },
  "assolombarda-workplace-experience": {
    title: "Assolombarda Workplace Experience Optimization",
    summary:
      "How workplace space can influence productivity, collaboration, and employee experience through personas, workflow data, and journey mapping.",
    tags: ["User Experience", "Workplace", "Journey Map"],
    content: `## 1. Why I Looked at This Topic

Workplace space is not only a physical environment. It affects how employees collaborate, focus, communicate, and experience work.

As hybrid work becomes normal, the value of the office is no longer just providing desks. It needs to support different types of work scenarios.

I was interested in this case because it is closely related to user experience design. Although the subject is office space, the logic is similar to product design: understand who the users are, what situations they face, what problems appear, and how system design can improve the experience.

## 2. Analysis Framework

The analysis combines personas, workflow data, user journey mapping, and zoning strategy.

Personas define different employee types and needs, including commute style, office frequency, work content, and collaboration needs.

Workflow data helps analyze the share of individual work, collaborative work, online work, hybrid work, and in-person work.

Journey mapping shows the stress points, emotional changes, and experience gaps during a working day.

Zoning turns these insights into spatial strategies such as productive areas, quiet zones, hospitality areas, and break zones.

## 3. Key Findings

The core of workplace experience is not making the office look better.

It is helping different tasks find the right environment.

When people need focus, they need quiet and privacy. When they need collaboration, they need flexible and open space. When they need recovery, they also need areas for rest and social connection.

This project shows that experience optimization should start from real behavior, not design preference.

Employee profiles, work rhythm, and emotional journeys explain spatial organization better than a floor plan alone.

## 4. What It Taught Me

This case helped me see that user experience does not only exist in apps or websites.

Whenever a system has users, tasks, paths, and pain points, experience-design methods can be used to analyze and improve it.

It also connects to AI product work. Product features do not equal experience. What matters is how users complete tasks in real scenarios, where friction appears, and what design can reduce cognitive and operational cost.`,
  },
  "berlin-regional-economy-structure": {
    title: "Berlin Regional Economic Structure Analysis",
    summary:
      "Using Eurostat data, LQ, HHI, Shift-share, and regression analysis to understand Berlin's industrial structure and regional growth pattern.",
    tags: ["Regional Economy", "Eurostat", "LQ-HHI"],
    content: `## 1. Why I Looked at This Topic

Cities and regions do not grow evenly.

A city's industrial structure, employment distribution, and growth drivers directly affect its competitiveness, resilience, and long-term development path.

Berlin is an important city in Germany and Europe, and it has a clear service-sector and public-sector profile. That makes it a good case for regional economic analysis.

I focused on this case because it helps explain why a city grows in a particular way. Instead of only looking at GDP or total employment, regional economic analysis asks more useful questions:

Which industries form the city's strengths?

Which sectors are shrinking?

Which variables may actually influence regional growth?

## 2. Analysis Framework

The analysis uses Eurostat data together with LQ, HHI, Shift-share, and regression analysis.

LQ helps identify whether an industry is relatively concentrated in Berlin, revealing regional specialization.

HHI helps observe industry concentration and whether the economy depends too much on a small number of sectors.

Shift-share analysis decomposes the sources of regional growth and separates national trend effects, industry-mix effects, and local competitiveness.

Regression analysis is used to explore how variables such as education level, employment rate, and population density relate to regional GDP.

## 3. Key Findings

Berlin's economy leans toward services and the public sector, while manufacturing takes a smaller share. This gives the city a clear post-industrial profile.

That structure gives Berlin advantages in public services, creative industries, and knowledge-based sectors. It also means that Berlin's growth logic is different from that of traditional manufacturing cities.

From a regional-growth perspective, Berlin does not rely on one single industry. Its development is shaped by population structure, education resources, service-sector foundation, and city functions together.

The value of regional economic analysis is that it turns "urban development" from a broad concept into specific industrial, demographic, and spatial variables.

## 4. What It Taught Me

This case reminded me that city analysis cannot rely on surface-level prosperity or a single metric.

To judge whether a region has long-term potential, we need to look at industrial structure, growth sources, employment quality, and spatial function together.

This also helps me think about real estate, urban investment, and market selection. Whether I am evaluating a property, an urban project, or a regional market, I first need to understand the economic structure and growth engine behind it.`,
  },
  "seguin-island-urban-renewal": {
    title: "Seguin Island Urban Renewal Observation",
    summary:
      "Analyzing stakeholder conflict and strategic choices in an urban renewal project from the perspectives of government, developers, opposition groups, and public interest.",
    tags: ["Urban Renewal", "Stakeholders", "Sustainability"],
    content: `## 1. Why I Looked at This Topic

Urban renewal is rarely just a development question.

It often involves conflict between public interest, commercial value, cultural memory, and ecological value.

Seguin Island is a typical case because it involves government, developers, residents, opposition groups, and future users.

I was interested in this case because disagreement in urban renewal is meaningful. Opposition does not necessarily mean a project is bad. It can reveal unresolved issues around publicness, transparency, environmental impact, or social acceptance.

## 2. Analysis Framework

This analysis uses stakeholder analysis, SWOT, and critical review.

Stakeholder analysis identifies the goals, interests, and conflicts of different actors.

SWOT is used to examine the project's strengths, weaknesses, opportunities, and threats.

Critical review asks whether the proposal responds to public space, sustainability, cultural preservation, and social equity.

## 3. Key Findings

The core issue of Seguin Island is not simply how to develop a piece of urban land.

The real question is how to balance economic development with public value.

Large urban renewal projects can easily overemphasize commercial return and visual image while overlooking local residents, public space, and long-term urban function.

This case shows that the success of an urban project cannot be measured only by architecture or investment scale.

The more important questions are:

Does it create sustainable urban functions?

Does it handle stakeholder interests properly?

Does it make public value part of the development logic?

## 4. What It Taught Me

This case reminded me that complex projects should begin with stakeholder identification.

Many projects fail not because the plan is unattractive, but because the plan does not understand who will be affected, who may oppose it, and who will actually use it.

The same applies to product and business projects. Users, platforms, partners, regulators, and commercial goals often create tension. A good solution does not avoid conflict. It brings conflict into the design and decision-making process.`,
  },
  "riwega-production-management-operations": {
    title: "RIWEGA Production Management and Operations Optimization Case",
    summary:
      "An operations case on inventory structure, replenishment trends, production modes, sustainable supply chain, and risk management in a building-materials company.",
    tags: ["Production Management", "Inventory Analysis", "Risk Management"],
    content: `## 1. Why I Looked at This Topic

Production management determines how a company turns market demand into stable delivery.

Compared with front-end market analysis, production management focuses more on inventory, replenishment, capacity, supply risk, and operating efficiency.

RIWEGA is a building-materials company, and its product lines, inventory structure, and production strategy are useful for understanding how a small or medium manufacturer balances service level, inventory cost, and risk control.

I focused on this case because it deepened my understanding of backend operating systems. Whether a company can meet customer demand reliably does not only depend on the product. It also depends on whether the company can plan inventory, forecast demand, control replenishment, and stay resilient under uncertainty.

## 2. Analysis Framework

The analysis focuses on ABC-ABC inventory analysis, monthly trends of core products, production-mode judgment, sustainable supply chain, and risk management.

ABC-ABC analysis identifies key products that contribute the most to inventory value and consumption.

Monthly trend analysis of core products looks at whether sales, inventory, and replenishment are aligned.

Production-mode analysis distinguishes when Make to Stock and Make to Order are more suitable.

The sustainable supply chain section looks at LCA, EPD, and material development.

Risk management identifies how raw-material shortages, supply disruption, and unexpected events affect profit and delivery.

## 3. Key Findings

RIWEGA's core products are concentrated in major product lines such as Eternity Comfort. A small number of key products contribute a high share of inventory value and consumption, so they require more precise demand forecasting and inventory control.

For A-A core products, the company should use early replenishment and inventory planning to protect service level.

For non-core or customized products, Make to Order can reduce inventory pressure.

The case also shows that excessive inventory freezes capital, while insufficient inventory harms delivery capability.

Raw-material shortages during the pandemic further show that relying only on secondary suppliers is not enough for systemic risk. Companies need more proactive safety stock, alternative sourcing, and contingency planning.

## 4. What It Taught Me

This case reminded me that operations capability is a foundation of whether a business model can work.

The customer sees the product and service, but the experience is supported by inventory, capacity, replenishment, suppliers, and risk management.

It also connects to product management. Stable delivery is not only a feature-design problem. It depends on resource allocation, process design, and system resilience.

Whether the business is digital or physical, the operating system is part of long-term competitiveness.`,
  },
  "amazon-alibaba-financial-analysis": {
    title: "Amazon vs Alibaba Financial Analysis",
    summary: "A comparison of profitability, efficiency, liquidity, and capital structure between Amazon and Alibaba.",
    tags: ["Financial Analysis", "Business Model", "Company Comparison"],
    content: `## 1. Why I Looked at This Topic

Amazon and Alibaba are both platform companies, but their growth logic, revenue structure, and use of capital are not the same.

If we only compare revenue scale, it is easy to see them simply as two e-commerce giants.

But once the analysis moves into profitability, asset efficiency, liquidity, and capital structure, the differences in business model and operating risk become much clearer.

I focused on this case because financial indicators are not isolated numbers. They are the result of strategy and operations.

By comparing Amazon and Alibaba, I could better understand how different market environments, business portfolios, and investment cycles shape financial performance.

## 2. Analysis Framework

The analysis focuses on four types of financial capability: profitability, operating efficiency, liquidity, and capital structure.

For profitability, I looked at ROA, ROE, and profit margin to understand how the companies convert assets and shareholder equity into earnings.

For operating efficiency, I compared asset turnover, inventory turnover, and receivables cycle to observe how efficiently resources are used.

For liquidity, I looked at current ratio, quick ratio, and cash-flow ratio to judge short-term debt-paying ability and cash-flow safety.

For capital structure, I compared debt/equity and debt coverage ratio to understand reliance on debt financing and long-term risk.

## 3. Key Findings

Amazon shows strong revenue expansion and business scale, but its model requires continuous investment in logistics, cloud services, content, and infrastructure. That investment cycle affects profit margin and capital efficiency.

Alibaba's platform model is lighter in assets. It shows stronger asset efficiency and relatively stable cash-flow performance in several indicators, reflecting the profitability flexibility of a platform business.

The comparison shows that scale growth does not automatically mean stronger financial quality.

Amazon is closer to an infrastructure-heavy platform that invests for future ecosystem expansion. Alibaba better reflects the asset-efficiency advantage of a lighter platform model.

The difference between the two companies is essentially the difference between a heavy-asset expansion platform and a lighter asset-based platform business model.

## 4. What It Taught Me

This case reminded me that the value of financial analysis is not simply deciding which company is "better."

Its value is understanding the business model behind the indicators.

ROE, margins, cash flow, and debt structure all point to one larger question:

How does the company grow, and is that growth sustainable?

This influenced how I later approached product and business analysis. Whether a project is worth doing cannot be judged only by visible growth data. We also need to understand the cost structure, resource use, cash-flow pressure, and long-term return behind that growth.`,
  },
};

function getEnglishFallback(note: Note): Note {
  return {
    ...note,
    title: note.title,
    summary: note.summary,
    tags: note.tags,
    content: `## Summary

This English note is a concise placeholder for the Chinese article. It keeps the same date, order, and topic structure so the English page can stay synchronized while detailed translation is refined later.`,
  };
}

export function getAllNotesLocalized(locale: "zh" | "en" = "zh"): Note[] {
  if (locale === "zh") return notes;
  return notes.map((note) => ({
    ...note,
    ...(englishNoteCopy[note.id] ?? getEnglishFallback(note)),
  }));
}
