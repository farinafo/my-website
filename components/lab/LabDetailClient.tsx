"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { HomeCanvasBackground } from "@/components/home/HomeCanvasBackground";
import { Container } from "@/components/layout/Container";
import { LabGallery } from "@/components/lab/LabGallery";
import { Reveal } from "@/components/ui/Reveal";
import { labTypeLabels, labTypeLabelsEn, type LabEntry } from "@/lib/data/lab";

const basePrompt = `ancient chinese [flower] deity,
traditional chinese gongbi painting,
rock mineral pigment texture,
matte surface, xuan paper texture,
minimal composition, large negative space,
elegant chinese figure, calm and distant expression,
soft natural light,
no glow, no rim light, no cinematic lighting,
no anime style, no game style,
no modern illustration style
--ar 3:4 --niji 6 --raw`;

const promptVariables = [
  {
    title: { zh: "Flower / 月花", en: "Flower" },
    body: { zh: "决定视觉主体与季节识别", en: "Defines the main visual subject and seasonal identity." },
  },
  {
    title: { zh: "Character / 人物", en: "Character" },
    body: { zh: "决定气质、性别和历史叙事", en: "Defines temperament, gender, and narrative reference." },
  },
  {
    title: { zh: "Pose / 姿态", en: "Pose" },
    body: { zh: "决定动态、构图和人物状态", en: "Shapes movement, composition, and figure state." },
  },
  {
    title: { zh: "Atmosphere / 氛围", en: "Atmosphere" },
    body: { zh: "决定季节、情绪和画面温度", en: "Sets season, mood, and visual temperature." },
  },
];

const detailCopy = {
  zh: {
    back: "返回实验页",
    date: "日期",
    type: "类型",
    tags: "标签",
    toc: "目录",
    promptTitle: "Prompt System / 提示词系统",
    promptBody: [
      "在这个项目中，我没有将 prompt 视为一次性生成工具，而是将其拆解为一个可复用的结构系统。",
      "通过固定绘画语言、材质、构图和光线限制，保证十二张图在风格上的统一；再通过月份、花卉、人物原型、姿态和季节氛围的变化，拉开每一张图之间的差异。",
      "也就是说，这套提示词系统中，一部分内容负责“统一风格”，另一部分内容负责“制造变化”。",
    ],
    basePrompt: "Base Prompt / 基础模板",
    variables: "Variable Components / 变量组件",
  },
  en: {
    back: "Back to Lab",
    date: "Date",
    type: "Type",
    tags: "Tags",
    toc: "Contents",
    promptTitle: "Prompt System",
    promptBody: [
      "In this project, prompts are treated as a reusable structure rather than a one-time generation command.",
      "A fixed painting language, material texture, composition, and lighting constraints keep the series consistent, while flower, figure, pose, and atmosphere create variation.",
      "Part of the prompt system is responsible for unity, and another part is responsible for difference.",
    ],
    basePrompt: "Base Prompt",
    variables: "Variable Components",
  },
};

function PromptSystemModule({ locale = "zh" }: { locale?: "zh" | "en" }) {
  const copy = detailCopy[locale];
  return (
    <div className="mt-9 rounded-xl border border-line/40 bg-black/20 p-5 md:p-6">
      <h3 className="font-serif text-lg font-medium text-ink md:text-xl">
        {copy.promptTitle}
      </h3>

      <div className="mt-5 space-y-4 text-sm leading-[2] text-muted md:text-[0.94rem]">
        {copy.promptBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-7">
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
          {copy.basePrompt}
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-line/35 bg-black/30 px-4 py-4 text-[0.78rem] leading-[1.75] text-ink/78">
          <code>{basePrompt}</code>
        </pre>
      </div>

      <div className="mt-7">
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
          {copy.variables}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {promptVariables.map((item) => (
            <div key={item.title.zh} className="rounded-lg border border-line/35 bg-ink/[0.025] px-4 py-3">
              <p className="font-mono text-[0.72rem] tracking-[0.12em] text-ink/80">
                {item.title[locale]}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LabDetailClient({
  entry,
  locale = "zh",
}: {
  entry: LabEntry;
  locale?: "zh" | "en";
}) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const copy = detailCopy[locale];
  const typeLabels = locale === "en" ? labTypeLabelsEn : labTypeLabels;
  const basePath = locale === "en" ? "/en/lab" : "/lab";
  const titleClass =
    locale === "en"
      ? "text-[clamp(2.1rem,4.4vw,3.35rem)] leading-[1.18] tracking-normal"
      : "text-[clamp(2.2rem,5vw,4.1rem)] leading-[1.06]";

  const onMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouse({
      x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)),
      y: Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)),
    });
  }, []);

  return (
    <div
      className="relative isolate min-h-screen"
      onMouseMove={onMove}
      onMouseLeave={() => setMouse({ x: 0.5, y: 0.5 })}
    >
      <HomeCanvasBackground mouseX={mouse.x} mouseY={mouse.y} />

      <Container size="wide" className="relative z-10 py-14 md:py-20 lg:py-24">
        <Link
          href={basePath}
          className="inline-flex items-center gap-2 font-mono text-[0.625rem] font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden>←</span>
          {copy.back}
        </Link>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-10 lg:mt-14">
          <Reveal className="md:col-span-7 lg:col-span-8">
            <div className="rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8 md:py-9">
              <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {typeLabels[entry.type]}
              </p>
              <h1 className={`mt-4 font-serif font-medium text-ink ${titleClass}`}>
                {entry.title}
              </h1>
              <p className="mt-6 max-w-measure-wide text-base leading-[1.9] text-muted md:text-lg">
                {entry.description}
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5 lg:col-span-4" delay={0.05}>
            <div className="rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8 md:py-9">
              <div className="space-y-7">
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {copy.date}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">{entry.date}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {copy.type}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">
                    {typeLabels[entry.type]}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {copy.tags}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-cover px-3 py-1 text-xs font-mono text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28 rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)]">
              <p className="mb-5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                {copy.toc}
              </p>
              <nav className="space-y-2">
                {entry.contentSections?.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-baseline gap-3 py-1.5 text-[0.95rem] text-muted transition-colors hover:text-ink"
                  >
                    <span className="font-mono text-[0.68rem] tabular-nums text-muted transition-colors group-hover:text-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-snug">{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="space-y-0 rounded-2xl border border-line/40 bg-paper px-6 py-2 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8">
              {entry.contentSections?.map((section, index) => (
                <Reveal key={section.id} delay={index * 0.04}>
                  <section
                    id={section.id}
                    className="scroll-mt-28 border-b border-ink/[0.07] py-10 last:border-0 md:py-12"
                  >
                    <div className="flex items-start gap-5 sm:gap-8">
                      <span className="w-9 shrink-0 pt-1 font-mono text-[0.72rem] font-semibold tabular-nums tracking-[0.1em] text-muted sm:w-10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                          <h2 className="font-serif text-xl font-medium tracking-[-0.02em] text-ink md:text-2xl">
                            {section.title}
                          </h2>
                          <span className="hidden h-px flex-1 bg-ink/[0.12] sm:block sm:min-w-[4rem]" />
                        </div>

                        <p className="mt-7 text-sm leading-[2] text-muted md:text-[0.96rem]">
                          {section.body}
                        </p>

                        {section.id === "method" ? <PromptSystemModule locale={locale} /> : null}

                        {section.id === "gallery" && entry.images?.length ? (
                          <div className="mt-8">
                            <LabGallery title={entry.title} images={entry.images} locale={locale} />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
