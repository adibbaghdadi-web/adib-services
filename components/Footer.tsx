import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{siteConfig.name}</h3>
          <p>
            خدمات رقمية وعملية بشكل احترافي، مع تجربة واضحة من أول زيارة حتى إرسال
            الطلب.
          </p>
        </div>

        <div>
          <h4>روابط سريعة</h4>
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

      <div className="footer-bottom">
        © {new Date().getFullYear()} {siteConfig.name} — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}