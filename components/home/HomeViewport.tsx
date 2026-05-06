"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useDragControls } from "framer-motion";
import { HomeCanvasBackground } from "@/components/home/HomeCanvasBackground";
import {
  aboutGithubUrl,
  aboutIntroParagraphs,
  aboutXiaohongshuUrl,
} from "@/lib/data/about";
import { type ProjectSummary } from "@/lib/data/projects";
import { ProjectGalleryStrip } from "@/components/projects/ProjectGalleryStrip";

type WindowId = "about" | "notes" | "lab";

type WindowConfig = {
  id: WindowId;
  label: string;
  title: string;
  href?: string;
  summary?: string;
  defaultOpen: boolean;
  position: {
    x: number;
    y: number;
  };
};

type HomeViewportContent = {
  windows: WindowConfig[];
  aboutParagraphs: readonly string[];
  aboutLinks: {
    intro: string;
    href: string;
    label: string;
  }[];
  closeWindowLabelPrefix: string;
  closeWindowLabelSuffix: string;
  openLabLabel: string;
  galleryLabel: string;
  projectHrefPrefix: string;
  singleLineMenuLabels?: boolean;
  singleLineAboutLinks?: boolean;
};

const desktopScale = 0.8;

const windowConfigs: WindowConfig[] = [
  {
    id: "about",
    label: "关于我",
    title: "关于我",
    defaultOpen: true,
    position: { x: 520, y: 80 },
  },
  {
    id: "notes",
    label: "分析与思考",
    title: "分析与思考",
    href: "/notes",
    summary: "数据、商业、城市与产品",
    defaultOpen: true,
    position: { x: 415, y: 94 },
  },
  {
    id: "lab",
    label: "一些好玩的",
    title: "一些好玩的",
    href: "/lab",
    defaultOpen: true,
    position: { x: 1005, y: 330 },
  },
];

const defaultContent: HomeViewportContent = {
  windows: windowConfigs,
  aboutParagraphs: aboutIntroParagraphs,
  aboutLinks: [
    { intro: "内容与增长实验：", href: aboutXiaohongshuUrl, label: "小红书" },
    { intro: "代码与产品实践：", href: aboutGithubUrl, label: "GitHub" },
  ],
  closeWindowLabelPrefix: "关闭",
  closeWindowLabelSuffix: "窗口",
  openLabLabel: "打开实验页面",
  galleryLabel: "精选项目",
  projectHrefPrefix: "/projects",
};

const flowerGoddessImages = [
  { src: "/images/flower-goddesses/01-plum.png", alt: "1月 梅花花神" },
  { src: "/images/flower-goddesses/02-apricot.png", alt: "2月 杏花花神" },
  { src: "/images/flower-goddesses/03-peach.png", alt: "3月 桃花花神" },
  { src: "/images/flower-goddesses/04-peony.png", alt: "4月 牡丹花神" },
  { src: "/images/flower-goddesses/05-pomegranate.png", alt: "5月 石榴花花神" },
  { src: "/images/flower-goddesses/06-lotus.png", alt: "6月 荷花花神" },
  { src: "/images/flower-goddesses/07-hollyhock.png", alt: "7月 蜀葵花神" },
  { src: "/images/flower-goddesses/08-osmanthus.png", alt: "8月 桂花花神" },
  { src: "/images/flower-goddesses/09-chrysanthemum.png", alt: "9月 菊花花神" },
  { src: "/images/flower-goddesses/10-hibiscus.png", alt: "10月 芙蓉花神" },
  { src: "/images/flower-goddesses/11-camellia.png", alt: "11月 山茶花神" },
  { src: "/images/flower-goddesses/12-narcissus.png", alt: "12月 水仙花神" },
];

