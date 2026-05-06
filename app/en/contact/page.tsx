import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email and contact information for Fan Chen.",
};

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
              If my background or work feels relevant to a role, project, or collaboration, feel free
              to reach out by email. I will reply when I can.
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
          LinkedIn
        </p>
        <p className="mt-4 max-w-measure text-sm text-muted">Social profile link can be added later.</p>
      </Reveal>
    </Container>
  );
}
