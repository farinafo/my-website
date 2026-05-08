"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "./SiteFooter";

/** Landing is full-viewport; other routes keep the global footer. */
export function ConditionalFooter() {
  const pathname = usePathname();
  const normalizedPathname =
    pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
  if (normalizedPathname === "/") return null;
  return <SiteFooter />;
}
