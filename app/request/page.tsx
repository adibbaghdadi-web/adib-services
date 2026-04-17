"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

export default function RequestPage() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState(
    prefilledService === "food-delivery" ? "توصيل مطاعم" : "خدمة رقمية"
  );
  const [service, setService] = useState(prefilledService);
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [deadline, setDeadline] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [orderCost, setOrderCost] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");

  const totalPrice = Number(orderCost || 0) + Number(deliveryFee || 0);

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
    <main>
      <Navbar />

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="طلب خدمة"
            title="أرسل طلبك بشكل مرتب"
            description="اختر نوع الطلب، واكتب التفاصيل بوضوح، ثم أرسل الطلب عبر واتساب من هذا المكان فقط."
            centered
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-2">
            <div className="info-box">
              <h3>كيف يتم الطلب؟</h3>
              <p>1. اختر نوع الخدمة أو نوع الطلب.</p>
              <p>2. اكتب التفاصيل بوضوح.</p>
              <p>3. إذا كان الطلب من مطعم، اكتب اسم المطعم والطلب المطلوب.</p>
              <p>4. اضغط إرسال عبر واتساب وسيصلني الطلب جاهزًا.</p>
            </div>

            <div className="form-card">
              <div className="form-grid">
                <div className="form-field">
                  <label>الاسم الكامل</label>
                  <input value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>

                <div className="form-field">
                  <label>رقم الهاتف</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="form-field">
                  <label>البريد الإلكتروني</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-field">
                  <label>نوع الطلب</label>
                  <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                    <option>خدمة رقمية</option>
                    <option>توصيل مطاعم</option>
                  </select>
                </div>

                {serviceType === "خدمة رقمية" ? (
                  <>
                    <div className="form-field">
                      <label>الخدمة المطلوبة</label>
                      <input value={service} onChange={(e) => setService(e.target.value)} />
                    </div>

                    <div className="form-field">
                      <label>الموعد المطلوب</label>
                      <input value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-field">
                      <label>اسم المطعم</label>
                      <input
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                      />
                    </div>

                    <div className="form-field">
                      <label>المدينة</label>
                      <input value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <div className="form-field">
                      <label>الموقع / العنوان</label>
                      <input value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>

                    <div className="form-field">
                      <label>قيمة الطلب</label>
                      <input value={orderCost} onChange={(e) => setOrderCost(e.target.value)} />
                    </div>

                    <div className="form-field">
                      <label>رسوم التوصيل</label>
                      <input
                        value={deliveryFee}
                        onChange={(e) => setDeliveryFee(e.target.value)}
                      />
                    </div>

                    <div className="form-field">
                      <label>الإجمالي المتوقع</label>
                      <div className="total-box">{totalPrice || 0}</div>
                    </div>
                  </>
                )}

                <div className="form-field form-full">
                  <label>تفاصيل الطلب</label>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </div>

                <div className="form-full">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-primary full-width">
                    إرسال الطلب عبر واتساب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}