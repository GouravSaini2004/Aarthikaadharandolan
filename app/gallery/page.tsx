import Link from "next/link";
import {
  ArrowLeft,
  ArrowDown,
  Images,
  Flag,
  Users,
  Scale,
} from "lucide-react";

const journeyImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-10.jpg",
  "/images/gallery-11.jpg",
  "/images/gallery-12.jpg",
  "/images/gallery-13.jpg",
  "/images/gallery-14.jpg",
  "/images/gallery-15.jpg",
  "/images/gallery-16.jpg",
  "/images/gallery-17.jpg",
  "/images/gallery-18.jpg",
  "/images/gallery-19.jpg",
  "/images/gallery-20.jpg",
];

export const metadata = {
  title: "आंदोलन की यात्रा",
  description:
    "आर्थिक आधार पर आरक्षण के विचार को लेकर लगभग 15 वर्षों की सार्वजनिक यात्रा और गतिविधियों की झलक।",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white sm:py-28">

        {/* Decorative background */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--gold)]/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[var(--red)]/20 blur-3xl" />

        <div className="container-page relative">

          {/* Back button */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-white/60 transition hover:text-[var(--gold)]"
          >
            <ArrowLeft size={17} />
            वापस होम पर
          </Link>

          <div className="max-w-4xl">

            {/* Small label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-[var(--gold)]">
              <Flag size={14} />
              एक लंबी सार्वजनिक यात्रा
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-7xl">
              आंदोलन की
              <span className="block text-[var(--gold)]">
                15 वर्ष की यात्रा
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              आर्थिक आधार पर आरक्षण और समान अवसर की विचारधारा को लेकर लगभग
              डेढ़ दशक से चल रही इस सार्वजनिक यात्रा में जनसंवाद, सामाजिक
              सहभागिता और लोकतांत्रिक तरीके से अपनी बात रखने के अनेक पड़ाव
              रहे हैं।
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-4">

              {/* Stat 1 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
                <div className="text-3xl font-black text-[var(--gold)]">
                  15+
                </div>

                <div className="mt-1 text-xs font-bold text-white/50">
                  वर्षों की यात्रा
                </div>
              </div>

              {/* Stat 2 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
                <div className="text-3xl font-black text-[var(--gold)]">
                  अनेक
                </div>

                <div className="mt-1 text-xs font-bold text-white/50">
                  सार्वजनिक संवाद
                </div>
              </div>

              {/* Stat 3 */}
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
                <div className="text-3xl font-black text-[var(--gold)]">
                  निरंतर
                </div>

                <div className="mt-1 text-xs font-bold text-white/50">
                  जनसंपर्क का प्रयास
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="section-pad bg-white">

        <div className="container-page grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

          {/* Left */}
          <div>

            <div className="text-xs font-black uppercase tracking-[.2em] text-[var(--red)]">
              हमारी यात्रा
            </div>

            <h2 className="mt-3 text-4xl font-black leading-tight text-[var(--navy)] sm:text-5xl">
              एक विचार से
              <span className="block text-[var(--red)]">
                निरंतर प्रयास तक।
              </span>
            </h2>

          </div>

          {/* Right */}
          <div className="space-y-5 text-base leading-8 text-slate-600">

            <p>
              आर्थिक आधार पर आरक्षण की विचारधारा को लेकर पिछले लगभग 15 वर्षों
              से सार्वजनिक स्तर पर संवाद और जागरूकता का प्रयास किया जाता रहा
              है। इस यात्रा का उद्देश्य विभिन्न सामाजिक वर्गों और नागरिकों के
              बीच आर्थिक स्थिति, समान अवसर और सामाजिक न्याय जैसे विषयों पर
              चर्चा को आगे बढ़ाना रहा है।
            </p>

            <p>
              इस दौरान विभिन्न सामाजिक संगठनों, राजनीतिक दलों, जनप्रतिनिधियों
              और नागरिकों के साथ संवाद स्थापित करने का प्रयास किया गया।
              विचारधारा रखने वाले विभिन्न प्रयासों को लोकतांत्रिक तरीके से
              समर्थन देने की बात भी सामने रखी गई।
            </p>

            <p>
              यह यात्रा किसी एक व्यक्ति या एक कार्यक्रम तक सीमित नहीं है,
              बल्कि लगातार संवाद, सहभागिता और शांतिपूर्ण लोकतांत्रिक प्रयासों
              के माध्यम से अपने विचार को सामने रखने की कोशिश है।
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="section-pad bg-[var(--cream)]">

        <div className="container-page">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="text-xs font-black uppercase tracking-[.2em] text-[var(--red)]">
              यात्रा के प्रमुख आधार
            </div>

            <h2 className="mt-3 text-4xl font-black text-[var(--navy)]">
              संवाद • समान अवसर • लोकतंत्र
            </h2>

          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--gold)]">
                <Users size={22} />
              </div>

              <h3 className="mt-6 text-xl font-black text-[var(--navy)]">
                जनसंवाद
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                अलग-अलग सामाजिक वर्गों और नागरिकों के साथ संवाद के माध्यम से
                विचारों को सामने रखने का प्रयास।
              </p>

            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--gold)]">
                <Scale size={22} />
              </div>

              <h3 className="mt-6 text-xl font-black text-[var(--navy)]">
                समान अवसर
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                आर्थिक परिस्थितियों और अवसरों से जुड़े प्रश्नों पर सार्वजनिक
                चर्चा को आगे बढ़ाने का प्रयास।
              </p>

            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--gold)]">
                <Flag size={22} />
              </div>

              <h3 className="mt-6 text-xl font-black text-[var(--navy)]">
                शांतिपूर्ण प्रयास
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                लोकतांत्रिक और शांतिपूर्ण तरीके से विचारों को समाज के सामने
                रखने की प्रतिबद्धता।
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          PHOTO JOURNEY
      ========================================================= */}
      <section className="section-pad bg-white">

        <div className="container-page">

          {/* Section heading */}
          <div className="mb-12 max-w-2xl">

            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-[var(--red)]">
              <Images size={15} />
              यात्रा की झलकियां
            </div>

            <h2 className="mt-3 text-4xl font-black text-[var(--navy)] sm:text-5xl">
              कुछ यादगार तस्वीरें
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              आंदोलन की लगभग 15 वर्षों की सार्वजनिक यात्रा से जुड़ी कुछ
              तस्वीरें।
            </p>

          </div>

          {/* Masonry gallery */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">

            {journeyImages.map((src, index) => (
              <div
                key={src}
                className="group mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
              >

                {/* Image */}
                <div className="overflow-hidden bg-slate-100">

                  <img
                    src={src}
                    alt={`आंदोलन की यात्रा की तस्वीर ${index + 1}`}
                    className="block h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                    loading={index < 3 ? "eager" : "lazy"}
                  />

                </div>

                {/* Simple label */}
                <div className="px-5 py-4">

                  <div className="text-xs font-black uppercase tracking-[.15em] text-[var(--red)]">
                    यात्रा की झलक
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          PRESENT DAY / CLOSING
      ========================================================= */}
      <section className="section-pad bg-[var(--navy)] text-white">

        <div className="container-page">

          <div className="mx-auto max-w-4xl text-center">

            {/* Icon */}
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gold)] text-[var(--navy)]">
              <ArrowDown size={25} />
            </div>

            {/* Label */}
            <div className="mt-7 text-xs font-black uppercase tracking-[.2em] text-[var(--gold)]">
              यात्रा अभी जारी है
            </div>

            {/* Heading */}
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              15 वर्षों के बाद भी
              <span className="block text-[var(--gold)]">
                संवाद जारी है।
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
              आने वाले समय में भी समान अवसर, आर्थिक न्याय और सामाजिक संवाद से
              जुड़े विषयों पर शांतिपूर्ण एवं लोकतांत्रिक तरीके से अपनी बात
              रखने का प्रयास जारी रखने का संकल्प।
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-[var(--gold)] px-7 py-3.5 font-black text-[var(--navy)] transition hover:-translate-y-1 hover:shadow-lg"
            >
              संपर्क करें
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
          }
