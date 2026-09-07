import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";
import NotFound from "./NotFound";

function toYouTubeEmbedUrl(url: string): string {
  const videoId = new URL(url).searchParams.get("v");
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <NotFound />;
  }

  const categoryLabel =
    categories.find((c) => c.id === product.category)?.label ??
    product.category;

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <nav className="text-sm text-slate">
        <Link to="/products" className="transition-colors hover:text-brand">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{product.name}</span>
      </nav>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-full bg-brand-light px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
            {categoryLabel}
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-1 text-slate">{product.machineType}</p>
        </div>

        <a
          href={product.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy"
        >
          Download brochure (PDF)
        </a>
      </div>

      {product.images.length > 0 ? (
        <div className="mt-8 flex h-96 w-full items-center justify-center rounded-lg border border-line bg-white p-6">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <div className="mt-8 flex h-64 w-full items-center justify-center rounded-lg bg-gray-200 text-gray-500">
          {product.name}
        </div>
      )}

      <div className="mt-10 max-w-2xl space-y-8">
        {product.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-xl font-semibold text-navy">
              {section.heading}
            </h2>
            <p className="mt-2 leading-relaxed text-slate">{section.body}</p>
          </div>
        ))}
      </div>

      {product.keySpecs && product.keySpecs.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate">
            Key specs
          </h2>
          <dl className="mt-3 max-w-2xl divide-y divide-line rounded-lg border border-line">
            {product.keySpecs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-2 gap-4 px-4 py-3"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate">
                  {spec.label}
                </dt>
                <dd className="font-display text-sm font-semibold text-navy">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {product.videoUrl && (
        <div className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate">
            Video
          </h2>
          <div className="mt-3 aspect-video w-full max-w-2xl overflow-hidden rounded-lg border border-line">
            <iframe
              className="h-full w-full"
              src={toYouTubeEmbedUrl(product.videoUrl)}
              title={`${product.name} video`}
              allowFullScreen
            />
          </div>
        </div>
      )}

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="font-display text-xl font-semibold text-navy">
            Related machines
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((related) => (
              <ProductCard key={related.slug} product={related} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 flex flex-col items-start gap-4 rounded-lg bg-surface px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg font-semibold text-navy">
          Interested in this machine?
        </p>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
