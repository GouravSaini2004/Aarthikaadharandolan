type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, light }: Props) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className={`mb-3 text-xs font-black uppercase tracking-[.2em] ${light ? "text-[var(--gold)]" : "text-[var(--red)]"}`}>
        {eyebrow}
      </div>
      <h2 className={`text-balance text-3xl font-black tracking-tight sm:text-4xl ${light ? "text-white" : "text-[var(--navy)]"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 ${light ? "text-white/65" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
