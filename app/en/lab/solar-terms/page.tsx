import type { Metadata } from "next";
import { EnglishSimplePage } from "@/components/en/EnglishSimplePage";

export const metadata: Metadata = {
  title: "Solar Terms",
  description: "English placeholder page for the solar terms visual series.",
};

export default function EnglishSolarTermsPage() {
  return (
    <EnglishSimplePage
      title="Solar Terms"
      description="An AI visual experiment based on Chinese seasonal time, folk imagery, and generative image workflows. The image gallery and detailed notes will be localized later."
      tags={["AI Visuals", "Prompt Design", "Seasonal Imagery"]}
    />
  );
}
