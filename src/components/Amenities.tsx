"use client";

import { Droplet, Fingerprint, Shield } from "lucide-react";

const amenities = [
  // {
  //   icon: Airplane,
  //   title: "Private Heliport",
  //   description: "Discrete arrivals for guests and executives.",
  // },
  {
    icon: Droplet,
    title: "Subterranean Wellness",
    description: "Thermal baths, recovery lounges, and movement studios.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Access",
    description: "Seamless security across each residence and gateway.",
  },
  {
    icon: Shield,
    title: "Vaulted Concierge",
    description: "Dedicated curation for every performance and service.",
  },
];

export default function Amenities() {
  return (
    <section id="estate" className="bg-[#F7F5F0] px-6 py-28 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
            Philosophy
          </p>
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="mt-6 max-w-md text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-slate-950 sm:text-6xl"
          >
            Uncompromised Seclusion
          </h2>
          <p className="mt-8 max-w-[55ch] text-base leading-8 text-slate-700 md:text-lg">
            The architecture is calibrated for presence without proclamation,
            combining engineered privacy, tactile materiality, and a life
            tailored to modern ritual.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-slate-300 hover:bg-slate-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  <Icon className="h-5 w-5 stroke-[1.5]" />
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.35em] text-slate-500">
                  {amenity.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
