import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { portfolioItems } from "@/data/portfolio";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />

      <section className="hero portfolio-hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">الأعمال</span>

          <h1 className="hero-title">
            نماذج تعكس
            <span className="hero-highlight"> أسلوبي في التنفيذ</span>
          </h1>

          <p className="hero-subtitle">
            هنا بعض الأعمال التي تعطيك فكرة عن الشكل البصري، الترتيب، وطريقة إخراج
            المشروع بشكل نظيف واحترافي.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="نماذج مختارة"
            title="بعض الأعمال التي يمكن البناء عليها"
            description="هذه النماذج ليست مجرد عرض، بل مثال على الأسلوب، الوضوح، والترتيب."
            centered
          />

          <div className="grid-3">
            {portfolioItems.map((item) => (
              <article key={item.id} className="portfolio-card portfolio-card-strong">
                <div className="portfolio-image-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="portfolio-image"
                  />
                </div>

                <div className="portfolio-content">
                  <span className="portfolio-tag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="info-box cta-box cta-strong">
            <h3>هل تريد عملًا مشابهًا؟</h3>
            <p>
              أرسل نوع المشروع أو الفكرة التي تريد تنفيذها، وسأرتب لك النتيجة بشكل
              يناسبك ويعطي مشروعك حضورًا أقوى.
            </p>

            <div className="hero-buttons">
              <Link href="/request" className="button button-primary">
                ابدأ مشروعك الآن
              </Link>

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