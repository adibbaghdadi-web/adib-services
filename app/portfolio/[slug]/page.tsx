import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioItems } from "@/data/portfolio";
import { notFound } from "next/navigation";

export default async function PortfolioDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const item = portfolioItems.find((work) => work.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="text-sm text-white/60 transition hover:text-white"
          >
            ← العودة إلى الأعمال
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <img
              src={item.image}
              alt={item.title}
              className="mb-6 w-full rounded-[28px] border border-white/10 object-cover"
            />

            <h1 className="mb-4 text-4xl font-extrabold">{item.title}</h1>
            <p className="mb-6 leading-8 text-white/70">{item.fullDescription}</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">معلومات المشروع</h2>

              <div className="space-y-4 text-white/75">
                <div>
                  <span className="font-semibold text-white">التصنيف:</span>{" "}
                  {item.category}
                </div>
                <div>
                  <span className="font-semibold text-white">العميل:</span>{" "}
                  {item.client}
                </div>
                <div>
                  <span className="font-semibold text-white">مدة التنفيذ:</span>{" "}
                  {item.duration}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">الأدوات المستخدمة</h2>

              <div className="flex flex-wrap gap-3">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">هل تريد عملاً مشابهًا؟</h2>
              <p className="mb-5 leading-8 text-white/70">
                يمكنني تنفيذ تصميم مشابه أو مخصص بالكامل حسب احتياج مشروعك.
              </p>

              <Link
                href="/request"
                className="inline-block rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
              >
                اطلب خدمة الآن
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}