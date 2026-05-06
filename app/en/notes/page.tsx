import type { Metadata } from "next";
import { NotesClient } from "@/components/notes/NotesClient";
import { getAllNotesLocalized } from "@/lib/data/notes";

export const metadata: Metadata = {
  title: "Analysis Notes",
  description: "Notes on product thinking, business judgment, data analysis, and research methods.",
};

export default function EnglishNotesPage() {
  return <NotesClient locale="en" notes={getAllNotesLocalized("en")} />;
}
