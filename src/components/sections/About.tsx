"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";

export default function About() {
  const { lang } = useLanguage();
  const t = getDictionary(lang);

  return (
    <section id="about" className="scroll-mt-20 border-t border-hairline">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <SectionHeading
            className="md:col-span-6"
            label={t.about.label}
            title={t.about.title}
          />

          <div className="space-y-6 md:col-span-6 md:pt-16">
            <Reveal as="p" delay={60}>
              <span className="block text-[17px] leading-[1.7] text-muted md:text-[19px]">
                {t.about.paragraph1}
              </span>
            </Reveal>
            <Reveal as="p" delay={140}>
              <span className="block text-[17px] leading-[1.7] text-muted md:text-[19px]">
                {t.about.paragraph2}
              </span>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <Reveal as="p">
            <span className="block text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
              {t.about.directionsLabel}
            </span>
          </Reveal>

          <ul className="mt-8 grid grid-cols-1 border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {t.about.directions.map((direction, index) => (
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
