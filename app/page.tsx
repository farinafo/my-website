import { HomeViewport } from "@/components/home/HomeViewport";
import { projectSummaries, type ProjectSlug } from "@/lib/data/projects";

const homeProjectOrder: ProjectSlug[] = [
  "ai-cultural-visual-system",
  "coursesnap",
  "content-growth",
  "market-intelligence",
  "pre-master",
  "shanghai-house-price-forecasting",
  "casa-rossi-valuation",
  "monza-esports-hotel",
  "hedonic-price-regression",
  "cultural-asset-digital-commercialization",
];

const homeProjects = homeProjectOrder
  .map((slug) => projectSummaries.find((project) => project.slug === slug))
  .filter((project): project is (typeof projectSummaries)[number] => Boolean(project));

export default function HomePage() {
  return <HomeViewport projects={homeProjects} />;
}
