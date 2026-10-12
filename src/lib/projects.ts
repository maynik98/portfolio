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

/**
 * Developer-specific details for engineering cases: stack, key numbers and the
 * engineering ideas behind the solution. Rendered as a separate block on the
 * case page and used by the developer section/page.
 */
export type DevDetails = {
  /** Technologies actually used. */
  stack: string[];
  /** Key facts as big numbers. */
  metrics: { value: string; label: string }[];
  /** Engineering decisions — "how I solved it cleverly". */
  ideas: { title: string; text: string }[];
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
  /** English category labels — overrides the Russian `categories` on the base project. */
  categories?: string[];
  /** Captions aligned by index with `results`. */
  resultCaptions?: string[];
  /** Labels aligned by index with `files`. */
  fileLabels?: string[];
  /** Full override of developer details. */
  dev?: DevDetails;
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
  /** Developer details — present only on engineering cases. */
  dev?: DevDetails;
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
    categories: ["Брендинг", "Полиграфия"],
    companyId: "gnm",
    summary:
      "Единая визуальная система GNM для рекламы, digital, печати, презентаций, мерча и мероприятий — вместо разрозненных материалов от разных подрядчиков.",
    year: "2023 — н. в.",
    role: "Lead Graphic Designer, отдел маркетинга",
    contribution: {
      role: "Lead Graphic Designer, отдел маркетинга",
      tags: ["Визуальная концепция", "Графический дизайн", "Мерч", "Продакшн"],
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
      categories: ["Branding", "Print"],
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
    categories: ["Веб-дизайн"],
    companyId: "gnm",
    summary:
      "Дизайн главной страницы корпоративного сайта gnm.net и страницы «Exchange Locations & Network Coverage» с интерактивной картой точек присутствия.",
    year: "2023 — н. в.",
    role: "Дизайн интерфейсов, структура, передача в разработку",
    contribution: {
      role: "Дизайн интерфейсов, структура, передача в разработку",
      tags: ["UI-дизайн", "Веб", "Передача в разработку"],
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
      categories: ["Web Design"],
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
    categories: ["Маркетинг"],
    companyId: "gnm",
    summary:
      "Система рекламных креативов GNM, которая держит одно сообщение во всех форматах — от баннеров до вертикальных сторис — без пересборки каждого размера с нуля.",
    year: "2023 — н. в.",
    role: "Дизайн рекламных материалов, адаптация под каналы",
    contribution: {
      role: "Дизайн рекламных материалов, адаптация под каналы",
      tags: ["Ключевой визуал", "Дизайн рекламы", "Адаптация"],
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
      categories: ["Marketing"],
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
    categories: ["Моушн", "Веб-дизайн"],
    companyId: "gnm",
    summary:
      "Анимированные ролики и новостные заставки GNM-IX: промо-акции, отчёты по трафику и объявления — используются в соцсетях и как заглушки для новостных дайджестов на сайте.",
    year: "2023 — н. в.",
    role: "Концепция, анимация, монтаж",
    contribution: {
      role: "Концепция, анимация, монтаж",
      tags: ["Концепция", "Анимация", "Монтаж"],
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
    tools: ["After Effects", "Adobe Premiere Pro", "Media Encoder", "Adobe Photoshop"],
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
      categories: ["Motion", "Web Design"],
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
      tools: ["After Effects", "Adobe Premiere Pro", "Media Encoder", "Adobe Photoshop"],
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
    categories: ["Полиграфия"],
    companyId: "gnm",
    summary:
      "Комплект полиграфии и стендового оформления GNM-IX для мероприятий — читается по единой иерархии на расстоянии и вблизи, а не как набор разрозненных макетов.",
    year: "2023 — н. в.",
    role: "Дизайн, препресс, работа с подрядчиками",
    contribution: {
      role: "Дизайн, препресс, работа с подрядчиками",
      tags: ["Дизайн полиграфии", "Препресс", "Работа с подрядчиками"],
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
      categories: ["Print"],
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
    categories: ["Дизайн презентаций"],
    companyId: "gnm",
    summary:
      "Шаблон презентаций GNM, которым отделы пользуются самостоятельно — вместо того чтобы каждый раз обращаться к дизайнеру за новой колодой.",
    year: "2023 — н. в.",
    role: "Структура, дизайн слайдов, шаблоны",
    contribution: {
      role: "Структура, дизайн слайдов, шаблоны",
      tags: ["Дизайн слайдов", "Шаблоны", "Типографика"],
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
      categories: ["Presentation Design"],
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
    categories: ["UI-дизайн"],
    companyId: "gnm",
    summary:
      "Экраны VPN-приложения GNM, оформленные в общей визуальной системе компании — тот же логотип, шрифт и акцент, что на сайте и в остальных материалах.",
    year: "2023 — н. в.",
    role: "Визуальное оформление интерфейса",
    contribution: {
      role: "Визуальное оформление интерфейса",
      tags: ["UI-дизайн", "Мобильное приложение"],
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
      categories: ["UI Design"],
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
    title: "GlobalNet — ИИ-ассистент продаж в Telegram",
    categories: ["Разработка", "ИИ-агенты"],
    companyId: "globalnet",
    summary:
      "Telegram-бот, который сам консультирует клиентов магистрального оператора по услугам и ценам, квалифицирует заявку и передаёт её свободному менеджеру — с очередью, номерами заявок, архивом и аналитикой.",
    year: "2023 — н. в.",
    role: "Разработка бота: архитектура, логика, ИИ, тестирование",
    contribution: {
      role: "Разработка бота: архитектура, логика, ИИ, тестирование",
      tags: ["Python", "LLM + RAG", "Маршрутизация заявок", "Автотесты"],
      scope: [
        "Спроектировал и написал бота на Python (aiogram): сценарии, роли персонала, очередь менеджеров",
        "Собрал базу знаний о продуктах и ценах и поиск по ней (RAG на TF-IDF) с синонимами и словоформами",
        "Написал системный промпт и программные ограничители, которые не дают модели выдумывать",
        "Построил стенд из 600+ автоматических проверок и прогонял через него правки",
        "Сделал панель администратора: заявки, отчёты, статистика, рассылки, выгрузки в Excel",
      ],
      team: [
        "Продажи и поддержка передали типовые вопросы и прайс",
        "Руководитель утверждал сценарии передачи клиента менеджеру",
      ],
      constraints: [
        "Бот не имеет права выдумывать цены и факты — ошибка стоит денег и репутации",
        "Клиент не должен узнать о существовании внутренней базы знаний",
        "Заявка не должна теряться, если менеджер не отвечает, а два менеджера — попадать в один диалог",
        "Каждый прогон тестов на живой модели стоит денег — набор должен оставаться компактным",
      ],
      decision:
        "Вынес критичные правила из промпта в код. Модель отвечает только по найденным в базе фрагментам, а если факта нет — честно говорит, что уточнит менеджер. Передачу менеджеру проверяет отдельная функция-ограничитель, покрытая тестами, с исключением для срочных случаев вроде идущей DDoS-атаки.",
      production:
        "~8 500 строк Python, база знаний ~2 900 строк, 600+ автоматических проверок, 3 роли персонала, номера заявок, архив и выгрузки в Excel.",
      result:
        "Бот работает с клиентами GlobalNet в Telegram и передаёт менеджерам уже квалифицированные заявки — с номером, сутью запроса и контактами.",
    },
    tools: ["Python", "aiogram", "DeepSeek API", "scikit-learn", "openpyxl", "Claude Code"],
    task: "GlobalNet продаёт сложные B2B-услуги: пиринг DATAIX, IP-транзит, магистральные каналы, защиту от DDoS. Вопросы клиентов приходили менеджерам вручную, в том числе ночью и в выходные. Нужен был бот, который отвечает круглосуточно по базе знаний компании, не выдумывает цены, ненавязчиво собирает данные для заявки и передаёт клиента свободному менеджеру так, чтобы ни один запрос не потерялся.",
    dev: {
      stack: ["Python", "aiogram", "DeepSeek API", "RAG / TF-IDF", "scikit-learn", "openpyxl", "JSON-хранилища"],
      metrics: [
        { value: "8 500+", label: "строк Python" },
        { value: "600+", label: "автотестов против галлюцинаций" },
        { value: "88", label: "точек присутствия в поиске" },
        { value: "3", label: "роли персонала" },
      ],
      ideas: [
        {
          title: "Правила — в коде, а не только в промпте",
          text: "Модель иногда задавала вопрос и тут же передавала клиента менеджеру. Вместо бесконечной правки промпта я вынес проверку в отдельную функцию внутри получения ответа — теперь это правило невозможно обойти, и его покрывают тесты.",
        },
        {
          title: "Поиск, который понимает живую речь",
          text: "Клиенты пишут «питер», «какие у вас есть города», «можно посмотреть карту сети». Добавил расширение запроса синонимами, учёт русских падежей и отдельную нарезку прайса и списка из 88 точек присутствия, чтобы они не рвались на куски.",
        },
        {
          title: "Очередь без потерь и двойных диалогов",
          text: "Автоэскалация к следующему менеджеру по таймауту, повтор при недоступном менеджере с уведомлением админам, блокировка устаревших кнопок, чтобы двое не взяли одного клиента, и менеджер «только по ручному назначению».",
        },
        {
          title: "Заявки, которые удобно читать",
          text: "Сквозная нумерация, переживающая перезапуск, архив на 60 дней с автоочисткой и Excel-выгрузка, где каждая заявка — вертикальная карточка, а переписка читается как чат. Отдельно — база тех, кто общался только с ИИ.",
        },
      ],
    },
    results: [
      {
        caption: "Как устроен бот: от вопроса клиента до заявки у менеджера",
        ratio: "wide",
        src: "/work/dev/sales-bot/flow.jpg",
      },
      {
        caption: "Интерфейс менеджера: передача заявки, закрытие диалога, статистика (макет по реальным экранам бота, данные условные)",
        ratio: "portrait",
        src: "/work/dev/sales-bot/manager.jpg",
      },
      {
        caption: "Диалог с ботом: подбор услуги и расчёт стоимости порта DATAIX",
        ratio: "portrait",
        src: "/work/telegram-bot-design/ai-chat-example.jpg",
      },
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
    ],
    tone: 7,
    en: {
      categories: ["Development", "AI agents"],
      title: "GlobalNet — AI Sales Assistant in Telegram",
      summary:
        "A Telegram bot that consults a backbone operator's clients on services and pricing, qualifies the request and hands it to an available manager — with a queue, ticket numbers, an archive and analytics.",
      role: "Bot development: architecture, logic, AI, testing",
      contribution: {
        role: "Bot development: architecture, logic, AI, testing",
        tags: ["Python", "LLM + RAG", "Lead routing", "Automated tests"],
        scope: [
          "Designed and built the bot in Python (aiogram): flows, staff roles, the manager queue",
          "Assembled the product and pricing knowledge base and its search (TF-IDF RAG) with synonyms and word forms",
          "Wrote the system prompt and code-level guardrails that stop the model from making things up",
          "Built a 600+ automated check suite and ran changes through it",
          "Built the admin panel: tickets, reports, stats, broadcasts, Excel exports",
        ],
        team: [
          "Sales and support provided routine questions and the price list",
          "The department head approved the hand-off-to-manager scenarios",
        ],
        constraints: [
          "The bot must never invent prices or facts — a mistake costs money and reputation",
          "Clients must not learn that an internal knowledge base exists",
          "No request may get lost if a manager doesn't respond, and two managers must never end up in one chat",
          "Every test run against the live model costs money — the suite had to stay lean",
        ],
        decision:
          "Moved critical rules from the prompt into code. The model answers only from retrieved knowledge-base fragments, and if a fact is missing it honestly says a manager will follow up. A separate, test-covered guardrail function checks every hand-off, with an exception for urgent cases like an ongoing DDoS attack.",
        production:
          "~8,500 lines of Python, a ~2,900-line knowledge base, 600+ automated checks, 3 staff roles, ticket numbers, an archive and Excel exports.",
        result:
          "The bot talks to GlobalNet clients in Telegram and hands managers already-qualified requests — with a ticket number, the gist and contact details.",
      },
      tools: ["Python", "aiogram", "DeepSeek API", "scikit-learn", "openpyxl", "Claude Code"],
      task: "GlobalNet sells complex B2B services: DATAIX peering, IP transit, backbone links, DDoS protection. Client questions used to land on managers manually, including nights and weekends. The company needed a bot that answers around the clock from its knowledge base, never invents prices, gently collects what a request needs, and routes the client to an available manager so that no request gets lost.",
      dev: {
        stack: ["Python", "aiogram", "DeepSeek API", "RAG / TF-IDF", "scikit-learn", "openpyxl", "JSON storage"],
        metrics: [
          { value: "8,500+", label: "lines of Python" },
          { value: "600+", label: "anti-hallucination checks" },
          { value: "88", label: "points of presence in search" },
          { value: "3", label: "staff roles" },
        ],
        ideas: [
          {
            title: "Rules live in code, not only in the prompt",
            text: "The model sometimes asked a question and handed the client off in the same message. Instead of endless prompt tweaks, I moved the check into a dedicated function inside answer generation — the rule can't be bypassed, and tests cover it.",
          },
          {
            title: "Search that understands real speech",
            text: "Clients write slang city names or ask to \"see the network map\" in any grammatical case. I added query expansion with synonyms, Russian word-form handling, and separate chunking for the price list and the 88-location presence list so they never get split apart.",
          },
          {
            title: "A queue with no lost or doubled chats",
            text: "Timeout escalation to the next manager, retries with an admin alert when a manager is unreachable, invalidated stale buttons so two people can't take one client, and a manager who is assigned only manually.",
          },
          {
            title: "Tickets that are easy to read",
            text: "Numbering that survives restarts, a 60-day self-pruning archive, and an Excel export where every ticket is a vertical card and the conversation reads like a chat. AI-only conversations are kept in a separate database.",
          },
        ],
      },
      resultCaptions: [
        "How the bot works: from a client's question to a ticket on a manager's desk",
        "Manager interface: ticket hand-off, closing a chat, stats (mockup based on the real bot screens, sample data)",
        "Chat with the bot: picking a service and pricing a DATAIX port",
        "Bot screen with AI assistant",
        "GlobalNet AI assistant promo poster",
      ],
    },
  },
  {
    slug: "chat-monitor-bot",
    title: "GlobalNet — бот-аналитик клиентских чатов",
    categories: ["Разработка", "ИИ-агенты"],
    companyId: "globalnet",
    summary:
      "Telegram-бот, который мониторит клиентские чаты, структурирует переписку в базу данных и автоматически сообщает руководителям о жалобах, конфликтах и просроченных ответах.",
    year: "2026",
    role: "Разработка бота, аналитика на базе ИИ",
    contribution: {
      role: "Разработка бота, аналитика на базе ИИ",
      tags: ["Разработка бота", "ИИ-аналитика", "Структура данных"],
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
      result: "Бот подключён ко всем клиентским групповым чатам компании и работает в проде на постоянной основе.",
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
      categories: ["Development", "AI agents"],
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
        result: "The bot is connected to all of the company's client group chats and runs continuously in production.",
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
    slug: "news-digest",
    featured: true,
    title: "GlobalNet News Digest — ИИ-редактор новостей",
    categories: ["Разработка", "ИИ-агенты"],
    companyId: "globalnet",
    summary:
      "Система, которая каждый день собирает телеком-новости из 343 источников, сама отбирает важное для компании, пишет черновики постов и присылает их редакторам на согласование в Telegram.",
    year: "2026",
    role: "Разработка системы под ключ: сбор, ИИ-отбор, бот согласования",
    contribution: {
      role: "Разработка системы под ключ: сбор, ИИ-отбор, бот согласования",
      tags: ["Python", "Парсинг", "ИИ-скоринг", "Telegram-бот"],
      scope: [
        "Сбор новостей из Telegram-каналов без аккаунта, RSS, страниц СМИ и сайтов 500+ клиентов — с автопоиском раздела новостей",
        "Многоступенчатая воронка оценки: правила → быстрый ИИ → подробный разбор по 6 шкалам из ТЗ",
        "Бот согласования для трёх редакторов: кнопки, редактирование, общий статус карточки, расписание рассылки",
        "Обучение на решениях редакторов и на архиве уже опубликованных постов канала",
        "Чтение закрытых отраслевых чатов через пользовательский аккаунт Telegram",
      ],
      team: [
        "Главный редактор канала принимает решения о публикации и даёт обратную связь по отбору",
        "Маркетинг передал базу клиентов (~500 компаний) и список источников",
      ],
      constraints: [
        "Тысячи новостей в неделю — прогонять каждую через сильную модель слишком дорого",
        "Одна и та же новость приходит из десятка источников",
        "Слухи и инсайды нельзя публиковать как факт",
        "Telegram разрешает боту удалять свои сообщения только в течение 48 часов",
      ],
      decision:
        "Построил воронку, где дорогой ИИ работает только с тем, что прошло бесплатные правила и дешёвую пакетную оценку. На тестовом дне это 8 подробных разборов вместо 173 — объём текста, отправляемого модели, сократился примерно на 90%.",
      production:
        "~5 500 строк Python, 343 источника, база SQLite с памятью ссылок на 120 дней, 6 шкал оценки, Excel-отчёт с разложением итоговой оценки по слагаемым.",
      result:
        "За первые 10 дней система собрала 9 785 новостей, 4 650 новых прошли через воронку, около 140 ушли на согласование, 26 опубликованы в канале. Проект упакован для развёртывания на сервере компании.",
    },
    tools: ["Python", "aiogram", "Telethon", "DeepSeek API", "BeautifulSoup", "SQLite", "openpyxl", "Claude Code"],
    task: "Закрытый канал GlobalNet News Digest вели вручную: кто-то должен был каждое утро просматривать десятки каналов и сайтов, выбирать новости рынка, конкурентов, законодательства и клиентов и оформлять посты. По ТЗ нужна была система, которая делает это сама: собирает новости, оценивает их по критериям компании, готовит черновик — а человеку оставляет только решение «публиковать или нет».",
    dev: {
      stack: ["Python", "aiogram", "Telethon", "DeepSeek API", "BeautifulSoup", "RSS", "SQLite", "TF-IDF", "openpyxl"],
      metrics: [
        { value: "343", label: "источника" },
        { value: "4 650", label: "новостей прошли воронку за 10 дней" },
        { value: "~90%", label: "экономия токенов за счёт воронки" },
        { value: "26", label: "постов в канале" },
      ],
      ideas: [
        {
          title: "Эталон — сам канал",
          text: "Всё, что уже опубликовано в канале, — образец интересного компании. Каждая новость сравнивается с 1 199 постами архива, а ИИ один раз читает весь канал и формулирует редакционную политику, которую получает в каждом запросе.",
        },
        {
          title: "Обучение на кнопках",
          text: "«Неинтересно» не просто скрывает карточку: похожие новости, их категория, источник и слова в заголовке получают минус, публикация — плюс. Через пару недель отбор подстраивается под вкус редактора без единой правки кода.",
        },
        {
          title: "Повтор — это сигнал",
          text: "Если о событии пишут сразу несколько источников, новость не анализируется заново, а получает бонус «горячести». Так дубли не тратят токены и одновременно помогают находить главное.",
        },
        {
          title: "Срочное — сразу",
          text: "Новости с упоминанием GlobalNet и DATAIX выделяются красной плашкой и в рабочее время приходят немедленно, не дожидаясь утренней рассылки. Слухи помечаются «неподтверждённая информация».",
        },
      ],
    },
    results: [
      {
        caption: "Воронка отбора с реальными цифрами первых 10 дней работы",
        ratio: "wide",
        src: "/work/dev/news-digest/pipeline.jpg",
      },
      {
        caption: "Черновик на согласование: пост, комментарий ИИ с оценками по 6 шкалам и кнопки решения (комментарий в канал не публикуется)",
        ratio: "portrait",
        src: "/work/dev/news-digest/draft-card.jpg",
      },
    ],
    tone: 2,
    en: {
      categories: ["Development", "AI agents"],
      title: "GlobalNet News Digest — AI News Editor",
      summary:
        "A system that collects telecom news from 343 sources every day, picks what matters to the company, drafts posts and sends them to editors for approval in Telegram.",
      role: "End-to-end development: collection, AI selection, approval bot",
      contribution: {
        role: "End-to-end development: collection, AI selection, approval bot",
        tags: ["Python", "Scraping", "AI scoring", "Telegram bot"],
        scope: [
          "News collection from Telegram channels without an account, RSS, media pages and 500+ client websites — with automatic news-section discovery",
          "A multi-stage scoring funnel: rules → fast AI → detailed analysis on the 6 criteria from the spec",
          "An approval bot for three editors: buttons, editing, shared card state, delivery schedule",
          "Learning from editors' decisions and from the channel's archive of published posts",
          "Reading closed industry chats through a regular Telegram user account",
        ],
        team: [
          "The channel's chief editor makes publishing decisions and gives feedback on selection",
          "Marketing provided the client base (~500 companies) and the source list",
        ],
        constraints: [
          "Thousands of news items a week — running each through a strong model is too expensive",
          "The same story arrives from a dozen sources",
          "Rumors and insider info must not be published as fact",
          "Telegram only lets a bot delete its own messages within 48 hours",
        ],
        decision:
          "Built a funnel where the expensive AI only sees what passed the free rules and a cheap batch score. On a test day that meant 8 detailed analyses instead of 173 — about 90% less text sent to the model.",
        production:
          "~5,500 lines of Python, 343 sources, an SQLite database that remembers links for 120 days, 6 scoring criteria, an Excel report that breaks every score down into its components.",
        result:
          "In its first 10 days the system collected 9,785 news items; 4,650 new ones went through the funnel, about 140 were sent for approval, and 26 were published in the channel. The project is packaged for deployment on the company server.",
      },
      tools: ["Python", "aiogram", "Telethon", "DeepSeek API", "BeautifulSoup", "SQLite", "openpyxl", "Claude Code"],
      task: "The private GlobalNet News Digest channel was run by hand: someone had to scan dozens of channels and sites every morning, pick market, competitor, regulation and client news, and format posts. The spec called for a system that does this itself — collects news, scores it against the company's criteria, prepares a draft — and leaves a human only the \"publish or not\" decision.",
      dev: {
        stack: ["Python", "aiogram", "Telethon", "DeepSeek API", "BeautifulSoup", "RSS", "SQLite", "TF-IDF", "openpyxl"],
        metrics: [
          { value: "343", label: "sources" },
          { value: "4,650", label: "news items through the funnel in 10 days" },
          { value: "~90%", label: "token savings from the funnel" },
          { value: "26", label: "posts published" },
        ],
        ideas: [
          {
            title: "The channel is the benchmark",
            text: "Everything already published is an example of what the company finds interesting. Each item is compared with 1,199 archived posts, and the AI reads the whole channel once to write an editorial policy that goes into every request.",
          },
          {
            title: "Learning from buttons",
            text: "\"Not interesting\" doesn't just hide a card: similar items, their category, source and headline words get a penalty, while publishing gives a bonus. Within a couple of weeks selection adapts to the editor's taste without a single code change.",
          },
          {
            title: "A duplicate is a signal",
            text: "When several sources cover the same event, the item isn't re-analyzed — it gets a \"hotness\" bonus instead. Duplicates cost no tokens and help surface what matters.",
          },
          {
            title: "Urgent goes out immediately",
            text: "Items mentioning GlobalNet or DATAIX get a red label and, during working hours, arrive instantly instead of waiting for the morning batch. Rumors are flagged as unconfirmed.",
          },
        ],
      },
      resultCaptions: [
        "The selection funnel with real numbers from the first 10 days",
        "A draft for approval: the post, the AI comment with scores on 6 criteria, and decision buttons (the comment is never published)",
      ],
    },
  },
  {
    slug: "ai-designer-bot",
    featured: true,
    title: "ИИ-дизайнер в Telegram",
    categories: ["Разработка", "ИИ-агенты"],
    companyId: "globalnet",
    summary:
      "Персональный ИИ-агент: следит за рабочим чатом маркетинга, сам находит задачи на дизайн, делает макеты в фирменном стиле GlobalNet, анимирует их и присылает в Telegram, где правки можно дать текстом или голосом.",
    year: "2026",
    role: "Идея, архитектура и разработка агента",
    contribution: {
      role: "Идея, архитектура и разработка агента",
      tags: ["Python", "Claude", "Генерация изображений", "Telegram"],
      scope: [
        "Мониторинг рабочих чатов через пользовательский аккаунт (Telethon) и распознавание ТЗ с помощью Claude",
        "Несколько «движков» макета: HTML/CSS с рендером в PNG, генерация изображений, Figma, анимация через HyperFrames и Remotion, SVG для печати",
        "Бренд-гайд для агента, собранный из Figma-файла GlobalNet: цвета, Gotham, правила логотипа",
        "Цикл правок: реплай, голосовые (распознавание речи), референсы; ответы голосом через локальный синтез речи",
        "Обучение на кнопках «Принять / Отклонить» и память уроков",
        "Помощник по личной переписке: белый список контактов и подтверждение каждого ответа",
      ],
      constraints: [
        "В рабочие чаты агент не должен писать ничего — только читать",
        "Работа через подписки Claude и ChatGPT, платный API — только запасной вариант",
        "Строгие правила бренда: один логотип на макет, только фирменные цвета логотипа, форматы под Telegram и сайт",
      ],
      decision:
        "Разделил «мозг» и «руки»: Claude понимает задачу и решает, каким инструментом её делать, а отдельные модули рендерят результат. Поэтому один агент делает и статичный пост, и анимацию, и печатный SVG, а правила бренда проверяются одинаково для всех форматов.",
      production:
        "~8 000 строк Python. За первую неделю — 13 задач из рабочего чата, 21 задача по моему запросу и 8 анимаций: приглашения, мерч, инфографика, бейджи.",
      result:
        "Через агента сделаны и приняты варианты приглашения на закрытый вечер GlobalNet 2026, серии принтов для мерча и квартальная инфографика по DDoS-атакам. Финальные решения и правки остаются за мной как арт-директором.",
    },
    tools: ["Python", "Telethon", "Claude Code", "OpenAI Images", "Playwright", "Figma API", "HyperFrames", "Remotion", "ffmpeg"],
    task: "Значительная часть задач дизайнеру — однотипные посты, приглашения, баннеры и мерч, которые приходят в общий рабочий чат и теряются в переписке. Я хотел агента, который работает как младший дизайнер в команде: сам замечает задачу, делает первую версию в фирменном стиле и доводит её по моим правкам, а я остаюсь арт-директором.",
    dev: {
      stack: ["Python", "Telethon", "Claude (Claude Code)", "OpenAI Images", "Playwright", "Figma API", "HyperFrames", "Remotion", "ffmpeg", "TTS / STT"],
      metrics: [
        { value: "8 000+", label: "строк Python" },
        { value: "5", label: "движков: HTML, изображения, Figma, анимация, SVG" },
        { value: "40+", label: "задач за первую неделю" },
        { value: "0", label: "сообщений в рабочие чаты" },
      ],
      ideas: [
        {
          title: "«Мозг» отдельно от «рук»",
          text: "Claude читает задачу и выбирает инструмент, а рендер — отдельные модули. Добавить новый формат (например, печатный SVG или GIF до 10 МБ для Telegram) — значит добавить модуль, не трогая логику понимания задач.",
        },
        {
          title: "Учится на отказах",
          text: "Под каждым макетом — «Принять / Отклонить» с необязательной причиной. Причины складываются в память уроков, которую агент читает перед следующей задачей, — одна и та же ошибка не повторяется.",
        },
        {
          title: "Подписка вместо API",
          text: "Агент работает через Claude Code на Mac в рамках подписки и переключается на платный API только при сбое. Изображения — так же через подписку с запасным вариантом. Стоимость каждой задачи почти нулевая.",
        },
        {
          title: "Безопасность по умолчанию",
          text: "В рабочие чаты — только чтение. В личке — только люди из белого списка, каждый ответ — черновик с кнопкой «Отправить», а всё про деньги, сроки и встречи агент сначала спрашивает у меня.",
        },
      ],
    },
    results: [
      {
        caption: "Как работает агент: от сообщения в рабочем чате до принятого макета",
        ratio: "wide",
        src: "/work/dev/ai-designer/flow.jpg",
      },
      {
        caption: "Работа с агентом в Telegram: найденная задача, макет, правка голосом (макет по реальному сценарию)",
        ratio: "portrait",
        src: "/work/dev/ai-designer/chat.jpg",
      },
      {
        caption: "Анимированная версия приглашения, собранная агентом",
        ratio: "square",
        video: "/work/dev/ai-designer/invite-anim.mp4",
      },
      {
        caption: "Приглашения на закрытый вечер GlobalNet 2026 — принятые варианты",
        ratio: "square",
        src: "/work/dev/ai-designer/invites.jpg",
      },
      {
        caption: "Серия принтов для мерча на мокапах футболок",
        ratio: "wide",
        src: "/work/dev/ai-designer/merch.jpg",
      },
      {
        caption: "Иллюстрации для принтов в фирменной гамме",
        ratio: "wide",
        src: "/work/dev/ai-designer/prints.jpg",
      },
      {
        caption: "Инфографика: статистика отражённых DDoS-атак за квартал (3520×1300 для сайта)",
        ratio: "wide",
        src: "/work/dev/ai-designer/ddos-infographic.jpg",
      },
    ],
    tone: 1,
    en: {
      categories: ["Development", "AI agents"],
      title: "AI Designer in Telegram",
      summary:
        "A personal AI agent that watches the marketing team's work chat, spots design tasks on its own, builds on-brand GlobalNet layouts, animates them and sends them to Telegram, where revisions can be given by text or voice.",
      role: "Idea, architecture and development of the agent",
      contribution: {
        role: "Idea, architecture and development of the agent",
        tags: ["Python", "Claude", "Image generation", "Telegram"],
        scope: [
          "Watching work chats through a user account (Telethon) and recognizing briefs with Claude",
          "Several layout \"engines\": HTML/CSS rendered to PNG, image generation, Figma, animation via HyperFrames and Remotion, print-ready SVG",
          "A brand guide for the agent, assembled from GlobalNet's Figma file: colors, Gotham, logo rules",
          "A revision loop: replies, voice notes (speech recognition), references; voice answers via local speech synthesis",
          "Learning from Accept / Reject buttons and a lessons memory",
          "A personal-messages helper: an allowlist of contacts and confirmation of every reply",
        ],
        constraints: [
          "The agent must never post anything in work chats — read only",
          "Run on Claude and ChatGPT subscriptions; the paid API is only a fallback",
          "Strict brand rules: one logo per layout, only the logo's brand colors, formats for Telegram and the website",
        ],
        decision:
          "Split the \"brain\" from the \"hands\": Claude understands the task and picks the tool, while separate modules render the result. One agent produces a static post, an animation or a print SVG, and brand rules are checked the same way for every format.",
        production:
          "~8,000 lines of Python. In the first week: 13 tasks from the work chat, 21 tasks on my request and 8 animations — invitations, merch, infographics, badges.",
        result:
          "The agent produced accepted versions of the GlobalNet 2026 private-evening invitation, merch print series and a quarterly DDoS-attack infographic. Final calls and revisions stay with me as art director.",
      },
      tools: ["Python", "Telethon", "Claude Code", "OpenAI Images", "Playwright", "Figma API", "HyperFrames", "Remotion", "ffmpeg"],
      task: "A large share of a designer's tasks are routine posts, invitations, banners and merch that arrive in a shared work chat and get lost in the conversation. I wanted an agent that works like a junior designer on the team: notices the task itself, makes an on-brand first version and refines it based on my notes, while I stay the art director.",
      dev: {
        stack: ["Python", "Telethon", "Claude (Claude Code)", "OpenAI Images", "Playwright", "Figma API", "HyperFrames", "Remotion", "ffmpeg", "TTS / STT"],
        metrics: [
          { value: "8,000+", label: "lines of Python" },
          { value: "5", label: "engines: HTML, images, Figma, animation, SVG" },
          { value: "40+", label: "tasks in the first week" },
          { value: "0", label: "messages posted to work chats" },
        ],
        ideas: [
          {
            title: "The brain is separate from the hands",
            text: "Claude reads the task and chooses the tool; rendering lives in separate modules. Adding a new format (say, print SVG or a Telegram GIF under 10 MB) means adding a module without touching task understanding.",
          },
          {
            title: "It learns from rejections",
            text: "Every layout has Accept / Reject with an optional reason. Reasons go into a lessons memory the agent reads before the next task, so the same mistake doesn't happen twice.",
          },
          {
            title: "Subscription instead of API",
            text: "The agent runs through Claude Code on the Mac within a subscription and switches to the paid API only on failure. Images work the same way. The marginal cost per task is close to zero.",
          },
          {
            title: "Safe by default",
            text: "Work chats are read-only. In private messages, only allowlisted people, every reply is a draft with a Send button, and anything about money, deadlines or meetings is checked with me first.",
          },
        ],
      },
      resultCaptions: [
        "How the agent works: from a work-chat message to an accepted layout",
        "Working with the agent in Telegram: a detected task, a layout, a voice revision (mockup of a real scenario)",
        "Animated version of the invitation built by the agent",
        "Invitations to the GlobalNet 2026 private evening — accepted versions",
        "Merch print series on T-shirt mockups",
        "Illustrations for prints in the brand palette",
        "Infographic: quarterly statistics of mitigated DDoS attacks (3520×1300 for the website)",
      ],
    },
  },
  {
    slug: "peering-calculator",
    featured: true,
    title: "GlobalNet — калькулятор выгоды пиринга",
    categories: ["Разработка", "Веб-сервис"],
    companyId: "globalnet",
    summary:
      "Веб-сервис для сайта gblnet.ru: клиент вводит номер своей автономной системы, а сервис по открытым данным анализирует его сеть и показывает, какую часть трафика выгодно перевести на GlobalNet и сколько это сэкономит.",
    year: "2026",
    role: "Разработка: сбор данных, расчётная модель, интерфейс, встраивание в сайт",
    contribution: {
      role: "Разработка: сбор данных, расчётная модель, интерфейс, встраивание в сайт",
      tags: ["Python", "BGP-данные", "Расчётная модель", "Frontend"],
      scope: [
        "Сбор данных из 8 открытых источников (RIPEstat, PeeringDB, CAIDA и др.) с кэшем и повторными попытками",
        "Профиль сети клиента по ASN: аплинки, пиры, точки обмена трафиком, площадки",
        "Расчётная модель: маршруты до 22 крупных ресурсов, доли трафика, порт, полоса, экономия",
        "Встраиваемый блок в стиле gblnet.ru в двух вариантах и страница-пример",
        "Админка: заявки, ручные отметки инженеров, тарифы, профили трафика, массовая проверка ASN",
      ],
      team: [
        "Отдел продаж сформулировал ТЗ и логику выгоды для клиента",
      ],
      constraints: [
        "Только бесплатные источники без ключей; часть сервисов запрещает автоматический сбор",
        "Исходящих маршрутов клиента в открытых данных нет — их нужно оценивать по графу связей",
        "Сервис должен работать без внешних библиотек и запускаться у коллег на Mac и Windows",
      ],
      decision:
        "Показываю не одно «магическое» число, а вилку от нижней до верхней границы и объясняю клиенту, что уточнить, чтобы она сузилась. Клиент может поправить найденный профиль своей сети, а ручные отметки инженеров в админке всегда важнее открытых данных.",
      production:
        "~2 900 строк Python и JavaScript, 8 источников данных, подробный калькулятор на 4 шага и короткий блок, PDF-отчёт, админка и тесты расчёта.",
      result:
        "Сервис готов к встраиванию в gblnet.ru. Для показа руководству сделан запуск по временной ссылке — открывается полноценная страница сайта с блоком внутри. Подготовлена инструкция по развёртыванию.",
    },
    tools: ["Python", "JavaScript", "HTML/CSS", "RIPEstat API", "PeeringDB API", "CAIDA AS Rank", "Claude Code"],
    task: "Отделу продаж нужен был инструмент для сайта, который превращает технический вопрос «зачем нам пиринг» в понятные цифры для конкретного клиента. Сложность в том, что у компании нет доступа к трафику клиента: всё нужно восстановить по открытым данным о маршрутизации и честно показать, где оценка неточная.",
    dev: {
      stack: ["Python (stdlib)", "JavaScript", "HTML/CSS", "RIPEstat", "PeeringDB", "CAIDA AS Rank", "RouteViews", "IRR"],
      metrics: [
        { value: "8", label: "открытых источников данных" },
        { value: "22", label: "крупных ресурса в модели маршрутов" },
        { value: "4", label: "шага до готового расчёта" },
        { value: "0", label: "внешних зависимостей" },
      ],
      ideas: [
        {
          title: "Вилка вместо обещания",
          text: "Неизвестные подключения идут в расчёт с весом 50% и только в верхнюю границу, итог ограничен 60%. Клиент видит диапазон и подсказку, что указать, чтобы он сузился, — это честнее и вызывает больше доверия у инженеров.",
        },
        {
          title: "Клиент правит свою сеть",
          text: "На втором шаге можно удалить неверного аплинка, сменить роль соседа, добавить точку обмена и указать, как подключён крупный контент. Открытые данные — только черновик, финальную картину подтверждает сам клиент.",
        },
        {
          title: "Ноль зависимостей",
          text: "Только стандартная библиотека Python и дисковый кэш ответов. Запуск двойным кликом на Mac и Windows, раздача коллегам по локальной сети или по временной публичной ссылке.",
        },
        {
          title: "Два формата под сайт",
          text: "Короткий блок встаёт в серую секцию страницы услуги вместо формы, подробный — отдельная страница по кнопке «Рассчитать выгоду». Из короткого в подробный переходишь с уже введёнными данными.",
        },
      ],
    },
    results: [
      {
        caption: "Как считается выгода: от номера AS до экономии в рублях",
        ratio: "wide",
        src: "/work/dev/peering-calculator/flow.jpg",
      },
      {
        caption: "Короткий блок на странице услуги: «мы нашли вашу сеть — всё верно?»",
        ratio: "wide",
        src: "/work/dev/peering-calculator/short-found.jpg",
      },
      {
        caption: "Короткий блок: итог в цифрах и заявка менеджеру",
        ratio: "wide",
        src: "/work/dev/peering-calculator/short-block.jpg",
      },
      {
        caption: "Подробный калькулятор на странице сайта",
        ratio: "wide",
        src: "/work/dev/peering-calculator/calc-page.jpg",
      },
      {
        caption: "Шаг «Ваша сеть»: найденные аплинки, пиры и точки обмена можно поправить",
        ratio: "wide",
        src: "/work/dev/peering-calculator/network-step.jpg",
      },
      {
        caption: "Отчёт: доля переносимого трафика, порт, полоса и экономия",
        ratio: "wide",
        src: "/work/dev/peering-calculator/report.jpg",
      },
      {
        caption: "Сравнение маршрутов до крупных ресурсов «сейчас / через GlobalNet»",
        ratio: "wide",
        src: "/work/dev/peering-calculator/routes.jpg",
      },
    ],
    tone: 3,
    en: {
      categories: ["Development", "Web service"],
      title: "GlobalNet — Peering Benefit Calculator",
      summary:
        "A web service for gblnet.ru: a client enters their autonomous system number, and the service analyzes their network from open data and shows how much traffic is worth moving to GlobalNet and how much that saves.",
      role: "Development: data collection, calculation model, UI, website embedding",
      contribution: {
        role: "Development: data collection, calculation model, UI, website embedding",
        tags: ["Python", "BGP data", "Calculation model", "Frontend"],
        scope: [
          "Data collection from 8 open sources (RIPEstat, PeeringDB, CAIDA and others) with caching and retries",
          "A client network profile by ASN: upstreams, peers, exchange points, facilities",
          "A calculation model: routes to 22 major content networks, traffic shares, port, bandwidth, savings",
          "An embeddable block in the gblnet.ru style in two variants, plus a demo page",
          "An admin panel: leads, engineers' manual overrides, tariffs, traffic profiles, bulk ASN checks",
        ],
        team: [
          "The sales team wrote the spec and the client-benefit logic",
        ],
        constraints: [
          "Only free sources without API keys; some services forbid automated collection",
          "A client's outbound routes aren't in open data — they have to be estimated from the relationship graph",
          "The service had to run without third-party libraries and launch on colleagues' Macs and Windows PCs",
        ],
        decision:
          "Instead of one \"magic\" number, I show a range from lower to upper bound and tell the client what to clarify to narrow it. The client can correct the detected network profile, and engineers' manual overrides in the admin panel always beat open data.",
        production:
          "~2,900 lines of Python and JavaScript, 8 data sources, a 4-step detailed calculator and a short block, a PDF report, an admin panel and calculation tests.",
        result:
          "The service is ready to embed on gblnet.ru. For management review it can be shared via a temporary link that opens a full website page with the block inside. Deployment instructions are written.",
      },
      tools: ["Python", "JavaScript", "HTML/CSS", "RIPEstat API", "PeeringDB API", "CAIDA AS Rank", "Claude Code"],
      task: "Sales needed a website tool that turns the technical question \"why do we need peering\" into clear numbers for a specific client. The catch: the company has no access to the client's traffic, so everything has to be reconstructed from open routing data — and the tool has to be honest about where the estimate is uncertain.",
      dev: {
        stack: ["Python (stdlib)", "JavaScript", "HTML/CSS", "RIPEstat", "PeeringDB", "CAIDA AS Rank", "RouteViews", "IRR"],
        metrics: [
          { value: "8", label: "open data sources" },
          { value: "22", label: "major networks in the route model" },
          { value: "4", label: "steps to a finished estimate" },
          { value: "0", label: "third-party dependencies" },
        ],
        ideas: [
          {
            title: "A range, not a promise",
            text: "Unknown connections count at 50% weight and only toward the upper bound; the total is capped at 60%. The client sees a range and a hint on what to specify to narrow it — more honest, and more convincing to engineers.",
          },
          {
            title: "The client corrects their own network",
            text: "In step two you can remove a wrong upstream, change a neighbor's role, add an exchange point and say how major content is delivered. Open data is only a draft; the client confirms the final picture.",
          },
          {
            title: "Zero dependencies",
            text: "Only the Python standard library and an on-disk response cache. Double-click launch on Mac and Windows, sharing over the local network or via a temporary public link.",
          },
          {
            title: "Two formats for the website",
            text: "The short block replaces the form in a service page's grey section; the detailed one is a separate page behind a \"Calculate savings\" button. Moving from short to detailed carries the entered data over.",
          },
        ],
      },
      resultCaptions: [
        "How the benefit is calculated: from an AS number to savings in rubles",
        "Short block on a service page: \"We found your network — is this right?\"",
        "Short block: the result in numbers and a request to a manager",
        "The detailed calculator on a website page",
        "\"Your network\" step: detected upstreams, peers and exchange points can be corrected",
        "Report: share of movable traffic, port, bandwidth and savings",
        "Route comparison to major networks, \"now / via GlobalNet\"",
      ],
    },
  },
  {
    slug: "pet-care-app",
    featured: true,
    title: "«Питомцы» — мобильное приложение",
    categories: ["Разработка", "Мобильное приложение"],
    summary:
      "Приложение для ухода за питомцами на Android, iPhone и в браузере: здоровье, события с напоминаниями, препараты, документы, питание, вес и совместный доступ для семьи — с живыми анимированными персонажами.",
    year: "2026",
    role: "Дизайн и разработка под заказ: от экранов до APK",
    contribution: {
      role: "Дизайн и разработка под заказ: от экранов до APK",
      tags: ["React Native", "Expo", "Supabase", "Анимация"],
      scope: [
        "Дизайн всех экранов и UI-кит поверх Ant Design под собственный стиль приложения",
        "Приложение на Expo / React Native: 5 вкладок, карточка питомца с 5 разделами, формы, календарь, поиск",
        "Два режима данных: локально на телефоне и облако Supabase с правами доступа на стороне базы и журналом изменений",
        "Анимированные персонажи, нарисованные кодом (SVG + Reanimated): дышат, моргают, реагируют на касания",
        "Сборка APK и обновления «по воздуху» без переустановки, запуск в один клик на Mac и Windows",
      ],
      team: [
        "Заказчик формулировал требования и принимал работу",
      ],
      constraints: [
        "Ant Design по требованию заказчика — но приложение не должно выглядеть шаблонно",
        "Нет Android-устройства: проверка через веб-версию и iPhone",
        "Данные заказчика не должны теряться при обновлениях",
      ],
      decision:
        "Сделал один код на три платформы и описал хранилище данных как интерфейс с двумя реализациями — локальной и Supabase. Приложение работает сразу, без сервера, а облако подключается одним скриптом, когда понадобится общий доступ между телефонами.",
      production:
        "~12 700 строк TypeScript, 25+ экранов, 4 анимированных персонажа, схема базы с ролями «владелец / редактор / просмотр», сборка APK и OTA-обновления.",
      result:
        "Приложение собирается в APK для заказчика, а правки дизайна и логики доставляются обновлением прямо в установленное приложение — без переустановки и потери данных.",
    },
    tools: ["TypeScript", "React Native", "Expo", "Reanimated", "Ant Design", "Supabase", "Claude Code"],
    task: "Заказчику нужно было приложение, где вся жизнь питомца — прививки, приёмы у врача, курсы препаратов, документы, кормление и вес — хранится в одном месте и доступна всей семье. Требования: Android, компоненты Ant Design и при этом «стильно, современно, по-доброму», с анимациями и переходами.",
    dev: {
      stack: ["TypeScript", "React Native", "Expo Router", "Reanimated", "react-native-svg", "Ant Design RN", "Zustand", "Supabase (Postgres, RLS)", "EAS Build / Updates"],
      metrics: [
        { value: "12 700", label: "строк TypeScript" },
        { value: "3", label: "платформы из одного кода" },
        { value: "25+", label: "экранов" },
        { value: "4", label: "живых персонажа" },
      ],
      ideas: [
        {
          title: "Персонажи, нарисованные кодом",
          text: "Котики и попугаи собраны из SVG-«кистей» — пушистая кромка, шерстинки, перья — и анимированы через Reanimated. У каждого свой характер: один медленно моргает, другой пугается от касания. При системной настройке «Уменьшить движение» анимации отключаются.",
        },
        {
          title: "Сервер — по желанию",
          text: "Хранилище описано как интерфейс с локальной реализацией и реализацией на Supabase. Приложение можно отдать заказчику сразу, а облако с синхронизацией между телефонами включить потом, ничего не переписывая.",
        },
        {
          title: "Права — на стороне базы",
          text: "Доступ «владелец / редактор / просмотр» проверяется в Postgres через Row Level Security, из нескольких групп берётся высший уровень, все изменения пишутся в журнал. Клиент не может обойти права, даже если его взломают.",
        },
        {
          title: "Обновления без переустановки",
          text: "Экраны, тексты и логика доезжают до заказчика OTA-обновлением. Подпись APK и имя пакета не меняются, поэтому новая сборка ставится поверх старой с сохранением данных.",
        },
      ],
    },
    results: [
      {
        caption: "Демо: вход, главная с живыми персонажами, карточка питомца, календарь",
        ratio: "tall",
        video: "/work/dev/pet-app/demo.mp4",
      },
      {
        caption: "Вход с демо-аккаунтами, главная и список питомцев",
        ratio: "wide",
        src: "/work/dev/pet-app/screens-1.jpg",
      },
      {
        caption: "Карточка питомца: обзор и медицинская история, календарь событий",
        ratio: "wide",
        src: "/work/dev/pet-app/screens-2.jpg",
      },
      {
        caption: "История с фильтрами, профиль и экран знакомства с персонажами",
        ratio: "wide",
        src: "/work/dev/pet-app/screens-3.jpg",
      },
    ],
    tone: 0,
    en: {
      categories: ["Development", "Mobile app"],
      title: "\"Pets\" — Mobile App",
      summary:
        "A pet-care app for Android, iPhone and the web: health, events with reminders, medications, documents, feeding, weight and shared family access — with lively animated characters.",
      role: "Design and development for a client: from screens to APK",
      contribution: {
        role: "Design and development for a client: from screens to APK",
        tags: ["React Native", "Expo", "Supabase", "Animation"],
        scope: [
          "Designed every screen and a UI kit on top of Ant Design in the app's own style",
          "The app in Expo / React Native: 5 tabs, a pet profile with 5 sections, forms, a calendar, search",
          "Two data modes: local on the phone and a Supabase cloud with database-side access rules and a change log",
          "Animated characters drawn in code (SVG + Reanimated): they breathe, blink and react to touch",
          "APK builds and over-the-air updates without reinstalling, one-click launch on Mac and Windows",
        ],
        team: [
          "The client set the requirements and accepted the work",
        ],
        constraints: [
          "Ant Design was a client requirement — but the app must not look templated",
          "No Android device: testing via the web build and an iPhone",
          "The client's data must survive updates",
        ],
        decision:
          "One codebase for three platforms, with data storage defined as an interface with two implementations — local and Supabase. The app works right away with no server, and the cloud is switched on with one script when sharing between phones is needed.",
        production:
          "~12,700 lines of TypeScript, 25+ screens, 4 animated characters, a database schema with owner / editor / viewer roles, APK builds and OTA updates.",
        result:
          "The app builds into an APK for the client, and design and logic changes ship as updates straight into the installed app — no reinstall, no data loss.",
      },
      tools: ["TypeScript", "React Native", "Expo", "Reanimated", "Ant Design", "Supabase", "Claude Code"],
      task: "The client wanted an app where a pet's whole life — vaccinations, vet visits, medication courses, documents, feeding and weight — lives in one place and is shared with the family. Requirements: Android, Ant Design components, and yet \"stylish, modern and kind\", with animations and transitions.",
      dev: {
        stack: ["TypeScript", "React Native", "Expo Router", "Reanimated", "react-native-svg", "Ant Design RN", "Zustand", "Supabase (Postgres, RLS)", "EAS Build / Updates"],
        metrics: [
          { value: "12,700", label: "lines of TypeScript" },
          { value: "3", label: "platforms from one codebase" },
          { value: "25+", label: "screens" },
          { value: "4", label: "living characters" },
        ],
        ideas: [
          {
            title: "Characters drawn in code",
            text: "Cats and parrots are built from SVG \"brushes\" — fluffy edges, fur strands, feathers — and animated with Reanimated. Each has a personality: one blinks slowly, another startles at a touch. With the system Reduce Motion setting, animations turn off.",
          },
          {
            title: "A server only if you want one",
            text: "Storage is an interface with a local and a Supabase implementation. The app can go to the client immediately, and cross-phone cloud sync can be switched on later without rewriting anything.",
          },
          {
            title: "Permissions enforced by the database",
            text: "Owner / editor / viewer access is checked in Postgres via Row Level Security, the highest level across groups wins, and every change is logged. A compromised client can't bypass the rules.",
          },
          {
            title: "Updates without reinstalling",
            text: "Screens, copy and logic reach the client as OTA updates. The APK signature and package name never change, so a new build installs over the old one and keeps the data.",
          },
        ],
      },
      resultCaptions: [
        "Demo: sign-in, a home screen with living characters, a pet profile, the calendar",
        "Sign-in with demo accounts, home and the pet list",
        "Pet profile: overview and medical history, the events calendar",
        "History with filters, profile and the meet-the-characters screen",
      ],
    },
  },
  {
    slug: "gnm-ix-landing",
    title: "GNM-IX — лендинг, собранный в коде",
    categories: ["Разработка", "Вёрстка"],
    companyId: "gnm",
    summary:
      "Лендинг пиринговой сети GNM-IX, который я не только спроектировал, но и сам собрал в коде с помощью Claude Code: адаптивная вёрстка, анимации, интерактивные блоки — одна HTML-страница без внешних зависимостей.",
    year: "2026",
    role: "Дизайн, структура и вёрстка",
    contribution: {
      role: "Дизайн, структура и вёрстка",
      tags: ["HTML/CSS", "JavaScript", "Адаптив", "Claude Code"],
      scope: [
        "Структура и тексты страницы: преимущества, география, сегмент в Сингапуре, услуги, отзывы",
        "Вёрстка адаптивной страницы с анимациями появления и интерактивными элементами",
        "Постановка задач Claude Code, проверка и доводка деталей до уровня макета",
      ],
      constraints: [
        "Страница должна открываться одним файлом — без сборки и сервера",
        "Фирменный стиль GNM: шрифт, цвета, графика",
      ],
      decision:
        "Собрал страницу как самодостаточный HTML-файл со встроенными шрифтами и графикой: его можно отправить кому угодно и открыть двойным кликом — обсуждать живую страницу, а не картинку.",
      production: "1 адаптивная страница, 10 смысловых блоков, версии для desktop и мобильных.",
      result:
        "Рабочий прототип сайта, который можно показывать руководству и подрядчикам как живую страницу вместо статичных макетов.",
    },
    tools: ["Claude Code", "HTML", "CSS", "JavaScript", "Figma"],
    task: "Обычно сайт проходит путь «макет в Figma → передача подрядчику → долгая вёрстка и правки». Для GNM-IX я хотел сократить этот путь: спроектировать и сразу собрать страницу самому, чтобы обсуждать уже работающий результат.",
    dev: {
      stack: ["HTML", "CSS", "JavaScript", "Claude Code"],
      metrics: [
        { value: "1", label: "HTML-файл без зависимостей" },
        { value: "10", label: "смысловых блоков" },
        { value: "2", label: "адаптива: desktop и mobile" },
      ],
      ideas: [
        {
          title: "Макет сразу в коде",
          text: "Вместо статичного макета и передачи в разработку — сразу работающая страница с анимациями и адаптивом. Правки вношу сам и показываю результат в тот же день.",
        },
        {
          title: "Один файл — ноль проблем",
          text: "Шрифты и графика встроены прямо в страницу, поэтому её можно переслать в мессенджере и открыть на любом компьютере без сервера и сборки.",
        },
      ],
    },
    results: [
      {
        caption: "Первый экран лендинга GNM-IX",
        ratio: "wide",
        src: "/work/dev/gnm-ix-site/hero.jpg",
      },
      {
        caption: "Мобильная версия",
        ratio: "tall",
        src: "/work/dev/gnm-ix-site/mobile.jpg",
      },
      {
        caption: "Блоки «Общая информация» и «География»",
        ratio: "wide",
        src: "/work/dev/gnm-ix-site/sections.jpg",
      },
      {
        caption: "Услуги, надёжность и преимущества",
        ratio: "wide",
        src: "/work/dev/gnm-ix-site/services.jpg",
      },
    ],
    tone: 2,
    en: {
      categories: ["Development", "Front-end"],
      title: "GNM-IX — Landing Page Built in Code",
      summary:
        "A landing page for the GNM-IX peering network that I not only designed but built myself in code with Claude Code: responsive layout, animations, interactive blocks — a single dependency-free HTML page.",
      role: "Design, structure and front-end build",
      contribution: {
        role: "Design, structure and front-end build",
        tags: ["HTML/CSS", "JavaScript", "Responsive", "Claude Code"],
        scope: [
          "Page structure and copy: advantages, geography, the Singapore segment, services, testimonials",
          "A responsive build with reveal animations and interactive elements",
          "Directing Claude Code, reviewing and polishing details to mockup quality",
        ],
        constraints: [
          "The page had to open as a single file — no build step, no server",
          "GNM brand identity: typeface, colors, graphics",
        ],
        decision:
          "Built the page as a self-contained HTML file with embedded fonts and graphics: it can be sent to anyone and opened with a double click — so people discuss a live page, not a picture.",
        production: "1 responsive page, 10 content blocks, desktop and mobile versions.",
        result:
          "A working website prototype that can be shown to management and contractors as a live page instead of static mockups.",
      },
      tools: ["Claude Code", "HTML", "CSS", "JavaScript", "Figma"],
      task: "A website usually goes \"Figma mockup → hand-off to a contractor → long build and revisions\". For GNM-IX I wanted to shorten that path: design and build the page myself right away, so the discussion starts from a working result.",
      dev: {
        stack: ["HTML", "CSS", "JavaScript", "Claude Code"],
        metrics: [
          { value: "1", label: "dependency-free HTML file" },
          { value: "10", label: "content blocks" },
          { value: "2", label: "layouts: desktop and mobile" },
        ],
        ideas: [
          {
            title: "Mockup straight in code",
            text: "Instead of a static mockup and a hand-off, a working page with animations and a responsive layout from day one. I make changes myself and show the result the same day.",
          },
          {
            title: "One file, zero friction",
            text: "Fonts and graphics are embedded in the page, so it can be sent in a messenger and opened on any computer without a server or a build.",
          },
        ],
      },
      resultCaptions: [
        "GNM-IX landing page hero",
        "Mobile version",
        "\"General information\" and \"Geography\" blocks",
        "Services, reliability and advantages",
      ],
    },
  },
  {
    slug: "night-shift-hotel",
    featured: true,
    title: "Night Shift Hotel — хоррор-игра на Godot",
    categories: ["Разработка", "Геймдев"],
    summary:
      "2D-хоррор с дедукцией про ночного администратора старого отеля: проверяешь гостей, сверяешь документы, следишь за камерами и решаешь, кого впустить, — среди людей прячутся существа, которые умеют притворяться.",
    year: "2026",
    role: "Автор игры: геймдизайн, сюжет, арт-дирекшн и разработка",
    contribution: {
      role: "Автор игры: геймдизайн, сюжет, арт-дирекшн и разработка",
      tags: ["Godot / GDScript", "Геймдизайн", "Симуляция", "Озвучка с ИИ"],
      scope: [
        "Придумал концепцию, механику улик и сюжет кампании на семь ночей с несколькими концовками",
        "Разработал игру на Godot 4 в паре с ИИ-ассистентами (Codex, Claude Code): стойка, камеры, компьютер, журнал, телефон, двери, электросеть",
        "Спроектировал живую симуляцию отеля: жильцы, пять типов существ, доверие, тревоги, служба ликвидации",
        "Собрал единую арт-концепцию и вёл генерацию графики по ней",
        "Озвучка: голос под каждого персонажа в ElevenLabs и голоса гостей через локальный синтез речи",
      ],
      constraints: [
        "Главный принцип: у игрока не должно быть 100% надёжного способа понять, кто монстр",
        "Сотни взаимосвязанных систем — любая правка может сломать другую",
        "Баланс нужно часто менять, не трогая код",
      ],
      decision:
        "Отделил «правду» симуляции от того, что видит игрок: у существ бывают приметы, у людей — похожие ложные зацепки, а улики считаются отдельным генератором случайностей, чтобы не менять исход ночи. Весь баланс вынесен в JSON, а каждую систему проверяют автотесты, которые прогоняют полные ночи без графики.",
      production:
        "~31 000 строк GDScript в 132 скриптах, 80 тестовых сценариев, 42 файла данных, 7 ночей кампании и бесконечный режим, ~480 озвученных реплик и ~150 звуков.",
      result:
        "Играбельная версия с полной кампанией, концовками и озвучкой. Игра в активной разработке и ещё не выпущена.",
    },
    tools: ["Godot 4", "GDScript", "Codex", "Claude Code", "ElevenLabs", "Python"],
    task: "Хотел сделать свою игру — не клон, а хоррор, где страх идёт от сомнения, а не от скримеров. Игрок — ночной администратор: гости стучат в дверь, у каждого документы, бронь и своя история, а часть из них — существа, которые маскируются под людей. Нужно было придумать и собрать мир, в котором каждое решение спорное, а отель живёт своей жизнью, даже когда игрок смотрит в другую сторону.",
    dev: {
      stack: ["Godot 4.5", "GDScript", "JSON-данные", "Шейдеры", "Headless-тесты", "ElevenLabs", "Chatterbox TTS", "Python-инструменты"],
      metrics: [
        { value: "31 000", label: "строк GDScript" },
        { value: "80", label: "автотестов: полные ночи, атаки, улики" },
        { value: "7", label: "ночей кампании и бесконечный режим" },
        { value: "~480", label: "озвученных реплик" },
      ],
      ideas: [
        {
          title: "Сомнение как механика",
          text: "Ни одна улика ничего не доказывает. Сухая одежда в ливень — подозрительно, но гостя могло довезти такси. Номер документа отличается от брони на одну цифру — подделка или опечатка дневной смены. С четвёртой ночи у существ появляются чужие приметы, а с пятой у людей — приметы существ.",
        },
        {
          title: "Отель живёт сам",
          text: "Заселённые гости ходят по графу секторов, раздражаются от тревог и звонков и могут уехать. Существа выбирают цели, ломают двери и копируют внешность. Электросеть греется от замков и света и может отключить камеры в самый плохой момент.",
        },
        {
          title: "Баланс без кода",
          text: "Длительность ночей, поведение существ, доверие, электрика и подсчёт очков лежат в 42 JSON-файлах. Сложность и темп меняются правкой данных, а не скриптов.",
        },
        {
          title: "Тесты для игры",
          text: "Godot запускается без графики и прогоняет полные ночи с разными стратегиями игрока: осторожно заселять, впускать всех, ничего не делать. Так правка в одной системе не ломает остальные незаметно.",
        },
      ],
    },
    results: [
      { caption: "Главное меню: отель ночью под дождём", ratio: "wide", src: "/work/dev/night-shift-hotel/menu.jpg" },
      { caption: "Стойка администратора: мониторы, журнал, телефон, ключи", ratio: "wide", src: "/work/dev/night-shift-hotel/reception.jpg" },
      { caption: "Гость у входа: впустить, отказать или проверить камеры", ratio: "wide", src: "/work/dev/night-shift-hotel/door.jpg" },
      { caption: "Видеопульт на 10 каналов со схемой отеля и управлением светом, тревогой и замками", ratio: "wide", src: "/work/dev/night-shift-hotel/cameras.jpg" },
      { caption: "Система регистрации: номера и статусы", ratio: "landscape", src: "/work/dev/night-shift-hotel/computer.jpg" },
      { caption: "База гостей: карточка и документы", ratio: "landscape", src: "/work/dev/night-shift-hotel/guest-db.jpg" },
      { caption: "Журнал наблюдений с флажками подозрений", ratio: "landscape", src: "/work/dev/night-shift-hotel/journal.jpg" },
      { caption: "Внутренний телефон: звонки в номера и вызов службы", ratio: "landscape", src: "/work/dev/night-shift-hotel/phone.jpg" },
      { caption: "Жилой коридор: дверь можно запереть на ключ", ratio: "landscape", src: "/work/dev/night-shift-hotel/corridor.jpg" },
      { caption: "Отчёт о смене в 06:00", ratio: "landscape", src: "/work/dev/night-shift-hotel/report.jpg" },
    ],
    tone: 0,
    en: {
      categories: ["Development", "Game dev"],
      title: "Night Shift Hotel — Horror Game in Godot",
      summary:
        "A 2D horror-deduction game about the night clerk of an old hotel: check guests, compare documents, watch the cameras and decide who to let in — while creatures that can pass as people hide among them.",
      role: "Game author: game design, story, art direction and development",
      contribution: {
        role: "Game author: game design, story, art direction and development",
        tags: ["Godot / GDScript", "Game design", "Simulation", "AI voice-over"],
        scope: [
          "Came up with the concept, the clue mechanics and a seven-night campaign with several endings",
          "Built the game in Godot 4 paired with AI assistants (Codex, Claude Code): the desk, cameras, computer, journal, phone, doors, power grid",
          "Designed a living hotel simulation: residents, five creature types, trust, alarms, a response unit",
          "Wrote a single art bible and directed image generation against it",
          "Voice-over: a designed ElevenLabs voice for each character and guest voices via local speech synthesis",
        ],
        constraints: [
          "Core rule: the player must never have a 100% reliable way to tell who the monster is",
          "Hundreds of interlocking systems — any change can break another",
          "Balance had to change often without touching code",
        ],
        decision:
          "Separated the simulation's \"truth\" from what the player sees: creatures have tells, people have similar false leads, and clues come from a separate random generator so they never change the night's outcome. All balance lives in JSON, and every system is covered by automated tests that play full nights without graphics.",
        production:
          "~31,000 lines of GDScript across 132 scripts, 80 test scenarios, 42 data files, a 7-night campaign plus endless mode, ~480 voiced lines and ~150 sound effects.",
        result:
          "A playable build with the full campaign, endings and voice-over. The game is in active development and not yet released.",
      },
      tools: ["Godot 4", "GDScript", "Codex", "Claude Code", "ElevenLabs", "Python"],
      task: "I wanted to make my own game — not a clone, but horror where fear comes from doubt rather than jump scares. The player is a night clerk: guests knock, each with documents, a booking and a story, and some of them are creatures disguised as people. The job was to design and build a world where every decision is debatable and the hotel keeps living even when the player looks away.",
      dev: {
        stack: ["Godot 4.5", "GDScript", "JSON data", "Shaders", "Headless tests", "ElevenLabs", "Chatterbox TTS", "Python tooling"],
        metrics: [
          { value: "31,000", label: "lines of GDScript" },
          { value: "80", label: "automated tests: full nights, attacks, clues" },
          { value: "7", label: "campaign nights plus endless mode" },
          { value: "~480", label: "voiced lines" },
        ],
        ideas: [
          {
            title: "Doubt as a mechanic",
            text: "No clue proves anything. Dry clothes in a downpour look suspicious, but a taxi might have dropped the guest off. A document number one digit off the booking — a forgery or a day-shift typo. From night four creatures borrow other tells, and from night five people sometimes show creature tells.",
          },
          {
            title: "The hotel lives on its own",
            text: "Checked-in guests move around a graph of sectors, get annoyed by alarms and calls, and may leave. Creatures pick targets, break doors and copy appearances. The power grid heats up from locks and lights and can knock out the cameras at the worst moment.",
          },
          {
            title: "Balance without code",
            text: "Night length, creature behavior, trust, power and scoring live in 42 JSON files. Difficulty and pacing change by editing data, not scripts.",
          },
          {
            title: "Tests for a game",
            text: "Godot runs headless and plays full nights with different player strategies: careful check-ins, letting everyone in, doing nothing. A change in one system can't silently break the others.",
          },
        ],
      },
      resultCaptions: [
        "Main menu: the hotel at night in the rain",
        "The clerk's desk: monitors, journal, phone, keys",
        "A guest at the entrance: let in, refuse or check the cameras",
        "A 10-channel video console with a hotel map and light, alarm and lock controls",
        "Registration system: rooms and statuses",
        "Guest database: a card and documents",
        "Observation journal with suspicion flags",
        "Internal phone: calling rooms and the response unit",
        "Residential corridor: the door can be locked",
        "The 06:00 shift report",
      ],
    },
  },
  {
    slug: "globalnet-presentations",
    title: "GlobalNet — презентации",
    categories: ["Дизайн презентаций"],
    companyId: "globalnet",
    summary:
      "Презентации сервисов GlobalNet — DDoS-защита, CDN, DATAIX и обзор компании, — которые одинаково работают и на встрече с клиентом, и как самостоятельный PDF.",
    year: "2025 — 2026",
    role: "Дизайн слайдов",
    contribution: {
      role: "Дизайн слайдов",
      tags: ["Дизайн слайдов", "Контент"],
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
      categories: ["Presentation Design"],
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
    categories: ["Веб-дизайн"],
    companyId: "globalnet",
    summary:
      "Экраны сайта GlobalNet, спроектированные так, чтобы заявка на подключение к DATAIX оформлялась в несколько понятных шагов, а не терялась в интерфейсе.",
    year: "2023 — н. в.",
    role: "Дизайн интерфейса",
    contribution: {
      role: "Дизайн интерфейса",
      tags: ["UI-дизайн", "Веб", "Формы"],
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
      categories: ["Web Design"],
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
    categories: ["Маркетинг"],
    companyId: "globalnet",
    summary:
      "Рекламные и промо-материалы GlobalNet, часть которых команда переиспользует как базу для новых кампаний, а не только под конкретное мероприятие.",
    year: "2023 — н. в.",
    role: "Дизайн рекламных материалов",
    contribution: {
      role: "Дизайн рекламных материалов",
      tags: ["Дизайн рекламы", "Соцсети", "Флаеры"],
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
      categories: ["Marketing"],
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
    categories: ["Полиграфия"],
    companyId: "globalnet",
    summary:
      "Мерч GlobalNet и DATAIX для сотрудников, клиентов и мероприятий — раскупается на стендах быстрее прочих промо-материалов.",
    year: "2023 — н. в.",
    role: "Дизайн мерча",
    contribution: {
      role: "Дизайн мерча",
      tags: ["Дизайн мерча", "Продакшн"],
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
      categories: ["Print"],
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
    categories: ["Моушн"],
    companyId: "globalnet",
    summary:
      "Видеоконтент GlobalNet — от годового отчёта для инвесторов до технических роликов и записей мероприятий.",
    year: "2023 — н. в.",
    role: "Видео и моушн",
    contribution: {
      role: "Видео и моушн",
      tags: ["Видео", "Моушн", "Монтаж"],
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
      categories: ["Motion"],
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
    categories: ["Продуктовый дизайн"],
    summary: "Защита креативной части проекта «Juzzle». Институт бизнеса и дизайна, 16.05.2023.",
    year: "2023",
    role: "Автор проекта",
    contribution: {
      role: "Автор проекта",
      tags: ["Концепция", "Презентация"],
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
      categories: ["Product Design"],
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
    categories: ["Продуктовый дизайн"],
    summary: "Qummy — концепция технологии питания без поваров и кухни. Институт бизнеса и дизайна.",
    role: "Автор проекта",
    contribution: {
      role: "Автор проекта",
      tags: ["Концепция", "Презентация"],
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
      categories: ["Product Design"],
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
    categories: ["Брендинг"],
    summary: "Разработка бренда «yoyote». Институт бизнеса и дизайна, в соавторстве с Дарьей Ивановой.",
    role: "Дизайн бренда (совместно с Дарьей Ивановой)",
    contribution: {
      role: "Дизайн бренда (совместно с Дарьей Ивановой)",
      tags: ["Фирменный стиль", "Логотип", "Типографика"],
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
      categories: ["Branding"],
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
    categories: ["Брендинг"],
    summary: "Брендбук MOJO Cacao. Институт бизнеса и дизайна.",
    role: "Автор проекта",
    contribution: {
      role: "Автор проекта",
      tags: ["Брендбук", "Логотип", "Упаковка"],
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
      categories: ["Branding"],
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
    categories: ["Дизайн презентаций"],
    summary: "Презентация «Проект года» для компании Orange Toys. Институт бизнеса и дизайна.",
    role: "Дизайн презентации",
    contribution: {
      role: "Дизайн презентации",
      tags: ["Дизайн презентации"],
      scope: [
        "Спроектировал структуру и дизайн слайдов",
        "Подготовил рабочий файл в PowerPoint для дальнейшего редактирования",
      ],
      constraints: [
        "Презентация должна была остаться редактируемым инструментом, а не только финальной картинкой",
      ],
      decision: "Сдал не только PDF, но и открытый PPTX-файл, которым команда может пользоваться дальше.",
      production: "12+ слайдов подготовлено для презентации «Проект года», сдано в PDF и в редактируемом PPTX.",
      result: "Проект выполнен как курсовая работа Института бизнеса и дизайна по брифу компании Orange Toys.",
    },
    tools: ["PowerPoint", "Adobe Photoshop"],
    files: [
      { label: "Orange Toys — PDF", href: "/work/other/orange-toys/orange-toys.pdf" },
      { label: "Orange Toys — оригинал PPTX", href: "/work/other/orange-toys/orange-toys.pptx" },
    ],
    results: [],
    tone: 4,
    en: {
      categories: ["Presentation Design"],
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
        production: "12+ slides prepared for the \\\"Project of the Year\\\" presentation, delivered as a PDF and an editable PPTX.",
        result: "Completed as a course project at the Institute of Business and Design, built to the Orange Toys brief.",
      },
      tools: ["PowerPoint", "Adobe Photoshop"],
      fileLabels: ["Orange Toys — PDF", "Orange Toys — original PPTX"],
    },
  },
  {
    slug: "beryozki-diploma",
    title: "Берёзки — фирменный стиль сети чайных",
    categories: ["Брендинг", "Полиграфия"],
    summary: "Дипломный проект: фирменный стиль сети чайных «Берёзки» — вывеска, меню и рекламные материалы.",
    role: "Автор проекта",
    contribution: {
      role: "Автор проекта",
      tags: ["Фирменный стиль", "Вывеска", "Полиграфия"],
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
      categories: ["Branding", "Print"],
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
    categories: ["Брендинг"],
    summary: "Разработка визуальных материалов для запуска чайного бренда, 2023 год.",
    year: "2023",
    role: "Автор проекта",
    contribution: {
      role: "Автор проекта",
      tags: ["Фирменный стиль", "Артборды", "Видео"],
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
      categories: ["Branding"],
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
    categories: ["Полиграфия"],
    summary: "Принты для мерча Artflash: футболки с художественными и авторскими принтами.",
    role: "Дизайн принтов",
    contribution: {
      role: "Дизайн принтов",
      tags: ["Дизайн принтов", "Иллюстрация"],
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
      categories: ["Print"],
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
    categories: ["Маркетинг"],
    summary: "Рекламные креативы для соцсетей METRO Cash & Carry.",
    role: "Дизайн рекламных материалов",
    contribution: {
      role: "Дизайн рекламных материалов",
      tags: ["Дизайн рекламы", "Соцсети"],
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
      categories: ["Marketing"],
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
    categories: ["Маркетинг", "Дизайн презентаций", "Моушн"],
    summary:
      "Рекламные креативы для соцсетей, бизнес- и инвесторские презентации и 3D-ролик с макетом интерфейса деловой социальной сети TenChat.",
    year: "2023",
    role: "Стажёр-дизайнер",
    contribution: {
      role: "Стажёр-дизайнер",
      tags: ["Дизайн рекламы", "Презентации", "3D-моушн"],
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
      categories: ["Marketing", "Presentation Design", "Motion"],
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
    categories: ["Иллюстрация"],
    summary:
      "Персонажи, иллюстрации и стикеры, нарисованные в Illustrator для разных проектов и заказчиков.",
    year: "2018 — 2022",
    role: "Иллюстратор-фрилансер",
    contribution: {
      role: "Иллюстратор-фрилансер",
      tags: ["Иллюстрация", "Дизайн персонажей"],
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
      categories: ["Illustration"],
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
    categories: t.categories ?? project.categories,
    dev: t.dev ?? project.dev,
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

/**
 * Engineering cases shown in the "Development" block and on /developer.
 * Order = order on the page.
 */
export const DEV_PROJECT_SLUGS = [
  "news-digest",
  "ai-designer-bot",
  "peering-calculator",
  "telegram-bot-design",
  "pet-care-app",
  "night-shift-hotel",
  "chat-monitor-bot",
  "gnm-ix-landing",
] as const;

export function getDevProjects(): Project[] {
  return DEV_PROJECT_SLUGS.map((slug) => getProject(slug)).filter(
    (project): project is Project => project !== undefined,
  );
}
