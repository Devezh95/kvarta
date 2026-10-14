import LeadForm from "../LeadForm";
import Container from "../ui/Container";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-caramel">
              Давайте знакомиться
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Подберём кофе под ваш вкус
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-muted">
              Расскажите, что вам интересно. Поможем выбрать зерно, ответим на
              вопросы или расскажем, как работает подписка.
            </p>

            <div className="mt-8 space-y-4 text-sm text-muted">
              <p>Обжарка — каждый четверг</p>
              <p>Доставка по Минску — по пятницам</p>
              <p>Самовывоз: ул. Короля, 9</p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#35271f]/10 bg-[#eee5d9] p-6 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
