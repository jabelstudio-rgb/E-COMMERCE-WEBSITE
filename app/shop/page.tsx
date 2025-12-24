import { ProductCard } from "@/components/ProductCard";

const sampleProducts = [
  { slug: "heritage-coffee", name: "Heritage Coffee Beans", priceEtb: 950 },
  {
    slug: "woven-throw",
    name: "Handwoven Throw Blanket",
    priceEtb: 2450,
    vendor: "Lalibela Crafts"
  },
  { slug: "city-pack", name: "City Travel Backpack", priceEtb: 4100 }
];

export default function ShopPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Shop</h1>
        <p className="mt-2 text-sm text-slate-600">
          Search, filter, and sort our internal catalog. Vendor products are
          labeled clearly.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {sampleProducts.map((product) => (
          <ProductCard key={product.slug} {...product} />
        ))}
      </div>
    </div>
  );
}
