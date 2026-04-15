import Link from "next/link";
import { ServiceItem } from "@/data/services";

export default function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_0_40px_rgba(255,255,255,0.03)] transition duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_60px_rgba(255,255,255,0.06)]">
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)]" />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
            {item.category}
          </span>

          {item.popular ? (
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
              الأكثر طلبًا
            </span>
          ) : null}
        </div>

        <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
        <p className="mb-5 leading-7 text-white/70">{item.description}</p>

        <div className="mb-3 text-sm text-white/80">💰 {item.price}</div>
        <div className="mb-5 text-sm text-white/80">⏱ {item.duration}</div>

        <ul className="mb-6 space-y-2 text-sm text-white/70">
          {item.features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>

        <div className="flex gap-3">
          <Link
            href={`/request?service=${encodeURIComponent(item.title)}`}
            className="flex-1 rounded-xl bg-white px-4 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
          >
            اطلب الآن
          </Link>

          <Link
            href={`/services/${item.slug}`}
            className="rounded-xl border border-white/15 px-4 py-3 text-sm text-white transition hover:bg-white/10"
          >
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
}