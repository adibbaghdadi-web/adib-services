"use client";

import { useState } from "react";

export default function RequestPage() {
  const [name, setName] = useState("");
  const [service, setService] = useState("تصميم شعار");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const message = `
🚀 طلب جديد من الموقع

👤 الاسم: ${name}
🎯 الخدمة: ${service}
💰 الميزانية: ${budget || "غير محدد"}

📝 التفاصيل:
${details}
    `;

    const whatsappUrl = `https://wa.me/90562966530?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <main className="min-h-screen bg-[#07070a] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          اطلب خدمتك الآن
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10"
        >
          <input
            type="text"
            placeholder="اسمك"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-white/10"
            required
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-white/10"
          >
            <option>تصميم شعار</option>
            <option>تصميم سوشيال ميديا</option>
            <option>تصميم موقع</option>
            <option>خدمة أخرى</option>
          </select>

          <input
            type="text"
            placeholder="الميزانية (اختياري)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-white/10"
          />

          <textarea
            placeholder="اكتب تفاصيل طلبك..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full p-3 rounded-lg bg-black border border-white/10 h-32"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition p-3 rounded-lg font-bold"
          >
            إرسال الطلب عبر واتساب
          </button>
        </form>
      </div>
    </main>
  );
}