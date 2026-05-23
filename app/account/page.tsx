"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import Link from "next/link";
import { auth } from "@/lib/firebase";

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <main className="login-page">جاري التحميل...</main>;
  }

  if (!user) {
    return (
      <main className="login-page">
        <section className="login-card">
          <h1>يجب تسجيل الدخول أولًا</h1>
          <Link href="/login" className="login-google">
            تسجيل الدخول
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-logo">A</div>
        <p className="login-eyebrow">ADIB Account</p>

        <h1>حسابي</h1>

        <p className="login-text">
          مرحبًا {user.displayName || "عميل ADIB"}
        </p>

        <p className="login-text">
          {user.email || user.phoneNumber}
        </p>

        <button
          className="login-google"
          onClick={() => signOut(auth)}
        >
          تسجيل الخروج
        </button>

        <Link href="/request" className="login-footer">
          اطلب خدمة جديدة
        </Link>
      </section>
    </main>
  );
}