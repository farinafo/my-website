import type { Metadata } from "next";
import { NotesClient } from "@/components/notes/NotesClient";
import { getAllNotesLocalized } from "@/lib/data/notes";

export const metadata: Metadata = {
  title: "研究与分析",
  description: "关于能源政策、区域经济、产业运营、金融比较与市场研究的分析记录。",
  openGraph: {
    title: "研究与分析 | Fan Chen",
    description: "能源政策、区域经济、产业运营与金融分析研究笔记。",
    type: "website",
  },
};

export default function NotesPage() {
  return <NotesClient locale="zh" notes={getAllNotesLocalized("zh")} />;
}
