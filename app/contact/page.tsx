import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";
import Link from "next/link";

const contactCards = [
  {
    title: "البريد الإلكتروني",
    value: siteConfig.email,
    note: "للاستفسارات أو الطلبات التي تحتاج شرحًا إضافيًا.",
  },
  {
    title: "إنستغرام",
    value: siteConfig.instagramHandle,
    note: "لمتابعة الأسلوب والأعمال والتواصل السريع.",
  },
  {
    title: "المدينة",
    value: siteConfig.city,
    note: "مفيد خصوصًا في خدمات الطلبات والتوصيل.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="hero contact-hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">التواصل</span>

          <h1 className="hero-title">
            تواصل واضح
            <span className="hero-highlight"> ومباشر</span>
          </h1>

          <p className="hero-subtitle">
            إذا كان عندك استفسار، تريد مناقشة فكرة، أو تحتاج توضيحًا قبل الطلب،
            فهذه هي قنوات التواصل الأساسية.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="وسائل التواصل"
            title="اختر الطريقة الأنسب لك"
            description="يمكنك التواصل مباشرة، أو الانتقال إلى صفحة الطلب إذا كانت الخدمة واضحة بالنسبة لك."
            centered
          />

          <div className="grid-3">
            {contactCards.map((item) => (
              <div key={item.title} className="contact-card">
                <h3>{item.title}</h3>
                <div className="contact-value">{item.value}</div>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-dark">
        <div className="container">
          <div className="contact-actions-box">
            <div className="contact-action-card">
              <h3>جاهز للطلب مباشرة؟</h3>
              <p>إذا كانت الخدمة واضحة بالنسبة لك، انتقل الآن إلى صفحة الطلب.</p>
              <Link href="/request" className="button button-primary">
                ابدأ الطلب
              </Link>
            </div>

            <div className="contact-action-card">
              <h3>تريد مراجعة الخدمات أولًا؟</h3>
              <p>يمكنك العودة إلى صفحة الخدمات واختيار الخدمة الأنسب.</p>
              <Link href="/services" className="button button-outline">
                استعرض الخدمات
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}