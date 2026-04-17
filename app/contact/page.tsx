import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="التواصل"
            title="تواصل واضح ومباشر"
            description="إذا عندك استفسار أو تريد مناقشة مشروع قبل الطلب، استخدم وسائل التواصل التالية."
            centered
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-3">
            <div className="card">
              <h3>البريد الإلكتروني</h3>
              <p className="card-description">{siteConfig.email}</p>
            </div>

            <div className="card">
              <h3>إنستغرام</h3>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="card-description"
              >
                {siteConfig.instagramHandle}
              </a>
            </div>

            <div className="card">
              <h3>المدينة</h3>
              <p className="card-description">{siteConfig.city}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}