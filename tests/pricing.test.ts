import { describe, expect, it } from "vitest";
import { applyRounding, calculateServiceFee } from "@/lib/pricing";

describe("pricing", () => {
  it("applies rounding rules", () => {
    expect(applyRounding(123, "NONE")).toBe(123);
    expect(applyRounding(123, "NEAREST_10")).toBe(120);
    expect(applyRounding(123, "NEAREST_50")).toBe(100);
    expect(applyRounding(123, "NEAREST_100")).toBe(100);
  });

  it("calculates service fee", () => {
    const fee = calculateServiceFee({
      itemEtb: 1000,
      shippingEtb: 500,
      serviceFeeRate: 0.25,
      roundingRule: "NONE"
    });
    expect(fee).toBe(375);
  });
});
