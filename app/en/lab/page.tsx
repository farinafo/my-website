import type { Metadata } from "next";
import { LabClient } from "@/components/lab/LabClient";
import { getAllLabEntriesLocalized } from "@/lib/data/lab";

export const metadata: Metadata = {
  title: "Lab",
  description: "Creative experiments and AI visual exploration by Fan Chen.",
};

export default function EnglishLabPage() {
  return <LabClient entries={getAllLabEntriesLocalized("en")} locale="en" />;
}
