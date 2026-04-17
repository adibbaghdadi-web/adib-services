import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/services";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="الأسعار"
            title="أسعار مبدئية واضحة"
            description="الأسعار التالية مبدئية وتختلف حسب حجم الطلب والتفاصيل ومدة التنفيذ."
            centered
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-2">
            {services.map((service) => (
              <article key={service.slug} className="card">
                <div className="card-top">
                  <h3>{service.title}</h3>
                  <span className="price-badge">يبدأ من {service.priceFrom}</span>
                </div>

                <p className="card-description">{service.shortDescription}</p>
                <p className="card-delivery">مدة التنفيذ: {service.delivery}</p>

                <ul className="feature-list">
                  {service.features.map((feature) => (
                    <li key={feature}>✔ {feature}</li>
                  ))}
                </ul>

                <Link href={`/request?service=${service.slug}`} className="button button-light">
                  اطلب الآن
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}