import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/services";

const reasons = [
  {
    title: "سرعة في التنفيذ",
    desc: "تنفيذ واضح وسريع بدون تعقيد أو تضييع وقت.",
  },
  {
    title: "شكل احترافي",
    desc: "تصميم مرتب يعطي انطباعًا قويًا من أول نظرة.",
  },
  {
    title: "تواصل مباشر",
    desc: "خطوات واضحة من الطلب حتى التنفيذ.",
  },
];

const steps = [
  {
    number: "01",
    title: "اختر الخدمة",
    desc: "تصفح الخدمات أو انتقل مباشرة إلى صفحة الطلب.",
  },
  {
    number: "02",
    title: "أرسل التفاصيل",
    desc: "اكتب فكرتك أو طلبك بوضوح حتى تكون النتيجة أدق.",
  },
  {
    number: "03",
    title: "ابدأ التنفيذ",
    desc: "يتم التواصل معك مباشرة والبدء في التنفيذ.",
  },
];

const testimonials = [
  {
    name: "عميل خدمة تصميم",
    text: "التعامل كان واضحًا جدًا، والتنفيذ أسرع مما توقعت، والشكل النهائي كان مرتبًا فعلاً.",
  },
  {
    name: "عميل موقع",
    text: "أكثر شيء أعجبني هو أن الطلب كان واضحًا من البداية، وما كان فيه تكرار أو لخبطة.",
  },
  {
    name: "عميل توصيل",
    text: "الخدمة كانت مباشرة، والسعر مفهوم، والتنفيذ تم بسرعة بدون تعقيد.",
  },
];

const faqs = [
  {
    question: "هل الأسعار ثابتة؟",
    answer:
      "الأسعار المعروضة مبدئية، وقد تتغير حسب التفاصيل، حجم الطلب، ومدة التنفيذ المطلوبة.",
  },
  {
    question: "كيف يتم إرسال الطلب؟",
    answer:
      "يتم إرسال الطلب عبر صفحة الطلب، ثم تجهيز رسالة مرتبة تُرسل مباشرة عبر واتساب.",
  },
  {
    question: "هل يمكن طلب خدمة غير موجودة؟",
    answer:
      "نعم، يمكنك إرسال طلب خاص، وإذا كانت الخدمة ممكنة سأرتبها لك وأعطيك التفاصيل المناسبة.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero hero-premium">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">ADIB</span>

          <h1 className="hero-title">
            اطلب خدمتك خلال دقائق
            <span className="hero-highlight"> وننفذها لك بشكل احترافي</span>
          </h1>

          <p className="hero-subtitle">
            تصميم، تطوير مواقع، خدمات ذكاء اصطناعي، وتوصيل طلبات
            <br />
            في مكان واحد، بتجربة واضحة ومرتبة.
          </p>

          <div className="hero-buttons">
            <Link href="/request" className="button button-primary">
              اطلب الآن
            </Link>

            <Link href="/portfolio" className="button button-light">
              شاهد الأعمال
            </Link>
          </div>

          <div className="hero-features">
            <span>✔ سرعة في التنفيذ</span>
            <span>✔ جودة عالية</span>
            <span>✔ تجربة مرتبة</span>
            <span>✔ حلول عملية</span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="الخدمات"
            title="خدمات عملية بشكل احترافي"
            description="كل خدمة موضحة بوضوح، مع طريقة طلب سهلة، وتجربة منظمة."
            centered
          />

          <div className="grid-2">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="section-action">
            <Link href="/services" className="button button-outline">
              عرض كل الخدمات
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section section-dark">
        <div className="container">
          <SectionHeader
            eyebrow="لماذا ADIB"
            title="واجهة قوية، تنفيذ واضح، ونتيجة تشرف"
            description="الهدف ليس أن يبدو الموقع جميلًا فقط، بل أن يدفع العميل للطلب بثقة."
            centered
          />

          <div className="grid-3">
            {reasons.map((item) => (
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
          <SectionHeader
            eyebrow="كيف يعمل"
            title="3 خطوات فقط"
            description="الرحلة واضحة من أول ضغطة حتى بدء التنفيذ."
            centered
          />

          <div className="grid-3">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-dark">
        <div className="container">
          <SectionHeader
            eyebrow="آراء وانطباعات"
            title="تجربة واضحة تعطي ثقة"
            description="هذه أمثلة على الانطباع الذي نريد أن يخرج به العميل من التجربة."
            centered
          />

          <div className="grid-3">
            {testimonials.map((item) => (
              <div key={item.name} className="testimonial-card">
                <p className="testimonial-text">“{item.text}”</p>
                <div className="testimonial-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="الأسئلة الشائعة"
            title="كل شيء واضح قبل أن تبدأ"
            description="أهم الأسئلة التي قد تدور في بالك قبل إرسال الطلب."
            centered
          />

          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="info-box cta-box cta-strong">
            <h3>جاهز تبدأ؟</h3>
            <p>
              إذا عندك فكرة، مشروع، أو طلب خدمة، ابدأ الآن وسأرتب لك كل شيء بشكل
              واضح واحترافي.
            </p>

            <div className="hero-buttons">
              <Link href="/request" className="button button-primary">
                ابدأ الطلب الآن
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