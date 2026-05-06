import type { Metadata } from "next";
import { HomeViewport } from "@/components/home/HomeViewport";
import { aboutGithubUrl, aboutXiaohongshuUrl } from "@/lib/data/about";
import { getProjectSummaries } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Home",
  description: "Portfolio homepage for Fan Chen, focused on AI product, growth, and research.",
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
      summary: "Data, business, cities, and products",
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
    "I build AI products and growth systems, with experience in data analysis and 0-to-1 product delivery.",
    "I developed CourseSnap to organize course materials from user need to implementation, and ran content-growth experiments with one post reaching 400k+ views and 15k+ interactions.",
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
