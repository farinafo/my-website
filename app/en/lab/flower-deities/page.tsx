import type { Metadata } from "next";
import { EnglishSimplePage } from "@/components/en/EnglishSimplePage";

export const metadata: Metadata = {
  title: "Flower Deities",
  description: "English placeholder page for the flower deities visual series.",
};

export default function EnglishFlowerDeitiesPage() {
  return (
    <EnglishSimplePage
      title="Flower Deities"
      description="An AI visual series exploring traditional flower imagery, character temperament, and consistency across generated images."
      tags={["AI Visuals", "Character Mood", "Visual Consistency"]}
    />
  );
}
