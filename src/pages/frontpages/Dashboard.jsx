import { Link, useOutletContext } from "react-router-dom";
import { services } from "../../utils/data";
import { useCart } from "../../utils/CartContext";

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

export default function Dashboard() {
  const { search, category } = useOutletContext();
  const { cart, addToCart } = useCart();
  const visibleServices = services.filter((service) => {
    const matchesSearch = service.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());
    const matchesCategory =
      category === "Semua Perawatan" || service.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <section className="relative isolate mb-10 flex min-h-[300px] items-end overflow-hidden rounded-md bg-[var(--color-primary-hover)] px-6 py-8 text-[var(--color-surface)] sm:min-h-[360px] sm:px-10 sm:py-10">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=90"
          alt="Ruang spa yang tenang dengan cahaya alami"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-overlay)]/85 via-[var(--color-overlay)]/45 to-transparent" />
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Waktu untuk diri sendiri
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Pulihkan energi, perlahan.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-surface)]">
            Ritual perawatan tubuh yang dirancang untuk membantu Anda
            beristirahat, bernapas lega, dan kembali merasa seimbang.
          </p>
          <a
            href="#pilihan-perawatan"
            className="mt-6 inline-flex min-h-11 items-center border border-[var(--color-surface)]/70 px-5 text-sm font-medium transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
          >
            Jelajahi perawatan
          </a>
        </div>
      </section>

      <section id="pilihan-perawatan">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Pilihan terkurasi
            </p>
            <h2 className="mt-1 font-serif text-3xl">Ritual perawatan</h2>
          </div>
          <p className="text-sm text-[var(--color-muted)]">
            {visibleServices.length} perawatan tersedia
          </p>
        </div>
        {visibleServices.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service) => (
              <article
                key={service.id}
                className="group overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <Link
                  to={`/product/${service.id}`}
                  aria-label={`Lihat ${service.name}`}
                  className="block overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      {service.category}
                    </span>
                    <span className="text-xs text-[var(--color-muted)]">
                      {service.duration} menit
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl">{service.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--color-muted)]">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4">
                    <span className="font-semibold text-[var(--color-primary)]">
                      {formatPrice(service.price)}
                    </span>
                    <div className="flex items-center gap-4">
                      <Link
                        to={`/product/${service.id}`}
                        className="text-sm font-semibold text-[var(--color-accent)] underline decoration-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-accent-hover)]"
                      >
                        Lihat detail
                      </Link>
                      <button
                        type="button"
                        onClick={() => addToCart(service)}
                        disabled={cart.some((item) => item.id === service.id)}
                        className="min-h-10 bg-[var(--color-primary)] px-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:cursor-default disabled:bg-[var(--color-muted)]"
                      >
                        {cart.some((item) => item.id === service.id)
                          ? "Tersimpan"
                          : "Simpan"}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="border border-dashed border-[var(--color-border)] px-5 py-12 text-center text-sm text-[var(--color-muted)]">
            Tidak ada perawatan yang sesuai. Coba kata kunci atau kategori lain.
          </p>
        )}
      </section>
    </div>
  );
}
