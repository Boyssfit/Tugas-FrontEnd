import { Link } from "react-router-dom";
import { useCart } from "../../utils/CartContext";

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <section className="mx-auto max-w-2xl py-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a795f]">
          Saved
        </p>
        <h1 className="mt-3 font-serif text-3xl">Belum ada paket tersimpan</h1>
        <p className="mt-3 text-sm leading-6 text-[#697166]">
          Simpan paket spa yang Anda minati untuk melanjutkan ke penjadwalan.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex min-h-11 items-center bg-[#536b56] px-5 text-sm font-semibold text-white hover:bg-[#405443]"
        >
          Lihat paket perawatan
        </Link>
      </section>
    );
  }

  return (
    <section>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a795f]">
        Daftar pilihan Anda
      </p>
      <h1 className="mt-2 font-serif text-3xl">Paket tersimpan</h1>
      <p className="mt-2 text-sm text-[#697166]">
        {cart.length} paket spa tersimpan untuk Anda pertimbangkan.
      </p>
      <div className="mt-7 divide-y divide-[#dedbce] border-y border-[#dedbce]">
        {cart.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-full object-cover sm:w-32"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-[0.12em] text-[#788074]">
                {item.category} · {item.duration} menit
              </p>
              <h2 className="mt-1 font-serif text-xl">{item.name}</h2>
              <p className="mt-1 text-sm font-medium text-[#536b56]">
                {formatPrice(item.price)}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to={`/product/${item.id}`}
                className="text-sm text-[#536b56] underline underline-offset-4"
              >
                Detail
              </Link>
              <button
                type="button"
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-[#9a624f] underline underline-offset-4"
              >
                Hapus
              </button>
            </div>
          </article>
        ))}
      </div>
      <Link
        to="/checkout"
        className="mt-6 inline-flex min-h-12 items-center bg-[#536b56] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#405443]"
      >
        Pilih jadwal reservasi
      </Link>
    </section>
  );
}
