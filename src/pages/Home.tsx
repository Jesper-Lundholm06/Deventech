import { Link } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import { useTheme } from "../context/ThemeContext";

const HERO_EYEBROW = "Welcome to Deventech AB";
const HERO_HEADING = "Saw blade manufacturing solutions";
const HERO_SUBLINE =
  "Precision machines for the whole production chain — plus custom-made manufacturing solutions.";

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
  "inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink";
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

function HeroCopy({ headingClassName }: { headingClassName: string }) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-widest text-brand">
        {HERO_EYEBROW}
      </p>
      <h1 className={headingClassName}>{HERO_HEADING}</h1>
      <p className="mt-4 max-w-md leading-relaxed text-slate">{HERO_SUBLINE}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link to="/products" className={primaryButtonClass}>
          View products
        </Link>
        <Link to="/contact" className={secondaryButtonClass}>
          Contact us
        </Link>
      </div>
    </>
  );
}

function LightHero() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <HeroCopy headingClassName="mt-3 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl" />
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
  );
}

function DarkHero() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            {HERO_EYEBROW}
          </p>
          <div className="mt-4 h-0.5 w-14 bg-brand" />
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl">
            {HERO_HEADING}
          </h1>
          <p className="mt-5 max-w-md leading-relaxed text-slate">
            {HERO_SUBLINE}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/products" className={primaryButtonClass}>
              View products
            </Link>
            <Link to="/contact" className={secondaryButtonClass}>
              Contact us
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-lg border border-line bg-white p-8 sm:h-96 lg:h-[440px]">
            <span className="absolute inset-x-0 top-0 h-0.5 bg-brand" />
            <img
              src="/images/products/SGM-310.png"
              alt="SGM-310 saw blade grinding machine"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex h-24 items-center justify-center rounded-lg border border-line bg-white p-4 sm:h-28">
              <img
                src="/images/products/BSM-220.png"
                alt="BSM-220 band saw blade setting machine"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-line bg-white p-4 sm:h-28">
              <img
                src="/images/products/DDW-100.png"
                alt="DDW-100 diamond dress wheel"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeritageHero() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px] lg:items-end lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            {HERO_EYEBROW}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.1] text-navy sm:text-6xl lg:text-7xl">
            {HERO_HEADING}
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-slate">
            {HERO_SUBLINE}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/products" className={primaryButtonClass}>
              View products
            </Link>
            <Link to="/contact" className={secondaryButtonClass}>
              Contact us
            </Link>
          </div>
        </div>

        <div className="flex h-48 items-center justify-center rounded-lg border border-line bg-white p-6 sm:h-56 lg:h-64">
          <img
            src="/images/products/BSM-220.png"
            alt="BSM-220 band saw blade setting machine"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function LightProcessSteps() {
  return (
    <>
      {/* Mobile: vertical stepper */}
      <div className="mt-10 flex flex-col md:hidden">
        {processSteps.map((step, index) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-card font-display text-sm font-bold text-brand">
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
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-card font-display text-sm font-bold text-brand">
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
    </>
  );
}

function DarkProcessSteps() {
  return (
    <>
      {/* Mobile: compact vertical stepper, squared nodes */}
      <div className="mt-8 flex flex-col md:hidden">
        {processSteps.map((step, index) => (
          <div key={step.number} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-brand bg-card font-display text-xs font-bold text-brand">
                {step.number}
              </div>
              {index < processSteps.length - 1 && (
                <div className="w-px flex-1 bg-brand/40" />
              )}
            </div>
            <div className={index < processSteps.length - 1 ? "pb-6" : ""}>
              <p className="text-xs font-semibold uppercase tracking-wide text-navy">
                {step.name}
              </p>
              <p className="mt-1 text-sm text-slate">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: tight technical band, continuous connecting line */}
      <div className="relative mt-8 hidden md:grid md:grid-cols-5 md:gap-4">
        <div className="absolute inset-x-0 top-4 h-px bg-brand/40" />
        {processSteps.map((step) => (
          <div key={step.number} className="relative">
            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-sm border border-brand bg-card font-display text-xs font-bold text-brand">
              {step.number}
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy">
              {step.name}
            </p>
            <p className="mt-1 text-sm text-slate">{step.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function HeritageProcessSteps() {
  return (
    <div className="mt-10 max-w-xl space-y-10 border-l-2 border-brand/25 pl-8">
      {processSteps.map((step) => (
        <div key={step.number} className="relative">
          <span className="absolute -left-[41px] top-1 h-3.5 w-3.5 rounded-full border-2 border-surface bg-brand" />
          <p className="text-xs font-semibold uppercase tracking-widest text-slate">
            {step.number}
          </p>
          <p className="mt-1 font-display text-xl text-navy">{step.name}</p>
          <p className="mt-1 leading-relaxed text-slate">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const { theme } = useTheme();

  return (
    <div>
      {/* Hero */}
      {theme === "dark" ? (
        <DarkHero />
      ) : theme === "heritage" ? (
        <HeritageHero />
      ) : (
        <LightHero />
      )}

      {/* Production process */}
      <div className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
            From strip steel to finished blade
          </h2>
          <p className="mt-2 max-w-xl text-slate">
            Our machines cover the whole saw blade production chain.
          </p>

          {theme === "dark" ? (
            <DarkProcessSteps />
          ) : theme === "heritage" ? (
            <HeritageProcessSteps />
          ) : (
            <LightProcessSteps />
          )}

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
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
