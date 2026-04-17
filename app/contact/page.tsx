import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle
            eyebrow="التواصل"
            title="تواصل واضح ومباشر"
            description="إذا عندك استفسار أو تريد مناقشة مشروع قبل الطلب، استخدم وسائل التواصل التالية."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
            <h3 className="mb-3 text-2xl font-bold">البريد الإلكتروني</h3>
            <p className="text-white/70">{siteConfig.email}</p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
            <h3 className="mb-3 text-2xl font-bold">إنستغرام</h3>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-white/70"
            >
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}