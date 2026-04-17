import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle
            eyebrow="الخدمات"
            title="كل الخدمات في مكان واحد"
            description="خدمات مرتبة وواضحة تشمل التصميم، تطوير المواقع، الذكاء الاصطناعي، وتوصيل الطلبات."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="mb-4 text-4xl font-bold">لم تجد الخدمة التي تريدها؟</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-8 text-white/70">
            أرسل طلبك بتفاصيله، وإذا كانت الخدمة ممكنة سأرتبها لك بأفضل شكل وأوضح سعر.
          </p>

          <Link
            href="/request"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            أرسل طلبًا خاصًا
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}