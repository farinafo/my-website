import type { Metadata } from "next";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "项目",
  description: "陈凡的市场研究、人工智能与数据分析、投资及实体资产研究项目。",
  openGraph: {
    title: "项目｜陈凡",
    description: "市场研究、人工智能与数据分析、投资及实体资产研究案例。",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
