import { z } from "zod";

export const purchaseRequestSchema = z.object({
  externalUrl: z.string().url(),
  source: z.enum(["amazon", "shein", "temu", "alibaba", "ebay", "other"]),
  itemTitle: z.string().min(3),
  userEnteredUsdPrice: z.number().positive(),
  quantity: z.number().int().positive(),
  optionsText: z.string().optional(),
  notes: z.string().optional()
});

export type PurchaseRequestInput = z.infer<typeof purchaseRequestSchema>;
