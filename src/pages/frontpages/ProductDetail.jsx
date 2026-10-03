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
          className="mt-4 inline-block text-sm text-[#8a674b] underline underline-offset-4"
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
        className="text-sm text-[#8a674b] underline underline-offset-4"
      >
        ← Semua perawatan
      </Link>
      <article className="mt-5 grid overflow-hidden border border-[#dedbce] bg-[#fbfaf6] lg:grid-cols-[1.05fr_0.95fr]">
        <img
          src={service.image}
          alt={service.name}
          className="h-full min-h-72 w-full object-cover lg:min-h-[560px]"
        />
        <div className="flex flex-col justify-center p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a795f]">
            {service.category} · {service.duration} menit
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight">
            {service.name}
          </h1>
          <p className="mt-5 text-base leading-7 text-[#697166]">
            {service.description}
          </p>
          <div className="mt-7 border-y border-[#e5e2d6] py-5">
            <h2 className="text-sm font-semibold">Termasuk dalam perawatan</h2>
            <ul className="mt-3 space-y-2 text-sm text-[#697166]">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#87917a]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <span className="font-serif text-2xl text-[#536b56]">
              {formatPrice(service.price)}
            </span>
            <button
              type="button"
              onClick={() => {
                addToCart(service);
                navigate("/cart");
              }}
              className="min-h-12 bg-[#536b56] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#405443]"
            >
              Simpan ke Saved
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
