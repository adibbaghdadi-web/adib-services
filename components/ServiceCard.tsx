import Link from "next/link";
import { ServiceItem } from "@/data/services";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="service-card-premium">
      <div className="service-card-head">
        <div>
          <span className="service-mini-badge">خدمة احترافية</span>
          <h3>{service.title}</h3>
        </div>

        <div className="service-price-box">
          <span>يبدأ من</span>
          <strong>{service.priceFrom}</strong>
        </div>
      </div>

      <p className="service-card-text">{service.description}</p>

      <div className="service-meta">
        <span>مدة التنفيذ: {service.delivery}</span>
      </div>

      <ul className="service-feature-list">
        {service.features.map((feature) => (
          <li key={feature}>
            <span className="feature-dot">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="service-card-actions">
        <Link href={`/request?service=${service.slug}`} className="button button-primary">
          اطلب هذه الخدمة
        </Link>

        <Link href="/pricing" className="button button-outline">
          راجع السعر
        </Link>
      </div>
    </article>
  );
}