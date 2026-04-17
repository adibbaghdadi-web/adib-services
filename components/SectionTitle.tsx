type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">{title}</h2>

      {description ? (
        <p className="mt-4 text-base leading-8 text-white/65 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}