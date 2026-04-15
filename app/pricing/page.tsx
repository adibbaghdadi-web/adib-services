import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/services";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24">
          <SectionTitle
            eyebrow="الأسعار"
            title="أسعار واضحة ومباشرة"
            description="الأسعار المعروضة هنا هي أسعار بداية تقريبية، وقد تختلف بعض الخدمات حسب التفاصيل أو المسافة أو نوع الطلب."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(255,255,255,0.03)]">
          <div className="hidden grid-cols-4 border-b border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white/80 md:grid">
            <div>الخدمة</div>
            <div>التصنيف</div>
            <div>السعر</div>
            <div>المدة</div>
          </div>

          <div className="divide-y divide-white/10">
            {services.map((item) => (
              <div
                key={item.id}
                className="grid gap-3 px-6 py-5 transition hover:bg-white/5 md:grid-cols-4 md:items-center"
              >
                <div className="text-base font-semibold text-white">{item.title}</div>
                <div className="text-white/70">{item.category}</div>
                <div className="text-white/70">{item.price}</div>
                <div className="text-white/70">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="mb-4 text-4xl font-bold">هل تحتاج سعراً خاصاً؟</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-8 text-white/70">
            بعض الخدمات تحتاج تفاصيل إضافية قبل تحديد السعر النهائي. تواصل مباشرة وسأعطيك السعر المناسب حسب طلبك.
          </p>

          <a
            href="https://wa.me/905362966530"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-green-500 px-6 py-3 font-semibold text-white shadow-[0_0_24px_rgba(34,197,94,0.45)] transition hover:scale-105"
          >
            اطلب التسعير عبر واتساب
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}