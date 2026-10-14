
type CoffeeCardProps = {
  title: string;
  name: string;
  price: number;
  description: string;
  variety: string;
  label: string;
  panelColor: string;
  packageColor: string;
  packageTextColor?: string;
  accentColor: string;
};

export default function CoffeeCard({
  name,
  title,
  price,
  description,
  variety,
  label,
  panelColor,
  packageColor,
  packageTextColor = "text-coffee",
  accentColor,
}: CoffeeCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-coffee-border/10 bg-cream-dark">
      <div
        className={`flex h-52 items-center justify-center ${panelColor}`}
      >
        <div
          className={`flex h-36 w-28 flex-col items-center justify-center shadow-lg ${packageColor} ${packageTextColor}`}
        >
          <span
            className={`text-[10px] uppercase tracking-[0.2em] ${accentColor}`}
          >
            Кварта
          </span>

          <span className="mt-3 text-center text-sm font-semibold">
            {name}
          </span>

          <span className={`mt-1 text-xs ${accentColor}`}>{variety}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold">{title}</h3>

          <span className="shrink-0 font-semibold">{price} BYN</span>
        </div>

        <p className="mt-3 text-sm leading-6 text-muted">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-coffee-border/10 pt-4 text-sm">
          <span>Зёрна · 250 г</span>

          <span className="rounded-full bg-sand px-3 py-1">
            {label}
          </span>
        </div>
      </div>
    </article>
  );
}
