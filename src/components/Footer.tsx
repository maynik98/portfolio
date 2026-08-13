"use client";

import Link from "next/link";
import { activeLinks, contactMethods, site } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { useLanguage } from "@/lib/language";

export default function Footer() {
  const { lang } = useLanguage();
  const t = getDictionary(lang);

  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10 md:py-16">
        <div>
          <p className="text-[22px] font-medium tracking-tight md:text-[26px]">
            {site.name}
          </p>
          <p className="mt-1 text-[15px] text-muted">{site.role}</p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex flex-col gap-2 md:items-end">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                {...(method.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="text-[15px] transition-colors hover:text-accent"
              >
                {method.value}
              </a>
            ))}
          </div>

          {activeLinks.length > 0 && (
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {activeLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[15px] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <p className="mt-2 text-[13px] text-muted">
            © {new Date().getFullYear()} {site.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
