"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RequestPage() {
  const searchParams = useSearchParams();
  const selectedService = searchParams.get("service") || "";

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(selectedService);
  const [requestType, setRequestType] = useState("تنفيذ مباشر");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    setService(selectedService);
  }, [selectedService]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const targetPhone = "905362966530";

    const message = `
مرحباً، أريد طلب خدمة من موقع Adib Services

الاسم: ${fullName}
رقم الهاتف: ${phone}
البريد الإلكتروني: ${email}
الخدمة المطلوبة: ${service}
نوع الطلب: ${requestType}
المدينة: ${city}
الموقع: ${location}
التاريخ: ${date}
الوقت: ${time}
تفاصيل الطلب: ${details}
الميزانية المتوقعة: ${budget}
    `.trim();

    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center">
          <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            اطلب الآن
          </span>

          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            أرسل طلبك بشكل احترافي
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/70">
            اكتب تفاصيل طلبك بدقة، وسيتم فتح واتساب مباشرة برسالة مرتبة وجاهزة للإرسال.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="اكتب اسمك"
                  className="w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/80">
                  رقم الهاتف أو واتساب
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="اكتب رقمك"
                  className="w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  البريد الإلكتروني
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="اكتب البريد الإلكتروني"
                  className="w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/80">
                  الخدمة المطلوبة
                </label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="مثال: توصيل وجبات"
                  className="w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/80">
                نوع الطلب
              </label>
              <select
                value={requestType}
                onChange={(e) => setRequestType(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
              >
                <option>تنفيذ مباشر</option>
                <option>تنسيق خدمة</option>
                <option>توصيل</option>
                <option>خدمة رقمية</option>
                <option>خدمة خاصة</option>
              </select>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  المدينة
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="مثال: إسطنبول"
                  className="w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/80">
                  الموقع أو العنوان
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="اكتب الموقع"
                  className="w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  التاريخ
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/80">
                  الوقت
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/80">
                تفاصيل الطلب
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="اكتب كل التفاصيل التي تحتاجها"
                className="min-h-[180px] w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/80">
                الميزانية المتوقعة
              </label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="مثال: 100 ليرة أو 25$"
                className="w-full rounded-xl border border-white/10 bg-[#111117] px-4 py-3 outline-none transition focus:border-white/25"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              إرسال الطلب عبر واتساب
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">كيف ننجز طلبك؟</h2>
              <div className="space-y-4 leading-8 text-white/70">
                <p>اختر الخدمة أو اكتبها بوضوح.</p>
                <p>حدد المدينة والموقع إذا كانت الخدمة ميدانية أو توصيل.</p>
                <p>اذكر التاريخ والوقت إذا كان الطلب مرتبطًا بموعد.</p>
                <p>كلما كانت التفاصيل أوضح، كانت النتيجة أسرع وأفضل.</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">بعد الإرسال</h2>
              <div className="space-y-4 leading-8 text-white/70">
                <p>يفتح واتساب مباشرة.</p>
                <p>تظهر لك رسالة جاهزة ومنظمة بكل التفاصيل.</p>
                <p>ترسلها لي مباشرة ونبدأ التنفيذ أو التنسيق.</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold">تواصل سريع</h2>
              <a
                href="https://wa.me/905362966530"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
              >
                فتح واتساب الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}