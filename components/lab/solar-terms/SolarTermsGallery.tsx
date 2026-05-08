"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { SolarTermPoster } from "@/lib/data/solarTerms";

const text = {
  zh: {
    posterPending: "\u6d77\u62a5\u56fe\u7247\u5f85\u8865\u5145",
    pending: "\u5f85\u8865\u5145",
    close: "\u5173\u95ed\u9884\u89c8",
    prev: "\u4e0a\u4e00\u5f20",
    next: "\u4e0b\u4e00\u5f20",
    detail: "\u5927\u56fe\u9884\u89c8",
    motifs: "\u89c6\u89c9\u5143\u7d20",
    palette: "\u4e3b\u8272\u8c03",
    description: "\u521b\u4f5c\u65b9\u6cd5",
    iteration: "\u7248\u672c\u8fed\u4ee3",
    prompt: "\u63d0\u793a\u8bcd",
    version: "\u7248\u672c",
    season: "\u5b63\u8282",
    imageFallback: "\u5c06\u5bf9\u5e94\u56fe\u7247\u653e\u5165\u8282\u6c14\u56fe\u7247\u76ee\u5f55\u540e\uff0c\u8fd9\u91cc\u4f1a\u81ea\u52a8\u663e\u793a\u3002",
  },
  en: {
    posterPending: "Poster image pending",
    pending: "To be added",
    close: "Close preview",
    prev: "Previous poster",
    next: "Next poster",
    detail: " large preview",
    motifs: "Visual Motifs",
    palette: "Palette",
    description: "Creative Note",
    iteration: "Iteration",
    prompt: "Prompt",
    version: "Version",
    season: "Season",
    imageFallback:
      "Once the corresponding poster image is added to the solar-terms image folder, it will appear here automatically.",
  },
};

function PosterImage({
  term,
  sizes,
  priority = false,
  imageClassName = "",
  locale = "zh",
}: {
  term: SolarTermPoster;
  sizes: string;
  priority?: boolean;
  imageClassName?: string;
  locale?: "zh" | "en";
}) {
  const [failed, setFailed] = useState(false);
  const copy = text[locale];

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col justify-end bg-cover/35 p-4">
        <p className="font-serif text-lg font-medium text-ink">{term.name}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{copy.imageFallback}</p>
      </div>
    );
  }

  return (
    <Image
      src={term.image}
      alt={locale === "en" ? `${term.name} poster` : `${term.name}\u6d77\u62a5`}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized
      className={imageClassName}
      onError={() => setFailed(true)}
    />
  );
}

function MetaBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">{label}</p>
      <div className="mt-2">{children}</div>
    </section>
  );
}

function ChipList({ values, emptyLabel }: { values: string[]; emptyLabel: string }) {
  if (!values.length) {
    return <p className="text-sm leading-relaxed text-muted">{emptyLabel}</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {values.map((value) => (
        <span
          key={value}
          className="rounded-full border border-line/40 px-3 py-1 text-xs font-mono text-muted"
        >
          {value}
        </span>
      ))}
    </div>
  );
}

