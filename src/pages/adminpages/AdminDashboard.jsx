export default function AdminDashboard() {
  const reservations = [
    {
      code: "AR-2048",
      guest: "Nadia Putri",
      treatment: "Traditional Body Massage",
      time: "10.00",
      status: "Menunggu",
    },
    {
      code: "AR-2047",
      guest: "Raka Mahendra",
      treatment: "Full Body Scrub",
      time: "11.30",
      status: "Terkonfirmasi",
    },
    {
      code: "AR-2046",
      guest: "Maya Lestari",
      treatment: "Aromatherapy Reflexology",
      time: "13.00",
      status: "Terkonfirmasi",
    },
  ];
  const therapists = [
    { name: "Ayu Sari", focus: "Traditional massage", state: "Tersedia" },
    { name: "Made Wulan", focus: "Body treatment", state: "Sedang melayani" },
    { name: "Komang Intan", focus: "Reflexology", state: "Tersedia" },
  ];

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
        Jumat, 2 Oktober 2026
      </p>
      <h1 className="mt-2 font-serif text-3xl">Ringkasan operasional</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Reservasi masuk", value: "18", note: "+4 dari kemarin" },
          {
            label: "Pendapatan hari ini",
            value: "Rp 8,45 jt",
            note: "12 treatment selesai",
          },
          {
            label: "Slot therapist",
            value: "6 / 9",
            note: "3 therapist tersedia",
          },
        ].map((stat) => (
          <article
            key={stat.label}
            className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
          >
            <p className="text-sm text-[var(--color-muted)]">{stat.label}</p>
            <p className="mt-3 font-serif text-3xl text-[var(--color-primary)]">
              {stat.value}
            </p>
            <p className="mt-2 text-xs text-[var(--color-accent)]">{stat.note}</p>
          </article>
        ))}
      </div>
      <section className="mt-9">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Hari ini
            </p>
            <h2 className="mt-1 font-serif text-2xl">Reservasi terbaru</h2>
          </div>
          <span className="text-sm text-[var(--color-muted)]">18 total</span>
        </div>
        <div className="overflow-x-auto border border-[var(--color-border)] bg-[var(--color-surface)]">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="bg-[var(--color-surface-muted)] text-xs uppercase tracking-[0.08em] text-[var(--color-muted)]">
              <tr>
                <th className="px-4 py-3 font-semibold">Kode</th>
                <th className="px-4 py-3 font-semibold">Tamu</th>
                <th className="px-4 py-3 font-semibold">Perawatan</th>
                <th className="px-4 py-3 font-semibold">Jam</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {reservations.map((reservation) => (
                <tr key={reservation.code}>
                  <td className="px-4 py-4 font-medium">{reservation.code}</td>
                  <td className="px-4 py-4">{reservation.guest}</td>
                  <td className="px-4 py-4">{reservation.treatment}</td>
                  <td className="px-4 py-4">{reservation.time}</td>
                  <td className="px-4 py-4">
                    <span className="inline-block bg-[var(--color-success-soft)] px-2 py-1 text-xs text-[var(--color-primary)]">
                      {reservation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-9">
        <h2 className="font-serif text-2xl">Ketersediaan therapist</h2>
        <div className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {therapists.map((therapist) => (
            <div
              key={therapist.name}
              className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] py-4"
            >
              <div>
                <p className="text-sm font-semibold">{therapist.name}</p>
                <p className="mt-1 text-xs text-[var(--color-muted)]">{therapist.focus}</p>
              </div>
              <span
                className={`text-xs ${therapist.state === "Tersedia" ? "text-[var(--color-primary)]" : "text-[var(--color-accent)]"}`}
              >
                {therapist.state}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
