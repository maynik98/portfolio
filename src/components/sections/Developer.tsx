"use client";

import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";
import { getDevProjects, localizeProject } from "@/lib/projects";

/**
 * Отдельный тёмный блок «Разработка» на главной: я как разработчик —
 * ключевые цифры и инженерные кейсы. Ведёт на отдельную страницу /developer,
 * которую удобно отправлять по ссылке.
 */
export default function Developer() {
  const { lang } = useLanguage();
  const t = getDictionary(lang);
  const devProjects = getDevProjects().map((project) => localizeProject(project, lang));

  return (
    <section id="dev" className="scroll-mt-20 bg-ink text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <Reveal as="div" className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/60">
            {t.dev.label}
          </span>
        </Reveal>

        <div className="mt-5 grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <Reveal as="h2" delay={80} className="md:col-span-7">
            <span className="block max-w-[20ch] text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.04] tracking-tight">
              {t.dev.title}
            </span>
          </Reveal>
          <Reveal as="p" delay={140} className="md:col-span-5">
            <span className="block text-[17px] leading-[1.65] text-white/70">
              {t.dev.description}
            </span>
          </Reveal>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px border-t border-white/15 md:mt-20 md:grid-cols-4">
          {t.dev.stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              as="div"
              delay={index * 70}
              className="border-b border-white/15 py-6 pr-6"
            >
              <dt className="text-[clamp(1.25rem,2.2vw,1.875rem)] font-medium leading-tight tracking-tight">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-[14px] text-white/55">{stat.label}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-14 grid gap-x-8 gap-y-14 md:mt-20 md:grid-cols-2 md:gap-y-20">
          {devProjects.map((project, index) => (
            <Reveal key={project.slug} as="article" delay={(index % 2) * 90}>
              <Link href={`/work/${project.slug}`} className="group block">
                <ProjectCover
                  project={project}
                  index={index}
                  className="aspect-[4/3] rounded-3xl ring-1 ring-white/10 transition-all duration-500 ease-out group-hover:-translate-y-1.5"
                />
                <div className="mt-6 md:mt-8">
                  <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#8fb0ff]">
                    {project.categories.join(" · ")}
                  </p>
                  <p className="mt-3 text-[16px] leading-[1.6] text-white/70">
                    {project.summary}
                  </p>
                  {project.dev && (
                    <p className="mt-4 text-[13px] leading-[1.5] text-white/50">
                      {project.dev.stack.slice(0, 5).join(" · ")}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium transition-colors duration-300 group-hover:text-[#8fb0ff]">
                    {t.dev.viewCase}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="div"
          delay={100}
          className="mt-16 flex flex-col items-start gap-4 border-t border-white/15 pt-10 md:mt-24 md:flex-row md:items-center md:justify-between"
        >
          <span className="text-[16px] text-white/60">{t.dev.pageHint}</span>
          <Link
            href="/developer"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-ink transition-colors duration-300 hover:bg-accent hover:text-white"
          >
            {t.dev.pageLink}
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
