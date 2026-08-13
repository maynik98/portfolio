"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";

export default function Experience() {
  const { lang } = useLanguage();
  const t = getDictionary(lang);

  return (
    <section id="experience" className="scroll-mt-20 border-t border-hairline bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <SectionHeading label={t.experience.label} title={t.experience.title} />

        <Reveal as="article" delay={120} className="mt-14 md:mt-20">
          <div className="rounded-3xl border border-hairline bg-white p-8 md:p-14">
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <p className="text-[clamp(1.5rem,2.6vw,2.125rem)] font-medium leading-tight tracking-tight">
                  {t.experience.company}
                </p>
                <p className="mt-4 text-[17px]">{t.experience.role}</p>
                <p className="mt-1 text-[15px] text-muted">{t.experience.department}</p>
                <p className="mt-6 inline-flex rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px] font-medium text-accent">
                  {t.experience.period}
                </p>
              </div>

              <div className="md:col-span-8">
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
                  {t.experience.responsibilitiesLabel}
                </p>
                <ul className="mt-6 grid gap-x-10 gap-y-0 sm:grid-cols-2">
                  {t.experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-hairline py-3.5 text-[16px] leading-[1.5] last:border-b-0 sm:last:border-b sm:[&:nth-last-child(-n+1)]:border-b-0"
                    >
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal as="p" delay={160} className="mt-14 md:mt-20">
          <span className="block text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
            {t.experience.previousLabel}
          </span>
        </Reveal>

        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
          {t.experience.previous.map((job, index) => (
            <Reveal
              key={job.company}
              as="article"
              delay={200 + index * 70}
              className="rounded-3xl border border-hairline p-7 md:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="text-[18px] font-medium tracking-tight md:text-[20px]">
                  {job.company}
                </p>
                <span className="text-[13px] text-muted">{job.period}</span>
              </div>
              <p className="mt-1 text-[15px] text-muted">{job.role}</p>

              <ul className="mt-5 space-y-2.5">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-[1.5]"
                  >
                    <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
