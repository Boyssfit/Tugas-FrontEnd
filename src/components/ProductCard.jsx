//import link router dom
import { Link } from "react-router-dom";
//import useCart dari CartContext
import { useCart } from "../utils/CartContext";
//props p(product object dengan field: id, name, slug, price, stock, category, category_name, rating, img) dari dashboard
export default function ProductCard({ p }) {
  const { cart, addToCart } = useCart();
  const isSaved = cart.some((item) => item.id === p.id);
  return (
    <div key={p.id} className="border rounded-lg p-4 shadow hover:shadow-lg">
      <h2 className="font-semibold">{p.name}</h2>
      <p className="text-muted">{p.price}</p>
      <Link
        to={`/product/${p.slug}`} state={ p }
        className="text-primary hover:underline mt-2 block"
      >
        Lihat Detail
      </Link>
      <button
        type="button"
        onClick={() => addToCart(p)}
        disabled={isSaved}
        className="mt-3 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover disabled:cursor-default disabled:bg-muted flex items-center gap-2"
      >
        {isSaved ? "Tersimpan" : "Simpan"}
      </button>
    </div>

  );
}
