"use client";

import { motion } from "framer-motion";

export default function QuotePage() {
  return (
    <div className="w-full h-screen bg-[#EDE6D8] text-[#1E2A38] relative flex items-center justify-center p-8 md:p-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full bg-white/60 backdrop-blur-xl p-12 border border-[#1E2A38]/10 shadow-[0_0_50px_rgba(168,137,94,0.1)] rounded-2xl"
      >
        <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase mb-6 block text-[#A8895E] text-center">■ SUR DEVIS</span>
        <h1 className="text-4xl font-black uppercase tracking-tighter leading-[0.85] mb-12 text-center">
          INITIER<br/>UN PROJET
        </h1>
        
        <form className="flex flex-col gap-8 font-mono text-xs uppercase tracking-widest" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-[#1E2A38]/50">NOM COMPLET</label>
            <input type="text" className="bg-transparent border-b border-[#1E2A38]/20 pb-2 focus:outline-none focus:border-[#A8895E] transition-colors text-[#1E2A38]" placeholder="VOTRE NOM" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-[#1E2A38]/50">EMAIL</label>
            <input type="email" className="bg-transparent border-b border-[#1E2A38]/20 pb-2 focus:outline-none focus:border-[#A8895E] transition-colors text-[#1E2A38]" placeholder="CONTACT@DOMAINE.COM" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#1E2A38]/50">VISION DU PROJET</label>
            <textarea rows={3} className="bg-transparent border-b border-[#1E2A38]/20 pb-2 focus:outline-none focus:border-[#A8895E] transition-colors text-[#1E2A38] resize-none" placeholder="DÉCRIVEZ VOTRE ESPACE..."></textarea>
          </div>

          <button type="button" className="mt-8 bg-[#1E2A38] text-white py-4 font-bold font-mono tracking-widest hover:bg-[#A8895E] transition-colors w-full text-center">
            SOUMETTRE LA DEMANDE
          </button>
        </form>
      </motion.div>
    </div>
  );
}
