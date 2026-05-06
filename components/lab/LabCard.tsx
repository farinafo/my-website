"use client";

import Link from "next/link";
import { LabImageFrame } from "@/components/lab/LabImageFrame";
import { labTypeLabels, labTypeLabelsEn, type LabEntry } from "@/lib/data/lab";

export function LabCard({ entry, locale = "zh" }: { entry: LabEntry; locale?: "zh" | "en" }) {
  const imagePosition =
    entry.slug === "twelve-flower-goddesses" ? "object-[center_16%]" : "object-[center_50%]";
  const basePath = locale === "en" ? "/en/lab" : "/lab";
  const hrefSlug =
    locale === "en" && entry.slug === "twelve-flower-goddesses"
      ? "flower-deities"
      : entry.slug;
  const typeLabels = locale === "en" ? labTypeLabelsEn : labTypeLabels;
  const fallbackHint =
    locale === "en"
      ? "Cover image pending."
      : "封面图片待补充，当前显示占位。";

  return (
    <div
      className="group block rounded-2xl border border-line/40 bg-paper shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] transition-all duration-300 hover:border-line/70 hover:bg-cover/20"
    >
      <div className="grid min-h-full gap-0 lg:h-[325px] lg:grid-cols-[1.15fr_1fr]">
        <LabImageFrame
          src={entry.coverImage}
          alt={entry.title}
          sizes="(min-width: 1024px) 44vw, 100vw"
          wrapperClassName="aspect-[4/3] rounded-t-2xl bg-cover/20 lg:aspect-auto lg:h-full lg:rounded-l-2xl lg:rounded-tr-none"
          imageClassName={`object-cover ${imagePosition} transition duration-500 group-hover:scale-[1.02] group-hover:brightness-110`}
          fallbackTitle={entry.title}
          fallbackHint={fallbackHint}
        />

        <div className="flex min-h-0 flex-col justify-between p-5 md:p-6 lg:p-7">
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="rounded-full border border-line/50 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted">
                {typeLabels[entry.type]}
              </span>
              <span className="font-mono text-[0.63rem] uppercase tracking-[0.16em] text-muted">
                {entry.date}
              </span>
            </div>

            <h2 className="mt-4 font-serif text-[1.45rem] font-medium leading-[1.16] md:text-[1.65rem]">
              <Link
                href={`${basePath}/${hrefSlug}`}
                className="text-ink transition-colors hover:text-ink-soft"
              >
                {entry.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-[1.75] text-muted md:text-[0.94rem]">{entry.subtitle}</p>
            <p className="mt-4 text-sm leading-[1.75] text-muted md:text-[0.9rem]">
              {entry.description}
            </p>
          </div>

          <div className="mt-5">
            <div className="flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-cover px-2.5 py-0.5 text-[0.68rem] font-mono text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
