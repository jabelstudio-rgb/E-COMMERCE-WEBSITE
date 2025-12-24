import crypto from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signPayload } from "@/lib/telebirr";

export async function POST(request: Request) {
  const { quoteId } = (await request.json()) as { quoteId: string };
  const quote = await prisma.quote.findUnique({ where: { id: quoteId } });

  if (!quote) {
    return NextResponse.json({ error: "Quote not found" }, { status: 404 });
  }

  const txRef = `TX-${crypto.randomUUID()}`;
  const amountEtb = quote.totalEtb;

  await prisma.paymentRecord.create({
    data: {
      quoteId: quote.id,
      txRef,
      amountEtb,
      currency: "ETB"
    }
  });

  const payload = {
    appId: process.env.TELEBIRR_APP_ID ?? "",
    shortCode: process.env.TELEBIRR_SHORT_CODE ?? "",
    notifyUrl: process.env.TELEBIRR_NOTIFY_URL ?? "",
    returnUrl: process.env.TELEBIRR_RETURN_URL ?? "",
    outTradeNo: txRef,
    subject: `Quote ${quote.id}`,
    amount: amountEtb,
    currency: "ETB" as const
  };

  const signature = signPayload(payload, process.env.TELEBIRR_APP_KEY ?? "");

  return NextResponse.json({
    txRef,
    payload,
    signature,
    paymentUrl: `${process.env.TELEBIRR_H5_URL ?? ""}?txRef=${txRef}`
  });
}
