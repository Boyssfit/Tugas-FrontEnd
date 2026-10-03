import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../utils/CartContext";

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

const today = new Date();
const minimumDate = new Date(
  today.getTime() - today.getTimezoneOffset() * 60_000,
)
  .toISOString()
  .slice(0, 10);

const arrivalTimes = [
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [confirmation, setConfirmation] = useState(null);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setConfirmation({
      name: formData.get("name"),
      date: formData.get("date"),
      time: formData.get("time"),
      items: cart.length,
    });
    clearCart();
  };

  if (confirmation) {
    return (
      <section className="mx-auto max-w-2xl border border-[#dedbce] bg-[#fbfaf6] px-6 py-12 text-center sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a795f]">
          Permintaan reservasi diterima
        </p>
        <h1 className="mt-3 font-serif text-3xl">
          Terima kasih, {confirmation.name}.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[#697166]">
          Permintaan reservasi untuk {confirmation.items} paket pada{" "}
          {confirmation.date}, pukul {confirmation.time} telah dicatat. Tim kami
          akan menghubungi Anda untuk konfirmasi ketersediaan.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex min-h-11 items-center bg-[#536b56] px-5 text-sm font-semibold text-white hover:bg-[#405443]"
        >
          Kembali ke perawatan
        </Link>
      </section>
    );
  }

  if (!cart.length) {
    return (
      <section className="py-16 text-center">
        <h1 className="font-serif text-3xl">Belum ada paket untuk dijadwalkan</h1>
        <p className="mt-3 text-sm text-[#697166]">
          Simpan paket spa yang Anda inginkan sebelum menentukan jadwal.
        </p>
        <Link
          to="/cart"
          className="mt-6 inline-flex min-h-11 items-center bg-[#536b56] px-5 text-sm font-semibold text-white"
        >
          Lihat Saved
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a795f]">
        Jadwalkan kunjungan
      </p>
      <h1 className="mt-2 font-serif text-3xl">Form Reservasi</h1>
      <p className="mt-2 text-sm text-[#697166]">
        Tentukan tanggal dan jam kedatangan untuk paket spa pilihan Anda.
      </p>
      <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_340px]">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 border-y border-[#dedbce] py-6"
        >
          <div>
            <label
              htmlFor="booking-name"
              className="mb-2 block text-sm font-medium"
            >
              Nama pemesan
            </label>
            <input
              id="booking-name"
              name="name"
              required
              autoComplete="name"
              className="min-h-11 w-full border border-[#d1cebf] bg-[#fbfaf6] px-3 text-sm outline-none focus:border-[#647b62]"
              placeholder="Nama lengkap"
            />
          </div>
          <div>
            <label
              htmlFor="booking-phone"
              className="mb-2 block text-sm font-medium"
            >
              Nomor HP / WhatsApp
            </label>
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="numeric"
              pattern="[0-9]{8,15}"
              title="Masukkan 8 sampai 15 digit nomor telepon tanpa spasi"
              className="min-h-11 w-full border border-[#d1cebf] bg-[#fbfaf6] px-3 text-sm outline-none focus:border-[#647b62]"
              placeholder="08xxxxxxxxxx"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="booking-date"
                className="mb-2 block text-sm font-medium"
              >
                Tanggal kedatangan
              </label>
              <input
                id="booking-date"
                name="date"
                type="date"
                required
                min={minimumDate}
                className="min-h-11 w-full border border-[#d1cebf] bg-[#fbfaf6] px-3 text-sm outline-none focus:border-[#647b62]"
              />
            </div>
            <div>
              <label
                htmlFor="arrival-time"
                className="mb-2 block text-sm font-medium"
              >
                Jam kedatangan
              </label>
              <select
                id="arrival-time"
                name="time"
                required
                defaultValue=""
                className="min-h-11 w-full border border-[#d1cebf] bg-[#fbfaf6] px-3 text-sm outline-none focus:border-[#647b62]"
              >
                <option value="" disabled>
                  Pilih jam
                </option>
                {arrivalTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="min-h-12 w-full bg-[#536b56] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#405443] sm:w-auto"
          >
            Kirim permintaan reservasi
          </button>
        </form>
        <aside className="h-fit border border-[#dedbce] bg-[#fbfaf6] p-5">
          <h2 className="font-serif text-xl">Paket pilihan</h2>
          <ul className="mt-4 divide-y divide-[#e5e2d6]">
            {cart.map((item) => (
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
          <div className="mt-2 flex justify-between border-t border-[#dedbce] pt-4 text-sm">
            <span>Perkiraan total</span>
            <strong className="text-[#536b56]">{formatPrice(total)}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
