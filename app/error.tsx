"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07070a] px-4 text-white">
      <div className="max-w-2xl text-center">
        <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          خطأ
        </span>

        <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
          حدثت مشكلة غير متوقعة
        </h1>

        <p className="mb-8 leading-8 text-white/70">
          حصل خطأ أثناء تحميل الصفحة. يمكنك إعادة المحاولة الآن.
        </p>

        <button
          onClick={() => reset()}
          className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
        >
          إعادة المحاولة
        </button>
      </div>
    </main>
  );
}