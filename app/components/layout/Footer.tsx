
export default function Footer() {
  return (
    <footer id="delivery" className="bg-coffee text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold">кварта.</p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
              Кофе небольшой обжарки для дома, работы и неспешных утр.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Где нас найти</h2>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Минск, ул. Короля, 9
              <br />
              Самовывоз из мастерской
            </p>

            <p className="mt-3 text-sm leading-7 text-white/70">
              Пн–Пт: 8:00–20:00
              <br />
              Сб–Вс: 10:00–18:00
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Доставка</h2>

            <p className="mt-4 text-sm leading-7 text-white/70">
              По Минску — по пятницам.
              <br />
              Бесплатно при заказе от 50 BYN.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex rounded-full bg-[#d9b99b] px-5 py-3 text-sm font-medium text-coffee transition hover:bg-cream"
            >
              Оставить заявку
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs text-white/50">
          © 2026 Кварта. Кофе с вниманием к деталям.
        </div>
      </div>
    </footer>
  );
}
