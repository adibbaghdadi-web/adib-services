export type ServiceItem = {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  priceFrom: string;
  delivery: string;
  features: string[];
};

export const services: ServiceItem[] = [
  {
    title: "تصميم سوشيال ميديا",
    slug: "social-media-design",
    shortDescription: "بوستات وإعلانات احترافية للسوشيال ميديا.",
    description:
      "تصميم منشورات وإعلانات حديثة وجذابة تناسب البراندات والمتاجر والحملات التسويقية.",
    priceFrom: "$15",
    delivery: "24 - 48 ساعة",
    features: ["تصميم احترافي", "مناسب للإعلانات", "تنفيذ سريع", "أسلوب حديث"],
  },
  {
    title: "تصميم شعار وهوية",
    slug: "logo-branding",
    shortDescription: "شعار وهوية بصرية مرتبة وقابلة للتطوير.",
    description:
      "تصميم شعار مميز وهوية بصرية نظيفة تمنح مشروعك حضورًا بصريًا واضحًا وقويًا.",
    priceFrom: "$40",
    delivery: "2 - 4 أيام",
    features: ["شعار مميز", "ملف نظيف", "ألوان وهوية", "استخدام رقمي احترافي"],
  },
  {
    title: "تطوير مواقع",
    slug: "website-development",
    shortDescription: "مواقع حديثة وسريعة بتجربة احترافية.",
    description:
      "بناء مواقع حديثة وسريعة مناسبة للبراندات والخدمات والمشاريع الشخصية بواجهة قوية وواضحة.",
    priceFrom: "$120",
    delivery: "3 - 7 أيام",
    features: ["تصميم حديث", "سرعة عالية", "مناسب للموبايل", "هيكل احترافي"],
  },
  {
    title: "خدمات الذكاء الاصطناعي",
    slug: "ai-services",
    shortDescription: "برومبتات، أفكار، وصناعة محتوى بالذكاء الاصطناعي.",
    description:
      "خدمات مبنية على الذكاء الاصطناعي تشمل برومبتات احترافية، أفكار محتوى، وصناعة بصرية ذكية.",
    priceFrom: "$10",
    delivery: "خلال ساعات",
    features: ["برومبتات دقيقة", "أفكار قوية", "تنفيذ سريع", "نتائج عملية"],
  },
  {
    title: "توصيل طلبات مطاعم",
    slug: "food-delivery",
    shortDescription: "اطلب من أي مطعم تريده وسأقوم بالتوصيل.",
    description:
      "خدمة توصيل طلبات الطعام من مطعم تحدده أنت. السعر النهائي = سعر الطلب + سعر التوصيل.",
    priceFrom: "سعر الطلب + سعر التوصيل",
    delivery: "حسب الموقع ووقت الطلب",
    features: [
      "الطلب من المطعم الذي تختاره",
      "توصيل إلى العنوان المحدد",
      "احتساب واضح للتكلفة",
      "تنسيق سريع عبر واتساب",
    ],
  },
];