export type PortfolioItem = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  client: string;
  duration: string;
  tools: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "restaurant-brand-identity",
    title: "هوية بصرية لمطعم",
    category: "هوية بصرية",
    description: "تصميم هوية حديثة وواضحة تناسب مطعمًا عصريًا وتساعده على الظهور بشكل قوي.",
    fullDescription:
      "تم تنفيذ هوية بصرية كاملة لمطعم عصري تشمل أسلوب الشعار، الألوان، والخطوط، مع التركيز على إظهار المشروع بشكل احترافي وواضح يسهل تذكره.",
    image: "/images/brand1.jpg",
    client: "مطعم محلي",
    duration: "5 أيام",
    tools: ["Illustrator", "Photoshop", "Brand Design"],
  },
  {
    id: 2,
    slug: "social-media-offer-post",
    title: "بوست عرض سوشيال ميديا",
    category: "سوشيال ميديا",
    description: "تصميم إعلان بصري جذاب مناسب للعروض السريعة والحملات الترويجية.",
    fullDescription:
      "تم تصميم بوست سوشيال ميديا مخصص لحملة ترويجية مع ترتيب بصري واضح للعناصر، وإبراز العرض بشكل مباشر يساعد على جذب الانتباه بسرعة.",
    image: "/images/post1.jpg",
    client: "متجر إلكتروني",
    duration: "يوم واحد",
    tools: ["Photoshop", "Social Media Design"],
  },
  {
    id: 3,
    slug: "personal-brand-logo",
    title: "شعار مشروع شخصي",
    category: "شعارات",
    description: "تصميم شعار بسيط واحترافي يعبر عن شخصية المشروع ويثبت في ذهن العميل.",
    fullDescription:
      "تم تنفيذ شعار لمشروع شخصي بأسلوب نظيف واحترافي مع التركيز على البساطة والوضوح حتى يكون قابلًا للاستخدام في المنصات المختلفة بسهولة.",
    image: "/images/logo1.jpg",
    client: "علامة شخصية",
    duration: "3 أيام",
    tools: ["Illustrator", "Logo Design"],
  },
];