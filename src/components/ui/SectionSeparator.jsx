import Image from "next/image";
import { MARQUEE_IMAGES } from "@/lib/menuImages";

function buildMarqueeTrack(images, repeatPerHalf = 8) {
  const half = Array.from({ length: repeatPerHalf }, () => images).flat();
  return [...half, ...half];
}

export default function SectionSeparator({
  images = MARQUEE_IMAGES,
  speed = 45,
  direction = "left",
}) {
  const track = buildMarqueeTrack(images);

  return (
    <div
      className="section-marquee relative overflow-hidden border-y border-[#947452]/15 bg-[#ede0c8] py-3.5 sm:py-4"
      aria-hidden="true">
      <div
        className={`section-marquee-track flex w-max shrink-0 items-center gap-3 sm:gap-4 ${direction === "right" ? "section-marquee-reverse" : ""}`}
        style={{ "--marquee-duration": `${speed}s` }}>
        {track.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl ring-1 ring-[#947452]/20 sm:h-[4.5rem] sm:w-[4.5rem]">
            <Image
              src={image.src}
              alt=""
              fill
              sizes="72px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
