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
    description: "تصميم هوية حديثة وواضحة تناسب مطعمًا عصريًا وتساعده على الظهور بشكل قوي.",
  },
  {
    id: 2,
    title: "بوست عرض سوشيال ميديا",
    category: "سوشيال ميديا",
    description: "تصميم إعلان بصري جذاب مناسب للعروض السريعة والحملات الترويجية.",
  },
  {
    id: 3,
    title: "شعار مشروع شخصي",
    category: "شعارات",
    description: "تصميم شعار بسيط واحترافي يعبر عن شخصية المشروع ويثبت في ذهن العميل.",
  },
];