import CoffeeCard from "../ui/CoffeeCard";
import Container from "../ui/Container";

export default function CoffeeSection() {
  return (
    <section id="coffee" className="py-20 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-caramel">
              Обжариваем сами
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Кофе на каждый день
            </h2>
          </div>

          <p className="max-w-md leading-7 text-muted">
            Подбираем зерно под разные способы заваривания — от лёгкого фильтра
            до насыщенного эспрессо.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CoffeeCard
            name="ETHIOPIA"
            title="Эфиопия Иргачефф"
            price={32}
            description="Цветочные ноты, бергамот и лёгкая обжарка."
            variety="Yirgacheffe"
            label="Для фильтра"
            panelColor="bg-sand-light"
            packageColor="bg-cream"
            accentColor="text-caramel"
          />

          <CoffeeCard
            name="COLOMBIA"
            title="Колумбия Уила"
            price={29}
            description="Мягкая сладость карамели и сочное красное яблоко."
            variety="Huila"
            label="На каждый день"
            panelColor="bg-[#d6b99b]"
            packageColor="bg-[#7b4b31]"
            packageTextColor="text-cream"
            accentColor="text-[#e4c8a8]"
          />

          <CoffeeCard
            name="BRAZIL"
            title="Бразилия Серрадо"
            price={26}
            description="Орех, шоколад и плотный вкус — отличный выбор для эспрессо."
            variety="Cerrado"
            label="Для эспрессо"
            panelColor="bg-[#cbb49a]"
            packageColor="bg-[#49372b]"
            packageTextColor="text-cream"
            accentColor="text-[#d9b99b]"
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="flex flex-col justify-between gap-6 rounded-2xl bg-sand-light p-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-caramel">
                Без кофемашины
              </p>

              <h3 className="mt-2 text-2xl font-semibold">Дрип-пакеты</h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                Любимый кофе в удобном формате. Залейте горячей водой — и
                готово.
              </p>
            </div>

            <div className="shrink-0">
              <p className="text-2xl font-semibold">18 BYN</p>
              <p className="mt-1 text-sm text-muted">10 штук</p>
            </div>
          </article>

          <article className="flex flex-col justify-between gap-6 rounded-2xl bg-coffee p-7 text-cream sm:flex-row sm:items-center">
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
      </Container>
    </section>
  );
}
