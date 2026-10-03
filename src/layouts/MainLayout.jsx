import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { serviceCategories } from "../utils/data";

export default function MainLayout() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(serviceCategories[0]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f4f2e9] text-[#293d32]">
      <Navbar />
      <header className="border-b border-[#dedbce] bg-[#eeede3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#788074]">
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
              className="min-h-11 rounded-md border border-[#d1cebf] bg-[#fbfaf6] px-4 text-sm outline-none transition focus:border-[#647b62] focus:ring-2 focus:ring-[#647b62]/20"
            />
            <label className="sr-only" htmlFor="service-category">
              Filter kategori perawatan
            </label>
            <select
              id="service-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="min-h-11 rounded-md border border-[#d1cebf] bg-[#fbfaf6] px-4 text-sm outline-none focus:border-[#647b62] focus:ring-2 focus:ring-[#647b62]/20"
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
      <footer className="border-t border-[#dedbce] bg-[#e9e7dc]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-[#697166] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Aroma Spa & Wellness</p>
          <p>Jl. Taman Sari No. 18, Ubud · Setiap hari, 09.00–21.00</p>
        </div>
      </footer>
    </div>
  );
}
