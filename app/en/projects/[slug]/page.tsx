import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { HomeCanvasBackground } from "@/components/home/HomeCanvasBackground";
import { Reveal } from "@/components/ui/Reveal";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjectSummaries,
  type ProjectSlug,
} from "@/lib/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

function getEnglishProject(slug: string) {
  return getProjectSummaries("en").find((project) => project.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getEnglishProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function EnglishProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const englishProject = getEnglishProject(slug);
  const sharedProject = getProjectBySlug(slug as ProjectSlug);

  if (!englishProject || !sharedProject) {
    notFound();
  }

  return (
    <div className="relative isolate min-h-screen">
      <HomeCanvasBackground mouseX={0.5} mouseY={0.5} />
      <Container size="wide" className="relative z-10 py-16 md:py-24">
        <Reveal>
          <div className="rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:px-8 md:py-9">
            <Link
              href="/en/projects"
              className="font-mono text-[0.72rem] tracking-[0.16em] text-muted transition-colors hover:text-ink"
            >
              Back to Work
            </Link>
            <h1 className="mt-6 max-w-4xl font-serif text-display-xs font-medium text-ink">
              {englishProject.title}
            </h1>
            <p className="mt-5 max-w-measure-wide text-sm leading-[1.95] text-muted md:text-base">
              {englishProject.shortDescription}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {englishProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line/60 px-3 py-2 font-mono text-[0.68rem] tracking-[0.16em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <section className="rounded-2xl border border-line/40 bg-paper p-6 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:p-8">
              <h2 className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Overview
              </h2>
              <p className="mt-5 text-sm leading-[1.95] text-muted md:text-base">
                This English project page is a lightweight placeholder. It shares the same slug,
                ordering, images, and external links with the Chinese version. Detailed English case
                writing can be added later without changing the route structure.
              </p>
            </section>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.05}>
            <section className="rounded-2xl border border-line/40 bg-paper p-6 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:p-8">
              <h2 className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-muted">
                Links
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {sharedProject.relatedLinks?.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex border border-ink/[0.14] px-4 py-2 text-sm leading-relaxed text-muted transition-colors hover:border-ink/40 hover:text-ink"
                  >
                    {link.label === "GitHub 仓库"
                      ? "GitHub Repository"
                      : link.label === "MVP 下载"
                        ? "MVP Download"
                        : link.label}
                  </Link>
                ))}
              </div>
            </section>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
