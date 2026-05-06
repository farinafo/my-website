import type { Metadata } from "next";
import { LabDetailClient } from "@/components/lab/LabDetailClient";
import { getLabBySlugLocalized } from "@/lib/data/lab";

const entry = getLabBySlugLocalized("twelve-flower-goddesses", "en");

export const metadata: Metadata = {
  title: entry?.title ?? "Flower Deities",
  description: entry?.subtitle ?? "Flower deities AI visual experiment.",
};

export default function EnglishFlowerDeitiesPage() {
  return entry ? <LabDetailClient entry={entry} locale="en" /> : null;
}
