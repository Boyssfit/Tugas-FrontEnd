import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[var(--color-page)] text-[var(--color-ink)]">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Tutup navigasi"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-20 bg-[var(--color-overlay)]/35 md:hidden"
        />
      )}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 md:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Aroma Spa & Wellness
            </p>
            <h1 className="font-serif text-lg">Panel reservasi</h1>
          </div>
          <button
            type="button"
            aria-label="Buka navigasi"
            aria-expanded={sidebarOpen}
            className="grid h-10 w-10 place-items-center rounded-md border border-[var(--color-border)] text-lg md:hidden"
            onClick={() => setSidebarOpen((open) => !open)}
          >
            ☰
          </button>
        </header>
        <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 sm:px-8">
          <Outlet />
        </main>
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-muted)] px-5 py-4 text-center text-xs text-[var(--color-muted)]">
          Panel operasional · Aroma Spa & Wellness · v1.0.0
        </footer>
      </div>
    </div>
  );
}
