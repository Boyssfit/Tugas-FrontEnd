import { createContext, useContext, useEffect, useState } from "react";

/* eslint-disable react-refresh/only-export-components */
const CartContext = createContext();

const BOOKINGS_STORAGE_KEY = "aroma-spa-reservations";

const loadBookings = () => {
  try {
    const storedBookings = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    const parsedBookings = storedBookings ? JSON.parse(storedBookings) : [];
    return Array.isArray(parsedBookings) ? parsedBookings : [];
  } catch (error) {
    console.error("Failed to load spa reservations", error);
    return [];
  }
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("aroma-spa-booking");
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error("Failed to load saved spa packages", error);
      return [];
    }
  });
  const [bookings, setBookings] = useState(loadBookings);

  useEffect(() => {
    try {
      localStorage.setItem("aroma-spa-booking", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save spa packages", error);
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) return prev;
      return [...prev, { ...product, qty: 1 }];
    });
  };

  //  Update qty
  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item,
      ),
    );
  };

  //  Hapus item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const addBooking = (booking) => {
    const newBooking = {
      ...booking,
      id: `AR-${Date.now()}`,
    };
    const updatedBookings = [newBooking, ...bookings];

    try {
      localStorage.setItem(
        BOOKINGS_STORAGE_KEY,
        JSON.stringify(updatedBookings),
      );
    } catch (error) {
      console.error("Failed to save spa reservation", error);
      throw new Error("Jadwal reservasi gagal disimpan. Silakan coba lagi.", {
        cause: error,
      });
    }

    setBookings(updatedBookings);
    return newBooking;
  };

  const totalQty = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        bookings,
        addBooking,
        totalQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
