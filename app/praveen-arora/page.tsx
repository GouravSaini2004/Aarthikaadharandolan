import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = { title: "प्रवीण अरोड़ा", description: "प्रवीण अरोड़ा का परिचय और आर्थिक आधार पर आरक्षण आंदोलन से जुड़ी भूमिका।" };

const pillars = [
  ["समान अवसर", "शिक्षा और रोजगार के अवसरों पर व्यापक सार्वजनिक संवाद।"],
  ["सामाजिक समरसता", "सभी वर्गों और समुदायों के बीच संवाद और एकता का प्रयास।"],
  ["आर्थिक न्याय", "आर्थिक परिस्थितियों को ध्यान में रखते हुए नीति विकल्पों पर चर्चा।"],
  ["लोकतांत्रिक संवाद", "शांतिपूर्ण और लोकतांत्रिक माध्यमों से अपनी बात रखना।"],
];

export default function PraveenAroraPage() {
  return <>
    <section className="bg-[var(--navy)] py-14 text-white"><div className="container-page">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-white"><ArrowLeft size={17}/> वापस होम पर</Link>
      <div className="mt-10 max-w-4xl"><div className="text-xs font-black uppercase tracking-[.2em] text-[var(--gold)]">नेतृत्व • परिचय</div><h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">प्रवीण अरोड़ा</h1><p className="mt-5 text-xl leading-8 text-white/65">आर्थिक आधार पर आरक्षण आंदोलन के नेतृत्वकर्ता</p></div>
    </div></section>

    <section className="section-pad bg-white"><div className="container-page grid items-start gap-12 lg:grid-cols-[.72fr_1.28fr]">
      <div className="lg:sticky lg:top-28"><div className="relative mx-auto max-w-[430px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-premium"><div className="relative aspect-[4/5]"><Image src="/images/Praveen.jpg" alt="प्रवीण अरोड़ा" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 430px"/></div></div><div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-slate-200 p-4"><div className="text-xs font-bold text-slate-400">जन्म स्थान</div><div className="mt-1 font-black text-[var(--navy)]">कैराना, उत्तर प्रदेश</div></div>
        <div className="rounded-2xl border border-slate-200 p-4"><div className="text-xs font-bold text-slate-400">निवास</div><div className="mt-1 font-black text-[var(--navy)]">शालीमार बाग, दिल्ली</div></div>
      </div></div>

      <article className="max-w-3xl"><div className="text-xs font-black uppercase tracking-[.2em] text-[var(--red)]">एक परिचय</div>
        <h2 className="mt-3 text-3xl font-black text-[var(--navy)] sm:text-4xl">एक दशक से आर्थिक आधार पर आरक्षण के विचार को आगे बढ़ाने का प्रयास</h2>
        <div className="mt-7 space-y-6 text-[16px] leading-8 text-slate-600"><p>52 वर्षीय प्रवीण अरोड़ा का जन्म कैराना, उत्तर प्रदेश में हुआ। वर्तमान में वे शालीमार बाग, दिल्ली में निवास करते हैं। उन्होंने दिल्ली के हंसराज कॉलेज से शिक्षा प्राप्त की है।</p><p>प्रवीण अरोड़ा पिछले एक दशक से भारत में <strong className="text-[var(--navy)]">आर्थिक आधार पर आरक्षण</strong> की विचारधारा को आगे बढ़ाने वाले आंदोलन की अगुवाई कर रहे हैं। उनका प्रयास इस विषय को व्यापक राष्ट्रीय संवाद का हिस्सा बनाना तथा विभिन्न सामाजिक वर्गों, समुदायों और राजनीतिक विचारधाराओं के बीच शांतिपूर्ण एवं लोकतांत्रिक संवाद स्थापित करना रहा है।</p></div>

        <div className="my-10 h-px bg-slate-200"/><h2 className="text-3xl font-black text-[var(--navy)]">आर्थिक आधार पर आरक्षण के लिए निरंतर प्रयास</h2>
        <div className="mt-5 space-y-5 text-[16px] leading-8 text-slate-600"><p>प्रवीण अरोड़ा लंबे समय से इस विचार को सामने रखते रहे हैं कि आरक्षण एवं अवसर से संबंधित नीतियों पर आर्थिक परिस्थितियों को भी महत्वपूर्ण आधार के रूप में विचार किया जाना चाहिए।</p><p>उनका सार्वजनिक प्रयास इस विषय पर लोगों को जागरूक करने, विभिन्न विचारों को एक मंच पर लाने और आर्थिक आधार पर आरक्षण की मांग को लोकतांत्रिक माध्यमों से आगे बढ़ाने पर केंद्रित रहा है। उनके अनुसार, इस विषय पर व्यापक चर्चा और सर्वसम्मति के माध्यम से आगे बढ़ना आवश्यक है।</p></div>

        <blockquote className="my-10 rounded-3xl border-l-4 border-[var(--gold)] bg-[var(--cream)] p-7 text-xl font-black leading-9 text-[var(--navy)]">“देश के सभी नागरिकों को एक सूत्र में जोड़ते हुए समान अवसर और न्यायपूर्ण व्यवस्था के लिए संवाद आवश्यक है।”</blockquote>

        <h2 className="text-3xl font-black text-[var(--navy)]">सभी वर्गों को एक सूत्र में जोड़ने का प्रयास</h2><div className="mt-5 space-y-5 text-[16px] leading-8 text-slate-600"><p>प्रवीण अरोड़ा का कहना है कि आर्थिक आधार पर आरक्षण का विषय किसी एक जाति, धर्म या वर्ग के विरुद्ध नहीं है।</p><p>वे <strong className="text-[var(--navy)]">SC, ST, OBC और सामान्य वर्ग</strong> सहित समाज के सभी वर्गों को एक साथ जोड़कर समान अवसर और सामाजिक समरसता के विषय पर संवाद स्थापित करने का प्रयास करते रहे हैं।</p><p>उनका उद्देश्य विभिन्न वर्गों के बीच मतभेद बढ़ाना नहीं, बल्कि संवाद के माध्यम से एक ऐसा दृष्टिकोण सामने रखना है जिसमें देश के सभी नागरिकों के हितों पर चर्चा हो सके।</p></div>

        <div className="my-10 h-px bg-slate-200"/><h2 className="text-3xl font-black text-[var(--navy)]">किसी धर्म या राजनीतिक दल के विरोध में नहीं</h2><div className="mt-5 space-y-5 text-[16px] leading-8 text-slate-600"><p>प्रवीण अरोड़ा के अनुसार, उन्होंने राष्ट्र के किसी प्रमुख राजनीतिक दल, धर्म या जाति का विरोध करने की नीति नहीं अपनाई है।</p><p>उनका कहना है कि वे उन सभी संगठनों, राजनीतिक दलों और स्वतंत्र उम्मीदवारों का समर्थन करते रहे हैं जो भारत में आर्थिक आधार पर आरक्षण की विचारधारा को समर्थन देते हैं।</p><p>उनका प्रयास राजनीतिक मतभेदों से ऊपर उठकर आर्थिक आधार पर आरक्षण के विचार को सार्वजनिक चर्चा में बनाए रखना रहा है।</p></div>

        <div className="my-10 rounded-[2rem] bg-[var(--navy)] p-7 text-white sm:p-9"><div className="text-xs font-black uppercase tracking-[.2em] text-[var(--gold)]">लोकसभा चुनावों में भूमिका</div><h2 className="mt-3 text-2xl font-black">2019 और 2024</h2><div className="mt-5 space-y-4 text-[15px] leading-7 text-white/65"><p>2019 और 2024 के लोकसभा चुनावों के संदर्भ में प्रवीण अरोड़ा के अनुसार, उन्होंने उन राजनीतिक दलों एवं निर्दलीय उम्मीदवारों का समर्थन किया जो आर्थिक आधार पर आरक्षण की विचारधारा के पक्षधर थे।</p><p>जिन लोकसभा क्षेत्रों में इस विचारधारा का समर्थन करने वाला कोई उम्मीदवार उपलब्ध नहीं था, वहां उनके द्वारा NOTA के विकल्प को प्रमुखता देने की बात कही गई है।</p></div></div>

        <h2 className="text-3xl font-black text-[var(--navy)]">संघर्ष और चुनौतियां</h2><div className="mt-5 space-y-5 text-[16px] leading-8 text-slate-600"><p>आर्थिक आधार पर आरक्षण की विचारधारा को आगे बढ़ाने के दौरान प्रवीण अरोड़ा के अनुसार, उन्हें <strong className="text-[var(--navy)]">दो बार हमलों का सामना भी करना पड़ा है</strong>।</p><p>इन चुनौतियों के बावजूद वे इस विषय पर अपने सार्वजनिक प्रयासों को जारी रखने की बात कहते हैं। उनके अनुसार, उन्होंने हमेशा अपनी बात को शांतिपूर्ण और लोकतांत्रिक तरीके से जनता के सामने रखने का प्रयास किया है।</p></div>

        <div className="my-10 h-px bg-slate-200"/><h2 className="text-3xl font-black text-[var(--navy)]">शांतिपूर्ण लोकतांत्रिक आंदोलन</h2><div className="mt-5 space-y-5 text-[16px] leading-8 text-slate-600"><p>प्रवीण अरोड़ा के सार्वजनिक प्रयासों का एक प्रमुख पक्ष शांतिपूर्ण तरीके से अपनी विचारधारा को सामने रखना है।</p><p>उनका मानना है कि किसी भी बड़े सामाजिक एवं नीतिगत विषय पर संवाद, विचार-विमर्श और लोकतांत्रिक प्रक्रिया के माध्यम से आगे बढ़ना आवश्यक है।</p></div>
      </article>
    </div></section>

    <section className="section-pad bg-[var(--cream)]"><div className="container-page"><div className="mx-auto max-w-2xl text-center"><div className="text-xs font-black uppercase tracking-[.2em] text-[var(--red)]">हमारा दृष्टिकोण</div><h2 className="mt-3 text-4xl font-black text-[var(--navy)]">चार प्रमुख आधार</h2></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{pillars.map(([title,text])=><div key={title} className="reveal-card rounded-3xl border border-slate-200 bg-white p-7"><CheckCircle2 className="text-[var(--red)]" size={24}/><h3 className="mt-6 text-xl font-black text-[var(--navy)]">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></div>)}</div></div></section>

    <section className="pb-20"><div className="container-page"><div className="relative overflow-hidden rounded-[2rem] bg-[var(--red)] px-7 py-12 text-center text-white sm:px-12"><div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--gold)]/20 blur-2xl"/><div className="relative"><h2 className="text-3xl font-black sm:text-4xl">आंदोलन से जुड़ी जानकारी चाहिए?</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70">कार्यक्रम, अभियान या सहयोग से संबंधित जानकारी के लिए संपर्क करें।</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-black text-[var(--red)]">संपर्क करें <ArrowRight size={18}/></Link></div></div></div></section>
  </>;
}
