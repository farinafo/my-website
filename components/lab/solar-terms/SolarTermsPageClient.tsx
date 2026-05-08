"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { HomeCanvasBackground } from "@/components/home/HomeCanvasBackground";
import { Container } from "@/components/layout/Container";
import { SolarTermsGallery } from "@/components/lab/solar-terms/SolarTermsGallery";
import { Reveal } from "@/components/ui/Reveal";
import type { SolarTermPoster } from "@/lib/data/solarTerms";

const copy = {
  zh: {
    title: "\u4e8c\u5341\u56db\u8282\u6c14",
    description:
      "\u4ee5\u4e2d\u56fd\u4f20\u7edf\u8282\u6c14\u4e3a\u4e3b\u9898\u7684 AI \u89c6\u89c9\u5b9e\u9a8c\uff0c\u5c1d\u8bd5\u5c06\u5b63\u8282\u6d41\u8f6c\u3001\u6c11\u4fd7\u610f\u8c61\u4e0e\u751f\u6210\u5f0f\u56fe\u50cf\u7ed3\u5408\uff0c\u5f62\u6210\u4e00\u7ec4\u5177\u6709\u4e1c\u65b9\u5ba1\u7f8e\u7684\u89c6\u89c9\u6d77\u62a5\u3002",
    back: "\u8fd4\u56de\u5b9e\u9a8c\u9875",
    typeLabel: "\u7c7b\u578b",
    typeValue: "\u89c6\u89c9\u5b9e\u9a8c",
    timeLabel: "\u65f6\u95f4",
    timeValue: "2026-05-05",
    toolLabel: "\u5de5\u5177",
    toolValue: "Midjourney / \u751f\u6210\u5f0f\u56fe\u50cf / \u63d0\u793a\u8bcd\u8bbe\u8ba1",
    galleryLabel: "\u6d77\u62a5\u753b\u5eca",
    methodLabel: "生成方法",
    methodTitle: "从单张出图到视觉系统",
    methodDescription:
      "这组作品不是随机生成 24 张节气插画，而是先建立统一的风格模板，再围绕每个节气替换气候、物候、人物动作和色彩变量。页面保留最终成品、模板结构和筛选逻辑，用来展示生成式内容从灵感到可复用工作流的过程。",
    methodCards: [
      {
        title: "风格锚定",
        body: "早期探索阶段使用一张外部风格参考图统一人物比例、画面气质和新中式装饰插画方向；最终页面不展示原参考图，只说明其在工作流中用于降低系列风格漂移。",
      },
      {
        title: "模板控制",
        body: "所有节气共享同一提示词结构，包括风格基底、节气场景、人物动作、色彩氛围、画面约束和负向约束，保证 24 张图在差异化表达中保持同一系统。",
      },
      {
        title: "版本筛选",
        body: "筛选重点不是单张图是否好看，而是是否符合节气语义、是否与系列风格一致、是否避免文字水印、现代物件、过度戏剧化光效和动漫化表达。",
      },
    ],
    templateLabel: "提示词模板",
    templateIntro:
      "完整提示词会根据每个节气替换变量；这里展示的是可复用结构，而不是直接公开某一张图的全部生成材料。",
    templateBlocks: [
      {
        label: "基础风格",
        value:
          "现代新中式装饰插画 / 东方绘本感 / 宣纸质感 / 矿物色 / 平面色块 / 克制留白",
      },
      {
        label: "节气变量",
        value: "节气名称 / 季节阶段 / 气候特征 / 物候元素 / 植物动物 / 民俗意象",
      },
      {
        label: "人物设定",
        value: "单人汉服人物 / 低戏剧性动作 / 与自然细节发生关系 / 面部细节克制",
      },
      {
        label: "画面控制",
        value: "3:4 海报比例 / 开放构图 / 大面积留白 / 柔和色调 / 统一材质感",
      },
      {
        label: "负向约束",
        value: "无文字 / 无水印 / 无现代物件 / 无动漫感 / 无 3D / 无过度戏剧化光效",
      },
    ],
    variableLabel: "变量提炼示例",
    variableItems: [
      "春分：桃花、柳枝、归燕、纸鸢与均匀日光，表达昼夜平衡和春游感。",
      "谷雨：雨后茶园、茶芽、牡丹、纸伞与湿润空气，强调雨生百谷。",
      "立夏：青梅、浓荫、槐花影、竹篮与采摘动作，避免直接进入盛夏荷塘。",
      "处暑：河灯、折扇、芦花、残荷与南飞雁，用动作表达送走暑气。",
      "冬至：室内团圆、汤圆、烛光、窗外雪与梅枝，强化长夜里的温暖。",
    ],
    backHref: "/lab",
  },
  en: {
    title: "Twenty-Four Solar Terms",
    description:
      "An AI visual experiment based on the Chinese solar-term calendar, combining seasonal rhythm, folk imagery, generative image workflows, and modern web presentation.",
    back: "Back to Lab",
    typeLabel: "Type",
    typeValue: "Visual Experiment",
    timeLabel: "Date",
    timeValue: "2026-05-05",
    toolLabel: "Tools",
    toolValue: "Midjourney / Generative Images / Prompt Design",
    galleryLabel: "Poster Gallery",
    methodLabel: "Generation Method",
    methodTitle: "From One-Off Images to a Visual System",
    methodDescription:
      "This series is not a random set of twenty-four images. It starts from a reusable style system, then replaces seasonal variables such as climate, natural motifs, character action, and palette for each solar term.",
    methodCards: [
      {
        title: "Style Anchor",
        body: "An external style reference was used during early exploration to stabilize figure proportion, composition, and the new-Chinese decorative illustration direction. The source image is not shown on the site; the page focuses on the workflow and final outputs.",
      },
      {
        title: "Template Control",
        body: "Each poster follows the same prompt structure: base style, seasonal scene, character action, palette, composition rules, and negative constraints.",
      },
      {
        title: "Version Selection",
        body: "The selection criteria emphasize seasonal meaning, series consistency, clean output, and avoiding text, watermarks, modern objects, dramatic lighting, and anime-like rendering.",
      },
    ],
    templateLabel: "Prompt Template",
    templateIntro:
      "The full prompt changes by solar term. This section shows the reusable structure rather than exposing every raw generation input.",
    templateBlocks: [
      {
        label: "Base Style",
        value:
          "Modern Chinese decorative illustration / oriental storybook mood / xuan paper texture / mineral pigment feeling / flat color / restrained negative space",
      },
      {
        label: "Seasonal Variables",
        value: "Solar term / season stage / climate / natural motifs / plants and animals / folk imagery",
      },
      {
        label: "Character Setup",
        value: "Single hanfu figure / low-drama gesture / interaction with nature / restrained facial detail",
      },
      {
        label: "Image Control",
        value: "3:4 poster ratio / open composition / large negative space / soft palette / consistent texture",
      },
      {
        label: "Negative Constraints",
        value: "No text / no watermark / no modern objects / no anime / no 3D / no overly dramatic lighting",
      },
    ],
    variableLabel: "Variable Extraction",
    variableItems: [
      "Spring Equinox: peach blossoms, willow branches, returning swallows, a kite, and balanced sunlight.",
      "Grain Rain: rain-washed tea garden, fresh tea buds, peonies, paper umbrella, and moist late-spring air.",
      "Beginning of Summer: green plums, dense shade, locust flower shadows, bamboo basket, and picking action.",
      "End of Heat: river lanterns, folded fan, reeds, withered lotus leaves, and geese flying south.",
      "Winter Solstice: family interior, tangyuan, candlelight, snow outside the window, and plum branches.",
    ],
    backHref: "/en/lab",
  },
};

