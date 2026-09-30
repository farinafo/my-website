import type { Metadata } from "next";
import { LabClient } from "@/components/lab/LabClient";
import { getAllLabEntriesLocalized } from "@/lib/data/lab";

export const metadata: Metadata = {
  title: "实验",
  description: "创意实验与 AI 视觉探索。",
};

export default function LabPage() {
  return <LabClient entries={getAllLabEntriesLocalized("zh")} locale="zh" />;
}
