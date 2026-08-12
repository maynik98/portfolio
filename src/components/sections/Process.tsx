import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Исследование",
    detail: "Разбираю задачу, аудиторию и контекст: что должно измениться после проекта.",
  },
  {
    number: "02",
    title: "Концепция",
    detail: "Формулирую визуальную идею и проверяю её на ключевых носителях.",
  },
  {
    number: "03",
    title: "Дизайн",
    detail: "Прорабатываю решение до деталей: типографика, сетка, состояния элементов.",
  },
  {
    number: "04",
    title: "Подготовка",
    detail: "Собираю финальные файлы под производство или передачу в разработку.",
  },
  {
    number: "05",
    title: "Реализация",
    detail: "Сопровождаю выпуск и контролирую результат на выходе.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-hairline bg-surface">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <SectionHeading
          label="Процесс работы"
          title="Пять этапов от задачи до результата."
        />

        <ol className="relative mt-14 grid gap-px md:mt-20 md:grid-cols-5">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-0 hidden h-px bg-hairline md:block"
          />
          {STEPS.map((step, index) => (
            <Reveal
              key={step.number}
              as="li"
              delay={index * 80}
              className="group border-t border-hairline pt-7 md:border-t-0 md:pr-6 md:pt-8"
            >
              <span className="block text-[13px] font-medium tabular-nums text-accent">
                {step.number}
              </span>
              <h3 className="mt-3 text-[20px] font-medium tracking-tight md:text-[22px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-muted">
                {step.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
