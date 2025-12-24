import { NextResponse } from "next/server";
import { purchaseRequestSchema } from "@/lib/request-schema";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const json = await request.json();
  const data = purchaseRequestSchema.parse(json);

  const record = await prisma.purchaseRequest.create({
    data: {
      externalUrl: data.externalUrl,
      source: data.source,
      itemTitle: data.itemTitle,
      userEnteredUsdPrice: data.userEnteredUsdPrice,
      quantity: data.quantity,
      optionsText: data.optionsText,
      notes: data.notes
    }
  });

  return NextResponse.json({ id: record.id });
}
