import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const values = [
  {
    title: "وضوح",
    desc: "كل خدمة وكل خطوة في الموقع مصممة لتكون مفهومة بدون تعقيد.",
  },
  {
    title: "ترتيب",
    desc: "الهدف ليس كثرة الكلام، بل عرض منظم يجعل العميل يثق ويقرر بسرعة.",
  },
  {
    title: "نتيجة",
    desc: "التركيز على النتيجة النهائية التي تخدم العميل وتظهر المشروع بشكل قوي.",
  },
];

const highlights = [
  "واجهة نظيفة ومرتبة",
  "طلب واضح وسريع",
  "تنفيذ عملي",
  "تواصل مباشر",
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="hero about-hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">من نحن</span>

          <h1 className="hero-title">
            ADIB ليس مجرد موقع
            <span className="hero-highlight"> بل تجربة مرتبة</span>
          </h1>

          <p className="hero-subtitle">
            الهدف من ADIB هو تقديم الخدمات بشكل واضح، نظيف، ومقنع، بحيث يفهم
            العميل ما الذي يحصل عليه من أول زيارة.
          </p>

          <div className="hero-features">
            {highlights.map((item) => (
              <span key={item}>✔ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="فكرة المشروع"
            title="لماذا تم بناء ADIB بهذا الشكل؟"
            description="لأن كثيرًا من مواقع الخدمات تعرض أشياء كثيرة لكن بدون وضوح، بينما الهدف هنا هو بناء رحلة مرتبة تعطي ثقة حقيقية."
            centered
          />

          <div className="about-story-box">
            <p>
              ADIB هو مشروع خدمات احترافي يجمع بين التصميم، تطوير المواقع،
              الذكاء الاصطناعي، وبعض الخدمات العملية مثل توصيل الطلبات، في واجهة
              واحدة واضحة.
            </p>

            <p>
              الفكرة ليست فقط أن يرى العميل تصميمًا جميلًا، بل أن يشعر أن كل
              شيء منظم: من طريقة عرض الخدمة، إلى صفحة الأسعار، إلى الطلب،
              وحتى التواصل.
            </p>

            <p>
              لهذا تم بناء الموقع بأسلوب هادئ، أنيق، وبعيد عن التكرار أو
              الفوضى، حتى يبدو المشروع أكثر نضجًا ويعطي انطباعًا قويًا.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section section-dark">
        <div className="container">
          <SectionHeader
            eyebrow="القيم"
            title="ما الذي يميز الأسلوب هنا؟"
            description="هذه هي المبادئ التي تم بناء التجربة عليها."
            centered
          />

          <div className="grid-3">
            {values.map((item) => (
              <div key={item.title} className="card premium-card">
                <h3>{item.title}</h3>
                <p className="card-description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="info-box cta-box cta-strong">
            <h3>هل يناسبك هذا الأسلوب؟</h3>
            <p>
              إذا كنت تريد خدمة أو مشروعًا يُعرض بشكل مرتب ويُنفذ بشكل واضح،
              يمكنك الانتقال الآن إلى صفحة الطلب.
            </p>

            <div className="hero-buttons">
              <Link href="/request" className="button button-primary">
                انتقل إلى الطلب
              </Link>

              <Link href="/services" className="button button-outline">
                راجع الخدمات
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}