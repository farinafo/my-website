import type { Metadata } from "next";
import { ProjectsClient } from "@/components/projects/ProjectsClient";
import { getProjectSummaries } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work by Fan Chen across market intelligence, AI and data, and investment in real assets.",
  openGraph: {
    title: "Projects | Fan Chen",
    description: "Market intelligence, AI and data, and real-asset investment research.",
    type: "website",
  },
};

export default function EnglishProjectsPage() {
  return <ProjectsClient locale="en" projects={getProjectSummaries("en")} />;
}
