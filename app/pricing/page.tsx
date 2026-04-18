import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/services";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      <section className="hero pricing-hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">الأسعار</span>

          <h1 className="hero-title">
            أسعار مبدئية
            <span className="hero-highlight"> واضحة ومرتبة</span>
          </h1>

          <p className="hero-subtitle">
            الأسعار التالية تساعدك على أخذ فكرة أولية عن الخدمة، وقد تختلف حسب
            التفاصيل، حجم الطلب، ومدة التنفيذ.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="التسعير"
            title="اختر الخدمة المناسبة لميزانيتك"
            description="كل خدمة مع سعر مبدئي، مدة تنفيذ، ونقاط توضح ما الذي ستحصل عليه."
            centered
          />

          <div className="grid-2 pricing-grid">
            {services.map((service) => (
              <article key={service.slug} className="pricing-card">
                <div className="pricing-card-top">
                  <div>
                    <h3>{service.title}</h3>
                    <p className="pricing-short">{service.shortDescription}</p>
                  </div>

                  <div className="pricing-price-wrap">
                    <span className="pricing-price-label">يبدأ من</span>
                    <strong className="pricing-price">{service.priceFrom}</strong>
                  </div>
                </div>

                <div className="pricing-meta">
                  <span>مدة التنفيذ: {service.delivery}</span>
                </div>

                <ul className="feature-list">
                  {service.features.map((feature) => (
                    <li key={feature}>✔ {feature}</li>
                  ))}
                </ul>

                <div className="pricing-actions">
                  <Link
                    href={`/request?service=${service.slug}`}
                    className="button button-primary"
                  >
                    اطلب الآن
                  </Link>

                  <Link href="/contact" className="button button-outline">
                    استفسار
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-dark">
        <div className="container">
          <div className="info-box cta-box cta-strong">
            <h3>عندك طلب خاص أو تفاصيل مختلفة؟</h3>
            <p>
              إذا كانت خدمتك تحتاج تسعيرًا مختلفًا أو تنفيذًا خاصًا، أرسل طلبك
              مباشرة وسأرتب لك السعر المناسب حسب الحالة.
            </p>

            <div className="hero-buttons">
              <Link href="/request" className="button button-primary">
                أرسل الطلب الآن
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