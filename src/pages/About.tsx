import { useState } from "react";
import { Link } from "react-router-dom";

interface HistoryPhotoProps {
  src: string;
  alt: string;
  float: "left" | "right";
}

function HistoryPhoto({ src, alt, float }: HistoryPhotoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  const floatClass =
    float === "right"
      ? "sm:float-right sm:ml-8 sm:w-56"
      : "sm:float-left sm:mr-8 sm:w-56";

  return (
    <figure
      className={`mb-6 w-full overflow-hidden rounded-lg border border-line bg-white sm:mb-4 ${floatClass}`}
    >
      <div className="aspect-[3/4] w-full">
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      </div>
    </figure>
  );
}

interface Milestone {
  year: string;
  text: string;
}

const milestones: Milestone[] = [
  {
    year: "2002",
    text: "We presented the most rigid setting machine for handsaws on the market.",
  },
  {
    year: "2004",
    text: "We introduced the first band saw setting machine of the new generation.",
  },
  {
    year: "2005",
    text: "We launched the first and only grinding machine for both curved and straight saw blades. We further improved on this innovation by designing it with an integrated setting unit as an option.",
  },
];

export default function About() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">
          Our History
        </h1>
        <p className="mt-3 max-w-2xl font-display text-xl text-slate sm:text-2xl">
          Our history as a producer of machines for saw blade manufacturing
          dates back more than 80 years.
        </p>

        <div className="mt-10 max-w-2xl">
          <HistoryPhoto
            src="/images/history/history001.png"
            alt="Archival black-and-white photo of the saw blade factory"
            float="right"
          />
          <p className="text-lg leading-relaxed text-navy">
            On September 28 1925, our founder Erik Timander was granted the
            patent on the grouped teeth arrangement. He realized that by
            varying the distance between the teeth one could eliminate
            resonance. The advantages were increased efficiency, less
            vibration, less noise, and a cleaner cut.
          </p>
          <p className="mt-5 leading-relaxed text-slate">
            In the early 1927 a saw blade factory (A-B Orsa Sågbladsfabrik)
            was established in Orsa by the inventor Erik Timander, backed by
            a local businessman. Over the years Erik developed the
            machinery, tooling and process for the saw blade factory that
            became the biggest in Sweden at that time. Among the machines
            developed were automatic sharpening machines and setting
            machines for bow-saw blades.
          </p>

          <div className="clear-both" />

          <p className="mt-5 leading-relaxed text-slate">
            When Erik retired his son Gösta Timander became the new board
            director of the saw blade factory. He ran the company until
            1972 when it was sold to Edsbyns Industri AB (EIA) and one year
            later EIA was acquired by Sandvik.
          </p>
          <p className="mt-5 leading-relaxed text-slate">
            In 1965 Gösta founded a separate company (Timanders Mekaniska
            Verkstad AB) that would specialize in saw manufacturing
            machinery. The company has over the years developed and
            supplied machines to many of the most respected saw blade
            manufacturers in the world.
          </p>

          <HistoryPhoto
            src="/images/history/history002.png"
            alt="Archival black-and-white photo of the saw blade factory"
            float="left"
          />
          <p className="mt-5 leading-relaxed text-slate">
            Today, our commitment to the saw blade industry is as strong as
            ever. Our goal is to continuously develop new and innovative
            manufacturing solutions for the whole chain from strip steel to
            assembled and labeled saws. We are constantly evaluating new
            technology to find the most efficient way for our customers to
            produce the world's best saw blades.
          </p>

          <div className="clear-both" />
        </div>
      </div>

      <div className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate">
            Milestones
          </p>

          <div className="mt-8 space-y-10 border-l-2 border-brand/25 pl-8">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative">
                <span className="absolute -left-[41px] top-1 h-3.5 w-3.5 rounded-full border-2 border-surface bg-brand" />
                <p className="font-display text-3xl font-bold text-navy sm:text-4xl">
                  {milestone.year}
                </p>
                <p className="mt-2 max-w-xl leading-relaxed text-slate">
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <p className="font-display text-2xl font-semibold leading-snug text-navy sm:text-3xl">
            When you want a reliable and trustworthy partner — our know-how,
            experience and confidentiality is at your service.
          </p>
          <p className="mt-3 font-display text-lg text-brand">Welcome</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="flex flex-col items-start gap-4 rounded-lg bg-surface px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg font-semibold text-navy">
            Want to know more about us?
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
