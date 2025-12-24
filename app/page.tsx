import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-900">
          Hybrid E-Commerce + Purchasing Agent
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Shop our curated catalog or request purchases from Amazon, Shein, Temu,
          Alibaba, or eBay. We provide ETB quotes with verified FX rates, clear
          service fees, and delivery estimates.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/shop"
            className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white"
          >
            Browse Shop
          </Link>
          <Link
            href="/request"
            className="rounded-full border border-brand-700 px-6 py-3 text-sm font-semibold text-brand-700"
          >
            Start a Purchase Request
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Transparent FX",
            description:
              "FX rate snapshots are stored for every quote. Manual overrides are tracked."
          },
          {
            title: "Telebirr H5",
            description:
              "Payments are only confirmed from server-side Telebirr notifications."
          },
          {
            title: "Refunds",
            description:
              "Refunds equal the exact ETB paid. No USD conversions or FX changes."
          }
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
