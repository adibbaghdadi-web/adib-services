"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { auth, db } from "@/lib/firebase";

type UserProfile = {
  role?: "client" | "partner";
  name?: string;
  email?: string;
  photoURL?: string;
};

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setLoading(false);
        return;
      }

      setUser(currentUser);

      const snap = await getDoc(doc(db, "users", currentUser.uid));

      if (!snap.exists()) {
        window.location.href = "/onboarding";
        return;
      }

      setProfile(snap.data() as UserProfile);
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
          <h1>يجب تسجيل الدخول أولاً</h1>
          <Link href="/login" className="login-google">
            تسجيل الدخول
          </Link>
        </section>
      </main>
    );
  }

  const isClient = profile?.role === "client";

  return (
    <main className="login-page">
      <section className="login-card" style={{ maxWidth: 720 }}>
        <div className="login-logo">A</div>
        <p className="login-eyebrow">
          {isClient ? "حساب عميل" : "حساب مقدم أعمال"}
        </p>

        <h1>مرحباً {profile?.name || user.displayName || "بك"}</h1>

        <p className="login-text">{profile?.email || user.email}</p>

        {isClient ? (
          <div>
            <h2>لوحة العميل</h2>
            <p className="login-text">
              من هنا يمكنك طلب خدمة جديدة ومتابعة طلباتك القادمة.
            </p>

            <Link href="/request" className="login-google">
              طلب خدمة جديدة
            </Link>
          </div>
        ) : (
          <div>
            <h2>لوحة مقدم الأعمال</h2>
            <p className="login-text">
              هنا ستتمكن لاحقاً من إضافة أعمالك وبياناتك ليتم عرضها داخل المنصة.
            </p>

            <Link href="/portfolio" className="login-google">
              مشاهدة الأعمال
            </Link>
          </div>
        )}

        <button
          className="login-google"
          style={{ marginTop: 18 }}
          onClick={() => signOut(auth)}
        >
          تسجيل الخروج
        </button>
      </section>
    </main>
  );
}