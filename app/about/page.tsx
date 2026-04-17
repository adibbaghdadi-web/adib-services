import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
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
    <main>
      <Navbar />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="من نحن"
            title="ADIB ليس مجرد موقع، بل تجربة مرتبة"
            description="تم بناء ADIB ليعطي العميل الثقة من أول زيارة، ويوصل الفكرة والخدمة بشكل واضح ومقنع."
            centered
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="info-box">
            <p>
              ADIB هو مشروع خدمات احترافي يركز على تقديم التصميم، تطوير المواقع،
              الذكاء الاصطناعي، وبعض الخدمات العملية بشكل مرتب وواضح.
            </p>
            <p>
              الهدف ليس فقط عرض خدمات، بل بناء تجربة تجعل العميل يفهم ما تقدمه بسرعة،
              ويشعر أن الطلب بسيط، والنتيجة قوية.
            </p>
            <p>
              لهذا تم بناء الموقع بأسلوب نظيف، بدون تكرار مزعج، وبدون تشويش في الرحلة
              من الصفحة الرئيسية حتى إرسال الطلب.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-3">
            {values.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="card-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="info-box cta-box">
            <h3>جاهز نبدأ؟</h3>
            <p>إذا أعجبك الأسلوب وتريد تنفيذ خدمة أو مشروع، انتقل الآن إلى صفحة الطلب.</p>
            <Link href="/request" className="button button-light">
              انتقل إلى الطلب
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}