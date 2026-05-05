import type { Metadata } from "next";
import { EnglishSimplePage } from "@/components/en/EnglishSimplePage";

export const metadata: Metadata = {
  title: "Home",
  description: "English portfolio entry for Fan Chen.",
};

export default function EnglishHomePage() {
  return (
    <EnglishSimplePage
      title="Fan Chen"
      description="I work across AI product thinking, growth execution, market research, and data-informed decision making. This English version is a lightweight structure for the portfolio and will be expanded page by page."
      tags={["AI Product", "Growth", "Data Analysis", "Market Research"]}
      items={[
        {
          title: "Selected Work",
          description: "AI products, data analysis projects, and growth experiments.",
          href: "/en/projects",
        },
        {
          title: "Inspiration Archive",
          description: "Visual experiments and creative systems built around AI and cultural themes.",
          href: "/en/lab",
        },
        {
          title: "Resume",
          description: "Education, experience, research, tools, and contact information.",
          href: "/en/resume",
        },
      ]}
    />
  );
}
