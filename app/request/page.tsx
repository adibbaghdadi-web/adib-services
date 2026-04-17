"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

function serviceSlugToLabel(slug: string) {
  const map: Record<string, string> = {
    "social-media-design": "تصميم سوشيال ميديا",
    "logo-branding": "تصميم شعار وهوية",
    "website-development": "تطوير مواقع",
    "ai-services": "خدمات الذكاء الاصطناعي",
    "food-delivery": "توصيل طلبات مطاعم",
  };

  return map[slug] || slug;
}

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
  const [deliveryFee, setDeliveryFee] = useState("10");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service") || "";

    if (serviceParam) {
      if (serviceParam === "food-delivery") {
        setServiceType("توصيل مطاعم");
      } else {
        setServiceType("خدمة رقمية");
        setService(serviceSlugToLabel(serviceParam));
      }
    }
  }, []);

  const totalPrice = Number(orderCost || 0) + Number(deliveryFee || 0);

  const whatsappUrl = useMemo(() => {
    const message =
      serviceType === "توصيل مطاعم"
        ? `مرحبا، أريد طلب خدمة توصيل طعام

الاسم: ${fullName || "-"}
رقم الهاتف: ${phone || "-"}
البريد الإلكتروني: ${email || "-"}
نوع الطلب: ${serviceType}
اسم المطعم: ${restaurantName || "-"}
المدينة: ${city || "-"}
العنوان: ${location || "-"}
تفاصيل الطلب: ${details || "-"}
سعر الطلب: ${orderCost || "0"}
سعر التوصيل: ${deliveryFee || "0"}
الإجمالي المتوقع: ${totalPrice}`
        : `مرحبا، أريد طلب خدمة

الاسم: ${fullName || "-"}
رقم الهاتف: ${phone || "-"}
البريد الإلكتروني: ${email || "-"}
نوع الطلب: ${serviceType}
الخدمة المطلوبة: ${service || "-"}
المدينة: ${city || "-"}
الموعد المطلوب: ${deadline || "-"}
تفاصيل الطلب: ${details || "-"}`;

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
            description="املأ التفاصيل بوضوح، ثم أرسل الطلب عبر واتساب من هذا المكان فقط."
            centered
          />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="grid-2 request-layout">
            <div className="info-box">
              <h3>كيف يتم الطلب؟</h3>
              <p>1. اختر نوع الطلب: خدمة رقمية أو توصيل مطاعم.</p>
              <p>2. اكتب البيانات الأساسية بشكل واضح.</p>
              <p>3. إذا كان الطلب من مطعم، اكتب اسم المطعم والتكلفة.</p>
              <p>4. اضغط إرسال عبر واتساب وسيصلني الطلب جاهزًا.</p>

              <div className="request-note">
                <strong>مهم:</strong>
                <p>
                  في خدمة توصيل المطاعم:
                  <br />
                  <span className="highlight-text">
                    السعر النهائي = سعر الطلب + سعر التوصيل
                  </span>
                </p>
              </div>
            </div>

            <div className="form-card">
              <div className="form-grid">
                <div className="form-field">
                  <label>الاسم الكامل</label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="اكتب اسمك"
                  />
                </div>

                <div className="form-field">
                  <label>رقم الهاتف</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="اكتب رقمك"
                  />
                </div>

                <div className="form-field">
                  <label>البريد الإلكتروني</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="اكتب بريدك"
                  />
                </div>

                <div className="form-field">
                  <label>نوع الطلب</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                  >
                    <option>خدمة رقمية</option>
                    <option>توصيل مطاعم</option>
                  </select>
                </div>

                {serviceType === "خدمة رقمية" ? (
                  <>
                    <div className="form-field">
                      <label>الخدمة المطلوبة</label>
                      <input
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        placeholder="مثال: تصميم سوشيال ميديا"
                      />
                    </div>

                    <div className="form-field">
                      <label>الموعد المطلوب</label>
                      <input
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        placeholder="مثال: خلال يومين"
                      />
                    </div>

                    <div className="form-field form-full">
                      <label>المدينة</label>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="مثال: اسطنبول"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-field">
                      <label>اسم المطعم</label>
                      <input
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                        placeholder="اكتب اسم المطعم"
                      />
                    </div>

                    <div className="form-field">
                      <label>المدينة</label>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="مثال: اسطنبول"
                      />
                    </div>

                    <div className="form-field form-full">
                      <label>العنوان / الموقع</label>
                      <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="اكتب عنوان التوصيل"
                      />
                    </div>

                    <div className="form-field">
                      <label>سعر الطلب</label>
                      <input
                        type="number"
                        value={orderCost}
                        onChange={(e) => setOrderCost(e.target.value)}
                        placeholder="مثال: 250"
                      />
                    </div>

                    <div className="form-field">
                      <label>سعر التوصيل</label>
                      <input
                        type="number"
                        value={deliveryFee}
                        onChange={(e) => setDeliveryFee(e.target.value)}
                        placeholder="مثال: 50"
                      />
                    </div>

                    <div className="form-field form-full">
                      <label>الإجمالي المتوقع</label>
                      <div className="total-box">{totalPrice}</div>
                    </div>
                  </>
                )}

                <div className="form-field form-full">
                  <label>تفاصيل الطلب</label>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="اكتب تفاصيل الطلب بشكل واضح"
                  />
                </div>

                <div className="form-full">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-primary full-width"
                  >
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