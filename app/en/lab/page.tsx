import type { Metadata } from "next";
import { EnglishSimplePage } from "@/components/en/EnglishSimplePage";

export const metadata: Metadata = {
  title: "Lab",
  description: "A lightweight English archive for AI visual experiments.",
};

export default function EnglishLabPage() {
  return (
    <EnglishSimplePage
      title="Inspiration Archive"
      description="A collection of exploratory work around AI visuals, style systems, eastern aesthetics, and image-based storytelling."
      tags={["AI Visuals", "Style Systems", "Eastern Aesthetics", "Image Narrative"]}
      items={[
        {
          title: "Solar Terms AI Visual Experiment",
          description: "A visual series based on the Chinese solar terms and seasonal imagery.",
          href: "/en/lab/solar-terms",
        },
        {
          title: "Flower Deities AI Visual Experiment",
          description: "A visual series exploring flower deities, character mood, and consistent image generation.",
          href: "/en/lab/flower-deities",
        },
      ]}
    />
  );
}
