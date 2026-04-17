import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle
            eyebrow="من نحن"
            title="ADIB ليس مجرد موقع، بل تجربة مرتبة"
            description="الهدف من ADIB هو تقديم خدمات رقمية بشكل احترافي وواضح، بعيدًا عن الفوضى والتكرار."
            centered
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 leading-8 text-white/70">
          <p className="mb-6">
            تم بناء ADIB ليكون واجهة خدمات حديثة تعطي العميل إحساسًا بالثقة من أول
            زيارة، وتختصر عليه الطريق في فهم الخدمة وطلبها.
          </p>
          <p className="mb-6">
            التركيز ليس فقط على الشكل، بل أيضًا على ترتيب المحتوى، وضوح الطلب، وبناء
            تجربة تجعل الموقع يبدو كبراند حقيقي وليس مجرد صفحة عادية.
          </p>
          <p>
            كل تفصيلة في الموقع مقصودة: البساطة، التناسق، وتقليل التكرار، حتى يكون
            الشكل النهائي نظيفًا وقويًا.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}