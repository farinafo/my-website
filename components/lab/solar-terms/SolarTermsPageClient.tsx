"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { HomeCanvasBackground } from "@/components/home/HomeCanvasBackground";
import { Container } from "@/components/layout/Container";
import { SolarTermsGallery } from "@/components/lab/solar-terms/SolarTermsGallery";
import { Reveal } from "@/components/ui/Reveal";
import type { SolarTermPoster } from "@/lib/data/solarTerms";

const copy = {
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
};

export function SolarTermsPageClient({ terms }: { terms: SolarTermPoster[] }) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

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
          href="/lab"
          className="inline-flex items-center gap-2 font-mono text-[0.625rem] font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden>{"<-"}</span>
          {copy.back}
        </Link>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-10 lg:mt-14">
          <Reveal className="md:col-span-7 lg:col-span-8">
            <div className="rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8 md:py-9">
              <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {copy.typeValue}
              </p>
              <h1 className="mt-4 font-serif text-[clamp(2.2rem,5vw,4.1rem)] font-medium leading-[1.06] text-ink">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-measure-wide text-base leading-[1.9] text-muted md:text-lg">
                {copy.description}
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5 lg:col-span-4" delay={0.05}>
            <div className="rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8 md:py-9">
              <div className="space-y-7">
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {copy.typeLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">{copy.typeValue}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {copy.timeLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">{copy.timeValue}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                    {copy.toolLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/85">{copy.toolValue}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <section className="mt-12 lg:mt-16" aria-label={copy.galleryLabel}>
          <SolarTermsGallery terms={terms} />
        </section>
      </Container>
    </main>
  );
}
