import type { Metadata } from "next";
import { ProjectsClient } from "@/components/projects/ProjectsClient";
import { getProjectSummaries } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected AI product, data analysis, and growth projects.",
};

export default function EnglishProjectsPage() {
  return <ProjectsClient locale="en" projects={getProjectSummaries("en")} />;
}
