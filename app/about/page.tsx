"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#EDE6D8] text-[#1E2A38] pt-[110px] pb-24 px-8 md:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-20">
        
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 max-w-4xl"
        >
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-[#A8895E] uppercase">
            À propos de Pure Wudu
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-[#1E2A38]">
            Ancré dans la foi.<br/>Conçu pour la vie.
          </h1>
          <p className="font-mono text-sm md:text-base leading-relaxed text-[#1E2A38]/80 max-w-2xl mt-2">
            Pure Wudu allie les valeurs de la tradition à l&apos;élégance du design moderne, pour créer des espaces qui inspirent et un rituel accompli avec aisance.
          </p>
        </motion.div>

        {/* Row Container for Quran Quote & Arch Video */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20 w-full">
          
          {/* Quran Quote */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full xl:w-1/2 relative pl-8 md:pl-12 border-l-4 border-[#A8895E] flex flex-col gap-6"
          >
            <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-[#A8895E] uppercase">
              Du Coran
            </span>
            <p className="text-2xl md:text-4xl font-bold text-right leading-[1.8] text-[#1E2A38] font-sans" style={{ direction: 'rtl' }}>
              يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ
            </p>
            <p className="text-lg md:text-2xl font-black italic tracking-tight leading-relaxed text-[#1E2A38]/90">
              « Ô vous qui croyez ! Lorsque vous vous levez pour la prière, lavez vos visages et vos mains jusqu&apos;aux coudes, passez les mains mouillées sur vos têtes et lavez vos pieds jusqu&apos;aux chevilles. »
            </p>
            <span className="font-mono text-xs md:text-sm tracking-widest text-[#1E2A38]/60">
              Surah Al-Ma&apos;idah · 5:6
            </span>
          </motion.div>

          {/* Media Pattern 1: Arch Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full xl:w-1/2 h-[45vh] md:h-[55vh] xl:h-[65vh] relative flex justify-center xl:justify-end"
          >
            <div className="w-[85%] md:w-[60%] xl:w-[80%] h-full rounded-t-full rounded-b-3xl overflow-hidden relative border-[8px] border-[#1E2A38]/10 shadow-2xl bg-[#EDE6D8]">
              <div className="absolute inset-0 opacity-[0.06] z-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%231E2A38' stroke-width='1' fill='none'%3E%3Cpath d='M40 0L55 25L80 15L65 40L80 65L55 55L40 80L25 55L0 65L15 40L0 15L25 25Z M40 25L25 40L40 55L55 40Z M0 40L25 40 M55 40L80 40 M40 0L40 25 M40 55L40 80'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }}></div>
              <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply">
                <source src="/background.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[#A8895E] mix-blend-overlay opacity-30"></div>
            </div>
          </motion.div>
          
        </div>

        {/* Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-4xl"
        >
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-[#A8895E] uppercase">
            Notre philosophie
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-[#1E2A38]">
            Rendre le rituel moderne.
          </h2>
          <div className="font-mono text-sm md:text-base leading-relaxed text-[#1E2A38]/80 max-w-2xl mt-4 flex flex-col gap-6">
            <p>
              Chaque détail d&apos;une vasque Pure Wudu est pensé pour le confort, la simplicité et le recueillement. Nous croyons que le lieu où l&apos;on se prépare à la prière mérite le même soin que la prière elle-même.
            </p>
            <p>
              Soyez intentionnel dans les pièces que vous choisissez, et les espaces que vous habitez s&apos;améliorent de façons subtiles et profondes.
            </p>
          </div>
        </motion.div>

        {/* Media Pattern 2: Image Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Pattern container 1 */}
          <div className="aspect-[4/5] w-full rounded-[2rem] border border-[#1E2A38]/20 relative overflow-hidden bg-[#EDE6D8] p-3 shadow-xl">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
              <div className="absolute inset-0 opacity-[0.06] z-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%231E2A38' stroke-width='1' fill='none'%3E%3Cpath d='M40 0L55 25L80 15L65 40L80 65L55 55L40 80L25 55L0 65L15 40L0 15L25 25Z M40 25L25 40L40 55L55 40Z M0 40L25 40 M55 40L80 40 M40 0L40 25 M40 55L40 80'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }}></div>
              <img src="/wudu1.jpeg" alt="Pure Wudu Architecture" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
            </div>
          </div>
          {/* Pattern container 2 */}
          <div className="aspect-[4/5] w-full rounded-[2rem] border border-[#1E2A38]/20 relative overflow-hidden bg-[#EDE6D8] p-3 shadow-xl md:mt-24">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
              <div className="absolute inset-0 opacity-[0.06] z-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%231E2A38' stroke-width='1' fill='none'%3E%3Cpath d='M40 0L55 25L80 15L65 40L80 65L55 55L40 80L25 55L0 65L15 40L0 15L25 25Z M40 25L25 40L40 55L55 40Z M0 40L25 40 M55 40L80 40 M40 0L40 25 M40 55L40 80'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }}></div>
              <img src="/detail.png" alt="Pure Wudu Detail" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
            </div>
          </div>
        </motion.div>

        {/* Craftsmanship */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-4xl"
        >
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-[#A8895E] uppercase">
            L&apos;artisanat
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-[#1E2A38]">
            Fabriqué au Maroc.
          </h2>
          <p className="font-mono text-sm md:text-base leading-relaxed text-[#1E2A38]/80 max-w-2xl mt-4">
            Chaque vasque est façonnée à la main dans un matériau premium et finie pour durer. Si vous le souhaitez, nous l&apos;adaptons à vos mesures exactes. Le matériau reste le même partout ; seule la couleur change.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-8 pb-16 flex justify-center"
        >
          <Link 
            href="/l-evier" 
            className="inline-flex items-center justify-center gap-4 text-xs md:text-sm font-mono font-bold uppercase tracking-[0.2em] bg-[#1E2A38] text-white px-8 py-5 md:px-12 md:py-6 rounded-[2rem] hover:bg-[#A8895E] transition-all duration-300 shadow-2xl hover:shadow-[#A8895E]/40 hover:-translate-y-1 group"
          >
            Découvrir l&apos;évier
            <span className="transform group-hover:translate-x-2 transition-transform text-lg">→</span>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
