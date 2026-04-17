import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle
            eyebrow="الأعمال"
            title="نماذج من أعمالي"
            description="هنا بعض الأعمال التي تعكس أسلوبي في التصميم والتنفيذ بشكل مرتب واحترافي."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                  {item.category}
                </span>

                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="leading-8 text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}