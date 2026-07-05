"use client";

import { useReducedMotion } from "framer-motion";
import { useClientMounted } from "@/lib/useClientMounted";

export function useCanAnimate() {
  const mounted = useClientMounted();
  const prefersReducedMotion = useReducedMotion();

  return mounted && prefersReducedMotion !== true;
}
