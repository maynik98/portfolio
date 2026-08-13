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
};

export type ProjectFile = {
  label: string;
  href: string;
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
        caption: "Ланъярды GNM в упаковке",
        ratio: "landscape",
        src: "/work/globalnet-gnm/merch-flat.jpeg",
      },
      {
        caption: "Шопер «Driving the Internet» — деталь",
        ratio: "portrait",
        src: "/work/globalnet-gnm/tote-merch.jpeg",
      },
      {
        caption: "Шопер «Ciao, Peers!» — фото",
        ratio: "portrait",
        src: "/work/globalnet-gnm/tote-photo-2.jpeg",
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
  },
  {
    slug: "corporate-website",
    title: "GNM-IX — корпоративный сайт",
    categories: ["Web Design"],
    companyId: "gnm",
    summary:
      "Разработка новых страниц корпоративного сайта, создание структуры, визуального решения и подготовка макетов для разработки.",
    year: "2023 — н. в.",
    role: "Дизайн интерфейсов, структура, передача в разработку",
    task: "Сайту не хватало страниц под новые продукты и направления, а существующие разделы отвечали не на все вопросы посетителя. Требовалось спроектировать новые страницы так, чтобы они закрывали задачи маркетинга, встраивались в текущую архитектуру сайта и уходили в разработку без долгих доработок.",
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
    ],
    results: [
      {
        caption: "Секция «Built for scale. Engineered for performance.»",
        ratio: "wide",
        src: "/work/corporate-website/built-for-scale.png",
      },
    ],
    tone: 1,
  },
  {
    slug: "landing-pages",
    title: "GNM-IX — лендинги",
    categories: ["Web Design"],
    companyId: "gnm",
    summary:
      "Создание лендингов под маркетинговые задачи: структура, визуальная концепция, интерфейс и адаптация под разные устройства.",
    year: "2023 — н. в.",
    role: "Структура, визуальная концепция, адаптив",
    task: "Маркетинговым кампаниям нужны были отдельные страницы под конкретные предложения и аудитории. Каждая такая страница должна была быстро объяснить ценность продукта и привести посетителя к целевому действию — при этом собираться в сжатые сроки и не выпадать из фирменного стиля.",
    process: [
      {
        step: "Исследование",
        detail:
          "Разбор предложения, аудитории и канала трафика: с каким запросом человек приходит и что должно убедить его на странице.",
      },
      {
        step: "Концепция",
        detail:
          "Выстраивание сценария страницы — какой аргумент идёт первым, чем он подкрепляется, где стоит целевое действие.",
      },
      {
        step: "Эскизы",
        detail:
          "Быстрые варианты первого экрана и ключевых блоков для выбора направления до детальной проработки.",
      },
      {
        step: "Создание дизайна",
        detail:
          "Проработка визуальной концепции, типографики и блоков в desktop и мобильной версии, акцентные элементы под целевое действие.",
      },
      {
        step: "Финальная реализация",
        detail:
          "Адаптация под разные устройства, подготовка макетов и ассетов для разработки, финальная проверка страницы.",
      },
    ],
    solution: [
      "Повторяемая структура лендинга: первый экран с предложением, аргументация, подтверждение, целевое действие.",
      "Визуальная иерархия, в которой кнопка целевого действия остаётся заметной без агрессивных приёмов.",
      "Модульные блоки, из которых собираются новые страницы под новые кампании — без вёрстки с нуля.",
      "Проработанный адаптив: страница читается и работает на мобильных, откуда приходит значительная часть трафика.",
    ],
    results: [
      {
        caption: "Блок «Connect from North America. Peer across Europe.»",
        ratio: "wide",
        src: "/work/landing-pages/connect-north-america.png",
      },
    ],
    tone: 2,
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
        caption: "Публикация в соцсетях — вариант 2",
        ratio: "square",
        src: "/work/marketing-campaigns/gnm-social-5.png",
      },
      {
        caption: "Карта — вариант",
        ratio: "landscape",
        src: "/work/marketing-campaigns/gnm-social-6.png",
      },
      {
        caption: "Публикация в соцсетях — вариант 3",
        ratio: "square",
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
        caption: "Таргетированный креатив: карта — вариант 2",
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
      },
      {
        caption: "Sales one-pager — 2 страницы",
        ratio: "landscape",
        src: "/work/print-exhibition-design/sales-onepager.png",
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
        caption: "Баннер, этап 7 — стиль близок к финальному",
        ratio: "landscape",
        src: "/work/print-exhibition-design/banner-7.png",
      },
      {
        caption: "Баннер, этап 8 — фирменный стиль GNM зафиксирован",
        ratio: "landscape",
        src: "/work/print-exhibition-design/banner-8.png",
      },
    ],
    tone: 5,
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
      },
    ],
    tone: 6,
  },
  {
    slug: "telegram-bot-design",
    title: "GlobalNet — Telegram-бот с ИИ-ассистентом",
    categories: ["Product Design"],
    companyId: "globalnet",
    summary:
      "Разработка визуальной части Telegram-ботов и пользовательских сценариев.",
    year: "2023 — н. в.",
    role: "Пользовательские сценарии, визуальное оформление",
    task: "Часть коммуникации с пользователями шла через Telegram-ботов, но интерфейс мессенджера сильно ограничивает дизайн: только текст, кнопки и изображения. При этом сценарий должен быть понятным с первого сообщения, а сам бот — узнаваемо принадлежать бренду.",
    process: [
      {
        step: "Исследование",
        detail:
          "Разбор задач бота и пользовательских сценариев: зачем человек сюда пришёл и где он может застрять.",
      },
      {
        step: "Концепция",
        detail:
          "Проектирование логики диалога: последовательность шагов, структура меню, точки возврата.",
      },
      {
        step: "Эскизы",
        detail:
          "Схемы сценариев и черновики сообщений — проверка, что путь проходится без тупиков.",
      },
      {
        step: "Создание дизайна",
        detail:
          "Визуальное оформление в рамках возможностей Telegram: обложки, иллюстрации сообщений, иконки, оформление меню и кнопок.",
      },
      {
        step: "Финальная реализация",
        detail:
          "Подготовка ассетов и текстов для разработки, проверка бота в живых сценариях.",
      },
    ],
    solution: [
      "Сценарии, разложенные по шагам, с понятной навигацией и возможностью вернуться назад на любом этапе.",
      "Визуальное оформление, работающее в ограничениях мессенджера — читаемое в мелком размере и на тёмной теме.",
      "Формат сообщений, в котором текст и изображение работают вместе, а не дублируют друг друга.",
      "Оформление, по которому бот узнаётся как часть бренда.",
    ],
    results: [
      {
        caption: "Экран бота с ИИ-ассистентом",
        ratio: "portrait",
        src: "/work/telegram-bot-design/screen.png",
      },
    ],
    tone: 7,
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
    ],
    tone: 0,
  },

  // ---------------------------------------------------------------------
  // GlobalNet
  // ---------------------------------------------------------------------
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
      { caption: "DDoS Protection — титульный слайд", ratio: "wide", src: "/work/globalnet/presentation-design/ddos-protection.png" },
      { caption: "CDN — титульный слайд", ratio: "wide", src: "/work/globalnet/presentation-design/cdn.png" },
      { caption: "GlobalNet: обзор компании — титульный слайд", ratio: "wide", src: "/work/globalnet/presentation-design/overview-2026.png" },
      { caption: "DATAIX — титульный слайд", ratio: "wide", src: "/work/globalnet/presentation-design/dataix-2026.png" },
      { caption: "Презентация — титульный слайд", ratio: "wide", src: "/work/globalnet/presentation-design/presentation.png" },
    ],
    tone: 1,
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
    task: "Оформление отдельных экранов сайта GlobalNet — от формы обратной связи по DATAIX до вариантов главной страницы.",
    results: [
      { caption: "Опрос по качеству подключения к DATAIX", ratio: "wide", src: "/work/globalnet/website/dataix-survey.png" },
      { caption: "Главная страница — вариант 1", ratio: "wide", src: "/work/globalnet/website/homepage-light-1.png" },
      { caption: "Главная страница — вариант 2", ratio: "wide", src: "/work/globalnet/website/homepage-light-2.png" },
      { caption: "Экран сайта", ratio: "wide", src: "/work/globalnet/website/frame.png" },
      { caption: "Личный кабинет: заявка на подключение к IX", ratio: "wide", src: "/work/globalnet/merch-print/print-4.png" },
    ],
    tone: 2,
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
    ],
    tone: 5,
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
