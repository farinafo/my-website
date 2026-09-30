import type { Metadata } from "next";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "项目",
  description: "Fan Chen 的市场情报、AI 与数据、投资及实体资产研究项目。",
  openGraph: {
    title: "Projects | Fan Chen",
    description: "Selected work across market intelligence, AI and data, and investment in real assets.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
