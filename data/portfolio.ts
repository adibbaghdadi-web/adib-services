export type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "هوية بصرية لمطعم",
    category: "هوية بصرية",
    description:
      "تصميم هوية بصرية حديثة وواضحة لمطعم بأسلوب نظيف واحترافي يعكس قوة البراند.",
    image: "/images/brand1.jpg",
  },
  {
    id: 2,
    title: "تصميم بوست سوشيال ميديا",
    category: "سوشيال ميديا",
    description:
      "تصميم بوست ترويجي احترافي مناسب للعروض والحملات التسويقية على السوشيال ميديا.",
    image: "/images/post1.jpg",
  },
  {
    id: 3,
    title: "تصميم شعار براند شخصي",
    category: "شعار",
    description:
      "شعار نظيف ومميز قابل للاستخدام في المنصات المختلفة بشكل واضح واحترافي.",
    image: "/images/logo1.jpg",
  },
];