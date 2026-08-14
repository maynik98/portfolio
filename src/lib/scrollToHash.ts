import type { MouseEvent } from "react";

/**
 * Next.js Link иногда не долистывает страницу до якоря — например, если
 * href отличается только хэшем и роутер решает, что переход "никуда", или
 * если элемент к моменту клика ещё не смонтирован после смены языка.
 * Чтобы кнопки вроде «Посмотреть проекты» работали стабильно, сами скроллим
 * к элементу и обновляем хэш в адресе, а Link оставляем как fallback —
 * на случай перехода с другой страницы (/work/[slug] → /#work) или клика
 * с зажатым Cmd/Ctrl (открыть в новой вкладке).
 */
export function handleHashLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;

  const id = href.slice(hashIndex + 1);
  const target = document.getElementById(id);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
}
