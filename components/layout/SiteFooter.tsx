"use client";

import { usePathname } from "next/navigation";
import { Container } from "./Container";

export function SiteFooter() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  return (
    <footer className="relative z-10 bg-transparent">
      <Container size="wide" className="pb-10 md:pb-12">
        <div className="flex flex-col gap-4 border-t border-ink/[0.08] pt-6 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-faint md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Fan Chen</span>
          <span className="max-w-md text-pretty text-[0.6rem] leading-relaxed text-muted normal-case tracking-normal md:text-right">
            {isEnglish
              ? "Research · Strategy · Data · International Experience"
              : "研究 · 战略 · 数据 · 国际经验"}
          </span>
        </div>
      </Container>
    </footer>
  );
}
