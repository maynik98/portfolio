import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CasePageContent from "@/components/CasePageContent";
import { getProject, getProjectNeighbours, projects } from "@/lib/projects";
import { getCompany } from "@/lib/companies";
import { site } from "@/lib/site";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const { previous, next } = getProjectNeighbours(slug);
  const company = project.companyId ? getCompany(project.companyId) : undefined;

  return (
    <CasePageContent
      rawProject={project}
      index={index}
      previous={previous}
      next={next}
      rawCompany={company}
    />
  );
}
