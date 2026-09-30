import { ProfessionalHome } from "@/components/home/ProfessionalHome";
import { projectSummaries } from "@/lib/data/projects";

export const metadata = {
  title: "研究、战略与数据",
  description: "陈凡的研究、战略与数据作品集，聚焦 AI、全球市场与实体资产。",
  openGraph: {
    title: "研究、战略与数据｜陈凡",
    description: "聚焦 AI、全球市场与实体资产的研究、战略与数据分析。",
    type: "website" as const,
  },
};

export default function HomePage() {
  return <ProfessionalHome locale="zh" projects={projectSummaries} />;
}
