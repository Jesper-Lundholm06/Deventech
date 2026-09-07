import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { categories } from "../data/categories";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const categoryLabel =
    categories.find((c) => c.id === product.category)?.label ??
    product.category;

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative block -translate-y-0 overflow-hidden rounded-lg border border-line bg-white transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-navy/5"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-200 group-hover:scale-x-100" />

      {product.images.length > 0 ? (
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
      )}
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
