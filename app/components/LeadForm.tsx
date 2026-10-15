"use client";

import { useState } from "react";

type Interest = "subscription" | "one-off" | "question";

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState<Interest>("one-off");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<FormStatus>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setStatus(null);
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams(window.location.search);

      const attribution = {
        source: params.get("source") ?? "",
        ad: params.get("ad") ?? "",
        landingPage: window.location.href,
        utmSource: params.get("utm_source") ?? "",
        utmMedium: params.get("utm_medium") ?? "",
        utmCampaign: params.get("utm_campaign") ?? "",
      };

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          interest,
          comment,
          attribution,
        }),
      });

      const result: { message?: string } = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: result.message ?? "Не удалось отправить заявку.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: result.message ?? "Заявка успешно отправлена!",
      });

      setName("");
      setPhone("");
      setInterest("one-off");
      setComment("");
    } catch {
      setStatus({
        type: "error",
        message:
          "Не удалось связаться с сервером. Проверьте интернет и попробуйте ещё раз.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-coffee-border/10 bg-cream-dark p-6 sm:p-8"
    >
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
            minLength={2}
            maxLength={100}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ваше имя"
            className="w-full rounded-xl border border-coffee-border/15 bg-cream px-4 py-3 outline-none transition placeholder:text-muted-light focus:border-caramel"
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
            maxLength={40}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+375 29 123-45-67"
            className="w-full rounded-xl border border-coffee-border/15 bg-cream px-4 py-3 outline-none transition placeholder:text-muted-light focus:border-caramel"
          />
          <p className="mt-2 text-xs text-muted-light">
            Используйте белорусский номер, начинающийся с +375.
          </p>
        </div>

        <div>
          <label htmlFor="interest" className="mb-2 block text-sm font-medium">
            Что вас интересует?
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={interest}
            onChange={(event) => setInterest(event.target.value as Interest)}
            className="w-full rounded-xl border border-coffee-border/15 bg-cream px-4 py-3 outline-none transition focus:border-caramel"
          >
            <option value="one-off">Кофе на один заказ</option>
            <option value="subscription">Подписка на кофе</option>
            <option value="question">Есть вопрос</option>
          </select>
        </div>

        <div>
          <label htmlFor="comment" className="mb-2 block text-sm font-medium">
            Комментарий{" "}
            <span className="text-muted-light">(необязательно)</span>
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={3}
            maxLength={1000}
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Например, люблю кофе с шоколадными нотами"
            className="w-full resize-y rounded-xl border border-coffee-border/15 bg-cream px-4 py-3 outline-none transition placeholder:text-muted-light focus:border-caramel"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-caramel px-6 py-4 font-medium text-white transition hover:bg-caramel-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Отправляем..." : "Отправить заявку"}
        </button>

        {status && (
          <p
            role="status"
            aria-live="polite"
            className={`rounded-xl p-4 text-sm leading-6 ${
              status.type === "success"
                ? "bg-[#dce8d5] text-[#29462a]"
                : "bg-[#f4d9d2] text-[#762f24]"
            }`}
          >
            {status.message}
          </p>
        )}

        <p className="text-xs leading-5 text-muted-light">
          Отправляя заявку, вы соглашаетесь на использование указанных
          контактных данных для ответа на ваше обращение.
        </p>
      </div>
    </form>
  );
}
