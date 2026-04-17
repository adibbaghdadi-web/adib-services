import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import Link from "next/link";

const serviceBenefits = [
  "توضيح كامل للخدمة قبل الطلب",
  "تنفيذ سريع ومنظم",
  "أسلوب واضح ومباشر",
  "تجربة مرتبة من البداية للنهاية",
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="hero services-hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">الخدمات</span>

          <h1 className="hero-title">
            كل الخدمات في
            <span className="hero-highlight"> مكان واحد</span>
          </h1>

          <p className="hero-subtitle">
            خدمات مرتبة وواضحة تشمل التصميم، تطوير المواقع، الذكاء الاصطناعي،
            وتوصيل الطلبات، مع تجربة طلب بسيطة ومباشرة.
          </p>

          <div className="hero-features">
            {serviceBenefits.map((item) => (
              <span key={item}>✔ {item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="الخدمات المتاحة"
            title="اختر الخدمة التي تناسبك"
            description="كل خدمة موضحة بشكل مرتب مع السعر المبدئي ومدة التنفيذ وطريقة الطلب."
            centered
          />

          <div className="grid-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-dark">
        <div className="container">
          <div className="info-box cta-box cta-strong">
            <h3>هل عندك طلب مختلف؟</h3>
            <p>
              إذا كانت خدمتك غير موجودة ضمن القائمة، يمكنك إرسال طلب خاص وسأراجع
              التفاصيل وأرتب لك الحل المناسب.
            </p>

            <div className="hero-buttons">
              <Link href="/request" className="button button-primary">
                أرسل طلبًا خاصًا
              </Link>

              <Link href="/contact" className="button button-outline">
                تواصل أولًا
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}