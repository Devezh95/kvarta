import Container from "../ui/Container";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-[#35271f]/15 bg-[#eee5d9]"
    >
      <Container className="grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-caramel">
            Небольшая мастерская в Минске
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Мы знаем, каким должен быть ваш следующий кофе.
          </h2>

          <p className="mt-6 leading-8 text-muted">
            «Кварта» появилась в 2019 году. Аня и Дмитрий раньше работали
            бариста и хорошо знают, как много зависит от зерна, обжарки и
            времени после неё.
          </p>

          <p className="mt-4 leading-8 text-muted">
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
              <span className="font-semibold text-caramel">01</span>
              <p className="text-sm leading-6 text-muted">
                Четверг — свежая обжарка небольшими партиями.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="font-semibold text-caramel">02</span>
              <p className="text-sm leading-6 text-muted">
                Пятница — отправляем заказы по Минску.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="font-semibold text-caramel">03</span>
              <p className="text-sm leading-6 text-muted">
                Через 1–3 дня после обжарки кофе уже у вас.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}