import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { categories } from "../data/categories";
import { useTheme } from "../context/ThemeContext";

interface ProductCardProps {
  product: Product;
}

function ProductImage({ product }: { product: Product }) {
  return product.images.length > 0 ? (
    <div className="flex h-48 w-full items-center justify-center bg-white p-3">
      <img
        src={product.images[0]}
        alt={product.name}
        className="h-full w-full object-contain"
      />
    </div>
  ) : (
    <div className="flex h-48 w-full items-center justify-center bg-gray-200 text-gray-500">
      {product.name}
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { theme } = useTheme();
  const categoryLabel =
    categories.find((c) => c.id === product.category)?.label ??
    product.category;

  if (theme === "dark") {
    return (
      <Link
        to={`/products/${product.slug}`}
        className="group relative block overflow-hidden rounded-md border border-line bg-card transition-all duration-200 hover:-translate-y-1 hover:border-brand"
      >
        <span className="absolute inset-y-0 left-0 w-0.5 bg-brand/40 transition-all duration-200 group-hover:w-1 group-hover:bg-brand" />

        <ProductImage product={product} />

        <div className="border-t border-line p-4">
          <span className="inline-block rounded bg-brand-light px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
            {categoryLabel}
          </span>
          <h3 className="mt-3 font-display text-lg font-semibold text-navy">
            {product.name}
          </h3>
          <p className="text-sm text-slate">{product.machineType}</p>
        </div>
      </Link>
    );
  }

  if (theme === "heritage") {
    return (
      <Link
        to={`/products/${product.slug}`}
        className="group block overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      >
        <ProductImage product={product} />

        <div className="p-6">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand">
            {categoryLabel}
          </span>
          <h3 className="mt-3 font-display text-xl text-navy">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-slate">{product.machineType}</p>
        </div>
      </Link>
    );
  }

  // Light Precision (default) — unchanged
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative block -translate-y-0 overflow-hidden rounded-lg border border-line bg-card transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-navy/5"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-200 group-hover:scale-x-100" />

      <ProductImage product={product} />

      <div className="border-t border-line p-4">
        <span className="inline-block rounded-full bg-brand-light px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
          {categoryLabel}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold text-navy">
          {product.name}
        </h3>
        <p className="text-sm text-slate">{product.machineType}</p>
      </div>
    </Link>
  );
}
