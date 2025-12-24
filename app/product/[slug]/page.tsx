import Link from "next/link";

export default function ProductDetailPage({
  params
}: {
  params: { slug: string };
}) {
  return (
    <div className="space-y-6">
      <div>
        <Link className="text-sm text-slate-500" href="/shop">
          ← Back to shop
        </Link>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          {params.slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Product details, variants, and shipping weight will live here.
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Variants</h2>
        <p className="mt-2 text-sm text-slate-600">
          Configure size, color, and quantity before adding to cart.
        </p>
        <button className="mt-4 rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
}
