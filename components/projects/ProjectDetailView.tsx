import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  getAllProjectSlugs,
  getProjectBySlugLocalized,
  type ProjectDetail,
  type ProjectSlug,
} from "@/lib/data/projects";

type Locale = "zh" | "en";

const caseLens: Record<ProjectSlug, { zh: string; en: string }> = {
  coursesnap: { zh: "AI 产品", en: "AI Product" },
  "ai-cultural-visual-system": { zh: "人工智能产品", en: "AI Visual System" },
  "shanghai-house-price-forecasting": { zh: "房价预测", en: "Housing Forecast" },
  "casa-rossi-valuation": { zh: "房地产投资", en: "Real Estate Investment" },
  "monza-esports-hotel": { zh: "可行性研究", en: "Feasibility Study" },
  "hedonic-price-regression": { zh: "计量分析", en: "Econometric Analysis" },
  "cultural-asset-digital-commercialization": { zh: "文化资产策略", en: "Cultural Asset Strategy" },
  "content-growth": { zh: "增长与洞察", en: "Growth & Insight" },
  "pre-master": { zh: "0 到 1 创业", en: "0-to-1 Venture" },
  "market-intelligence": { zh: "市场分析", en: "Market Analysis" },
};

type TextSectionKey = keyof Pick<
  ProjectDetail,
  "overview" | "problem" | "whatIDid" | "result" | "reflection"
>;

type DetailSection =
  | {
      id: string;
      key: TextSectionKey;
      kind: "text";
      title: string;
      label: string;
    }
  | {
      id: string;
      kind: "caseSection";
      title: string;
      label: string;
      body: string;
      bullets?: string[];
    }
  | {
      id: string;
      kind:
        | "analysisFlow"
        | "evidenceCards"
        | "decisionPoints"
        | "keyOutputs"
        | "interfaceWorkflow"
        | "userFlow"
        | "prdSummary"
        | "nextIterations"
        | "prototypeVisuals";
      title: string;
      label: string;
    };

const defaultSections: Record<Locale, DetailSection[]> = {
  zh: [
    { id: "section-overview", key: "overview", kind: "text", title: "背景", label: "背景" },
    { id: "section-problem", key: "problem", kind: "text", title: "问题", label: "问题" },
    { id: "section-work", key: "whatIDid", kind: "text", title: "方案或方法", label: "方法" },
    { id: "section-flow", kind: "analysisFlow", title: "分析流程", label: "分析流程" },
    { id: "section-result", key: "result", kind: "text", title: "结果", label: "结果" },
    { id: "section-outputs", kind: "keyOutputs", title: "关键输出", label: "关键输出" },
    { id: "section-reflection", key: "reflection", kind: "text", title: "复盘", label: "复盘" },
  ],
  en: [
    { id: "section-overview", key: "overview", kind: "text", title: "Background", label: "Background" },
    { id: "section-problem", key: "problem", kind: "text", title: "Problem", label: "Problem" },
    { id: "section-work", key: "whatIDid", kind: "text", title: "Approach", label: "Approach" },
    { id: "section-result", key: "result", kind: "text", title: "Outcome", label: "Outcome" },
    { id: "section-reflection", key: "reflection", kind: "text", title: "Reflection", label: "Reflection" },
  ],
};

