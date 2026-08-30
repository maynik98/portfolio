import type { Metadata } from "next";
import ResumePageContent from "@/components/ResumePageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Резюме — ${site.name}`,
  description: "Резюме Антона Майника: опыт, кейсы и контакты.",
};

export default function ResumePage() {
  return <ResumePageContent />;
}
