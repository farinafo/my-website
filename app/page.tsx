import type { Metadata } from "next";
import { HomeViewport } from "@/components/home/HomeViewport";
import { projectSummaries, type ProjectSlug } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "研究、战略与数据",
  description: "陈凡的研究、战略与数据分析作品集，关注 AI、全球市场与实体资产。",
  openGraph: {
    title: "研究、战略与数据｜陈凡",
    description: "聚焦 AI、全球市场与实体资产的研究、战略和数据分析。",
    type: "website",
  },
};

const homeProjectOrder: ProjectSlug[] = [
  "market-intelligence",
  "shanghai-house-price-forecasting",
  "coursesnap",
  "casa-rossi-valuation",
  "pre-master",
];

const homeProjects = homeProjectOrder
  .map((slug) => projectSummaries.find((project) => project.slug === slug))
  .filter((project): project is (typeof projectSummaries)[number] => Boolean(project));

export default function HomePage() {
  return <HomeViewport projects={homeProjects} />;
}