function DraggableWindow({
  title,
  defaultPosition,
  onClose,
  onActivate,
  closeLabel,
  className,
  zIndex,
  children,
}: {
  title: string;
  defaultPosition: { x: number; y: number };
  onClose: () => void;
  onActivate: () => void;
  closeLabel: string;
  className: string;
  zIndex: number;
  children: React.ReactNode;
}) {
  const dragControls = useDragControls();
  const scaledPosition = {
    x: defaultPosition.x * desktopScale,
    y: defaultPosition.y * desktopScale,
  };

  return (
    <motion.div
      drag
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      initial={{ opacity: 0, x: scaledPosition.x, y: scaledPosition.y + 16, scale: 0.985 }}
      animate={{ opacity: 1, x: scaledPosition.x, y: scaledPosition.y, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      onPointerDownCapture={onActivate}
      className={`absolute border border-line/55 bg-paper shadow-[0_24px_72px_-38px_rgb(0_0_0/0.45)] ${className}`}
      style={{ left: 0, top: 0, zIndex }}
    >
      <div
        onPointerDown={(event) => dragControls.start(event)}
        className="flex cursor-grab items-center justify-between gap-2.5 border-b border-line/40 px-3 py-2.5 active:cursor-grabbing"
      >
        <p className="font-mono text-[0.84rem] tracking-[0.14em] text-ink">{title}</p>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-6 w-6 items-center justify-center border border-line/70 text-faint transition-colors hover:border-ink/30 hover:text-ink"
          aria-label={closeLabel}
        >
          <span className="font-mono text-sm leading-none">×</span>
        </button>
      </div>
      {children}
    </motion.div>
  );
}

function DesktopMenu({
  windows,
  openWindows,
  onToggle,
  singleLineLabels = false,
}: {
  windows: WindowConfig[];
  openWindows: Record<WindowId, boolean>;
  onToggle: (id: WindowId) => void;
  singleLineLabels?: boolean;
}) {
  return (
    <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
      {windows.map((item) => {
        const active = openWindows[item.id];

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onToggle(item.id)}
            className={`flex items-center gap-3 text-left transition-colors ${
              active ? "text-ink" : "text-muted hover:text-ink"
            }`}
          >
            <span
              className={`h-3 w-3 shrink-0 rounded-[2px] border ${
                active ? "border-ink bg-ink" : "border-line/80 bg-transparent"
              }`}
              aria-hidden
            />
            <span
              className={`font-mono text-[0.7rem] tracking-[0.14em] ${
                singleLineLabels ? "whitespace-nowrap" : ""
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function LabWindowPreview({ href, ariaLabel }: { href: string; ariaLabel: string }) {
  const loopImages = [...flowerGoddessImages, ...flowerGoddessImages];

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="group block overflow-hidden px-2 py-2"
    >
      <div className="relative h-[4.6rem] overflow-hidden border border-line/35 bg-cover/35">
        <div className="home-lab-marquee flex h-full w-max gap-2 p-2">
          {loopImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-[6.9rem] w-[5.3rem] shrink-0 overflow-hidden border border-line/40 bg-paper"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="5.5rem"
                className="object-cover object-top opacity-88 grayscale transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-paper to-transparent" />
      </div>
    </Link>
  );
}

function AboutBody({ content }: { content: HomeViewportContent }) {
  return (
    <>
      {content.aboutParagraphs.map((paragraph, index) => (
        <p key={paragraph} className={index === 0 ? "font-medium text-ink/92" : undefined}>
          {paragraph}
        </p>
      ))}
      <p className={`${content.singleLineAboutLinks ? "whitespace-nowrap" : ""} pt-2 text-ink/88`}>
        {content.aboutLinks.map((link, index) => (
          <span key={link.href}>
            {index > 0 ? <span className="px-3 text-muted/70">·</span> : null}
            {link.intro}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-ink/30 text-ink transition-colors hover:border-ink hover:text-ink-soft"
            >
              {link.label}
            </a>
          </span>
        ))}
      </p>
    </>
  );
}

export function HomeViewport({
  projects,
  content = defaultContent,
}: {
  projects: ProjectSummary[];
  content?: HomeViewportContent;
}) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [openWindows, setOpenWindows] = useState<Record<WindowId, boolean>>({
    about: true,
    notes: true,
    lab: true,
  });
  const [windowOrder, setWindowOrder] = useState<WindowId[]>(["notes", "lab", "about"]);

  const aboutWindow = content.windows.find((item) => item.id === "about")!;
  const summaryWindows = content.windows.filter((item) => item.id !== "about");
  const getWindowZIndex = (id: WindowId) => 30 + windowOrder.indexOf(id);
  const getCloseWindowLabel = (title: string) =>
    `${content.closeWindowLabelPrefix}${title}${content.closeWindowLabelSuffix}`;

  const toggleWindow = (id: WindowId) => {
    setOpenWindows((current) => ({
      ...current,
      [id]: !current[id],
    }));

    setWindowOrder((current) => {
      const next = current.filter((item) => item !== id);
      return [...next, id];
    });
  };

  const bringWindowToFront = (id: WindowId) => {
    setWindowOrder((current) => {
      const next = current.filter((item) => item !== id);
      return [...next, id];
    });
  };

  return (
    <div
      className="relative isolate flex h-[calc(100dvh-var(--header-h))] flex-col overflow-hidden"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setMouse({
          x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)),
          y: Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)),
        });
      }}
      onMouseLeave={() => setMouse({ x: 0.5, y: 0.5 })}
    >
      <HomeCanvasBackground mouseX={mouse.x} mouseY={mouse.y} />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden lg:overflow-visible">
        <div className="min-h-0 flex-1 overflow-hidden px-[var(--page-pad)] pt-4 sm:px-6 sm:pt-6 md:px-10 md:pt-7 lg:overflow-visible">
          <div className="relative h-full min-h-0">
            <div className="relative z-20 max-w-[13.6rem] pt-1.5">
              <DesktopMenu
                windows={content.windows}
                openWindows={openWindows}
                onToggle={toggleWindow}
                singleLineLabels={content.singleLineMenuLabels}
              />
            </div>

            <div className="absolute inset-0 z-30 hidden overflow-visible lg:block">
              {openWindows.about ? (
                <DraggableWindow
                  title={aboutWindow.title}
                  defaultPosition={aboutWindow.position}
                  onClose={() => toggleWindow("about")}
                  onActivate={() => bringWindowToFront("about")}
                  closeLabel={getCloseWindowLabel(aboutWindow.title)}
                  zIndex={getWindowZIndex("about")}
                  className="w-[27.1rem]"
                >
                  <div className="px-3 py-3">
                    <div className="space-y-4 text-[0.865rem] leading-[1.72] text-muted">
                      <AboutBody content={content} />
                    </div>
                  </div>
                </DraggableWindow>
              ) : null}

              {summaryWindows.map((item) =>
                openWindows[item.id] ? (
                  <DraggableWindow
                    key={item.id}
                    title={item.title}
                    defaultPosition={item.position}
                    onClose={() => toggleWindow(item.id)}
                    onActivate={() => bringWindowToFront(item.id)}
                    closeLabel={getCloseWindowLabel(item.title)}
                    zIndex={getWindowZIndex(item.id)}
                    className={item.id === "lab" ? "w-[14.6rem]" : "w-[12.25rem]"}
                  >
                    {item.id === "lab" ? (
                      <LabWindowPreview href={item.href!} ariaLabel={content.openLabLabel} />
                    ) : (
                      <Link
                        href={item.href!}
                        className="block px-2 py-2 text-[0.95rem] leading-[1.55] text-muted transition-colors hover:text-ink"
                      >
                        {item.summary}
                      </Link>
                    )}
                  </DraggableWindow>
                ) : null
              )}
            </div>

            <div className="mt-10 space-y-4 overflow-y-auto pb-4 lg:hidden">
              {openWindows.about ? (
                <div className="border border-line/55 bg-paper shadow-[0_30px_90px_-48px_rgb(0_0_0/0.45)]">
                  <div className="flex items-center justify-between gap-3 border-b border-line/40 px-4 py-3">
                    <p className="font-mono text-[1.04rem] tracking-[0.14em] text-ink">{aboutWindow.title}</p>
                    <button
                      type="button"
                      onClick={() => toggleWindow("about")}
                      className="inline-flex h-8 w-8 items-center justify-center border border-line/70 text-faint"
                      aria-label={getCloseWindowLabel(aboutWindow.title)}
                    >
                      <span className="font-mono text-sm leading-none">×</span>
                    </button>
                  </div>
                  <div className="space-y-4 px-5 py-5 text-sm leading-[1.76] text-muted">
                    <AboutBody content={content} />
                  </div>
                </div>
              ) : null}

              {summaryWindows
                .filter((item) => openWindows[item.id])
                .map((item) => (
                  <div
                    key={item.id}
                    className="border border-line/55 bg-paper shadow-[0_30px_90px_-48px_rgb(0_0_0/0.45)]"
                  >
                    <div className="flex items-center justify-between gap-3 border-b border-line/40 px-4 py-3">
                      <p className="font-mono text-[1.04rem] tracking-[0.14em] text-ink">{item.title}</p>
                      <button
                        type="button"
                        onClick={() => toggleWindow(item.id)}
                        className="inline-flex h-8 w-8 items-center justify-center border border-line/70 text-faint"
                        aria-label={getCloseWindowLabel(item.title)}
                      >
                        <span className="font-mono text-sm leading-none">×</span>
                      </button>
                    </div>
                    {item.id === "lab" ? (
                      <LabWindowPreview href={item.href!} ariaLabel={content.openLabLabel} />
                    ) : (
                      <Link
                        href={item.href!}
                        className="block px-4 py-5 text-base leading-relaxed text-muted transition-colors hover:text-ink"
                      >
                        {item.summary}
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="relative z-0 shrink-0">
          <ProjectGalleryStrip
            projects={projects}
            compact
            embed
            label={content.galleryLabel}
            hrefPrefix={content.projectHrefPrefix}
          />
        </div>
      </div>
    </div>
  );
}
