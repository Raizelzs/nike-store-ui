"use client";

import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  totalItems: number;
};

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => {
    const existing = get().items.find((it) => it.id === item.id);
    if (existing) {
      set({
        items: get().items.map((it) =>
          it.id === item.id ? { ...it, quantity: it.quantity + 1 } : it
        )
      });
      return;
    }
    set({ items: [...get().items, { ...item, quantity: 1 }] });
  },
  get totalItems() {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  }
}));
