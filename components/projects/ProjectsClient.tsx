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
    eyebrow: "补充能力",
    title: "增长与商业",
    subtitle: "用户增长、内容运营与商业化实践",
    slugs: ["content-growth", "pre-master", "market-intelligence"],
    emphasis: "supporting",
  },
];

const pageCopy = {
  zh: {
    title: "实践作品",
    description:
      "用三个层级快速理解我的能力结构：AI 产品是主线，数据与投资提供分析和建模能力，增长与商业补充执行、运营和商业化经验。",
    filters: ["全部", "人工智能", "数据与投资", "增长与商业"],
  },
  en: {
    title: "Selected Work",
    description:
      "A compact view of my work across AI products, data and investment analysis, and growth-oriented execution.",
    filters: ["All", "AI Products", "Data & Investment", "Growth & Business"],
  },
};

const sectionCopy = {
  zh: {
    ai: {
      eyebrow: "主线能力",
      title: "人工智能产品",
      subtitle: "围绕 AI 产品设计、用户体验与实际落地的项目",
    },
    data: {
      eyebrow: "专业能力",
      title: "数据与投资",
      subtitle: "基于数据分析与建模的市场研究与投资决策项目",
    },
    growth: {
      eyebrow: "补充能力",
      title: "增长与商业",
      subtitle: "用户增长、内容运营与商业化实践",
    },
  },
  en: {
    ai: {
      eyebrow: "Core Direction",
      title: "AI Products",
      subtitle: "Projects around AI product design, user experience, and practical delivery.",
    },
    data: {
      eyebrow: "Analytical Work",
      title: "Data & Investment",
      subtitle: "Market research and investment work supported by data analysis and modeling.",
    },
    growth: {
      eyebrow: "Execution Layer",
      title: "Growth & Business",
      subtitle: "Content operations, user growth, and commercial experiments.",
    },
  },
};

const filterHrefs = ["#projects-all", "#ai", "#data", "#growth"];

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
      <p className="mt-3 font-mono text-[0.68rem] font-semibold tracking-[0.2em] text-muted">
        {copy.eyebrow}
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

  return (
    <div className="relative isolate min-h-screen" onMouseMove={onMove} onMouseLeave={onLeave}>
      <HomeCanvasBackground mouseX={mouse.x} mouseY={mouse.y} />

      <Container size="wide" className="relative z-10 py-16 md:py-24">
        <header id="projects-all" className="scroll-mt-28">
          <Reveal>
            <div className="grid gap-8 border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:grid-cols-12 md:px-8 md:py-9">
              <div className="md:col-span-4">
                <h1 className="font-serif text-display-xs font-medium text-ink">
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
