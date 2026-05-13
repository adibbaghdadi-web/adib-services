"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  const [budget, setBudget] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [orderCost, setOrderCost] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("10");
  const [errorMessage, setErrorMessage] = useState("");

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

  const isFoodDelivery = serviceType === "توصيل مطاعم";
  const totalPrice = Number(orderCost || 0) + Number(deliveryFee || 0);

  const whatsappUrl = useMemo(() => {
    const message = isFoodDelivery
      ? `مرحبًا، أريد طلب خدمة توصيل طعام

الاسم: ${fullName || "-"}
رقم الهاتف: ${phone || "-"}
البريد الإلكتروني: ${email || "-"}
اسم المطعم: ${restaurantName || "-"}
المدينة: ${city || "-"}
العنوان: ${location || "-"}
تفاصيل الطلب: ${details || "-"}
سعر الطلب: ${orderCost || "0"}
سعر التوصيل: ${deliveryFee || "0"}
الإجمالي المتوقع: ${totalPrice}`
      : `مرحبًا، أريد طلب خدمة

الاسم: ${fullName || "-"}
رقم الهاتف: ${phone || "-"}
البريد الإلكتروني: ${email || "-"}
الخدمة المطلوبة: ${service || "-"}
المدينة: ${city || "-"}
الموعد المطلوب: ${deadline || "-"}
الميزانية المتوقعة: ${budget || "-"}
تفاصيل الطلب: ${details || "-"}`;

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  }, [
    fullName,
    phone,
    email,
    service,
    serviceType,
    city,
    location,
    details,
    deadline,
    budget,
    restaurantName,
    orderCost,
    deliveryFee,
    totalPrice,
    isFoodDelivery,
  ]);

  function handleSubmit() {
    if (!fullName.trim()) {
      setErrorMessage("يرجى كتابة الاسم الكامل.");
      return;
    }

    if (!phone.trim()) {
      setErrorMessage("يرجى كتابة رقم الهاتف.");
      return;
    }

    if (!details.trim()) {
      setErrorMessage("يرجى كتابة تفاصيل الطلب.");
      return;
    }

    if (isFoodDelivery) {
      if (!restaurantName.trim()) {
        setErrorMessage("يرجى كتابة اسم المطعم.");
        return;
      }

      if (!location.trim()) {
        setErrorMessage("يرجى كتابة عنوان التوصيل.");
        return;
      }
    } else if (!service.trim()) {
      setErrorMessage("يرجى كتابة الخدمة المطلوبة.");
      return;
    }

    setErrorMessage("");
    window.open(whatsappUrl, "_blank");
  }

  return (
    <main>
      <Navbar />

      <section className="hero request-hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">طلب خدمة</span>

          <h1 className="hero-title">
            أرسل طلبك بشكل
            <span className="hero-highlight"> واضح ومرتب</span>
          </h1>

          <p className="hero-subtitle">
            اختر نوع الطلب، اكتب التفاصيل، ثم أرسل كل شيء مباشرة عبر واتساب
            بطريقة منظمة وسريعة.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="request-top-boxes">
            <div className="request-mini-box">
              <span className="request-mini-title">طلب واضح</span>
              <p>كل التفاصيل تصل في رسالة مرتبة وجاهزة للرد.</p>
            </div>

            <div className="request-mini-box">
              <span className="request-mini-title">مرونة أكثر</span>
              <p>مناسب للخدمات الرقمية ولتوصيل الطلبات من المطاعم.</p>
            </div>

            <div className="request-mini-box">
              <span className="request-mini-title">تنفيذ أسرع</span>
              <p>كلما كان الطلب أوضح، كانت البداية أسرع والنتيجة أدق.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="request-layout">
            <div className="request-side">
              <div className="info-box request-side-box">
                <h3>كيف يتم الطلب؟</h3>

                <div className="request-steps-list">
                  <div className="request-step-item">
                    <span>1</span>
                    <p>اختر نوع الطلب: خدمة رقمية أو توصيل مطاعم.</p>
                  </div>

                  <div className="request-step-item">
                    <span>2</span>
                    <p>املأ البيانات الأساسية والتفاصيل المهمة.</p>
                  </div>

                  <div className="request-step-item">
                    <span>3</span>
                    <p>اضغط زر الإرسال لفتح واتساب برسالة جاهزة ومنظمة.</p>
                  </div>
                </div>
              </div>

              <div className="info-box request-side-box highlight-box">
                <h3>مهم جدًا</h3>

                {isFoodDelivery ? (
                  <>
                    <p className="highlight-text big-highlight">
                      السعر النهائي = سعر الطلب + سعر التوصيل
                    </p>
                    <p>
                      اكتب اسم المطعم والعنوان والتفاصيل بوضوح حتى يتم التنفيذ
                      بسرعة ودقة.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="highlight-text big-highlight">
                      كلما كان وصف الخدمة أوضح، كانت النتيجة أفضل
                    </p>
                    <p>
                      اذكر المطلوب، الموعد، وأي تفاصيل إضافية حتى تكون البداية
                      أسرع.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="form-card request-form-card">
              <div className="request-form-head">
                <h3>بيانات الطلب</h3>
                <p>املأ الحقول التالية، ثم أرسل الطلب مباشرة.</p>
              </div>

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

                {isFoodDelivery ? (
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
                      <div className="total-box total-box-strong">
                        {totalPrice}
                      </div>
                    </div>
                  </>
                ) : (
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

                    <div className="form-field">
                      <label>المدينة</label>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="مثال: اسطنبول"
                      />
                    </div>

                    <div className="form-field">
                      <label>الميزانية المتوقعة</label>
                      <input
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        placeholder="اختياري"
                      />
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

                {errorMessage ? (
                  <div className="form-full">
                    <div className="form-error-box">{errorMessage}</div>
                  </div>
                ) : null}

                <div className="form-full">
                  <button
                    type="button"
                    className="button button-primary full-width request-submit"
                    onClick={handleSubmit}
                  >
                    إرسال الطلب عبر واتساب
                  </button>
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