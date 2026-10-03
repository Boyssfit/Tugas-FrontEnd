import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f4f2e9] text-[#293d32]">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Tutup navigasi"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-20 bg-[#1f2e25]/35 md:hidden"
        />
      )}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-[#ddd9ca] bg-[#fbfaf6] px-5 py-4 md:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#788074]">
              Aroma Spa & Wellness
            </p>
            <h1 className="font-serif text-lg">Panel reservasi</h1>
          </div>
          <button
            type="button"
            aria-label="Buka navigasi"
            aria-expanded={sidebarOpen}
            className="grid h-10 w-10 place-items-center rounded-md border border-[#d1cebf] text-lg md:hidden"
            onClick={() => setSidebarOpen((open) => !open)}
          >
            ☰
          </button>
        </header>
        <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 sm:px-8">
          <Outlet />
        </main>
        <footer className="border-t border-[#ddd9ca] bg-[#eeede3] px-5 py-4 text-center text-xs text-[#697166]">
          Panel operasional · Aroma Spa & Wellness · v1.0.0
        </footer>
      </div>
    </div>
  );
}
