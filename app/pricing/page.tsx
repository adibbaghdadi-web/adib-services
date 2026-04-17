import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/services";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle
            eyebrow="الأسعار"
            title="أسعار مبدئية واضحة"
            description="الأسعار التالية مبدئية، وتختلف حسب حجم الطلب، التفاصيل، ومدة التنفيذ."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-sm font-semibold text-green-300">
                  يبدأ من {service.priceFrom}
                </span>
              </div>

              <p className="mb-5 leading-8 text-white/70">{service.shortDescription}</p>

              <div className="mb-5 text-sm text-white/55">مدة التنفيذ: {service.delivery}</div>

              <ul className="mb-6 space-y-2 text-sm text-white/75">
                {service.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>

              <Link
                href={`/request?service=${service.slug}`}
                className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.03]"
              >
                اطلب الآن
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}