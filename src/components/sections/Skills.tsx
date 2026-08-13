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
      </div>
    </section>
  );
}
