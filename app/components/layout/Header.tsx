
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-coffee-border/15">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          кварта<span className="text-caramel">.</span>
        </Link>

        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#coffee" className="hover:text-caramel">
            Наш кофе
          </a>

          <a href="#about" className="hover:text-caramel">
            О мастерской
          </a>

          <a href="#delivery" className="hover:text-caramel">
            Доставка
          </a>
        </nav>

        <a
          href="#coffee"
          className="rounded-full bg-coffee px-5 py-3 text-sm text-white transition hover:bg-caramel"
        >
          Выбрать кофе
        </a>
      </div>
    </header>
  );
}
