"use client";

export default function WhatsAppButton() {
  const phone = "905362966530";
  const message = "مرحباً، أريد طلب خدمة من موقع Adib Services";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-[0_0_24px_rgba(34,197,94,0.45)] transition hover:scale-110 hover:shadow-[0_0_35px_rgba(34,197,94,0.7)]"
    >
      <span className="text-lg">💬</span>
      <span className="text-sm font-semibold">واتساب</span>
    </a>
  );
}