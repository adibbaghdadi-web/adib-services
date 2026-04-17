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
  const [serviceType, setServiceType] = useState("خدمة رقمية");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [orderCost, setOrderCost] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");

  const totalPrice =
    Number(orderCost || 0) + Number(deliveryFee || 0);

  const whatsappUrl = useMemo(() => {
    const message =
      serviceType === "توصيل مطاعم"
        ? `مرحبا، أريد طلب خدمة توصيل طعام

الاسم: ${fullName}
رقم الهاتف: ${phone}
البريد الإلكتروني: ${email}
نوع الطلب: ${serviceType}
اسم المطعم: ${restaurantName}
تفاصيل الطلب: ${details}
المدينة: ${city}
الموقع / العنوان: ${location}
قيمة الطلب: ${orderCost}
رسوم التوصيل: ${deliveryFee}
الإجمالي المتوقع: ${totalPrice}`
        : `مرحبا، أريد طلب خدمة

الاسم: ${fullName}
رقم الهاتف: ${phone}
البريد الإلكتروني: ${email}
نوع الخدمة: ${serviceType}
الخدمة المطلوبة: ${service}
المدينة: ${city}
الموعد المطلوب: ${deadline}
التفاصيل: ${details}`;

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  }, [
    fullName,
    phone,
    email,
    serviceType,
    service,
    city,
    location,
    details,
    deadline,
    restaurantName,
    orderCost,
    deliveryFee,
    totalPrice,
  ]);

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle
            eyebrow="طلب خدمة"
            title="أرسل طلبك بشكل مرتب"
            description="اختر نوع الطلب، واملأ التفاصيل بوضوح، ثم أرسل الطلب عبر واتساب من هذا المكان فقط."
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
                <p>1. اختر نوع الخدمة أو نوع الطلب.</p>
                <p>2. اكتب التفاصيل بوضوح.</p>
                <p>3. إذا كان الطلب من مطعم، اكتب اسم المطعم والطلب المطلوب.</p>
                <p>4. اضغط إرسال عبر واتساب وسيصلني الطلب جاهزًا.</p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">ملاحظة مهمة</h3>
              <div className="space-y-4 leading-8 text-white/70">
                <p>في خدمة توصيل الطعام، يتم احتساب السعر النهائي كالتالي:</p>
                <p className="font-semibold text-green-400">
                  سعر الطلب + سعر التوصيل
                </p>
                <p>كلما كانت البيانات أوضح، كانت الخدمة أسرع وأفضل.</p>
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
                <label className="mb-2 block text-sm text-white/70">نوع الطلب</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                >
                  <option>خدمة رقمية</option>
                  <option>توصيل مطاعم</option>
                </select>
              </div>

              {serviceType === "خدمة رقمية" ? (
                <>
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
                    <label className="mb-2 block text-sm text-white/70">الموعد المطلوب</label>
                    <input
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      placeholder="مثال: خلال يومين"
                      className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="mb-2 block text-sm text-white/70">اسم المطعم</label>
                    <input
                      value={restaurantName}
                      onChange={(e) => setRestaurantName(e.target.value)}
                      placeholder="اكتب اسم المطعم"
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
                    <label className="mb-2 block text-sm text-white/70">الموقع / العنوان</label>
                    <input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="اكتب عنوان التوصيل"
                      className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">قيمة الطلب</label>
                    <input
                      value={orderCost}
                      onChange={(e) => setOrderCost(e.target.value)}
                      placeholder="مثال: 250"
                      className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">رسوم التوصيل</label>
                    <input
                      value={deliveryFee}
                      onChange={(e) => setDeliveryFee(e.target.value)}
                      placeholder="مثال: 50"
                      className="w-full rounded-2xl border border-white/10 bg-[#0f0f15] px-4 py-3 outline-none transition focus:border-white/25"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white/70">الإجمالي المتوقع</label>
                    <div className="rounded-2xl border border-green-400/20 bg-green-400/10 px-4 py-3 font-bold text-green-300">
                      {totalPrice || 0}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm text-white/70">تفاصيل الطلب</label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="اكتب تفاصيل الطلب بشكل واضح"
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