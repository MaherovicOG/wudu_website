"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JournalPage() {
  const articles = [
    {
      category: "Le Rituel",
      title: "Comment faire le wudu, étape par étape",
      desc: "Un guide clair et apaisant pour chaque membre de la oumma.",
      media: "/background.mp4",
      isVideo: true
    },
    {
      category: "Design",
      title: "L’importance du design islamique moderne",
      desc: "Tradition et minimalisme se rencontrent à la vasque.",
      media: "/wudu1.jpeg"
    },
    {
      category: "Artisanat",
      title: "Fabriqué au Maroc : nos matériaux",
      desc: "De la pierre brute à une vasque finie et durable.",
      media: "/detail.png"
    },
    {
      category: "Le Rituel",
      title: "Le wudu pour les nouveaux musulmans",
      desc: "Tout ce qu’il faut pour commencer en confiance.",
      media: "/wudu2.jpeg"
    },
    {
      category: "Art de vivre",
      title: "Créer un espace apaisant chez soi",
      desc: "De petits choix qui apportent la sérénité au quotidien.",
      media: "/lifestyle.png"
    },
    {
      category: "Artisanat",
      title: "Entretenir votre évier de wudu",
      desc: "Des gestes simples pour le garder beau des années.",
      media: "/wudu3.jpeg"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#EDE6D8] text-[#1E2A38] pt-[110px] pb-32 px-6 md:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-16">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 text-center max-w-3xl mx-auto"
        >
          <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-[#A8895E] uppercase">
            Journal
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-tight text-[#1E2A38]">
            Pureté & design
          </h1>
          <p className="font-mono text-sm leading-relaxed text-[#1E2A38]/80 mt-2">
            Lectures sur le rituel, l’artisanat et un art de vivre musulman moderne. Écrites pour informer et pour aider d’autres à nous trouver.
          </p>
        </motion.div>

        {/* Featured Article (Article 1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full relative group cursor-pointer"
        >
          <div className="w-full flex flex-col lg:flex-row bg-white rounded-[2rem] border border-[#1E2A38]/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="w-full lg:w-[60%] h-[40vh] lg:h-[60vh] relative overflow-hidden bg-[#1E2A38]">
              {articles[0].isVideo ? (
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out">
                  <source src={articles[0].media} type="video/mp4" />
                </video>
              ) : (
                <img src={articles[0].media} alt={articles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              )}
            </div>
            <div className="w-full lg:w-[40%] p-10 lg:p-16 flex flex-col justify-center gap-6 relative">
              <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-[#A8895E] uppercase border-b border-[#A8895E] self-start pb-2">
                {articles[0].category}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter leading-tight text-[#1E2A38] group-hover:text-[#A8895E] transition-colors duration-300">
                {articles[0].title}
              </h2>
              <p className="font-mono text-sm md:text-base leading-relaxed text-[#1E2A38]/70">
                {articles[0].desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs font-bold font-mono tracking-widest uppercase text-[#1E2A38]">
                Lire l&apos;article <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Grid (Articles 2 & 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {articles.slice(1, 3).map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className="flex flex-col gap-6 group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-lg">
                <img src={article.media} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-[#1E2A38] uppercase">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 px-2">
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight text-[#1E2A38] group-hover:text-[#A8895E] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed text-[#1E2A38]/70">
                  {article.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3-Column Grid (Articles 4, 5, & 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-[#1E2A38]/10">
          {articles.slice(3, 6).map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className="flex flex-col gap-6 group cursor-pointer"
            >
              <div className="w-full aspect-[3/4] rounded-t-full rounded-b-[2rem] overflow-hidden relative shadow-md bg-[#EDE6D8] border border-[#1E2A38]/10">
                <div className="absolute inset-0 opacity-[0.06] z-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%231E2A38' stroke-width='1' fill='none'%3E%3Cpath d='M40 0L55 25L80 15L65 40L80 65L55 55L40 80L25 55L0 65L15 40L0 15L25 25Z M40 25L25 40L40 55L55 40Z M0 40L25 40 M55 40L80 40 M40 0L40 25 M40 55L40 80'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }}></div>
                <img src={article.media} alt={article.title} className="w-full h-full object-cover opacity-90 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A38]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col gap-3 px-4 text-center items-center mt-2">
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#A8895E] uppercase border border-[#A8895E]/30 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <h3 className="text-xl md:text-2xl font-black tracking-tighter leading-tight text-[#1E2A38] group-hover:text-[#A8895E] transition-colors duration-300 mt-2">
                  {article.title}
                </h3>
                <p className="font-mono text-xs md:text-sm leading-relaxed text-[#1E2A38]/70">
                  {article.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
