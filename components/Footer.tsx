import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06060a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-2xl font-extrabold">{siteConfig.name}</h3>
          <p className="max-w-sm leading-8 text-white/60">
            خدمات رقمية احترافية بتنفيذ سريع، شكل مرتب، وتجربة واضحة من أول زيارة حتى
            إرسال الطلب.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-bold">روابط سريعة</h4>
          <div className="flex flex-col gap-3 text-white/70">
            <Link href="/">الرئيسية</Link>
            <Link href="/services">الخدمات</Link>
            <Link href="/portfolio">الأعمال</Link>
            <Link href="/pricing">الأسعار</Link>
            <Link href="/about">من نحن</Link>
            <Link href="/contact">التواصل</Link>
            <Link href="/request">طلب خدمة</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-bold">التواصل</h4>
          <div className="space-y-3 text-white/70">
            <p>{siteConfig.email}</p>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer">
              {siteConfig.instagramHandle}
            </a>
            <p>{siteConfig.city}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/45">
        © {new Date().getFullYear()} {siteConfig.name} — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}