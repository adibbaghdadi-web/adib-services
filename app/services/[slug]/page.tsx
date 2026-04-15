import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = services.find((service) => service.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8">
          <Link
            href="/services"
            className="text-sm text-white/60 transition hover:text-white"
          >
            ← العودة إلى الخدمات
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-6 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10">
              <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
                {item.category}
              </span>

              <h1 className="mb-4 text-4xl font-extrabold">{item.title}</h1>

              <p className="leading-8 text-white/70">{item.description}</p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">ما الذي تتضمنه الخدمة؟</h2>

              <ul className="space-y-3 text-white/70">
                {item.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">تفاصيل الخدمة</h2>

              <div className="space-y-4 text-white/75">
                <div>
                  <span className="font-semibold text-white">السعر:</span>{" "}
                  {item.price}
                </div>

                <div>
                  <span className="font-semibold text-white">المدة:</span>{" "}
                  {item.duration}
                </div>

                <div>
                  <span className="font-semibold text-white">التصنيف:</span>{" "}
                  {item.category}
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
              <h2 className="mb-4 text-2xl font-bold">جاهز للطلب؟</h2>

              <p className="mb-5 leading-8 text-white/70">
                إذا كانت هذه الخدمة مناسبة لك، ابدأ الآن وأرسل تفاصيلك مباشرة.
              </p>

              <Link
                href={`/request?service=${encodeURIComponent(item.title)}`}
                className="inline-block rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
              >
                اطلب هذه الخدمة
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}