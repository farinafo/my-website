import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { getAllNotesLocalized } from "@/lib/data/notes";
import type { ProjectSummary } from "@/lib/data/projects";

type Locale = "zh" | "en";

const copy = {
  zh: {
    eyebrow: "RESEARCH · STRATEGY · DATA",
    title: "研究、战略与数据",
    scope: "聚焦 AI、全球市场与实体资产",
    intro: "我结合定量分析、市场研究与产品思维，将复杂信息整理为战略判断，关注技术、国际市场与实体资产中的真实问题。我的经历横跨市场情报、AI 产品、创业、机器学习研究和建筑规划。",
    work: "精选项目",
    experience: "经历预览",
    experienceText: "联合国 OHRLLS、Moments AI / CRAMAI、网易游戏、Pre-Master、建筑规划与 EESTEC 项目管理。",
    research: "研究与分析",
    researchText: "从政策与能源、区域经济、产业运营到财务比较，记录研究问题、分析方法与结论。",
    contact: "联系与简历",
    lab: "创意实验与 AI 视觉探索",
    projects: "查看全部项目",
    resume: "查看 Experience",
    notes: "浏览 Notes",
    email: "chenfan1949@163.com",
    order: ["market-intelligence", "shanghai-house-price-forecasting", "coursesnap", "casa-rossi-valuation", "pre-master"],
  },
  en: {
    eyebrow: "RESEARCH · STRATEGY · DATA",
    title: "Research, Strategy & Data across AI, Global Markets & Real Assets",
    scope: "A research- and strategy-oriented professional combining data analysis, market intelligence, product thinking, and international experience.",
    intro: "I combine quantitative analysis, market research, and product thinking to turn complex information into strategic decisions across technology, international markets, and real assets. My experience spans market intelligence, AI products, entrepreneurship, machine-learning research, and the built environment.",
    work: "Selected Work",
    experience: "Experience",
    experienceText: "United Nations OHRLLS, Moments AI / CRAMAI, NetEase Games, Pre-Master, architectural planning, and EESTEC project management.",
    research: "Selected Research",
    researchText: "Research across energy and policy, regional economics, industry operations, and financial comparison, with methods and conclusions presented in context.",
    contact: "Contact & Resume",
    lab: "Creative experiments / AI visual exploration",
    projects: "All projects",
    resume: "View Experience",
    notes: "Browse Notes",
    email: "chenfan1949@163.com",
    order: ["market-intelligence", "shanghai-house-price-forecasting", "coursesnap", "casa-rossi-valuation", "pre-master"],
  },
} satisfies Record<Locale, {
  eyebrow: string; title: string; scope: string; intro: string; work: string; experience: string;
  experienceText: string; research: string; researchText: string; contact: string; lab: string;
  projects: string; resume: string; notes: string; email: string; order: string[];
}>;

export function ProfessionalHome({ locale, projects }: { locale: Locale; projects: ProjectSummary[] }) {
  const text = copy[locale];
  const prefix = locale === "en" ? "/en" : "";
  const selected = text.order
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is ProjectSummary => Boolean(project));
  const noteOrder = [
    "energy-policy-mca-decision-analysis",
    "berlin-regional-economy-structure",
    "riwega-production-management-operations",
  ];
  const allNotes = getAllNotesLocalized(locale);
  const notes = noteOrder
    .map((id) => allNotes.find((note) => note.id === id))
    .filter((note): note is (typeof allNotes)[number] => Boolean(note));

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Container size="wide" className="py-14 md:py-20">
        <section className="grid gap-8 border-b border-line/50 pb-14 md:grid-cols-12 md:gap-10 md:pb-20">
          <div className="md:col-span-8">
            <p className="font-mono text-xs tracking-[0.18em] text-muted">{text.eyebrow}</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(2.6rem,7vw,5.8rem)] font-medium leading-[1.08] tracking-[-0.035em]">{text.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-[1.7] text-muted md:text-xl">{text.scope}</p>
            <p className="mt-5 max-w-3xl text-sm leading-[1.9] text-muted md:text-base">{text.intro}</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs tracking-wide">
              <Link className="border-b border-ink/35 pb-1 hover:border-ink" href={`${prefix}/projects`}>{text.projects} ↗</Link>
              <Link className="border-b border-ink/35 pb-1 hover:border-ink" href={`${prefix}/resume`}>{text.resume} ↗</Link>
            </div>
          </div>
          <div className="hidden items-end justify-end md:col-span-4 md:flex">
            <p className="max-w-[16rem] border-l border-line pl-5 font-serif text-sm leading-[1.8] text-muted">Data & Research<br />Strategy & Business<br />International & Policy</p>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-labelledby="selected-work">
          <Reveal><div className="flex items-end justify-between gap-5"><h2 id="selected-work" className="font-serif text-3xl">{text.work}</h2><Link href={`${prefix}/projects`} className="font-mono text-xs text-muted hover:text-ink">{text.projects} ↗</Link></div></Reveal>
          <div className="mt-7 grid gap-x-7 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {selected.map((project, index) => <Reveal key={project.slug} delay={index * 0.04}><ProjectCard project={project} index={index + 1} basePath={`${prefix}/projects`} /></Reveal>)}
          </div>
        </section>

        <section className="grid gap-8 border-y border-line/50 py-10 md:grid-cols-12 md:py-12">
          <h2 className="font-serif text-2xl md:col-span-4">{text.experience}</h2>
          <div className="md:col-span-8"><p className="max-w-3xl text-sm leading-[1.9] text-muted md:text-base">{text.experienceText}</p><Link href={`${prefix}/resume`} className="mt-5 inline-block border-b border-ink/35 pb-1 font-mono text-xs hover:border-ink">{text.resume} ↗</Link></div>
        </section>

        <section className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
          <div className="md:col-span-4"><h2 className="font-serif text-2xl">{text.research}</h2><p className="mt-4 max-w-sm text-sm leading-[1.8] text-muted">{text.researchText}</p><Link href={`${prefix}/notes`} className="mt-5 inline-block border-b border-ink/35 pb-1 font-mono text-xs hover:border-ink">{text.notes} ↗</Link></div>
          <div className="space-y-5 md:col-span-8">{notes.map((note) => <Link key={note.id} href={`${prefix}/notes?note=${note.id}`} className="group block border-b border-line/45 pb-4"><p className="font-mono text-[0.68rem] tracking-[0.12em] text-muted">{note.date}</p><h3 className="mt-2 font-serif text-lg group-hover:opacity-70">{note.title}</h3><p className="mt-1 text-sm leading-[1.8] text-muted">{note.summary}</p></Link>)}</div>
        </section>

        <section className="flex flex-col gap-6 border-t border-line/50 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div><h2 className="font-serif text-2xl">{text.contact}</h2><a href={`mailto:${text.email}`} className="mt-3 inline-block text-sm text-muted underline decoration-line underline-offset-4">{text.email}</a></div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs"><Link href={`${prefix}/resume`} className="hover:text-muted">{text.resume} ↗</Link><Link href={`${prefix}/lab`} className="text-muted hover:text-ink">{text.lab} ↗</Link></div>
        </section>
      </Container>
    </div>
  );
}
