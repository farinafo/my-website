"use client";

import { useCallback, useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HomeCanvasBackground } from "@/components/home/HomeCanvasBackground";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectSummaries, type ProjectSlug } from "@/lib/data/projects";

type ProjectSection = {
  id: "ai" | "data" | "growth";
  title: string;
  subtitle: string;
  slugs: ProjectSlug[];
  emphasis: "primary" | "standard" | "supporting";
};

const projectSections: ProjectSection[] = [
  {
    id: "ai",
    title: "人工智能产品",
    subtitle: "围绕 AI 产品设计、用户体验与实际落地的项目",
    slugs: ["ai-cultural-visual-system", "coursesnap"],
    emphasis: "primary",
  },
  {
    id: "growth",
    title: "海外市场与跨境增长",
    subtitle: "内容增长、海外市场观察、商业化与用户运营实践",
    slugs: ["content-growth", "market-intelligence", "pre-master"],
    emphasis: "supporting",
  },
  {
    id: "data",
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
];

const pageCopy = {
  zh: {
    title: "实践作品",
    description:
      "这里收录我在不同场景里完成的实践：从 AI 产品、内容增长到数据建模、资产研究和跨境市场观察。它们不是固定方向的划分，而是我如何理解问题、组织信息并把判断转化为作品的记录。",
    filters: ["全部", "AI 产品", "市场与增长", "数据与资产"],
  },
  en: {
    title: "Project Cases",
    description:
      "A compact view of work across AI product, content growth, data modeling, asset research, and global market observation. These are not fixed career tracks, but records of how I frame problems and turn judgment into artifacts.",
    filters: ["All", "AI Product", "Market & Growth", "Data & Assets"],
  },
};

const sectionCopy = {
  zh: {
    ai: {
      title: "AI 产品与创作工具",
      subtitle: "围绕 AI 产品设计、用户体验、生成式内容工作流与实际落地的实践作品",
    },
    data: {
      title: "数据与投资分析",
      subtitle: "基于数据分析、估值建模与市场研究形成的资产和商业判断",
    },
    growth: {
      title: "海外市场与跨境增长",
      subtitle: "关于内容增长、海外市场观察、商业化与用户理解的实践记录",
    },
  },
  en: {
    ai: {
      title: "AI Product & Creative Tools",
      subtitle: "Work around AI product design, user experience, generative content workflows, and practical delivery.",
    },
    data: {
      title: "Data & Investment Analysis",
      subtitle: "Asset and business judgment shaped through data analysis, valuation modeling, and market research.",
    },
    growth: {
      title: "Global Market & Cross-border Growth",
      subtitle: "Notes and practices around content growth, overseas market observation, commercialization, and user understanding.",
    },
  },
};

const filterHrefs = ["#projects-all", "#ai", "#growth", "#data"];

function SectionHeader({ section, locale }: { section: ProjectSection; locale: "zh" | "en" }) {
  const copy = sectionCopy[locale][section.id];
  return (
    <div className="pt-5">
      <h2 className="font-serif text-2xl font-medium text-ink md:text-[2rem]">
        {copy.title}
      </h2>
      <p className="mt-4 max-w-measure text-sm leading-[1.9] text-muted md:text-base">
        {copy.subtitle}
      </p>
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
