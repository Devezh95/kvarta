import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type Interest = "subscription" | "one-off" | "question";

type Lead = {
  id: string;
  name: string;
  phone: string;
  interest: Interest;
  comment: string;
  createdAt: string;
  attribution: {
    source: string;
    ad: string;
    landingPage: string;
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
  };
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;

let requestQueue: Promise<void> = Promise.resolve();

function cleanString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function normalizeBelarusPhone(value: string): string | null {
  const input = value.trim();

  if (!input.startsWith("+375")) {
    return null;
  }

  // Убираем пробелы, скобки и дефисы
  const digits = input.replace(/\D/g, "");

  // Ровно 12 цифр: 375 + 9 цифр
  if (!/^375\d{9}$/.test(digits)) {
    return null;
  }

  if (!/^375(25|29|33|44)\d{7}$/.test(digits)) {
    return null;
  }

  return `+${digits}`;
}

async function readLeads(): Promise<Lead[]> {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    const content = await readFile(DATA_FILE, "utf8");
    const parsed: unknown = JSON.parse(content);
    return Array.isArray(parsed) ? (parsed as Lead[]) : [];
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return [];
    }

    throw error;
  }
}

async function saveLeadSafely(lead: Lead) {
  let release!: () => void;

  const previousRequest = requestQueue;
  requestQueue = new Promise<void>((resolve) => {
    release = resolve;
  });

  await previousRequest;

  try {
    const leads = await readLeads();
    const now = Date.now();

    const duplicate = leads.some(
      (item) =>
        item.phone === lead.phone &&
        now - new Date(item.createdAt).getTime() < DUPLICATE_WINDOW_MS &&
        now >= new Date(item.createdAt).getTime(),
    );

    if (duplicate) {
      return false;
    }

    leads.push(lead);

    const temporaryFile = `${DATA_FILE}.tmp`;
    await writeFile(temporaryFile, JSON.stringify(leads, null, 2), "utf8");
    const { rename } = await import("node:fs/promises");
    await rename(temporaryFile, DATA_FILE);

    return true;
  } finally {
    release();
  }
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return NextResponse.json(
        { message: "Некорректные данные формы." },
        { status: 400 },
      );
    }

    const data = body as Record<string, unknown>;
    const name = cleanString(data.name, 100);
    const phoneInput = cleanString(data.phone, 40);
    const phone = normalizeBelarusPhone(phoneInput);
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

    const attributionData =
      typeof data.attribution === "object" &&
      data.attribution !== null &&
      !Array.isArray(data.attribution)
        ? (data.attribution as Record<string, unknown>)
        : {};

    const lead: Lead = {
      id: crypto.randomUUID(),
      name,
      phone,
      interest,
      comment,
      createdAt: new Date().toISOString(),
      attribution: {
        source: cleanString(attributionData.source, 200),
        ad: cleanString(attributionData.ad, 200),
        landingPage: cleanString(attributionData.landingPage, 500),
        utmSource: cleanString(attributionData.utmSource, 200),
        utmMedium: cleanString(attributionData.utmMedium, 200),
        utmCampaign: cleanString(attributionData.utmCampaign, 200),
      },
    };

    const saved = await saveLeadSafely(lead);

    if (!saved) {
      return NextResponse.json(
        {
          message:
            "Заявка с этим номером уже отправлялась. Попробуйте снова через 10 минут.",
        },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { message: "Спасибо! Заявка отправлена. Скоро свяжемся с вами." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to process lead:", error);

    return NextResponse.json(
      { message: "Не удалось отправить заявку. Попробуйте ещё раз позже." },
      { status: 500 },
    );
  }
}
