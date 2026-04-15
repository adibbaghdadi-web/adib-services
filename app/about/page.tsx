import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

const values = [
  {
    title: "السرعة",
    text: "الهدف هو تنفيذ الخدمة أو تنسيقها بأسرع وقت ممكن بدون تعقيد.",
  },
  {
    title: "الوضوح",
    text: "كل شيء واضح: الخدمة، السعر، المدة، وطريقة الطلب.",
  },
  {
    title: "المرونة",
    text: "سواء كانت خدمة رقمية، ميدانية، أو طلبًا خاصًا، يمكن التعامل معها.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24">
          <SectionTitle
            eyebrow="من نحن"
            title="منصة خدمات مرنة وسريعة"
            description="Adib Services ليست مجرد صفحة عرض، بل منصة خدمات شاملة تهدف إلى جمع أكثر من نوع خدمة في مكان واحد بطريقة واضحة وسهلة."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 leading-8 text-white/75">
          <p className="mb-5">
            الفكرة الأساسية من Adib Services هي أن يجد العميل كل ما يحتاجه في
            مكان واحد: خدمات رقمية، خدمات توصيل، خدمات تنسيق، وخدمات حسب الطلب.
          </p>

          <p className="mb-5">
            بدل أن يبحث العميل في عدة أماكن، يمكنه الدخول إلى الموقع، اختيار
            الخدمة، إرسال التفاصيل، ثم بدء التنفيذ أو التنسيق مباشرة.
          </p>

          <p>
            التركيز هنا ليس فقط على الشكل، بل على أن يكون الموقع عمليًا،
            واضحًا، وسهل الاستخدام، ويعطي العميل شعورًا بالثقة من أول دقيقة.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
              <p className="leading-8 text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}