export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "هوية بصرية لمطعم",
    category: "هوية بصرية",
    description:
      "تصميم هوية بصرية حديثة ونظيفة لمطعم بأسلوب احترافي يعكس البراند بشكل قوي.",
  },
  {
    id: 2,
    title: "تصميم بوست سوشيال ميديا",
    category: "سوشيال ميديا",
    description:
      "تصميم بوست ترويجي احترافي مناسب للعروض والحملات الإعلانية على السوشيال ميديا.",
  },
  {
    id: 3,
    title: "تصميم شعار براند شخصي",
    category: "شعار",
    description:
      "شعار نظيف ومميز قابل للاستخدام الرقمي ويعطي حضورًا بصريًا واضحًا.",
  },
];