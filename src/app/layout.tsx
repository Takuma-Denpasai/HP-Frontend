import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Slideshow } from "@/components/Slideshow"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "%s香川高専 電波祭",
  description: "香川高等専門学校 詫間キャンパス 電波祭の公式Webページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="tracking-widest">
      <body className={inter.className}>
        <Header />
        <Slideshow />
        {children}
        <Footer />
      </body>
    </html>
  );
}
