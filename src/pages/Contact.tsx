import { Mail, Phone } from "lucide-react";

interface ContactPerson {
  name: string;
  role: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
}

const people: ContactPerson[] = [
  {
    name: "Lars Engström",
    role: "Sales Manager",
    phoneDisplay: "+46 (0)76-800 4000",
    phoneHref: "tel:+46768004000",
    email: "lars.engstrom@deventech.se",
  },
  {
    name: "Anders Hansson",
    role: "CEO",
    phoneDisplay: "+46 (0)70-240 5702",
    phoneHref: "tel:+46702405702",
    email: "anders.hansson@deventech.se",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="font-display text-3xl font-bold text-navy sm:text-4xl">
        Contact
      </h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-slate">
        If you need further information or would like to discuss a
        particular manufacturing need, please give us a call or send an
        e-mail. We will do our utmost to meet your demands.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {people.map((person) => (
          <div
            key={person.name}
            className="rounded-lg border border-line bg-card p-6"
          >
            <p className="font-display text-lg font-semibold text-navy">
              {person.name}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate">
              {person.role}
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <a
                href={person.phoneHref}
                className="flex items-center gap-2 text-brand transition-colors hover:text-navy"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {person.phoneDisplay}
              </a>
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-2 text-brand transition-colors hover:text-navy"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {person.email}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-md rounded-lg bg-surface p-6">
        <p className="font-display text-lg font-semibold text-navy">
          Deventech AB
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate">
          Mekanikervägen 8
          <br />
          SE-146 33 Tullinge, Sweden
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate">
          Phone:{" "}
          <a
            href="tel:+46855663030"
            className="text-brand transition-colors hover:text-navy"
          >
            +46 (0)8-55 66 30 30
          </a>
          <br />
          Fax: +46 (0)8-55 66 30 31
        </p>
      </div>
    </div>
  );
}
