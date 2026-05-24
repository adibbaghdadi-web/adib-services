"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";

export default function OnboardingPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
        return;
      }

      setUser(currentUser);
    });
  }, [router]);

  async function chooseRole(role: "client" | "provider") {
    if (!user) return;

    setSaving(true);

    await setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        name: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || "",
        role,
        status: role === "provider" ? "pending_review" : "active",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    router.push("/account");
  }

  return (
    <main className="login-page">
      <section className="login-card" style={{ maxWidth: 760 }}>
        <div className="login-logo">A</div>

        <p className="login-eyebrow">ADIB Platform</p>

        <h1>اختر نوع حسابك</h1>

        <p className="login-text">
          حتى نقدم لك تجربة مناسبة، اختر هل تريد طلب خدمة كعميل
          أم تريد الانضمام كمقدم خدمة وعرض أعمالك.
        </p>

        <div style={{ display: "grid", gap: 18, marginTop: 24 }}>
          <button
            className="login-google"
            disabled={saving}
            onClick={() => chooseRole("client")}
          >
            أريد طلب خدمة
          </button>

          <button
            className="login-google"
            disabled={saving}
            onClick={() => chooseRole("provider")}
          >
            أريد أن أصبح مقدم خدمة
          </button>
        </div>

        <p className="login-footer">
          يمكنك تعديل بيانات حسابك لاحقًا من لوحة الحساب.
        </p>
      </section>
    </main>
  );
}