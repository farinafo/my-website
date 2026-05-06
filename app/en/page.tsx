import type { Metadata } from "next";
import { HomeViewport } from "@/components/home/HomeViewport";
import { aboutGithubUrl, aboutXiaohongshuUrl } from "@/lib/data/about";
import { getProjectSummaries } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio homepage for Fan Chen, focused on AI product, market analysis, investment judgment, and cross-border growth.",
};

const englishHomeContent = {
  windows: [
    {
      id: "about" as const,
      label: "About",
      title: "About",
      defaultOpen: true,
      position: { x: 520, y: 80 },
    },
    {
      id: "notes" as const,
      label: "Analysis",
      title: "Analysis",
      href: "/en/notes",
      summary: "Data, markets, cross-border growth, and products",
      defaultOpen: true,
      position: { x: 415, y: 94 },
    },
    {
      id: "lab" as const,
      label: "Some Fun Things",
      title: "Some Fun Things",
      href: "/en/lab",
      defaultOpen: true,
      position: { x: 1005, y: 330 },
    },
  ],
  aboutParagraphs: [
    "I work across AI product, growth, market research, and investment-oriented analysis, with a strong interest in cross-border user and business contexts.",
    "I developed CourseSnap from user need to product delivery, and have turned data modeling, content experiments, and international projects into practical product, market, and business recommendations.",
  ],
  aboutLinks: [
    { intro: "Growth: ", href: aboutXiaohongshuUrl, label: "Xiaohongshu" },
    { intro: "Product/code: ", href: aboutGithubUrl, label: "GitHub" },
  ],
  closeWindowLabelPrefix: "Close ",
  closeWindowLabelSuffix: " window",
  openLabLabel: "Open lab page",
  galleryLabel: "Selected Work",
  projectHrefPrefix: "/en/projects",
  singleLineMenuLabels: true,
  singleLineAboutLinks: true,
};

export default function EnglishHomePage() {
  return <HomeViewport projects={getProjectSummaries("en")} content={englishHomeContent} />;
}
