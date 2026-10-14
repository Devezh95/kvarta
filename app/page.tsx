import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e8] text-[#35271f]">
      <header className="border-b border-[#35271f]/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            кварта<span className="text-[#a65e3b]">.</span>
          </Link>

          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#coffee" className="hover:text-[#a65e3b]">
              Наш кофе
            </a>
            <a href="#about" className="hover:text-[#a65e3b]">
              О мастерской
            </a>
            <a href="#delivery" className="hover:text-[#a65e3b]">
              Доставка
            </a>
          </nav>

          <a
            href="#coffee"
            className="rounded-full bg-[#35271f] px-5 py-3 text-sm text-white transition hover:bg-[#a65e3b]"
          >
            Выбрать кофе
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#a65e3b]">
            Минская мастерская · с 2019 года
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            Хороший кофе начинается с обжарки.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#6c5a4d]">
            Обжариваем небольшими партиями по 5 кг. Отправляем кофе по пятницам,
            чтобы он попадал к вам свежим.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#coffee"
              className="rounded-full bg-[#a65e3b] px-7 py-4 font-medium text-white transition hover:bg-[#87482c]"
            >
              Выбрать свой кофе
            </a>
            <a
              href="#about"
              className="rounded-full border border-[#35271f]/25 px-7 py-4 font-medium transition hover:bg-[#eae0d3]"
            >
              Наша история
            </a>
          </div>

          <p className="mt-8 text-sm text-[#6c5a4d]">
            Свежая обжарка каждый четверг · Доставка по Минску
          </p>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#d9c4a8] p-8 md:min-h-[500px]">
          <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[#b38a66]/30 blur-2xl" />
          <div className="absolute bottom-10 right-8 h-40 w-40 rounded-full bg-[#8b5e3c]/20 blur-3xl" />

          <div className="relative w-full max-w-sm rotate-[-3deg] rounded-sm bg-[#35271f] px-8 py-12 text-center text-[#f5f0e8] shadow-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d9b99b]">
              Coffee roasters
            </p>
            <div className="my-8 border-y border-[#f5f0e8]/30 py-7">
              <p className="text-6xl font-semibold tracking-tight">КВАРТА</p>
              <p className="mt-3 text-sm tracking-[0.2em]">МИНСК · 2019</p>
            </div>
            <p className="text-sm text-[#d9b99b]">
              Маленькие партии. Большой вкус.
            </p>
          </div>

          <span className="absolute bottom-6 left-6 text-xs uppercase tracking-widest text-[#6c4b34]">
            Обжариваем с вниманием
          </span>
        </div>
      </section>

      <section id="about" className="border-t border-[#35271f]/15 bg-[#eee5d9]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#a65e3b]">
              Небольшая мастерская в Минске
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Мы знаем, каким должен быть ваш следующий кофе.
            </h2>
            <p className="mt-6 leading-8 text-[#6c5a4d]">
              «Кварта» появилась в 2019 году. Аня и Дмитрий раньше работали
              бариста и хорошо знают, как много зависит от зерна, обжарки и
              времени после неё.
            </p>
            <p className="mt-4 leading-8 text-[#6c5a4d]">
              Поэтому мы не гонимся за объёмами: обжариваем по 5 кг за раз,
              каждую партию — с вниманием к вкусу. Обжарка проходит по
              четвергам, а уже в пятницу кофе отправляется к вам.
            </p>
          </div>

          <div className="rounded-3xl bg-[#d9c4a8] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7b4b31]">
              Наш принцип
            </p>
            <p className="mt-5 text-3xl font-semibold leading-snug">
              Не хранить месяцами. Обжарить, упаковать, доставить.
            </p>
            <div className="mt-8 space-y-5 border-t border-[#35271f]/15 pt-6">
              <div className="flex gap-4">
                <span className="font-semibold text-[#a65e3b]">01</span>
                <p className="text-sm leading-6 text-[#6c5a4d]">
                  Четверг — свежая обжарка небольшими партиями.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-[#a65e3b]">02</span>
                <p className="text-sm leading-6 text-[#6c5a4d]">
                  Пятница — отправляем заказы по Минску.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-[#a65e3b]">03</span>
                <p className="text-sm leading-6 text-[#6c5a4d]">
                  Через 1–3 дня после обжарки кофе уже у вас.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="coffee" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#a65e3b]">
              Обжариваем сами
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Кофе на каждый день
            </h2>
          </div>
          <p className="max-w-md leading-7 text-[#6c5a4d]">
            Подбираем зерно под разные способы заваривания — от лёгкого фильтра
            до насыщенного эспрессо.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-[#35271f]/10 bg-[#eee5d9]">
            <div className="flex h-52 items-center justify-center bg-[#e2d2bd]">
              <div className="flex h-36 w-28 flex-col items-center justify-center bg-[#f5f0e8] shadow-lg">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#a65e3b]">
                  Кварта
                </span>
                <span className="mt-3 text-center text-sm font-semibold">
                  ETHIOPIA
                </span>
                <span className="mt-1 text-xs text-[#6c5a4d]">Yirgacheffe</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">Эфиопия Иргачефф</h3>
                <span className="shrink-0 font-semibold">32 BYN</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#6c5a4d]">
                Цветочные ноты, бергамот и лёгкая обжарка.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-[#35271f]/10 pt-4 text-sm">
                <span>Зёрна · 250 г</span>
                <span className="rounded-full bg-[#d9c4a8] px-3 py-1">
                  Для фильтра
                </span>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-[#35271f]/10 bg-[#eee5d9]">
            <div className="flex h-52 items-center justify-center bg-[#d6b99b]">
              <div className="flex h-36 w-28 flex-col items-center justify-center bg-[#7b4b31] text-[#f5f0e8] shadow-lg">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#e4c8a8]">
                  Кварта
                </span>
                <span className="mt-3 text-center text-sm font-semibold">
                  COLOMBIA
                </span>
                <span className="mt-1 text-xs text-[#e4c8a8]">Huila</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">Колумбия Уила</h3>
                <span className="shrink-0 font-semibold">29 BYN</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#6c5a4d]">
                Мягкая сладость карамели и сочное красное яблоко.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-[#35271f]/10 pt-4 text-sm">
                <span>Зёрна · 250 г</span>
                <span className="rounded-full bg-[#d9c4a8] px-3 py-1">
                  На каждый день
                </span>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-[#35271f]/10 bg-[#eee5d9]">
            <div className="flex h-52 items-center justify-center bg-[#cbb49a]">
              <div className="flex h-36 w-28 flex-col items-center justify-center bg-[#49372b] text-[#f5f0e8] shadow-lg">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d9b99b]">
                  Кварта
                </span>
                <span className="mt-3 text-center text-sm font-semibold">
                  BRAZIL
                </span>
                <span className="mt-1 text-xs text-[#d9b99b]">Cerrado</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">Бразилия Серрадо</h3>
                <span className="shrink-0 font-semibold">26 BYN</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#6c5a4d]">
                Орех, шоколад и плотный вкус — отличный выбор для эспрессо.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-[#35271f]/10 pt-4 text-sm">
                <span>Зёрна · 250 г</span>
                <span className="rounded-full bg-[#d9c4a8] px-3 py-1">
                  Для эспрессо
                </span>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="flex flex-col justify-between gap-6 rounded-2xl bg-[#e2d2bd] p-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-[#a65e3b]">
                Без кофемашины
              </p>
              <h3 className="mt-2 text-2xl font-semibold">Дрип-пакеты</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-[#6c5a4d]">
                Любимый кофе в удобном формате. Залейте горячей водой — и
                готово.
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-2xl font-semibold">18 BYN</p>
              <p className="mt-1 text-sm text-[#6c5a4d]">10 штук</p>
            </div>
          </article>

          <article className="flex flex-col justify-between gap-6 rounded-2xl bg-[#35271f] p-7 text-[#f5f0e8] sm:flex-row sm:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-[#d9b99b]">
                Кофе каждый месяц
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                Подписка «Своя кварта»
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">
                Два разных пакета по 250 г каждый месяц. Доставку оплатим мы.
              </p>
            </div>
            <div className="shrink-0">
              <p className="text-2xl font-semibold">54 BYN</p>
              <p className="mt-1 text-sm text-white/70">в месяц</p>
            </div>
          </article>
        </div>
      </section>
            <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#a65e3b]">
              Давайте знакомиться
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Подберём кофе под ваш вкус
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-[#6c5a4d]">
              Расскажите, что вам интересно. Поможем выбрать зерно, ответим на
              вопросы или расскажем, как работает подписка.
            </p>
            <div className="mt-8 space-y-4 text-sm text-[#6c5a4d]">
              <p>Обжарка — каждый четверг</p>
              <p>Доставка по Минску — по пятницам</p>
              <p>Самовывоз: ул. Короля, 9</p>
            </div>
          </div>

          <form className="rounded-3xl border border-[#35271f]/10 bg-[#eee5d9] p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Как к вам обращаться?
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-[#35271f]/15 bg-[#f5f0e8] px-4 py-3 outline-none transition placeholder:text-[#8b7a6d] focus:border-[#a65e3b]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Номер телефона
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="+375 29 123-45-67"
                  className="w-full rounded-xl border border-[#35271f]/15 bg-[#f5f0e8] px-4 py-3 outline-none transition placeholder:text-[#8b7a6d] focus:border-[#a65e3b]"
                />
              </div>

              <div>
                <label htmlFor="interest" className="mb-2 block text-sm font-medium">
                  Что вас интересует?
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  defaultValue="one-off"
                  className="w-full rounded-xl border border-[#35271f]/15 bg-[#f5f0e8] px-4 py-3 outline-none transition focus:border-[#a65e3b]"
                >
                  <option value="one-off">Кофе на один заказ</option>
                  <option value="subscription">Подписка на кофе</option>
                  <option value="question">Есть вопрос</option>
                </select>
              </div>

              <div>
                <label htmlFor="comment" className="mb-2 block text-sm font-medium">
                  Комментарий <span className="text-[#8b7a6d]">(необязательно)</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  placeholder="Например, люблю кофе с шоколадными нотами"
                  className="w-full resize-y rounded-xl border border-[#35271f]/15 bg-[#f5f0e8] px-4 py-3 outline-none transition placeholder:text-[#8b7a6d] focus:border-[#a65e3b]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#a65e3b] px-6 py-4 font-medium text-white transition hover:bg-[#87482c]"
              >
                Отправить заявку
              </button>

              <p className="text-xs leading-5 text-[#8b7a6d]">
                Нажимая кнопку, вы отправляете контактные данные мастерской
                «Кварта» для связи по вашему обращению.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer id="delivery" className="bg-[#35271f] text-[#f5f0e8]">
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
                className="mt-5 inline-flex rounded-full bg-[#d9b99b] px-5 py-3 text-sm font-medium text-[#35271f] transition hover:bg-[#f5f0e8]"
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
    </main>
  );
}
