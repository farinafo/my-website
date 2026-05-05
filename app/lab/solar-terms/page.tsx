import type { Metadata } from "next";
import { SolarTermsPageClient } from "@/components/lab/solar-terms/SolarTermsPageClient";
import { solarTerms } from "@/lib/data/solarTerms";

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

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
};

export default function SolarTermsPage() {
  return <SolarTermsPageClient terms={solarTerms} />;
}
