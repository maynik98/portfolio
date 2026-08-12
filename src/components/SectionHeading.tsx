import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Reveal as="div" className="flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
          {label}
        </span>
      </Reveal>

      <Reveal as="h2" delay={80}>
        <span className="mt-5 block max-w-[22ch] text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.04] tracking-tight">
          {title}
        </span>
      </Reveal>

      {description && (
        <Reveal as="p" delay={140}>
          <span className="mt-6 block max-w-[52ch] text-[17px] leading-[1.65] text-muted md:text-[19px]">
            {description}
          </span>
        </Reveal>
      )}
    </div>
  );
}
