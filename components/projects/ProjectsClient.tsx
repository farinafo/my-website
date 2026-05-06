"use client";

import { useCallback, useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HomeCanvasBackground } from "@/components/home/HomeCanvasBackground";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectSummaries, type ProjectSlug } from "@/lib/data/projects";

type ProjectSection = {
  id: "ai" | "data" | "growth";
  eyebrow: string;
  title: string;
  subtitle: string;
  slugs: ProjectSlug[];
  emphasis: "primary" | "standard" | "supporting";
};

const projectSections: ProjectSection[] = [
  {
    id: "ai",
    eyebrow: "主线能力",
    title: "人工智能产品",
    subtitle: "围绕 AI 产品设计、用户体验与实际落地的项目",
    slugs: ["coursesnap", "ai-cultural-visual-system"],
    emphasis: "primary",
  },
  {
    id: "data",
    eyebrow: "专业能力",
    title: "数据与投资",
    subtitle: "基于数据分析与建模的市场研究与投资决策项目",
    slugs: [
      "shanghai-house-price-forecasting",
      "casa-rossi-valuation",
      "monza-esports-hotel",
      "hedonic-price-regression",
      "cultural-asset-digital-commercialization",
    ],
    emphasis: "standard",
  },
  {
    id: "growth",
    eyebrow: "延展方向",
    title: "海外市场与跨境增长",
    subtitle: "内容增长、海外市场观察、商业化与用户运营实践",
    slugs: ["content-growth", "pre-master", "market-intelligence"],
    emphasis: "supporting",
  },
];

const pageCopy = {
  zh: {
    title: "实践作品",
    description:
      "用三条求职线理解我的能力结构：AI 产品与增长是主线，房地产与投资分析提供商业判断，海外市场与跨境增长补充内容、运营和国际用户理解。",
    filters: ["全部", "AI 产品增长", "投资分析", "跨境增长"],
  },
  en: {
    title: "Project Cases",
    description:
      "A compact view of my work across AI product and growth, real estate and investment analysis, and global market / cross-border growth.",
    filters: ["All", "AI Product Growth", "Investment Analysis", "Cross-border Growth"],
  },
};

const sectionCopy = {
  zh: {
    ai: {
      eyebrow: "主线能力",
      title: "AI 产品与增长",
      subtitle: "围绕 AI 产品设计、用户体验、内容增长与实际落地的项目",
    },
    data: {
      eyebrow: "第二主线",
      title: "房地产与投资分析",
      subtitle: "基于数据分析、估值建模与市场研究的资产和投资判断项目",
    },
    growth: {
      eyebrow: "延展方向",
      title: "海外市场与跨境增长",
      subtitle: "内容增长、海外市场观察、商业化与用户运营实践",
      noteCta: "阅读旅行市场观察",
      noteHref: "/notes",
    },
  },
  en: {
    ai: {
      eyebrow: "Core Direction",
      title: "AI Product & Growth",
      subtitle: "Projects around AI product design, user experience, content growth, and practical delivery.",
    },
    data: {
      eyebrow: "Second Track",
      title: "Real Estate & Investment Analysis",
      subtitle: "Asset and investment cases supported by data analysis, valuation modeling, and market research.",
    },
    growth: {
      eyebrow: "Extended Track",
      title: "Global Market & Cross-border Growth",
      subtitle: "Content growth, overseas market observation, commercialization, and user operations.",
      noteCta: "Read travel market notes",
      noteHref: "/en/notes",
    },
  },
};

const filterHrefs = ["#projects-all", "#ai", "#data", "#growth"];

function SectionHeader({ section, locale }: { section: ProjectSection; locale: "zh" | "en" }) {
  const copy = sectionCopy[locale][section.id];
  const noteLink =
    section.id === "growth"
      ? {
          label: locale === "en" ? "Read travel market notes" : "阅读旅行市场观察",
          href: locale === "en" ? "/en/notes" : "/notes",
        }
      : null;
  return (
    <div className="pt-5">
      <h2 className="font-serif text-2xl font-medium text-ink md:text-[2rem]">
        {copy.title}
      </h2>
      <p className="mt-4 max-w-measure text-sm leading-[1.9] text-muted md:text-base">
        {copy.subtitle}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="font-mono text-[0.68rem] font-semibold tracking-[0.2em] text-muted">
          {copy.eyebrow}
        </p>
        {noteLink ? (
          <a
            href={noteLink.href}
            className="border-b border-ink/25 font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-muted transition-colors hover:border-ink/60 hover:text-ink"
          >
            {noteLink.label}
          </a>
        ) : null}
      </div>
    </div>
  );
}

