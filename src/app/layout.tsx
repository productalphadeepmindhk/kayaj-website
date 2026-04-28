import type { Metadata } from "next";
import { Noto_Sans_HK } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSansHK = Noto_Sans_HK({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-hk",
});

export const metadata: Metadata = {
  title: "KAYAJ | 澳洲頂級健康保健品",
  description: "KAYAJ - NAD+ 核心保健產品，全港獨家代理。提升健康，從細胞開始。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK" className={`${notoSansHK.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
