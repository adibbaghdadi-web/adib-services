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
    shortDescription: "بوستات، إعلانات، وعروض بشكل احترافي وجذاب.",
    description:
      "تصميم منشورات وإعلانات للسوشيال ميديا بأسلوب حديث وواضح يلفت الانتباه ويخدم الهدف التسويقي.",
    priceFrom: "$15",
    delivery: "24 - 48 ساعة",
    features: ["تصميم احترافي", "أسلوب حديث", "مناسب للإعلانات", "تنفيذ سريع"],
  },
  {
    title: "تصميم شعار وهوية",
    slug: "logo-branding",
    shortDescription: "شعارات وهوية بصرية نظيفة وقابلة للتطوير.",
    description:
      "تصميم شعار احترافي وهوية بصرية تعطي مشروعك شكلًا واضحًا وقويًا وتبني حضورًا بصريًا مميزًا.",
    priceFrom: "$40",
    delivery: "2 - 4 أيام",
    features: ["شعار مميز", "ألوان وهوية", "ملف نظيف", "قابل للاستخدام الرقمي"],
  },
  {
    title: "تطوير مواقع",
    slug: "website-development",
    shortDescription: "مواقع حديثة وسريعة بتجربة استخدام مرتبة.",
    description:
      "بناء مواقع حديثة وسريعة تناسب البراندات، الخدمات، أو المشاريع الشخصية مع واجهة قوية وواضحة.",
    priceFrom: "$120",
    delivery: "3 - 7 أيام",
    features: ["تصميم حديث", "سرعة عالية", "مناسب للموبايل", "هيكل احترافي"],
  },
  {
    title: "خدمات الذكاء الاصطناعي",
    slug: "ai-services",
    shortDescription: "برومبتات، صور، أفكار، ومساعدة إنتاجية ذكية.",
    description:
      "خدمات مبنية على الذكاء الاصطناعي تشمل برومبتات احترافية، أفكار محتوى، وتحسين الإنتاجية البصرية.",
    priceFrom: "$10",
    delivery: "خلال ساعات",
    features: ["برومبتات دقيقة", "أفكار قوية", "تنفيذ سريع", "نتائج عملية"],
  },
];