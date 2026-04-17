import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="container" style={{ padding: "120px 0", textAlign: "center" }}>
      <span className="eyebrow">404</span>
      <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>الصفحة غير موجودة</h1>
      <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: "24px" }}>
        الصفحة التي تبحث عنها غير متوفرة حاليًا. يمكنك العودة إلى الرئيسية أو الذهاب إلى الخدمات.
      </p>

      <div className="hero-actions">
        <Link href="/" className="button button-light">
          العودة للرئيسية
        </Link>

        <Link href="/services" className="button button-outline">
          استعرض الخدمات
        </Link>
      </div>
    </main>
  );
}