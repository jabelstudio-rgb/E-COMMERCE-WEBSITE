export type RoundingRule = "NONE" | "NEAREST_10" | "NEAREST_50" | "NEAREST_100";

export function applyRounding(amount: number, rule: RoundingRule): number {
  if (rule === "NONE") return amount;

  const factor = rule === "NEAREST_10" ? 10 : rule === "NEAREST_50" ? 50 : 100;
  return Math.round(amount / factor) * factor;
}

export function calculateServiceFee({
  itemEtb,
  shippingEtb,
  serviceFeeRate,
  roundingRule
}: {
  itemEtb: number;
  shippingEtb: number;
  serviceFeeRate: number;
  roundingRule: RoundingRule;
}): number {
  const base = itemEtb + shippingEtb;
  const fee = base * serviceFeeRate;
  return applyRounding(fee, roundingRule);
}

export function calculateQuoteTotal({
  itemEtb,
  shippingEtb,
  serviceFeeEtb,
  ownerAdjustmentEtb
}: {
  itemEtb: number;
  shippingEtb: number;
  serviceFeeEtb: number;
  ownerAdjustmentEtb: number;
}): number {
  return itemEtb + shippingEtb + serviceFeeEtb + ownerAdjustmentEtb;
}
