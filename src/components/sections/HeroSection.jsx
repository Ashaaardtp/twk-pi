import Image from "next/image";
import HeroContent from "@/components/sections/HeroContent.jsx";

export default function HeroSection() {
  return (
    <section id="beranda" className="bg-[#f4e7d2]">
      <div className="hero-image-container relative aspect-[5/2] w-full overflow-hidden sm:aspect-[3/1]">
        <Image
          src="/home-twk.jpg"
          alt="Tahu Walik Kribo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <HeroContent />
    </section>
  );
}
