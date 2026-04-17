import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07070a] px-4 text-white">
      <div className="max-w-xl text-center">
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65">
          404
        </span>

        <h1 className="mb-4 text-5xl font-extrabold">الصفحة غير موجودة</h1>

        <p className="mb-8 leading-8 text-white/70">
          الصفحة التي تبحث عنها غير متوفرة حاليًا. يمكنك العودة إلى الرئيسية أو
          الانتقال إلى صفحة الخدمات.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            العودة للرئيسية
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            استعرض الخدمات
          </Link>
        </div>
      </div>
    </main>
  );
}