const copy = {
  zh: {
    back: "返回项目页",
    caseLabel: "项目案例",
    summary: [
      { id: "summary-role", key: "role", label: "我的角色" },
      { id: "summary-phase", key: "phase", label: "项目阶段" },
      { id: "summary-outcome", key: "headlineOutcome", label: "关键结果" },
    ],
    lens: "项目视角",
    keywords: "关键词",
    reading: "阅读方式",
    readingCase: "先看主题结构与生成难点，再看提示词方法、视觉筛选与网页呈现。",
    readingDefault: "先看背景和问题，再看方法、结果与复盘。",
    evidence: "关键证据",
    prdSummary: "PRD 摘要",
    prototypeVisuals: "核心界面原型",
    interfaceWorkflow: "真实界面截图/输出",
    userFlow: "用户流程",
    nextIterations: "下一步迭代计划",
    decision: "判断逻辑",
    snapshot: "策略快照",
    toc: "目录",
    note: "记录",
    related: "延伸",
    reportTitle: "原始交付物",
    reportBody: "本页面为项目摘要版，完整研究过程与模型细节可查看原始报告。",
    reportCta: "查看完整报告",
    continue: "继续浏览",
    view: "查看",
    basePath: "/projects",
  },
  en: {
    back: "Back to Work",
    caseLabel: "Project Case",
    summary: [
      { id: "summary-role", key: "role", label: "Role" },
      { id: "summary-phase", key: "phase", label: "Stage" },
      { id: "summary-outcome", key: "headlineOutcome", label: "Key Outcome" },
    ],
    lens: "Lens",
    keywords: "Keywords",
    reading: "How to Read",
    readingCase: "Start with the theme structure and generation challenges, then move into prompt methods, visual selection, and web presentation.",
    readingDefault: "Start with the background and problem, then read the approach, outcome, and reflection.",
    evidence: "Key Evidence",
    prdSummary: "PRD Summary",
    prototypeVisuals: "Core Wireframe Prototype",
    interfaceWorkflow: "Product Interface & Real Outputs",
    userFlow: "User Flow",
    nextIterations: "Next Iteration Plan",
    decision: "Decision Logic",
    snapshot: "Strategy Snapshot",
    toc: "Contents",
    note: "Note",
    related: "Links",
    reportTitle: "Original Deliverable",
    reportBody: "This page is a concise case summary. The full report contains the research process and modeling details.",
    reportCta: "View Full Report",
    continue: "Continue Browsing",
    view: "View",
    basePath: "/en/projects",
  },
} satisfies Record<
  Locale,
  {
    back: string;
    caseLabel: string;
    summary: { id: string; key: keyof Pick<ProjectDetail, "role" | "phase" | "headlineOutcome">; label: string }[];
    lens: string;
    keywords: string;
    reading: string;
    readingCase: string;
    readingDefault: string;
    evidence: string;
    prdSummary: string;
    prototypeVisuals: string;
    interfaceWorkflow: string;
    userFlow: string;
    nextIterations: string;
    decision: string;
    snapshot: string;
    toc: string;
    note: string;
    related: string;
    reportTitle: string;
    reportBody: string;
    reportCta: string;
    continue: string;
    view: string;
    basePath: string;
  }
>;

const getSections = (project: ProjectDetail, locale: Locale): DetailSection[] => {
  const baseSections =
    locale === "zh" && project.caseSections?.length
      ? project.caseSections.map((section) => ({
        ...section,
        kind: "caseSection" as const,
      }))
      : defaultSections[locale].filter((section) => {
        if (section.kind === "analysisFlow") return Boolean(project.analysisFlow?.length);
        if (section.kind === "keyOutputs") return Boolean(project.keyOutputs?.length);
        return true;
      });
  const sections = [...baseSections];
  const insertAfterIndex = Math.max(
    sections.findIndex((section) => section.id === "section-flow"),
    sections.findIndex((section) => section.id === "section-work")
  );
  const insertAt = insertAfterIndex >= 0 ? insertAfterIndex + 1 : sections.length;

  const inserts: DetailSection[] = [];
  if (project.evidenceCards?.length) {
    inserts.push({
      id: "section-evidence",
      kind: "evidenceCards",
      title: copy[locale].evidence,
      label: copy[locale].evidence,
    });
  }
  if (project.decisionPoints?.length) {
    inserts.push({
      id: "section-decision",
      kind: "decisionPoints",
      title: copy[locale].decision,
      label: copy[locale].decision,
    });
  }

  if (project.userFlow?.length) {
    const mvpIndex = sections.findIndex((section) => section.id === "section-mvp");
    let userFlowInsertAt = mvpIndex >= 0 ? mvpIndex + 1 : insertAt;
    if (project.prdSummary?.length || project.prdTable) {
      sections.splice(userFlowInsertAt, 0, {
        id: "section-prd-summary",
        kind: "prdSummary",
        title: copy[locale].prdSummary,
        label: copy[locale].prdSummary,
      });
      userFlowInsertAt += 1;
    }
    sections.splice(userFlowInsertAt, 0, {
      id: "section-user-flow",
      kind: "userFlow",
      title: copy[locale].userFlow,
      label: copy[locale].userFlow,
    });
    userFlowInsertAt += 1;
    if (project.prototypeVisuals?.length) {
      sections.splice(userFlowInsertAt, 0, {
        id: "section-prototype-visuals",
        kind: "prototypeVisuals",
        title: copy[locale].prototypeVisuals,
        label: copy[locale].prototypeVisuals,
      });
      userFlowInsertAt += 1;
    }
    if (project.interfaceWorkflow?.length) {
      sections.splice(userFlowInsertAt, 0, {
        id: "section-interface-workflow",
        kind: "interfaceWorkflow",
        title: copy[locale].interfaceWorkflow,
        label: copy[locale].interfaceWorkflow,
      });
    }
  }
  if (project.nextIterations?.length) {
    sections.push({
      id: "section-next-iterations",
      kind: "nextIterations",
      title: copy[locale].nextIterations,
      label: copy[locale].nextIterations,
    });
  }

  sections.splice(insertAt, 0, ...inserts);
  return sections;
};

