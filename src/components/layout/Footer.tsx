import { Link } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/custom", label: "Custom Products" },
  { to: "/about", label: "About" },
  { to: "/downloads", label: "Downloads" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-brand bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">
            DEVENTECH AB
          </p>
          <p className="mt-3 text-sm text-white/70">
            Machines for saw blade manufacturing — setting, hardening,
            grinding, cutting, coiling and custom solutions.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Navigate
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/80 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Contact
          </p>
          <p className="mt-3 text-sm text-white/80">
            Mekanikervägen 8
            <br />
            SE-146 33 Tullinge, Sweden
            <br />
            Phone +46 (0)8-55 66 30 30
            <br />
            Fax +46 (0)8-55 66 30 31
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 sm:px-6">
        <p className="mx-auto max-w-6xl text-xs text-white/50">
          © {year} Deventech AB
        </p>
      </div>
    </footer>
  );
}
