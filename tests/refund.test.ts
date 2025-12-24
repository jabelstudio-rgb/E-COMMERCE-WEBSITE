import { describe, expect, it } from "vitest";
import { refundExactEtbPaid } from "@/lib/refund";

describe("refunds", () => {
  it("refunds exact ETB paid", () => {
    expect(refundExactEtbPaid(1250)).toBe(1250);
  });
});
