export type PortfolioItem = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  duration: string;
  tools: string[];
  fullDescription: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "restaurant-branding",
    title: "هوية بصرية لمطعم",
    category: "هوية بصرية",
    description: "تصميم هوية حديثة تناسب مشروع عصري.",
    image: "/images/brand1.jpg",
    client: "مطعم تجريبي",
    duration: "3 أيام",
    tools: ["Illustrator", "Photoshop"],
    fullDescription:
      "تم تنفيذ هذا المشروع بهدف بناء هوية بصرية واضحة وحديثة لمطعم يحتاج إلى حضور بصري قوي. ركز التصميم على الوضوح، النظافة، والأسلوب العصري المناسب للجمهور المستهدف.",
  },
  {
    id: 2,
    slug: "social-media-post",
    title: "بوست سوشيال ميديا",
    category: "سوشيال ميديا",
    description: "تصميم إعلان جذاب مناسب للعروض.",
    image: "/images/post1.jpg",
    client: "حملة ترويجية",
    duration: "يوم واحد",
    tools: ["Photoshop"],
    fullDescription:
      "هذا العمل مخصص لحملة ترويجية على السوشيال ميديا، مع التركيز على إبراز العرض بشكل سريع وجذاب. تم ترتيب العناصر بحيث يكون الإعلان واضحًا وسهل القراءة.",
  },
  {
    id: 3,
    slug: "professional-logo",
    title: "شعار احترافي",
    category: "شعارات",
    description: "تصميم شعار بسيط وقوي يثبت في ذهن العميل.",
    image: "/images/logo1.jpg",
    client: "مشروع شخصي",
    duration: "يومان",
    tools: ["Illustrator"],
    fullDescription:
      "تم تصميم هذا الشعار بأسلوب بسيط واحترافي، مع الحرص على أن يكون واضحًا، قابلًا للتذكر، ويعمل جيدًا على مختلف الاستخدامات الرقمية والمطبوعة.",
  },
];