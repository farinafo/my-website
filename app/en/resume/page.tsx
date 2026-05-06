import type { Metadata } from "next";
import { ResumeView } from "@/components/resume/ResumeView";
import { resumeCopy } from "@/lib/data/resume";

export const metadata: Metadata = resumeCopy.en.metadata;

export default function EnglishResumePage() {
  return <ResumeView locale="en" />;
}
