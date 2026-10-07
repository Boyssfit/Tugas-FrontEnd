import toast from "react-hot-toast";

export const confirmDeleteToast = (onConfirm) => {
  toast((t) => (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-ink">
        Apakah kamu yakin ingin menghapus produk ini?
      </p>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => {
            toast.dismiss(t.id);
          }}
          className="bg-border hover:bg-border text-ink text-xs px-3 py-1 rounded-md"
        >
          Batal
        </button>
        <button
          onClick={() => {
            onConfirm();
            toast.dismiss(t.id);
          }}
          className="bg-danger hover:bg-danger-hover text-white text-xs px-3 py-1 rounded-md"
        >
          Hapus
        </button>
      </div>
    </div>
  ), {
    duration: 4000,
  });
};
