import Container from "../ui/Container";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-caramel">
            Минская мастерская · с 2019 года
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            Хороший кофе начинается с обжарки.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
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

          <p className="mt-8 text-sm text-muted">
            Свежая обжарка каждый четверг · Доставка по Минску
          </p>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#d9c4a8] p-8 md:min-h-[500px]">
          <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[#b38a66]/30 blur-2xl" />

          <div className="absolute bottom-10 right-8 h-40 w-40 rounded-full bg-[#8b5e3c]/20 blur-3xl" />

          <div className="relative w-full max-w-sm rotate-[-3deg] rounded-sm bg-[#35271f] px-8 py-12 text-center text-cream shadow-2xl">
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
      </Container>
    </section>
  );
}
