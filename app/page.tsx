import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const reasons = [
  {
    title: "شكل احترافي",
    desc: "واجهة مرتبة وواضحة تعطي العميل إحساس الثقة من أول نظرة.",
  },
  {
    title: "تنفيذ سريع",
    desc: "التركيز على سرعة الإنجاز بدون التضحية بالجودة أو الشكل النهائي.",
  },
  {
    title: "تواصل واضح",
    desc: "العميل يفهم ماذا يطلب، وأنت تفهم ماذا تنفذ، بدون فوضى.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">ADIB</span>

          <h1>
            اطلب خدمتك خلال دقائق
            <span className="hero-accent">وننفذها لك بشكل احترافي</span>
          </h1>

          <p>
            خدمات احترافية تشمل التصميم، تطوير المواقع، خدمات الذكاء الاصطناعي،
            وتوصيل الطلبات، بتجربة مرتبة وواضحة.
          </p>

          <div className="hero-actions">
            <Link href="/request" className="button button-primary">
              اطلب الآن
            </Link>

            <Link href="/services" className="button button-light">
              استعرض الخدمات
            </Link>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container benefits-list">
          <span>✔ سرعة في الإنجاز</span>
          <span>✔ جودة عالية</span>
          <span>✔ تجربة مرتبة</span>
          <span>✔ حلول عملية</span>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="الخدمات"
            title="خدمات عملية بشكل احترافي"
            description="كل خدمة مرتبة بوضوح، بسعر ابتدائي واضح، وتجربة طلب بسيطة بدون تكرار أو إزعاج."
            centered
          />

          <div className="grid-2">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="لماذا ADIB"
            title="واجهة قوية، تنفيذ واضح، ونتيجة تشرف"
            description="الهدف ليس مجرد موقع جميل، بل موقع يعطي العميل الثقة ويجعله يفهم الخدمة بسرعة."
            centered
          />

          <div className="grid-3">
            {reasons.map((item) => (
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
            <p>
              إذا عندك فكرة أو مشروع وتريد تنفيذه بشكل احترافي، ابدأ الآن من صفحة
              الطلب وسأرتب لك كل شيء بشكل واضح.
            </p>

            <Link href="/request" className="button button-light">
              اطلب الخدمة
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}