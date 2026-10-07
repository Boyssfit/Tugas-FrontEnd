import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductSearchBar({ onSearch, categories }) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ keyword, category });
  };

  const handleAddProduct = () => {
    navigate("/admin/add-product");
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-surface shadow-md rounded-xl p-4 mb-6 space-y-3 md:space-y-0">
      {/* Bagian Form Search */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto"
      >
        {/* Dropdown Kategori */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-border rounded-lg p-2 text-ink w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Semua Kategori</option>
          {categories &&
            categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
        </select>

        {/* Input Kata Kunci */}
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Cari produk..."
          className="border border-border rounded-lg p-2 flex-1 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Tombol Cari */}
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition duration-200"
        >
          Cari
        </button>
      </form>

      {/* Tombol Tambah Produk */}
      <button
        onClick={handleAddProduct}
        className="bg-success text-white px-5 py-2 rounded-lg hover:bg-success-hover transition duration-200 shadow-sm"
      >
        + Tambah Produk
      </button>
    </div>
  );
}
