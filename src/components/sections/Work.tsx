"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ProjectCover from "@/components/ProjectCover";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { companies } from "@/lib/companies";
import { projects, type Project } from "@/lib/projects";

type CompanyFilter = "all" | "globalnet" | "gnm" | "other";

const COMPANY_FILTERS: { id: CompanyFilter; label: string }[] = [
  { id: "all", label: "Все" },
  ...companies.map((company) => ({ id: company.id as CompanyFilter, label: company.name })),
  { id: "other", label: "Other" },
];

function matchesCompany(project: Project, filter: CompanyFilter) {
  if (filter === "all") return true;
  if (filter === "other") return !project.companyId;
  return project.companyId === filter;
}

function ProjectCard({
  project,
  index,
  delay = 0,
}: {
  project: Project;
  index: number;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay}>
      <Link href={`/work/${project.slug}`} className="group block">
        <ProjectCover
          project={project}
          index={index}
          className="aspect-[4/3] rounded-3xl transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_60px_-24px_rgba(10,10,10,0.28)]"
        />

        <div className="mt-6 md:mt-8">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
            {project.categories.join(" · ")}
          </p>
          <p className="mt-3 text-[16px] leading-[1.6] text-muted">
            {project.summary}
          </p>

          <span className="mt-5 inline-flex shrink-0 items-center gap-2 text-[15px] font-medium transition-colors duration-300 group-hover:text-accent">
            Смотреть кейс
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
  );
}

export default function Work() {
  const [companyFilter, setCompanyFilter] = useState<CompanyFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const companyFiltered = useMemo(
    () => projects.filter((project) => matchesCompany(project, companyFilter)),
    [companyFilter],
  );

  const categories = useMemo(
    () => Array.from(new Set(companyFiltered.flatMap((project) => project.categories))),
    [companyFiltered],
  );

  const filtered = useMemo(
    () =>
      categoryFilter === "all"
        ? companyFiltered
        : companyFiltered.filter((project) => project.categories.includes(categoryFilter)),
    [companyFiltered, categoryFilter],
  );

  return (
    <section id="work" className="scroll-mt-20 border-t border-hairline">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <SectionHeading
          label="Избранные проекты"
          title="Проекты, где дизайн решал задачу бизнеса."
        />

        {/* Фильтр по компаниям */}
        <Reveal as="div" delay={100} className="mt-10 flex flex-wrap gap-2 md:mt-14">
          {COMPANY_FILTERS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                setCompanyFilter(option.id);
                setCategoryFilter("all");
              }}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                companyFilter === option.id
                  ? "border-ink bg-ink text-white"
                  : "border-hairline text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {option.label}
            </button>
          ))}
        </Reveal>

        {/* Фильтр по категориям */}
        {categories.length > 1 && (
          <Reveal as="div" delay={140} className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategoryFilter("all")}
              className={`rounded-full px-4 py-1.5 text-[13px] transition-colors duration-300 ${
                categoryFilter === "all"
                  ? "text-accent"
                  : "text-muted hover:text-ink"
              }`}
            >
              Все категории
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setCategoryFilter(category)}
                className={`rounded-full px-4 py-1.5 text-[13px] transition-colors duration-300 ${
                  categoryFilter === category
                    ? "text-accent"
                    : "text-muted hover:text-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </Reveal>
        )}

        {filtered.length > 0 ? (
          <div className="mt-14 grid gap-x-8 gap-y-16 md:mt-20 md:grid-cols-2 md:gap-y-24">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                delay={(index % 2) * 90}
              />
            ))}
          </div>
        ) : (
          <p className="mt-14 text-[16px] text-muted">
            По выбранному фильтру проектов пока нет.
          </p>
        )}
      </div>
    </section>
  );
}
