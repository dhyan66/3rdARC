export default function SectionBlock({
  title,
  body
}: {
  title: string;
  body: string[];
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-2xl font-light">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed text-ink/70">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
