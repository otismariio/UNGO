type TextBlock = {
  heading: string;
  text: string;
};

type ValueItem = {
  icon: "equity" | "impact" | "community" | "accountability" | "sustainability";
  title: string;
};

const icons: Record<ValueItem["icon"], React.ReactNode> = {
  equity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M12 3v18M5 7l-3 6a3 3 0 0 0 6 0l-3-6ZM19 7l-3 6a3 3 0 0 0 6 0l-3-6ZM5 7h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  impact: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.55 1 1.3 1 2.5h6c0-1.2.4-1.95 1-2.5A6 6 0 0 0 12 3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM23 20v-1a4 4 0 0 0-3-3.87M16 4.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  accountability: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6l-8-3ZM9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sustainability: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M6 21c9 0 12-6 12-14v-1h-1C9 6 6 12 6 21ZM6 21c0-4 2-7 5-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

type MissionVisionValuesProps = {
  id: string;
  title: string;
  mission: TextBlock;
  vision: TextBlock;
  valuesHeading: string;
  values: ValueItem[];
};

export default function MissionVisionValues({
  id,
  title,
  mission,
  vision,
  valuesHeading,
  values,
}: MissionVisionValuesProps) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-ink/5 bg-cream py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="h-1 w-full bg-terracotta" />
            <h3 className="mt-6 font-bold font-display text-xl text-ink">{mission.heading}</h3>
            <p className="mt-4 text-ink/70">{mission.text}</p>
          </div>
          <div>
            <div className="h-1 w-full bg-terracotta" />
            <h3 className="mt-6 font-bold font-display text-xl text-ink">{vision.heading}</h3>
            <p className="mt-4 text-ink/70">{vision.text}</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border-2 border-ink md:grid-cols-[1fr_2fr]">
          <div className="flex items-center bg-gradient-to-br from-forest to-forest-dark p-10">
            <h3 className="font-display text-4xl italic text-cream md:text-5xl">
              {valuesHeading}
            </h3>
          </div>
          <div className="divide-y divide-ink/10 bg-cream">
            {values.map((value) => (
              <div key={value.title} className="flex items-center gap-4 px-8 py-6">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-sand text-terracotta">
                  {icons[value.icon]}
                </span>
                <span className="font-display text-lg text-ink">{value.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}