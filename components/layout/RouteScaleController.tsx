"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RouteScaleController() {
  const pathname = usePathname();

  useEffect(() => {
    const scale = pathname === "/" ? "default" : "compact";
    document.documentElement.dataset.pageScale = scale;

    return () => {
      document.documentElement.dataset.pageScale = "default";
    };
  }, [pathname]);

  return null;
}
