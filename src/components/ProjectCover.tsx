import Image from "next/image";
import type { Project } from "@/lib/projects";

/** Фон рамки под обложкой. Тёмный — под тёмные макеты, светлый — под светлые. */
const FRAME = {
  dark: "bg-[#0a0f2b]",
  light: "bg-surface ring-1 ring-inset ring-hairline",
} as const;

/**
 * Градиентные заглушки — остаются только у кейсов без реальных материалов.
 */
const TONES = [
  { bg: "linear-gradient(135deg,#081437 0%,#15307e 52%,#1d4ed8 100%)", dark: true },
  { bg: "linear-gradient(135deg,#fafafb 0%,#eef2ff 100%)", dark: false },
  { bg: "linear-gradient(160deg,#eef2ff 0%,#dae2fa 100%)", dark: false },
  { bg: "linear-gradient(135deg,#12266b 0%,#2d5ce6 100%)", dark: true },
  { bg: "linear-gradient(135deg,#060d24 0%,#1739a8 100%)", dark: true },
  { bg: "linear-gradient(135deg,#f6f6f7 0%,#e7ecf8 100%)", dark: false },
  { bg: "linear-gradient(200deg,#eef2ff 0%,#e2e8fb 100%)", dark: false },
  { bg: "linear-gradient(135deg,#15307e 0%,#1d4ed8 60%,#4f7ef5 100%)", dark: true },
];

type ProjectCoverProps = {
  project: Project;
  index: number;
  className?: string;
  /** Крупная подача — featured-карточка и обложка кейса. */
  large?: boolean;
  /** Для первой картинки на экране — грузить без задержки. */
  priority?: boolean;
};

export default function ProjectCover({
  project,
  index,
  className = "",
  large = false,
  priority = false,
}: ProjectCoverProps) {
  if (project.cover) {
    return (
      <div
        className={`relative isolate overflow-hidden ${FRAME[project.cover.frame]} ${className}`}
      >
        <Image
          src={project.cover.src}
          alt={`${project.title} — ${project.categories[0]}`}
          fill
          sizes={
            large
              ? "(max-width: 768px) 100vw, 1152px"
              : "(max-width: 768px) 100vw, 576px"
          }
          className="object-contain"
          priority={priority}
        />
      </div>
    );
  }

  const tone = TONES[project.tone % TONES.length];

  return (
    <div
      className={`relative isolate flex flex-col justify-between overflow-hidden ${
        large ? "p-8 md:p-14" : "p-7 md:p-9"
      } ${tone.dark ? "text-white" : "text-ink"} ${className}`}
      style={{ backgroundImage: tone.bg }}
    >
      {tone.dark ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-1/4 -top-1/3 h-[130%] w-[80%] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-hairline"
        >
          <div className="absolute -bottom-1/3 -right-[15%] h-[85%] w-[55%] rounded-full border border-accent/15" />
          <div className="absolute -bottom-1/4 -right-[5%] h-[65%] w-[40%] rounded-full border border-accent/10" />
        </div>
      )}

      <span
        className={`relative font-medium tabular-nums ${
          tone.dark ? "text-white/50" : "text-muted"
        } ${large ? "text-[15px]" : "text-[13px]"}`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3
        className={`relative max-w-[16ch] font-medium leading-[1.02] tracking-tight ${
          large
            ? "text-[clamp(2rem,5vw,3.75rem)]"
            : "text-[clamp(1.65rem,3.4vw,2.5rem)]"
        }`}
      >
        {project.title}
      </h3>
    </div>
  );
}
