import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompanyPageContent from "@/components/CompanyPageContent";
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

  return <CompanyPageContent rawCompany={company} projects={projects} />;
}
