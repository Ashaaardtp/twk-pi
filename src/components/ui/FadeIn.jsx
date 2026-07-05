"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { useCanAnimate } from "@/lib/useCanAnimate";

export default function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}) {
  const canAnimate = useCanAnimate();
  const Tag = as;

  if (!canAnimate) {
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      transition={{ delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </Component>
  );
}
