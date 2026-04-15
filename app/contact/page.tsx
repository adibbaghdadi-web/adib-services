import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const whatsappNumber = "905362966530";
  const whatsappMessage = encodeURIComponent(
    "مرحباً، أريد الاستفسار عن خدمة من موقع Adib Services"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const instagramUsername = "adibbaghdadyyy";
  const instagramLink = `https://instagram.com/${instagramUsername}`;

  const email = "edip.baghdady,99@gmail.com";

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center">
          <span className="mb-5 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            التواصل
          </span>

          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            تواصل معي بسهولة
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/70">
            سواء عندك استفسار أو طلب خدمة مباشر، يمكنك التواصل معي عبر القنوات التالية.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10"
          >
            <h2 className="mb-3 text-2xl font-bold">واتساب</h2>
            <p className="leading-8 text-white/70">{whatsappNumber}</p>
          </a>

          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10"
          >
            <h2 className="mb-3 text-2xl font-bold">إنستغرام</h2>
            <p className="leading-8 text-white/70">@{instagramUsername}</p>
          </a>

          <a
            href={`mailto:${email}`}
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 transition hover:border-white/20 hover:bg-white/10"
          >
            <h2 className="mb-3 text-2xl font-bold">البريد الإلكتروني</h2>
            <p className="leading-8 text-white/70">{email}</p>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}