"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";

const nav = [
  { href: "/", zh: "首页", en: "Home" },
  { href: "/projects", zh: "项目", en: "Work" },
  { href: "/lab", zh: "实验", en: "Lab" },
  { href: "/notes", zh: "笔记", en: "Notes" },
  { href: "/resume", zh: "履历", en: "Resume" },
];

function getLanguageSwitchHref(pathname: string) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3) || "/";
  return pathname === "/" ? "/en" : `/en${pathname}`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const langPrefix = isEnglish ? "/en" : "";
  const switchHref = getLanguageSwitchHref(pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/[0.06] bg-paper/85 backdrop-blur-md backdrop-saturate-150">
      <div className="flex h-[var(--header-h)] w-full items-center gap-[11px] px-2 md:gap-[14px]">
        <Link
          href={isEnglish ? "/en" : "/"}
          className="group flex min-w-0 shrink-0 items-center gap-3.5 outline-none focus-visible:ring-1 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          <span className="flex min-w-0 items-center">
            <span className="font-serif text-[15px] font-semibold leading-none tracking-[-0.02em] text-ink transition-opacity group-hover:opacity-75 md:text-[16px]">
              Fan Chen
            </span>
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-[7px] md:gap-[11px]">
          <nav className="hidden items-center gap-1 md:flex" aria-label={isEnglish ? "Main navigation" : "主导航"}>
            {nav.map((item) => {
              const href = item.href === "/" ? langPrefix || "/" : `${langPrefix}${item.href}`;
              const active =
                item.href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-sm px-[11px] py-[7px] font-mono text-[14px] font-medium tracking-[0.08em] transition-colors ${
                    active
                      ? "bg-ink/10 text-ink"
                      : "text-faint hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  {isEnglish ? item.en : item.zh}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-[7px] md:gap-[11px]">
            <Link
              href={switchHref}
              className="inline-flex h-9 items-center justify-center rounded-sm border border-line/70 px-3 font-mono text-[0.68rem] font-medium tracking-[0.12em] text-muted transition-colors hover:border-ink/40 hover:text-ink"
              aria-label={isEnglish ? "切换到中文" : "Switch to English"}
            >
              {isEnglish ? "中文" : "EN"}
            </Link>
            <ThemeSwitcher />

            <button
              type="button"
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-sm border border-transparent transition-colors hover:border-line md:hidden"
              aria-expanded={open}
              aria-label={isEnglish ? (open ? "Close menu" : "Open menu") : open ? "关闭菜单" : "打开菜单"}
              onClick={() => setOpen((value) => !value)}
            >
              <span
                className={`block h-px w-[1.125rem] bg-ink transition-transform duration-300 ease-out ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-[1.125rem] bg-ink transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-[1.125rem] bg-ink transition-transform duration-300 ease-out ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <nav className="flex flex-col px-[var(--page-pad)] py-5">
              {nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href === "/" ? langPrefix || "/" : `${langPrefix}${item.href}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-line/80 py-3.5 font-mono text-[0.6875rem] tracking-[0.08em] text-ink"
                  >
                    <span>{isEnglish ? item.en : item.zh}</span>
                    <span className="text-faint">{String(index + 1).padStart(2, "0")}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
