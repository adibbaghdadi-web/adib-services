type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered,
}: Props) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          {eyebrow}
        </span>
      ) : null}

      <h2 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="leading-8 text-white/70">{description}</p>
      ) : null}
    </div>
  );
}