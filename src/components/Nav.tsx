"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";
import { handleHashLinkClick } from "@/lib/scrollToHash";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = getDictionary(lang);

  const LINKS = [
    { href: "/#about", label: t.nav.about },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#work", label: t.nav.work },
    { href: "/#process", label: t.nav.process },
    { href: "/#skills", label: t.nav.skills },
    { href: "/resume", label: t.nav.resume },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:h-20 md:px-10">
        <Link
          href="/"
          aria-label={t.nav.home}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-60"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="Anton Maynik"
            width={818}
            height={818}
            priority
            className="h-8 w-8 object-contain md:h-9 md:w-9"
          />
          <span className="text-[15px] font-medium tracking-tight">
            Anton Maynik
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden items-center gap-9 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleHashLinkClick(event, link.href)}
                className="text-[14px] text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(event) => handleHashLinkClick(event, "/#contact")}
              className="rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-accent"
            >
              {t.nav.contact}
            </Link>
          </nav>

          <button
            type="button"
            onClick={toggle}
            aria-label="RU / EN"
            className="flex items-center gap-1 rounded-full border border-hairline px-3 py-1.5 text-[12px] font-medium tracking-wide transition-colors duration-300 hover:border-ink"
          >
            <span className={lang === "ru" ? "text-ink" : "text-muted"}>RU</span>
            <span className="text-muted">/</span>
            <span className={lang === "en" ? "text-ink" : "text-muted"}>EN</span>
          </button>

          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                  open ? "top-[5px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                  open ? "top-[5px] -rotate-45" : "top-[10px]"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-white px-6 pb-6 pt-2 md:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => {
                setOpen(false);
                handleHashLinkClick(event, link.href);
              }}
              className="block border-b border-hairline py-4 text-[17px] tracking-tight last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={(event) => {
              setOpen(false);
              handleHashLinkClick(event, "/#contact");
            }}
            className="mt-4 block rounded-full bg-ink px-5 py-3.5 text-center text-[15px] font-medium text-white"
          >
            {t.nav.contact}
          </Link>
        </nav>
      )}
    </header>
  );
}
