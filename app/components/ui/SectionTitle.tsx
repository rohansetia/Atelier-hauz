interface Props {
  eyebrow: string;
  title: string;
}

export default function SectionTitle({
  eyebrow,
  title,
}: Props) {
  return (
    <div className="mb-16">
      <p className="uppercase tracking-[0.4em] text-[#C8A56B] mb-4">
        {eyebrow}
      </p>

      <h2 className="text-5xl md:text-6xl font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}