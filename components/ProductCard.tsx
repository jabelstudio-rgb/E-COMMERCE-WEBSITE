import Link from "next/link";

export type ProductCardProps = {
  slug: string;
  name: string;
  priceEtb: number;
  vendor?: string | null;
};

export function ProductCard({ slug, name, priceEtb, vendor }: ProductCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900">{name}</h3>
        {vendor ? (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
            Vendor: {vendor}
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-xl font-semibold text-brand-700">
        {priceEtb.toLocaleString("en-ET")} ETB
      </p>
      <Link
        className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700"
        href={`/product/${slug}`}
      >
        View details →
      </Link>
    </div>
  );
}
