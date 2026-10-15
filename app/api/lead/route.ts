
import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

type Interest = "subscription" | "one-off" | "question";

function cleanString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function normalizeBelarusPhone(value: string): string | null {
  const input = value.trim();

  if (!input.startsWith("+375")) {
    return null;
  }

  const digits = input.replace(/\D/g, "");

  if (!/^375(25|29|33|44)\d{7}$/.test(digits)) {
    return null;
  }

  return `+${digits}`;
}

export async function POST(request: Request) {
  try {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      console.error("DATABASE_URL is not configured");

      return NextResponse.json(
        { message: "Сервис временно недоступен." },
        { status: 500 },
      );
    }

    const body: unknown = await request.json();

    if (
      typeof body !== "object" ||
      body === null ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        { message: "Некорректные данные формы." },
        { status: 400 },
      );
    }

    const data = body as Record<string, unknown>;
    const name = cleanString(data.name, 100);
    const phone = normalizeBelarusPhone(
      cleanString(data.phone, 40),
    );
    const comment = cleanString(data.comment, 1000);
    const interest = data.interest;

    if (name.length < 2) {
      return NextResponse.json(
        { message: "Укажите имя — не менее двух символов." },
        { status: 400 },
      );
    }

    if (!phone) {
      return NextResponse.json(
        {
          message:
            "Введите корректный белорусский номер, например +375 29 123-45-67.",
        },
        { status: 400 },
      );
    }

    if (
      interest !== "subscription" &&
      interest !== "one-off" &&
      interest !== "question"
    ) {
      return NextResponse.json(
        { message: "Выберите, что вас интересует." },
        { status: 400 },
      );
    }

    const rawAttribution = data.attribution;

    const attributionData =
      typeof rawAttribution === "object" &&
      rawAttribution !== null &&
      !Array.isArray(rawAttribution)
        ? (rawAttribution as Record<string, unknown>)
        : {};

    const attribution = {
      source: cleanString(attributionData.source, 200),
      ad: cleanString(attributionData.ad, 200),
      landingPage: cleanString(attributionData.landingPage, 500),
      utmSource: cleanString(attributionData.utmSource, 200),
      utmMedium: cleanString(attributionData.utmMedium, 200),
      utmCampaign: cleanString(attributionData.utmCampaign, 200),
    };

    const sql = neon(databaseUrl);

    const duplicates = await sql`
      SELECT id
      FROM leads
      WHERE phone = ${phone}
        AND created_at > NOW() - INTERVAL '10 minutes'
      LIMIT 1
    `;

    if (duplicates.length > 0) {
      return NextResponse.json(
        {
          message:
            "Заявка с этим номером уже отправлялась. Попробуйте снова через 10 минут.",
        },
        { status: 409 },
      );
    }

    await sql`
      INSERT INTO leads (
        id,
        name,
        phone,
        interest,
        comment,
        attribution
      )
      VALUES (
        ${crypto.randomUUID()},
        ${name},
        ${phone},
        ${interest},
        ${comment},
        ${JSON.stringify(attribution)}::jsonb
      )
    `;

    return NextResponse.json(
      { message: "Спасибо! Заявка отправлена. Скоро свяжемся с вами." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to process lead:", error);

    return NextResponse.json(
      {
        message:
          "Не удалось отправить заявку. Попробуйте ещё раз позже.",
      },
      { status: 500 },
    );
  }
}
