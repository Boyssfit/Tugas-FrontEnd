import { Link } from "react-router-dom";
import { useCart } from "../../utils/CartContext";

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

export default function Bookings() {
  const { bookings } = useCart();

  if (bookings.length === 0) {
    return (
      <section className="mx-auto max-w-2xl py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
          Jadwal Anda
        </p>
        <h1 className="mt-3 font-serif text-3xl">Belum ada jadwal reservasi</h1>
        <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
          Reservasi yang sudah dikirim akan muncul di sini.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex min-h-11 items-center bg-[var(--color-primary)] px-5 text-sm font-semibold text-white hover:bg-[var(--color-primary-hover)]"
        >
          Lihat paket perawatan
        </Link>
      </section>
    );
  }

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
        Jadwal Anda
      </p>
      <h1 className="mt-2 font-serif text-3xl">Reservasi saya</h1>
      <p className="mt-2 text-sm text-[var(--color-muted)]">
        {bookings.length} reservasi tersimpan di perangkat ini.
      </p>
      <div className="mt-7 space-y-4">
        {bookings.map((booking) => (
          <article
            key={booking.id}
            className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  Kode reservasi · {booking.id}
                </p>
                <h2 className="mt-2 font-serif text-xl">{booking.name}</h2>
              </div>
              <span className="bg-[var(--color-success-soft)] px-3 py-1 text-xs text-[var(--color-primary)]">
                {booking.status}
              </span>
            </div>
            <p className="mt-4 text-sm">
              {booking.date} · pukul {booking.time}
            </p>
            <ul className="mt-3 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              {booking.items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between gap-3 py-3 text-sm"
                >
                  <span>{item.name}</span>
                  <span className="whitespace-nowrap">
                    {formatPrice(item.price)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm">
              Kontak: {booking.phone}
            </p>
            <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">
              Total: {formatPrice(booking.total)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
