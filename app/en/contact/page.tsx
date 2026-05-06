import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  aboutGithubUrl,
  aboutInstagramUrl,
  aboutTiktokUrl,
  aboutXiaohongshuUrl,
} from "@/lib/data/about";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email and contact information for Fan Chen.",
};

const socialLinks = [
  { label: "Xiaohongshu", href: aboutXiaohongshuUrl, note: "Content and growth practice" },
  { label: "Instagram", href: aboutInstagramUrl, note: "Personal photos and life archive" },
  { label: "TikTok", href: aboutTiktokUrl, note: "Overseas-platform content experiment" },
  { label: "GitHub", href: aboutGithubUrl, note: "Product and code practice" },
] as const;

export default function EnglishContactPage() {
  return (
    <Container size="wide" className="py-16 md:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em] text-faint">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-[clamp(2.25rem,5.4vw,3.35rem)] font-medium leading-[1.18] tracking-normal text-ink">
            Contact
          </h1>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.06}>
          <div className="border-l border-ink/[0.08] pl-6 md:pl-10">
            <p className="max-w-measure-wide text-pretty text-sm leading-[1.95] text-muted md:text-base">
              If my work, background, or current questions feel relevant, feel free to reach out by
              email. I will reply when I can.
            </p>
            <a
              href="mailto:chenfan1949@163.com"
              className="mt-10 inline-block font-serif text-xl tracking-tight text-ink underline decoration-ink/20 decoration-1 underline-offset-[10px] transition-opacity hover:opacity-70 md:text-2xl"
            >
              chenfan1949@163.com
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-20 border-t border-ink/[0.08] pt-12 md:mt-24" delay={0.1}>
        <p className="font-mono text-[0.5625rem] font-medium uppercase tracking-[0.22em] text-faint">
          More Links
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-ink/[0.1] bg-paper/60 px-4 py-4 transition-colors hover:border-ink/35"
            >
              <span className="font-serif text-lg text-ink transition-opacity group-hover:opacity-70">
                {link.label}
              </span>
              <span className="mt-2 block text-xs leading-relaxed text-muted">{link.note}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
