import Link from "next/link";
import { ServiceItem } from "@/data/services";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="card">
      <div className="card-top">
        <h3>{service.title}</h3>
        <span className="price-badge">يبدأ من {service.priceFrom}</span>
      </div>

      <p className="card-description">{service.description}</p>

      <p className="card-delivery">مدة التنفيذ: {service.delivery}</p>

      <ul className="feature-list">
        {service.features.map((feature) => (
          <li key={feature}>✔ {feature}</li>
        ))}
      </ul>

      <Link href={`/request?service=${service.slug}`} className="button button-light">
        اطلب هذه الخدمة
      </Link>
    </article>
  );
}