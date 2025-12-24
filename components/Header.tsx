import Link from "next/link";

const navItems = [
  { href: "/shop", label: "Shop" },
  { href: "/request", label: "Purchase Request" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/cart", label: "Cart" }
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-semibold text-brand-700">
          EthioMarket
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
