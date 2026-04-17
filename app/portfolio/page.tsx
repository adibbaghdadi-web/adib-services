import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { portfolioItems } from "@/data/portfolio";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle
            eyebrow="الأعمال"
            title="نماذج من أعمالي"
            description="مجموعة مختارة من الأعمال التي تعكس أسلوبي في التصميم والترتيب البصري والتنفيذ."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  {item.category}
                </span>

                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="leading-8 text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="mb-4 text-4xl font-bold">هل تريد عملًا مشابهًا؟</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-8 text-white/70">
            أرسل فكرتك أو نوع المشروع الذي تريده، وسأرتبه لك بأسلوب يناسبك ويخدم هدفك.
          </p>

          <Link
            href="/request"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            ابدأ مشروعك الآن
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}