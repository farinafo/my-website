import type { Metadata } from "next";
import { HomeViewport } from "@/components/home/HomeViewport";
import { aboutGithubUrl, aboutXiaohongshuUrl } from "@/lib/data/about";
import { getProjectSummaries, type ProjectSlug } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Research, Strategy & Data",
  description:
    "Research, strategy, and data across AI, global markets, and real assets. Selected market intelligence, analytics, product, and investment research by Fan Chen.",
  openGraph: {
    title: "Fan Chen | Research, Strategy & Data",
    description: "Research and strategy across AI, global markets, and real assets.",
    type: "website",
  },
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
      summary: "Energy policy, regional economics, market research, and data analysis",
      defaultOpen: true,
      position: { x: 415, y: 94 },
    },
    {
      id: "lab" as const,
      label: "Lab",
      title: "Lab",
      href: "/en/lab",
      defaultOpen: true,
      position: { x: 1005, y: 330 },
    },
  ],
  aboutParagraphs: [
    "I work across research, strategy, and data analysis.",
    "My experience spans UN programs, overseas markets, AI products, entrepreneurship, machine learning, and architecture, with a focus on AI, global markets, and real assets.",
    "I state methods, assumptions, and limits, and bring user feedback and market signals into product discussions.",
  ],
  aboutLinks: [
    { intro: "Creative: ", href: aboutXiaohongshuUrl, label: "Xiaohongshu" },
    { intro: "Product: ", href: aboutGithubUrl, label: "GitHub" },
  ],
  closeWindowLabelPrefix: "Close ",
  closeWindowLabelSuffix: " window",
  openLabLabel: "Open creative lab",
  galleryLabel: "Selected Work",
  projectHrefPrefix: "/en/projects",
  singleLineMenuLabels: true,
  singleLineAboutLinks: true,
  fixedAboutWindowHeight: true,
};

const homeProjectOrder: ProjectSlug[] = [
  "market-intelligence",
  "shanghai-house-price-forecasting",
  "coursesnap",
  "casa-rossi-valuation",
  "pre-master",
];

export default function EnglishHomePage() {
  const projects = getProjectSummaries("en");
  const homeProjects = homeProjectOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return <HomeViewport projects={homeProjects} content={englishHomeContent} />;
}
