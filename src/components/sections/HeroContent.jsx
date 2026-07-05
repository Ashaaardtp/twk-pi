"use client";

import { motion } from "framer-motion";
import { heroItem, heroStagger } from "@/lib/motion";
import { useCanAnimate } from "@/lib/useCanAnimate";

const staticClassName =
  "mx-auto max-w-2xl px-5 pb-12 pt-10 text-center sm:px-8 sm:pb-14 sm:pt-12 lg:max-w-3xl lg:pb-16 lg:pt-14";

function HeroStatic() {
  return (
    <div className={staticClassName}>
      <p className="mb-0 inline-flex items-center gap-2 rounded-full border border-[#947452]/40 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#583b21]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#da8a0a]" />
        Super Partner · GoFood
      </p>
      <h1 className="mb-0 mt-5 text-[2.5rem] font-bold leading-[1.15] tracking-tight text-[#1a100a] sm:mt-6 sm:text-6xl lg:text-7xl">
        Tahu Walik
      </h1>
      <p className="mb-0 mt-3 text-xl font-medium leading-snug text-[#583b21] sm:mt-4 sm:text-2xl lg:text-3xl">
        Pasir Impun
      </p>
      <p className="mx-auto mb-0 mt-5 max-w-md text-sm leading-relaxed text-[#7a5f42] sm:mt-6 sm:max-w-lg sm:text-base">
        Nikmati kelezatan tahu walik kribo yang renyah di luar, lembut di
        dalam — dengan berbagai pilihan saus menggugah selera.
      </p>
      <div className="mt-8 sm:mt-9">
        <a
          href="#menu"
          className="inline-flex items-center justify-center rounded-full bg-[#da8a0a] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(218,138,10,0.55)] transition-all hover:scale-[1.03] hover:bg-[#c77d09] active:scale-[0.97]">
          Lihat Menu
        </a>
      </div>
    </div>
  );
}

export default function HeroContent() {
  const canAnimate = useCanAnimate();

  if (!canAnimate) {
    return <HeroStatic />;
  }

  return (
    <motion.div
      key="hero-animated"
      className={staticClassName}
      variants={heroStagger}
      initial="hidden"
      animate="visible">
      <motion.p
        variants={heroItem}
        className="mb-0 inline-flex items-center gap-2 rounded-full border border-[#947452]/40 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#583b21]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#da8a0a]" />
        Super Partner · GoFood
      </motion.p>

      <motion.h1
        variants={heroItem}
        className="mb-0 mt-5 text-[2.5rem] font-bold leading-[1.15] tracking-tight text-[#1a100a] sm:mt-6 sm:text-6xl lg:text-7xl">
        Tahu Walik
      </motion.h1>

      <motion.p
        variants={heroItem}
        className="mb-0 mt-3 text-xl font-medium leading-snug text-[#583b21] sm:mt-4 sm:text-2xl lg:text-3xl">
        Pasir Impun
      </motion.p>

      <motion.p
        variants={heroItem}
        className="mx-auto mb-0 mt-5 max-w-md text-sm leading-relaxed text-[#7a5f42] sm:mt-6 sm:max-w-lg sm:text-base">
        Nikmati kelezatan tahu walik kribo yang renyah di luar, lembut di
        dalam — dengan berbagai pilihan saus menggugah selera.
      </motion.p>

      <motion.div variants={heroItem} className="mt-8 sm:mt-9">
        <motion.a
          href="#menu"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center rounded-full bg-[#da8a0a] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(218,138,10,0.55)] transition-colors hover:bg-[#c77d09]">
          Lihat Menu
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
