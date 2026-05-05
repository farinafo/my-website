import type { Metadata } from "next";
import { EnglishSimplePage } from "@/components/en/EnglishSimplePage";

export const metadata: Metadata = {
  title: "Notes",
  description: "English placeholder page for notes and analysis.",
};

export default function EnglishNotesPage() {
  return (
    <EnglishSimplePage
      title="Analysis Notes"
      description="Short notes on product thinking, business judgment, data analysis, and research methods. English summaries will be expanded later."
      tags={["Data Analysis", "Business Judgment", "Product Thinking"]}
    />
  );
}