function ProjectSectionBlock({
  section,
  startIndex,
  projects,
  locale,
  basePath,
}: {
  section: ProjectSection;
  startIndex: number;
  projects: typeof projectSummaries;
  locale: "zh" | "en";
  basePath: string;
}) {
  const sectionProjects = section.slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  const gridClass =
    section.emphasis === "primary"
      ? "grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      : section.emphasis === "supporting"
        ? "grid gap-7 md:grid-cols-2 xl:grid-cols-3 [&_article]:opacity-90"
        : "grid gap-8 md:grid-cols-2 xl:grid-cols-3";

  return (
    <section id={section.id} className="scroll-mt-28">
      <Reveal>
        <SectionHeader section={section} locale={locale} />
      </Reveal>

      <div className={`mt-5 ${gridClass}`}>
        {sectionProjects.map((project, index) =>
          project ? (
            <Reveal key={project.slug} delay={index * 0.04}>
              <ProjectCard project={project} index={startIndex + index} basePath={basePath} />
            </Reveal>
          ) : null
        )}
      </div>
    </section>
  );
}

export function ProjectsClient({
  locale = "zh",
  projects = projectSummaries,
}: {
  locale?: "zh" | "en";
  projects?: typeof projectSummaries;
}) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const sectionStartIndexes = useMemo(() => {
    let cursor = 1;
    return projectSections.reduce<Record<ProjectSection["id"], number>>((acc, section) => {
      acc[section.id] = cursor;
      cursor += section.slugs.length;
      return acc;
    }, {} as Record<ProjectSection["id"], number>);
  }, []);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)),
      y: Math.max(0, Math.min(1, (e.clientY - r.top) / r.height)),
    });
  }, []);

  const onLeave = useCallback(() => {
    setMouse({ x: 0.5, y: 0.5 });
  }, []);
  const copy = pageCopy[locale];
  const basePath = locale === "en" ? "/en/projects" : "/projects";
  const titleClass =
    locale === "en"
      ? "text-[clamp(2.25rem,5.4vw,3.35rem)] leading-[1.18] tracking-normal"
      : "text-display-xs";

  return (
    <div className="relative isolate min-h-screen" onMouseMove={onMove} onMouseLeave={onLeave}>
      <HomeCanvasBackground mouseX={mouse.x} mouseY={mouse.y} />

      <Container size="wide" className="relative z-10 py-16 md:py-24">
        <header id="projects-all" className="scroll-mt-28">
          <Reveal>
            <div className="grid gap-8 border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:grid-cols-12 md:px-8 md:py-9">
              <div className="md:col-span-4">
                <h1 className={`font-serif font-medium text-ink ${titleClass}`}>
                  {copy.title}
                </h1>
              </div>
              <div className="md:col-span-8">
                <p className="max-w-measure-wide text-pretty text-sm leading-[1.95] text-muted md:text-base">
                  {copy.description}
                </p>
                <nav className="mt-7 flex flex-wrap gap-2" aria-label="项目分类筛选">
                  {copy.filters.map((label, index) => (
                    <a
                      key={filterHrefs[index]}
                      href={filterHrefs[index]}
                      className="border border-line/60 px-3 py-2 font-mono text-[0.68rem] tracking-[0.16em] text-muted transition-colors hover:border-ink/40 hover:text-ink"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Reveal>
        </header>

        <div className="mt-8 space-y-12 md:mt-10 md:space-y-14">
          {projectSections.map((section) => (
            <ProjectSectionBlock
              key={section.id}
              section={section}
              startIndex={sectionStartIndexes[section.id]}
              projects={projects}
              locale={locale}
              basePath={basePath}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
