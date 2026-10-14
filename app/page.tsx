import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e8] text-[#35271f]">
      <header className="border-b border-[#35271f]/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-2xl font-bold tracking-tight">
            кварта<span className="text-[#a65e3b]">.</span>
          </a>

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
            Обжариваем небольшими партиями по 5 кг. Отправляем кофе по
            пятницам, чтобы он попадал к вам свежим.
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
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold">5 кг</p>
            <p className="mt-2 text-sm text-[#6c5a4d]">
              Обжариваем небольшими партиями
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Четверг</p>
            <p className="mt-2 text-sm text-[#6c5a4d]">
              День свежей обжарки
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold">1–3 дня</p>
            <p className="mt-2 text-sm text-[#6c5a4d]">
              От обжарки до вашей чашки
            </p>
          </div>
        </div>
      </section>

      <section id="coffee" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-[#a65e3b]">
          Скоро в этом разделе
        </p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Найдём кофе под ваш вкус
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-[#6c5a4d]">
          От цветочной Эфиопии до шоколадной Бразилии. Следующим шагом добавим
          ассортимент, цены и возможность оставить заявку.
        </p>
      </section>

      <footer id="delivery" className="bg-[#35271f] text-[#f5f0e8]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xl font-semibold">кварта.</p>
          <p className="text-sm text-white/70">
            Минск, ул. Короля, 9 · Самовывоз и доставка по пятницам
          </p>
        </div>
      </footer>
    </main>
  );
}
