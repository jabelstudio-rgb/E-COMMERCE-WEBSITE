export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© 2025 EthioMarket. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <span>No scraping. Customer-provided product info only.</span>
          <span>Refunds = exact ETB paid.</span>
        </div>
      </div>
    </footer>
  );
}
