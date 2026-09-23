import { useState } from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  src: string;
  alt: string;
}

function CustomerLogo({ src, alt }: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    <div className="flex h-24 w-52 items-center justify-center rounded-lg border border-line bg-white p-5 sm:h-28 sm:w-60 sm:p-6">
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

interface RenderProps {
  src: string;
  alt: string;
  caption: string;
}

function EngineeringRender({ src, alt, caption }: RenderProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-card">
      <div className="flex h-48 items-center justify-center p-5 sm:h-56 sm:p-6">
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      </div>
      <figcaption className="border-t border-line px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function CustomProducts() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">
          Custom Products
        </h1>
        <p className="mt-2 text-slate">
          Custom-made manufacturing solutions — engineered, built and
          delivered turn-key.
        </p>

        <div className="mt-8 max-w-2xl space-y-5">
          <p className="text-lg leading-relaxed text-navy">
            Deventech AB develops and builds custom made manufacturing
            solutions for a few strategic customers outside the saw blade
            sector. The projects range from jigs and assembly fixtures to
            complex multi-axis servo controlled machines and complete
            manufacturing lines.
          </p>
          <p className="leading-relaxed text-slate">
            Our customers are found in a variety of industries like tool
            manufacturing, automotive components, furniture manufacturing,
            and light components assembly.
          </p>
          <p className="leading-relaxed text-slate">
            We deliver turn-key solutions. Our engineers are responsible for
            the whole project, from initial analysis through design and
            construction to installation and training of operators.
          </p>
          <p className="leading-relaxed text-slate">
            All mechanical designs are made in 3D-CAD. Critical components
            are analyzed and optimised with FEM software.
          </p>
        </div>
      </div>

      <div className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate">
            Selected customers
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <CustomerLogo src="/images/custom/sandvik.png" alt="Sandvik" />
            <CustomerLogo src="/images/custom/camfil.png" alt="Camfil" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate">
          Engineering &amp; analysis
        </p>
        <p className="mt-2 max-w-2xl text-slate">
          Every design is built in 3D-CAD from the start, with critical
          components verified and optimised through FEM simulation before a
          single part is machined.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <EngineeringRender
            src="/images/custom/002.png"
            alt="FEM stress analysis render"
            caption="FEM stress analysis"
          />
          <EngineeringRender
            src="/images/custom/004.png"
            alt="3D-CAD structural design render"
            caption="3D-CAD structural design"
          />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="flex flex-col items-start gap-4 rounded-lg bg-surface px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-semibold text-navy">
            Have a project in mind?
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
