"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion, Variants } from "framer-motion";

const pages = [
  "/",
  "/l-evier",
  "/sur-mesure",
  "/about",
  "/journal",
  "/quote"
];

export default function ScrollNavigator({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isRouting = useRef(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [transitionData, setTransitionData] = useState({ from: "bottom", to: "top" });

  const pageTransitions = [
    { from: "bottom", to: "top" },   // 0 -> 1
    { from: "left", to: "right" },   // 1 -> 2
    { from: "top", to: "bottom" },   // 2 -> 3
    { from: "right", to: "left" },   // 3 -> 4
    { from: "bottom", to: "top" },   // 4 -> 5
  ];

  useEffect(() => {
    // Scroll listeners are removed. The page now scrolls natively.
    // The AnimatePresence wrapper still handles slide animations when the user clicks navigation links.
  }, [pathname, router]);

  const variants: Variants = {
    initial: {
      opacity: 0,
      filter: "blur(4px)"
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        id="main-scroll-container"
        className="w-full h-full absolute inset-0 overflow-y-auto overflow-x-hidden scroll-smooth"
        onScroll={(e) => window.dispatchEvent(new CustomEvent("custom-scroll", { detail: (e.target as HTMLElement).scrollTop }))}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
