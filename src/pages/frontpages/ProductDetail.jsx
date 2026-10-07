import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../utils/CartContext";
import { services } from "../../utils/data";

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const service = services.find((item) => String(item.id) === id);

  if (!service) {
    return (
      <section className="py-16 text-center">
        <h1 className="font-serif text-3xl">Perawatan tidak ditemukan</h1>
        <Link
          to="/"
          className="mt-4 inline-block text-sm text-[var(--color-accent-hover)] underline underline-offset-4"
        >
          Kembali ke pilihan perawatan
        </Link>
      </section>
    );
  }

  return (
    <div>
      <Link
        to="/"
        className="text-sm text-[var(--color-accent-hover)] underline underline-offset-4"
      >
        ← Semua perawatan
      </Link>
      <article className="mt-5 grid overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] lg:grid-cols-[1.05fr_0.95fr]">
        <img
          src={service.image}
          alt={service.name}
          className="h-full min-h-72 w-full object-cover lg:min-h-[560px]"
        />
        <div className="flex flex-col justify-center p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {service.category} · {service.duration} menit
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight">
            {service.name}
          </h1>
          <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
            {service.description}
          </p>
          <div className="mt-7 border-y border-[var(--color-border)] py-5">
            <h2 className="text-sm font-semibold">Termasuk dalam perawatan</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--color-muted)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <span className="font-serif text-2xl text-[var(--color-primary)]">
              {formatPrice(service.price)}
            </span>
            <button
              type="button"
              onClick={() => {
                addToCart(service);
                navigate("/cart");
              }}
              className="min-h-12 bg-[var(--color-primary)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
            >
              Simpan ke Saved
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
