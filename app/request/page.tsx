"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type PurchaseRequestInput,
  purchaseRequestSchema
} from "@/lib/request-schema";

export default function RequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PurchaseRequestInput>({
    resolver: zodResolver(purchaseRequestSchema),
    defaultValues: {
      source: "amazon",
      quantity: 1
    }
  });

  const onSubmit = async (data: PurchaseRequestInput) => {
    await fetch("/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          External Purchase Request
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          No scraping. Provide the product URL and details manually. Quotes
          expire in 24 hours.
        </p>
      </div>
      <form
        className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-sm font-medium text-slate-700">
          Product URL
          <input
            className="mt-2 w-full rounded-lg border border-slate-200 p-2"
            {...register("externalUrl")}
            placeholder="https://amazon.com/..."
          />
          {errors.externalUrl ? (
            <p className="mt-1 text-xs text-red-600">
              {errors.externalUrl.message}
            </p>
          ) : null}
        </label>

        <label className="text-sm font-medium text-slate-700">
          Source
          <select
            className="mt-2 w-full rounded-lg border border-slate-200 p-2"
            {...register("source")}
          >
            <option value="amazon">Amazon</option>
            <option value="shein">Shein</option>
            <option value="temu">Temu</option>
            <option value="alibaba">Alibaba</option>
            <option value="ebay">eBay</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          Item title
          <input
            className="mt-2 w-full rounded-lg border border-slate-200 p-2"
            {...register("itemTitle")}
          />
          {errors.itemTitle ? (
            <p className="mt-1 text-xs text-red-600">
              {errors.itemTitle.message}
            </p>
          ) : null}
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            USD price
            <input
              className="mt-2 w-full rounded-lg border border-slate-200 p-2"
              type="number"
              step="0.01"
              {...register("userEnteredUsdPrice", { valueAsNumber: true })}
            />
            {errors.userEnteredUsdPrice ? (
              <p className="mt-1 text-xs text-red-600">
                {errors.userEnteredUsdPrice.message}
              </p>
            ) : null}
          </label>
          <label className="text-sm font-medium text-slate-700">
            Quantity
            <input
              className="mt-2 w-full rounded-lg border border-slate-200 p-2"
              type="number"
              {...register("quantity", { valueAsNumber: true })}
            />
          </label>
        </div>

        <label className="text-sm font-medium text-slate-700">
          Options (size, color, etc.)
          <input
            className="mt-2 w-full rounded-lg border border-slate-200 p-2"
            {...register("optionsText")}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Notes
          <textarea
            className="mt-2 w-full rounded-lg border border-slate-200 p-2"
            rows={4}
            {...register("notes")}
          />
        </label>

        <button
          className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white"
          type="submit"
        >
          Submit request
        </button>
        {submitted ? (
          <p className="text-sm text-brand-700">
            Request submitted. We will send an ETB quote within 24 hours.
          </p>
        ) : null}
      </form>
    </div>
  );
}
