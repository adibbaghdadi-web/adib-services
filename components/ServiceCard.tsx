import Link from "next/link";
import { ServiceItem } from "@/data/services";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-2xl font-bold">{service.title}</h3>
        <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-sm font-semibold text-green-300">
          يبدأ من {service.priceFrom}
        </span>
      </div>

      <p className="mb-5 leading-8 text-white/70">{service.description}</p>

      <div className="mb-5 text-sm text-white/55">مدة التنفيذ: {service.delivery}</div>

      <ul className="mb-6 space-y-2 text-sm text-white/75">
        {service.features.map((feature) => (
          <li key={feature}>✔ {feature}</li>
        ))}
      </ul>

      <Link
        href={`/request?service=${service.slug}`}
        className="inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-[1.03]"
      >
        اطلب هذه الخدمة
      </Link>
    </div>
  );
}