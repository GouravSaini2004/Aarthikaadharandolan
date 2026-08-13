import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Building2,
  CreditCard,
  Landmark,
  Smartphone,
} from "lucide-react";

export const metadata = {
  title: "सहयोग करें",
};

export default function SupportPage() {
  return (
    <section className="section-pad min-h-[70vh] bg-[var(--cream)]">
      <div className="container-page">

        {/* BACK */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-[var(--red)]"
        >
          <ArrowLeft size={17} />
          वापस होम पर
        </Link>

        {/* MAIN CARD */}
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-premium">

          {/* HEADER */}
          <div className="relative overflow-hidden bg-[var(--navy)] px-7 py-12 text-center text-white sm:px-12 sm:py-16">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[var(--red)]/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[var(--gold)] text-[var(--navy)] shadow-xl">
                <ShieldCheck size={29} />
              </div>

              <div className="mt-6 text-xs font-black uppercase tracking-[.2em] text-[var(--gold)]">
                सहयोग करें
              </div>

              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                इस पहल में अपना सहयोग दें
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                आर्थिक आधार पर आरक्षण एवं समान अवसर से जुड़े इस सार्वजनिक
                संवाद को आगे बढ़ाने के लिए इच्छुक नागरिक अपनी इच्छा के अनुसार
                सहयोग कर सकते हैं।
              </p>
            </div>
          </div>

          {/* PAYMENT OPTIONS */}
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:p-12">

            {/* PAYTM QR */}
            <div className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">

              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--navy)] text-[var(--gold)]">
                  <Smartphone size={23} />
                </div>

                <div>
                  <div className="text-xs font-black uppercase tracking-[.15em] text-[var(--red)]">
                    विकल्प 01
                  </div>
                  <h2 className="mt-1 text-2xl font-black text-[var(--navy)]">
                    Paytm से सहयोग करें
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                नीचे दिए गए Paytm QR code को अपने मोबाइल से scan करके भुगतान
                किया जा सकता है।
              </p>

              {/* QR */}
              <div className="mx-auto mt-7 flex max-w-[330px] items-center justify-center rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/images/Qrcode.jpg"
                    alt="Paytm QR Code"
                    fill
                    className="object-contain"
                    sizes="330px"
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs font-bold text-slate-500">
                <ShieldCheck size={15} />
                भुगतान से पहले प्राप्तकर्ता का नाम सत्यापित करें
              </div>
            </div>

            {/* BANK TRANSFER */}
            <div className="rounded-[2rem] bg-[var(--navy)] p-6 text-white shadow-xl sm:p-8">

              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--gold)] text-[var(--navy)]">
                  <Landmark size={23} />
                </div>

                <div>
                  <div className="text-xs font-black uppercase tracking-[.15em] text-[var(--gold)]">
                    विकल्प 02
                  </div>
                  <h2 className="mt-1 text-2xl font-black">
                    बैंक ट्रांसफर
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/60">
                यदि आप सीधे बैंक खाते में सहयोग करना चाहते हैं, तो नीचे दिए
                गए विवरण का उपयोग करें।
              </p>

              {/* BANK DETAILS */}
              <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/5">

                {/* ACCOUNT HOLDER */}
                <div className="flex gap-4 border-b border-white/10 p-5">
                  <CreditCard
                    size={19}
                    className="mt-1 shrink-0 text-[var(--gold)]"
                  />

                  <div>
                    <div className="text-xs font-bold text-white/40">
                      खाता धारक
                    </div>
                    <div className="mt-1 text-base font-black">
                      Praveen Arora
                    </div>
                  </div>
                </div>

                {/* BANK */}
                <div className="flex gap-4 border-b border-white/10 p-5">
                  <Building2
                    size={19}
                    className="mt-1 shrink-0 text-[var(--gold)]"
                  />

                  <div>
                    <div className="text-xs font-bold text-white/40">
                      बैंक
                    </div>
                    <div className="mt-1 text-base font-black">
                      Central Bank of India
                    </div>
                  </div>
                </div>

                {/* ACCOUNT NUMBER */}
                <div className="border-b border-white/10 p-5">
                  <div className="text-xs font-bold text-white/40">
                    खाता संख्या
                  </div>
                  <div className="mt-1 break-all text-xl font-black tracking-wider text-[var(--gold)]">
                    3840896462
                  </div>
                </div>

                {/* IFSC */}
                <div className="border-b border-white/10 p-5">
                  <div className="text-xs font-bold text-white/40">
                    IFSC Code
                  </div>
                  <div className="mt-1 text-lg font-black tracking-wider">
                    CBIN0283503
                  </div>
                </div>

                {/* BRANCH */}
                <div className="p-5">
                  <div className="text-xs font-bold text-white/40">
                    शाखा
                  </div>
                  <div className="mt-1 text-base font-bold">
                    Shalimar Bagh, Delhi – 110088
                  </div>
                </div>

              </div>

              <div className="mt-6 rounded-2xl border border-[var(--gold)]/20 bg-[var(--gold)]/10 p-4 text-xs leading-6 text-white/65">
                कृपया बैंक ट्रांसफर करने से पहले खाते के नाम, खाता संख्या और
                IFSC कोड को ध्यानपूर्वक जांच लें।
              </div>
            </div>
          </div>

          {/* CONTACT FOOTER */}
          <div className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-center sm:px-10">

            <p className="text-sm leading-7 text-slate-500">
              भुगतान या सहयोग से संबंधित किसी भी जानकारी के लिए संपर्क करें।
            </p>

            <div className="mt-3 text-lg font-black text-[var(--navy)]">
              संपर्क: 9717000778
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-500 shadow-sm">
              <ShieldCheck size={15} className="text-[var(--red)]" />
              कृपया भुगतान विवरण सत्यापित करके ही भुगतान करें।
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
