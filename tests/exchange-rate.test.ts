import { describe, expect, it } from "vitest";
import { getEffectiveRate } from "@/lib/exchange-rate";

describe("exchange rate", () => {
  it("uses manual override when provided", () => {
    const rate = getEffectiveRate({
      providerName: "provider",
      fetchedRate: 55,
      manualOverrideRate: 60,
      timestamp: new Date()
    });
    expect(rate).toBe(60);
  });
});
