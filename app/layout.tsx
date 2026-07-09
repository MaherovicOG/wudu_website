import type { Metadata } from "next";
import { Amiri, Space_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import ScrollNavigator from "@/components/ScrollNavigator";
import "./globals.css";

const amiri = Amiri({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-amiri" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "NO ART | WUDU",
  description: "Ablution Elevated - Brutalist Edition",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${amiri.variable} ${spaceMono.variable}`}>
      <body className="font-sans bg-[#EDE6D8] text-gray-900 h-screen w-screen overflow-hidden flex flex-col selection:bg-[#A8895E] selection:text-white relative">
        <NavBar />
        {/* Corner Brackets */}
        
        <main className="flex-grow relative w-full h-full overflow-hidden">
          <ScrollNavigator>
            {children}
          </ScrollNavigator>
        </main>
      </body>
    </html>
  );
}