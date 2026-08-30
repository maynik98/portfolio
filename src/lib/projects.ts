import type { CompanyId } from "@/lib/companies";

/** Пропорция рамки, в которую вписывается изображение. */
export type ShotRatio = "wide" | "landscape" | "square" | "portrait" | "tall";

export type ResultShot = {
  caption: string;
  ratio: ShotRatio;
  /** Путь внутри /public. Без него и без video рисуется пустой слот-заглушка. */
  src?: string;
  /** Путь к видео (mp4) внутри /public. Рендерится как <video>, без звука. */
  video?: string;
  /** Ссылка на полный PDF (например, для обложки многостраничного лифлета/презентации) — картинка становится кликабельной. */
  href?: string;
};

export type ProjectFile = {
  label: string;
  href: string;
};

/**
 * Personal contribution vs. team result. Structured so a case page can show,
 * separately and explicitly: my role, what was mine vs. the team's, the
 * production constraints, the decision I made, and a concrete, fact-based
 * outcome (counts/formats/timelines) — not a business metric.
 */
export type Contribution = {
  role: string;
  /** Short 2-4 word tags for a compact card preview, e.g. ["Visual concept", "Graphic design", "Merch", "Production"]. */
  tags: string[];
  /** What I personally owned — bullet list. */
  scope: string[];
  /** Who else was involved and what they owned — bullet list. Omitted for solo projects. */
  team?: string[];
  /** Production/technical constraints that shaped the decision — bullet list. */
  constraints?: string[];
  /** The decision I made in response to the constraints. */
  decision?: string;
  /** What was actually produced — counts, formats, pages, timeline. Not a business metric. */
  production: string;
  /** What happened with the work afterward — shipped, published, adopted, reused. A consequence, not a restatement of `production`. */
  result: string;
};

/** English overrides for translatable text fields. Any field left out falls back to the Russian original. */
export type ProjectTranslation = {
  title?: string;
  summary?: string;
  role?: string;
  task?: string;
  /** Full override — replaces the Russian contribution object entirely when present. */
  contribution?: Contribution;
  /** Software actually used on this case. */
  tools?: string[];
  /** Captions aligned by index with `results`. */
  resultCaptions?: string[];
  /** Labels aligned by index with `files`. */
  fileLabels?: string[];
};

export type Project = {
  slug: string;
  title: string;
  /** Одна или несколько категорий — используются в карточках и фильтре. */
  categories: string[];
  /** Компания, к которой относится кейс. Не указана — кейс попадает в «Other». */
  companyId?: CompanyId;
  /** Short description shown on the cards in "Избранные проекты". */
  summary: string;
  year?: string;
  role?: string;
  task?: string;
  contribution?: Contribution;
  /** Software actually used on this case — shown as a compact "Tools" line. */
  tools?: string[];
  /** Shown by default in the homepage "Featured" grid. Every project stays reachable via "Show all". */
  featured?: boolean;
  results: ResultShot[];
  /** Файлы, которые можно открыть целиком (PDF, DOCX и т.д.). */
  files?: ProjectFile[];
  /** Index into the cover-tone variants for this project's colour family (см. ProjectCover.tsx). */
  tone: number;
  /** English translation overrides. */
  en?: ProjectTranslation;
};

