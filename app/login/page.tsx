"use client";

import { useEffect } from "react";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function LoginPage() {
  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result?.user) {
        window.location.href = "/account";
      }
    });
  }, []);

  async function handleGoogleLogin() {
    await signInWithRedirect(auth, googleProvider);
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
          تسجيل الدخول عبر Google
        </button>

        <p className="login-footer">ADIB SERVICES © 2026</p>
      </section>
    </main>
  );
}