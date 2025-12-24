export default function WishlistPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">Wishlist</h1>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">
          Wishlist items are stored in localStorage for guests and merged on
          login.
        </p>
      </div>
    </div>
  );
}
