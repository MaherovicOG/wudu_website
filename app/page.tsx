"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ModelViewer from "@/components/ModelViewer";

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full relative bg-[#EDE6D8] text-[#1E2A38] selection:bg-[#A8895E] selection:text-white pb-16 font-sans">
      
      {/* 
        HERO SECTION 
        Bulletproof 2-Column Split Layout
      */}
      <section className="relative w-full min-h-[90vh] max-w-[1600px] mx-auto px-8 pt-32 pb-16 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-8 bg-[#EDE6D8]">
        
        {/* Intricate Geometric Pattern with Fade Out */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg stroke=\'%231E2A38\' stroke-width=\'1\' fill=\'none\'%3E%3Cpath d=\'M40 0L55 25L80 15L65 40L80 65L55 55L40 80L25 55L0 65L15 40L0 15L25 25Z M40 25L25 40L40 55L55 40Z M0 40L25 40 M55 40L80 40 M40 0L40 25 M40 55L40 80\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '120px 120px' }}></div>
          {/* Gradient to fade out at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#EDE6D8]"></div>
        </div>

        {/* LEFT COLUMN: Typography & Video */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-12 relative z-10 pt-12 md:pt-0">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-[#A8895E]">
              Pure Intention · Pure Préparation
            </span>
            <h1 className="flex flex-col gap-2 md:gap-4 text-6xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-wider leading-none text-[#1E2A38]">
              <span>L'AB<span className="text-[#A8895E]">LU</span>TION.</span>
              <span className="text-[#A8895E]">SUBLIMÉE.</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:items-end">
            <div className="w-full md:w-[300px] aspect-[4/3] rounded-[30px] overflow-hidden shadow-2xl border border-[#1E2A38]/10 relative">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply bg-[#1E2A38]/10">
                <source src="/background.mp4" type="video/mp4" />
              </video>
            </div>
            
            <div className="flex flex-col gap-6 max-w-[250px] pb-2">
              <p className="font-mono text-xs uppercase tracking-widest text-[#1E2A38]/80 leading-relaxed">
                Un évier de wudu sur-mesure qui apporte du calme à votre préparation quotidienne. Un design, dans votre taille et votre couleur.
              </p>
              <Link href="/l-evier" className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#A8895E] border-b border-[#A8895E] pb-1 hover:text-[#1E2A38] transition-colors w-fit">
                Découvrir l'évier →
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Cinematic Video Gallery */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative z-20 flex items-center justify-center mt-12 md:mt-0">
          
          {/* Main Large 3D Model (Arch shape) */}
          <div className="w-[75%] h-[95%] rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl relative border border-[#1E2A38]/10 bg-[#EDE6D8] flex items-center justify-center">
            <ModelViewer
              src="/product.glb"
              alt="Vasque Pure Wudu"
              auto-rotate="true"
              auto-rotate-delay="0"
              rotation-per-second="3deg"
              camera-controls="true"
              shadow-intensity="1.5"
              shadow-softness="1"
              environment-image="neutral"
              style={{ width: '100%', height: '100%', outline: 'none' }}
            />
          </div>
          
          {/* Smaller Overlapping Video */}
          <div className="absolute bottom-16 -left-8 md:-left-16 w-[180px] md:w-[220px] aspect-square rounded-[30px] overflow-hidden shadow-2xl border-[6px] border-[#EDE6D8] z-30">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/background.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Floating Product Info */}
          <div className="absolute top-24 -right-4 md:-right-8 bg-white p-4 md:p-6 shadow-xl z-30 border border-[#1E2A38]/5 max-w-[150px]">
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#1E2A38] block mb-2">Design Pur</span>
            <p className="font-mono text-[7px] uppercase tracking-widest text-[#1E2A38]/60 leading-relaxed">
              La vasque est pensée autour des gestes de l’ablution.
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="w-full py-4 border-y border-[#1E2A38]/20 bg-[#EDE6D8] overflow-hidden mt-8 mb-16">
        <div className="whitespace-nowrap flex font-black text-xl tracking-tighter uppercase text-[#1E2A38]">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            className="flex gap-8"
          >
            {[...Array(15)].map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                PURE WUDU <span className="text-sm text-[#A8895E]">✦</span> L'ÉVIER <span className="text-sm text-[#A8895E]">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LE RITUEL REINVENTE */}
      <section className="w-full max-w-[1600px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4 h-[400px] md:h-[600px] relative bg-[#1E2A38]/10 rounded-t-[100px] overflow-hidden shadow-xl">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 md:pl-16">
          <div className="hidden md:flex flex-col gap-4 items-center pt-16">
            <div className="w-32 h-32 relative bg-[#1E2A38]/10 rounded-full overflow-hidden shadow-lg">
               <Image src="/detail.png" alt="arch" fill className="object-cover" />
            </div>
            <div className="w-48 h-48 relative bg-[#1E2A38]/10 mt-8 shadow-lg">
               <Image src="/architecture.png" alt="arch" fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 md:pt-16">
            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#A8895E]">Notre histoire</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-[#1E2A38]">
              Le rituel, <br/> réinventé.
            </h2>
            <p className="text-sm font-mono text-[#1E2A38] font-bold uppercase tracking-widest leading-relaxed mt-4">
              La plupart d’entre nous font le wudu courbés sur un évier ordinaire.
            </p>
            <p className="text-xs font-mono text-[#1E2A38]/60 uppercase tracking-widest leading-relaxed">
              Pure Wudu redonne dignité et aisance au rituel. La vasque est pensée autour des gestes de l’ablution, et assez belle pour sublimer chaque espace.
            </p>
            <Link href="/about" className="mt-4 font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#A8895E] hover:text-[#1E2A38] transition-colors flex items-center gap-2">
              Notre histoire <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* NOTRE PHILOSOPHIE */}
      <section className="w-full max-w-[1600px] mx-auto px-8 py-32 border-t border-[#1E2A38]/10 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 flex flex-col gap-6">
            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#1E2A38]/50">Notre philosophie</span>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              Fait avec <br/> Intention
            </h3>
            <div className="flex gap-4 mt-8">
              <div className="w-16 h-24 bg-[#1E2A38]/10 relative rounded-t-full overflow-hidden"><Image src="/detail.png" alt="detail" fill className="object-cover grayscale" /></div>
              <div className="w-16 h-16 bg-[#1E2A38]/10 relative overflow-hidden"><Image src="/architecture.png" alt="arch" fill className="object-cover grayscale" /></div>
            </div>
            <p className="text-[9px] font-mono text-[#1E2A38]/50 uppercase tracking-widest leading-relaxed mt-8 max-w-xs">
              Ancré dans la foi, fabriqué au Maroc.
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 mt-8 md:mt-0">
             
             <div className="flex flex-col gap-4 border-t border-[#1E2A38]/10 pt-4">
                <span className="text-sm font-mono font-bold uppercase tracking-widest text-[#A8895E]">01</span>
                <h4 className="text-2xl font-black uppercase tracking-tighter text-[#1E2A38]">Design Pur</h4>
                <p className="text-xs font-mono text-[#1E2A38]/60 uppercase tracking-widest leading-relaxed">
                  Une forme intentionnelle, rien de superflu.
                </p>
             </div>
             
             <div className="flex flex-col gap-4 border-t border-[#1E2A38]/10 pt-4">
                <span className="text-sm font-mono font-bold uppercase tracking-widest text-[#A8895E]">02</span>
                <h4 className="text-2xl font-black uppercase tracking-tighter text-[#1E2A38]">Matériau Premium</h4>
                <p className="text-xs font-mono text-[#1E2A38]/60 uppercase tracking-widest leading-relaxed">
                  Façonné pour la beauté et l’hygiène.
                </p>
             </div>

             <div className="flex flex-col gap-4 border-t border-[#1E2A38]/10 pt-4">
                <span className="text-sm font-mono font-bold uppercase tracking-widest text-[#A8895E]">03</span>
                <h4 className="text-2xl font-black uppercase tracking-tighter text-[#1E2A38]">Esthétique Intemporelle</h4>
                <p className="text-[10px] font-mono text-[#1E2A38]/60 uppercase tracking-widest leading-relaxed">
                  Minimal, moderne, fait pour durer.
                </p>
             </div>

             <div className="flex flex-col gap-4 border-t border-[#1E2A38]/10 pt-4">
                <span className="text-[12px] font-mono font-bold uppercase tracking-widest text-[#A8895E]">04</span>
                <h4 className="text-2xl font-black uppercase tracking-tighter text-[#1E2A38]">Fabrication Locale</h4>
                <p className="text-[10px] font-mono text-[#1E2A38]/60 uppercase tracking-widest leading-relaxed">
                  Ancré dans la foi, façonné avec fierté au Maroc.
                </p>
             </div>

          </div>
        </div>
      </section>

      {/* L'EVIER (Dark Block) */}
      <section className="w-full max-w-[1600px] mx-auto px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#1E2A38] text-[#EDE6D8] min-h-[400px] relative overflow-hidden rounded-[40px] shadow-2xl">
          <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg stroke=\'%23EDE6D8\' stroke-width=\'1\' fill=\'none\'%3E%3Cpath d=\'M40 0L55 25L80 15L65 40L80 65L55 55L40 80L25 55L0 65L15 40L0 15L25 25Z M40 25L25 40L40 55L55 40Z M0 40L25 40 M55 40L80 40 M40 0L40 25 M40 55L40 80\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '120px 120px' }}></div>
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1E2A38]"></div>
          </div>
          
          <div className="p-12 md:p-24 flex flex-col justify-center relative z-10 border-b md:border-b-0 md:border-r border-[#EDE6D8]/20">
             <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-2">L'Évier</h3>
             <p className="text-[12px] font-mono text-[#A8895E] uppercase tracking-widest mb-12">La simplicité rencontre la fonction.</p>
             <p className="text-[11px] font-mono uppercase tracking-widest text-[#EDE6D8]/80 leading-relaxed mb-12">
               Choisissez un modèle prêt dans la taille et la couleur que vous aimez, ou créez le vôtre entièrement. Même matériau premium, dans une gamme de finitions.
             </p>
             <div className="flex gap-8">
               <Link href="/l-evier" className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-[#A8895E] transition-colors border-b border-white hover:border-[#A8895E] pb-1">
                 Configurer un évier →
               </Link>
               <Link href="/sur-mesure" className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#A8895E] hover:text-white transition-colors pb-1">
                 Sur-mesure →
               </Link>
             </div>
          </div>
          <div className="relative h-[300px] md:h-full overflow-hidden bg-[#1E2A38]/50">
             <Image src="/architecture.png" alt="evier" fill className="object-cover mix-blend-screen opacity-70" />
          </div>
        </div>
      </section>

      {/* JOURNAL GRID */}
      <section className="w-full py-32 px-8 max-w-[1600px] mx-auto flex flex-col items-center">
        <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-[#A8895E]">
          Journal
        </span>
        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-center">
          Pureté & Design
        </h3>
        <p className="text-[10px] font-mono text-[#1E2A38]/60 uppercase tracking-widest max-w-md text-center leading-relaxed">
          De courtes lectures sur le rituel, l’artisanat et un art de vivre musulman moderne.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-24">
           {/* Article 1 */}
           <div className="flex flex-col gap-6 group cursor-pointer">
              <div className="w-full aspect-[4/5] bg-[#1E2A38]/10 overflow-hidden relative rounded-t-full shadow-lg">
                 <Image src="/detail.png" alt="rituel" fill className="object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#A8895E]">Le Rituel</span>
                <h4 className="font-black uppercase tracking-tighter text-xl">Comment faire le wudu, étape par étape</h4>
              </div>
           </div>
           
           {/* Article 2 */}
           <div className="flex flex-col gap-6 group cursor-pointer pt-12">
              <div className="w-full aspect-square bg-[#1E2A38]/10 overflow-hidden relative shadow-lg">
                 <Image src="/lifestyle.png" alt="design" fill className="object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#A8895E]">Design</span>
                <h4 className="font-black uppercase tracking-tighter text-xl">L’importance du design islamique moderne</h4>
              </div>
           </div>

           {/* Article 3 */}
           <div className="flex flex-col gap-6 group cursor-pointer">
              <div className="w-full aspect-[4/5] bg-[#1E2A38]/10 overflow-hidden relative rounded-b-full shadow-lg">
                 <Image src="/architecture.png" alt="artisanat" fill className="object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#A8895E]">Artisanat</span>
                <h4 className="font-black uppercase tracking-tighter text-xl">Fabriqué au Maroc : nos matériaux</h4>
              </div>
           </div>
        </div>
      </section>

      {/* MASSIVE FOOTER */}
      <footer className="w-full max-w-[1600px] mx-auto px-8 pt-32 pb-8 flex flex-col border-t border-[#1E2A38]/10 mt-16">
        
        <div className="relative w-full overflow-hidden flex justify-center items-center py-8">
          <h2 className="text-[16vw] font-black tracking-tighter leading-none text-[#1E2A38] text-center w-full">
            PURE WUDU
          </h2>
          {/* Image overlapping the huge text */}
          <div className="absolute right-[15%] top-1/4 w-[25%] h-[150%] rotate-[15deg] pointer-events-none opacity-90 shadow-2xl mix-blend-multiply rounded-t-full overflow-hidden">
            <Image src="/lifestyle.png" alt="overlap" fill className="object-cover" />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-16 mt-16 pt-16 border-t border-[#1E2A38]/20">
          <div className="col-span-1 md:col-span-6 flex flex-col gap-4">
            <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#1E2A38] max-w-sm">
              Éviers de wudu premium, façonnés avec intention et précision.
            </h4>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#1E2A38]/60 mt-2">
              Conçus pour la pureté. Faits pour durer.
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-6 grid grid-cols-2 md:grid-cols-3 text-[10px] font-mono uppercase tracking-widest text-[#1E2A38]/80 gap-y-12">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[#A8895E]">Explorer</span>
              <Link href="/l-evier" className="hover:text-[#1E2A38] transition-colors">L’Évier</Link>
              <Link href="/sur-mesure" className="hover:text-[#1E2A38] transition-colors">Sur-Mesure</Link>
              <Link href="/about" className="hover:text-[#1E2A38] transition-colors">À Propos</Link>
              <Link href="/journal" className="hover:text-[#1E2A38] transition-colors">Journal</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="font-bold text-[#A8895E]">Contact</span>
              <a href="#" className="hover:text-[#1E2A38] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#1E2A38] transition-colors">TikTok</a>
              <a href="#" className="hover:text-[#1E2A38] transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-32 text-[9px] font-mono text-[#1E2A38] font-bold uppercase tracking-widest gap-4">
          <span>© 2026 Pure Wudu</span>
          <span className="text-[#A8895E] text-lg">✦</span>
          <span>Fabriqué au Maroc</span>
        </div>
      </footer>
    </div>
  );
}