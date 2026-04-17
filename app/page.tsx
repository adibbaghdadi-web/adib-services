import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const reasons = [
  {
    title: "شكل احترافي",
    desc: "واجهة مرتبة وواضحة تعطي العميل إحساس الثقة من أول نظرة.",
  },
  {
    title: "تنفيذ سريع",
    desc: "التركيز على سرعة الإنجاز بدون التضحية بالجودة أو الشكل النهائي.",
  },
  {
    title: "تواصل واضح",
    desc: "العميل يعرف ماذا يطلب، وأنت تعرف ماذا تنفذ، بدون تعقيد أو فوضى.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              ADIB
            </span>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
              نُحوّل فكرتك إلى
              <span className="block text-green-400">نتيجة حقيقية</span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/70">
              خدمات احترافية تشمل التصميم، تطوير المواقع، وخدمات الذكاء الاصطناعي —
              بسرعة، جودة، وتجربة مرتبة.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.18)] transition hover:scale-105"
              >
                استعرض الخدمات
              </Link>

              <Link
                href="/request"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                اطلب الآن
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <span>✔ سرعة في الإنجاز</span>
          <span>✔ جودة عالية</span>
          <span>✔ تجربة مرتبة</span>
          <span>✔ حلول عملية</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle
          eyebrow="الخدمات"
          title="خدمات عملية بشكل احترافي"
          description="كل خدمة مرتبة بوضوح، بسعر ابتدائي واضح، وتجربة طلب بسيطة بدون تكرار أو إزعاج."
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle
          eyebrow="لماذا ADIB"
          title="واجهة قوية، تنفيذ واضح، ونتيجة تشرف"
          description="الهدف ليس مجرد موقع جميل، بل موقع يعطي العميل الثقة ويجعله يفهم الخدمة بسرعة."
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10"
            >
              <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
              <p className="leading-8 text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center shadow-[0_0_60px_rgba(255,255,255,0.04)]">
          <h2 className="mb-4 text-4xl font-bold">جاهز نبدأ؟</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-8 text-white/70">
            إذا عندك فكرة أو مشروع وتريد تنفيذه بشكل احترافي، ابدأ الآن من صفحة الطلب
            وسأرتب لك كل شيء بشكل واضح.
          </p>

          <Link
            href="/request"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            اطلب الخدمة
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}