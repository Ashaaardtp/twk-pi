"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { useCanAnimate } from "@/lib/useCanAnimate";

export default function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
  variant = fadeInUp,
  animateOnMount = true,
}) {
  const canAnimate = useCanAnimate();
  const Tag = as;

  if (!canAnimate) {
    return (
      <Tag className={className}>{children}</Tag>
    );
  }

  const Component = motion[as] ?? motion.div;
  const motionProps =
    animateOnMount ?
      {
        initial: "hidden",
        animate: "visible",
        variants: variant,
        transition: {
          delay,
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        },
      }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
          once: true,
          amount: 0.2,
          margin: "-24px",
        },
        variants: variant,
        transition: {
          delay,
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        },
      };

  return (
    <Component
      className={className}
      style={{ willChange: "opacity, transform" }}
      {...motionProps}>
      {children}
    </Component>
  );
}
