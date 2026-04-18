import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer premium-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-badge">{siteConfig.name}</span>
          <h3>واجهة مرتبة لخدمات عملية واحترافية</h3>
          <p>
            تصميم، مواقع، ذكاء اصطناعي، وتوصيل طلبات — في تجربة واضحة تعطي العميل
            الثقة من أول زيارة حتى إرسال الطلب.
          </p>
        </div>

        <div>
          <h4>الروابط</h4>
          <nav className="footer-links">
            <Link href="/">الرئيسية</Link>
            <Link href="/services">الخدمات</Link>
            <Link href="/portfolio">الأعمال</Link>
            <Link href="/pricing">الأسعار</Link>
            <Link href="/about">من نحن</Link>
            <Link href="/contact">التواصل</Link>
            <Link href="/request">طلب خدمة</Link>
          </nav>
        </div>

        <div>
          <h4>التواصل</h4>
          <div className="footer-contact">
            <p>{siteConfig.email}</p>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
              {siteConfig.instagramHandle}
            </a>
            <p>{siteConfig.city}</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom premium-footer-bottom">
        © {new Date().getFullYear()} {siteConfig.name} — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}