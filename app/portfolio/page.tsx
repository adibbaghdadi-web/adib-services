"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioItems } from "@/data/portfolio";

const filters = [
  { label: "الكل", value: "all" },
  { label: "شعارات", value: "شعارات" },
  { label: "سوشيال ميديا", value: "سوشيال ميديا" },
  { label: "هوية بصرية", value: "هوية بصرية" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="mb-4 text-5xl font-extrabold">أعمالي</h1>
        <p className="mx-auto max-w-2xl text-white/70 leading-8">
          مجموعة من الأعمال التي توضح أسلوبي في التصميم وطريقة تنفيذ المشاريع.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                activeFilter === filter.value
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => (
  <Link
    key={item.id}
    href={`/portfolio/${item.slug}`}
    className="group block rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-white/20"
  >
    <img
      src={item.image}
      alt={item.title}
      className="mb-4 h-48 w-full rounded-2xl object-cover"
    />

    <span className="mb-2 inline-block text-xs text-white/60">
      {item.category}
    </span>

    <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>

    <p className="mb-5 text-white/70 leading-7">{item.description}</p>

    <div className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition group-hover:bg-white/10">
      عرض تفاصيل المشروع
    </div>
  </Link>
))}
        </div>
      </section>

      <Footer />
    </main>
  );
}