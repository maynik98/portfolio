import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const DIRECTIONS = [
  "Graphic Design",
  "Web Design",
  "Landing Pages",
  "UI/UX",
  "Branding",
  "Motion Design",
  "Print Design",
  "Presentation Design",
  "Telegram Bot Design",
  "AI-разработчик",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-hairline">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <SectionHeading
            className="md:col-span-6"
            label="Обо мне"
            title="Ведущий дизайнер отдела маркетинга Globalnet и GNM."
          />

          <div className="space-y-6 md:col-span-6 md:pt-16">
            <Reveal as="p" delay={60}>
              <span className="block text-[17px] leading-[1.7] text-muted md:text-[19px]">
                Специализируюсь на создании визуальных решений для цифровых
                продуктов, корпоративных сайтов, лендингов, брендинга и
                маркетинговых материалов.
              </span>
            </Reveal>
            <Reveal as="p" delay={140}>
              <span className="block text-[17px] leading-[1.7] text-muted md:text-[19px]">
                Работаю над проектами полного цикла: от исследования и разработки
                концепции до подготовки финальных материалов и передачи в
                производство или разработку.
              </span>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <Reveal as="p">
            <span className="block text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
              Направления
            </span>
          </Reveal>

          <ul className="mt-8 grid grid-cols-1 border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {DIRECTIONS.map((direction, index) => (
              <Reveal
                key={direction}
                as="li"
                delay={(index % 3) * 70}
                className="group border-b border-hairline py-5 sm:[&:nth-child(odd)]:pr-8 lg:pr-8"
              >
                <span className="flex items-baseline gap-3">
                  <span className="text-[12px] tabular-nums text-accent/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[19px] tracking-tight transition-colors duration-300 group-hover:text-accent md:text-[21px]">
                    {direction}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
