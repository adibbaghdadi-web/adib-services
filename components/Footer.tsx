import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07070a]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-2xl font-extrabold text-white">Adib Services</h3>
          <p className="leading-8 text-white/60">
            منصة خدمات شاملة تجمع بين الخدمات الرقمية، التوصيل، التنسيق، والخدمات الخاصة في مكان واحد.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-bold text-white">روابط سريعة</h4>
          <div className="flex flex-col gap-2 text-white/60">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <Link href="/services" className="hover:text-white">الخدمات</Link>
            <Link href="/pricing" className="hover:text-white">الأسعار</Link>
            <Link href="/contact" className="hover:text-white">التواصل</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-bold text-white">تواصل مباشر</h4>
          <div className="flex flex-col gap-2 text-white/60">
            <a href="https://wa.me/905362966530" target="_blank" rel="noreferrer" className="hover:text-white">
              واتساب
            </a>
            <a href="https://instagram.com/adibbaghdadyyy" target="_blank" rel="noreferrer" className="hover:text-white">
              إنستغرام
            </a>
            <a href="mailto:edip.baghdady,99@gmail.com" className="hover:text-white">
              البريد الإلكتروني
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/45">
        © 2026 Adib Services - جميع الحقوق محفوظة
      </div>
    </footer>
  );
}