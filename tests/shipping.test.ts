import { describe, expect, it } from "vitest";
import { estimateShipping } from "@/lib/shipping";

describe("shipping", () => {
  it("estimates shipping", () => {
    const result = estimateShipping({
      rule: {
        carrierName: "DHL",
        zone: "Addis Ababa",
        category: "general",
        weightBracketKg: 1,
        baseEtb: 500,
        perKgEtb: 200,
        etaMinDays: 7,
        etaMaxDays: 14
      },
      weightKg: 2
    });

    expect(result.shippingEtb).toBe(900);
    expect(result.etaMinDays).toBe(7);
  });
});
