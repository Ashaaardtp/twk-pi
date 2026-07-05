import MapEmbed from "@/components/MapComponent";
import FadeIn from "@/components/ui/FadeIn";
import StarRating from "@/components/ui/StarRating";
import { locationInfo } from "@/data/location";

function GoogleIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function GoFoodIcon() {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00aa13] text-[10px] font-bold text-white"
      aria-hidden="true">
      G
    </span>
  );
}

export default function LocationSection() {
  const {
    name,
    shortAddress,
    fullAddress,
    googleMapsUrl,
    googleMapsEmbedUrl,
    googleRating,
    googleReviewCount,
    gofoodUrl,
    gofoodRating,
  } = locationInfo;

  return (
    <section
      id="lokasi"
      className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-16 lg:max-w-6xl lg:py-20">
      <FadeIn className="text-center">
        <h2 className="mb-0 text-2xl font-bold tracking-tight text-[#1a100a] sm:text-3xl lg:text-4xl">
          Lokasi & Ulasan
        </h2>
        <p className="mx-auto mb-0 mt-3 max-w-md text-sm leading-relaxed text-[#7a5f42] sm:text-base">
          Kunjungi langsung atau pesan lewat GoFood
        </p>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#da8a0a]" />
      </FadeIn>

      <div className="mt-8 lg:mt-10 lg:grid lg:grid-cols-5 lg:items-start lg:gap-8">
        <FadeIn delay={0.08} className="lg:col-span-3">
          <MapEmbed
            src={googleMapsEmbedUrl}
            title={`Peta ${name}`}
          />
          <p className="mb-0 mt-3 text-center text-xs leading-relaxed text-[#7a5f42] sm:text-left sm:text-sm">
            {fullAddress}
          </p>
        </FadeIn>

        <div className="mt-6 space-y-4 lg:col-span-2 lg:mt-0">
          <FadeIn delay={0.14}>
          {/* Google Maps rating */}
          <article className="rounded-2xl border border-[#947452]/25 bg-white p-5">
            <div className="flex items-center gap-2.5">
              <GoogleIcon />
              <h3 className="mb-0 text-base font-bold text-[#1a100a]">
                Google Maps
              </h3>
            </div>

            <div className="mt-4">
              <StarRating rating={googleRating} size="lg" />
            </div>

            <p className="mb-0 mt-2 text-sm text-[#7a5f42]">
              {googleReviewCount ?
                `${googleReviewCount} ulasan`
              : "Rating dari pengunjung"}
            </p>

            <p className="mb-0 mt-3 text-sm leading-relaxed text-[#583b21]">
              {shortAddress}
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border-2 border-[#947452]/40 px-5 py-2.5 text-sm font-semibold text-[#1a100a] transition-colors hover:border-[#da8a0a] hover:text-[#9a5f19] sm:w-auto">
              Buka di Google Maps
            </a>
          </article>
          </FadeIn>

          <FadeIn delay={0.22}>
          {/* GoFood rating */}
          <article className="rounded-2xl border border-[#947452]/25 bg-white p-5">
            <div className="flex items-center gap-2.5">
              <GoFoodIcon />
              <h3 className="mb-0 text-base font-bold text-[#1a100a]">
                GoFood
              </h3>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="text-2xl font-bold tabular-nums text-[#1a100a]">
                {gofoodRating.toLocaleString("id-ID", {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
              </span>
              <span className="text-xl text-[#da8a0a]">★</span>
            </div>

            <p className="mb-0 mt-2 text-sm text-[#7a5f42]">
              Super Partner · rating toko
            </p>

            <a
              href={gofoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#00aa13] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#009511] sm:w-auto">
              Pesan di GoFood
            </a>
          </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
