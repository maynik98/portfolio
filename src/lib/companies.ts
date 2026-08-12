export type CompanyId = "globalnet" | "gnm";

export type Company = {
  id: CompanyId;
  name: string;
  /** Короткое описание компании — только факты, видимые в материалах. */
  description: string;
  url: string;
};

export const companies: Company[] = [
  {
    id: "gnm",
    name: "GNM",
    description:
      "Оператор пиринговой инфраструктуры и точки обмена трафиком GNM-IX. Визуальный язык и дизайн-система бренда — от логотипа до сайта, презентаций и мерча — разрабатывались с нуля.",
    url: "https://gnm.net",
  },
  {
    id: "globalnet",
    name: "GlobalNet",
    description:
      "Оператор сетевой инфраструктуры и дата-центровых сервисов: магистральные каналы, CDN, DDoS-защита и точка обмена трафиком DATAIX.",
    url: "https://gblnet.ru/ru",
  },
];

export function getCompany(id: string): Company | undefined {
  return companies.find((company) => company.id === id);
}
