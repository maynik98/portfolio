"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";

export default function Skills() {
  const { lang } = useLanguage();
  const t = getDictionary(lang);

  return (
    <section id="skills" className="scroll-mt-20 border-t border-hairline">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <SectionHeading label={t.skills.label} title={t.skills.title} />

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {t.skills.groups.map((group, index) => (
            <Reveal
              key={group.title}
              as="div"
              delay={index * 90}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-3xl border border-hairline p-8 transition-colors duration-300 hover:border-ink/20 md:p-10">
                <h3 className="text-[20px] font-medium tracking-tight md:text-[22px]">
                  {group.title}
                </h3>
                <ul className="mt-7 space-y-0">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-hairline py-3.5 text-[16px] text-muted last:pb-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delay={t.skills.groups.length * 90} className="mt-6">
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(29,78,216,0.5) 0%, rgba(29,78,216,0) 70%)",
              }}
            />

            <div className="relative flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/50">
                {t.skills.aiHighlight.label}
              </span>
            </div>

            <h3 className="relative mt-4 max-w-[36ch] text-[24px] font-medium leading-[1.15] tracking-tight md:text-[30px]">
              {t.skills.aiHighlight.title}
            </h3>

            <p className="relative mt-4 max-w-[62ch] text-[16px] leading-[1.65] text-white/65 md:text-[17px]">
              {t.skills.aiHighlight.body}
            </p>

            <div className="relative mt-7 flex flex-wrap gap-2.5">
              {t.skills.aiHighlight.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/20 px-4 py-2 text-[14px] font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
