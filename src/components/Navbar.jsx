import { Link, NavLink } from "react-router-dom";
import { useCart } from "../utils/CartContext";

const navLinkClass = ({ isActive }) =>
  `border-b pb-1 transition-colors hover:text-[#9a7555] ${
    isActive
      ? "border-[#9a7555] text-[#536b56]"
      : "border-transparent"
  }`;

export default function Navbar() {
  const { totalQty } = useCart();
  return (
    <nav className="border-b border-[#d8d4c5] bg-[#f8f7f0] text-[#293d32]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Aroma Spa & Wellness, beranda"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#536b56] text-sm font-semibold text-[#f8f7f0]">
            AS
          </span>
          <span className="font-serif text-xl leading-tight">
            Aroma Spa <span className="text-[#9a7555]">&</span> Wellness
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
          <NavLink to="/" end className={navLinkClass}>
            Perawatan
          </NavLink>
          <NavLink
            to="/cart"
            className={(props) =>
              `${navLinkClass(props)} inline-flex items-center gap-2`
            }
          >
            Saved
            {totalQty > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-[#c77f54] px-1 text-xs text-white">
                {totalQty}
              </span>
            )}
          </NavLink>
          <NavLink to="/checkout" className={navLinkClass}>
            Jadwal
          </NavLink>
          <NavLink
            to="/login"
            className={navLinkClass}
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
