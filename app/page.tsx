"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const reasons = [
  {
    title: "تنفيذ سريع",
    desc: "ننجز الطلبات بسرعة ووضوح بدون تعقيد.",
  },
  {
    title: "جودة واحتراف",
    desc: "التركيز على النتيجة النهائية بشكل يليق بالعميل.",
  },
  {
    title: "تواصل مباشر",
    desc: "تواصل سريع عبر واتساب ومتابعة واضحة من البداية.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(7,7,10,0.9))]" />

        <div className="relative mx-auto max-w-7xl px-4 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              ADIB
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl"
            >
              نُحوّل فكرتك إلى
              <span className="block text-green-400">نتيجة حقيقية</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/70"
            >
              خدمات احترافية تشمل التصميم، المحتوى، تطوير المواقع، وخدمات الذكاء
              الاصطناعي — بسرعة، جودة، وتواصل مباشر.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/services"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.18)] transition hover:scale-105"
              >
                استعرض الخدمات
              </Link>

              <Link
                href="/request"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                ابدأ الآن
              </Link>

              <a
                href="https://wa.me/905362966530?text=مرحبا، أريد الاستفسار عن خدمة"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] transition hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)]"
              >
                تواصل واتساب
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <span>✔ سرعة في الإنجاز</span>
          <span>✔ جودة عالية</span>
          <span>✔ تواصل مباشر</span>
          <span>✔ حلول عملية</span>
        </div>
      </section>

      <Services />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">لماذا ADIB؟</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10"
            >
              <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
              <p className="leading-8 text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center shadow-[0_0_60px_rgba(255,255,255,0.04)]">
          <h2 className="mb-4 text-4xl font-bold">جاهز نبدأ؟</h2>
          <p className="mx-auto mb-6 max-w-2xl leading-8 text-white/70">
            إذا عندك فكرة، مشروع، أو خدمة تريد تنفيذها بشكل احترافي، ابدأ الآن
            وسنتابع معك مباشرة.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/request"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              اطلب الخدمة
            </Link>

            <a
              href="https://wa.me/905362966530?text=مرحبا، أريد بدء مشروع جديد"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}