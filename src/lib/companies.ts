export type CompanyId = "globalnet" | "gnm";

export type Company = {
  id: CompanyId;
  name: string;
  description: string;
  url: string;
  en?: {
    description: string;
  };
};

export const companies: Company[] = [
  {
    id: "gnm",
    name: "GNM",
    description:
      "Оператор пиринговой инфраструктуры и точки обмена трафиком GNM-IX. Визуальный язык и дизайн-система бренда — от логотипа до сайта, презентаций и мерча — разрабатывались с нуля.",
    url: "https://gnm.net",
    en: {
      description:
        "Operator of peering infrastructure and the GNM-IX traffic exchange point. The brand's visual language and design system — from the logo to the website, presentations, and merch — were built from the ground up.",
    },
  },
  {
    id: "globalnet",
    name: "GlobalNet",
    description:
      "Оператор сетевой инфраструктуры и дата-центровых сервисов: магистральные каналы, CDN, DDoS-защита и точка обмена трафиком DATAIX.",
    url: "https://gblnet.ru/ru",
    en: {
      description:
        "Operator of network infrastructure and data-center services: backbone links, CDN, DDoS protection, and the DATAIX traffic exchange point.",
    },
  },
];

export function getCompany(id: string): Company | undefined {
  return companies.find((company) => company.id === id);
}

/** Returns a company object with the description localized for the given language. */
export function localizeCompany(company: Company, lang: "ru" | "en"): Company {
  if (lang !== "en" || !company.en) return company;
  return { ...company, description: company.en.description };
}
