"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";

const CartCtx = createContext(null);
export const useCart = () => useContext(CartCtx);

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("frischtier_cart"));
      if (Array.isArray(saved)) setItems(saved);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("frischtier_cart", JSON.stringify(items));
  }, [items]);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  }, []);

  const add = useCallback((item) => {
    setItems((prev) => {
      const key = `${item.id}|${item.size || ""}|${item.color || ""}`;
      const found = prev.find((i) => i.key === key);
      if (found) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + item.qty } : i));
      return [...prev, { ...item, key }];
    });
    showToast(`Added to cart 🐾 ${item.title}`);
  }, [showToast]);

  const count = items.reduce((n, i) => n + i.qty, 0);

  return (
    <CartCtx.Provider value={{ items, add, count }}>
      {children}
      <div
        className={`fixed left-1/2 -translate-x-1/2 z-[100] bottom-7 bg-sage-700 text-white px-6 py-3.5 rounded-full font-head font-bold shadow-lg2 flex items-center gap-2.5 transition-transform duration-300 ${
          toast ? "translate-y-0" : "translate-y-32"
        }`}
        style={{ pointerEvents: "none" }}
      >
        {toast}
      </div>
    </CartCtx.Provider>
  );
}
