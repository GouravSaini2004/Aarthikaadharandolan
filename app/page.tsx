import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  GraduationCap,
  Scale,
  Users,
  Youtube,
  Instagram,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const issues = [
  {
    icon: GraduationCap,
    title: "शिक्षा",
    text: "शिक्षा के अवसरों और आर्थिक परिस्थितियों से जुड़े प्रश्नों पर संवाद।",
  },
  {
    icon: BriefcaseBusiness,
    title: "रोजगार",
    text: "रोजगार के अवसरों और आर्थिक स्थिति से जुड़े विषयों पर सार्वजनिक चर्चा।",
  },
  {
    icon: Scale,
    title: "सामाजिक न्याय",
    text: "समानता, सामाजिक न्याय और अवसर के बीच संतुलन पर विमर्श।",
  },
  {
    icon: Users,
    title: "समान अवसर",
    text: "अवसरों तक निष्पक्ष पहुंच और नीति विकल्पों पर संवाद को बढ़ावा देना।",
  },
];

const posters = [
  "/images/Poster-1.jpg",
  "/images/Poster-2.jpg",
  "/images/Poster-3.jpg",
  "/images/Poster-5.jpg",
  "/images/Poster-6.jpg",
  "/images/Poster-7.jpg",
  "/images/Poster-8.jpg",
  "/images/Poster-9.jpg",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-grid relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,white_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="container-page relative grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
              आर्थिक आधार पर आरक्षण आंदोलन 2026
            </div>

            <h1 className="text-balance max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              समान अवसर की दिशा में
              <span className="block text-[var(--gold)]">एक सार्वजनिक संवाद।</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
              आर्थिक स्थिति, सामाजिक न्याय और समान अवसर से जुड़े विषयों पर
              शांतिपूर्ण एवं लोकतांत्रिक संवाद को आगे बढ़ाने का प्रयास।
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/praveen-arora"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-3.5 font-black text-[var(--navy)] shadow-xl transition hover:-translate-y-1"
              >
                प्रवीण अरोड़ा के बारे में <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 font-black text-white backdrop-blur transition hover:bg-white/15"
              >
                संपर्क करें
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/60">
              <span>समान अवसर</span>
              <span>•</span>
              <span>सामाजिक न्याय</span>
              <span>•</span>
              <span>आर्थिक न्याय</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-5 rounded-[3rem] bg-[var(--gold)]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/hero.jpg"
                  alt="आर्थिक आधार पर आरक्षण आंदोलन"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold)]">
                    Public Dialogue • 2026
                  </div>
                  <div className="mt-2 text-2xl font-black">
                    शिक्षा • रोजगार • अवसर
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-b border-slate-200 bg-white py-3">
        <div className="marquee">
          <div className="marquee-track text-xs font-black uppercase tracking-[.18em] text-[var(--navy)]">
            <span>समान अवसर</span><span>•</span><span>सामाजिक न्याय</span><span>•</span>
            <span>आर्थिक न्याय</span><span>•</span><span>लोकतांत्रिक संवाद</span><span>•</span>
            <span>समान अवसर</span><span>•</span><span>सामाजिक न्याय</span><span>•</span>
            <span>आर्थिक न्याय</span><span>•</span><span>लोकतांत्रिक संवाद</span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="section-pad soft-grid">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="आंदोलन के बारे में"
              title="एक विषय, जिस पर गंभीर सार्वजनिक संवाद जरूरी है।"
              description="आंदोलन का फोकस आर्थिक आधार, समान अवसर और सामाजिक न्याय से जुड़े विचारों को सार्वजनिक चर्चा के सामने लाना है।"
            />
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-premium sm:p-10">
            <p className="text-base leading-8 text-slate-600">
              आर्थिक आधार पर आरक्षण आंदोलन का उद्देश्य आरक्षण एवं समान अवसर से
              जुड़े विषयों पर व्यापक सार्वजनिक संवाद को आगे बढ़ाना है। यह पहल
              आर्थिक परिस्थितियों, शिक्षा, रोजगार और सामाजिक न्याय से जुड़े
              प्रश्नों पर विचार-विमर्श को प्रोत्साहित करती है।
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              हमारा प्रयास शांतिपूर्ण और लोकतांत्रिक तरीके से नागरिकों,
              युवाओं तथा विशेषज्ञों के विचारों को सामने लाने का है।
            </p>
          </div>
        </div>
      </section>

      {/* ISSUES */}
      <section className="section-pad bg-[var(--cream)]">
        <div className="container-page">
          <SectionHeading
            eyebrow="हमारे प्रमुख विषय"
            title="चार महत्वपूर्ण क्षेत्र"
            description="इन विषयों पर जानकारी, विचार और सार्वजनिक संवाद को बढ़ावा देना इस पहल का हिस्सा है।"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {issues.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="reveal-card rounded-3xl border border-slate-200 bg-white p-7"
                >
                  <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--gold)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-black text-[var(--navy)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADER */}
      <section className="section-pad bg-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[var(--gold)]/30 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 shadow-premium">
              <Image
                src="/images/praveen.jpg"
                alt="प्रवीण अरोड़ा"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 430px"
              />
            </div>
          </div>

          <div>
            <div className="mb-3 text-xs font-black uppercase tracking-[.2em] text-[var(--red)]">
              नेतृत्व
            </div>
            <h2 className="text-4xl font-black tracking-tight text-[var(--navy)] sm:text-5xl">
              प्रवीण अरोड़ा
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              आर्थिक आधार, समान अवसर और सामाजिक न्याय से जुड़े विषयों पर
              सार्वजनिक संवाद को आगे बढ़ाने के उद्देश्य से इस पहल का नेतृत्व।
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["समान अवसर", "सार्वजनिक संवाद", "सामाजिक न्याय"].map((x) => (
                <div key={x} className="rounded-2xl border border-slate-200 p-4 text-sm font-bold text-[var(--navy)]">
                  {x}
                </div>
              ))}
            </div>

            <Link
              href="/praveen-arora"
              className="mt-8 inline-flex items-center gap-2 font-black text-[var(--red)] hover:gap-3"
            >
              पूरा परिचय देखें <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* EVENT */}
      <section className="section-pad bg-[var(--navy)] text-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-[var(--gold)]">
                <CalendarDays size={16} /> आगामी कार्यक्रम
              </div>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                20 अगस्त 2026
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/65">
                आर्थिक आधार पर आरक्षण एवं समान अवसर से जुड़े विषय पर सार्वजनिक
                संवाद।
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <div className="text-sm font-bold text-white/50">कार्यक्रम</div>
              <div className="mt-2 text-xl font-black">जंतर-मंतर, नई दिल्ली</div>
              <div className="mt-2 text-sm text-white/60">10:00 AM – 5:00 PM</div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-black text-[var(--navy)]"
              >
                जानकारी के लिए संपर्क करें <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="मीडिया"
            title="अभियान की झलक"
            description="आंदोलन से जुड़े posters, कार्यक्रम और social media updates।"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {posters.map((src, index) => (
              <div
                key={src}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 shadow-lg"
              >
                <Image
                  src={src}
                  alt={`अभियान पोस्टर ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16">
                  <span className="text-xs font-bold text-white/80">Campaign Media</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.instagram.com/aarthikaadharparaarakshan2026/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 font-bold text-white"
            >
              <Instagram size={18} /> Instagram
            </a>
            <a
              href="https://youtube.com/channel/UC1LoLGLIoNB_RAIbHMgcrbg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-bold text-[var(--navy)]"
            >
              <Youtube size={18} /> YouTube
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--red)] px-7 py-12 text-center text-white sm:px-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--gold)]/20 blur-2xl" />
            <div className="relative">
              <h2 className="text-3xl font-black sm:text-4xl">
                इस पहल के बारे में जानना चाहते हैं?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70">
                जानकारी, कार्यक्रम या सहयोग से जुड़े प्रश्नों के लिए संपर्क करें।
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-black text-[var(--red)]"
              >
                संपर्क करें <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
