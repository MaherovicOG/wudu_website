"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Script from "next/script";

export default function SurMesurePage() {
  const [config, setConfig] = useState<"single" | "double">("single");
  const [width, setWidth] = useState<number | "">(60);
  const [height, setHeight] = useState<number | "">(85);
  const [depth, setDepth] = useState<number | "">(45);
  const [color, setColor] = useState({ id: "travertine", hex: "#D8C7AD", name: "Travertine" });
  
  const router = useRouter();

  const colors = [
    { id: "travertine", hex: "#D8C7AD", name: "Travertine" },
    { id: "sage", hex: "#A5B7B1", name: "Sage Stone" },
    { id: "midnight", hex: "#2A3642", name: "Midnight" },
    { id: "alabaster", hex: "#F0EBE1", name: "Alabaster" },
    { id: "walnut", hex: "#7E5842", name: "Walnut Clay" },
    { id: "deepwater", hex: "#3B5B67", name: "Deep Water" },
  ];

  return (
    <div className="w-full relative min-h-screen bg-[#EDE6D8] text-[#1E2A38] selection:bg-[#A8895E] selection:text-white">
      
      {/* 3D Model Viewer Sticky Background */}
      <div className="fixed top-0 w-full h-screen overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.3.1/model-viewer.min.js" strategy="lazyOnload" />
          <model-viewer
            src="/product.glb"
            alt="Vasque Pure Wudu Model"
            camera-controls
            shadow-intensity="1.5"
            shadow-softness="1"
            exposure="1.2"
            environment-image="neutral"
            style={{ width: '100%', height: '100%', outline: 'none' }}
          ></model-viewer>
        </motion.div>
        
        {/* Subtle Vignette Overlay for Depth */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(237,230,216,0.85)_100%)]"></div>

        {/* Left side Product Title (Floating) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute left-8 md:left-16 bottom-12 md:bottom-20 z-10 pointer-events-none"
        >
          <div className="font-mono text-[10px] text-[#A8895E] tracking-[0.3em] uppercase mb-3">
            Sur-Mesure · Ajustement Exact
          </div>
          <h1 className="text-5xl md:text-[6rem] font-black uppercase tracking-tighter leading-[0.85] text-[#1E2A38] drop-shadow-xl">
            SUR-MESURE
          </h1>
          <div className="mt-8 flex items-center gap-6">
            <div className="h-[1px] w-16 bg-[#1E2A38]/40"></div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#1E2A38]/60 uppercase">
              Vasque Pure Wudu
            </span>
          </div>
        </motion.div>

        {/* Right side Configurator Panel (Floating Card) */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="absolute right-8 top-[120px] bottom-8 w-full md:w-[400px] bg-white/60 backdrop-blur-3xl border border-[#1E2A38]/10 rounded-[2rem] z-20 flex flex-col p-8 shadow-2xl pointer-events-auto"
        >
          <div className="flex-1 flex flex-col justify-between overflow-y-auto pr-2 custom-scrollbar">
            
            <div className="border-b border-[#1E2A38]/10 pb-4">
              <h2 className="text-xl font-black tracking-tight text-[#1E2A38]">Configurez vos dimensions</h2>
              <p className="text-[#1E2A38]/60 text-[9px] mt-2 font-mono tracking-[0.1em] uppercase leading-relaxed">
                Concevez une vasque selon vos propres dimensions. Le design reste le même, la taille s'adapte à votre espace.
              </p>
            </div>

            {/* Configuration */}
            <div className="flex flex-col gap-3 mt-4">
              <label className="text-[8px] font-mono font-bold text-[#A8895E] uppercase tracking-[0.2em]">Configuration</label>
              <div className="grid grid-cols-2 gap-2">
                {['single', 'double'].map((c) => (
                  <button 
                    key={c}
                    onClick={() => setConfig(c as any)} 
                    className={`py-3 text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-500 border rounded-lg ${config === c ? "border-[#A8895E] bg-[#A8895E]/10 text-[#1E2A38] shadow-[0_0_15px_rgba(168,137,94,0.1)]" : "border-[#1E2A38]/10 text-[#1E2A38]/40 hover:border-[#1E2A38]/30 hover:text-[#1E2A38]"}`}
                  >
                    {c === 'single' ? 'Simple' : 'Double'}
                  </button>
                ))}
              </div>
            </div>

            {/* Vos Dimensions Inputs */}
            <div className="flex flex-col gap-3 mt-6">
              <label className="text-[8px] font-mono font-bold text-[#A8895E] uppercase tracking-[0.2em]">Vos Dimensions (cm)</label>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border border-[#1E2A38]/10 rounded-lg px-4 py-2 bg-white/50 focus-within:border-[#A8895E] transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1E2A38]/70">Largeur</span>
                  <input 
                    type="number" 
                    value={width} 
                    onChange={(e) => setWidth(e.target.value ? Number(e.target.value) : "")}
                    className="w-16 bg-transparent text-right font-mono text-sm font-bold text-[#1E2A38] focus:outline-none"
                    placeholder="60"
                  />
                </div>
                <div className="flex items-center justify-between border border-[#1E2A38]/10 rounded-lg px-4 py-2 bg-white/50 focus-within:border-[#A8895E] transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1E2A38]/70">Profondeur</span>
                  <input 
                    type="number" 
                    value={depth} 
                    onChange={(e) => setDepth(e.target.value ? Number(e.target.value) : "")}
                    className="w-16 bg-transparent text-right font-mono text-sm font-bold text-[#1E2A38] focus:outline-none"
                    placeholder="45"
                  />
                </div>
                <div className="flex items-center justify-between border border-[#1E2A38]/10 rounded-lg px-4 py-2 bg-white/50 focus-within:border-[#A8895E] transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1E2A38]/70">Hauteur</span>
                  <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : "")}
                    className="w-16 bg-transparent text-right font-mono text-sm font-bold text-[#1E2A38] focus:outline-none"
                    placeholder="85"
                  />
                </div>
              </div>
            </div>

            {/* Finition Couleur */}
            <div className="flex flex-col gap-3 mt-6">
              <label className="text-[8px] font-mono font-bold text-[#A8895E] uppercase tracking-[0.2em]">Finition couleur</label>
              <div className="grid grid-cols-6 gap-2">
                {colors.map((c) => (
                  <button 
                    key={c.id} 
                    onClick={() => setColor(c)}
                    className="relative group aspect-square rounded-full flex items-center justify-center focus:outline-none"
                    aria-label={c.name}
                  >
                    <span 
                      className={`absolute inset-[-3px] rounded-full border transition-all duration-500 ${color.id === c.id ? "border-[#1E2A38] scale-100" : "border-transparent scale-50 group-hover:border-[#1E2A38]/30 group-hover:scale-90"}`}
                    ></span>
                    <span 
                      className="w-full h-full rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]"
                      style={{ backgroundColor: c.hex }}
                    ></span>
                  </button>
                ))}
              </div>
              <div className="text-right font-mono text-[8px] font-bold text-[#1E2A38]/60 tracking-[0.2em] uppercase mt-1">{color.name}</div>
            </div>

          </div>

          {/* Summary Footer */}
          <div className="mt-4 pt-4 border-t border-[#1E2A38]/10 flex flex-col gap-4">
            <div className="flex flex-col gap-1 font-mono text-[9px] uppercase tracking-widest text-[#1E2A38]/60 mb-2">
              <span className="flex justify-between">Configuration <span className="font-bold text-[#1E2A38]">{config === 'single' ? 'Single basin' : 'Double basin'}</span></span>
              <span className="flex justify-between">Dimensions <span className="font-bold text-[#1E2A38]">{width || 0}L × {depth || 0}P × {height || 0}H cm</span></span>
              <span className="flex justify-between">Couleur <span className="font-bold text-[#1E2A38]">{color.name}</span></span>
            </div>
            <button className="w-full bg-[#1E2A38] text-white py-4 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-[#A8895E] transition-colors shadow-lg">
              Demander un devis
            </button>
            <div className="text-[7px] font-mono text-[#1E2A38]/40 uppercase tracking-[0.1em] text-center">
              Aucun paiement en ligne. Devis personnalisé.
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
