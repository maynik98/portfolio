import type { CompanyId } from "@/lib/companies";

export type ProcessStep = {
  step: string;
  detail: string;
};

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

/** English overrides for translatable text fields. Any field left out falls back to the Russian original. */
export type ProjectTranslation = {
  title?: string;
  summary?: string;
  role?: string;
  task?: string;
  process?: ProcessStep[];
  solution?: string[];
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
  process?: ProcessStep[];
  solution?: string[];
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
    title: "GNM — фирменный стиль и мерч",
    categories: ["Branding", "Print"],
    companyId: "gnm",
    summary:
      "Комплексная работа с визуальной коммуникацией компании: рекламные материалы, digital, печатная продукция, презентации, мерч и оформление мероприятий.",
    year: "2023 — н. в.",
    role: "Lead Graphic Designer, отдел маркетинга",
    task: "Визуальная коммуникация компании собиралась из материалов, которые в разное время делали разные исполнители и подрядчики. Из-за этого носители плохо связывались друг с другом, а каждая новая задача начиналась с согласования стиля вместо работы над содержанием. Нужна была единая система, в которой любой носитель — от баннера на конференции до слайда в презентации — читается как один бренд.",
    process: [
      {
        step: "Исследование",
        detail:
          "Аудит всех существующих носителей: digital, полиграфия, презентации, мерч, соцсети. Разбор задач маркетинга и того, какие материалы запрашиваются чаще всего.",
      },
      {
        step: "Концепция",
        detail:
          "Формулировка визуальной логики бренда: как строится композиция, как работает типографика, где допустимы акценты, а где нужна сдержанность.",
      },
      {
        step: "Эскизы",
        detail:
          "Проработка вариантов на ключевых носителях — от рекламного баннера до титульного слайда, чтобы проверить систему на разных форматах сразу.",
      },
      {
        step: "Создание дизайна",
        detail:
          "Сборка библиотеки шаблонов и компонентов в Figma: сетки, типографические стили, модули для digital и печати.",
      },
      {
        step: "Финальная реализация",
        detail:
          "Подготовка файлов под конкретные каналы, передача в производство и разработку, сопровождение на всех этапах выпуска.",
      },
    ],
    solution: [
      "Единая типографическая и композиционная система, которая переносится между digital, печатью и презентациями без переизобретения заново.",
      "Библиотека шаблонов под регулярные задачи маркетинга — новые материалы собираются быстрее и остаются в рамках стиля.",
      "Правила использования логотипа, цвета и отступов, зафиксированные так, чтобы их могли применять подрядчики без потери качества.",
      "Отдельные наборы носителей под мероприятия, соцсети и мерч, связанные общей визуальной логикой.",
    ],
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
        caption: "Ланъярды",
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
        "End-to-end visual communications for the company: advertising materials, digital, print, presentations, merch, and event design.",
      role: "Lead Graphic Designer, Marketing Department",
      task: "The company's visual communications were assembled from materials made at different times by different freelancers and vendors. As a result, materials didn't connect well with each other, and every new task began with agreeing on style instead of working on content. What was needed was a unified system in which any material — from a conference banner to a presentation slide — reads as one brand.",
      process: [
        {
          step: "Research",
          detail:
            "Audit of all existing materials: digital, print, presentations, merch, social media. Breakdown of marketing tasks and which materials are requested most often.",
        },
        {
          step: "Concept",
          detail:
            "Defining the brand's visual logic: how composition is built, how typography works, where accents are allowed and where restraint is needed.",
        },
        {
          step: "Sketches",
          detail:
            "Working through options on key materials — from an ad banner to a title slide — to test the system across different formats at once.",
        },
        {
          step: "Design",
          detail:
            "Building a library of templates and components in Figma: grids, typographic styles, modules for digital and print.",
        },
        {
          step: "Final delivery",
          detail:
            "Preparing files for specific channels, handing off to production and development, and supporting every stage of release.",
        },
      ],
      solution: [
        "A unified typographic and compositional system that carries across digital, print, and presentations without being reinvented each time.",
        "A template library for recurring marketing tasks — new materials are assembled faster and stay on-brand.",
        "Rules for logo use, color, and spacing, fixed so that contractors can apply them without loss of quality.",
        "Separate sets of materials for events, social media, and merch, connected by a shared visual logic.",
      ],
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
    title: "GNM-IX — сайт",
    categories: ["Web Design"],
    companyId: "gnm",
    summary:
      "Дизайн главной страницы корпоративного сайта gnm.net и страницы «Exchange Locations & Network Coverage» с интерактивной картой точек присутствия.",
    year: "2023 — н. в.",
    role: "Дизайн интерфейсов, структура, передача в разработку",
    task: "Передо мной стояла задача — улучшить сайт gnm.net и сделать его удобнее для посетителя. Сайту не хватало страниц под новые продукты и направления, а существующие разделы отвечали не на все вопросы. Нужно было спроектировать страницы так, чтобы они закрывали задачи маркетинга, встраивались в текущую архитектуру сайта и уходили в разработку без долгих доработок.",
    process: [
      {
        step: "Исследование",
        detail:
          "Разбор текущей структуры сайта, целей страницы и сценариев посетителя. Сбор материалов и требований от маркетинга и продуктовых команд.",
      },
      {
        step: "Концепция",
        detail:
          "Проектирование структуры страницы: последовательность блоков, логика повествования, места для целевых действий.",
      },
      {
        step: "Эскизы",
        detail:
          "Вайрфреймы блоков и проверка вариантов подачи — что вынести на первый экран, как показать продукт, где нужны факты, а где визуальное объяснение.",
      },
      {
        step: "Создание дизайна",
        detail:
          "Проработка страниц в desktop и мобильной версии, состояния элементов, типографическая иерархия, работа с сеткой.",
      },
      {
        step: "Финальная реализация",
        detail:
          "Подготовка макетов и ассетов для разработчиков, ответы на вопросы по вёрстке, проверка результата на соответствие макету.",
      },
    ],
    solution: [
      "Структура страниц, выстроенная под сценарий посетителя: сначала суть предложения, затем детали, затем целевое действие.",
      "Визуальное решение, наследующее фирменный стиль компании, но адаптированное под задачи веба — читаемость, плотность информации, работа на длинном скролле.",
      "Адаптивные макеты с проработанными состояниями элементов, а не только desktop-версия.",
      "Макеты, собранные по компонентам, с подготовленными ассетами — чтобы передача в разработку не требовала уточнений.",
      "По итогу сайт стал удобнее: посетитель быстрее находит нужный раздел, а страницы под новые продукты закрывают вопросы, которые раньше оставались без ответа.",
    ],
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
      task: "My task was to improve the gnm.net website and make it more convenient for visitors. The site lacked pages for new products and directions, and existing sections didn't answer all of a visitor's questions. New pages needed to be designed to meet marketing goals, fit into the site's existing architecture, and go into development without lengthy rework.",
      process: [
        {
          step: "Research",
          detail:
            "Review of the current site structure, page goals, and visitor scenarios. Gathering materials and requirements from marketing and product teams.",
        },
        {
          step: "Concept",
          detail:
            "Designing the page structure: block sequence, narrative logic, placement of calls to action.",
        },
        {
          step: "Sketches",
          detail:
            "Wireframes of blocks and testing presentation options — what goes above the fold, how to show the product, where facts are needed versus visual explanation.",
        },
        {
          step: "Design",
          detail:
            "Working through desktop and mobile versions, element states, typographic hierarchy, and grid work.",
        },
        {
          step: "Final delivery",
          detail:
            "Preparing mockups and assets for developers, answering implementation questions, checking the result against the design.",
        },
      ],
      solution: [
        "Page structure built around the visitor's journey: the offer's core first, then details, then a call to action.",
        "A visual solution that inherits the company's brand identity but is adapted for the web — readability, information density, long-scroll performance.",
        "Responsive layouts with worked-out element states, not just a desktop version.",
        "Mockups assembled from components with prepared assets — so handoff to development required no clarification.",
        "As a result, the site became more convenient: visitors find the section they need faster, and the new product pages answer questions that used to go unanswered.",
      ],
      resultCaptions: [
        "gnm.net homepage",
        "\"Exchange Locations & Network Coverage\" page — presence map",
      ],
    },
  },
  {
    slug: "marketing-campaigns",
    title: "GNM — маркетинговые кампании",
    categories: ["Marketing"],
    companyId: "gnm",
    summary:
      "Разработка баннеров, рекламных материалов и визуальных коммуникаций для продвижения продуктов.",
    year: "2023 — н. в.",
    role: "Дизайн рекламных материалов, адаптация под каналы",
    task: "Рекламные кампании выходили в разных каналах и форматах, у каждого — свои требования к размерам и объёму текста. Нужно было решение, при котором сообщение остаётся узнаваемым и читаемым везде, а подготовка десятков размеров не превращается в ручную работу над каждым файлом.",
    process: [
      {
        step: "Исследование",
        detail:
          "Разбор задачи кампании, каналов размещения и технических требований к форматам.",
      },
      {
        step: "Концепция",
        detail:
          "Поиск визуального ключа кампании: главный образ, тон, роль текста и акцента.",
      },
      {
        step: "Эскизы",
        detail:
          "Проверка ключа на самом сложном формате — узком и мелком, где меньше всего места для сообщения.",
      },
      {
        step: "Создание дизайна",
        detail:
          "Отрисовка мастер-макетов и раскладка размерной сетки по каналам с сохранением композиции и читаемости.",
      },
      {
        step: "Финальная реализация",
        detail:
          "Подготовка финальных файлов под требования площадок и передача материалов в размещение.",
      },
    ],
    solution: [
      "Визуальный ключ кампании, который держится во всех форматах — от широкого баннера до вертикального сторис.",
      "Мастер-макеты и размерные сетки, из которых быстро собираются новые форматы под новые площадки.",
      "Типографические ограничения по объёму текста, заданные заранее, — сообщение остаётся читаемым в мелких размерах.",
      "Единая система акцентов, связывающая рекламные материалы с остальной коммуникацией бренда.",
    ],
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
        "Development of banners, advertising materials, and visual communications to promote products.",
      role: "Advertising material design, channel adaptation",
      task: "Ad campaigns ran across different channels and formats, each with its own size and text-length requirements. What was needed was a solution where the message stays recognizable and legible everywhere, and preparing dozens of sizes doesn't turn into manual work on every file.",
      process: [
        {
          step: "Research",
          detail:
            "Breaking down the campaign brief, placement channels, and technical format requirements.",
        },
        {
          step: "Concept",
          detail:
            "Finding the campaign's visual key: the main image, tone, and the role of text and accent.",
        },
        {
          step: "Sketches",
          detail:
            "Testing the key on the hardest format — narrow and small, with the least room for the message.",
        },
        {
          step: "Design",
          detail:
            "Drawing master layouts and laying out the size grid across channels while preserving composition and legibility.",
        },
        {
          step: "Final delivery",
          detail:
            "Preparing final files to platform requirements and handing materials off for placement.",
        },
      ],
      solution: [
        "A visual key that holds across every format — from a wide banner to a vertical story.",
        "Master layouts and size grids that new formats can be quickly assembled from for new placements.",
        "Typographic constraints on text volume set in advance — the message stays legible at small sizes.",
        "A unified system of accents linking ad materials to the rest of the brand communication.",
      ],
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
    title: "GNM — видео и моушн-дизайн",
    categories: ["Motion", "Web Design"],
    companyId: "gnm",
    summary:
      "Анимированные ролики и новостные заставки GNM-IX: промо-акции, отчёты по трафику и объявления — используются в соцсетях и как заглушки для новостных дайджестов на сайте.",
    year: "2023 — н. в.",
    role: "Концепция, анимация, монтаж",
    task: "Часть сообщений компании плохо работала в статике: продукты и процессы требовали объяснения в динамике, а мероприятия и запуски — коротких роликов под конкретный канал. Нужно было производить видео внутри команды, в едином визуальном языке с остальной коммуникацией.",
    process: [
      {
        step: "Исследование",
        detail:
          "Разбор задачи ролика: что нужно объяснить, кому, в каком канале и за сколько секунд.",
      },
      {
        step: "Концепция",
        detail:
          "Сценарий и раскадровка: последовательность кадров, ритм, роль графики и текста.",
      },
      {
        step: "Эскизы",
        detail:
          "Отрисовка ключевых кадров и проверка визуального языка до анимации, чтобы не переделывать сцены позже.",
      },
      {
        step: "Создание дизайна",
        detail:
          "Анимация сцен и графики в After Effects, работа с темпом, переходами и типографикой в движении.",
      },
      {
        step: "Финальная реализация",
        detail:
          "Монтаж, сведение со звуком, экспорт под требования каналов размещения.",
      },
    ],
    solution: [
      "Единый язык движения: темп, характер переходов и работа типографики в анимации согласованы с фирменным стилем.",
      "Раскадровка до анимации — решения обсуждаются и утверждаются на этапе, где правки стоят дешевле всего.",
      "Библиотека анимированных элементов и титров, ускоряющая производство следующих роликов.",
      "Экспорт под разные каналы из одного проекта, включая вертикальные форматы.",
    ],
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
      task: "Some of the company's messages didn't work well as static images: products and processes needed to be explained in motion, while events and launches needed short clips for specific channels. Video needed to be produced in-house, in the same visual language as the rest of the communications.",
      process: [
        {
          step: "Research",
          detail:
            "Breaking down the clip's brief: what needs explaining, to whom, on which channel, and in how many seconds.",
        },
        {
          step: "Concept",
          detail:
            "Script and storyboard: sequence of shots, pacing, the role of graphics and text.",
        },
        {
          step: "Sketches",
          detail:
            "Drawing key frames and testing the visual language before animation, to avoid reworking scenes later.",
        },
        {
          step: "Design",
          detail:
            "Animating scenes and graphics in After Effects, working with pacing, transitions, and typography in motion.",
        },
        {
          step: "Final delivery",
          detail:
            "Editing, sound mixing, exporting to placement-channel requirements.",
        },
      ],
      solution: [
        "A unified motion language: pacing, transition style, and animated typography aligned with the brand identity.",
        "Storyboarding before animation — decisions are discussed and approved at the stage where changes are cheapest.",
        "A library of animated elements and titles that speeds up production of future clips.",
        "Exports for different channels from a single project, including vertical formats.",
      ],
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
      "Разработка полиграфии, стендов, roll-up, буклетов и материалов для мероприятий.",
    year: "2023 — н. в.",
    role: "Дизайн, препресс, работа с подрядчиками",
    task: "На мероприятиях компания конкурирует за внимание в физическом пространстве, где решение принимается за несколько секунд с расстояния. При этом печать не прощает ошибок: макет с неверными вылетами или цветовым профилем возвращается с производства с потерей времени и бюджета. Баннеры для стендов делались под конкретные мероприятия с интервалом примерно в полгода — за это время фирменный стиль GNM прошёл путь от минимального набора элементов до зафиксированной системы.",
    process: [
      {
        step: "Исследование",
        detail:
          "Разбор площадки и сценария мероприятия: с какого расстояния видят носитель, как движется поток людей, какие есть технические ограничения.",
      },
      {
        step: "Концепция",
        detail:
          "Визуальное решение зоны: что читается первым с дистанции, что — при подходе, а что нужно взять в руки.",
      },
      {
        step: "Эскизы",
        detail:
          "Проверка вариантов в масштабе и раскладка носителей по зоне стенда.",
      },
      {
        step: "Создание дизайна",
        detail:
          "Отрисовка носителей в реальных размерах: стенды, roll-up, буклеты, раздаточные материалы.",
      },
      {
        step: "Финальная реализация",
        detail:
          "Подготовка файлов к печати — вылеты, цветовые профили, требования конкретного производства, — согласование с подрядчиками и контроль результата.",
      },
    ],
    solution: [
      "Иерархия по дистанции: крупное сообщение читается издалека, детали раскрываются при подходе.",
      "Комплект носителей, собранный как одна зона, а не набор отдельных макетов.",
      "Макеты, подготовленные под требования конкретного производства — с вылетами, профилями и проверенными шрифтами.",
      "Работа с подрядчиками на этапе печати и сборки: контроль цветопробы и финального качества.",
    ],
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
        "Development of print materials, stands, roll-ups, brochures, and event materials.",
      role: "Design, prepress, vendor coordination",
      task: "At events, the company competes for attention in physical space, where decisions are made in seconds from a distance. Print leaves no room for error: a layout with wrong bleeds or a wrong color profile comes back from production at a cost in time and budget. Stand banners were made for specific events roughly every six months — over that time GNM's brand identity evolved from a minimal set of elements into a fixed system.",
      process: [
        {
          step: "Research",
          detail:
            "Breaking down the venue and event scenario: viewing distance, foot-traffic flow, technical constraints.",
        },
        {
          step: "Concept",
          detail:
            "Visual solution for the zone: what reads first from a distance, what reads on approach, and what should be picked up by hand.",
        },
        {
          step: "Sketches",
          detail:
            "Testing options at scale and laying out materials across the stand zone.",
        },
        {
          step: "Design",
          detail:
            "Drawing materials at real size: stands, roll-ups, brochures, handouts.",
        },
        {
          step: "Final delivery",
          detail:
            "Preparing print-ready files — bleeds, color profiles, specific production requirements — coordinating with vendors and checking results.",
        },
      ],
      solution: [
        "A distance-based hierarchy: the big message reads from afar, details unfold on approach.",
        "A set of materials assembled as one zone rather than a collection of separate layouts.",
        "Layouts prepared to specific production requirements — with bleeds, profiles, and verified fonts.",
        "Vendor coordination during printing and assembly: proof and final quality control.",
      ],
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
    title: "GNM — презентации",
    categories: ["Presentation Design"],
    companyId: "gnm",
    summary:
      "Создание презентаций для клиентов, партнеров и внутренних команд.",
    year: "2023 — н. в.",
    role: "Структура, дизайн слайдов, шаблоны",
    task: "Презентации готовили разные отделы, и качество сильно расходилось: сильные аргументы терялись в перегруженных слайдах, а внешние документы выглядели слабее уровня компании. Нужен был инструмент, которым команды пользуются самостоятельно, получая аккуратный результат без дизайнера в каждой задаче.",
    process: [
      {
        step: "Исследование",
        detail:
          "Разбор типовых сценариев: продажа, партнёрская встреча, внутренний отчёт. Сбор того, какие слайды нужны чаще всего.",
      },
      {
        step: "Концепция",
        detail:
          "Логика повествования и правила плотности: один слайд — одна мысль, как подаются данные, где нужен акцент.",
      },
      {
        step: "Эскизы",
        detail:
          "Проработка базовых типов слайдов — титул, тезис, данные, схема, финальный призыв.",
      },
      {
        step: "Создание дизайна",
        detail:
          "Отрисовка мастер-слайдов, типографической системы и графики для данных и схем.",
      },
      {
        step: "Финальная реализация",
        detail:
          "Сборка шаблона с инструкцией по применению и передача командам, сопровождение на первых презентациях.",
      },
    ],
    solution: [
      "Набор мастер-слайдов под реальные сценарии, а не абстрактный шаблон «на все случаи».",
      "Типографическая система, которая держит иерархию даже при большом объёме текста.",
      "Единый стиль подачи данных: графики и схемы читаются без расшифровки.",
      "Инструкция по применению — команды собирают презентации самостоятельно и остаются в стиле.",
    ],
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
      summary: "Creating presentations for clients, partners, and internal teams.",
      role: "Structure, slide design, templates",
      task: "Presentations were made by different departments, and quality varied widely: strong arguments got lost in overloaded slides, and external documents looked weaker than the company deserved. What was needed was a tool teams could use on their own and still get a polished result without a designer on every task.",
      process: [
        {
          step: "Research",
          detail:
            "Breaking down typical scenarios: sales, partner meetings, internal reports. Collecting the slide types needed most often.",
        },
        {
          step: "Concept",
          detail:
            "Narrative logic and density rules: one slide, one idea; how data is presented; where an accent is needed.",
        },
        {
          step: "Sketches",
          detail:
            "Working through core slide types — title, thesis, data, diagram, closing call to action.",
        },
        {
          step: "Design",
          detail:
            "Drawing master slides, the typographic system, and graphics for data and diagrams.",
        },
        {
          step: "Final delivery",
          detail:
            "Assembling the template with usage instructions and handing it to teams, supporting the first presentations.",
        },
      ],
      solution: [
        "A set of master slides built for real scenarios, not an abstract one-size-fits-all template.",
        "A typographic system that holds hierarchy even with a lot of text.",
        "A unified way of presenting data: charts and diagrams read without a legend.",
        "Usage instructions — teams assemble presentations themselves and stay on-brand.",
      ],
      fileLabels: ["Press Kit — PDF, 9 slides", "Partner presentation — PDF, 12 slides"],
      resultCaptions: ["Partner presentation: title slide"],
    },
  },
  {
    slug: "gnm-app",
    title: "GNM VPN — приложение",
    categories: ["Product Design"],
    companyId: "gnm",
    summary:
      "Визуальное оформление мобильного приложения GNM VPN: экран входа и рабочие состояния интерфейса.",
    year: "2023 — н. в.",
    role: "Визуальное оформление интерфейса",
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
        "Visual design of the GNM VPN mobile app: login screen and interface states.",
      role: "Interface visual design",
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
    title: "GlobalNet — Telegram-бот с ИИ-ассистентом",
    categories: ["Product Design"],
    companyId: "globalnet",
    summary:
      "Разработка Telegram-бота с ИИ-ассистентом: бот обрабатывает клиентские запросы через базу знаний и передаёт сложные обращения менеджеру.",
    year: "2023 — н. в.",
    role: "Разработка бота, интеграция ИИ-ассистента",
    task: "Часть коммуникации с клиентами GlobalNet нужно было перевести в Telegram — не в виде статичного меню, а как полноценного помощника, способного отвечать на вопросы самостоятельно. Я не оформлял готового бота, а собрал его целиком: логику сценариев, сами диалоги и ИИ-ассистента, который понимает вопрос клиента и ищет ответ по базе знаний компании.",
    process: [
      {
        step: "Исследование",
        detail:
          "Разбор задач бота и пользовательских сценариев: с какими вопросами обращаются клиенты и какая часть базы знаний закрывает большинство из них.",
      },
      {
        step: "Концепция",
        detail:
          "Проектирование логики диалога и логики ИИ-ассистента: когда он отвечает сам по базе знаний, а когда передаёт обращение менеджеру.",
      },
      {
        step: "Эскизы",
        detail:
          "Схемы сценариев и черновики сообщений — проверка, что путь проходится без тупиков.",
      },
      {
        step: "Разработка",
        detail:
          "Сборка бота и его сценариев, подключение ИИ-ассистента к базе знаний, визуальное оформление в рамках возможностей Telegram: обложки, иллюстрации сообщений, иконки, оформление меню и кнопок.",
      },
      {
        step: "Финальная реализация",
        detail:
          "Настройка передачи заявки менеджеру, когда ассистент не может закрыть вопрос сам, и проверка бота в живых сценариях.",
      },
    ],
    solution: [
      "ИИ-ассистент, который отвечает клиенту по базе знаний компании — без ожидания оператора.",
      "Если ассистент не может закрыть вопрос сам, он оставляет заявку и передаёт её менеджеру для дальнейшей коммуникации.",
      "Сценарии, разложенные по шагам, с понятной навигацией и возможностью вернуться назад на любом этапе.",
      "Оформление, по которому бот узнаётся как часть бренда, даже в рамках ограничений мессенджера.",
    ],
    results: [
      {
        caption: "Экран бота с ИИ-ассистентом",
        ratio: "portrait",
        src: "/work/telegram-bot-design/screen.png",
      },
    ],
    tone: 7,
    en: {
      title: "GlobalNet — Telegram Bot with AI Assistant",
      summary:
        "Built a Telegram bot with an AI assistant: it answers client questions from a knowledge base and escalates complex requests to a manager.",
      role: "Bot development, AI assistant integration",
      task: "Part of the communication with GlobalNet clients needed to move to Telegram — not as a static menu, but as a real assistant able to answer questions on its own. I didn't just style a ready-made bot: I built it end to end — the scenario logic, the dialogues themselves, and an AI assistant that understands a client's question and looks up the answer in the company's knowledge base.",
      process: [
        {
          step: "Research",
          detail:
            "Breaking down the bot's tasks and user flows: what clients actually ask, and how much of it the knowledge base already covers.",
        },
        {
          step: "Concept",
          detail:
            "Designing both the dialogue logic and the assistant's decision logic: when it answers from the knowledge base itself, and when it hands the request to a manager.",
        },
        {
          step: "Sketches",
          detail:
            "Flow diagrams and message drafts — checking the path has no dead ends.",
        },
        {
          step: "Development",
          detail:
            "Building the bot and its scenarios, connecting the AI assistant to the knowledge base, and visual design within Telegram's constraints: covers, message illustrations, icons, menu and button styling.",
        },
        {
          step: "Final delivery",
          detail:
            "Setting up hand-off to a manager when the assistant can't resolve a question itself, and testing the bot in live scenarios.",
        },
      ],
      solution: [
        "An AI assistant that answers clients from the company's knowledge base — no waiting for an operator.",
        "When the assistant can't resolve a question itself, it leaves a request and hands it to a manager for follow-up.",
        "Flows broken into steps, with clear navigation and the ability to go back at any stage.",
        "Styling that makes the bot recognizable as part of the brand, even within the messenger's constraints.",
      ],
      resultCaptions: ["Bot screen with AI assistant"],
    },
  },
  {
    slug: "chat-monitor-bot",
    title: "GlobalNet — бот-аналитик клиентских чатов",
    categories: ["Product Design"],
    companyId: "globalnet",
    summary:
      "Telegram-бот, который мониторит клиентские чаты, структурирует переписку в базу данных и автоматически сообщает руководителям о жалобах, конфликтах и просроченных ответах.",
    year: "2026",
    role: "Разработка бота, аналитика на базе ИИ",
    task: "Часть обращений клиентов GlobalNet идёт через групповые чаты в Telegram, и в потоке переписки легко пропустить важное: жалобу, конфликт или сообщение, оставшееся без ответа. Я разработал бота, который подключается к этим чатам, различает сотрудника и клиента, структурирует переписку в базе данных и обрабатывает каждое клиентское сообщение через нейросеть — а при негативном сигнале сразу уведомляет руководителя.",
    process: [
      {
        step: "Исследование",
        detail:
          "Разбор того, какие события в переписке критичны для бизнеса — жалобы, конфликты, сообщения без ответа — и как отличить их от обычной переписки.",
      },
      {
        step: "Концепция",
        detail:
          "Проектирование структуры данных: отдельные таблицы для администраторов, чатов, сообщений и событий — и логика, по которой каждое сообщение попадает в нужную таблицу.",
      },
      {
        step: "Разработка",
        detail:
          "Сборка бота: определение отправителя (клиент или сотрудник), запись сообщений в базу, обработка текста через нейросеть с краткой сводкой и классификацией по типу события.",
      },
      {
        step: "Мониторинг просрочки",
        detail:
          "Отдельный сценарий, который каждые 30 минут проверяет чаты и фиксирует как отдельное событие ситуацию, когда клиентское сообщение остаётся без ответа администратора дольше 8 часов.",
      },
      {
        step: "Уведомления и приложение",
        detail:
          "Настройка автоматической отправки руководителям уведомлений о негативных событиях и разработка отдельного приложения для просмотра всех сообщений, событий и статистики.",
      },
    ],
    solution: [
      "Бот, который читает подключённые чаты, различает сотрудника и клиента и сохраняет переписку в структурированном виде.",
      "Каждое клиентское сообщение проходит через нейросеть, которая делает краткую сводку и определяет тип события: похвала, жалоба, конфликт или просрочка ответа.",
      "При негативном событии руководитель получает уведомление автоматически, не дожидаясь ручной проверки чатов.",
      "Отдельное приложение для просмотра сообщений и событий: все сообщения, позитивные и негативные события, обращения без ответа.",
    ],
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
      task: "Part of GlobalNet's client communication runs through group chats in Telegram, and it's easy to miss what matters in the stream of messages — a complaint, a conflict, or a message left without a reply. I built a bot that connects to these chats, tells staff and clients apart, structures the conversation into a database, and runs every client message through a neural network — alerting a manager immediately on a negative signal.",
      process: [
        {
          step: "Research",
          detail:
            "Breaking down which events in a conversation actually matter to the business — complaints, conflicts, unanswered messages — and how to tell them apart from routine chat.",
        },
        {
          step: "Concept",
          detail:
            "Designing the data structure: separate tables for admins, chats, messages, and events — and the logic that routes each message to the right table.",
        },
        {
          step: "Development",
          detail:
            "Building the bot: identifying the sender (client or staff), logging messages to the database, and running the text through a neural network for a short summary and event classification.",
        },
        {
          step: "Response-time monitoring",
          detail:
            "A separate scenario that checks chats every 30 minutes and logs a dedicated event whenever a client message goes unanswered by an admin for more than 8 hours.",
        },
        {
          step: "Notifications and app",
          detail:
            "Setting up automatic manager notifications for negative events, and building a companion app for reviewing all messages, events, and stats.",
        },
      ],
      solution: [
        "A bot that reads the connected chats, tells staff and clients apart, and stores the conversation in structured form.",
        "Every client message runs through a neural network that produces a short summary and classifies the event: praise, complaint, conflict, or overdue reply.",
        "On a negative event, a manager is notified automatically, without waiting for someone to check the chats by hand.",
        "A companion app for reviewing messages and events: all messages, positive and negative events, unanswered requests.",
      ],
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
      "Презентации сервисов GlobalNet: защита от DDoS, CDN, точка обмена трафиком DATAIX и общая презентация компании.",
    year: "2025 — 2026",
    role: "Дизайн слайдов",
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
        "Presentations for GlobalNet services: DDoS protection, CDN, the DATAIX traffic exchange point, and a general company overview.",
      role: "Slide design",
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
      "Экраны корпоративного сайта GlobalNet: форма опроса по качеству подключения к DATAIX и варианты главной страницы.",
    year: "2023 — н. в.",
    role: "Дизайн интерфейса",
    task: "Передо мной стояла задача — улучшить сайт GlobalNet и сделать его удобнее для пользователя: от формы обратной связи по DATAIX до вариантов главной страницы и личного кабинета.",
    solution: [
      "По итогу сайт стал удобнее: понятнее сценарии, чище интерфейс, проще работа с формами и заявками на подключение.",
    ],
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
        "GlobalNet corporate website screens: a DATAIX connection quality survey form and homepage variants.",
      role: "Interface design",
      task: "My task was to improve the GlobalNet website and make it more convenient for users: from the DATAIX feedback form to homepage variants and the account dashboard.",
      solution: [
        "As a result, the site became more convenient: clearer user flows, a cleaner interface, and simpler forms and connection requests.",
      ],
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
    summary: "Таргетированная реклама, промо-флаеры и публикации для соцсетей GlobalNet.",
    year: "2023 — н. в.",
    role: "Дизайн рекламных материалов",
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
      summary: "Targeted ads, promo flyers, and social media posts for GlobalNet.",
      role: "Advertising material design",
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
    summary: "Кепки, худи, футболки, рюкзак и стикеры с фирменным стилем GlobalNet и DATAIX.",
    year: "2023 — н. в.",
    role: "Дизайн мерча",
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
      summary: "Caps, hoodies, t-shirts, a backpack, and stickers featuring GlobalNet and DATAIX branding.",
      role: "Merch design",
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
    summary: "Видеоролики GlobalNet: годовой отчёт, технические ролики и записи мероприятий.",
    year: "2023 — н. в.",
    role: "Видео и моушн",
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
      summary: "GlobalNet video content: an annual report, technical clips, and event recordings.",
      role: "Video and motion",
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
    files: [{ label: "Juzzle — PDF", href: "/work/other/juzzle/juzzle.pdf" }],
    results: [],
    tone: 0,
    en: {
      summary: "Defense of the creative part of the \"Juzzle\" project. Institute of Business and Design, 05.16.2023.",
      role: "Project author",
      fileLabels: ["Juzzle — PDF"],
    },
  },
  {
    slug: "qummy",
    title: "Qummy",
    categories: ["Product Design"],
    summary: "Qummy — концепция технологии питания без поваров и кухни. Институт бизнеса и дизайна.",
    role: "Автор проекта",
    files: [{ label: "Qummy — PDF", href: "/work/other/qummy/qummy.pdf" }],
    results: [],
    tone: 1,
    en: {
      summary: "Qummy — a concept for a cook- and kitchen-free food technology. Institute of Business and Design.",
      role: "Project author",
      fileLabels: ["Qummy — PDF"],
    },
  },
  {
    slug: "yoyote",
    title: "Brand «yoyote»",
    categories: ["Branding"],
    summary: "Разработка бренда «yoyote». Институт бизнеса и дизайна, в соавторстве с Дарьей Ивановой.",
    role: "Дизайн бренда (совместно с Дарьей Ивановой)",
    files: [{ label: "yoyote — PDF", href: "/work/other/yoyote/yoyote.pdf" }],
    results: [],
    tone: 2,
    en: {
      title: "Brand \"yoyote\"",
      summary: "Development of the \"yoyote\" brand. Institute of Business and Design, co-authored with Daria Ivanova.",
      role: "Brand design (with Daria Ivanova)",
      fileLabels: ["yoyote — PDF"],
    },
  },
  {
    slug: "mojo-cacao",
    title: "MOJO Cacao — брендбук",
    categories: ["Branding"],
    summary: "Брендбук MOJO Cacao. Институт бизнеса и дизайна.",
    role: "Автор проекта",
    files: [{ label: "Брендбук MOJO — PDF", href: "/work/other/mojo-cacao/brandbook.pdf" }],
    results: [],
    tone: 3,
    en: {
      title: "MOJO Cacao — Brand Book",
      summary: "MOJO Cacao brand book. Institute of Business and Design.",
      role: "Project author",
      fileLabels: ["MOJO Brand Book — PDF"],
    },
  },
  {
    slug: "orange-toys",
    title: "Orange Toys — «Проект года»",
    categories: ["Presentation Design"],
    summary: "Презентация «Проект года» для компании Orange Toys. Институт бизнеса и дизайна.",
    role: "Дизайн презентации",
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
      fileLabels: ["Orange Toys — PDF", "Orange Toys — original PPTX"],
    },
  },
  {
    slug: "beryozki-diploma",
    title: "Берёзки — фирменный стиль сети чайных",
    categories: ["Branding", "Print"],
    summary: "Дипломный проект: фирменный стиль сети чайных «Берёзки» — вывеска, меню и рекламные материалы.",
    role: "Автор проекта",
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
      resultCaptions: ["Artboard — 1", "Artboard — 2", "Artboard — 3", "Artboard — 4", "Video"],
    },
  },
  {
    slug: "artflash",
    title: "Artflash — мерч и креатив",
    categories: ["Print"],
    summary: "Принты для мерча Artflash: футболки с художественными и авторскими принтами.",
    role: "Дизайн принтов",
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
    process: t.process ?? project.process,
    solution: t.solution ?? project.solution,
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
