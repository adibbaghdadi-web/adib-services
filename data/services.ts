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
    shortDescription: "تصاميم منشورات وإعلانات بشكل احترافي.",
    description:
      "تصميم بوستات وإعلانات للسوشيال ميديا بأسلوب واضح وجذاب يناسب البراند والحملة.",
    priceFrom: "$15",
    delivery: "24 - 48 ساعة",
    features: ["تصميم احترافي", "أسلوب حديث", "مناسب للإعلانات", "تسليم سريع"],
  },
  {
    title: "تصميم شعار وهوية",
    slug: "logo-branding",
    shortDescription: "شعار وهوية بصرية مرتبة وقابلة للاستخدام.",
    description:
      "تصميم شعار وهوية بصرية تعطي مشروعك شكلًا واضحًا وقويًا وقابلًا للتطوير.",
    priceFrom: "$40",
    delivery: "2 - 4 أيام",
    features: ["شعار مميز", "ملف نظيف", "ألوان وهوية", "قابل للاستخدام الرقمي"],
  },
  {
    title: "تطوير موقع",
    slug: "website-development",
    shortDescription: "موقع احترافي سريع ومتجاوب.",
    description:
      "تصميم وتطوير موقع احترافي بواجهة واضحة وتجربة استخدام مرتبة تناسب مشروعك.",
    priceFrom: "$120",
    delivery: "5 - 10 أيام",
    features: ["تصميم متجاوب", "صفحات منظمة", "سرعة جيدة", "نشر على Vercel"],
  },
  {
    title: "خدمات الذكاء الاصطناعي",
    slug: "ai-services",
    shortDescription: "حلول وأدوات ومحتوى بالذكاء الاصطناعي.",
    description:
      "خدمات تعتمد على الذكاء الاصطناعي مثل صناعة محتوى، برومبتات، أفكار، وتنظيم مشاريع.",
    priceFrom: "$25",
    delivery: "1 - 3 أيام",
    features: ["أفكار احترافية", "برومبتات دقيقة", "تنظيم محتوى", "تنفيذ سريع"],
  },
];