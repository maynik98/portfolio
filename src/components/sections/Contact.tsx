import Link from "next/link";
import Reveal from "@/components/Reveal";
import { activeLinks, contactMethods } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-hairline bg-ink text-white"
    >
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-24 md:px-10 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-64 -left-32 h-[38rem] w-[38rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(29,78,216,0.45) 0%, rgba(29,78,216,0) 70%)",
          }}
        />

        <div className="relative">
          <Reveal as="div" className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/50">
              Контакты
            </span>
          </Reveal>

          <Reveal as="h2" delay={80}>
            <span className="mt-5 block max-w-[24ch] text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[1.04] tracking-tight">
              Открыт к новым проектам и сотрудничеству.
            </span>
          </Reveal>

          <Reveal as="p" delay={140}>
            <span className="mt-6 block max-w-[52ch] text-[17px] leading-[1.65] text-white/60 md:text-[19px]">
              Расскажите о задаче — обсудим, как её можно решить через дизайн.
            </span>
          </Reveal>

          <div className="mt-12 border-t border-white/10 md:mt-16">
            {contactMethods.map((method, index) => (
              <Reveal key={method.label} as="div" delay={200 + index * 70}>
                <a
                  href={method.href}
                  {...("external" in method && method.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="group flex flex-col gap-2 border-b border-white/10 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8 md:py-7"
                >
                  <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/40">
                    {method.label}
                  </span>
                  <span className="inline-flex items-baseline gap-4 text-[clamp(1.375rem,3.2vw,2.25rem)] font-medium tracking-tight">
                    <span className="border-b border-white/20 pb-1 transition-colors duration-300 group-hover:border-accent">
                      {method.value}
                    </span>
                    <span
                      aria-hidden
                      className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {activeLinks.length > 0 && (
            <Reveal as="div" delay={260} className="mt-10 flex flex-wrap gap-3">
              {activeLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-[15px] font-medium transition-colors duration-300 hover:border-white/60"
                >
                  {link.label}
                </Link>
              ))}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
