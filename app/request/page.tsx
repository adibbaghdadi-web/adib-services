"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";

export default function RequestPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");

  const whatsappUrl = useMemo(() => {
    const message = `مرحبا، أريد طلب خدمة

الاسم: ${fullName}
رقم الهاتف: ${phone}
البريد الإلكتروني: ${email}
الخدمة المطلوبة: ${service}
المدينة: ${city}
الموعد المطلوب: ${deadline}
التفاصيل: ${details}`;

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  }, [fullName, phone, email, service, city, details, deadline]);

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle
            eyebrow="طلب خدمة"
            title="أرسل طلبك بشكل مرتب"
            description="اكتب تفاصيلك بوضوح، ثم أرسل الطلب عبر واتساب من هذا المكان فقط."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">كيف يتم الطلب؟</h3>
              <div className="space-y-4 leading-8 text-white/70">
                <p>1. اكتب البيانات المطلوبة بشكل واضح.</p>
                <p>2. اذكر نوع الخدمة والتفاصيل المهمة.</p>
                <p>3. اضغط زر الإرسال عبر واتساب أسفل الفورم.</p>
                <p>4. ستصلني رسالة جاهزة بكل التفاصيل دون تكرار.</p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">مهم قبل الإرسال</h3>
              <div className="space-y-4 leading-8 text-white/70">
                <p>كلما كانت التفاصيل أوضح، كانت النتيجة أسرع وأفضل.</p>
                <p>اكتب المدينة إذا كانت الخدمة مرتبطة بمكان أو توصيل.</p>
                <p>اكتب الموعد المطلوب إذا عندك وقت محدد للتسليم.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-white/70">الاسم الكامل</label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="اكتب اسمك"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">رقم الهاتف</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="اكتب رقمك"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">البريد الإلكتروني</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="اكتب بريدك"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">الخدمة المطلوبة</label>
                <input
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="مثال: تصميم بوستات"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">المدينة</label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="مثال: اسطنبول"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/70">الموعد المطلوب</label>
                <input
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  placeholder="مثال: خلال يومين"
                  className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-white/70">تفاصيل الطلب</label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="اكتب تفاصيل الخدمة بشكل واضح"
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
              />
            </div>

            <div className="mt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-2xl bg-green-500 px-6 py-4 text-center font-bold text-white transition hover:scale-[1.01] hover:bg-green-600"
              >
                إرسال الطلب عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}