import type { Metadata } from "next";
import { LabClient } from "@/components/lab/LabClient";
import { getAllLabEntriesLocalized } from "@/lib/data/lab";

export const metadata: Metadata = {
  title: "Lab",
  description: "A collection of exploratory work around AI visuals and image-based storytelling.",
};

export default function EnglishLabPage() {
  return <LabClient entries={getAllLabEntriesLocalized("en")} locale="en" />;
}
