export default function MapEmbed({ src, title }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#947452]/25 bg-[#ede0c8] sm:aspect-video lg:aspect-auto lg:min-h-[340px] lg:h-full">
      <iframe
        title={title}
        src={src}
        loading="lazy"
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
