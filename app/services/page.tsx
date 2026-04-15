"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import AnimatedCard from "@/components/AnimatedCard";
import { services } from "@/data/services";

const categories = [
  "الكل",
  "خدمات رقمية",
  "خدمات توصيل",
  "خدمات تنسيق",
  "خدمات خاصة",
];

export default function ServicesPage() {
  const [active, setActive] = useState("الكل");

  const filtered = useMemo(() => {
    if (active === "الكل") return services;
    return services.filter((item) => item.category === active);
  }, [active]);

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24">
          <SectionTitle
            eyebrow="الخدمات"
            title="كل الخدمات في مكان واحد"
            description="اختر التصنيف المناسب لك، ثم استعرض الخدمات واطلب مباشرة خلال ثوانٍ."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <span>✔ أسعار واضحة</span>
          <span>✔ تنفيذ سريع</span>
          <span>✔ تواصل مباشر</span>
          <span>✔ طلب سهل عبر واتساب</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                active === cat
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item, index) => (
            <AnimatedCard key={item.id} delay={index * 0.05}>
              <ServiceCard item={item} />
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center shadow-[0_0_50px_rgba(255,255,255,0.03)]">
          <h2 className="mb-4 text-4xl font-bold">هل تحتاج خدمة غير موجودة؟</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-8 text-white/70">
            إذا لم تجد الخدمة التي تريدها، يمكنك إرسال طلب خاص وسأقوم بتنفيذه أو تنسيقه لك حسب الحاجة.
          </p>

          <a
            href="https://wa.me/905362966530"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-green-500 px-6 py-3 font-semibold text-white shadow-[0_0_24px_rgba(34,197,94,0.45)] transition hover:scale-105"
          >
            اطلب خدمة خاصة
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}