"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "./SiteFooter";

/** Landing is full-viewport; other routes keep the global footer. */
export function ConditionalFooter() {
  const pathname = usePathname();
  const normalizedPathname =
    pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
  if (normalizedPathname === "/") return null;
  if (normalizedPathname === "/projects") return <SiteFooter showCta={false} />;
  if (normalizedPathname.startsWith("/projects/")) return <SiteFooter showCta={false} />;
  if (normalizedPathname === "/lab") return <SiteFooter showCta={false} />;
  if (normalizedPathname.startsWith("/lab/")) return <SiteFooter showCta={false} />;
  if (normalizedPathname === "/notes") return <SiteFooter showCta={false} />;
  if (normalizedPathname === "/resume") return <SiteFooter showCta={false} />;
  return <SiteFooter />;
}
