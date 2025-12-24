export default function CartPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">Cart</h1>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">
          Your cart is synced via local storage or your account when you sign
          in.
        </p>
      </div>
    </div>
  );
}
