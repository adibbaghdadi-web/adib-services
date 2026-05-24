"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";

export default function OnboardingPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
        return;
      }

      setUser(currentUser);
    });
  }, [router]);

  async function chooseRole(role: "client" | "partner") {
    if (!user) return;

    await setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        name: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || "",
        role,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    router.push("/account");
  }

  return (
    <main className="login-page">
      <section className="login-card" style={{ maxWidth: 720 }}>
        <div className="login-logo">A</div>
        <p className="login-eyebrow">ADIB Account</p>

        <h1>اختر نوع حسابك</h1>

        <p className="login-text">
          اختر هل تريد طلب خدمات كعميل، أو تريد مشاركة أعمالك والعمل داخل المنصة.
        </p>

        <div style={{ display: "grid", gap: 16 }}>
          <button className="login-google" onClick={() => chooseRole("client")}>
            أنا عميل وأريد طلب خدمة
          </button>

          <button className="login-google" onClick={() => chooseRole("partner")}>
            أريد مشاركة أعمالي والعمل مع ADIB
          </button>
        </div>
      </section>
    </main>
  );
}