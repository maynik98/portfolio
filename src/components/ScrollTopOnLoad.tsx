"use client";

import { useEffect } from "react";

/**
 * Браузеры по умолчанию восстанавливают прежнюю позицию скролла при
 * обновлении страницы (history.scrollRestoration = "auto"). На этом сайте
 * это не нужно — при обновлении страница всегда должна открываться сверху,
 * если только в адресе нет якоря (#work, #about и т.д.).
 */
export default function ScrollTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
