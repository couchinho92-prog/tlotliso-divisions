import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/tlotliso-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tlotliso Divisions — One Stop Rentals" },
      { name: "description", content: "Tlotliso Divisions: event rentals, construction materials, logistics and shuttle services in Mt Fletcher, Eastern Cape." },
      { property: "og:title", content: "Tlotliso Divisions — One Stop Rentals" },
      { property: "og:description", content: "Event rentals, construction materials, logistics and shuttle services in Mt Fletcher, Eastern Cape." },
      { property: "og:image", content: logoAsset.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F5C]">
      <section className="relative flex flex-col items-center px-6 pt-12 pb-20 text-center">
        {/* Logo — the origin point */}
        <img
          src={logoAsset.url}
          alt="Tlotliso Divisions — One Stop Rentals"
          className="w-full max-w-2xl mx-auto drop-shadow-sm"
        />

        {/* Radiating divider */}
        <div className="mt-10 flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-16 bg-[#CC2228]" />
          <span className="h-2 w-2 rounded-full bg-[#CC2228]" />
          <span className="h-px w-16 bg-[#CC2228]" />
        </div>

        <h1 className="sr-only">Tlotliso Divisions</h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#0A1F5C]/80">
          From the mountains of Mt Fletcher — four divisions, one promise.
          Excellence elevated across every service we provide.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#divisions"
            className="rounded-full bg-[#0A1F5C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0A1F5C]/90"
          >
            Explore our divisions
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[#CC2228] px-6 py-3 text-sm font-semibold text-[#CC2228] transition hover:bg-[#CC2228] hover:text-white"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section id="divisions" className="border-t border-[#0A1F5C]/10 bg-[#F6F7FB] px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Construction Materials", d: "Bricks, sand, and supply for builders." },
            { t: "Event Rentals", d: "Tents, tables, chairs and inflatables." },
            { t: "Logistics Solutions", d: "Reliable transport across the Eastern Cape." },
            { t: "Shuttle Services", d: "Safe, on-time passenger shuttles." },
          ].map((c) => (
            <article
              key={c.t}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#0A1F5C]/10 transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-lg font-bold text-[#0A1F5C]">{c.t}</h2>
              <p className="mt-2 text-sm text-[#0A1F5C]/75">{c.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#0A1F5C]">Excellence Elevated</h2>
        <p className="mt-3 text-[#0A1F5C]/70">
          Mt Fletcher / Tlokweng, Eastern Cape · Enterprise No. 2025/939200/07
        </p>
      </section>
    </main>
  );
}
