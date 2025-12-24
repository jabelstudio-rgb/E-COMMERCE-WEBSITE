import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { type TelebirrPayload, verifyPayload } from "@/lib/telebirr";
import { refundExactEtbPaid } from "@/lib/refund";

export async function POST(request: Request) {
  const { payload, signature } = (await request.json()) as {
    payload: TelebirrPayload;
    signature: string;
  };

  const isValid = verifyPayload(
    payload,
    signature,
    process.env.TELEBIRR_APP_KEY ?? ""
  );

  if (!isValid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const payment = await prisma.paymentRecord.findUnique({
    where: { txRef: payload.outTradeNo },
    include: { quote: true }
  });

  if (!payment) {
    return NextResponse.json({ error: "Payment not found" }, { status: 404 });
  }

  if (payload.amount !== payment.amountEtb || payload.currency !== "ETB") {
    return NextResponse.json({ error: "Amount mismatch" }, { status: 400 });
  }

  const totalPaid = payload.amount;
  await prisma.paymentRecord.update({
    where: { id: payment.id },
    data: {
      status: "CONFIRMED",
      totalEtbPaid: totalPaid,
      refundableAmountEtb: refundExactEtbPaid(totalPaid)
    }
  });

  await prisma.externalOrder.create({
    data: {
      quoteId: payment.quoteId,
      paymentId: payment.id
    }
  });

  return NextResponse.json({ ok: true });
}
