import Link from "next/link";
import { ArrowLeft, Instagram, Mail, Phone,Facebook, Youtube } from "lucide-react";

export const metadata = {
  title: "संपर्क",
};

export default function ContactPage() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[var(--red)]">
          <ArrowLeft size={17} /> वापस होम पर
        </Link>

        <div className="grid gap-7 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-premium sm:p-10">
            <div className="text-xs font-black uppercase tracking-[.2em] text-[var(--red)]">संपर्क</div>
            <h1 className="mt-3 text-4xl font-black text-[var(--navy)]">हमसे संपर्क करें</h1>
            <p className="mt-4 text-slate-600">
              आंदोलन, कार्यक्रम या सामान्य जानकारी के लिए अपना संदेश भेजें।
            </p>

            {/* Replace ACTION with the endpoint provided by your third-party form service. */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">नाम *</span>
                  <input name="name" required className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-[var(--red)]" placeholder="अपना नाम" />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">मोबाइल नंबर *</span>
                  <input name="phone" required type="tel" className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-[var(--red)]" placeholder="मोबाइल नंबर" />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">ईमेल</span>
                <input name="email" type="email" className="w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-[var(--red)]" placeholder="you@example.com" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">संदेश *</span>
                <textarea name="message" required rows={6} className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3.5 outline-none focus:border-[var(--red)]" placeholder="अपना संदेश लिखें..." />
              </label>

              <button type="submit" className="w-full rounded-2xl bg-[var(--red)] px-6 py-4 font-black text-white transition hover:bg-[var(--red-dark)] sm:w-auto">
                संदेश भेजें
              </button>
            </form>
          </div>

          <aside className="rounded-[2rem] bg-[var(--navy)] p-7 text-white sm:p-10">
            <div className="text-xs font-black uppercase tracking-[.2em] text-[var(--gold)]">संपर्क जानकारी</div>
            <h2 className="mt-3 text-3xl font-black">हमसे जुड़ें</h2>
            <p className="mt-4 leading-7 text-white/60">
              अभियान और आगामी कार्यक्रमों से जुड़ी जानकारी के लिए आधिकारिक
              माध्यमों से संपर्क करें।
            </p>

            <div className="mt-9 space-y-5 text-sm">
              <div className="flex gap-3">
                <Phone className="mt-1 text-[var(--gold)]" size={19} />
                <div><div className="font-bold">फोन</div><div className="mt-1 text-white/60">9717000778</div></div>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 text-[var(--gold)]" size={19} />
                <div><div className="font-bold">ईमेल</div><div className="mt-1 break-all text-white/60">praveensocialleader@gmail.com</div></div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-7">
              <div className="mb-4 text-sm font-bold">सोशल मीडिया</div>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/aarthikaadharparaarakshan2026/" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 hover:bg-white/20"><Instagram size={19} /></a>
                <a href="https://youtube.com/channel/UC1LoLGLIoNB_RAIbHMgcrbg" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 hover:bg-white/20"><Youtube size={19} /></a>
                <a href="https://www.facebook.com/people/%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%BF%E0%A4%95-%E0%A4%86%E0%A4%A7%E0%A4%BE%E0%A4%B0-%E0%A4%86%E0%A4%B0%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%A3-%E0%A4%86%E0%A4%82%E0%A4%A6%E0%A5%8B%E0%A4%B2%E0%A4%A8/61592922819205/?rdid=zkgbtbtonSUJGHkQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EewEfQmt4%2F" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 hover:bg-white/20"><Facebook size={19} /></a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
