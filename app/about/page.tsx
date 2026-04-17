import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const values = [
  {
    title: "وضوح",
    desc: "العميل يفهم الخدمة بسرعة، بدون تشتيت أو ازدحام.",
  },
  {
    title: "ترتيب",
    desc: "كل صفحة وكل عنصر له مكانه ودوره في إقناع العميل.",
  },
  {
    title: "نتيجة",
    desc: "التركيز ليس على الشكل فقط، بل على النتيجة النهائية.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_35%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle
            eyebrow="من نحن"
            title="ADIB ليس مجرد موقع، بل تجربة مرتبة"
            description="تم بناء ADIB ليعطي العميل الثقة من أول زيارة، ويوصل الفكرة والخدمة بشكل واضح ومقنع."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 leading-8 text-white/70">
          <p className="mb-6">
            ADIB هو مشروع خدمات احترافي يركز على تقديم التصميم، تطوير المواقع،
            الذكاء الاصطناعي، وبعض الخدمات العملية بشكل مرتب وواضح.
          </p>
          <p className="mb-6">
            الهدف ليس فقط عرض خدمات، بل بناء تجربة تجعل العميل يفهم ما تقدمه بسرعة،
            ويشعر أن الطلب بسيط، والنتيجة قوية.
          </p>
          <p>
            لهذا تم بناء الموقع بأسلوب نظيف، بدون تكرار مزعج، وبدون تشويش في الرحلة
            من الصفحة الرئيسية حتى إرسال الطلب.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
              <p className="leading-8 text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="mb-4 text-4xl font-bold">جاهز نبدأ؟</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-8 text-white/70">
            إذا أعجبك الأسلوب وتريد تنفيذ خدمة أو مشروع، انتقل الآن إلى صفحة الطلب.
          </p>

          <Link
            href="/request"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            انتقل إلى الطلب
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}