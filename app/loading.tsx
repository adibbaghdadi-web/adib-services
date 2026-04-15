export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07070a] text-white">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
        <p className="text-white/60">جاري التحميل...</p>
      </div>
    </main>
  );
}