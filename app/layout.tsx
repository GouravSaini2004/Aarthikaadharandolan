import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "आर्थिक आधार पर आरक्षण आंदोलन 2026",
    template: "%s | आर्थिक आधार पर आरक्षण आंदोलन 2026",
  },
  description:
    "समान अवसर, सामाजिक न्याय और आर्थिक न्याय से जुड़े सार्वजनिक संवाद का मंच।",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
