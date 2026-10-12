import type { Metadata } from "next";
import DeveloperPageContent from "@/components/DeveloperPageContent";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Разработка — ${site.name}`,
  description:
    "Антон Майник как разработчик ИИ-решений: Telegram-боты с LLM, ИИ-агенты, веб-сервисы и мобильные приложения — задача, решение и результат по каждому проекту.",
  openGraph: {
    title: `${site.name} — разработчик ИИ-решений`,
    description:
      "ИИ-агенты, Telegram-боты, веб-сервисы и мобильные приложения: стек, подход и проекты.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function DeveloperPage() {
  return <DeveloperPageContent />;
}