export const projects: Project[] = [
  // ---------------------------------------------------------------------
  // GNM
  // ---------------------------------------------------------------------
  {
    slug: "globalnet-gnm",
    featured: true,
    title: "GNM — фирменный стиль и мерч",
    categories: ["Branding", "Print"],
    companyId: "gnm",
    summary:
      "Единая визуальная система GNM для рекламы, digital, печати, презентаций, мерча и мероприятий — вместо разрозненных материалов от разных подрядчиков.",
    year: "2023 — н. в.",
    role: "Lead Graphic Designer, отдел маркетинга",
    contribution: {
      role: "Lead Graphic Designer, отдел маркетинга",
      tags: ["Visual concept", "Graphic design", "Merch", "Production"],
      scope: [
        "Разработал визуальную концепцию мерч-линейки",
        "Сделал дизайн и подготовил печатные макеты",
        "Согласовывал цветопробы и тиражи с типографией",
      ],
      team: [
        "Маркетинг сформировал список носителей и бюджет",
        "Руководитель утвердил концепцию и цветовую линейку",
        "Типография — печать и контроль тиража",
      ],
      constraints: [
        "Один визуальный принцип должен был работать и в digital, и в печати",
        "Материалы нужно было быстро масштабировать на новые носители",
        "Реальные допуски печати — Pantone, вылеты, цветопрофиль",
      ],
      decision: "Собрал систему визуальных элементов, которая переносится между шоперами, стикерами и худи без переизобретения заново на каждом новом носителе.",
      production: "30+ единиц мерча по единой системе — шоперы, стикеры, худи, ланьярды.",
      result: "Финальные макеты ушли в печать и с тех пор переиздаются под каждое новое мероприятие компании; часть тиража допечатывали дополнительно из-за спроса.",
    },
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    task: "Визуальная коммуникация компании собиралась из материалов, которые в разное время делали разные исполнители и подрядчики. Из-за этого носители плохо связывались друг с другом, а каждая новая задача начиналась с согласования стиля вместо работы над содержанием. Нужна была единая система, в которой любой носитель — от баннера на конференции до слайда в презентации — читается как один бренд.",
    results: [
      {
        caption: "Шоперы GNM — варианты дизайна",
        ratio: "landscape",
        src: "/work/globalnet-gnm/merch-frame.png",
      },
      {
        caption: "Стикер-пак: макеты",
        ratio: "landscape",
        src: "/work/globalnet-gnm/stickers-artwork.png",
      },
      {
        caption: "Напечатанные стикеры",
        ratio: "landscape",
        src: "/work/globalnet-gnm/stickers-print.jpg",
      },
      {
        caption: "Шопер «Driving the Internet»",
        ratio: "portrait",
        src: "/work/globalnet-gnm/tote-driving.jpg",
      },
      {
        caption: "Шопер «Ciao, Peers!»",
        ratio: "portrait",
        src: "/work/globalnet-gnm/tote-ciao-peers.jpg",
      },
      {
        caption: "Ланьярды",
        ratio: "portrait",
        src: "/work/globalnet-gnm/lanyards.jpg",
      },
      {
        caption: "Худи GNM",
        ratio: "portrait",
        src: "/work/globalnet-gnm/merch-screen.png",
      },
      {
        caption: "Худи GNM — макет (перед, спина, цвет Pantone 274 C)",
        ratio: "wide",
        src: "/work/globalnet-gnm/hoodie-mockup.png",
      },
    ],
    files: [
      { label: "Мерч — PDF макет", href: "/work/globalnet-gnm/merch-frame.pdf" },
    ],
    tone: 0,
    en: {
      title: "GNM — Brand Identity & Merch",
      summary:
        "A unified GNM visual system across advertising, digital, print, presentations, merch, and events — replacing disconnected materials from different vendors.",
      role: "Lead Graphic Designer, Marketing Department",
      contribution: {
        role: "Lead Graphic Designer, Marketing Department",
        tags: ["Visual concept", "Graphic design", "Merch", "Production"],
        scope: [
          "Developed the merch line's visual concept",
          "Designed and prepared the print-ready layouts",
          "Signed off on color proofs and print runs with the vendor",
        ],
        team: [
          "Marketing set the list of items and the budget",
          "The department head approved the concept and color line",
          "The print vendor handled production and run control",
        ],
        constraints: [
          "One visual principle had to work in both digital and print",
          "Materials needed to scale quickly to new items",
          "Real print tolerances — Pantone matching, bleeds, color profile",
        ],
        decision: "Built a system of visual elements that carries across tote bags, stickers, and hoodies without being reinvented for every new item.",
        production: "30+ merch items on one system — tote bags, stickers, hoodies, lanyards.",
        result: "The final artwork went to print and has been reprinted for new company events since; part of the run was reprinted due to demand.",
      },
      tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      task: "The company's visual communications were assembled from materials made at different times by different freelancers and vendors. As a result, materials didn't connect well with each other, and every new task began with agreeing on style instead of working on content. What was needed was a unified system in which any material — from a conference banner to a presentation slide — reads as one brand.",
      resultCaptions: [
        "GNM tote bags — design options",
        "Sticker pack: artwork",
        "Printed stickers",
        "Tote bag \"Driving the Internet\"",
        "Tote bag \"Ciao, Peers!\"",
        "Lanyards",
        "GNM hoodie",
        "GNM hoodie — mockup (front, back, Pantone 274 C)",
      ],
      fileLabels: ["Merch — PDF layout"],
    },
  },
  {
    slug: "corporate-website",
    featured: true,
    title: "GNM-IX — сайт",
    categories: ["Web Design"],
    companyId: "gnm",
    summary:
      "Дизайн главной страницы корпоративного сайта gnm.net и страницы «Exchange Locations & Network Coverage» с интерактивной картой точек присутствия.",
    year: "2023 — н. в.",
    role: "Дизайн интерфейсов, структура, передача в разработку",
    contribution: {
      role: "Дизайн интерфейсов, структура, передача в разработку",
      tags: ["UI design", "Web", "Handoff"],
      scope: [
        "Спроектировал структуру и UI страницы «Exchange Locations & Network Coverage»",
        "Подготовил адаптивные макеты и состояния элементов",
        "Передал ассеты и макеты в разработку",
      ],
      team: [
        "Главную страницу верстало внешнее агентство — я отвечал за дизайн-концепцию",
        "Разработка реализовывала вёрстку по макетам",
        "Маркетинг формировал контент и цели страницы",
      ],
      constraints: [
        "Новые страницы должны были встроиться в существующую архитектуру сайта",
        "Решение должно было наследовать фирменный стиль, но работать на длинном скролле",
      ],
      decision: "Спроектировал страницу с картой точек присутствия самостоятельно — от структуры до финальных макетов, отдельно от совместной с агентством работы над главной.",
      production: "8 экранов и состояний сайта (главная + карта точек присутствия), адаптированных под desktop и мобильную версию.",
      result: "Страница с картой точек присутствия опубликована на gnm.net и используется отделом продаж при показе покрытия сети клиентам.",
    },
    tools: ["Figma"],
    task: "Передо мной стояла задача — улучшить сайт gnm.net и сделать его удобнее для посетителя. Сайту не хватало страниц под новые продукты и направления, а существующие разделы отвечали не на все вопросы. Нужно было спроектировать страницы так, чтобы они закрывали задачи маркетинга, встраивались в текущую архитектуру сайта и уходили в разработку без долгих доработок.",
    results: [
      {
        caption: "Главная страница сайта gnm.net",
        ratio: "tall",
        src: "/work/corporate-website/homepage.jpg",
      },
      {
        caption: "Страница «Exchange Locations & Network Coverage» — карта точек присутствия",
        ratio: "wide",
        src: "/work/corporate-website/network-map.png",
      },
    ],
    tone: 1,
    en: {
      title: "GNM-IX — Website",
      summary:
        "Design of the gnm.net corporate website homepage and the \"Exchange Locations & Network Coverage\" page with an interactive presence map.",
      role: "Interface design, structure, developer handoff",
      contribution: {
        role: "Interface design, structure, developer handoff",
        tags: ["UI design", "Web", "Handoff"],
        scope: [
          "Designed the structure and UI of the \"Exchange Locations & Network Coverage\" page",
          "Prepared responsive layouts and element states",
          "Handed off assets and mockups to development",
        ],
        team: [
          "The homepage was built by an outside agency — I owned the design concept",
          "Development implemented the build from the mockups",
          "Marketing set the content and goals for the page",
        ],
        constraints: [
          "New pages had to fit the site's existing architecture",
          "The solution had to inherit the brand identity while working on a long scroll",
        ],
        decision: "Designed the presence-map page entirely on my own — from structure to final layouts — separately from the agency-shared work on the homepage.",
        production: "8 site screens and states (homepage + presence map), adapted for desktop and mobile.",
        result: "The presence-map page shipped on gnm.net and is used by sales to show network coverage to clients.",
      },
      tools: ["Figma"],
      task: "My task was to improve the gnm.net website and make it more convenient for visitors. The site lacked pages for new products and directions, and existing sections didn't answer all of a visitor's questions. New pages needed to be designed to meet marketing goals, fit into the site's existing architecture, and go into development without lengthy rework.",
      resultCaptions: [
        "gnm.net homepage",
        "\"Exchange Locations & Network Coverage\" page — presence map",
      ],
    },
  },
  {
    slug: "marketing-campaigns",
    featured: true,
    title: "GNM — маркетинговые кампании",
    categories: ["Marketing"],
    companyId: "gnm",
    summary:
      "Система рекламных креативов GNM, которая держит одно сообщение во всех форматах — от баннеров до вертикальных сторис — без пересборки каждого размера с нуля.",
    year: "2023 — н. в.",
    role: "Дизайн рекламных материалов, адаптация под каналы",
    contribution: {
      role: "Дизайн рекламных материалов, адаптация под каналы",
      tags: ["Key visual", "Ad design", "Adaptation"],
      scope: [
        "Нашёл визуальный ключ кампании",
        "Собрал мастер-макеты и размерную сетку",
        "Адаптировал материалы под форматы площадок",
      ],
      team: [
        "Маркетинг определял каналы размещения и сроки",
        "Руководитель утверждал финальный визуальный ключ",
      ],
      constraints: [
        "Сообщение должно было остаться читаемым в самом мелком формате",
        "Десятки размеров нужно было адаптировать без ручной пересборки каждого файла",
      ],
      decision: "Сделал мастер-макеты, из которых новые форматы собираются по сетке, а не переотрисовываются с нуля.",
      production: "20+ рекламных форматов адаптировано из единого key visual — от широких баннеров до вертикальных сторис.",
      result: "Мастер-макеты используются маркетингом как основа для новых кампаний — форматы адаптируются без участия дизайнера на каждый размер.",
    },
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    task: "Рекламные кампании выходили в разных каналах и форматах, у каждого — свои требования к размерам и объёму текста. Нужно было решение, при котором сообщение остаётся узнаваемым и читаемым везде, а подготовка десятков размеров не превращается в ручную работу над каждым файлом.",
    results: [
      {
        caption: "Креатив «Backbone Expansion in Key European PoPs»",
        ratio: "wide",
        src: "/work/marketing-campaigns/backbone-expansion.png",
      },
      {
        caption: "Пост для соцсетей: GNM в Германии",
        ratio: "square",
        src: "/work/marketing-campaigns/germany-social.png",
      },
      {
        caption: "Вертикальный формат: North America PoPs",
        ratio: "tall",
        src: "/work/marketing-campaigns/north-america-pops.png",
      },
      {
        caption: "Карта сети",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-social-1.png",
      },
      {
        caption: "Заставка для новостей",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-social-2.png",
      },
      {
        caption: "Карта: Германия",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-social-3.png",
      },
      {
        caption: "Публикация в соцсетях — вариант 1",
        ratio: "square",
        src: "/work/marketing-campaigns/gnm-social-4.png",
      },
      {
        caption: "Карта — вариант",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-social-6.png",
      },
      {
        caption: "Публикация в соцсетях: «Built for scale. Engineered for performance.»",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-social-7.png",
      },
      {
        caption: "Таргетированный креатив — вариант 1",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-target-1.png",
      },
      {
        caption: "Таргетированный креатив — вариант 2",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-target-2.png",
      },
      {
        caption: "Таргетированный креатив — вариант 3",
        ratio: "square",
        src: "/work/marketing-campaigns/gnm-target-3.png",
      },
      {
        caption: "Таргетированный креатив — вариант 4",
        ratio: "square",
        src: "/work/marketing-campaigns/gnm-target-4.png",
      },
      {
        caption: "Таргетированный креатив: карта — вариант 1",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-target-5.png",
      },
      {
        caption: "Таргетированный креатив: «Connect from North America. Peer across Europe.»",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-target-6.png",
      },
      {
        caption: "Таргетированный креатив — вариант 5",
        ratio: "square",
        src: "/work/marketing-campaigns/gnm-target-7.png",
      },
      {
        caption: "Таргетированный креатив — вариант 6",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-target-8.png",
      },
    ],
    tone: 3,
    en: {
      title: "GNM — Marketing Campaigns",
      summary:
        "An ad-creative system for GNM that keeps one message consistent across every format — from banners to vertical stories — without rebuilding each size from scratch.",
      role: "Advertising material design, channel adaptation",
      contribution: {
        role: "Advertising material design, channel adaptation",
        tags: ["Key visual", "Ad design", "Adaptation"],
        scope: [
          "Found the campaign's visual key",
          "Built the master layouts and size grid",
          "Adapted materials to placement formats",
        ],
        team: [
          "Marketing defined the placement channels and deadlines",
          "The department head signed off on the final visual key",
        ],
        constraints: [
          "The message had to stay legible at the smallest format",
          "Dozens of sizes needed adapting without manually rebuilding every file",
        ],
        decision: "Built master layouts that new formats are assembled from via a grid, rather than redrawn from scratch.",
        production: "20+ ad formats adapted from a single key visual — from wide banners to vertical stories.",
        result: "The master layouts are used by marketing as the base for new campaigns — formats get adapted without a designer on every size.",
      },
      tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      task: "Ad campaigns ran across different channels and formats, each with its own size and text-length requirements. What was needed was a solution where the message stays recognizable and legible everywhere, and preparing dozens of sizes doesn't turn into manual work on every file.",
      resultCaptions: [
        "\"Backbone Expansion in Key European PoPs\" creative",
        "Social post: GNM in Germany",
        "Vertical format: North America PoPs",
        "Network map",
        "News intro screen",
        "Map: Germany",
        "Social post — option 1",
        "Map — option",
        "Social post: \"Built for scale. Engineered for performance.\"",
        "Targeted creative — option 1",
        "Targeted creative — option 2",
        "Targeted creative — option 3",
        "Targeted creative — option 4",
        "Targeted creative: map — option 1",
        "Targeted creative: \"Connect from North America. Peer across Europe.\"",
        "Targeted creative — option 5",
        "Targeted creative — option 6",
      ],
    },
  },
  {
    slug: "motion-design",
    featured: true,
    title: "GNM — видео и моушн-дизайн",
    categories: ["Motion", "Web Design"],
    companyId: "gnm",
    summary:
      "Анимированные ролики и новостные заставки GNM-IX: промо-акции, отчёты по трафику и объявления — используются в соцсетях и как заглушки для новостных дайджестов на сайте.",
    year: "2023 — н. в.",
    role: "Концепция, анимация, монтаж",
    contribution: {
      role: "Концепция, анимация, монтаж",
      tags: ["Concept", "Animation", "Editing"],
      scope: [
        "Написал сценарий и раскадровку",
        "Анимировал сцены и графику в After Effects",
        "Смонтировал и свёл со звуком, подготовил экспорт под каналы",
      ],
      team: [
        "Маркетинг формировал бриф на ролик",
        "Руководитель утверждал сценарий и раскадровку до анимации",
      ],
      constraints: [
        "Часть сообщений плохо работала в статике и требовала объяснения в динамике",
        "Ролики нужно было выпускать в едином визуальном языке с остальной коммуникацией",
      ],
      decision: "Утверждал раскадровку до анимации — решения обсуждались на этапе, где правки стоят дешевле всего.",
      production: "10+ роликов произведено внутри команды, включая экспорт под вертикальные форматы соцсетей.",
      result: "Ролики опубликованы в соцсетях компании и используются как заставки в новостных дайджестах на сайте.",
    },
    tools: ["After Effects", "Adobe Premiere Pro", "Adobe Photoshop"],
    task: "Часть сообщений компании плохо работала в статике: продукты и процессы требовали объяснения в динамике, а мероприятия и запуски — коротких роликов под конкретный канал. Нужно было производить видео внутри команды, в едином визуальном языке с остальной коммуникацией.",
    results: [
      {
        caption: "Промо: GNM-IX Peering Plus",
        ratio: "landscape",
        video: "/work/motion-design/gnm-insta-1.mp4",
      },
      {
        caption: "Промо: Connect to 700+ EU Networks from the USA",
        ratio: "landscape",
        video: "/work/motion-design/gnm-clip-1.mp4",
      },
      {
        caption: "Новостная заставка: «10 Tbps Reached»",
        ratio: "landscape",
        video: "/work/motion-design/gnm-clip-2.mp4",
      },
      {
        caption: "Анимация логотипа GNM",
        ratio: "landscape",
        video: "/work/motion-design/gnm-clip-3.mp4",
      },
      {
        caption: "Промо: Direct Access to 700+ European ASNs",
        ratio: "landscape",
        video: "/work/motion-design/gnm-composition-1.mp4",
      },
      {
        caption: "Новостная заставка: «GNM expands into North America»",
        ratio: "landscape",
        video: "/work/motion-design/gnm-composition-1b.mp4",
      },
      {
        caption: "Праздничная заставка: Happy New Year",
        ratio: "landscape",
        video: "/work/motion-design/gnm-composition-2.mp4",
      },
      {
        caption: "Промо: GNM-IX Start2Peer",
        ratio: "landscape",
        video: "/work/motion-design/gnm-composition-6.mp4",
      },
      {
        caption: "Фоновая анимация: световые линии",
        ratio: "landscape",
        video: "/work/motion-design/gnm-video-1.mp4",
      },
      {
        caption: "Новостная заставка: маршруты GNM — Sofia, Belgrade, Budapest",
        ratio: "landscape",
        video: "/work/motion-design/gnm-video-2.mp4",
      },
    ],
    tone: 4,
    en: {
      title: "GNM — Video & Motion Design",
      summary:
        "Animated clips and news intros for GNM-IX: promos, traffic reports, and announcements — used on social media and as placeholders for news digests on the site.",
      role: "Concept, animation, editing",
      contribution: {
        role: "Concept, animation, editing",
        tags: ["Concept", "Animation", "Editing"],
        scope: [
          "Wrote the script and storyboard",
          "Animated scenes and graphics in After Effects",
          "Edited and mixed sound, prepared exports per channel",
        ],
        team: [
          "Marketing set the brief for each clip",
          "The department head signed off on script and storyboard before animation",
        ],
        constraints: [
          "Some messages didn't work as static images and needed motion to explain them",
          "Clips had to ship in the same visual language as the rest of the communications",
        ],
        decision: "Got the storyboard approved before animation — decisions made at the stage where changes are cheapest.",
        production: "10+ clips produced in-house, including exports for vertical social formats.",
        result: "The clips are published on the company's social channels and used as placeholders in the site's news digests.",
      },
      tools: ["After Effects", "Adobe Premiere Pro", "Adobe Photoshop"],
      task: "Some of the company's messages didn't work well as static images: products and processes needed to be explained in motion, while events and launches needed short clips for specific channels. Video needed to be produced in-house, in the same visual language as the rest of the communications.",
      resultCaptions: [
        "Promo: GNM-IX Peering Plus",
        "Promo: Connect to 700+ EU Networks from the USA",
        "News intro: \"10 Tbps Reached\"",
        "GNM logo animation",
        "Promo: Direct Access to 700+ European ASNs",
        "News intro: \"GNM expands into North America\"",
        "Holiday intro: Happy New Year",
        "Promo: GNM-IX Start2Peer",
        "Background animation: light lines",
        "News intro: GNM routes — Sofia, Belgrade, Budapest",
      ],
    },
  },
  {
    slug: "print-exhibition-design",
    title: "GNM-IX — полиграфия и стенды",
    categories: ["Print"],
    companyId: "gnm",
    summary:
      "Комплект полиграфии и стендового оформления GNM-IX для мероприятий — читается по единой иерархии на расстоянии и вблизи, а не как набор разрозненных макетов.",
    year: "2023 — н. в.",
    role: "Дизайн, препресс, работа с подрядчиками",
    contribution: {
      role: "Дизайн, препресс, работа с подрядчиками",
      tags: ["Print design", "Prepress", "Vendor coordination"],
      scope: [
        "Готовил макеты и препресс-файлы под конкретные допуски печати",
        "Лично согласовывал тиражи и цветопробы с типографией",
      ],
      team: [
        "Маркетинг формировал список носителей под мероприятие",
        "Типография — печать и контроль допусков",
      ],
      constraints: [
        "Ошибка в вылетах или цветовом профиле стоит потерянного тиража",
        "Баннеры делались под конкретные мероприятия с интервалом около полугода",
      ],
      decision: "Проверял каждый макет перед отправкой в печать, а не полагался на постпродакшн правки.",
      production: "10+ материалов для стендов и мероприятий подготовлено к печати за несколько итераций фирменного стиля.",
      result: "Комплекты материалов используются на стендах компании на профильных конференциях на регулярной основе.",
    },
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    task: "На мероприятиях компания конкурирует за внимание в физическом пространстве, где решение принимается за несколько секунд с расстояния. При этом печать не прощает ошибок: макет с неверными вылетами или цветовым профилем возвращается с производства с потерей времени и бюджета. Баннеры для стендов делались под конкретные мероприятия с интервалом примерно в полгода — за это время фирменный стиль GNM прошёл путь от минимального набора элементов до зафиксированной системы.",
    files: [
      { label: "Лифлет — PDF", href: "/work/print-exhibition-design/leaflet.pdf" },
      {
        label: "Sales one-pager — PDF",
        href: "/work/print-exhibition-design/sales-onepager.pdf",
      },
    ],
    results: [
      {
        caption: "Roll-up GNM-IX",
        ratio: "tall",
        src: "/work/print-exhibition-design/rollup.png",
      },
      {
        caption: "Лифлет GNM / GNM-IX — 2 страницы",
        ratio: "landscape",
        src: "/work/print-exhibition-design/leaflet.png",
        href: "/work/print-exhibition-design/leaflet.pdf",
      },
      {
        caption: "Sales one-pager — 2 страницы",
        ratio: "landscape",
        src: "/work/print-exhibition-design/sales-onepager.png",
        href: "/work/print-exhibition-design/sales-onepager.pdf",
      },
      {
        caption: "Баннер, этап 1 — минимум фирменных элементов",
        ratio: "landscape",
        src: "/work/print-exhibition-design/banner-1.png",
      },
      {
        caption: "Баннер, этап 2 — добавляются новые элементы стиля",
        ratio: "landscape",
        src: "/work/print-exhibition-design/banner-2.png",
      },
      {
        caption: "Баннер, этап 3",
        ratio: "landscape",
        src: "/work/print-exhibition-design/banner-3.png",
      },
      {
        caption: "Баннер, этап 4",
        ratio: "landscape",
        src: "/work/print-exhibition-design/banner-4.png",
      },
      {
        caption: "Баннер, этап 5 — новое мероприятие, обновлённая подача",
        ratio: "landscape",
        src: "/work/print-exhibition-design/banner-5.png",
      },
      {
        caption: "Баннер, этап 6",
        ratio: "landscape",
        src: "/work/print-exhibition-design/banner-6.png",
      },
      {
        caption: "Баннер, этап 7 — фирменный стиль GNM зафиксирован",
        ratio: "landscape",
        src: "/work/print-exhibition-design/banner-7.png",
      },
    ],
    tone: 5,
    en: {
      title: "GNM-IX — Print & Exhibition Design",
      summary:
        "A print and booth-design set for GNM-IX events — built on one hierarchy readable from a distance and up close, not a collection of separate layouts.",
      role: "Design, prepress, vendor coordination",
      contribution: {
        role: "Design, prepress, vendor coordination",
        tags: ["Print design", "Prepress", "Vendor coordination"],
        scope: [
          "Prepared layouts and prepress files to exact print tolerances",
          "Personally signed off on print runs and color proofs with the vendor",
        ],
        team: [
          "Marketing set the list of materials for each event",
          "The print vendor handled production and tolerance control",
        ],
        constraints: [
          "A mistake in bleeds or color profile means a lost print run",
          "Banners were made for specific events roughly every six months",
        ],
        decision: "Checked every layout before it went to press instead of relying on post-production fixes.",
        production: "10+ materials for booths and events prepped for print across several iterations of the brand identity.",
        result: "The material sets are used at the company's booths at industry conferences on an ongoing basis.",
      },
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      task: "At events, the company competes for attention in physical space, where decisions are made in seconds from a distance. Print leaves no room for error: a layout with wrong bleeds or a wrong color profile comes back from production at a cost in time and budget. Stand banners were made for specific events roughly every six months — over that time GNM's brand identity evolved from a minimal set of elements into a fixed system.",
      fileLabels: ["Leaflet — PDF", "Sales one-pager — PDF"],
      resultCaptions: [
        "GNM-IX roll-up",
        "GNM / GNM-IX leaflet — 2 pages",
        "Sales one-pager — 2 pages",
        "Banner, stage 1 — minimal brand elements",
        "Banner, stage 2 — new style elements added",
        "Banner, stage 3",
        "Banner, stage 4",
        "Banner, stage 5 — new event, refreshed presentation",
        "Banner, stage 6",
        "Banner, stage 7 — GNM's brand identity finalized",
      ],
    },
  },
  {
    slug: "presentation-design",
    featured: true,
    title: "GNM — презентации",
    categories: ["Presentation Design"],
    companyId: "gnm",
    summary:
      "Шаблон презентаций GNM, которым отделы пользуются самостоятельно — вместо того чтобы каждый раз обращаться к дизайнеру за новой колодой.",
    year: "2023 — н. в.",
    role: "Структура, дизайн слайдов, шаблоны",
    contribution: {
      role: "Структура, дизайн слайдов, шаблоны",
      tags: ["Slide design", "Templates", "Typography"],
      scope: [
        "Спроектировал мастер-слайды и типографическую систему",
        "Собрал шаблон с инструкцией по применению",
        "Сопровождал первые презентации на реальных сценариях",
      ],
      team: [
        "Отделы формировали контент и содержание своих презентаций",
        "Руководитель утверждал финальный шаблон",
      ],
      constraints: [
        "Разные отделы готовили презентации самостоятельно, без дизайнера на каждой задаче",
        "Шаблон должен был держать иерархию даже при большом объёме текста",
      ],
      decision: "Сделал шаблон инструментом, а не «на все случаи» набором слайдов — под реальные сценарии продаж, встреч и отчётов.",
      production: "Мастер-слайды и типографическая система легли в основу шаблона, использованного в 10+ презентациях.",
      result: "Шаблон используют отделы самостоятельно при подготовке новых презентаций, без участия дизайнера.",
    },
    tools: ["Figma"],
    task: "Презентации готовили разные отделы, и качество сильно расходилось: сильные аргументы терялись в перегруженных слайдах, а внешние документы выглядели слабее уровня компании. Нужен был инструмент, которым команды пользуются самостоятельно, получая аккуратный результат без дизайнера в каждой задаче.",
    files: [
      { label: "Press Kit — PDF, 9 слайдов", href: "/work/presentation-design/press-kit.pdf" },
      {
        label: "Презентация для партнёров — PDF, 12 слайдов",
        href: "/work/presentation-design/partners.pdf",
      },
    ],
    results: [
      {
        caption: "Презентация для партнёров: титульный слайд",
        ratio: "wide",
        src: "/work/presentation-design/partners.png",
        href: "/work/presentation-design/partners.pdf",
      },
    ],
    tone: 6,
    en: {
      title: "GNM — Presentations",
      summary:
        "A GNM presentation template departments use on their own — instead of coming back to a designer for every new deck.",
      role: "Structure, slide design, templates",
      contribution: {
        role: "Structure, slide design, templates",
        tags: ["Slide design", "Templates", "Typography"],
        scope: [
          "Designed the master slides and typographic system",
          "Built the template with usage instructions",
          "Supported the first presentations on real scenarios",
        ],
        team: [
          "Departments provided the content for their own presentations",
          "The department head signed off on the final template",
        ],
        constraints: [
          "Different departments built their own presentations without a designer on every task",
          "The template had to hold hierarchy even with a lot of text",
        ],
        decision: "Made the template a working tool rather than an abstract one-size-fits-all set of slides — built for real sales, meeting, and reporting scenarios.",
        production: "Master slides and a typographic system became the base of a template used across 10+ presentations.",
        result: "Departments now use the template on their own when building new presentations, without a designer.",
      },
      tools: ["Figma"],
      task: "Presentations were made by different departments, and quality varied widely: strong arguments got lost in overloaded slides, and external documents looked weaker than the company deserved. What was needed was a tool teams could use on their own and still get a polished result without a designer on every task.",
      fileLabels: ["Press Kit — PDF, 9 slides", "Partner presentation — PDF, 12 slides"],
      resultCaptions: ["Partner presentation: title slide"],
    },
  },
  {
    slug: "gnm-app",
    title: "GNM VPN — приложение",
    categories: ["UI Design"],
    companyId: "gnm",
    summary:
      "Экраны VPN-приложения GNM, оформленные в общей визуальной системе компании — тот же логотип, шрифт и акцент, что на сайте и в остальных материалах.",
    year: "2023 — н. в.",
    role: "Визуальное оформление интерфейса",
    contribution: {
      role: "Визуальное оформление интерфейса",
      tags: ["UI design", "Mobile"],
      scope: [
        "Оформил экраны и состояния мобильного приложения",
        "Собрал видео-макет демонстрации флоу",
      ],
      team: [
        "Разработка реализовывала приложение по макетам",
        "Руководитель утверждал соответствие фирменному стилю",
      ],
      constraints: [
        "Тот же логотип, шрифт и акцентный цвет, что на сайте и в остальных материалах — без визуальных вольностей",
      ],
      decision: "Встроил экраны приложения в общую визуальную систему компании, а не сделал отдельный стиль для продукта.",
      production: "6 экранов и состояний интерфейса подготовлено, плюс видео-демо флоу «вход → подключение».",
      result: "Экраны переданы в разработку и используются в текущей версии VPN-приложения GNM.",
    },
    tools: ["Figma"],
    task: "Оформление экранов мобильного приложения VPN-сервиса GNM в рамках общей визуальной системы компании — с тем же логотипом, шрифтом и акцентным цветом, что и на сайте и в остальных материалах.",
    results: [
      { caption: "Экран входа", ratio: "portrait", src: "/work/gnm-app/login.png" },
      { caption: "Экран подключения", ratio: "portrait", src: "/work/gnm-app/screen-connected.png" },
      { caption: "Состояние интерфейса — 1", ratio: "portrait", src: "/work/gnm-app/screen-60.png" },
      { caption: "Состояние интерфейса — 2", ratio: "portrait", src: "/work/gnm-app/screen-65.png" },
      { caption: "Состояние интерфейса — 3", ratio: "portrait", src: "/work/gnm-app/screen-73.png" },
      {
        caption: "Видео-макет: вход и подключение к VPN",
        ratio: "tall",
        video: "/work/gnm-app/app-demo.mp4",
      },
    ],
    tone: 0,
    en: {
      title: "GNM VPN — App",
      summary:
        "GNM VPN app screens designed within the company's visual system — the same logo, typeface, and accent as the website and other materials.",
      role: "Interface visual design",
      contribution: {
        role: "Interface visual design",
        tags: ["UI design", "Mobile"],
        scope: [
          "Designed the mobile app's screens and states",
          "Put together a video mockup demonstrating the flow",
        ],
        team: [
          "Development implemented the app from the mockups",
          "The department head signed off on brand consistency",
        ],
        constraints: [
          "Same logo, typeface, and accent color as the website and other materials — no room for visual liberties",
        ],
        decision: "Folded the app screens into the company's overall visual system instead of creating a separate style for the product.",
        production: "6 interface screens and states prepared, plus a video demo of the login-to-connect flow.",
        result: "The screens were handed to development and are used in the current version of the GNM VPN app.",
      },
      tools: ["Figma"],
      task: "Designing the screens of GNM's VPN mobile app within the company's overall visual system — the same logo, typeface, and accent color as the website and other materials.",
      resultCaptions: [
        "Login screen",
        "Connected screen",
        "Interface state — 1",
        "Interface state — 2",
        "Interface state — 3",
        "Video mockup: login and VPN connection flow",
      ],
    },
  },

  // ---------------------------------------------------------------------
  // GlobalNet
  // ---------------------------------------------------------------------
  {
    slug: "telegram-bot-design",
    featured: true,
    title: "GlobalNet — Telegram-бот с ИИ-ассистентом",
    categories: ["UI Design"],
    companyId: "globalnet",
    summary:
      "Разработка Telegram-бота с ИИ-ассистентом: бот обрабатывает клиентские запросы через базу знаний и передаёт сложные обращения менеджеру.",
    year: "2023 — н. в.",
    role: "Разработка бота, интеграция ИИ-ассистента",
    contribution: {
      role: "Разработка бота, интеграция ИИ-ассистента",
      tags: ["Bot design", "AI integration", "UX writing"],
      scope: [
        "Спроектировал сценарии диалогов",
        "Написал тексты бота",
        "Настроил интеграцию ИИ-ассистента с базой знаний компании",
      ],
      team: [
        "Поддержка передавала базу типовых вопросов",
        "Руководитель утверждал сценарии эскалации к менеджеру",
      ],
      constraints: [
        "Бот должен был сам закрывать типовые вопросы и передавать менеджеру только сложные случаи",
        "Иначе решение не снимало бы нагрузку с поддержки",
      ],
      decision: "Собрал не оформление готового бота, а логику целиком — от сценариев до интеграции с базой знаний.",
      production: "Сценарии диалогов, интеграция ИИ-ассистента с базой знаний и визуальное оформление бота (обложки, иконки, меню) реализованы в рамках возможностей Telegram.",
      result: "Бот запущен в продакшен и ежедневно обрабатывает обращения клиентов в Telegram, эскалируя менеджеру только сложные случаи.",
    },
    tools: ["Figma", "ChatGPT"],
    task: "Часть коммуникации с клиентами GlobalNet нужно было перевести в Telegram — не в виде статичного меню, а как полноценного помощника, способного отвечать на вопросы самостоятельно. Я не оформлял готового бота, а собрал его целиком: логику сценариев, сами диалоги и ИИ-ассистента, который понимает вопрос клиента и ищет ответ по базе знаний компании.",
    results: [
      {
        caption: "Экран бота с ИИ-ассистентом",
        ratio: "portrait",
        src: "/work/telegram-bot-design/screen.png",
      },
      {
        caption: "Промо-постер ИИ-ассистента GlobalNet",
        ratio: "square",
        src: "/work/telegram-bot-design/promo-square.jpg",
      },
      {
        caption: "Диалог с ботом: подбор услуги и расчёт стоимости порта DATAIX",
        ratio: "tall",
        src: "/work/telegram-bot-design/ai-chat-example.jpg",
      },
    ],
    tone: 7,
    en: {
      title: "GlobalNet — Telegram Bot with AI Assistant",
      summary:
        "Built a Telegram bot with an AI assistant: it answers client questions from a knowledge base and escalates complex requests to a manager.",
      role: "Bot development, AI assistant integration",
      contribution: {
        role: "Bot development, AI assistant integration",
        tags: ["Bot design", "AI integration", "UX writing"],
        scope: [
          "Designed the dialogue flows",
          "Wrote the bot's copy",
          "Set up the AI assistant's integration with the company knowledge base",
        ],
        team: [
          "Support provided the base of routine questions",
          "The department head signed off on the escalation scenarios",
        ],
        constraints: [
          "The bot had to resolve routine questions on its own and escalate only complex cases",
          "Otherwise the solution wouldn't actually reduce support load",
        ],
        decision: "Built the whole logic, not just a skin on an existing bot — from dialogue flows to the knowledge-base integration.",
        production: "Dialogue flows, the AI assistant's knowledge-base integration, and the bot's visuals (covers, icons, menus) were built within Telegram's constraints.",
        result: "The bot is live in production and handles client requests in Telegram daily, escalating only complex cases to a manager.",
      },
      tools: ["Figma", "ChatGPT"],
      task: "Part of the communication with GlobalNet clients needed to move to Telegram — not as a static menu, but as a real assistant able to answer questions on its own. I didn't just style a ready-made bot: I built it end to end — the scenario logic, the dialogues themselves, and an AI assistant that understands a client's question and looks up the answer in the company's knowledge base.",
      resultCaptions: [
        "Bot screen with AI assistant",
        "GlobalNet AI assistant promo poster",
        "Chat with the bot: picking a service and pricing a DATAIX port",
      ],
    },
  },
  {
    slug: "chat-monitor-bot",
    title: "GlobalNet — бот-аналитик клиентских чатов",
    categories: ["UI Design"],
    companyId: "globalnet",
    summary:
      "Telegram-бот, который мониторит клиентские чаты, структурирует переписку в базу данных и автоматически сообщает руководителям о жалобах, конфликтах и просроченных ответах.",
    year: "2026",
    role: "Разработка бота, аналитика на базе ИИ",
    contribution: {
      role: "Разработка бота, аналитика на базе ИИ",
      tags: ["Bot development", "AI analysis", "Data structure"],
      scope: [
        "Подключил бота к клиентским групповым чатам",
        "Настроил структурирование переписки в базу данных",
        "Настроил обработку сообщений через нейросеть на предмет жалоб и конфликтов",
      ],
      team: [
        "Руководитель формировал критерии «негативного сигнала»",
      ],
      constraints: [
        "При негативном сигнале уведомление должно уходить мгновенно, а не по итогам ручной проверки чатов",
      ],
      decision: "Сделал так, чтобы бот сам различал сотрудника и клиента и реагировал на сигнал в моменте, а не постфактум.",
      production: "Структура базы данных, обработка сообщений через нейросеть и сценарий мониторинга просроченных ответов реализованы и подключены к продакшен-чатам.",
      result: "Бот подключён ко всем клиентским групповым чатам компании и структурирует переписку в базу данных в реальном времени.",
    },
    tools: ["Figma", "ChatGPT", "Claude Code"],
    task: "Часть обращений клиентов GlobalNet идёт через групповые чаты в Telegram, и в потоке переписки легко пропустить важное: жалобу, конфликт или сообщение, оставшееся без ответа. Я разработал бота, который подключается к этим чатам, различает сотрудника и клиента, структурирует переписку в базе данных и обрабатывает каждое клиентское сообщение через нейросеть — а при негативном сигнале сразу уведомляет руководителя.",
    results: [
      {
        caption:
          "Схема работы бота: чтение чата, определение клиента, обработка через нейросеть, уведомление руководителя",
        ratio: "wide",
        src: "/work/globalnet/chat-monitor-bot/workflow-main.jpg",
      },
      {
        caption: "Сценарий мониторинга просрочки ответа — проверка каждые 30 минут",
        ratio: "landscape",
        src: "/work/globalnet/chat-monitor-bot/workflow-timeout.jpg",
      },
      {
        caption: "Структура базы данных: таблица подключённых чатов",
        ratio: "wide",
        src: "/work/globalnet/chat-monitor-bot/chats-table.jpg",
      },
      {
        caption: "Приложение для просмотра сообщений и событий",
        ratio: "tall",
        src: "/work/globalnet/chat-monitor-bot/app-dashboard.jpg",
      },
      {
        caption: "Автоматическое уведомление руководителю о жалобе клиента",
        ratio: "square",
        src: "/work/globalnet/chat-monitor-bot/notification-example.jpg",
      },
    ],
    files: [
      {
        label: "Описание системы — PDF",
        href: "/work/globalnet/chat-monitor-bot/chat-monitor-bot.pdf",
      },
    ],
    tone: 6,
    en: {
      title: "GlobalNet — Client Chat Monitoring Bot",
      summary:
        "A Telegram bot that monitors client chats, structures the conversation into a database, and automatically alerts managers about complaints, conflicts, and overdue replies.",
      role: "Bot development, AI-driven analysis",
      contribution: {
        role: "Bot development, AI-driven analysis",
        tags: ["Bot development", "AI analysis", "Data structure"],
        scope: [
          "Connected the bot to client group chats",
          "Set up structuring of conversations into a database",
          "Set up message analysis via a model for complaints and conflicts",
        ],
        team: [
          "The department head defined the criteria for a \"negative signal\"",
        ],
        constraints: [
          "A negative signal had to trigger an instant alert, not wait for a manual chat review",
        ],
        decision: "Made the bot distinguish staff from clients on its own and react to a signal in the moment, not after the fact.",
        production: "The database structure, model-based message processing, and the overdue-reply monitoring flow were built and connected to production chats.",
        result: "The bot is connected to all of the company's client group chats and structures conversations into a database in real time.",
      },
      tools: ["Figma", "ChatGPT", "Claude Code"],
      task: "Part of GlobalNet's client communication runs through group chats in Telegram, and it's easy to miss what matters in the stream of messages — a complaint, a conflict, or a message left without a reply. I built a bot that connects to these chats, tells staff and clients apart, structures the conversation into a database, and runs every client message through a neural network — alerting a manager immediately on a negative signal.",
      resultCaptions: [
        "Bot workflow: reading the chat, identifying the client, processing through a neural network, notifying the manager",
        "Response-time monitoring scenario — checked every 30 minutes",
        "Database structure: connected chats table",
        "Companion app for reviewing messages and events",
        "Automatic manager notification about a client complaint",
      ],
      fileLabels: ["System overview — PDF"],
    },
  },
  {
    slug: "globalnet-presentations",
    title: "GlobalNet — презентации",
    categories: ["Presentation Design"],
    companyId: "globalnet",
    summary:
      "Презентации сервисов GlobalNet — DDoS-защита, CDN, DATAIX и обзор компании, — которые одинаково работают и на встрече с клиентом, и как самостоятельный PDF.",
    year: "2025 — 2026",
    role: "Дизайн слайдов",
    contribution: {
      role: "Дизайн слайдов",
      tags: ["Slide design", "Content"],
      scope: [
        "Собрал структуру и дизайн 5 презентаций по продуктам",
        "Подготовил файлы, которые работают и как раздаточный PDF",
      ],
      team: [
        "Продуктовые команды формировали содержание и факты",
        "Руководитель утверждал финальную версию перед публикацией",
      ],
      constraints: [
        "Каждая колода должна была одинаково работать и на встрече с клиентом, и как самостоятельный PDF без докладчика",
      ],
      decision: "Согласовывал содержание с продуктовыми командами, а не только оформление слайдов.",
      production: "5 презентаций подготовлено для внешней и внутренней коммуникации: DDoS-защита, CDN, DATAIX, обзор компании.",
      result: "Презентации используются отделом продаж GlobalNet во внешних и внутренних встречах на регулярной основе.",
    },
    tools: ["Figma"],
    task: "Подготовка презентационных материалов по продуктам GlobalNet — защите от DDoS, CDN и точке обмена трафиком DATAIX — для внешней и внутренней коммуникации.",
    files: [
      { label: "DDoS Protection — PDF", href: "/work/globalnet/presentation-design/ddos-protection.pdf" },
      { label: "CDN — PDF", href: "/work/globalnet/presentation-design/cdn.pdf" },
      { label: "GlobalNet: обзор компании — PDF", href: "/work/globalnet/presentation-design/overview-2026.pdf" },
      { label: "DATAIX — PDF", href: "/work/globalnet/presentation-design/dataix-2026.pdf" },
      { label: "Презентация — PDF", href: "/work/globalnet/presentation-design/presentation.pdf" },
    ],
    results: [
      { caption: "DDoS Protection — титульный слайд", ratio: "wide", src: "/work/globalnet/presentation-design/ddos-protection.png", href: "/work/globalnet/presentation-design/ddos-protection.pdf" },
      { caption: "CDN — титульный слайд", ratio: "wide", src: "/work/globalnet/presentation-design/cdn.png", href: "/work/globalnet/presentation-design/cdn.pdf" },
      { caption: "GlobalNet: обзор компании — титульный слайд", ratio: "wide", src: "/work/globalnet/presentation-design/overview-2026.png", href: "/work/globalnet/presentation-design/overview-2026.pdf" },
      { caption: "DATAIX — титульный слайд", ratio: "wide", src: "/work/globalnet/presentation-design/dataix-2026.png", href: "/work/globalnet/presentation-design/dataix-2026.pdf" },
      { caption: "Презентация — титульный слайд", ratio: "wide", src: "/work/globalnet/presentation-design/presentation.png", href: "/work/globalnet/presentation-design/presentation.pdf" },
    ],
    tone: 1,
    en: {
      title: "GlobalNet — Presentations",
      summary:
        "GlobalNet service presentations — DDoS protection, CDN, DATAIX, and a company overview — that work equally well presented live or read cold as a PDF.",
      role: "Slide design",
      contribution: {
        role: "Slide design",
        tags: ["Slide design", "Content"],
        scope: [
          "Built the structure and design of 5 product presentations",
          "Prepared files that also work as a standalone handout PDF",
        ],
        team: [
          "Product teams provided content and facts",
          "The department head signed off on the final version before publishing",
        ],
        constraints: [
          "Each deck had to work equally well presented live and read cold as a standalone PDF",
        ],
        decision: "Aligned content with product teams, not just the slide formatting.",
        production: "5 presentations prepared for external and internal communication: DDoS protection, CDN, DATAIX, company overview.",
        result: "The presentations are used by GlobalNet's sales team in external and internal meetings on an ongoing basis.",
      },
      tools: ["Figma"],
      task: "Preparing presentation materials for GlobalNet products — DDoS protection, CDN, and the DATAIX traffic exchange point — for external and internal communication.",
      fileLabels: [
        "DDoS Protection — PDF",
        "CDN — PDF",
        "GlobalNet: Company Overview — PDF",
        "DATAIX — PDF",
        "Presentation — PDF",
      ],
      resultCaptions: [
        "DDoS Protection — title slide",
        "CDN — title slide",
        "GlobalNet: Company Overview — title slide",
        "DATAIX — title slide",
        "Presentation — title slide",
      ],
    },
  },
  {
    slug: "globalnet-website",
    title: "GlobalNet — сайт",
    categories: ["Web Design"],
    companyId: "globalnet",
    summary:
      "Экраны сайта GlobalNet, спроектированные так, чтобы заявка на подключение к DATAIX оформлялась в несколько понятных шагов, а не терялась в интерфейсе.",
    year: "2023 — н. в.",
    role: "Дизайн интерфейса",
    contribution: {
      role: "Дизайн интерфейса",
      tags: ["UI design", "Web", "Forms"],
      scope: [
        "Спроектировал форму опроса по DATAIX",
        "Спроектировал варианты главной страницы и личный кабинет",
        "Проработал состояния форм для передачи в разработку",
      ],
      team: [
        "Разработка реализовывала вёрстку по макетам",
        "Маркетинг формировал цели страниц",
      ],
      constraints: [
        "Заявка на подключение не должна была теряться в интерфейсе",
        "Нужны были не только «чистовые» экраны, но и проработанные состояния форм",
      ],
      decision: "Передавал макеты в разработку с проработанными состояниями, чтобы сократить количество уточняющих вопросов.",
      production: "5+ экранов сайта подготовлено, включая форму опроса по DATAIX и личный кабинет с проработанными состояниями форм.",
      result: "Экраны переданы в разработку и опубликованы на сайте GlobalNet.",
    },
    tools: ["Figma"],
    task: "Передо мной стояла задача — улучшить сайт GlobalNet и сделать его удобнее для пользователя: от формы обратной связи по DATAIX до вариантов главной страницы и личного кабинета.",
    results: [
      { caption: "Опрос по качеству подключения к DATAIX", ratio: "wide", src: "/work/globalnet/website/dataix-survey.png" },
      { caption: "Главная страница — вариант 1", ratio: "wide", src: "/work/globalnet/website/homepage-light-1.png" },
      { caption: "Главная страница — вариант 2", ratio: "wide", src: "/work/globalnet/website/homepage-light-2.png" },
      { caption: "Экран сайта", ratio: "wide", src: "/work/globalnet/website/frame.png" },
      { caption: "Личный кабинет: заявка на подключение к IX", ratio: "wide", src: "/work/globalnet/merch-print/print-4.png" },
    ],
    tone: 2,
    en: {
      title: "GlobalNet — Website",
      summary:
        "GlobalNet website screens designed so a DATAIX connection request takes a few clear steps instead of getting lost in the interface.",
      role: "Interface design",
      contribution: {
        role: "Interface design",
        tags: ["UI design", "Web", "Forms"],
        scope: [
          "Designed the DATAIX survey form",
          "Designed homepage variants and the account dashboard",
          "Worked out form states for the developer handoff",
        ],
        team: [
          "Development implemented the build from the mockups",
          "Marketing set the goals for the pages",
        ],
        constraints: [
          "The connection request couldn't get lost in the interface",
          "The task needed worked-out form states, not just clean happy-path screens",
        ],
        decision: "Handed off mockups with worked-out states to cut down on clarifying questions during development.",
        production: "5+ site screens prepared, including the DATAIX survey form and an account dashboard with worked-out form states.",
        result: "The screens were handed to development and published on the GlobalNet website.",
      },
      tools: ["Figma"],
      task: "My task was to improve the GlobalNet website and make it more convenient for users: from the DATAIX feedback form to homepage variants and the account dashboard.",
      resultCaptions: [
        "DATAIX connection quality survey",
        "Homepage — option 1",
        "Homepage — option 2",
        "Website screen",
        "Account dashboard: IX connection request",
      ],
    },
  },
  {
    slug: "globalnet-marketing",
    title: "GlobalNet — маркетинг",
    categories: ["Marketing"],
    companyId: "globalnet",
    summary:
      "Рекламные и промо-материалы GlobalNet, часть которых команда переиспользует как базу для новых кампаний, а не только под конкретное мероприятие.",
    year: "2023 — н. в.",
    role: "Дизайн рекламных материалов",
    contribution: {
      role: "Дизайн рекламных материалов",
      tags: ["Ad design", "Social", "Flyers"],
      scope: [
        "Готовил таргетированные креативы",
        "Готовил промо-флаеры под конкретные мероприятия",
        "Готовил публикации для соцсетей",
      ],
      team: [
        "Маркетинг формировал календарь мероприятий и даты выхода",
        "Руководитель утверждал финальные креативы",
      ],
      constraints: [
        "Даты выхода были жёстко привязаны к календарю событий, включая розыгрыши на конференциях",
      ],
      decision: "Делал флаеры так, чтобы часть из них можно было переиспользовать как базу для новых кампаний.",
      production: "20+ рекламных и промо-материалов подготовлено: таргетированные креативы, флаеры под мероприятия, публикации для соцсетей.",
      result: "Часть флаеров переиспользуется по сей день как база для новых кампаний GlobalNet.",
    },
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    task: "Подготовка рекламных креативов, промо-флаеров об услугах и публикаций для соцсетей бренда GlobalNet.",
    files: [{ label: "Промо-материалы — PDF", href: "/work/globalnet/merch-print/frame.pdf" }],
    results: [
      { caption: "Таргетированный креатив", ratio: "landscape", src: "/work/globalnet/marketing/target-ad.png" },
      { caption: "Публикация для соцсетей — 1", ratio: "square", src: "/work/globalnet/marketing/social-1.jpeg" },
      { caption: "Публикация для соцсетей — 2", ratio: "square", src: "/work/globalnet/marketing/social-2.jpeg" },
      { caption: "Публикация для соцсетей — 3", ratio: "square", src: "/work/globalnet/marketing/social-3.jpeg" },
      { caption: "Публикация для соцсетей — 4", ratio: "square", src: "/work/globalnet/marketing/social-4.jpeg" },
      { caption: "Публикация для соцсетей — 5", ratio: "square", src: "/work/globalnet/marketing/social-5.jpeg" },
      { caption: "Публикация для соцсетей — 6", ratio: "square", src: "/work/globalnet/marketing/social-6.jpeg" },
      { caption: "Публикация для соцсетей — 7", ratio: "square", src: "/work/globalnet/marketing/social-7.jpeg" },
      { caption: "Промо-флаер: единый порт для всех сетевых услуг", ratio: "portrait", src: "/work/globalnet/merch-print/print-1.png" },
      { caption: "Промо-флаер: сетевые решения полного цикла", ratio: "portrait", src: "/work/globalnet/merch-print/print-2.png" },
      { caption: "Промо-флаер: призовой фонд конференции", ratio: "portrait", src: "/work/globalnet/merch-print/print-3.png" },
      { caption: "Промо-флаер: розыгрыш Apple Watch на конференции — 1", ratio: "portrait", src: "/work/globalnet/merch-print/frame-1.png" },
      { caption: "Промо-флаер: розыгрыш Apple Watch на конференции — 2", ratio: "portrait", src: "/work/globalnet/merch-print/frame-2.png" },
      { caption: "Промо-флаер: полный спектр сетевых услуг", ratio: "landscape", src: "/work/globalnet/merch-print/banner-1.png" },
      { caption: "Промо-флаер: сетевые решения полного цикла — вариант 2", ratio: "landscape", src: "/work/globalnet/merch-print/banner-2.png" },
      { caption: "Промо-флаер: DATAIX / GlobalNet — услуги", ratio: "landscape", src: "/work/globalnet/merch-print/banner-3.png" },
      { caption: "Промо-флаер: услуги — вариант 4", ratio: "landscape", src: "/work/globalnet/merch-print/banner-4.png" },
      { caption: "Промо-флаер: услуги — вариант 5", ratio: "landscape", src: "/work/globalnet/merch-print/banner-5.png" },
      { caption: "Промо-флаер: DATAIX — Points of Presence", ratio: "portrait", src: "/work/globalnet/merch-print/banner-6.png" },
    ],
    tone: 3,
    en: {
      title: "GlobalNet — Marketing",
      summary:
        "GlobalNet ad and promo materials, some of which the team reuses as a base for new campaigns rather than one-off event pieces.",
      role: "Advertising material design",
      contribution: {
        role: "Advertising material design",
        tags: ["Ad design", "Social", "Flyers"],
        scope: [
          "Produced targeted creatives",
          "Produced promo flyers for specific events",
          "Produced social media posts",
        ],
        team: [
          "Marketing set the event calendar and release dates",
          "The department head signed off on final creatives",
        ],
        constraints: [
          "Release dates were locked to the event calendar, including conference giveaways",
        ],
        decision: "Built flyers so part of them could be reused as a base for new campaigns.",
        production: "20+ ad and promo materials prepared: targeted creatives, event flyers, social media posts.",
        result: "Several flyers are still reused today as a base for new GlobalNet campaigns.",
      },
      tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      task: "Preparing ad creatives, service promo flyers, and social media posts for the GlobalNet brand.",
      fileLabels: ["Promo materials — PDF"],
      resultCaptions: [
        "Targeted creative",
        "Social media post — 1",
        "Social media post — 2",
        "Social media post — 3",
        "Social media post — 4",
        "Social media post — 5",
        "Social media post — 6",
        "Social media post — 7",
        "Promo flyer: one port for all network services",
        "Promo flyer: full-cycle network solutions",
        "Promo flyer: conference prize fund",
        "Promo flyer: Apple Watch giveaway at the conference — 1",
        "Promo flyer: Apple Watch giveaway at the conference — 2",
        "Promo flyer: full range of network services",
        "Promo flyer: full-cycle network solutions — option 2",
        "Promo flyer: DATAIX / GlobalNet services",
        "Promo flyer: services — option 4",
        "Promo flyer: services — option 5",
        "Promo flyer: DATAIX — Points of Presence",
      ],
    },
  },
  {
    slug: "globalnet-merch-print",
    title: "GlobalNet — мерч",
    categories: ["Print"],
    companyId: "globalnet",
    summary:
      "Мерч GlobalNet и DATAIX для сотрудников, клиентов и мероприятий — раскупается на стендах быстрее прочих промо-материалов.",
    year: "2023 — н. в.",
    role: "Дизайн мерча",
    contribution: {
      role: "Дизайн мерча",
      tags: ["Merch design", "Production"],
      scope: [
        "Разработал дизайн кепок, худи, футболок, рюкзака и стикеров",
        "Согласовывал тираж и материалы печати с производством",
      ],
      team: [
        "Маркетинг формировал список позиций под сотрудников, клиентов и мероприятия",
        "Производство — печать и контроль тиража",
      ],
      constraints: [
        "Нужно было балансировать между корпоративным брендом и более неформальным тоном для сотрудников (серия «ТСПУ»)",
      ],
      decision: "Сделал сатирическую серию стикеров отдельным, более неформальным слоем бренда, не смешивая её с официальными материалами.",
      production: "11+ позиций мерча GlobalNet и DATAIX разработано — от кепок и худи до сатирической серии стикеров «ТСПУ».",
      result: "На мероприятиях мерч разбирали быстрее остальных промо-материалов — часть позиций допечатывали дополнительно.",
    },
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    task: "Разработка мерча GlobalNet и DATAIX: кепки, худи, футболки, рюкзак и стикеры для сотрудников, клиентов и мероприятий.",
    results: [
      { caption: "Кепки GlobalNet — подборка", ratio: "landscape", src: "/work/globalnet/merch-print/caps-1.png" },
      { caption: "Кепки GlobalNet — подборка 2", ratio: "landscape", src: "/work/globalnet/merch-print/caps-3.png" },
      { caption: "Кепки DATAIX GlobalNet — 9 вариантов", ratio: "landscape", src: "/work/globalnet/merch-print/caps-7.png" },
      { caption: "Рюкзак DATAIX GlobalNet", ratio: "portrait", src: "/work/globalnet/merch-print/caps-4.png" },
      { caption: "Худи GlobalNet и GlobalCoin", ratio: "landscape", src: "/work/globalnet/merch-print/caps-5.png" },
      { caption: "Футболки DATAIX — принты", ratio: "landscape", src: "/work/globalnet/merch-print/caps-6.png" },
      { caption: "Стикеры «ТСПУ» — сатирическая серия 1", ratio: "landscape", src: "/work/globalnet/merch-print/stickers-1.png" },
      { caption: "Стикеры «ТСПУ» — сатирическая серия 2", ratio: "landscape", src: "/work/globalnet/merch-print/stickers-2.png" },
      { caption: "Стикеры GlobalNet", ratio: "landscape", src: "/work/globalnet/merch-print/stickers-3.png" },
      { caption: "Стикеры «Big Wave Hunter»", ratio: "landscape", src: "/work/globalnet/merch-print/stickers-4.png" },
      { caption: "Стикеры: Golf Day by GlobalNet", ratio: "landscape", src: "/work/globalnet/merch-print/caps-2.png" },
    ],
    tone: 4,
    en: {
      title: "GlobalNet — Merch",
      summary:
        "GlobalNet and DATAIX merch for employees, clients, and events — goes faster at booths than any other promo material.",
      role: "Merch design",
      contribution: {
        role: "Merch design",
        tags: ["Merch design", "Production"],
        scope: [
          "Designed caps, hoodies, t-shirts, a backpack, and stickers",
          "Signed off on run size and print materials with production",
        ],
        team: [
          "Marketing set the list of items for employees, clients, and events",
          "Production handled printing and run control",
        ],
        constraints: [
          "Had to balance the corporate brand against a more informal tone for employees (the \"TSPU\" series)",
        ],
        decision: "Kept the satirical sticker series as a separate, more informal layer of the brand instead of mixing it with official materials.",
        production: "11+ GlobalNet and DATAIX merch items designed — from caps and hoodies to the satirical \\\"TSPU\\\" sticker series.",
        result: "At events, the merch went faster than any other promo material — part of the run was reprinted.",
      },
      tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      task: "Developing GlobalNet and DATAIX merch: caps, hoodies, t-shirts, a backpack, and stickers for employees, clients, and events.",
      resultCaptions: [
        "GlobalNet caps — selection",
        "GlobalNet caps — selection 2",
        "DATAIX GlobalNet caps — 9 variants",
        "DATAIX GlobalNet backpack",
        "GlobalNet and GlobalCoin hoodies",
        "DATAIX t-shirts — prints",
        "\"TSPU\" stickers — satirical series 1",
        "\"TSPU\" stickers — satirical series 2",
        "GlobalNet stickers",
        "\"Big Wave Hunter\" stickers",
        "Stickers: Golf Day by GlobalNet",
      ],
    },
  },
  {
    slug: "globalnet-motion",
    title: "GlobalNet — видео",
    categories: ["Motion"],
    companyId: "globalnet",
    summary:
      "Видеоконтент GlobalNet — от годового отчёта для инвесторов до технических роликов и записей мероприятий.",
    year: "2023 — н. в.",
    role: "Видео и моушн",
    contribution: {
      role: "Видео и моушн",
      tags: ["Video", "Motion", "Editing"],
      scope: [
        "Произвёл видеоконтент — от годового отчёта до технических роликов",
        "Смонтировал записи мероприятий",
      ],
      team: [
        "Руководство предоставляло данные для годового отчёта",
        "Маркетинг формировал бриф на технические ролики",
      ],
      constraints: [
        "Годовой отчёт содержит точные цифры компании — ошибка в подаче факта здесь недопустима",
      ],
      decision: "Проверял каждую цифру в ролике с годовым отчётом перед монтажом финальной версии.",
      production: "9+ видеоматериалов произведено, включая годовой отчёт с ключевыми цифрами компании.",
      result: "Годовой отчёт опубликован для инвесторов и партнёров компании, остальные ролики используются в техподдержке и на мероприятиях.",
    },
    tools: ["After Effects", "Adobe Premiere Pro", "Media Encoder"],
    task: "Производство видеоматериалов GlobalNet — от годового отчёта до вспомогательных технических роликов.",
    results: [
      { caption: "Годовой отчёт 2025", ratio: "square", video: "/work/globalnet/motion/annual-report-2025.mp4" },
      { caption: "DATAIX: пиковая загрузка 10 Тбит", ratio: "landscape", video: "/work/globalnet/motion/dataix-peak-load.mp4" },
      { caption: "Композиция", ratio: "landscape", video: "/work/globalnet/motion/composition.mp4" },
      { caption: "Запись экрана — 1", ratio: "landscape", video: "/work/globalnet/motion/screen-recording-1.mp4" },
      { caption: "Запись экрана — 2", ratio: "landscape", video: "/work/globalnet/motion/screen-recording-2.mp4" },
      { caption: "Видео — 1", ratio: "portrait", video: "/work/globalnet/motion/clip-1.mp4" },
      { caption: "Видео — 2", ratio: "portrait", video: "/work/globalnet/motion/clip-2.mp4" },
      {
        caption: "Ролик: рост компании — «500 is not the limit», 18 000 км собственной сети",
        ratio: "landscape",
        video: "/work/globalnet/motion/growth-milestone.mp4",
      },
      {
        caption: "Анимация логотипа GlobalNet на карте",
        ratio: "square",
        video: "/work/globalnet/motion/logo-map.mp4",
      },
    ],
    tone: 5,
    en: {
      title: "GlobalNet — Video",
      summary:
        "GlobalNet video content — from the investor-facing annual report to technical clips and event recordings.",
      role: "Video and motion",
      contribution: {
        role: "Video and motion",
        tags: ["Video", "Motion", "Editing"],
        scope: [
          "Produced video content — from the annual report to technical clips",
          "Edited event recordings",
        ],
        team: [
          "Leadership provided the data for the annual report",
          "Marketing set the brief for technical clips",
        ],
        constraints: [
          "The annual report states exact company figures — no room for error in how a fact is presented",
        ],
        decision: "Double-checked every figure in the annual-report clip before locking the final edit.",
        production: "9+ video pieces produced, including the annual report with the company's key figures.",
        result: "The annual report was published for investors and partners; the rest of the clips are used in technical support and at events.",
      },
      tools: ["After Effects", "Adobe Premiere Pro", "Media Encoder"],
      task: "Producing GlobalNet's video content — from the annual report to supporting technical clips.",
      resultCaptions: [
        "Annual Report 2025",
        "DATAIX: 10 Tbps peak load",
        "Composition",
        "Screen recording — 1",
        "Screen recording — 2",
        "Video — 1",
        "Video — 2",
        "Clip: company growth — \"500 is not the limit\", 18,000 km of owned network",
        "GlobalNet logo animation on the map",
      ],
    },
  },

  // ---------------------------------------------------------------------
  // Other / Другие проекты
  // ---------------------------------------------------------------------
  {
    slug: "juzzle",
    title: "Juzzle",
    categories: ["Product Design"],
    summary: "Защита креативной части проекта «Juzzle». Институт бизнеса и дизайна, 16.05.2023.",
    year: "2023",
    role: "Автор проекта",
    contribution: {
      role: "Автор проекта",
      tags: ["Concept", "Presentation"],
      scope: [
        "Продумал креативную часть продукта",
        "Оформил материалы для защиты",
      ],
      constraints: [
        "Регламент защиты — несколько минут на подачу идеи, а не развёрнутая презентация",
      ],
      decision: "Сфокусировал материалы на одной ясной идее вместо попытки уместить весь проект в один показ.",
      production: "Креативная часть продукта и материалы для защиты подготовлены самостоятельно, от концепции до финальной подачи.",
      result: "Проект защищён перед комиссией Института бизнеса и дизайна, 16.05.2023.",
    },
    tools: ["Figma", "PowerPoint"],
    files: [{ label: "Juzzle — PDF", href: "/work/other/juzzle/juzzle.pdf" }],
    results: [],
    tone: 0,
    en: {
      summary: "Defense of the creative part of the \"Juzzle\" project. Institute of Business and Design, 05.16.2023.",
      role: "Project author",
      contribution: {
        role: "Project author",
        tags: ["Concept", "Presentation"],
        scope: [
          "Developed the product's creative direction",
          "Prepared the defense materials",
        ],
        constraints: [
          "The defense format allowed just a few minutes to pitch the idea, not a full presentation",
        ],
        decision: "Focused the materials on one clear idea instead of trying to fit the whole project into a single pitch.",
        production: "The product's creative direction and defense materials were prepared solo, from concept to final pitch.",
        result: "Defended at the Institute of Business and Design panel, 05.16.2023.",
      },
      tools: ["Figma", "PowerPoint"],
      fileLabels: ["Juzzle — PDF"],
    },
  },
  {
    slug: "qummy",
    title: "Qummy",
    categories: ["Product Design"],
    summary: "Qummy — концепция технологии питания без поваров и кухни. Институт бизнеса и дизайна.",
    role: "Автор проекта",
    contribution: {
      role: "Автор проекта",
      tags: ["Concept", "Presentation"],
      scope: [
        "Продумал концепцию технологии",
        "Оформил материалы для защиты перед комиссией",
      ],
      constraints: [
        "Нужно было уложить сложную бизнес-идею в формат, понятный комиссии без предварительного контекста",
      ],
      decision: "Построил подачу вокруг одной метафоры — питание без поваров и кухни, — чтобы концепция считывалась сразу.",
      production: "Концепция технологии и материалы для защиты подготовлены самостоятельно.",
      result: "Концепция защищена перед комиссией Института бизнеса и дизайна.",
    },
    tools: ["Figma", "PowerPoint"],
    files: [{ label: "Qummy — PDF", href: "/work/other/qummy/qummy.pdf" }],
    results: [],
    tone: 1,
    en: {
      summary: "Qummy — a concept for a cook- and kitchen-free food technology. Institute of Business and Design.",
      role: "Project author",
      contribution: {
        role: "Project author",
        tags: ["Concept", "Presentation"],
        scope: [
          "Developed the technology concept",
          "Prepared materials for the panel defense",
        ],
        constraints: [
          "Had to fit a complex business idea into a format the panel could follow without prior context",
        ],
        decision: "Built the pitch around a single metaphor — food without cooks or a kitchen — so the concept landed immediately.",
        production: "The technology concept and defense materials were prepared solo.",
        result: "Defended the concept at the Institute of Business and Design panel.",
      },
      tools: ["Figma", "PowerPoint"],
      fileLabels: ["Qummy — PDF"],
    },
  },
  {
    slug: "yoyote",
    title: "Brand «yoyote»",
    categories: ["Branding"],
    summary: "Разработка бренда «yoyote». Институт бизнеса и дизайна, в соавторстве с Дарьей Ивановой.",
    role: "Дизайн бренда (совместно с Дарьей Ивановой)",
    contribution: {
      role: "Дизайн бренда (совместно с Дарьей Ивановой)",
      tags: ["Brand identity", "Logo", "Typography"],
      scope: [
        "Разработал визуальную систему бренда: логотип, цвет, типографику",
      ],
      team: [
        "Дарья Иванова — часть концепции продукта и материалов",
      ],
      constraints: [
        "Учебный формат требовал защитить решения перед комиссией, а не просто показать картинки",
      ],
      decision: "Разделили зоны ответственности: я — визуальная система, совместно — концепция продукта.",
      production: "Логотип, цветовая система и типографика бренда разработаны и оформлены в материалах для защиты.",
      result: "Бренд защищён перед комиссией в соавторстве с Дарьей Ивановой.",
    },
    tools: ["Adobe Illustrator", "Figma"],
    files: [{ label: "yoyote — PDF", href: "/work/other/yoyote/yoyote.pdf" }],
    results: [],
    tone: 2,
    en: {
      title: "Brand \"yoyote\"",
      summary: "Development of the \"yoyote\" brand. Institute of Business and Design, co-authored with Daria Ivanova.",
      role: "Brand design (with Daria Ivanova)",
      contribution: {
        role: "Brand design (with Daria Ivanova)",
        tags: ["Brand identity", "Logo", "Typography"],
        scope: [
          "Developed the brand's visual system: logo, color, typography",
        ],
        team: [
          "Daria Ivanova — part of the product concept and materials",
        ],
        constraints: [
          "The course format required defending the decisions to a panel, not just showing visuals",
        ],
        decision: "Split ownership: I owned the visual system, we developed the product concept together.",
        production: "The brand's logo, color system, and typography were developed and laid out in the defense materials.",
        result: "The brand was defended before the panel as a pair with Daria Ivanova.",
      },
      tools: ["Adobe Illustrator", "Figma"],
      fileLabels: ["yoyote — PDF"],
    },
  },
  {
    slug: "mojo-cacao",
    title: "MOJO Cacao — брендбук",
    categories: ["Branding"],
    summary: "Брендбук MOJO Cacao. Институт бизнеса и дизайна.",
    role: "Автор проекта",
    contribution: {
      role: "Автор проекта",
      tags: ["Brand book", "Logo", "Packaging"],
      scope: [
        "Разработал логотип и цветовую систему",
        "Прописал правила применения на упаковке",
      ],
      constraints: [
        "Документ должен был быть понятен без автора рядом",
      ],
      decision: "Сделал акцент на правилах применения, а не только на витринных примерах.",
      production: "Логотип, цветовая система и правила применения на упаковке оформлены в брендбук на 20+ страниц.",
      result: "Брендбук выполнен как учебный проект Института бизнеса и дизайна.",
    },
    tools: ["Adobe Illustrator", "Figma"],
    files: [{ label: "Брендбук MOJO — PDF", href: "/work/other/mojo-cacao/brandbook.pdf" }],
    results: [],
    tone: 3,
    en: {
      title: "MOJO Cacao — Brand Book",
      summary: "MOJO Cacao brand book. Institute of Business and Design.",
      role: "Project author",
      contribution: {
        role: "Project author",
        tags: ["Brand book", "Logo", "Packaging"],
        scope: [
          "Designed the logo and color system",
          "Wrote the packaging usage rules",
        ],
        constraints: [
          "The document had to be usable without the author in the room",
        ],
        decision: "Emphasized usage rules over just showcase examples.",
        production: "The logo, color system, and packaging usage rules were laid out in a 20+ page brand book.",
        result: "The brand book was completed as a course project at the Institute of Business and Design.",
      },
      tools: ["Adobe Illustrator", "Figma"],
      fileLabels: ["MOJO Brand Book — PDF"],
    },
  },
  {
    slug: "orange-toys",
    title: "Orange Toys — «Проект года»",
    categories: ["Presentation Design"],
    summary: "Презентация «Проект года» для компании Orange Toys. Институт бизнеса и дизайна.",
    role: "Дизайн презентации",
    contribution: {
      role: "Дизайн презентации",
      tags: ["Presentation design"],
      scope: [
        "Спроектировал структуру и дизайн слайдов",
        "Подготовил рабочий файл в PowerPoint для дальнейшего редактирования",
      ],
      constraints: [
        "Презентация должна была остаться редактируемым инструментом, а не только финальной картинкой",
      ],
      decision: "Сдал не только PDF, но и открытый PPTX-файл, которым команда может пользоваться дальше.",
      production: "12+ слайдов подготовлено для презентации «Проект года».",
      result: "Презентация сдана заказчику в PDF и в редактируемом PPTX — рабочий файл, которым команда может пользоваться дальше.",
    },
    tools: ["PowerPoint", "Adobe Photoshop"],
    files: [
      { label: "Orange Toys — PDF", href: "/work/other/orange-toys/orange-toys.pdf" },
      { label: "Orange Toys — оригинал PPTX", href: "/work/other/orange-toys/orange-toys.pptx" },
    ],
    results: [],
    tone: 4,
    en: {
      title: "Orange Toys — \"Project of the Year\"",
      summary: "\"Project of the Year\" presentation for Orange Toys. Institute of Business and Design.",
      role: "Presentation design",
      contribution: {
        role: "Presentation design",
        tags: ["Presentation design"],
        scope: [
          "Designed the slide structure and visuals",
          "Prepared a working PowerPoint file for further editing",
        ],
        constraints: [
          "The presentation had to stay an editable tool, not just a final image",
        ],
        decision: "Delivered both a PDF and an open PPTX file the client team could keep using.",
        production: "12+ slides prepared for the \\\"Project of the Year\\\" presentation.",
        result: "Delivered to the client as a PDF and an editable PPTX — a working file the team can keep using.",
      },
      tools: ["PowerPoint", "Adobe Photoshop"],
      fileLabels: ["Orange Toys — PDF", "Orange Toys — original PPTX"],
    },
  },
  {
    slug: "beryozki-diploma",
    title: "Берёзки — фирменный стиль сети чайных",
    categories: ["Branding", "Print"],
    summary: "Дипломный проект: фирменный стиль сети чайных «Берёзки» — вывеска, меню и рекламные материалы.",
    role: "Автор проекта",
    contribution: {
      role: "Автор проекта",
      tags: ["Brand identity", "Signage", "Print"],
      scope: [
        "Разработал концепцию фирменного стиля сети чайных",
        "Сделал вывеску, меню и рекламные материалы",
        "Оформил и защитил дипломную работу",
      ],
      constraints: [
        "Каждое решение нужно было обосновать перед комиссией, а не только показать финальный результат",
      ],
      decision: "Построил защиту вокруг одной сквозной идеи фирменного стиля, применённой на всех носителях — от вывески до меню.",
      production: "Вывеска, меню и рекламные материалы фирменного стиля сети чайных разработаны и оформлены в дипломной работе.",
      result: "Дипломный проект защищён перед комиссией Института бизнеса и дизайна.",
    },
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    files: [{ label: "Дипломная работа — DOCX", href: "/work/other/diploma/thesis.docx" }],
    results: [
      { caption: "Вывеска", ratio: "landscape", src: "/work/other/diploma/signage.png" },
      { caption: "Меню", ratio: "portrait", src: "/work/other/diploma/screen-1.png" },
      { caption: "Рекламные постеры", ratio: "landscape", src: "/work/other/diploma/screen-2.png" },
    ],
    tone: 5,
    en: {
      title: "Beryozki — Tea House Chain Identity",
      summary: "Thesis project: brand identity for the \"Beryozki\" tea house chain — signage, menu, and advertising materials.",
      role: "Project author",
      contribution: {
        role: "Project author",
        tags: ["Brand identity", "Signage", "Print"],
        scope: [
          "Developed the tea house chain's brand identity concept",
          "Designed the signage, menu, and advertising materials",
          "Wrote and defended the thesis",
        ],
        constraints: [
          "Every decision had to be justified to the panel, not just shown as a final result",
        ],
        decision: "Built the defense around one thread — a brand identity applied consistently across every material, from signage to menu.",
        production: "Signage, menu, and advertising materials for the tea house chain's identity were designed and documented in the thesis.",
        result: "Defended before the Institute of Business and Design panel.",
      },
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      fileLabels: ["Thesis — DOCX"],
      resultCaptions: ["Signage", "Menu", "Advertising posters"],
    },
  },
  {
    slug: "tea-launch",
    title: "Запуск чайного бренда, 2023",
    categories: ["Branding"],
    summary: "Разработка визуальных материалов для запуска чайного бренда, 2023 год.",
    year: "2023",
    role: "Автор проекта",
    contribution: {
      role: "Автор проекта",
      tags: ["Brand identity", "Artboards", "Video"],
      scope: [
        "Разработал артборды фирменного стиля",
        "Собрал промо-видео к запуску",
      ],
      constraints: [
        "Бренд нужен был к конкретной дате старта продаж, а не «когда будет готово»",
      ],
      decision: "Сфокусировался на минимальном наборе носителей, который можно было гарантированно успеть к дате запуска.",
      production: "4 артборда фирменного стиля и промо-видео подготовлены к запуску.",
      result: "Материалы были готовы к дате старта продаж чайного бренда.",
    },
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro"],
    results: [
      { caption: "Артборд — 1", ratio: "landscape", src: "/work/other/tea-launch/board-1.png" },
      { caption: "Артборд — 2", ratio: "landscape", src: "/work/other/tea-launch/board-2.png" },
      { caption: "Артборд — 3", ratio: "landscape", src: "/work/other/tea-launch/board-3.png" },
      { caption: "Артборд — 4", ratio: "landscape", src: "/work/other/tea-launch/board-4.jpeg" },
      { caption: "Видео", ratio: "landscape", video: "/work/other/tea-launch/video.mp4" },
    ],
    tone: 6,
    en: {
      title: "Tea Brand Launch, 2023",
      summary: "Development of visual materials for a tea brand launch, 2023.",
      role: "Project author",
      contribution: {
        role: "Project author",
        tags: ["Brand identity", "Artboards", "Video"],
        scope: [
          "Developed the brand identity artboards",
          "Put together the launch promo video",
        ],
        constraints: [
          "The brand had to be ready by a fixed sales-start date, not \"whenever it's done\"",
        ],
        decision: "Focused on the minimum set of materials that could reliably ship by the launch date.",
        production: "4 brand identity artboards and a promo video prepared for launch.",
        result: "The materials were ready by the tea brand's sales-start date.",
      },
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro"],
      resultCaptions: ["Artboard — 1", "Artboard — 2", "Artboard — 3", "Artboard — 4", "Video"],
    },
  },
  {
    slug: "artflash",
    title: "Artflash — мерч и креатив",
    categories: ["Print"],
    summary: "Принты для мерча Artflash: футболки с художественными и авторскими принтами.",
    role: "Дизайн принтов",
    contribution: {
      role: "Дизайн принтов",
      tags: ["Print design", "Illustration"],
      scope: [
        "Разработал авторские принты",
        "Предложил концепции коллабораций с независимыми художниками",
      ],
      team: [
        "Бренд утверждал финальные принты для производства",
        "Независимые художники — Цой, Миша Мост — предоставляли образы для коллабораций",
      ],
      constraints: [
        "Не любой контраст и деталь переносятся на футболку без потерь при печати на ткани",
      ],
      decision: "Адаптировал контраст и детализацию принтов под технологию печати до передачи в производство.",
      production: "30+ принтов разработано, включая коллаборации с независимыми художниками (Цой, Миша Мост).",
      result: "Принты использованы в производстве мерча Artflash — футболок с авторскими и коллаборационными принтами.",
    },
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    results: [
      { caption: "Футболка «Blue Crest»", ratio: "portrait", src: "/work/other/artflash/tee-blue-crest.png" },
      { caption: "Футболка — вариант 2", ratio: "portrait", src: "/work/other/artflash/tee-2.png" },
      { caption: "Футболка — вариант 3", ratio: "portrait", src: "/work/other/artflash/tee-3.jpg" },
      { caption: "Футболка — вариант 5", ratio: "portrait", src: "/work/other/artflash/tee-5.png" },
      { caption: "Футболка — вариант 6", ratio: "portrait", src: "/work/other/artflash/tee-6.png" },
      { caption: "Футболка — вариант 7", ratio: "portrait", src: "/work/other/artflash/tee-7.png" },
      { caption: "Футболка — вариант 8", ratio: "portrait", src: "/work/other/artflash/tee-8.png" },
      { caption: "Футболка — вариант 9", ratio: "portrait", src: "/work/other/artflash/tee-9.png" },
      { caption: "Футболка — вариант 10", ratio: "portrait", src: "/work/other/artflash/tee-10.png" },
      { caption: "Футболка — вариант 11", ratio: "portrait", src: "/work/other/artflash/tee-11.png" },
      { caption: "Футболка — вариант 12", ratio: "portrait", src: "/work/other/artflash/tee-12.png" },
      { caption: "Футболка — вариант 13", ratio: "portrait", src: "/work/other/artflash/tee-13.png" },
      { caption: "Футболка — вариант 14", ratio: "portrait", src: "/work/other/artflash/tee-14.png" },
      { caption: "Футболка — вариант 15", ratio: "portrait", src: "/work/other/artflash/tee-15.png" },
      { caption: "Цой", ratio: "portrait", src: "/work/other/artflash/tsoi.jpg" },
      { caption: "Миша Мост", ratio: "landscape", src: "/work/other/artflash/misha-most.jpg" },
      { caption: "Миша Мост — футболка", ratio: "portrait", src: "/work/other/artflash/misha-most-tee.png" },
      { caption: "Спорт", ratio: "portrait", src: "/work/other/artflash/sport.png" },
    ],
    tone: 7,
    en: {
      title: "Artflash — Merch & Creative",
      summary: "Prints for Artflash merch: t-shirts with artistic and original prints.",
      role: "Print design",
      contribution: {
        role: "Print design",
        tags: ["Print design", "Illustration"],
        scope: [
          "Designed original prints",
          "Proposed collaboration concepts with independent artists",
        ],
        team: [
          "The brand signed off on final prints for production",
          "Independent artists — Tsoi, Misha Most — supplied artwork for collaborations",
        ],
        constraints: [
          "Not every contrast or detail survives fabric printing without loss",
        ],
        decision: "Adapted contrast and detail in the prints to the print technology before handing off to production.",
        production: "30+ prints designed, including collaborations with independent artists (Tsoi, Misha Most).",
        result: "The prints went into Artflash's merch production — t-shirts with original and collaboration prints.",
      },
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      resultCaptions: [
        "\"Blue Crest\" t-shirt",
        "T-shirt — option 2",
        "T-shirt — option 3",
        "T-shirt — option 5",
        "T-shirt — option 6",
        "T-shirt — option 7",
        "T-shirt — option 8",
        "T-shirt — option 9",
        "T-shirt — option 10",
        "T-shirt — option 11",
        "T-shirt — option 12",
        "T-shirt — option 13",
        "T-shirt — option 14",
        "T-shirt — option 15",
        "Tsoi",
        "Misha Most",
        "Misha Most — t-shirt",
        "Sport",
      ],
    },
  },
  {
    slug: "metro",
    title: "METRO — рекламные креативы",
    categories: ["Marketing"],
    summary: "Рекламные креативы для соцсетей METRO Cash & Carry.",
    role: "Дизайн рекламных материалов",
    contribution: {
      role: "Дизайн рекламных материалов",
      tags: ["Ad design", "Social"],
      scope: [
        "Готовил рекламные креативы для соцсетей",
        "Адаптировал креативы под сезонные акции",
      ],
      team: [
        "Маркетинг формировал календарь акций и даты выхода",
      ],
      constraints: [
        "Публикация должна была выйти точно к датам акций — вина, глинтвейн и сезонные предложения теряют смысл при задержке даже на день",
      ],
      decision: "Держал шаблон креатива готовым заранее, чтобы под новую акцию требовалась только замена контента.",
      production: "7+ рекламных креативов подготовлено под сезонные акции METRO Cash & Carry.",
      result: "Креативы опубликованы в соцсетях точно к датам акций — вино, глинтвейн и сезонные предложения.",
    },
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    results: [
      { caption: "Промо-креатив", ratio: "square", src: "/work/other/metro/final.png" },
      { caption: "Промо — вариант 2", ratio: "square", src: "/work/other/metro/ready-2.png" },
      { caption: "Вина", ratio: "portrait", src: "/work/other/metro/wines.png" },
      { caption: "Глинтвейн", ratio: "portrait", src: "/work/other/metro/mulled-wine.png" },
      { caption: "Публикация — 1", ratio: "portrait", src: "/work/other/metro/screen-1.png" },
      { caption: "Публикация — 2", ratio: "portrait", src: "/work/other/metro/screen-2.png" },
      { caption: "Публикация — 3", ratio: "portrait", src: "/work/other/metro/screen-3.png" },
    ],
    tone: 0,
    en: {
      title: "METRO — Ad Creatives",
      summary: "Social media ad creatives for METRO Cash & Carry.",
      role: "Advertising material design",
      contribution: {
        role: "Advertising material design",
        tags: ["Ad design", "Social"],
        scope: [
          "Produced social media ad creatives",
          "Adapted creatives for seasonal promotions",
        ],
        team: [
          "Marketing set the promo calendar and release dates",
        ],
        constraints: [
          "Posts had to go out exactly on promo dates — wines, mulled wine, and seasonal offers lose their point if delayed even a day",
        ],
        decision: "Kept a creative template ready in advance so each new promo only needed a content swap.",
        production: "7+ ad creatives prepared for METRO Cash & Carry's seasonal promotions.",
        result: "Creatives published on social media exactly on promotion dates — wine, mulled wine, and seasonal offers.",
      },
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      resultCaptions: [
        "Promo creative",
        "Promo — option 2",
        "Wines",
        "Mulled wine",
        "Post — 1",
        "Post — 2",
        "Post — 3",
      ],
    },
  },
  {
    slug: "tenchat",
    title: "TenChat — креативы, презентации и 3D-моушн",
    categories: ["Marketing", "Presentation Design", "Motion"],
    summary:
      "Рекламные креативы для соцсетей, бизнес- и инвесторские презентации и 3D-ролик с макетом интерфейса деловой социальной сети TenChat.",
    year: "2023",
    role: "Стажёр-дизайнер",
    contribution: {
      role: "Стажёр-дизайнер",
      tags: ["Ad design", "Presentations", "3D motion"],
      scope: [
        "Готовил рекламные посты и таргетированные креативы",
        "Вёрстал презентации для бизнеса и инвесторов",
        "Участвовал в производстве 3D-ролика с макетом интерфейса",
      ],
      team: [
        "Отдел маркетинга формировал бриф и темп задач наравне со штатной командой",
        "Команда моушн-дизайна — совместная работа над 3D-роликом",
      ],
      constraints: [
        "Стажировка шла в темпе продакшена наравне со штатной командой, а не в тепличном режиме",
      ],
      decision: "Брал на себя креативы и презентации самостоятельно, а на 3D-ролике работал в связке с моушн-командой, а не в одиночку.",
      production: "10+ материалов подготовлено за 3 месяца стажировки: рекламные креативы, 2 презентации и 3D-ролик с макетом интерфейса.",
      result: "Материалы опубликованы в соцсетях и использованы на встречах с бизнес- и инвесторской аудиторией TenChat.",
    },
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Cinema 4D", "Blender", "Adobe Premiere Pro"],
    task: "Трёхмесячная стажировка в маркетинге TenChat: подготовка рекламных постов и таргетированных креативов для соцсетей, вёрстка презентаций для бизнес-аудитории и инвесторов, а также участие в производстве 3D-ролика с макетом интерфейса платформы на ноутбуке и телефоне.",
    files: [
      {
        label: "Презентация «TenChat для бизнеса» — PDF",
        href: "/work/other/tenchat/business-presentation.pdf",
      },
      {
        label: "Презентация «Pre-IPO Альянс» — PDF",
        href: "/work/other/tenchat/preipo-presentation.pdf",
      },
    ],
    results: [
      {
        caption: "Промо офлайн-встречи «Поддержи своих» в Новокузнецке",
        ratio: "portrait",
        src: "/work/other/tenchat/support-poster.jpg",
      },
      {
        caption: "Реклама: заработок на фрилансе в TenChat",
        ratio: "square",
        src: "/work/other/tenchat/freelance-ad.jpg",
      },
      {
        caption: "Таргетированный креатив для конференции AI Russia 2023",
        ratio: "square",
        src: "/work/other/tenchat/ai-russia-ad.jpg",
      },
      {
        caption: "Обзор возможностей платформы: инвестиции, ИИ, репутация, госзакупки",
        ratio: "landscape",
        src: "/work/other/tenchat/features-graphic.jpg",
      },
      {
        caption: "Кампания «Lady TenChat» — всемирный флешмоб",
        ratio: "square",
        src: "/work/other/tenchat/lady-tenchat.jpg",
      },
      {
        caption: "Презентация «TenChat для бизнеса» — титульный слайд",
        ratio: "wide",
        src: "/work/other/tenchat/business-presentation.jpg",
        href: "/work/other/tenchat/business-presentation.pdf",
      },
      {
        caption: "Презентация «Pre-IPO Альянс» — титульный слайд",
        ratio: "wide",
        src: "/work/other/tenchat/preipo-presentation.jpg",
        href: "/work/other/tenchat/preipo-presentation.pdf",
      },
      {
        caption: "3D-сцена для рекламного ролика — рабочий файл (Cinema 4D)",
        ratio: "wide",
        src: "/work/other/tenchat/3d-wip-1.jpg",
      },
      {
        caption: "3D-сцена для рекламного ролика — рабочий файл (Blender)",
        ratio: "wide",
        src: "/work/other/tenchat/3d-wip-2.jpg",
      },
      {
        caption: "Рекламный 3D-ролик: интерфейс TenChat на макетах ноутбука и телефона",
        ratio: "square",
        video: "/work/other/tenchat/mockup-motion.mp4",
      },
    ],
    tone: 1,
    en: {
      title: "TenChat — Creatives, Decks & 3D Motion",
      summary:
        "Social media ad creatives, business and investor presentations, and a 3D motion piece showcasing the interface of TenChat, a Russian professional social network.",
      role: "Design Intern",
      contribution: {
        role: "Design Intern",
        tags: ["Ad design", "Presentations", "3D motion"],
        scope: [
          "Produced ad posts and targeted creatives",
          "Built presentations for business and investor audiences",
          "Contributed to a 3D interface-mockup promo video",
        ],
        team: [
          "The marketing team set the brief and pace, on par with the in-house team",
          "The motion design team — joint work on the 3D video",
        ],
        constraints: [
          "The internship ran at in-house production pace, not a slower training track",
        ],
        decision: "Owned the creatives and presentations solo, while working in tandem with the motion team on the 3D video rather than alone.",
        production: "10+ pieces produced over a 3-month internship: ad creatives, 2 presentations, and a 3D interface-mockup video.",
        result: "The materials were published on social media and used in meetings with TenChat's business and investor audience.",
      },
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Cinema 4D", "Blender", "Adobe Premiere Pro"],
      task: "A three-month internship on TenChat's marketing team: producing ad posts and targeted creatives for social media, building presentations for business and investor audiences, and contributing to a 3D promo video featuring a laptop and phone mockup of the platform's interface.",
      fileLabels: [
        "\"TenChat for Business\" presentation — PDF",
        "\"Pre-IPO Alliance\" presentation — PDF",
      ],
      resultCaptions: [
        "Promo for the \"Support Your Own\" offline meetup in Novokuznetsk",
        "Ad: earning money freelancing on TenChat",
        "Targeted creative for the AI Russia 2023 conference",
        "Platform features overview: investments, AI, reputation, public procurement",
        "\"Lady TenChat\" campaign — worldwide flash mob",
        "\"TenChat for Business\" presentation — title slide",
        "\"Pre-IPO Alliance\" presentation — title slide",
        "3D scene for the promo video — work in progress (Cinema 4D)",
        "3D scene for the promo video — work in progress (Blender)",
        "3D promo video: TenChat interface on laptop and phone mockups",
      ],
    },
  },
  {
    slug: "illustrations",
    title: "Иллюстрации Illustrator",
    categories: ["Illustration"],
    summary:
      "Персонажи, иллюстрации и стикеры, нарисованные в Illustrator для разных проектов и заказчиков.",
    year: "2018 — 2022",
    role: "Иллюстратор-фрилансер",
    contribution: {
      role: "Иллюстратор-фрилансер",
      tags: ["Illustration", "Character design"],
      scope: [
        "Рисовал персонажей, стикеры и постеры под бриф заказчика",
        "Проходил правки от скетча до финальной отрисовки",
      ],
      team: [
        "Заказчики формировали техзадание и правки",
      ],
      constraints: [
        "Каждая иллюстрация — отдельный заказ с собственным брифом и сроком",
      ],
      decision: "Держал единый рабочий процесс — скетч → правки → финальная отрисовка — вне зависимости от заказчика.",
      production: "25+ иллюстраций и стикеров создано за несколько лет фриланса под брифы разных заказчиков.",
      result: "Часть детских персонажей легла в основу стороннего MBTI-проекта для детей.",
    },
    tools: ["Adobe Illustrator"],
    task: "Подборка иллюстраторских работ по фриланс-заказам разных лет: персонажи, стикеры и постеры. Часть иллюстраций с детскими персонажами сделана для сайта, который определяет тип личности (MBTI) у детей — ракета с юными инженерами открывает этот блок работ.",
    results: [
      {
        caption:
          "Ракета с юными инженерами — общая иллюстрация блока «Сайт по определению MBTI у детей»",
        ratio: "square",
        src: "/work/other/illustrations/kids-rocket-cover.jpg",
      },
      {
        caption: "Стикеры для Telegram",
        ratio: "landscape",
        src: "/work/other/illustrations/sticker-sheet.jpg",
      },
      {
        caption: "Концепт-скетчи: формы, ДНК, фигуры",
        ratio: "landscape",
        src: "/work/other/illustrations/concept-sketches.jpg",
      },
      {
        caption: "Мишки в коробке — иллюстрация к 14 февраля",
        ratio: "landscape",
        src: "/work/other/illustrations/teddy-bears.jpg",
      },
      {
        caption: "Портрет для проекта про MBTI / соционику",
        ratio: "landscape",
        src: "/work/other/illustrations/mbti-portrait-1.jpg",
      },
      {
        caption: "Портрет для проекта про MBTI / соционику — деталь",
        ratio: "square",
        src: "/work/other/illustrations/mbti-portrait-2.jpg",
      },
      {
        caption: "Портрет в поп-арт стиле",
        ratio: "tall",
        src: "/work/other/illustrations/pop-art-portrait.jpg",
      },
      {
        caption: "Типографический постер «Мой релиз»",
        ratio: "landscape",
        src: "/work/other/illustrations/typographic-poster.jpg",
      },
      {
        caption: "ETJ — Директор: девочка на горке",
        ratio: "tall",
        src: "/work/other/illustrations/type-etj-f.jpg",
      },
      {
        caption: "ETJ — Директор: мальчик на горке",
        ratio: "tall",
        src: "/work/other/illustrations/type-etj-m.jpg",
      },
      {
        caption: "ITP — Учёный: девочка с конструктором",
        ratio: "landscape",
        src: "/work/other/illustrations/type-itp-f.jpg",
      },
      {
        caption: "ITP — Учёный: мальчик с конструктором",
        ratio: "landscape",
        src: "/work/other/illustrations/type-itp-m.jpg",
      },
      {
        caption: "EFJ — Учитель: девочка обнимает собаку",
        ratio: "landscape",
        src: "/work/other/illustrations/type-efj-f.jpg",
      },
      {
        caption: "EFJ — Учитель: мальчик обнимает собаку",
        ratio: "landscape",
        src: "/work/other/illustrations/type-efj-m.jpg",
      },
      {
        caption: "IFP — Духовный наставник: девочка с гитарой",
        ratio: "landscape",
        src: "/work/other/illustrations/type-ifp-f.jpg",
      },
      {
        caption: "IFP — Духовный наставник: мальчик с гитарой",
        ratio: "landscape",
        src: "/work/other/illustrations/type-ifp-m.jpg",
      },
      {
        caption: "ESP — Активист: девочка на скейтборде",
        ratio: "tall",
        src: "/work/other/illustrations/type-esp-f.jpg",
      },
      {
        caption: "ESP — Активист: мальчик бежит с рюкзаком",
        ratio: "tall",
        src: "/work/other/illustrations/type-esp-m.jpg",
      },
      {
        caption: "ISJ — Хранитель: девочка с книгами",
        ratio: "landscape",
        src: "/work/other/illustrations/type-isj-f.jpg",
      },
      {
        caption: "ISJ — Хранитель: мальчик с книгами",
        ratio: "landscape",
        src: "/work/other/illustrations/type-isj-m.jpg",
      },
      {
        caption: "ENP — Исследователь: девочка с идеей на сцене",
        ratio: "landscape",
        src: "/work/other/illustrations/type-enp-f.jpg",
      },
      {
        caption: "ENP — Исследователь: мальчик с идеей на сцене",
        ratio: "landscape",
        src: "/work/other/illustrations/type-enp-m.jpg",
      },
      {
        caption: "INJ — Интеллектуал: девочка за ноутбуком",
        ratio: "landscape",
        src: "/work/other/illustrations/type-inj-f.jpg",
      },
      {
        caption: "INJ — Интеллектуал: мальчик за ноутбуком",
        ratio: "landscape",
        src: "/work/other/illustrations/type-inj-m.jpg",
      },
    ],
    files: [
      {
        label: "tiplichnosti.ru — сайт с этими работами",
        href: "https://tiplichnosti.ru/roditelyam",
      },
    ],
    tone: 2,
    en: {
      title: "Illustrations — Illustrator",
      summary:
        "Characters, illustrations, and stickers drawn in Illustrator for various projects and clients.",
      role: "Freelance Illustrator",
      contribution: {
        role: "Freelance Illustrator",
        tags: ["Illustration", "Character design"],
        scope: [
          "Drew characters, stickers, and posters to client briefs",
          "Took each piece through revisions from sketch to final art",
        ],
        team: [
          "Clients provided the brief and revisions",
        ],
        constraints: [
          "Each illustration was a separate commission with its own brief and deadline",
        ],
        decision: "Kept one workflow — sketch → revisions → final art — regardless of the client.",
        production: "25+ illustrations and stickers created over several years of freelancing to different client briefs.",
        result: "Some of the children's characters became the basis of a third-party MBTI project for kids.",
      },
      tools: ["Adobe Illustrator"],
      task: "A collection of freelance illustration work from different years: characters, stickers, and posters. Some of the illustrations with child characters were made for a website that determines personality type (MBTI) for kids — the rocket with young engineers opens this block.",
      resultCaptions: [
        "Rocket with young engineers — general cover illustration for the \"MBTI-for-kids website\" block",
        "Telegram sticker pack",
        "Concept sketches: shapes, DNA, figures",
        "Teddy bears in a box — Valentine's Day illustration",
        "Portrait for an MBTI / socionics project",
        "Portrait for an MBTI / socionics project — detail",
        "Pop-art style portrait",
        "Typographic poster \"My Release\"",
        "ETJ — Director: girl on a slide",
        "ETJ — Director: boy on a slide",
        "ITP — Scientist: girl with building blocks",
        "ITP — Scientist: boy with building blocks",
        "EFJ — Teacher: girl hugging a dog",
        "EFJ — Teacher: boy hugging a dog",
        "IFP — Mentor: girl with a guitar",
        "IFP — Mentor: boy with a guitar",
        "ESP — Activist: girl on a skateboard",
        "ESP — Activist: boy running with a backpack",
        "ISJ — Guardian: girl with books",
        "ISJ — Guardian: boy with books",
        "ENP — Explorer: girl with an idea on stage",
        "ENP — Explorer: boy with an idea on stage",
        "INJ — Intellectual: girl at a laptop",
        "INJ — Intellectual: boy at a laptop",
      ],
      fileLabels: ["tiplichnosti.ru — website featuring these works"],
    },
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Previous / next project for the case-page footer navigation. */
export function getProjectNeighbours(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}

export function getProjectsByCompany(companyId: CompanyId): Project[] {
  return projects.filter((project) => project.companyId === companyId);
}

export function getOtherProjects(): Project[] {
  return projects.filter((project) => !project.companyId);
}

export const allCategories = Array.from(
  new Set(projects.flatMap((project) => project.categories)),
);

/**
 * Returns a flattened, language-appropriate Project object.
 * For "ru" (or when no translation exists) this just returns the project unchanged.
 * For "en" it applies the `en` overrides on top of the Russian original.
 */
export function localizeProject(project: Project, lang: "ru" | "en"): Project {
  if (lang !== "en" || !project.en) return project;
  const t = project.en;

  return {
    ...project,
    title: t.title ?? project.title,
    summary: t.summary ?? project.summary,
    role: t.role ?? project.role,
    task: t.task ?? project.task,
    contribution: t.contribution ?? project.contribution,
    tools: t.tools ?? project.tools,
    results: t.resultCaptions
      ? project.results.map((result, index) => ({
          ...result,
          caption: t.resultCaptions?.[index] ?? result.caption,
        }))
      : project.results,
    files: t.fileLabels
      ? project.files?.map((file, index) => ({
          ...file,
          label: t.fileLabels?.[index] ?? file.label,
        }))
      : project.files,
  };
}
