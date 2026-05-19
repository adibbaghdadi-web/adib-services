"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

function serviceSlugToLabel(slug: string) {
  const map: Record<string, string> = {
    "social-media-design": "تصميم سوشيال ميديا",
    "logo-branding": "تصميم شعار وهوية",
    "website-development": "تطوير موقع",
    "ai-services": "خدمات الذكاء الاصطناعي",
  };

  return map[slug] || slug;
}

export default function RequestPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [deadline, setDeadline] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service") || "";

    if (serviceParam) {
      setService(serviceSlugToLabel(serviceParam));
    }
  }, []);

  const mailUrl = useMemo(() => {
    const subject = encodeURIComponent("طلب خدمة جديد من موقع ADIB");

    const body = encodeURIComponent(`مرحبًا ADIB،

أريد طلب خدمة من الموقع.

الاسم: ${fullName || "-"}
البريد الإلكتروني: ${email || "-"}
الخدمة المطلوبة: ${service || "-"}
المدينة: ${city || "-"}
الموعد المطلوب: ${deadline || "-"}
الميزانية المتوقعة: ${budget || "-"}
تفاصيل الطلب:
${details || "-"}

شكرًا.`);

    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }, [fullName, email, service, city, deadline, budget, details]);

  function handleSubmit() {
    if (!fullName.trim()) {
      setErrorMessage("يرجى كتابة الاسم الكامل.");
      return;
    }

    if (!email.trim()) {
      setErrorMessage("يرجى كتابة البريد الإلكتروني.");
      return;
    }

    if (!service.trim()) {
      setErrorMessage("يرجى كتابة الخدمة المطلوبة.");
      return;
    }

    if (!details.trim()) {
      setErrorMessage("يرجى كتابة تفاصيل الطلب.");
      return;
    }

    setErrorMessage("");
    window.location.href = mailUrl;
  }

  return (
    <main>
      <Navbar />

      <section className="hero request-hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <span className="hero-badge">طلب خدمة</span>

          <h1 className="hero-title">
            أرسل طلبك عبر
            <span className="hero-highlight"> البريد الإلكتروني</span>
          </h1>

          <p className="hero-subtitle">
            اكتب تفاصيل الخدمة وسيتم تجهيز رسالة بريد مرتبة ترسلها مباشرة.
          </p>
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
                    <p>اختر الخدمة أو اكتبها يدويًا.</p>
                  </div>

                  <div className="request-step-item">
                    <span>2</span>
                    <p>اكتب التفاصيل والموعد والميزانية إن وجدت.</p>
                  </div>

                  <div className="request-step-item">
                    <span>3</span>
                    <p>اضغط إرسال ليتم فتح رسالة بريد جاهزة.</p>
                  </div>
                </div>
              </div>

              <div className="info-box request-side-box highlight-box">
                <h3>مهم</h3>
                <p className="highlight-text big-highlight">
                  كلما كانت التفاصيل أوضح، كانت النتيجة أفضل.
                </p>
                <p>
                  اشرح ما تريد تنفيذه، المقاس، اللون، الموعد، وأي مثال يعجبك.
                </p>
              </div>
            </div>

            <div className="form-card request-form-card">
              <div className="request-form-head">
                <h3>بيانات الطلب</h3>
                <p>املأ البيانات وسيتم تجهيز بريد إلكتروني منظم.</p>
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
                  <label>البريد الإلكتروني</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="اكتب بريدك"
                  />
                </div>

                <div className="form-field">
                  <label>الخدمة المطلوبة</label>
                  <input
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    placeholder="مثال: تصميم شعار"
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
                  <label>الموعد المطلوب</label>
                  <input
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    placeholder="مثال: خلال يومين"
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
                    إرسال الطلب عبر الإيميل
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