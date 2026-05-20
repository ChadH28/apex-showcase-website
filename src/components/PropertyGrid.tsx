"use client";

import Image from "next/image";

const properties = [
  {
    title: "Clifton Cove Residence",
    location: "Clifton, Cape Town",
    price: "R 96,000,000",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Signal Hill Atelier",
    location: "Signal Hill, Cape Town",
    price: "R 72,500,000",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Table Bay Pavilion",
    location: "V&A Waterfront, Cape Town",
    price: "R 84,300,000",
    src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function PropertyGrid() {
  return (
    <section id="residences" className="bg-white px-6 py-28 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl text-slate-900">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
            Portfolio
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-slate-950 sm:text-5xl">
            Cape Town’s most poetic coastal residences.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.9fr_1fr_1fr] lg:grid-rows-[repeat(2,minmax(0,1fr))]">
          {properties.map((property, index) => (
            <article
              key={property.title}
              className={
                "group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] " +
                (index === 0 ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-1")
              }
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <Image
                  src={property.src}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 55vw, 100vw"
                      : "(min-width: 1024px) 30vw, 100vw"
                  }
                />
              </div>
              <div className="border-t border-slate-200 px-6 py-6">
                <p className="text-[0.7rem] uppercase tracking-[0.4em] text-slate-500">
                  {property.location}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                  {property.title}
                </h3>
                <p className="mt-4 text-base font-mono text-slate-700 transition-transform duration-300 ease-in-out group-hover:translate-y-0.5">
                  {property.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
