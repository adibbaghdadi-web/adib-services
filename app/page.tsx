"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import AnimatedCard from "@/components/AnimatedCard";
import { services } from "@/data/services";
import { serviceCategories } from "@/data/service-categories";
import Services from "@/components/Services";

const highlights = [
  {
    icon: "⚡",
    title: "سرعة التنفيذ",
    text: "تنفيذ سريع وبدون تعقيد، سواء كانت الخدمة رقمية أو ميدانية.",
  },
  {
    icon: "🧩",
    title: "خدمات متعددة",
    text: "تصميم، توصيل، تنفيذ طلبات، وخدمات حسب الطلب في مكان واحد.",
  },
  {
    icon: "💬",
    title: "تواصل مباشر",
    text: "تواصل سريع وواضح عبر واتساب حتى يكون الطلب أسهل وأسرع.",
  },
];

const examples = [
  {
    title: "تصميم شعار",
    text: "شعار احترافي لمطعم، متجر، أو مشروع شخصي بأسلوب واضح وحديث.",
  },
  {
    title: "توصيل وجبات",
    text: "شراء وتوصيل الطلبات من المطاعم بسرعة إلى الموقع المطلوب.",
  },
  {
    title: "طلب خاص",
    text: "أي خدمة تحتاجها يمكن تنفيذها أو تنسيقها حسب الاتفاق.",
  },
];

const steps = [
  {
    number: "01",
    title: "اختر الخدمة",
    text: "استعرض الخدمات وحدد ما يناسب احتياجك أو اطلب خدمة خاصة.",
  },
  {
    number: "02",
    title: "أرسل التفاصيل",
    text: "اكتب تفاصيل الطلب، الموقع، الوقت، وأي ملاحظات مهمة.",
  },
  {
    number: "03",
    title: "نبدأ التنفيذ",
    text: "أتابع معك مباشرة حتى يتم التنفيذ أو التنسيق بسرعة ووضوح.",
  },
];

const testimonials = [
  {
    name: "عميل - إسطنبول",
    text: "خدمة سريعة جدًا، طلبت تنفيذًا وتم كل شيء بشكل واضح ومريح.",
  },
  {
    name: "عميلة - تركيا",
    text: "أفضل شيء هو سرعة التواصل وسهولة الطلب بدون تعقيد.",
  },
  {
    name: "عميل",
    text: "جميل أن أجد أكثر من خدمة في موقع واحد مع متابعة مباشرة.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(7,7,10,0.9))]" />

        <div className="relative mx-auto max-w-7xl px-4 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              منصة خدمات شاملة
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl"
            >
              اطلب أي خدمة تحتاجها
              <span className="block text-white/65">وننفذها لك فورًا</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-white/70"
            >
              تصميم، توصيل، تنفيذ طلبات، خدمات يومية أو خاصة — لا تبحث كثيرًا.
              فقط اكتب ما تحتاجه وسأتولى التنفيذ أو التنسيق بسرعة واحتراف.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/services"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition hover:scale-105"
              >
                استعرض الخدمات
              </Link>

              <Link
                href="/request"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                اطلب الآن
              </Link>

              <a
                href="https://wa.me/905362966530"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] transition hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)]"
              >
                تواصل واتساب الآن
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <span>✔ تنفيذ سريع</span>
          <span>✔ تواصل مباشر</span>
          <span>✔ خدمات متعددة</span>
          <span>✔ دعم عبر واتساب</span>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCategories.map((category, index) => (
            <AnimatedCard key={category.title} delay={index * 0.08}>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
                <h3 className="mb-3 text-xl font-bold">{category.title}</h3>
                <p className="leading-7 text-white/70">{category.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <SectionTitle
          eyebrow="الخدمات"
          title="أبرز الخدمات"
          description="خدمات عملية وسريعة تساعدك في يومك أو في شغلك، مع وضوح في السعر والمدة وطريقة الطلب."
          centered
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((item, index) => (
            <AnimatedCard key={item.id} delay={index * 0.07}>
              <ServiceCard item={item} />
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle
          eyebrow="لماذا نحن"
          title="لماذا تختار ADIB؟"
          description="لأن الهدف ليس فقط عرض الخدمات، بل تنفيذها بسرعة ووضوح وبطريقة تجعل العميل مرتاحًا من أول خطوة."
          centered
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 0.08}>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10">
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="leading-8 text-white/70">{item.text}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle
          eyebrow="أمثلة"
          title="أمثلة من الخدمات"
          description="أمثلة سريعة توضح نوع الخدمات التي يمكن تنفيذها من خلال الموقع."
          centered
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {examples.map((item, index) => (
            <AnimatedCard key={item.title} delay={index * 0.08}>
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-[0_0_40px_rgba(255,255,255,0.03)]">
                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="leading-8 text-white/70">{item.text}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle
          eyebrow="كيف نعمل"
          title="الطلب عندنا واضح وسريع"
          description="بدون تعقيد. فقط اختر الخدمة، أرسل التفاصيل، ثم أبدأ التنفيذ أو التنسيق مباشرة."
          centered
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedCard key={step.number} delay={index * 0.08}>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
                <div className="mb-4 text-5xl font-extrabold text-white/20">
                  {step.number}
                </div>
                <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                <p className="leading-8 text-white/70">{step.text}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle
          eyebrow="آراء العملاء"
          title="ثقة ووضوح في التعامل"
          description="كلما شعر العميل بالثقة، أصبح طلب الخدمة أسهل وأسرع."
          centered
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <AnimatedCard key={item.text} delay={index * 0.08}>
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8">
                <p className="mb-4 leading-8 text-white/75">“{item.text}”</p>
                <span className="text-sm text-white/55">{item.name}</span>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 text-center shadow-[0_0_60px_rgba(255,255,255,0.04)]">
          <h2 className="mb-4 text-4xl font-bold">جاهز لطلب خدمتك الآن؟</h2>

          <p className="mx-auto mb-6 max-w-2xl leading-8 text-white/70">
            سواء كنت تحتاج خدمة رقمية، توصيل، تنفيذ طلب خاص، أو مساعدة مباشرة،
            ابدأ الآن وسأتابع معك بأسرع وقت.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/request"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] transition hover:scale-105"
            >
              اطلب الخدمة
            </Link>

            <a
              href="https://wa.me/905362966530"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] transition hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)]"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}