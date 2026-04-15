import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07070a] px-4 text-white">
      <div className="max-w-2xl text-center">
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          404
        </span>

        <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
          الصفحة غير موجودة
        </h1>

        <p className="mb-8 leading-8 text-white/70">
          الصفحة التي تبحث عنها غير موجودة حاليًا. يمكنك العودة إلى الصفحة
          الرئيسية أو استعراض الخدمات مباشرة.
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
            استعراض الخدمات
          </Link>
        </div>
      </div>
    </main>
  );
}