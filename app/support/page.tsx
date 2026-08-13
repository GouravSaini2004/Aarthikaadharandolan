import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "सहयोग करें",
};

export default function SupportPage() {
  return (
    <section className="section-pad min-h-[70vh] bg-[var(--cream)]">
      <div className="container-page">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[var(--red)]">
          <ArrowLeft size={17} /> वापस होम पर
        </Link>

        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-7 text-center shadow-premium sm:p-12">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--gold)]">
            <ShieldCheck size={26} />
          </div>

          <div className="mt-5 text-xs font-black uppercase tracking-[.2em] text-[var(--red)]">
            सहयोग करें
          </div>
          <h1 className="mt-3 text-4xl font-black text-[var(--navy)] sm:text-5xl">
            अपनी इच्छा के अनुसार सहयोग करें
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            इस पहल से जुड़े कार्यों में सहयोग देने के इच्छुक लोग नीचे दिए गए
            अधिकृत Paytm QR के माध्यम से भुगतान कर सकते हैं।
          </p>

          <div className="mx-auto mt-9 w-fit rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
            {/* Replace this image with the QR supplied by the client. */}
            <div className="grid h-64 w-64 place-items-center rounded-2xl border-2 border-dashed border-slate-300 bg-white p-6 text-sm font-bold text-slate-400">
              CLIENT PAYTM QR
              <br />
              यहाँ QR code रखें
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-lg text-xs leading-6 text-slate-500">
            भुगतान करने से पहले Paytm पर प्राप्तकर्ता का नाम और विवरण अवश्य
            सत्यापित करें।
          </p>

          <div className="mt-7 text-sm font-bold text-[var(--navy)]">
            संपर्क: 9717000778
          </div>
        </div>
      </div>
    </section>
  );
}
