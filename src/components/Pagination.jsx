import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // Fungsi untuk berpindah halaman sebelumnya
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  // Fungsi untuk berpindah halaman berikutnya
  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Membuat daftar nomor halaman (opsional, bisa dikembangkan)
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 mx-1 rounded-md ${
            i === currentPage
              ? "bg-primary text-white"
              : "bg-surface-muted text-ink hover:bg-border"
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center mt-6 space-x-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          currentPage === 1
            ? "bg-border text-muted cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary-hover"
        }`}
      >
        Sebelumnya
      </button>
      <div className="flex space-x-1">{renderPageNumbers()}</div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          currentPage === totalPages
            ? "bg-border text-muted cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary-hover"
        }`}
      >
        Berikutnya
      </button>
    </div>
  );
}
