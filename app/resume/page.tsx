import type { Metadata } from "next";
import { ResumeView } from "@/components/resume/ResumeView";
import { resumeCopy } from "@/lib/data/resume";

export const metadata: Metadata = resumeCopy.zh.metadata;

export default function ResumePage() {
  return <ResumeView locale="zh" />;
}
