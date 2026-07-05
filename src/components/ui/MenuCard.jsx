import Image from "next/image";
import { getMenuImage } from "@/lib/menuImages";

export default function MenuCard({ item }) {
  const imageSrc = getMenuImage(item.name);

  return (
    <article className="group w-full overflow-hidden rounded-2xl border border-[#947452]/25 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#da8a0a]/50 hover:shadow-lg">
      <div className="relative aspect-square w-full bg-[#f4e7d2]">
        <Image
          loading="eager"
          src={imageSrc}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
          className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-3.5 sm:p-4">
        <h3 className="text-sm font-bold leading-snug text-[#1a100a] transition-colors group-hover:text-[#9a5f19] sm:text-base">
          {item.name}
        </h3>

        {item.description ?
          <p className="mt-1.5 text-xs leading-relaxed text-[#7a5f42] sm:text-sm">
            {item.description}
          </p>
        : null}

        <p className="mt-2.5 text-base font-bold text-[#da8a0a] sm:mt-3 sm:text-lg">
          Rp{item.price.toLocaleString("id-ID")}
        </p>
      </div>
    </article>
  );
}
