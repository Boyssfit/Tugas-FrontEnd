import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { serviceCategories } from "../utils/data";

export default function MainLayout() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(serviceCategories[0]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-page)] text-[var(--color-ink)]">
      <Navbar />
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface-muted)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Ritual untuk kembali seimbang
            </p>
            <h1 className="mt-1 font-serif text-2xl">
              Temukan perawatan yang tepat
            </h1>
          </div>
          <div className="grid w-full gap-2 sm:max-w-xl sm:grid-cols-[1fr_210px]">
            <label className="sr-only" htmlFor="service-search">
              Cari paket spa
            </label>
            <input
              id="service-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Cari paket spa..."
              className="min-h-11 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
            />
            <label className="sr-only" htmlFor="service-category">
              Filter kategori perawatan
            </label>
            <select
              id="service-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="min-h-11 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
            >
              {serviceCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 sm:px-8 sm:py-10">
        <Outlet context={{ search, category }} />
      </main>
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-muted)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Aroma Spa & Wellness</p>
          <p>Jl. Taman Sari No. 18, Ubud · Setiap hari, 09.00–21.00</p>
        </div>
      </footer>
    </div>
  );
}
