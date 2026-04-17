import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="الخدمات"
            title="كل الخدمات في مكان واحد"
            description="خدمات مرتبة وواضحة تشمل التصميم، تطوير المواقع، الذكاء الاصطناعي، وتوصيل الطلبات."
            centered
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="info-box cta-box">
            <h3>لم تجد الخدمة التي تريدها؟</h3>
            <p>
              أرسل طلبك بتفاصيله، وإذا كانت الخدمة ممكنة سأرتبها لك بأفضل شكل وأوضح
              سعر.
            </p>

            <Link href="/request" className="button button-light">
              أرسل طلبًا خاصًا
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}