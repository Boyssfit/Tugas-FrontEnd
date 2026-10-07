import { Link } from "react-router-dom";
//SidebarOpen menerima destructuring props.
//Artinya Sidebar menerima sebuah objek props yang dikirim dari parent component (misalnya dari AdminLayout).
//sidebarOpen sebuah state boolean (true/false) untuk menentukan sidebar sedang terbuka atau tertutup.
export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside
      className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-30 w-72 border-r border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink)] transition-transform md:static md:translate-x-0`}
    >
      <div className="border-b border-[var(--color-border)] px-6 py-6">
        <Link to="/" className="font-serif text-xl">
          Aroma Spa <span className="text-[var(--color-accent)]">& Wellness</span>
        </Link>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
          Ruang pengelola
        </p>
      </div>
      <nav className="flex flex-col gap-2 p-4" aria-label="Navigasi admin">
        <Link
          onClick={() => setSidebarOpen(false)}
          to="/admin/dashboard"
          className="rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-surface-muted)]"
        >
          Ringkasan Reservasi
        </Link>
        <Link
          onClick={() => setSidebarOpen(false)}
          to="/admin/about"
          className="rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-surface-muted)]"
        >
          Profil & Operasional
        </Link>
      </nav>
    </aside>
  );
}
