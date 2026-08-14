"use client";

import { useEffect } from "react";

/**
 * Разграничивает два случая, которые браузер по умолчанию не различает:
 *
 * 1. Первый заход на сайт и обновление страницы (F5) — всегда должны
 *    открывать страницу сверху (если в адресе нет якоря вроде #work).
 * 2. Переход кнопкой «Назад» из кейса/страницы компании на главную — должен
 *    вернуть туда, где пользователь был (например, к сетке кейсов), а не
 *    наверх. Это штатное поведение браузера, и его трогать не нужно —
 *    достаточно не мешать ему, оставив history.scrollRestoration = "auto".
 */
export default function ScrollTopOnLoad() {
  useEffect(() => {
    const [navigation] = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];

    const isBackForward = navigation?.type === "back_forward";

    if (!isBackForward && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
