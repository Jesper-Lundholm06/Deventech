import { useMemo, useState } from "react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import type { CategoryId } from "../types/product";
import ProductCard from "../components/ProductCard";

type Filter = CategoryId | "all";

export default function Products() {
  const [filter, setFilter] = useState<Filter>("all");

  const availableCategories = useMemo(
    () =>
      categories.filter((category) =>
        products.some((product) => product.category === category.id),
      ),
    [],
  );

  const filteredProducts = useMemo(
    () =>
      filter === "all"
        ? products
        : products.filter((product) => product.category === filter),
    [filter],
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">
        Products
      </h1>
      <p className="mt-2 text-slate">
        The full Deventech machine range, by production stage.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            filter === "all"
              ? "border-brand bg-brand text-white"
              : "border-line text-navy hover:border-brand hover:text-brand"
          }`}
        >
          All
        </button>
        {availableCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setFilter(category.id)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === category.id
                ? "border-brand bg-brand text-white"
                : "border-line text-navy hover:border-brand hover:text-brand"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
