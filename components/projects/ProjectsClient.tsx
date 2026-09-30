"use client";

import { useCallback, useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HomeCanvasBackground } from "@/components/home/HomeCanvasBackground";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectSummaries, type ProjectSlug } from "@/lib/data/projects";

type ProjectSection = {
  id: "strategy" | "ai-data" | "assets";
  title: string;
  subtitle: string;
  slugs: ProjectSlug[];
  emphasis: "primary" | "standard" | "supporting";
};

const projectSections: ProjectSection[] = [
  {
    id: "strategy",
    title: "Strategy & Market Intelligence",
    subtitle: "市场研究、创业与商业化实践；内容增长作为补充经历呈现。",
    slugs: ["market-intelligence", "pre-master", "content-growth"],
    emphasis: "primary",
  },
  {
    id: "ai-data",
    title: "AI & Data",
    subtitle: "AI 产品实践、机器学习与计量分析。",
    slugs: [
      "coursesnap",
      "shanghai-house-price-forecasting",
      "hedonic-price-regression",
    ],
    emphasis: "standard",
  },
  {
    id: "assets",
    title: "Investment & Real Assets",
    subtitle: "资产估值、房地产与基础设施相关的可行性和投资分析。",
    slugs: ["casa-rossi-valuation", "monza-esports-hotel", "cultural-asset-digital-commercialization"],
    emphasis: "standard",
  },
];

const pageCopy = {
  zh: {
    title: "精选项目",
    description:
      "项目围绕市场情报、AI 与数据、投资和实体资产展开，展示我如何研究问题、组织证据并形成商业判断。国际发展是持续探索的研究方向，目前不单独包装为项目类别。",
    filters: ["全部", "战略与市场情报", "AI 与数据", "投资与实体资产"],
  },
  en: {
    title: "Selected Projects",
    description:
      "Selected work across market intelligence, AI and data, and investment in real assets. Each case shows how I frame a question, organize evidence, and develop a business or research judgment. International development remains an emerging research direction.",
    filters: ["All", "Strategy & Market Intelligence", "AI & Data", "Investment & Real Assets"],
  },
};

const sectionCopy = {
  zh: {
    strategy: {
      title: "战略与市场情报",
      subtitle: "网易欧洲市场研究、Pre-Master 创业实践与补充性的内容增长经验。",
    },
    "ai-data": {
      title: "AI 与数据",
      subtitle: "AI 产品、机器学习与计量分析案例。",
    },
    assets: {
      title: "投资与实体资产",
      subtitle: "估值、房地产可行性研究与文化资产策略。",
    },
  },
  en: {
    strategy: {
      title: "Strategy & Market Intelligence",
      subtitle: "NetEase market research, the Pre-Master venture, and supporting content-growth experience.",
    },
    "ai-data": {
      title: "AI & Data",
      subtitle: "Cases in AI product work, machine learning, and econometric analysis.",
    },
    assets: {
      title: "Investment & Real Assets",
      subtitle: "Valuation, real-estate feasibility, and cultural-asset strategy.",
    },
  },
};

const filterHrefs = ["#projects-all", "#strategy", "#ai-data", "#assets"];

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
