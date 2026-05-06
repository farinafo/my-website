import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";
import { getAllProjectSlugs, getProjectBySlugLocalized } from "@/lib/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlugLocalized(slug, "en");
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function EnglishProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlugLocalized(slug, "en");
  if (!project) notFound();
  return <ProjectDetailView project={project} locale="en" />;
}
