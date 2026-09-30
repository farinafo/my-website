import type { Metadata } from "next";
import { NotesClient } from "@/components/notes/NotesClient";
import { getAllNotesLocalized } from "@/lib/data/notes";

export const metadata: Metadata = {
  title: "Analysis Notes",
  description: "Research notes on energy policy, regional economics, industry operations, financial comparisons, and markets.",
  openGraph: {
    title: "Research Notes | Fan Chen",
    description: "Notes on energy policy, regional economics, operations, finance, and markets.",
    type: "website",
  },
};

export default function EnglishNotesPage() {
  return <NotesClient locale="en" notes={getAllNotesLocalized("en")} />;
}
