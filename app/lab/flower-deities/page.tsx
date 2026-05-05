import type { Metadata } from "next";
import { LabDetailClient } from "@/components/lab/LabDetailClient";
import { getLabBySlug } from "@/lib/data/lab";

export const metadata: Metadata = {
  title: "十二花神",
  description: "十二花神 AI 视觉实验。",
};

export default function FlowerDeitiesPage() {
  const entry = getLabBySlug("twelve-flower-goddesses");
  return entry ? <LabDetailClient entry={entry} /> : null;
}
