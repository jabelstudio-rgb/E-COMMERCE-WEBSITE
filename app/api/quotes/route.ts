import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calculateServiceFee, calculateQuoteTotal } from "@/lib/pricing";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    requestId: string;
    fxRateUsed: number;
    itemEtb: number;
    shippingEtb: number;
    ownerAdjustmentEtb: number;
    serviceFeeRate?: number;
    roundingRule?: "NONE" | "NEAREST_10" | "NEAREST_50" | "NEAREST_100";
    dutiesIncluded?: boolean;
    etaMinDays: number;
    etaMaxDays: number;
  };

  const serviceFeeEtb = calculateServiceFee({
    itemEtb: body.itemEtb,
    shippingEtb: body.shippingEtb,
    serviceFeeRate: body.serviceFeeRate ?? 0.25,
    roundingRule: body.roundingRule ?? "NONE"
  });

  const totalEtb = calculateQuoteTotal({
    itemEtb: body.itemEtb,
    shippingEtb: body.shippingEtb,
    serviceFeeEtb,
    ownerAdjustmentEtb: body.ownerAdjustmentEtb
  });

  const quote = await prisma.quote.create({
    data: {
      requestId: body.requestId,
      fxRateUsed: body.fxRateUsed,
      itemEtb: body.itemEtb,
      shippingEtb: body.shippingEtb,
      serviceFeeEtb,
      ownerAdjustmentEtb: body.ownerAdjustmentEtb,
      totalEtb,
      dutiesIncluded: body.dutiesIncluded ?? false,
      etaMinDays: body.etaMinDays,
      etaMaxDays: body.etaMaxDays,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
    }
  });

  await prisma.purchaseRequest.update({
    where: { id: body.requestId },
    data: { status: "QUOTED" }
  });

  return NextResponse.json({ id: quote.id, totalEtb });
}
