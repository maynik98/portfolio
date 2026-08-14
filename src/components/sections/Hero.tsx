"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";
import { handleHashLinkClick } from "@/lib/scrollToHash";

export default function Hero() {
  const { lang } = useLanguage();
  const t = getDictionary(lang);

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
        <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-10">
          <div className="md:col-span-7">
            <Reveal as="h1">
              <span className="block text-[clamp(2.75rem,9vw,7rem)] font-medium leading-[0.94] tracking-[-0.03em]">
                Anton Maynik
              </span>
              <span className="mt-2 block text-[clamp(1.75rem,5.5vw,4rem)] font-medium leading-[1.02] tracking-[-0.025em] text-muted md:mt-4">
                {t.hero.role}
              </span>
            </Reveal>

            <Reveal as="p" delay={120}>
              <span className="mt-9 block max-w-[46ch] text-[18px] leading-[1.6] text-ink/80 md:mt-12 md:text-[22px]">
                {t.hero.subtitle}
              </span>
            </Reveal>

            <Reveal as="div" delay={200} className="mt-10 flex flex-wrap gap-3 md:mt-14">
              <Link
                href="/#work"
                onClick={(event) => handleHashLinkClick(event, "/#work")}
                className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-accent"
              >
                {t.hero.viewWork}
              </Link>
              <Link
                href="/#contact"
                onClick={(event) => handleHashLinkClick(event, "/#contact")}
                className="rounded-full border border-hairline px-7 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:border-ink"
              >
                {t.hero.contact}
              </Link>
            </Reveal>
          </div>

          <Reveal as="div" delay={140} className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-[2rem] bg-ink md:max-w-none">
              <Image
                src="/photo/anton.jpg"
                alt="Anton Maynik"
                fill
                priority
                sizes="(max-width: 768px) 88vw, 420px"
                className="object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
              />
            </div>
          </Reveal>
        </div>

        <dl className="mt-20 grid grid-cols-1 gap-px border-t border-hairline sm:grid-cols-3 md:mt-32">
          {t.hero.stats.map((stat, index) => (
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
