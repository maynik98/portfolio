import Link from "next/link";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: "3+", label: "года коммерческого опыта" },
  { value: "100+", label: "реализованных проектов" },
  { value: "Web / Branding", label: "Motion / Print" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-64 h-[42rem] w-[42rem] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(29,78,216,0.13) 0%, rgba(29,78,216,0) 68%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-32 md:pt-28">
        <Reveal as="h1">
          <span className="block text-[clamp(2.75rem,9vw,7rem)] font-medium leading-[0.94] tracking-[-0.03em]">
            Anton Maynik
          </span>
          <span className="mt-2 block text-[clamp(1.75rem,5.5vw,4rem)] font-medium leading-[1.02] tracking-[-0.025em] text-muted md:mt-4">
            Lead Graphic Designer
          </span>
        </Reveal>

        <Reveal as="p" delay={120}>
          <span className="mt-9 block max-w-[46ch] text-[18px] leading-[1.6] text-ink/80 md:mt-12 md:text-[22px]">
            Создаю визуальные решения для брендов, цифровых продуктов и
            маркетинговых коммуникаций.
          </span>
        </Reveal>

        <Reveal as="div" delay={200} className="mt-10 flex flex-wrap gap-3 md:mt-14">
          <Link
            href="#work"
            className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-accent"
          >
            Посмотреть проекты
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-hairline px-7 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:border-ink"
          >
            Связаться
          </Link>
        </Reveal>

        <dl className="mt-20 grid grid-cols-1 gap-px border-t border-hairline sm:grid-cols-3 md:mt-32">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.value}
              as="div"
              delay={index * 90}
              className="border-b border-hairline py-7 sm:border-b-0 sm:pr-8"
            >
              <dt className="text-[clamp(1.5rem,2.4vw,2.125rem)] font-medium leading-tight tracking-tight">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-[15px] text-muted">{stat.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
