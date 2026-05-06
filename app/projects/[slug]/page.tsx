import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";
import { getAllProjectSlugs, getProjectBySlugLocalized } from "@/lib/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlugLocalized(slug, "zh");
  if (!project) return { title: "未找到项目" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlugLocalized(slug, "zh");
  if (!project) notFound();
  return <ProjectDetailView project={project} locale="zh" />;
}
