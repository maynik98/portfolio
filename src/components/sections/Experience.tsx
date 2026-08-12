import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const RESPONSIBILITIES = [
  "Разработка печатной продукции",
  "Создание баннеров для мероприятий и рекламных кампаний",
  "Разработка фирменного мерча",
  "Создание контента для социальных сетей",
  "Создание и монтаж видеороликов",
  "Разработка корпоративных презентаций",
  "Разработка новых страниц сайта",
  "Создание визуальных концепций лендингов",
  "Оформление Telegram-ботов",
  "Поддержание фирменного стиля компании",
  "Взаимодействие с маркетингом, разработчиками и подрядчиками",
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-hairline bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <SectionHeading label="Опыт работы" title="Где и над чем работаю." />

        <Reveal as="article" delay={120} className="mt-14 md:mt-20">
          <div className="rounded-3xl border border-hairline bg-white p-8 md:p-14">
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <p className="text-[clamp(1.5rem,2.6vw,2.125rem)] font-medium leading-tight tracking-tight">
                  Globalnet / GNM
                </p>
                <p className="mt-4 text-[17px]">Lead Graphic Designer</p>
                <p className="mt-1 text-[15px] text-muted">Marketing Department</p>
                <p className="mt-6 inline-flex rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px] font-medium text-accent">
                  2023 — н. в.
                </p>
              </div>

              <div className="md:col-span-8">
                <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
                  Обязанности
                </p>
                <ul className="mt-6 grid gap-x-10 gap-y-0 sm:grid-cols-2">
                  {RESPONSIBILITIES.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-hairline py-3.5 text-[16px] leading-[1.5] last:border-b-0 sm:last:border-b sm:[&:nth-last-child(-n+1)]:border-b-0"
                    >
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
