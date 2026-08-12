import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CompanyWorkGrid from "@/components/CompanyWorkGrid";
import Reveal from "@/components/Reveal";
import { companies, getCompany } from "@/lib/companies";
import { getProjectsByCompany } from "@/lib/projects";
import { site } from "@/lib/site";

type CompanyPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return companies.map((company) => ({ id: company.id }));
}

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const { id } = await params;
  const company = getCompany(id);

  if (!company) return {};

  return {
    title: `${company.name} — ${site.name}`,
    description: company.description,
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { id } = await params;
  const company = getCompany(id);

  if (!company) notFound();

  const projects = getProjectsByCompany(company.id);

  return (
    <article>
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
            Все проекты
          </Link>
        </Reveal>

        <Reveal as="p" delay={60}>
          <span className="mt-10 block text-[12px] font-medium uppercase tracking-[0.18em] text-accent md:mt-14">
            Компания
          </span>
        </Reveal>

        <Reveal as="h1" delay={110}>
          <span className="mt-5 block max-w-[20ch] text-[clamp(2.25rem,7vw,5rem)] font-medium leading-[0.98] tracking-[-0.03em]">
            {company.name}
          </span>
        </Reveal>

        <Reveal as="p" delay={170}>
          <span className="mt-8 block max-w-[62ch] text-[18px] leading-[1.6] text-muted md:text-[21px]">
            {company.description}
          </span>
        </Reveal>

        <Reveal as="div" delay={220} className="mt-8">
          <a
            href={company.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-accent"
          >
            Сайт компании
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </Reveal>
      </header>

      <section className="border-t border-hairline">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <CompanyWorkGrid projects={projects} />
        </div>
      </section>
    </article>
  );
}
