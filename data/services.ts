export type ServiceItem = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
};

export const services: ServiceItem[] = [
  {
    id: 1,
    slug: "logo-design",
    title: "تصميم شعار",
    category: "خدمات رقمية",
    description: "تصميم شعار احترافي يعبر عن مشروعك بشكل واضح ومميز.",
    price: "يبدأ من 25$",
    duration: "1 - 2 يوم",
    features: ["تصميم احترافي", "أسلوب واضح", "ملائم للهوية التجارية"],
    popular: true,
  },
  {
    id: 2,
    slug: "social-media-post-design",
    title: "تصميم بوست سوشيال ميديا",
    category: "خدمات رقمية",
    description: "تصميم بوستات وإعلانات جذابة للسوشيال ميديا.",
    price: "يبدأ من 10$",
    duration: "خلال 24 ساعة",
    features: ["تصميم حديث", "مناسب للعروض", "تسليم سريع"],
  },
  {
    id: 3,
    slug: "photo-editing",
    title: "تعديل صور",
    category: "خدمات رقمية",
    description: "تحسين الصور وتنظيفها وإخراجها بشكل احترافي.",
    price: "يبدأ من 5$",
    duration: "خلال ساعات",
    features: ["تحسين الجودة", "قص وتنظيف", "مظهر احترافي"],
  },
  {
    id: 4,
    slug: "meal-delivery",
    title: "توصيل وجبات",
    category: "خدمات توصيل",
    description: "شراء وتوصيل الطلبات من المطاعم إلى موقعك.",
    price: "يبدأ من 50 ليرة",
    duration: "30 - 60 دقيقة",
    features: ["تنفيذ سريع", "مرونة بالموقع", "متابعة مباشرة"],
    popular: true,
  },
  {
    id: 5,
    slug: "store-purchase-delivery",
    title: "شراء طلب من متجر",
    category: "خدمات توصيل",
    description: "شراء منتج أو طلب من متجر وتوصيله لك.",
    price: "حسب الطلب",
    duration: "خلال نفس اليوم",
    features: ["شراء حسب الطلب", "توصيل مباشر", "مرونة كاملة"],
  },
  {
    id: 6,
    slug: "car-arrangement",
    title: "تنسيق سيارة توصيل",
    category: "خدمات تنسيق",
    description: "التواصل مع سائق أو سيارة مناسبة لتوصيلك أو توصيل أغراضك.",
    price: "حسب المسافة",
    duration: "خلال نفس اليوم",
    features: ["تنسيق سريع", "متابعة مباشرة", "حلول حسب الحاجة"],
  },
  {
    id: 7,
    slug: "special-request",
    title: "خدمة حسب الطلب",
    category: "خدمات خاصة",
    description: "أي خدمة تحتاجها يمكن تنفيذها أو تنسيقها حسب الاتفاق.",
    price: "حسب الطلب",
    duration: "حسب الخدمة",
    features: ["مرونة كاملة", "تنفيذ خاص", "حسب الاتفاق"],
    popular: true,
  },
];