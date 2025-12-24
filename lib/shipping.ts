export type ShippingRule = {
  carrierName: string;
  zone: string;
  category: string;
  weightBracketKg: number;
  baseEtb: number;
  perKgEtb: number;
  etaMinDays: number;
  etaMaxDays: number;
};

export function estimateShipping({
  rule,
  weightKg
}: {
  rule: ShippingRule;
  weightKg: number;
}) {
  const weightCharge = Math.max(weightKg, rule.weightBracketKg) * rule.perKgEtb;
  return {
    shippingEtb: rule.baseEtb + weightCharge,
    etaMinDays: rule.etaMinDays,
    etaMaxDays: rule.etaMaxDays
  };
}
