import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WishlistItem = {
  id: string;
  name: string;
};

type WishlistState = {
  items: WishlistItem[];
  add: (item: WishlistItem) => void;
  remove: (id: string) => void;
};

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      items: [],
      add: (item) => set((state) => ({ items: [...state.items, item] })),
      remove: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id)
        }))
    }),
    { name: "ethio-wishlist" }
  )
);
