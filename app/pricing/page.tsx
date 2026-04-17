import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/services";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle
            eyebrow="الأسعار"
            title="أسعار مبدئية واضحة"
            description="الأسعار التالية مبدئية، وتختلف حسب حجم الطلب والتفاصيل المطلوبة."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
              <p className="mb-5 text-white/65">{service.shortDescription}</p>
              <div className="mb-3 text-lg font-semibold text-green-400">
                يبدأ من {service.priceFrom}
              </div>
              <div className="text-white/55">مدة التنفيذ: {service.delivery}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}