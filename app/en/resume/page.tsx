import type { Metadata } from "next";
import { EnglishSimplePage } from "@/components/en/EnglishSimplePage";

export const metadata: Metadata = {
  title: "Resume",
  description: "English resume overview for Fan Chen.",
};

export default function EnglishResumePage() {
  return (
    <EnglishSimplePage
      title="Resume"
      description="A concise English overview of my education, experience, research background, tools, and contact information. The detailed version will be localized in a later pass."
      tags={["AI Product", "Data Analysis", "Growth", "Project Execution"]}
      items={[
        {
          title: "Experience",
          description: "Product and market research, content-driven growth, international student projects, and brand event execution.",
        },
        {
          title: "Tools",
          description: "ChatGPT, Claude, DeepSeek, Gemini, Midjourney, Cursor, Codex, Python, SQL, Excel, Power BI, Tableau, Notion, Trello.",
        },
        {
          title: "Contact",
          description: "Email: chenfan1949@163.com · GitHub: farinafo",
        },
      ]}
    />
  );
}
