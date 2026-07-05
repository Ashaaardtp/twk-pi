"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import {
  CLOSE_HOUR,
  hoursDisplay,
  OPEN_HOUR,
  operatingHours,
} from "@/data/hours";
import { getBandungDateTime } from "@/lib/bandungTime";
import { useCanAnimate } from "@/lib/useCanAnimate";

export default function ScheduleSection() {
  const [now, setNow] = useState(null);
  const canAnimate = useCanAnimate();

  useEffect(() => {
    setNow(getBandungDateTime());

    const timer = setInterval(() => {
      setNow(getBandungDateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isOpen = now?.isOpen ?? false;

  const clockCard = (
    <>
      <div className="bg-[#1a100a] px-6 py-6 text-center">
        <p className="mb-0 text-xs font-medium uppercase tracking-[0.18em] text-[#c7a57d]">
          Bandung · WIB
        </p>
        <p
          className="mb-0 mt-3 text-sm leading-snug text-[#f4e7d2]/90 sm:text-base"
          suppressHydrationWarning>
          {now?.dateLabel ?? "—"}
        </p>
        <p
          className="mb-0 mt-2 font-mono text-4xl font-bold tabular-nums leading-none tracking-tight text-white sm:text-5xl"
          suppressHydrationWarning>
          {now?.timeLabel ?? "--:--:--"}
        </p>
      </div>

      <div className="border-t border-[#947452]/10 bg-[#faf6ef] px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#947452]/20 bg-white px-3.5 py-1.5 text-sm font-semibold text-[#1a100a]">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${isOpen ? "bg-emerald-500" : "bg-stone-400"}`}
              aria-hidden="true"
            />
            {isOpen ? "Sedang buka" : "Sedang tutup"}
          </span>
          <span className="shrink-0 text-sm text-[#7a5f42]">
            {isOpen ? `Tutup ${CLOSE_HOUR}.00` : `Buka ${OPEN_HOUR}.00`}
          </span>
        </div>
      </div>
    </>
  );

  return (
    <section
      id="jadwal"
      className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
      <FadeIn className="text-center">
        <h2 className="mb-0 text-2xl font-bold tracking-tight text-[#1a100a] sm:text-3xl lg:text-4xl">
          Jam Operasional
        </h2>
        <p className="mx-auto mb-0 mt-3 max-w-sm text-sm text-[#7a5f42] sm:text-base">
          Buka setiap hari pukul {hoursDisplay} WIB
        </p>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#da8a0a]" />
      </FadeIn>

      <div className="mt-8 sm:mt-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
        <FadeIn delay={0.08}>
          <div className="overflow-hidden rounded-2xl border border-[#947452]/25 bg-white transition-transform duration-200 hover:-translate-y-0.5 lg:self-start">
            {clockCard}
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <ul className="mt-6 flex flex-col overflow-hidden rounded-2xl border border-[#947452]/25 bg-white lg:mt-0">
            {operatingHours.map((entry, index) => {
              const isToday = now?.weekday === entry.weekday;
              const rowClass = `grid grid-cols-[1fr_auto] items-center gap-x-6 border-b border-[#947452]/10 px-5 py-3.5 last:border-b-0 sm:px-6 sm:py-4 ${isToday ? "bg-[#da8a0a]/8" : ""}`;

              const rowContent = (
                <>
                  <div className="min-w-0">
                    <span
                      className={`block text-sm leading-snug sm:text-base ${isToday ? "font-bold text-[#1a100a]" : "font-medium text-[#583b21]"}`}>
                      {entry.label}
                    </span>
                    {isToday ?
                      <span className="mt-0.5 block text-xs font-semibold text-[#da8a0a]">
                        Hari ini
                      </span>
                    : null}
                  </div>
                  <span
                    className={`shrink-0 text-right text-sm tabular-nums sm:text-base ${isToday ? "font-semibold text-[#9a5f19]" : "text-[#7a5f42]"}`}>
                    {hoursDisplay}
                  </span>
                </>
              );

              if (!canAnimate) {
                return (
                  <li key={entry.label} className={rowClass}>
                    {rowContent}
                  </li>
                );
              }

              return (
                <motion.li
                  key={entry.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  className={rowClass}>
                  {rowContent}
                </motion.li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
