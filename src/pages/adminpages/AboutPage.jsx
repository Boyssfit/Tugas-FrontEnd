export default function AboutPage() {
  return (
    <article className="max-w-4xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a795f]">
        Tentang usaha
      </p>
      <h1 className="mt-2 font-serif text-3xl">Aroma Spa & Wellness</h1>
      <p className="mt-5 max-w-3xl text-base leading-7 text-[#596457]">
        Ruang perawatan tubuh yang menghadirkan jeda dari rutinitas melalui
        sentuhan yang penuh perhatian, bahan pilihan, dan suasana yang tenang.
        Kami percaya waktu untuk merawat diri adalah bagian penting dari hidup
        yang seimbang.
      </p>
      <div className="mt-8 grid gap-8 border-y border-[#dedbce] py-7 sm:grid-cols-2">
        <section>
          <h2 className="font-serif text-xl">Informasi operasional</h2>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-[#788074]">
                Alamat
              </dt>
              <dd className="mt-1">Jl. Taman Sari No. 18, Ubud, Bali</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-[#788074]">
                Jam layanan
              </dt>
              <dd className="mt-1">Setiap hari, pukul 09.00–21.00 WITA</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.1em] text-[#788074]">
                Kontak reservasi
              </dt>
              <dd className="mt-1">+62 812 3456 7890 · hello@aromaspa.id</dd>
            </div>
          </dl>
        </section>
        <section>
          <h2 className="font-serif text-xl">Standar perawatan</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[#596457]">
            <li>Therapist terlatih untuk setiap jenis treatment.</li>
            <li>Ruang perawatan dibersihkan di antara setiap kunjungan.</li>
            <li>Minyak dan bahan perawatan dipilih dari bahan berkualitas.</li>
            <li>Konsultasi singkat dilakukan sebelum treatment dimulai.</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