export function SolarTermsPageClient({
  terms,
  locale = "zh",
}: {
  terms: SolarTermPoster[];
  locale?: "zh" | "en";
}) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const pageCopy = copy[locale];
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
    <main
      className="relative isolate min-h-screen"
      onMouseMove={onMove}
      onMouseLeave={() => setMouse({ x: 0.5, y: 0.5 })}
    >
      <HomeCanvasBackground mouseX={mouse.x} mouseY={mouse.y} />

      <Container size="wide" className="relative z-10 py-14 md:py-20 lg:py-24">
        <Link
          href={pageCopy.backHref}
          className="inline-flex items-center gap-2 font-mono text-[0.625rem] font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden>{"<-"}</span>
          {pageCopy.back}
        </Link>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-10 lg:mt-14">
          <Reveal className="md:col-span-7 lg:col-span-8">
            <div className="rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8 md:py-9">
              <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {pageCopy.typeValue}
              </p>
              <h1 className={`mt-4 font-serif font-medium text-ink ${titleClass}`}>
                {pageCopy.title}
              </h1>
              <p className="mt-6 max-w-measure-wide text-base leading-[1.9] text-muted md:text-lg">
                {pageCopy.description}
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5 lg:col-span-4" delay={0.05}>
            <div className="rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8 md:py-9">
              <div className="space-y-7">
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {pageCopy.typeLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">{pageCopy.typeValue}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {pageCopy.timeLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">{pageCopy.timeValue}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {pageCopy.toolLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">{pageCopy.toolValue}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <section className="mt-12 lg:mt-16" aria-labelledby="solar-terms-method">
          <Reveal>
            <div className="rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8 md:py-9">
              <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {pageCopy.methodLabel}
              </p>
              <div className="mt-4 grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
                <div>
                  <h2
                    id="solar-terms-method"
                    className="max-w-[12em] text-balance font-serif text-[clamp(1.65rem,2.55vw,2.2rem)] font-medium leading-tight text-ink"
                  >
                    {pageCopy.methodTitle}
                  </h2>
                  <p className="mt-5 text-sm leading-[1.95] text-muted md:text-base">
                    {pageCopy.methodDescription}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                  {pageCopy.methodCards.map((card) => (
                    <section
                      key={card.title}
                      className="border-l border-line/50 pl-4"
                    >
                      <h3 className="font-serif text-lg font-medium leading-snug text-ink">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[1.85] text-muted">{card.body}</p>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section
          className="mt-8 grid items-stretch gap-8 lg:grid-cols-12"
          aria-labelledby="solar-terms-template"
        >
          <Reveal className="lg:col-span-8">
            <div className="h-full rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8 md:py-9">
              <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {pageCopy.templateLabel}
              </p>
              <h2
                id="solar-terms-template"
                className="mt-4 font-serif text-2xl font-medium leading-tight text-ink md:text-[2rem]"
              >
                {pageCopy.templateLabel}
              </h2>
              <p className="mt-4 text-sm leading-[1.9] text-muted md:text-base">
                {pageCopy.templateIntro}
              </p>
              <div className="mt-7 grid gap-3">
                {pageCopy.templateBlocks.map((block) => (
                  <div
                    key={block.label}
                    className="grid gap-2 border-t border-line/35 pt-3 md:grid-cols-[10rem_minmax(0,1fr)]"
                  >
                    <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                      {block.label}
                    </p>
                    <p className="text-sm leading-[1.8] text-ink/84">{block.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.05}>
            <div className="h-full rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8 md:py-9">
              <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {pageCopy.variableLabel}
              </p>
              <div className="mt-5 space-y-4">
                {pageCopy.variableItems.map((item) => (
                  <p
                    key={item}
                    className="border-l border-line/50 pl-4 text-sm leading-[1.85] text-muted"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mt-12 lg:mt-16" aria-label={pageCopy.galleryLabel}>
          <SolarTermsGallery terms={terms} locale={locale} />
        </section>
      </Container>
    </main>
  );
}
