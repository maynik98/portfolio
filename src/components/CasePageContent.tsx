"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";
import { localizeProject, type Project, type ShotRatio } from "@/lib/projects";
import type { Company } from "@/lib/companies";
import { localizeCompany } from "@/lib/companies";
import { site } from "@/lib/site";

const SHOT_ASPECT: Record<ShotRatio, string> = {
  wide: "aspect-[16/9]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  tall: "aspect-[9/16]",
};

/** Широкие кадры занимают всю ширину сетки. */
const SHOT_SPAN: Record<ShotRatio, string> = {
  wide: "md:col-span-2",
  landscape: "",
  square: "",
  portrait: "",
  tall: "",
};

function BlockLabel({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <Reveal as="div" className={`flex items-center gap-2.5 ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
        {children}
      </span>
    </Reveal>
  );
}

type CasePageContentProps = {
  rawProject: Project;
  index: number;
  previous?: Project;
  next?: Project;
  rawCompany?: Company;
};

export default function CasePageContent({
  rawProject,
  index,
  previous,
  next,
  rawCompany,
}: CasePageContentProps) {
  const { lang } = useLanguage();
  const t = getDictionary(lang);

  const project = localizeProject(rawProject, lang);
  const previousProject = previous ? localizeProject(previous, lang) : undefined;
  const nextProject = next ? localizeProject(next, lang) : undefined;
  const company = rawCompany ? localizeCompany(rawCompany, lang) : undefined;

  const meta = [
    { label: t.casePage.project, value: project.title },
    { label: t.casePage.projectType, value: project.categories.join(" · ") },
    { label: t.casePage.company, value: company ? company.name : t.casePage.other },
    project.year ? { label: t.casePage.year, value: project.year } : null,
    project.role ? { label: t.casePage.myRole, value: project.role } : null,
  ].filter((item): item is { label: string; value: string } => item !== null);

  return (
    <article>
      {/* Обложка */}
      <header className="mx-auto w-full max-w-6xl px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
        <Reveal as="div">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-[14px] text-muted transition-colors hover:text-ink"
          >
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              ←
            </span>
            {t.casePage.allProjects}
          </Link>
        </Reveal>

        <Reveal as="div" delay={60} className="mt-10 flex flex-wrap items-center gap-3 md:mt-14">
          <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
            {project.categories.join(" · ")}
          </span>
          {company && (
            <Link
              href={`/company/${company.id}`}
              className="rounded-full border border-hairline px-3 py-1 text-[12px] font-medium uppercase tracking-[0.1em] text-muted transition-colors hover:border-ink hover:text-ink"
            >
              {company.name}
            </Link>
          )}
        </Reveal>

        <Reveal as="h1" delay={110}>
          <span className="mt-5 block max-w-[20ch] text-[clamp(2.25rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.03em]">
            {project.title}
          </span>
        </Reveal>

        <Reveal as="p" delay={170}>
          <span className="mt-8 block max-w-[56ch] text-[18px] leading-[1.6] text-muted md:text-[21px]">
            {project.summary}
          </span>
        </Reveal>

        <Reveal as="div" delay={230} className="mt-12 md:mt-16">
          <ProjectCover
            project={project}
            index={index}
            large
            priority
            className="aspect-[16/10] rounded-3xl md:aspect-[16/9]"
          />
        </Reveal>

        {project.files && project.files.length > 0 && (
          <Reveal as="div" delay={280} className="mt-8 flex flex-wrap gap-3">
            {project.files.map((file) => (
              <a
                key={file.href}
                href={file.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-hairline px-6 py-3 text-[15px] font-medium transition-colors duration-300 hover:border-ink"
              >
                {file.label}
                <span
                  aria-hidden
                  className="text-accent transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            ))}
          </Reveal>
        )}

        <dl className="mt-12 grid grid-cols-2 gap-px border-t border-hairline md:mt-16 md:grid-cols-4">
          {meta.map((item, itemIndex) => (
            <Reveal
              key={item.label}
              as="div"
              delay={itemIndex * 70}
              className="border-b border-hairline py-6 pr-6"
            >
              <dt className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted">
                {item.label}
              </dt>
              <dd className="mt-2.5 text-[16px] leading-[1.5] tracking-tight md:text-[17px]">
                {item.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </header>

      {/* Задача */}
      {project.task && (
        <section className="border-t border-hairline">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              <BlockLabel className="md:col-span-3">{t.casePage.task}</BlockLabel>
              <div className="md:col-span-9 md:col-start-4">
                <Reveal as="p" delay={80}>
                  <span className="block text-[19px] leading-[1.6] tracking-tight md:text-[26px]">
                    {project.task}
                  </span>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Мой вклад */}
      {project.contribution && (
        <section className="border-t border-hairline bg-ink text-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              <Reveal as="div" className="flex items-center gap-2.5 md:col-span-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/60">
                  {t.casePage.contribution}
                </span>
              </Reveal>
              <div className="md:col-span-9 md:col-start-4">
                <Reveal as="p" delay={80}>
                  <span className="block max-w-[62ch] text-[17px] leading-[1.65] text-white/90 md:text-[19px]">
                    {project.contribution}
                  </span>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Процесс */}
      {project.process && project.process.length > 0 && (
        <section className="border-t border-hairline bg-surface">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              <BlockLabel className="md:col-span-3">{t.casePage.process}</BlockLabel>

              <ol className="md:col-span-9 md:col-start-4">
                {project.process.map((step, stepIndex) => (
                  <Reveal
                    key={step.step}
                    as="li"
                    delay={stepIndex * 60}
                    className="border-t border-hairline py-7 first:border-t-0 first:pt-0 md:py-9"
                  >
                    <div className="flex gap-6 md:gap-10">
                      <span className="mt-1 text-[13px] font-medium tabular-nums text-accent">
                        {String(stepIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[20px] font-medium tracking-tight md:text-[24px]">
                          {step.step}
                        </h3>
                        <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.65] text-muted md:text-[17px]">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* Решение */}
      {project.solution && project.solution.length > 0 && (
        <section className="border-t border-hairline">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              <BlockLabel className="md:col-span-3">{t.casePage.solution}</BlockLabel>

              <ul className="md:col-span-9 md:col-start-4">
                {project.solution.map((item, itemIndex) => (
                  <Reveal
                    key={item}
                    as="li"
                    delay={itemIndex * 60}
                    className="flex gap-5 border-b border-hairline py-6 last:border-b-0 md:gap-7 md:py-7"
                  >
                    <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-[17px] leading-[1.6] md:text-[19px]">
                      {item}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Результат */}
      {project.results.length > 0 && (
        <section className="border-t border-hairline">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
            <BlockLabel>{t.casePage.result}</BlockLabel>

            <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-x-6 md:gap-y-10">
              {project.results.map((shot, shotIndex) => (
                <Reveal
                  key={shot.caption}
                  as="figure"
                  delay={(shotIndex % 2) * 90}
                  className={SHOT_SPAN[shot.ratio]}
                >
                  <div
                    className={`group/shot relative overflow-hidden rounded-3xl border border-hairline bg-surface ${SHOT_ASPECT[shot.ratio]} ${shot.href ? "block" : ""}`}
                  >
                    {shot.video ? (
                      <video
                        src={shot.video}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 h-full w-full object-contain p-2"
                      />
                    ) : shot.src ? (
                      shot.href ? (
                        <a
                          href={shot.href}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute inset-0 block"
                        >
                          <Image
                            src={shot.src}
                            alt={shot.caption}
                            fill
                            sizes={
                              shot.ratio === "wide"
                                ? "(max-width: 768px) 100vw, 1152px"
                                : "(max-width: 768px) 100vw, 560px"
                            }
                            className="object-contain p-4 transition-transform duration-300 group-hover/shot:scale-[1.02] md:p-6"
                          />
                          <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 text-[12px] font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover/shot:opacity-100">
                            {t.casePage.openPdf}
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 12 12"
                              fill="none"
                              aria-hidden
                            >
                              <path
                                d="M3 9L9 3M9 3H4.5M9 3V7.5"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      ) : (
                        <Image
                          src={shot.src}
                          alt={shot.caption}
                          fill
                          sizes={
                            shot.ratio === "wide"
                              ? "(max-width: 768px) 100vw, 1152px"
                              : "(max-width: 768px) 100vw, 560px"
                          }
                          className="object-contain p-4 md:p-6"
                        />
                      )
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-6">
                        <span className="text-[14px] text-muted">
                          {t.casePage.imageComingSoon}
                        </span>
                      </div>
                    )}
                  </div>

                  <figcaption className="mt-3.5 text-[14px] leading-[1.5] text-muted">
                    {shot.caption}
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Другие проекты */}
      <nav className="border-t border-hairline">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px px-6 md:grid-cols-2 md:px-10">
          {previousProject && (
            <Link
              href={`/work/${previousProject.slug}`}
              className="group border-b border-hairline py-10 md:border-b-0 md:pr-10"
            >
              <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
                {t.casePage.previous}
              </span>
              <span className="mt-3 block text-[22px] font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-[28px]">
                {previousProject.title}
              </span>
            </Link>
          )}

          {nextProject && (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group py-10 md:border-l md:border-hairline md:pl-10 md:text-right"
            >
              <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
                {t.casePage.next}
              </span>
              <span className="mt-3 block text-[22px] font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-[28px]">
                {nextProject.title}
              </span>
            </Link>
          )}
        </div>
      </nav>

      {/* CTA */}
      <section className="border-t border-hairline bg-ink text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal as="h2">
            <span className="block max-w-[24ch] text-[clamp(1.75rem,4.4vw,3rem)] font-medium leading-[1.06] tracking-tight">
              {t.casePage.ctaTitle}
            </span>
          </Reveal>

          <Reveal as="div" delay={90} className="mt-9">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
            >
              {t.casePage.ctaButton}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
