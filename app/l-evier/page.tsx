"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

export default function LevierPage() {
  const [config, setConfig] = useState<"single" | "double">("single");
  const [width, setWidth] = useState(60);
  const [color, setColor] = useState({ id: "travertine", hex: "#D8C7AD", name: "Travertine" });
  
  const [showQR, setShowQR] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  
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
    <div className="w-full min-h-screen bg-[#EDE6D8] pt-[100px] flex flex-col md:flex-row text-[#1E2A38] selection:bg-[#A8895E] selection:text-white">
      
      {/* LEFT: 3D Model Area (Sticky) */}
      <div className="w-full md:w-[65%] h-[50vh] md:h-[calc(100vh-100px)] sticky top-[100px] bg-[#EDE6D8] p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
        
        {/* Bordered Container with Pattern */}
        <div className="w-full h-full border border-[#1E2A38]/20 rounded-[2rem] relative overflow-hidden flex items-center justify-center bg-[#EDE6D8] shadow-inner">
          
          {/* Islamic Pattern Background */}
          <div className="absolute inset-0 opacity-[0.06] z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg stroke='%231E2A38' stroke-width='1' fill='none'%3E%3Cpath d='M40 0L55 25L80 15L65 40L80 65L55 55L40 80L25 55L0 65L15 40L0 15L25 25Z M40 25L25 40L40 55L55 40Z M0 40L25 40 M55 40L80 40 M40 0L40 25 M40 55L40 80'/%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '120px 120px' }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#EDE6D8] z-0"></div>

          <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.3.1/model-viewer.min.js" strategy="lazyOnload" />
          <model-viewer
            src="/product.glb"
            alt="Vasque Pure Wudu Model"
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="2deg"
            camera-controls
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            shadow-intensity="1.5"
            shadow-softness="1"
            exposure="1.2"
            environment-image="neutral"
            className="z-10"
            style={{ width: '100%', height: '100%', outline: 'none' }}
          ></model-viewer>

          {/* Title Overlay */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 pointer-events-none z-20">
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none text-[#1E2A38]">
              L&apos;évier
            </h1>
            <div className="font-mono text-[10px] md:text-xs text-[#A8895E] font-bold tracking-widest mt-2">
              Vasque Pure Wudu
            </div>
          </div>

          {/* AR Button */}
          <button
            onClick={() => setShowQR(true)}
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 bg-white/80 backdrop-blur-md border border-[#1E2A38]/10 text-[#1E2A38] p-3 md:p-4 rounded-full hover:bg-white hover:shadow-xl transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 8V4a2 2 0 0 1 2-2h4"></path>
              <path d="M4 16v4a2 2 0 0 0 2 2h4"></path>
              <path d="M16 4h4a2 2 0 0 1 2 2v4"></path>
              <path d="M16 20h4a2 2 0 0 0 2-2v-4"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest w-0 overflow-hidden group-hover:w-auto group-hover:pr-2 transition-all whitespace-nowrap">
              VOIR EN AR
            </span>
          </button>

          {/* QR Code Overlay */}
          {showQR && (
            <div className="absolute inset-0 z-50 bg-[#EDE6D8]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 animation-fade-in">
              <button 
                onClick={() => setShowQR(false)}
                className="absolute top-6 right-6 text-[#1E2A38]/50 hover:text-[#1E2A38] transition-colors p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-[#1E2A38]/10 flex flex-col items-center max-w-[320px]">
                <h3 className="text-sm md:text-base font-black text-[#1E2A38] mb-6 text-center">
                  Visualiser dans votre espace
                </h3>
                
                <div className="bg-white p-2 rounded-2xl border border-[#1E2A38]/10 shadow-sm">
                  {currentUrl && (
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`} 
                      alt="QR Code AR" 
                      className="w-[180px] h-[180px] md:w-[200px] md:h-[200px]"
                    />
                  )}
                </div>
                
                <p className="text-[10px] md:text-[11px] font-mono text-[#1E2A38]/60 mt-6 text-center leading-relaxed">
                  Ouvrez l&apos;appareil photo de votre téléphone et scannez ce code pour projeter la vasque chez vous en Réalité Augmentée.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Configurator Panel */}
      <div className="w-full md:w-[35%] bg-transparent h-[50vh] md:h-[calc(100vh-100px)] p-6 md:p-8 flex flex-col">
        
        {/* Bordered Container */}
        <div className="w-full h-full border border-[#1E2A38]/20 rounded-[2rem] relative flex flex-col overflow-hidden bg-white shadow-inner">
          <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 lg:gap-8 overflow-y-auto custom-scrollbar">
          
          {/* Header */}
          <div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-[#1E2A38] mb-2">
              Configurez
            </h2>
            <p className="text-[11px] font-mono text-[#1E2A38]/80 leading-relaxed">
              Un design, pensé pour devenir le vôtre. Sélectionnez la configuration, la taille et une couleur.
            </p>
          </div>

          {/* Configuration Options */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="text-[11px] font-mono font-bold text-[#A8895E]">1. Configuration</label>
              <span className="text-[10px] font-mono text-[#1E2A38]/60">{config === 'single' ? 'Simple' : 'Double'}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['single', 'double'].map((c) => (
                <button 
                  key={c}
                  onClick={() => setConfig(c as any)} 
                  className={`py-3 text-sm font-mono font-bold transition-all duration-300 border rounded-lg ${
                    config === c 
                    ? "border-[#1E2A38] bg-[#1E2A38] text-white" 
                    : "border-[#1E2A38]/20 text-[#1E2A38]/60 hover:border-[#1E2A38] hover:text-[#1E2A38]"
                  }`}
                >
                  {c === 'single' ? '• Simple' : '• Double'}
                </button>
              ))}
            </div>
          </div>

          {/* Taille Options */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="text-[11px] font-mono font-bold text-[#A8895E]">2. Taille</label>
              <span className="text-[10px] font-mono text-[#1E2A38]/60">{width} cm</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: 60, label: "Compact", sub: "60×45cm" },
                { val: 80, label: "Standard", sub: "80×45cm" },
                { val: 120, label: "Grand", sub: "120×50cm" },
              ].map((t) => (
                <button 
                  key={t.val}
                  onClick={() => setWidth(t.val)} 
                  className={`flex flex-col items-center justify-center p-3 transition-all duration-300 border rounded-lg ${
                    width === t.val 
                    ? "border-[#1E2A38] bg-[#1E2A38] text-white" 
                    : "border-[#1E2A38]/20 text-[#1E2A38]/60 hover:border-[#1E2A38] hover:text-[#1E2A38]"
                  }`}
                >
                  <span className="text-[12px] font-mono font-bold mb-1">• {t.label}</span>
                  <span className={`font-mono text-[9px] ${width === t.val ? "text-white/60" : "text-[#1E2A38]/50"}`}>{t.sub}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Couleur Options */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="text-[11px] font-mono font-bold text-[#A8895E]">3. Finition</label>
              <span className="text-[10px] font-mono text-[#1E2A38]/60">{color.name}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {colors.map((c) => (
                <button 
                  key={c.id} 
                  onClick={() => setColor(c)}
                  className="relative group w-7 h-7 md:w-8 md:h-8 rounded-sm flex items-center justify-center focus:outline-none"
                  aria-label={c.name}
                >
                  <span 
                    className={`absolute inset-[-4px] rounded-md border transition-all duration-300 ${
                      color.id === c.id ? "border-[#1E2A38] scale-100" : "border-transparent scale-50 group-hover:border-[#1E2A38]/30 group-hover:scale-100"
                    }`}
                  ></span>
                  <span 
                    className="w-full h-full rounded-sm shadow-inner border border-[#1E2A38]/20"
                    style={{ backgroundColor: c.hex }}
                  ></span>
                </button>
              ))}
            </div>
          </div>
          </div>

          {/* Footer Action Area */}
          <div className="flex flex-col gap-4 mt-auto pt-4 px-6 md:px-8 pb-6 md:pb-8">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-[11px] font-mono text-[#1E2A38]/80">
              <span>Récapitulatif</span>
              <span>Devis gratuit</span>
            </div>
            <div className="flex justify-between items-center font-black text-[#1E2A38]">
              <span className="text-xl">{config === 'single' ? 'Simple' : 'Double'} - {width}cm</span>
              <span className="text-lg text-[#A8895E]">{color.name}</span>
            </div>
          </div>
          
          <div className="flex flex-col xl:flex-row gap-3">
            <button 
              onClick={() => router.push('https://wa.me/0623329476')}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white text-xs font-mono font-bold hover:bg-[#128C7E] transition-colors rounded-[1.5rem] shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Devis WhatsApp
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="flex-1 py-4 bg-transparent border border-[#1E2A38] text-[#1E2A38] text-xs font-mono font-bold hover:bg-[#1E2A38] hover:text-white transition-colors rounded-[1.5rem]"
            >
              Formulaire
            </button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}
