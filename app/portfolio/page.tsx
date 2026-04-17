import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { portfolioItems } from "@/data/portfolio";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="الأعمال"
            title="نماذج من أعمالي"
            description="هذه بعض الأعمال التي تعكس أسلوبي في الترتيب البصري والتنفيذ بشكل نظيف واحترافي."
            centered
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-3">
            {portfolioItems.map((item) => (
              <article key={item.id} className="portfolio-card">
                <div className="portfolio-preview">
                  <div className="portfolio-preview-inner">
                    <span className="portfolio-preview-letter">A</span>
                  </div>
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
          <div className="info-box cta-box">
            <h3>هل تريد عملًا مشابهًا؟</h3>
            <p>
              أرسل فكرتك أو نوع المشروع الذي تريده، وسأرتبه لك بأسلوب يناسبك ويخدم
              هدفك.
            </p>
            <Link href="/request" className="button button-light">
              ابدأ مشروعك الآن
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}