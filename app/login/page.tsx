"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function LoginPage() {
  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/account";
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء تسجيل الدخول");
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-logo">A</div>

        <p className="login-eyebrow">ADIB Account</p>

        <h1>تسجيل الدخول</h1>

        <p className="login-text">
          سجّل دخولك للوصول إلى حسابك، متابعة طلباتك، وإدارة خدماتك بسهولة.
        </p>

        <button type="button" className="login-google" onClick={handleGoogleLogin}>
          <span>G</span>
          تسجيل الدخول عبر Google
        </button>

        <p className="login-footer">ADIB SERVICES © 2026</p>
      </section>
    </main>
  );
}