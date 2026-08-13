import type { Project } from "@/lib/projects";

type Tone = { bg: string; dark: boolean };

/** GNM — фиолетовый градиент (в цвете фирменного Pantone 274 C). */
const PURPLE: Tone[] = [
  { bg: "linear-gradient(135deg,#0e0a2e 0%,#282555 55%,#4b3fa8 100%)", dark: true },
  { bg: "linear-gradient(160deg,#151034 0%,#332a6e 100%)", dark: true },
  { bg: "linear-gradient(135deg,#1c1640 0%,#3a2f82 55%,#5b4bc4 100%)", dark: true },
  { bg: "linear-gradient(200deg,#100b30 0%,#2c2566 60%,#463aa0 100%)", dark: true },
];

/** GlobalNet — синий градиент (как было). */
const BLUE: Tone[] = [
  { bg: "linear-gradient(135deg,#081437 0%,#15307e 52%,#1d4ed8 100%)", dark: true },
  { bg: "linear-gradient(135deg,#12266b 0%,#2d5ce6 100%)", dark: true },
  { bg: "linear-gradient(135deg,#060d24 0%,#1739a8 100%)", dark: true },
  { bg: "linear-gradient(135deg,#15307e 0%,#1d4ed8 60%,#4f7ef5 100%)", dark: true },
];

/**
 * Остальные проекты — свой цвет под каждый, взятый из фактического цвета
 * прежней обложки/материалов проекта.
 */
const OTHER: Record<string, Tone> = {
  juzzle: { bg: "linear-gradient(135deg,#040a1f 0%,#0c2354 55%,#123a8f 100%)", dark: true },
  qummy: { bg: "linear-gradient(135deg,#ff8a00 0%,#ff5a1f 100%)", dark: true },
  yoyote: { bg: "linear-gradient(160deg,#fafafb 0%,#e7e7ea 100%)", dark: false },
  "mojo-cacao": { bg: "linear-gradient(160deg,#e7e0d2 0%,#cfc3ab 100%)", dark: false },
  "orange-toys": { bg: "linear-gradient(150deg,#fff4e8 0%,#ffd9ad 100%)", dark: false },
  "beryozki-diploma": { bg: "linear-gradient(150deg,#8a7215 0%,#b6961e 55%,#efe6c2 100%)", dark: true },
  "tea-launch": { bg: "linear-gradient(135deg,#e23b6a 0%,#c94fae 55%,#f2c94c 100%)", dark: true },
  artflash: { bg: "linear-gradient(150deg,#3c4a6b 0%,#5b6f9c 100%)", dark: true },
  metro: { bg: "linear-gradient(135deg,#5865c9 0%,#8b93e8 60%,#f4e04d 100%)", dark: true },
  tenchat: { bg: "linear-gradient(135deg,#6e0f0f 0%,#c31c1c 55%,#ff4433 100%)", dark: true },
};

function getTone(project: Project): Tone {
  if (project.companyId === "gnm") return PURPLE[project.tone % PURPLE.length];
  if (project.companyId === "globalnet") return BLUE[project.tone % BLUE.length];
  return OTHER[project.slug] ?? PURPLE[0];
}

type ProjectCoverProps = {
  project: Project;
  index: number;
  className?: string;
  /** Крупная подача — обложка кейса. */
  large?: boolean;
  /** Для первой картинки на экране — грузить без задержки. */
  priority?: boolean;
};

export default function ProjectCover({
  project,
  index,
  className = "",
  large = false,
}: ProjectCoverProps) {
  const tone = getTone(project);

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
