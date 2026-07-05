"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import MenuCard from "@/components/ui/MenuCard";
import FadeIn from "@/components/ui/FadeIn";
import { menuItems } from "@/data/menu";
import {
  menuCardVariant,
  menuGridVariant,
  staggerContainer,
} from "@/lib/motion";
import { useCanAnimate } from "@/lib/useCanAnimate";

function groupMenuByCategory(items) {
  return items.reduce((groups, item) => {
    const existingGroup = groups.find(
      (group) => group.category === item.category,
    );

    if (existingGroup) {
      existingGroup.items.push(item);
    } else {
      groups.push({
        category: item.category,
        items: [item],
      });
    }

    return groups;
  }, []);
}

function CategoryButton({ label, isActive, onClick, canAnimate }) {
  const btnClass = `relative rounded-full border px-5 py-2 text-sm font-semibold transition-colors duration-300 ${isActive ?
      "border-[#da8a0a] text-white"
    : "border-[#947452]/40 bg-white text-[#1a100a] hover:border-[#da8a0a] hover:text-[#9a5f19]"
  }`;

  const pill =
    isActive ?
      canAnimate ?
        <motion.span
          layoutId="menu-category-pill"
          className="absolute inset-0 rounded-full bg-[#da8a0a] shadow-sm"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      : <span className="absolute inset-0 rounded-full bg-[#da8a0a] shadow-sm" />
    : null;

  const labelEl = <span className="relative z-10">{label}</span>;

  if (!canAnimate) {
    return (
      <button type="button" onClick={onClick} className={btnClass}>
        {pill}
        {labelEl}
      </button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={btnClass}>
      {pill}
      {labelEl}
    </motion.button>
  );
}

function MenuGrid({ groupedMenu, canAnimate }) {
  if (!canAnimate) {
    return (
      <div className="space-y-14 sm:space-y-16">
        {groupedMenu.map(({ category, items }) => (
          <div key={category}>
            <CategoryHeading category={category} />
            <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
              {items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-14 sm:space-y-16">
      {groupedMenu.map(({ category, items }) => (
        <motion.div
          key={category}
          variants={menuGridVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="overflow-hidden">
          <CategoryHeading category={category} />
          <motion.div
            className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                variants={menuCardVariant}
                transition={{ delay: index * 0.04, duration: 0.45 }}>
                <MenuCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function CategoryHeading({ category }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-4 px-2">
      <span className="h-px max-w-[120px] flex-1 bg-gradient-to-r from-transparent to-[#da8a0a]/40 sm:max-w-none" />
      <h3 className="mb-0 shrink-0 text-center text-lg font-bold text-[#1a100a] sm:text-xl">
        {category}
      </h3>
      <span className="h-px max-w-[120px] flex-1 bg-gradient-to-l from-transparent to-[#da8a0a]/40 sm:max-w-none" />
    </div>
  );
}

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const canAnimate = useCanAnimate();

  const menuCategories = useMemo(() => {
    return [...new Set(menuItems.map((item) => item.category))];
  }, []);

  const groupedMenu = useMemo(() => {
    const filteredItems =
      selectedCategory === "Semua" ?
        menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

    return groupMenuByCategory(filteredItems);
  }, [selectedCategory]);

  return (
    <section
      id="menu"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <FadeIn className="mb-10 text-center sm:mb-12 lg:mb-14">
        <h2 className="mb-0 text-3xl font-bold tracking-tight text-[#1a100a] sm:text-4xl lg:text-5xl">
          Menu Kami
        </h2>
        <p className="mx-auto mb-0 mt-4 max-w-md text-base leading-relaxed text-[#583b21] sm:max-w-lg sm:text-lg">
          Pilih menu favoritmu dan nikmati kelezatannya
        </p>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#da8a0a]" />
      </FadeIn>

      <FadeIn
        delay={0.1}
        className="mb-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
        <CategoryButton
          label="Semua"
          isActive={selectedCategory === "Semua"}
          onClick={() => setSelectedCategory("Semua")}
          canAnimate={canAnimate}
        />
        {menuCategories.map((category) => (
          <CategoryButton
            key={category}
            label={category}
            isActive={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
            canAnimate={canAnimate}
          />
        ))}
      </FadeIn>

      {canAnimate ?
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}>
            <MenuGrid groupedMenu={groupedMenu} canAnimate />
          </motion.div>
        </AnimatePresence>
      : <MenuGrid groupedMenu={groupedMenu} canAnimate={false} />}
    </section>
  );
}