function Toc({ pageSections, locale }: { pageSections: DetailSection[]; locale: Locale }) {
  return (
    <nav className="space-y-1 border-l border-ink/[0.1] pl-5" aria-label={copy[locale].toc}>
      <p className="mb-4 font-mono text-[0.7rem] font-semibold tracking-[0.18em] text-muted">
        {copy[locale].toc}
      </p>
      {pageSections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-baseline gap-3 py-1.5 text-[0.95rem] text-muted transition-colors hover:text-ink"
        >
          <span className="font-mono text-[0.68rem] tabular-nums text-muted transition-colors group-hover:text-ink">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="leading-snug">{s.label}</span>
        </a>
      ))}
    </nav>
  );
}

export function ProjectDetailView({ project, locale = "zh" }: { project: ProjectDetail; locale?: Locale }) {
  const c = copy[locale];
  const lens = project.projectLens ?? caseLens[project.slug][locale];
  const keywordLine = project.tags.join(" / ");
  const pageSections = getSections(project, locale);
  const titleClass =
    locale === "en"
      ? "text-[clamp(2.25rem,5.4vw,3.35rem)] leading-[1.18] tracking-normal"
      : "text-display-xs";
  const otherProjects = getAllProjectSlugs()
    .filter((s) => s !== project.slug)
    .map((slug) => getProjectBySlugLocalized(slug as ProjectSlug, locale))
    .filter(Boolean) as ProjectDetail[];

  return (
    <article>
      <header className="border-b border-ink/[0.08] bg-wash">
        <Container size="wide" className="py-14 md:py-20 lg:py-24">
          <Link
            href={c.basePath}
            className="inline-flex items-center gap-2 font-mono text-[0.625rem] font-medium tracking-[0.2em] text-muted transition-colors duration-300 hover:text-ink"
          >
            <span aria-hidden>←</span>
            {c.back}
          </Link>

          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="lg:col-span-8">
              <p className="font-mono text-[0.72rem] font-semibold tracking-[0.2em] text-muted">
                {c.caseLabel}
              </p>
              <h1 className={`mt-4 max-w-[24rem] font-serif font-medium text-ink md:max-w-3xl ${titleClass}`}>
                {project.title}
              </h1>
              <p className="mt-8 max-w-measure-wide text-pretty text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
                {project.subtitle}
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {c.summary.map((item) => (
                  <div key={item.key} className="border border-line/40 bg-paper/70 px-5 py-5">
                    <p className="font-mono text-[0.68rem] font-semibold tracking-[0.15em] text-muted">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/85">{project[item.key]}</p>
                  </div>
                ))}
              </div>

              {project.caseTakeaways?.length ? (
                <div className="mt-6 border border-ink/[0.1] bg-paper/80 px-5 py-5 md:px-6">
                  <p className="font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-muted">
                    {c.snapshot}
                  </p>
                  <div className="mt-5 grid gap-5 md:grid-cols-3">
                    {project.caseTakeaways.map((item) => (
                      <div key={`${item.label}-${item.title}`} className="border-t border-ink/[0.08] pt-4">
                        <p className="font-mono text-[0.64rem] font-semibold tracking-[0.16em] text-muted">
                          {item.label}
                        </p>
                        <h2 className="mt-2 font-serif text-lg font-medium leading-snug text-ink">
                          {item.title}
                        </h2>
                        <p className="mt-3 text-sm leading-[1.75] text-muted">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <aside className="border-t border-ink/[0.08] pt-10 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-2">
              <dl className="space-y-8">
                <div>
                  <dt className="font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-muted">
                    {c.lens}
                  </dt>
                  <dd className="mt-2 font-serif text-lg text-ink">{lens}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-muted">
                    {c.keywords}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">{keywordLine}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-muted">
                    {c.reading}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {project.caseSections?.length ? c.readingCase : c.readingDefault}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </header>

      <Container size="wide" className="py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <Toc pageSections={pageSections} locale={locale} />
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="mx-auto max-w-measure-wide lg:mx-0">
              {false && project.prdSummary?.length ? (
                <Reveal>
                  <section className="mb-6 border-b border-ink/[0.07] pb-14 md:pb-16">
                    <div className="flex items-start gap-5 sm:gap-8">
                      <span className="w-9 shrink-0 pt-1 font-mono text-[0.72rem] font-semibold tabular-nums tracking-[0.1em] text-muted sm:w-10">
                        PRD
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                          <h2 className="font-serif text-xl font-medium text-ink md:text-2xl">
                            {c.prdSummary}
                          </h2>
                          <span className="hidden h-px flex-1 bg-ink/[0.12] sm:block sm:min-w-[4rem]" />
                        </div>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                          {project.prdSummary?.map((item) => (
                            <div
                              key={item.label}
                              className="border border-ink/[0.1] bg-paper/70 px-5 py-5"
                            >
                              <p className="font-mono text-[0.66rem] font-semibold tracking-[0.16em] text-muted">
                                {item.label}
                              </p>
                              {item.title ? (
                                <h3 className="mt-3 font-serif text-lg font-medium leading-snug text-ink">
                                  {item.title}
                                </h3>
                              ) : null}
                              {item.description ? (
                                <p className="mt-3 text-sm leading-[1.85] text-muted md:text-[0.9375rem]">
                                  {item.description}
                                </p>
                              ) : null}
                              {item.items?.length ? (
                                <ul className="mt-4 space-y-2.5">
                                  {item.items.map((point) => (
                                    <li
                                      key={point}
                                      className="text-sm leading-[1.75] text-muted md:text-[0.9375rem]"
                                    >
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                </Reveal>
              ) : null}

              {pageSections.map((s, i) => (
                <Reveal key={s.id} delay={i * 0.04}>
                  <section
                    id={s.id}
                    className="scroll-mt-28 border-b border-ink/[0.07] py-14 first:pt-0 last:border-0 md:py-16"
                  >
                    <div className="flex items-start gap-5 sm:gap-8">
                      <span className="w-9 shrink-0 pt-1 font-mono text-[0.72rem] font-semibold tabular-nums tracking-[0.1em] text-muted sm:w-10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                          <h2 className="font-serif text-xl font-medium text-ink md:text-2xl">
                            {s.title}
                          </h2>
                          <span className="hidden h-px flex-1 bg-ink/[0.12] sm:block sm:min-w-[4rem]" />
                        </div>
                        {s.kind === "text" ? (
                          <p className="mt-8 text-sm leading-[2] text-muted md:text-[0.9375rem]">
                            {project[s.key]}
                          </p>
                        ) : null}
                        {s.kind === "caseSection" ? (
                          <>
                            <p className="mt-8 text-sm leading-[2] text-muted md:text-[0.9375rem]">
                              {s.body}
                            </p>
                            {s.bullets?.length ? (
                              <ul className="mt-8 space-y-4">
                                {s.bullets.map((item) => (
                                  <li
                                    key={item}
                                    className="border-t border-ink/[0.07] pt-4 text-sm leading-[1.9] text-muted md:text-[0.9375rem]"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </>
                        ) : null}
                        {s.kind === "prdSummary" && (project.prdSummary?.length || project.prdTable) ? (
                          project.prdTable ? (
                            <div className="mt-8 overflow-hidden border border-ink/[0.1] bg-paper/70">
                              <div>
                                <table className="w-full table-fixed border-collapse text-left text-sm">
                                  <thead className="bg-ink/[0.04]">
                                    <tr>
                                      {project.prdTable.columns.map((column, columnIndex) => (
                                        <th
                                          key={column}
                                          className={
                                            columnIndex === 0 || columnIndex === 3
                                              ? "w-[18%] border-b border-ink/[0.08] px-3 py-3 font-mono text-[0.66rem] font-semibold tracking-[0.08em] text-muted sm:px-4 sm:text-[0.68rem]"
                                              : "w-[32%] border-b border-ink/[0.08] px-3 py-3 font-mono text-[0.66rem] font-semibold tracking-[0.08em] text-muted sm:px-4 sm:text-[0.68rem]"
                                          }
                                        >
                                          {column}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {project.prdTable.rows.map((row) => (
                                      <tr key={row.join("-")} className="border-b border-ink/[0.06] last:border-b-0">
                                        {row.map((cell, cellIndex) => (
                                          <td
                                            key={`${cell}-${cellIndex}`}
                                            className={
                                              cellIndex === 0
                                                ? "break-words px-3 py-4 font-serif text-sm font-medium leading-[1.55] text-ink sm:px-4 sm:text-base"
                                                : "break-words px-3 py-4 text-sm leading-[1.65] text-muted sm:px-4"
                                            }
                                          >
                                            {cell}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ) : (
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                              {project.prdSummary?.map((item) => (
                                <div
                                  key={item.label}
                                  className="border border-ink/[0.1] bg-paper/70 px-5 py-5"
                                >
                                  <p className="font-mono text-[0.66rem] font-semibold tracking-[0.16em] text-muted">
                                    {item.label}
                                  </p>
                                  {item.title ? (
                                    <h3 className="mt-3 font-serif text-lg font-medium leading-snug text-ink">
                                      {item.title}
                                    </h3>
                                  ) : null}
                                  {item.description ? (
                                    <p className="mt-3 text-sm leading-[1.85] text-muted md:text-[0.9375rem]">
                                      {item.description}
                                    </p>
                                  ) : null}
                                  {item.items?.length ? (
                                    <ul className="mt-4 space-y-2.5">
                                      {item.items.map((point) => (
                                        <li
                                          key={point}
                                          className="text-sm leading-[1.75] text-muted md:text-[0.9375rem]"
                                        >
                                          {point}
                                        </li>
                                      ))}
                                    </ul>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          )
                        ) : null}
                        {s.kind === "analysisFlow" && project.analysisFlow ? (
                          <div className="mt-8 space-y-5">
                            {project.analysisFlow.map((step, stepIndex) => (
                              <div
                                key={step.title}
                                className="grid gap-3 border-t border-ink/[0.07] pt-5 sm:grid-cols-[3.5rem_1fr]"
                              >
                                <span className="font-mono text-[0.68rem] font-semibold tabular-nums tracking-[0.12em] text-muted">
                                  {String(stepIndex + 1).padStart(2, "0")}
                                </span>
                                <div>
                                  <h3 className="font-serif text-base font-medium text-ink">{step.title}</h3>
                                  <p className="mt-2 text-sm leading-[1.9] text-muted md:text-[0.9375rem]">
                                    {step.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : null}
                        {s.kind === "interfaceWorkflow" && project.interfaceWorkflow ? (
                          <div className="mt-8 space-y-6">
                            <div className="grid gap-5 sm:grid-cols-[minmax(0,0.82fr)_minmax(0,1.42fr)]">
                              {project.interfaceWorkflow.slice(0, 2).map((item, itemIndex) => (
                                <figure key={item.image} className="min-w-0">
                                  <div className="flex h-[12.5rem] items-center justify-center overflow-hidden rounded-md border border-ink/[0.12] bg-paper shadow-[0_14px_36px_-30px_rgb(0_0_0/0.45)] md:h-[15.25rem]">
                                    <Image
                                      src={item.image}
                                      alt={`${s.title} ${itemIndex + 1}`}
                                      width={itemIndex === 0 ? 720 : 900}
                                      height={itemIndex === 0 ? 920 : 640}
                                      className="h-full w-full object-cover object-top"
                                      sizes={itemIndex === 0 ? "(min-width: 768px) 280px, 100vw" : "(min-width: 768px) 500px, 100vw"}
                                    />
                                  </div>
                                  <figcaption className="mt-3 text-sm leading-[1.75] text-muted md:text-[0.9375rem]">
                                    {item.caption}
                                  </figcaption>
                                </figure>
                              ))}
                            </div>

                            <div className="grid gap-5 sm:grid-cols-[0.9fr_1.08fr] sm:items-start">
                              <div className="grid gap-5">
                                {project.interfaceWorkflow.slice(2, 4).map((item, itemIndex) => (
                                  <figure
                                    key={item.image}
                                    className={
                                      itemIndex === 1
                                        ? locale === "en"
                                          ? "-mt-3 min-w-0 md:-mt-4"
                                          : "mt-8 min-w-0 md:mt-10"
                                        : "min-w-0"
                                    }
                                  >
                                    <div
                                      className={
                                        itemIndex === 0
                                          ? "flex items-center justify-center overflow-hidden rounded-md border border-ink/[0.12] bg-paper shadow-[0_14px_36px_-30px_rgb(0_0_0/0.45)]"
                                          : "flex items-center justify-center overflow-hidden rounded-md border border-ink/[0.12] bg-paper shadow-[0_14px_36px_-30px_rgb(0_0_0/0.45)]"
                                      }
                                    >
                                      <Image
                                        src={item.image}
                                        alt={`${s.title} ${itemIndex + 3}`}
                                        width={itemIndex === 0 ? 900 : 535}
                                        height={itemIndex === 0 ? 506 : 304}
                                        className="h-auto w-full object-contain"
                                        sizes="(min-width: 768px) 335px, 100vw"
                                      />
                                    </div>
                                    <figcaption className="mt-3 text-sm leading-[1.75] text-muted md:text-[0.9375rem]">
                                      {item.caption}
                                    </figcaption>
                                  </figure>
                                ))}
                              </div>

                              {project.interfaceWorkflow[4] ? (
                                <figure className="flex min-w-0 flex-col">
                                  <div className="flex items-start justify-center overflow-hidden rounded-md border border-ink/[0.12] bg-paper shadow-[0_14px_36px_-30px_rgb(0_0_0/0.45)]">
                                    <Image
                                      src={project.interfaceWorkflow[4].image}
                                      alt={`${s.title} 5`}
                                      width={900}
                                      height={778}
                                      className="h-auto w-full object-contain"
                                      sizes="(min-width: 768px) 420px, 100vw"
                                    />
                                  </div>
                                  <figcaption className="mt-3 text-sm leading-[1.75] text-muted md:text-[0.9375rem]">
                                    {project.interfaceWorkflow[4].caption}
                                  </figcaption>
                                </figure>
                              ) : null}
                            </div>
                          </div>
                        ) : null}
                        {s.kind === "userFlow" && project.userFlow ? (
                          <div className="mt-8 space-y-5">
                            {[project.userFlow.slice(0, 4), project.userFlow.slice(4)].map((row, rowIndex) => (
                              <div
                                key={`user-flow-row-${rowIndex}`}
                                className={
                                  row.length === 4
                                    ? "grid gap-3 md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)]"
                                    : "grid gap-3 md:grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)_2rem_minmax(0,1fr)]"
                                }
                              >
                                {row.map((step, stepIndex) => {
                                  const absoluteIndex = rowIndex === 0 ? stepIndex : stepIndex + 4;
                                  const isLastInRow = stepIndex === row.length - 1;

                                  return (
                                    <div key={`${step}-${absoluteIndex}`} className="contents">
                                      <div className="border border-ink/[0.1] bg-paper/70 px-4 py-4 md:min-h-[8rem]">
                                        <span className="font-mono text-[0.66rem] font-semibold tabular-nums tracking-[0.14em] text-muted">
                                          {String(absoluteIndex + 1).padStart(2, "0")}
                                        </span>
                                        <p className="mt-4 font-serif text-base font-medium leading-snug text-ink">
                                          {step}
                                        </p>
                                      </div>
                                      <div
                                        className={
                                          !isLastInRow
                                            ? "hidden items-center justify-center font-mono text-base text-muted md:flex"
                                            : "hidden md:block"
                                        }
                                        aria-hidden
                                      >
                                        {!isLastInRow ? "→" : null}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        ) : null}
                        {s.kind === "prototypeVisuals" && project.prototypeVisuals ? (
                          <div className="mt-8 space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div className="border border-ink/[0.1] bg-paper/70 px-5 py-5">
                                <p className="font-mono text-[0.66rem] font-semibold tracking-[0.16em] text-muted">
                                  原型图
                                </p>
                                <h3 className="mt-3 font-serif text-lg font-medium leading-snug text-ink">
                                  低保真 Figma 原型
                                </h3>
                                <p className="mt-3 text-sm leading-[1.85] text-muted md:text-[0.9375rem]">
                                  我用低保真原型先梳理主界面布局、按钮位置和关键弹窗，验证用户能否顺利从“开始录制”走到“AI 总结”。
                                </p>
                              </div>
                              <div className="border border-ink/[0.1] bg-paper/70 px-5 py-5">
                                <p className="font-mono text-[0.66rem] font-semibold tracking-[0.16em] text-muted">
                                  交互重点
                                </p>
                                <h3 className="mt-3 font-serif text-lg font-medium leading-snug text-ink">
                                  状态与异常先行
                                </h3>
                                <p className="mt-3 text-sm leading-[1.85] text-muted md:text-[0.9375rem]">
                                  我优先设计录制中、缺少逐字稿、输出完成等关键状态，确保用户在每一步都知道下一步该做什么。
                                </p>
                              </div>
                            </div>
                            {project.prototypeVisuals.map((item) => (
                              <figure key={item.image} className="min-w-0">
                                <div className="overflow-hidden rounded-md border border-ink/[0.12] bg-paper shadow-[0_14px_36px_-30px_rgb(0_0_0/0.45)]">
                                  <Image
                                    src={item.image}
                                    alt={s.title}
                                    width={1200}
                                    height={582}
                                    className="h-auto w-full object-contain"
                                    sizes="(min-width: 1024px) 760px, 100vw"
                                  />
                                </div>
                                <figcaption className="mt-3 text-sm leading-[1.75] text-muted md:text-[0.9375rem]">
                                  {item.caption}
                                </figcaption>
                              </figure>
                            ))}
                          </div>
                        ) : null}
                        {s.kind === "nextIterations" && project.nextIterations ? (
                          <div className="mt-8 space-y-4">
                            {project.nextIterations.map((item, itemIndex) => (
                              <div key={item.title} className="border-t border-ink/[0.07] pt-5">
                                <p className="font-mono text-[0.66rem] font-semibold tracking-[0.14em] text-muted">
                                  {String(itemIndex + 1).padStart(2, "0")}
                                </p>
                                <h3 className="mt-2 font-serif text-base font-medium text-ink">{item.title}</h3>
                                <p className="mt-2 text-sm leading-[1.9] text-muted md:text-[0.9375rem]">
                                  {item.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : null}
                        {s.kind === "evidenceCards" && project.evidenceCards ? (
                          <>
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                              {project.evidenceCards.map((card) => (
                                <div key={`${card.label}-${card.value}`} className="border border-ink/[0.1] bg-paper/70 px-5 py-5">
                                  <p className="font-mono text-[0.66rem] font-semibold tracking-[0.16em] text-muted">
                                    {card.label}
                                  </p>
                                  <p className="mt-3 font-serif text-2xl font-medium leading-tight text-ink">
                                    {card.value}
                                  </p>
                                  <p className="mt-3 text-sm leading-[1.85] text-muted md:text-[0.9375rem]">
                                    {card.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                            {project.evidenceVisuals?.length ? (
                              <div className="mt-6 grid gap-4">
                                {project.evidenceVisuals.map((visual) => (
                                  <div key={visual.title} className="border border-ink/[0.1] bg-paper/80 px-5 py-5 shadow-[0_18px_50px_-42px_rgb(0_0_0/0.35)]">
                                    <div className="grid gap-3 sm:grid-cols-[1fr_1.35fr] sm:items-start">
                                      <h3 className="font-serif text-lg font-medium leading-snug text-ink">{visual.title}</h3>
                                      <p className="text-sm leading-[1.75] text-muted">{visual.description}</p>
                                    </div>
                                    {visual.bars?.length ? (
                                      <div className="mt-6 space-y-4">
                                        {visual.bars.map((bar) => (
                                          <div key={bar.label}>
                                            <div className="mb-2 flex items-baseline justify-between gap-4">
                                              <span className="font-mono text-[0.68rem] font-semibold tracking-[0.12em] text-muted">
                                                {bar.label}
                                              </span>
                                              <span className="font-mono text-[0.68rem] text-ink/80">{bar.displayValue}</span>
                                            </div>
                                            <div className="h-3 overflow-hidden bg-ink/[0.08]">
                                              <div className="h-full bg-ink/75" style={{ width: `${Math.max(4, Math.min(100, bar.value))}%` }} />
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    ) : null}
                                    {visual.rows?.length ? (
                                      <div className="mt-6 grid gap-3">
                                        {visual.rows.map((row) => (
                                          <div key={row.label} className="grid gap-2 border border-ink/[0.08] bg-wash/45 px-4 py-3 sm:grid-cols-[8rem_1fr]">
                                            <p className="font-mono text-[0.68rem] font-semibold tracking-[0.12em] text-muted">
                                              {row.label}
                                            </p>
                                            <div>
                                              <p className="font-serif text-lg font-medium leading-snug text-ink">{row.value}</p>
                                              <p className="mt-1 text-sm leading-[1.7] text-muted">{row.note}</p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </>
                        ) : null}
                        {s.kind === "decisionPoints" && project.decisionPoints ? (
                          <div className="mt-8 space-y-4">
                            {project.decisionPoints.map((point) => (
                              <div key={point.title} className="border-t border-ink/[0.07] pt-5">
                                <h3 className="font-serif text-base font-medium text-ink">{point.title}</h3>
                                <p className="mt-2 text-sm leading-[1.9] text-muted md:text-[0.9375rem]">
                                  {point.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : null}
                        {s.kind === "keyOutputs" && project.keyOutputs ? (
                          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                            {project.keyOutputs.map((item) => (
                              <li
                                key={item}
                                className="border-t border-ink/[0.07] pt-3 text-sm leading-relaxed text-muted md:text-[0.9375rem]"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </section>
                </Reveal>
              ))}

              {project.noteUrl && project.noteLinkLabel ? (
                <Reveal delay={pageSections.length * 0.04}>
                  <section className="border-t border-ink/[0.07] py-12">
                    <div className="flex items-start gap-5 sm:gap-8">
                      <span className="w-9 shrink-0 pt-1 font-mono text-[0.72rem] font-semibold tabular-nums tracking-[0.1em] text-muted sm:w-10">
                        {c.note}
                      </span>
                      <div className="min-w-0 flex-1">
                        <Link
                          href={locale === "en" && project.noteUrl.startsWith("/") ? `/en${project.noteUrl}` : project.noteUrl}
                          className="inline-flex border border-ink/[0.14] px-4 py-2 text-sm leading-relaxed text-muted transition-colors hover:border-ink/40 hover:text-ink"
                        >
                          {project.noteLinkLabel}
                        </Link>
                      </div>
                    </div>
                  </section>
                </Reveal>
              ) : null}

              {project.relatedLinks?.length ? (
                <Reveal delay={pageSections.length * 0.04}>
                  <section className="border-t border-ink/[0.07] pt-10">
                    <div className="flex items-start gap-5 sm:gap-8">
                      <span className="w-9 shrink-0 pt-1 font-mono text-[0.72rem] font-semibold tabular-nums tracking-[0.1em] text-muted sm:w-10">
                        {c.related}
                      </span>
                      <div className="flex min-w-0 flex-1 flex-wrap gap-3">
                        {project.relatedLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex border border-ink/[0.14] px-4 py-2 text-sm leading-relaxed text-muted transition-colors hover:border-ink/40 hover:text-ink"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </section>
                </Reveal>
              ) : null}

              {project.reportUrl ? (
                <Reveal delay={pageSections.length * 0.04}>
                  <section className="border-t border-ink/[0.07] pt-10">
                    <div className="flex items-start gap-5 sm:gap-8">
                      <span className="w-9 shrink-0 pt-1 font-mono text-[0.72rem] font-semibold tabular-nums tracking-[0.1em] text-muted sm:w-10">
                        PDF
                      </span>
                      <div className="min-w-0 flex-1">
                        <h2 className="font-serif text-lg font-medium text-ink">{c.reportTitle}</h2>
                        <p className="mt-4 max-w-measure text-sm leading-[1.9] text-muted">{c.reportBody}</p>
                        <Link
                          href={project.reportUrl}
                          className="mt-5 inline-flex border border-ink/[0.14] px-4 py-2 font-mono text-[0.68rem] font-semibold tracking-[0.16em] text-muted transition-colors hover:border-ink/40 hover:text-ink"
                        >
                          {c.reportCta}
                        </Link>
                      </div>
                    </div>
                  </section>
                </Reveal>
              ) : null}
            </div>

            <Reveal className="mt-16 border-t border-ink/[0.08] pt-12 md:mt-20 md:pt-16">
              <p className="font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-muted">
                {c.continue}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`${c.basePath}/${p.slug}`}
                    className="group inline-flex items-baseline gap-3 font-serif text-lg text-ink transition-opacity hover:opacity-70"
                  >
                    <span className="font-mono text-[0.68rem] font-semibold tracking-[0.15em] text-muted transition-colors group-hover:text-ink">
                      {c.view}
                    </span>
                    {p.title}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </article>
  );
}
