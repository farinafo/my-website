import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { aboutInstagramUrl } from "@/lib/data/about";
import { HomeCanvasBackground } from "@/components/home/HomeCanvasBackground";
import { resumeCopy, type Locale, type ResumeCopy } from "@/lib/data/resume";

function SectionCard({
  title,
  children,
  delay,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="rounded-2xl border border-line/40 bg-paper p-6 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:p-8"
    >
      <h2 className="font-mono text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-muted">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1.2-3.5c4 0 8.2-2 8.2-8.4A6.5 6.5 0 0 0 20.2 2 6 6 0 0 0 20 6s-1.7-.6-5.2 1.2a17.7 17.7 0 0 0-9.6 0C1.7 5.4 0 6 0 6a6 6 0 0 0-.2-4A6.5 6.5 0 0 0-2 6.1c0 6.4 4.2 8.4 8.2 8.4A4.8 4.8 0 0 0 5 18v4" transform="translate(2 0)" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="17" height="17" x="3.5" y="3.5" rx="4.2" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M17.5 6.8h.01" />
    </svg>
  );
}

function TimelineSection({ section }: { section: ResumeCopy["experience"] }) {
  return (
    <div className="relative space-y-8 border-l border-line/50 pl-6 text-sm text-muted md:pl-8 md:text-base">
      {section.items.map((item) => (
        <div key={`${item.title}-${item.time}`} className="relative">
          <span
            className="absolute -left-[1.92rem] top-1.5 h-2.5 w-2.5 rounded-full border border-ink/50 bg-paper md:-left-[2.42rem]"
            aria-hidden
          />
          <p className="font-mono text-[0.88rem] tracking-[0.08em] text-muted">{item.time}</p>
          <div className="mt-2">
            <p className="font-medium text-ink">{item.title}</p>
            <p className="mt-1 font-serif text-base text-ink/85">{item.role}</p>
            {item.description ? (
              <p className="mt-3 leading-[1.9] text-muted">{item.description}</p>
            ) : null}
            {item.paragraphs?.length ? (
              <div className="mt-3 space-y-3 leading-[1.9] text-muted">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ResumeView({ locale = "zh" }: { locale?: Locale }) {
  const copy = resumeCopy[locale];
  const titleClass =
    locale === "en"
      ? "text-[clamp(2.25rem,5.4vw,3.35rem)] leading-[1.18] tracking-normal"
      : "text-display-xs";

  return (
    <div className="relative isolate min-h-screen">
      <HomeCanvasBackground mouseX={0.5} mouseY={0.5} />

      <Container size="wide" className="relative z-10 py-16 md:py-24">
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-line/40 bg-paper px-6 py-7 shadow-[0_24px_80px_-40px_rgb(0_0_0/0.22)] md:grid-cols-12 md:px-8 md:py-9">
            <div className="md:col-span-4">
              <h1 className={`font-serif font-medium text-ink ${titleClass}`}>
                {copy.hero.title}
              </h1>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-measure-wide text-pretty text-sm leading-[1.95] text-muted md:text-base">
                {copy.hero.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {copy.hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line/60 px-3 py-2 font-mono text-[0.68rem] tracking-[0.16em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-8 lg:col-span-7">
            <SectionCard title={copy.profile.title}>
              <div className="space-y-4 text-sm leading-[1.95] text-muted md:text-base">
                {copy.profile.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </SectionCard>

            <SectionCard title={copy.experience.title} delay={0.04}>
              <TimelineSection section={copy.experience} />
            </SectionCard>

            <SectionCard title={copy.supplementalExperience.title} delay={0.08}>
              <TimelineSection section={copy.supplementalExperience} />
            </SectionCard>

            <SectionCard title={copy.research.title} delay={0.12}>
              <div className="space-y-6 text-sm leading-relaxed text-muted md:text-base">
                {copy.research.items.map((item) => (
                  <div key={item.title}>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          <div className="space-y-8 lg:col-span-5">
            <SectionCard title={copy.education.title} delay={0.16}>
              <ul className="space-y-5 text-sm text-muted md:text-base">
                {copy.education.items.map((item) => (
                  <li key={item.school} className="border-l border-line/40 pl-5 sm:pl-6">
                    <p className="font-medium leading-relaxed text-ink">{item.school}</p>
                    <p className="mt-1 font-mono text-[0.84rem] leading-relaxed tracking-[0.04em] text-muted">
                      {item.meta}
                    </p>
                  </li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard title={copy.capabilities.title} delay={0.2}>
              <div className="space-y-5 text-sm leading-relaxed text-muted md:text-base">
                {copy.capabilities.groups.map((group) => (
                  <div key={group.title}>
                    <p className="font-medium text-ink">{group.title}</p>
                    <p className="mt-1">{group.items}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted/75 md:text-[0.82rem]">
                      {group.tools}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>

            <SectionCard title={copy.contact.title} delay={0.24}>
              <p className="max-w-measure-wide text-pretty text-sm leading-[1.95] text-muted md:text-base">
                {copy.contact.body}
              </p>
              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${copy.contact.email}`}
                  className="group flex w-fit items-center gap-3 text-sm font-medium text-muted transition-colors hover:text-ink md:text-base"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-muted/75 transition-colors group-hover:text-ink" />
                  <span className="underline decoration-ink/0 underline-offset-[7px] transition-colors group-hover:decoration-ink/30">
                    {copy.contact.email}
                  </span>
                </a>
                <a
                  href="https://github.com/farinafo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-3 text-sm font-medium text-muted transition-colors hover:text-ink md:text-base"
                >
                  <GithubIcon className="h-4 w-4 shrink-0 text-muted/75 transition-colors group-hover:text-ink" />
                  <span className="underline decoration-ink/0 underline-offset-[7px] transition-colors group-hover:decoration-ink/30">
                    {copy.contact.github}
                  </span>
                </a>
                <a
                  href={aboutInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-3 text-sm font-medium text-muted transition-colors hover:text-ink md:text-base"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-muted/75 transition-colors group-hover:text-ink" />
                  <span className="underline decoration-ink/0 underline-offset-[7px] transition-colors group-hover:decoration-ink/30">
                    {copy.contact.instagram}
                  </span>
                </a>
              </div>
            </SectionCard>
          </div>
        </div>
      </Container>
    </div>
  );
}
