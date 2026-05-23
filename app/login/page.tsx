"use client";

import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleGoogleLogin() {
    try {
      setError("");
      const result = await signInWithPopup(auth, googleProvider);

      if (result.user) {
        window.location.href = "/account";
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.code || err?.message || "حدث خطأ غير معروف");
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-logo">A</div>

        <p className="login-eyebrow">ADIB Account</p>

        <h1>تسجيل الدخول</h1>

        <p className="login-text">
          سجّل دخولك للوصول إلى حسابك ومتابعة طلباتك.
        </p>

        <button
          type="button"
          className="login-google"
          onClick={handleGoogleLogin}
        >
          تسجيل الدخول عبر Google
        </button>

        {error ? (
          <p style={{ color: "#ff6b6b", marginTop: "18px", direction: "ltr" }}>
            {error}
          </p>
        ) : null}

        <p className="login-footer">ADIB SERVICES © 2026</p>
      </section>
    </main>
  );
}