"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { companies } from "@/lib/companies";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";

function CompanyMark({ name, size = "md" }: { name: string; size?: "md" | "sm" }) {
  const dimensions = size === "md" ? "h-11 w-11 text-[16px]" : "h-9 w-9 text-[14px]";
  return (
    <span
      aria-hidden
      className={`flex ${dimensions} shrink-0 items-center justify-center rounded-xl border border-hairline bg-white font-medium tracking-tight text-ink`}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}

export default function Experience() {
  const { lang } = useLanguage();
  const t = getDictionary(lang);
  const [expanded, setExpanded] = useState(false);

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

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {companies.map((company) => (
                    <a
                      key={company.id}
                      href={company.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-hairline py-1.5 pl-1.5 pr-3.5 transition-colors duration-300 hover:border-ink"
                    >
                      <CompanyMark name={company.name} size="sm" />
                      <span className="text-[13px] font-medium">{company.name}</span>
                      <span
                        aria-hidden
                        className="text-[12px] text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
                      >
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
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

        <Reveal as="div" delay={160} className="mt-8 md:mt-10">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="flex w-full items-center justify-between gap-4 rounded-3xl border border-hairline bg-white px-7 py-6 text-left transition-colors duration-300 hover:border-ink md:px-8"
          >
            <span className="flex items-center gap-3">
              <span className="text-[19px] font-medium tracking-tight md:text-[21px]">
                {t.experience.previousLabel}
              </span>
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[12px] font-medium text-accent">
                {t.experience.previous.length}
              </span>
            </span>
            <span
              aria-hidden
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-[15px] transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </Reveal>

        {expanded && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {t.experience.previous.map((job, index) => (
              <Reveal
                key={job.company}
                as="article"
                delay={index * 70}
                className="rounded-3xl border border-hairline p-7 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <CompanyMark name={job.company} />
                    <div>
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1.5"
                      >
                        <span className="text-[18px] font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-[20px]">
                          {job.company}
                        </span>
                        <span
                          aria-hidden
                          className="text-[13px] text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
                        >
                          ↗
                        </span>
                      </a>
                      <p className="text-[15px] text-muted">{job.role}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-[13px] text-muted">{job.period}</span>
                </div>

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
        )}
      </div>
    </section>
  );
}
