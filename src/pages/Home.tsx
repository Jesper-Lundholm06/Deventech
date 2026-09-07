import { Link } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

interface ProcessStep {
  number: string;
  name: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Setting",
    description: "Precise, repeatable tooth setting.",
  },
  {
    number: "02",
    name: "Hardening",
    description: "Induction hardening of the tooth tips.",
  },
  {
    number: "03",
    name: "Grinding",
    description: "From blank to finished, ground blade.",
  },
  {
    number: "04",
    name: "Cutting",
    description: "Cut to length with tooth matching.",
  },
  {
    number: "05",
    name: "Coiling",
    description: "Coiling, service and handling.",
  },
];

const featuredSlugs = ["bsm-220", "bhm-220e", "sgm-310", "bcm-310"];
const featuredProducts = featuredSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is Product => Boolean(product));

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy";
const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-md border border-line px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-brand hover:text-brand";

function MontagePanel({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-line bg-white p-4 ${className ?? ""}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Welcome to Deventech AB
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
              Saw blade manufacturing solutions
            </h1>
            <p className="mt-4 max-w-md leading-relaxed text-slate">
              Precision machines for the whole production chain — plus
              custom-made manufacturing solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className={primaryButtonClass}>
                View products
              </Link>
              <Link to="/contact" className={secondaryButtonClass}>
                Contact us
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <MontagePanel
              src="/images/products/SGM-310.png"
              alt="SGM-310 saw blade grinding machine"
              className="row-span-2"
            />
            <MontagePanel
              src="/images/products/BSM-220.png"
              alt="BSM-220 band saw blade setting machine"
              className="h-32 sm:h-36"
            />
            <MontagePanel
              src="/images/products/DDW-100.png"
              alt="DDW-100 diamond dress wheel"
              className="h-32 sm:h-36"
            />
          </div>
        </div>
      </div>

      {/* Production process */}
      <div className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
            From strip steel to finished blade
          </h2>
          <p className="mt-2 max-w-xl text-slate">
            Our machines cover the whole saw blade production chain.
          </p>

          {/* Mobile: vertical stepper */}
          <div className="mt-10 flex flex-col md:hidden">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-white font-display text-sm font-bold text-brand">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px flex-1 bg-brand/25" />
                  )}
                </div>
                <div className={index < processSteps.length - 1 ? "pb-8" : ""}>
                  <p className="font-display text-base font-semibold text-navy">
                    {step.name}
                  </p>
                  <p className="mt-1 text-sm text-slate">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: horizontal stepper */}
          <div className="mt-10 hidden md:grid md:grid-cols-5 md:gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number}>
                <div className="flex items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-white font-display text-sm font-bold text-brand">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="ml-2 h-px flex-1 bg-brand/25" />
                  )}
                </div>
                <p className="mt-4 font-display text-base font-semibold text-navy">
                  {step.name}
                </p>
                <p className="mt-1 text-sm text-slate">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/products"
              className="text-sm font-semibold text-brand transition-colors hover:text-navy"
            >
              View all products →
            </Link>
          </div>
        </div>
      </div>

      {/* Featured products */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Featured machines
        </h2>
        <p className="mt-2 text-slate">A sample of the Deventech range.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-8">
          <Link to="/products" className={secondaryButtonClass}>
            View all products
          </Link>
        </div>
      </div>

      {/* Custom products teaser */}
      <div className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                Custom-made machines
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-slate">
                Beyond our standard range, Deventech develops and builds
                turn-key custom manufacturing solutions — from jigs and
                fixtures to complete multi-axis production lines.
              </p>
              <Link to="/custom" className={`${primaryButtonClass} mt-6`}>
                Explore custom products
              </Link>
            </div>
            <div className="flex h-56 items-center justify-center rounded-lg border border-line bg-white p-6 sm:h-64">
              <img
                src="/images/custom/004.png"
                alt="3D-CAD structural design render"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col items-start gap-4 rounded-lg bg-surface px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-semibold text-navy">
            Let's talk about your production
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
