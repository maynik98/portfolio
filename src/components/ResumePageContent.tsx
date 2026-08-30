"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";

const RESUME_FILES = {
  ru: "/resume/Anton_Maynik_Resume_RU.pdf",
  en: "/resume/Anton_Maynik_Resume_EN.pdf",
} as const;

export default function ResumePageContent() {
  const { lang } = useLanguage();
  const t = getDictionary(lang);
  const file = RESUME_FILES[lang];

  return (
    <article>
      <header className="mx-auto w-full max-w-6xl px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
        <Reveal as="div">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[14px] text-muted transition-colors hover:text-ink"
          >
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              ←
            </span>
            {t.resumePage.backHome}
          </Link>
        </Reveal>

        <Reveal as="p" delay={60}>
          <span className="mt-10 block text-[12px] font-medium uppercase tracking-[0.18em] text-accent md:mt-14">
            {t.resumePage.eyebrow}
          </span>
        </Reveal>

        <Reveal as="h1" delay={110}>
          <span className="mt-5 block max-w-[20ch] text-[clamp(2.25rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.03em]">
            {t.resumePage.title}
          </span>
        </Reveal>

        <Reveal as="p" delay={170}>
          <span className="mt-8 block max-w-[56ch] text-[18px] leading-[1.6] text-muted md:text-[21px]">
            {t.resumePage.subtitle}
          </span>
        </Reveal>

        <Reveal as="div" delay={220} className="mt-8 flex flex-wrap gap-3">
          <a
            href={file}
            download
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-accent"
          >
            {t.resumePage.download}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>
          <a
            href={file}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-hairline px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:border-ink"
          >
            {t.resumePage.openTab}
            <span
              aria-hidden
              className="text-accent transition-transform duration-300 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </Reveal>
      </header>

      <section className="border-t border-hairline">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <Reveal as="div">
            <div className="overflow-hidden rounded-3xl border border-hairline bg-surface">
              <iframe
                key={file}
                src={file}
                title={t.resumePage.title}
                className="h-[80vh] w-full md:h-[85vh]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
