"use client";

import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";
import { getDevProjects, localizeProject } from "@/lib/projects";
import { contactMethods, site } from "@/lib/site";

/** Отдельная страница «я как разработчик» — её удобно отправлять по ссылке на вакансию. */
export default function DeveloperPageContent() {
  const { lang } = useLanguage();
  const t = getDictionary(lang);
  const p = t.devPage;
  const projects = getDevProjects().map((project) => localizeProject(project, lang));

  return (
    <article>
      {/* Шапка */}
      <header className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-64 h-[42rem] w-[42rem] rounded-full opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(29,78,216,0.13) 0%, rgba(29,78,216,0) 68%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
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
              {p.backHome}
            </Link>
          </Reveal>

          <Reveal as="p" delay={60}>
            <span className="mt-10 block text-[12px] font-medium uppercase tracking-[0.18em] text-accent md:mt-14">
              {p.eyebrow}
            </span>
          </Reveal>

          <Reveal as="h1" delay={110}>
            <span className="mt-5 block max-w-[22ch] text-[clamp(2.25rem,6.4vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.03em]">
              {p.title}
            </span>
          </Reveal>

          <Reveal as="p" delay={170}>
            <span className="mt-8 block max-w-[60ch] text-[18px] leading-[1.6] text-muted md:text-[21px]">
              {p.subtitle}
            </span>
          </Reveal>

          <Reveal as="div" delay={220} className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-accent"
            >
              {p.contact}
            </a>
            <a
              href={site.telegram.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-hairline px-7 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:border-ink"
            >
              Telegram {site.telegram.handle}
            </a>
            <a
              href={lang === "en" ? "/resume/Anton_Maynik_Resume_Developer_EN.pdf" : "/resume/Anton_Maynik_Resume_Developer_RU.pdf"}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:border-ink"
            >
              {p.resume}
              <span aria-hidden className="text-accent transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </Reveal>

          <dl className="mt-16 grid grid-cols-2 gap-px border-t border-hairline md:mt-24 md:grid-cols-4">
            {t.dev.stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                as="div"
                delay={index * 70}
                className="border-b border-hairline py-6 pr-6"
              >
                <dt className="text-[clamp(1.25rem,2.2vw,1.875rem)] font-medium leading-tight tracking-tight">
                  {stat.value}
                </dt>
                <dd className="mt-1.5 text-[14px] text-muted">{stat.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </header>

      {/* Подход */}
      <section className="border-t border-hairline bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeading label={p.approachLabel} title={p.approachTitle} />
          <ol className="mt-12 grid gap-4 md:mt-16 md:grid-cols-4">
            {p.approach.map((step, index) => (
              <Reveal
                key={step.number}
                as="li"
                delay={index * 80}
                className="rounded-3xl bg-white p-7"
              >
                <span className="text-[13px] font-medium tabular-nums text-accent">
                  {step.number}
                </span>
                <span className="mt-4 block text-[20px] font-medium tracking-tight">
                  {step.title}
                </span>
                <span className="mt-3 block text-[15px] leading-[1.55] text-muted">
                  {step.detail}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Стек */}
      <section className="border-t border-hairline">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeading label={p.stackLabel} title={p.stackTitle} />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-4">
            {p.stackGroups.map((group, index) => (
              <Reveal key={group.title} as="div" delay={index * 80}>
                <span className="block text-[12px] font-medium uppercase tracking-[0.16em] text-muted">
                  {group.title}
                </span>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-hairline px-3.5 py-1.5 text-[14px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Проекты */}
      <section className="border-t border-hairline">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeading label={p.projectsLabel} title={p.projectsTitle} />

          <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
            {projects.map((project, index) => (
              <Reveal
                key={project.slug}
                as="article"
                className="grid gap-8 border-t border-hairline pt-10 md:grid-cols-12 md:gap-12 md:pt-14"
              >
                <Link href={`/work/${project.slug}`} className="group block md:col-span-5">
                  <ProjectCover
                    project={project}
                    index={index}
                    className="aspect-[4/3] rounded-3xl transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_-24px_rgba(10,10,10,0.28)]"
                  />
                </Link>

                <div className="md:col-span-7">
                  <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
                    {project.categories.join(" · ")}
                    {project.year ? ` · ${project.year}` : ""}
                  </p>
                  <h3 className="mt-3 text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-[1.12] tracking-tight">
                    <Link href={`/work/${project.slug}`} className="transition-colors hover:text-accent">
                      {project.title}
                    </Link>
                  </h3>

                  <dl className="mt-6 space-y-5">
                    {project.task && (
                      <div>
                        <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                          {p.task}
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-[1.6]">{project.task}</dd>
                      </div>
                    )}
                    {project.contribution?.decision && (
                      <div>
                        <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                          {p.solution}
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-[1.6]">
                          {project.contribution.decision}
                        </dd>
                      </div>
                    )}
                    {project.contribution?.result && (
                      <div className="rounded-2xl bg-accent-soft px-5 py-4">
                        <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                          {p.result}
                        </dt>
                        <dd className="mt-1.5 text-[15px] leading-[1.6]">
                          {project.contribution.result}
                        </dd>
                      </div>
                    )}
                  </dl>

                  {project.dev && (
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <span className="mr-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                        {p.stack}
                      </span>
                      {project.dev.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-surface px-3 py-1 text-[13px] text-ink/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={`/work/${project.slug}`}
                    className="group mt-7 inline-flex items-center gap-2 text-[15px] font-medium transition-colors hover:text-accent"
                  >
                    {p.viewCase}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-hairline bg-ink text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal as="h2">
            <span className="block max-w-[24ch] text-[clamp(1.75rem,4.4vw,3rem)] font-medium leading-[1.06] tracking-tight">
              {p.ctaTitle}
            </span>
          </Reveal>
          <Reveal as="div" delay={90} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
            >
              {p.ctaButton}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                {...("external" in method && method.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="text-[15px] text-white/70 transition-colors hover:text-white"
              >
                {method.value}
              </a>
            ))}
          </Reveal>
        </div>
      </section>
    </article>
  );
}
