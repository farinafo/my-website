import type { Metadata } from "next";
import { ProfessionalHome } from "@/components/home/ProfessionalHome";
import { getProjectSummaries } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Research, Strategy & Data across AI, Global Markets & Real Assets",
  description:
    "Research, strategy, and data across AI, global markets, and real assets. Selected market intelligence, analytics, product, and investment research by Fan Chen.",
  openGraph: {
    title: "Fan Chen | Research, Strategy & Data",
    description: "Research and strategy across AI, global markets, and real assets.",
    type: "website",
  },
};

export default function EnglishHomePage() {
  return <ProfessionalHome locale="en" projects={getProjectSummaries("en")} />;
}
