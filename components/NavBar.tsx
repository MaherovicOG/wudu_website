"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState("FR");

  useEffect(() => {
    const handleScroll = (e: any) => {
      setScrolled(e.detail > 50);
    };
    window.addEventListener("custom-scroll", handleScroll);
    return () => window.removeEventListener("custom-scroll", handleScroll);
  }, []);

  const navLinks = [
    { text: "Accueil", href: "/" },
    { text: "L’évier", href: "/l-evier" },
    { text: "Sur-mesure", href: "/sur-mesure" },
    { text: "A propos", href: "/about" },
    { text: "Journal", href: "/journal" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 px-8 transition-all duration-500 ${
      scrolled ? "py-4 bg-[#EDE6D8]/95 backdrop-blur-xl shadow-md border-b border-[#1E2A38]/10 text-[#1E2A38]" : "py-6 bg-transparent text-[#1E2A38]"
    }`}>
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-3 items-center">
        
        {/* LEFT: Custom Image Logo */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            {/* Negative margins (-my-10) allow the logo to grow huge without pushing the navbar height */}
            <div className="relative w-30 h-30 md:w-32 md:h-32 -my-10 z-[60]">
              <Image src="/logo_2.png" alt="Pure Wudu Logo" fill className="object-contain" priority />
            </div>
          </Link>
        </div>

        {/* CENTER: Centered Links */}
        <div className="hidden md:flex justify-center gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.text} 
              href={link.href}
              className={`text-[9px] uppercase tracking-widest transition-colors ${
                pathname === link.href ? "text-[#A8895E] font-bold" : "text-[#1E2A38]/80 hover:text-[#1E2A38]"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* RIGHT: Languages & Button */}
        <div className="flex justify-end items-center gap-4">
          
          {/* Custom Select Dropdown */}
          <div className="hidden md:flex relative h-full">
            <select 
              value={currentLang}
              onChange={(e) => setCurrentLang(e.target.value)}
              className="px-4 py-3 border border-[#1E2A38] bg-transparent text-[9px] font-mono uppercase tracking-widest text-[#1E2A38] focus:outline-none cursor-pointer appearance-none pr-8 hover:bg-[#1E2A38]/5 transition-colors"
            >
              <option value="FR">FR</option>
              <option value="AR">AR</option>
              <option value="EN">EN</option>
            </select>
            {/* Custom Arrow */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#1E2A38] text-[8px]">
              ▼
            </div>
          </div>
          
          <Link 
            href="/quote"
            className="px-6 py-3 border border-[#1E2A38] text-[9px] font-mono uppercase tracking-widest hover:bg-[#1E2A38] hover:text-[#EDE6D8] transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </nav>
  );
}
