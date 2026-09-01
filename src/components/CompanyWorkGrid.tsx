"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ProjectCover from "@/components/ProjectCover";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";
import { localizeProject, type Project } from "@/lib/projects";

export default function CompanyWorkGrid({ projects }: { projects: Project[] }) {
  const { lang } = useLanguage();
  const t = getDictionary(lang);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const localizedProjects = useMemo(
    () => projects.map((project) => localizeProject(project, lang)),
    [projects, lang],
  );

  const categories = useMemo(
    () => Array.from(new Set(localizedProjects.flatMap((project) => project.categories))),
    [localizedProjects],
  );

  const filtered = useMemo(
    () =>
      categoryFilter === "all"
        ? localizedProjects
        : localizedProjects.filter((project) => project.categories.includes(categoryFilter)),
    [localizedProjects, categoryFilter],
  );

  return (
    <div>
      {categories.length > 1 && (
        <Reveal as="div" className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategoryFilter("all")}
            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
              categoryFilter === "all"
                ? "border-ink bg-ink text-white"
                : "border-hairline text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {t.work.allCategories}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setCategoryFilter(category)}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                categoryFilter === category
                  ? "border-ink bg-ink text-white"
                  : "border-hairline text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </Reveal>
      )}

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-20">
          {filtered.map((project, index) => (
            <Reveal key={project.slug} as="article" delay={(index % 2) * 90}>
              <Link href={`/work/${project.slug}`} className="group block">
                <ProjectCover
                  project={project}
                  index={index}
                  className="aspect-[4/3] rounded-3xl transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_-24px_rgba(10,10,10,0.28)]"
                />
                <div className="mt-6">
                  <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
                    {project.categories.join(" · ")}
                  </p>
                  <p className="mt-3 text-[16px] leading-[1.6] text-muted">
                    {project.summary}
                  </p>
                  {project.contribution && (
                    <p className="mt-4 text-[13px] leading-[1.5] text-muted">
                      <span className="font-medium text-ink">{t.work.myRole}: </span>
                      {project.contribution.tags.join(" · ")}
                    </p>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-[16px] text-muted">{t.work.emptyCompany}</p>
      )}
    </div>
  );
}
