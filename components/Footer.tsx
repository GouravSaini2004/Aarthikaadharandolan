import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Facebook ,Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_.8fr_.9fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden">
  <Image
    src="/images/logo.png"
    alt="आर्थिक आधार पर आरक्षण आंदोलन"
    fill
    className="object-contain"
    sizes="44px"
  />
</span>
            <div>
              <div className="font-black">आर्थिक आधार पर आरक्षण</div>
              <div className="text-xs text-white/55">आंदोलन 2026</div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65">
            समान अवसर, सामाजिक न्याय और आर्थिक न्याय से जुड़े विषयों पर
            शांतिपूर्ण एवं लोकतांत्रिक सार्वजनिक संवाद को बढ़ावा देने का प्रयास।
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-extrabold">त्वरित लिंक</h3>
          <div className="space-y-3 text-sm text-white/65">
            <Link className="block hover:text-white" href="/">होम</Link>
            <Link className="block hover:text-white" href="/praveen-arora">प्रवीण अरोड़ा</Link>
            <Link className="block hover:text-white" href="/support">सहयोग करें</Link>
            <Link className="block hover:text-white" href="/contact">संपर्क</Link>
            <Link className="block hover:text-white" href="/gallery">आंदोलन की यात्रा</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-extrabold">संपर्क</h3>
          <div className="space-y-3 text-sm text-white/65">
            <div className="flex gap-2"><Phone size={17} /> 9717000778</div>
            <div className="flex gap-2 break-all"><Mail size={17} /> praveensocialleader@gmail.com</div>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/aarthikaadharparaarakshan2026/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 hover:bg-white/20"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/channel/UC1LoLGLIoNB_RAIbHMgcrbg"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 hover:bg-white/20"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1EewEfQmt4/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 hover:bg-white/20"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 आर्थिक आधार पर आरक्षण आंदोलन</span>
          <span>सभी अधिकार सुरक्षित</span>
        </div>
      </div>
    </footer>
  );
}
