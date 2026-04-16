"use client";

const services = [
  {
    title: "تصميم احترافي",
    desc: "تصميم سوشيال ميديا، لوجوهات، هوية كاملة بشكل احترافي.",
    price: "تبدأ من 10$",
  },
  {
    title: "مونتاج فيديو",
    desc: "مونتاج فيديوهات قصيرة أو إعلانات بجودة عالية وسرعة تنفيذ.",
    price: "تبدأ من 20$",
  },
  {
    title: "تطوير مواقع",
    desc: "بناء مواقع حديثة وسريعة باستخدام أحدث التقنيات.",
    price: "تبدأ من 50$",
  },
  {
    title: "خدمات AI",
    desc: "إنشاء برومبتات، فيديوهات AI، صور احترافية بالذكاء الاصطناعي.",
    price: "تبدأ من 5$",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      
      <h2 className="text-4xl font-bold text-center mb-12">
        خدماتنا
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-300 mb-4">{s.desc}</p>

            <div className="text-green-400 font-bold mb-4">
              {s.price}
            </div>

            <button
  onClick={() =>
    window.open("https://wa.me/905362966530?text=مرحبا اريد طلب خدمة", "_blank")

  className="w-full bg-green-500 hover:bg-green-600 transition py-2 rounded-lg"
>
  اطلب الآن
</button>
          </div>
        ))}
      </div>
    </section>
  );
}