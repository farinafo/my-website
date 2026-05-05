import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { HomeCanvasBackground } from "@/components/home/HomeCanvasBackground";
import { Reveal } from "@/components/ui/Reveal";

type Item = {
  title: string;
  description: string;
  href?: string;
};

export function EnglishSimplePage({
  title,
  description,
  tags = [],
  items = [],
}: {
  title: string;
  description: string;
  tags?: string[];
  items?: Item[];
}) {
  return (
    <div className="relative isolate min-h-screen">
      <HomeCanvasBackground mouseX={0.5} mouseY={0.5} />
      <Container size="wide" className="relative z-10 py-16 md:py-24">
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:grid-cols-12 md:px-8 md:py-9">
            <div className="md:col-span-4">
              <h1 className="font-serif text-display-xs font-medium text-ink">{title}</h1>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-measure-wide text-pretty text-sm leading-[1.95] text-muted md:text-base">
                {description}
              </p>
              {tags.length ? (
                <div className="mt-7 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line/60 px-3 py-2 font-mono text-[0.68rem] tracking-[0.16em] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </Reveal>

        {items.length ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
            {items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="rounded-2xl border border-line/40 bg-paper p-6 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:p-7">
                  {item.href ? (
                    <Link href={item.href} className="font-serif text-2xl font-medium text-ink transition-opacity hover:opacity-70">
                      {item.title}
                    </Link>
                  ) : (
                    <h2 className="font-serif text-2xl font-medium text-ink">{item.title}</h2>
                  )}
                  <p className="mt-4 text-sm leading-[1.9] text-muted md:text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : null}
      </Container>
    </div>
  );
}
