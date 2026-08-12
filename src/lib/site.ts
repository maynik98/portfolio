/**
 * Единственное место, где хранятся контакты.
 * Пустые значения не выводятся на сайте.
 */
export const site = {
  name: "Anton Maynik",
  role: "Lead Graphic Designer",
  email: "maynik98@mail.ru",
  /** Для отображения на сайте. */
  phone: "+7 903 646-22-99",
  /** Для ссылки tel: — только цифры и плюс. */
  phoneHref: "+79036462299",
  telegram: {
    handle: "@entwoi",
    href: "https://t.me/entwoi",
  },
  /** Дополнительные ссылки. Пустые href не выводятся. */
  links: [
    { label: "Behance", href: "" },
    { label: "LinkedIn", href: "" },
  ],
} as const;

export const activeLinks = site.links.filter((link) => link.href.length > 0);

/** Контакты одним списком — используется в футере и в секции «Контакты». */
export const contactMethods = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Телефон", value: site.phone, href: `tel:${site.phoneHref}` },
  {
    label: "Telegram",
    value: site.telegram.handle,
    href: site.telegram.href,
    external: true,
  },
] as const;