export function SolarTermsGallery({
  terms,
  locale = "zh",
}: {
  terms: SolarTermPoster[];
  locale?: "zh" | "en";
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const copy = text[locale];
  const cardNameClass =
    locale === "en"
      ? "text-[0.92rem] leading-[1.12] line-clamp-2"
      : "text-lg leading-snug";
  const activeTerm = useMemo(
    () => (activeIndex === null ? null : terms[activeIndex]),
    [activeIndex, terms]
  );

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null ? null : (current - 1 + terms.length) % terms.length
      ),
    [terms.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((current) => (current === null ? null : (current + 1) % terms.length)),
    [terms.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showNext, showPrev]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {terms.map((term, index) => (
          <button
            key={term.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group overflow-hidden rounded-xl border border-line/40 bg-paper text-left transition-all duration-300 hover:border-line/70 hover:bg-cover/25"
          >
            <div className="relative aspect-[3/4] bg-cover/20">
              <PosterImage
                term={term}
                sizes="(min-width: 1280px) 15vw, (min-width: 768px) 30vw, (min-width: 640px) 45vw, 100vw"
                priority={index < 6}
                imageClassName="object-cover transition duration-500 group-hover:scale-[1.01] group-hover:brightness-110"
                locale={locale}
              />
            </div>
            <div className="min-h-[5.85rem] border-t border-line/30 bg-paper px-4 py-3">
              <p className="whitespace-nowrap font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                {String(index + 1).padStart(2, "0")} · {term.season}
              </p>
              <div className="mt-1">
                <p className={`font-serif font-medium text-ink ${cardNameClass}`}>{term.name}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeTerm ? (
        <div
          className="fixed inset-0 z-[70] bg-black/82 px-3 py-3 backdrop-blur-md md:px-6 md:py-6"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeTerm.name}${copy.detail}`}
        >
          <div className="mx-auto flex h-full items-center justify-center">
            <div
              className="relative grid w-[94vw] max-w-[1400px] max-h-[90vh] grid-cols-1 overflow-hidden rounded-[24px] border border-line/40 bg-paper shadow-[0_24px_80px_rgba(0,0,0,0.55)] md:w-[92vw] lg:h-[min(88vh,860px)] lg:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.75fr)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                className="absolute right-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/50 bg-paper/70 text-ink/80 transition hover:border-ink/30 hover:text-ink"
                aria-label={copy.close}
              >
                x
              </button>

              <div className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-cover/20 px-4 py-6 md:px-6 lg:min-h-0 lg:border-r lg:border-line/40 lg:px-6 lg:py-6">
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line/50 bg-paper/60 text-xl text-ink/72 transition hover:border-ink/30 hover:text-ink"
                  aria-label={copy.prev}
                >
                  {"<"}
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line/50 bg-paper/60 text-xl text-ink/72 transition hover:border-ink/30 hover:text-ink"
                  aria-label={copy.next}
                >
                  {">"}
                </button>

                <div className="relative h-full w-full">
                  <PosterImage
                    term={activeTerm}
                    sizes="100vw"
                    priority
                    imageClassName="object-contain"
                    locale={locale}
                  />
                </div>
              </div>

              <aside className="min-h-0 overflow-hidden bg-transparent">
                <div className="h-full overflow-y-auto px-5 py-5 text-ink md:px-6 md:py-6 lg:px-7 lg:py-7">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted">
                    {String((activeIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                    {String(terms.length).padStart(2, "0")}
                  </p>

                  <h3 className="mt-4 font-serif text-[1.85rem] font-medium leading-[1.15] text-ink">
                    {activeTerm.name}
                  </h3>

                  <div className="mt-8 space-y-7">
                    <MetaBlock label={copy.season}>
                      <p className="text-base leading-relaxed text-ink/88">{activeTerm.season}</p>
                    </MetaBlock>

                    <MetaBlock label={copy.description}>
                      <p className="text-sm leading-[1.9] text-muted">{activeTerm.description}</p>
                    </MetaBlock>

                    <MetaBlock label={copy.motifs}>
                      <ChipList values={activeTerm.motifs} emptyLabel={copy.pending} />
                    </MetaBlock>

                    <MetaBlock label={copy.palette}>
                      <ChipList values={activeTerm.palette} emptyLabel={copy.pending} />
                    </MetaBlock>

                    <MetaBlock label={copy.version}>
                      <p className="text-sm leading-relaxed text-muted">
                        {copy.version}: {activeTerm.version}
                      </p>
                    </MetaBlock>

                    {activeTerm.versions?.length ? (
                      <MetaBlock label={copy.iteration}>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {activeTerm.versions.map((item) => (
                            <div
                              key={`${activeTerm.id}-${item.label}`}
                              className="overflow-hidden rounded-xl border border-line/40 bg-cover/25"
                            >
                              <div className="relative aspect-[3/4] bg-cover/30">
                                <Image
                                  src={item.image}
                                  alt={`${activeTerm.name} ${item.label}`}
                                  fill
                                  sizes="(min-width: 1024px) 180px, 45vw"
                                  unoptimized
                                  className="object-cover"
                                />
                              </div>
                              <div className="border-t border-line/35 px-3 py-3">
                                <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/80">
                                  {item.label}
                                </p>
                                <p className="mt-2 text-xs leading-[1.75] text-muted">
                                  {item.note}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </MetaBlock>
                    ) : null}

                    <details className="rounded-xl border border-line/40 bg-ink/[0.03]">
                      <summary className="cursor-pointer list-none px-4 py-3 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-ink/72">
                        {copy.prompt}
                      </summary>
                      <div className="border-t border-line/40 px-4 py-4 text-sm leading-[1.9] text-muted">
                        {activeTerm.prompt}
                      </div>
                    </details>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
