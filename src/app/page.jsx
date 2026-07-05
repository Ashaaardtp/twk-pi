import Script from "next/script";
import HeroSection from "../components/sections/HeroSection.jsx";
import MenuSection from "../components/sections/MenuSection.jsx";
import ScheduleSection from "../components/sections/ScheduleSection.jsx";
import LocationSection from "../components/sections/LocationSection.jsx";
import FooterSection from "../components/sections/FooterSection.jsx";
import SectionSeparator from "../components/ui/SectionSeparator.jsx";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Tahu Walik Kribo",
  alternateName: [
    "Tahu Walik Kribo Pasir Impun",
    "Tahu Walik",
  ],
  url: "https://twk-pi.vercel.app",
  telephone: "+62-22-1234-5678",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Jl. Pasir Impun Barat No. 58 RT 02 RW 10",
    addressLocality: "Bandung",
    addressRegion: "Jawa Barat",
    postalCode: "40195",
    addressCountry: "ID",
  },
  servesCuisine: ["Indonesian", "Street Food"],
  priceRange: "$$",
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.9,
    longitude: 107.6,
  },
  sameAs: [
    "https://maps.app.goo.gl/CXmUydsSkFy4ythz6",
    "https://gofood.link",
  ],
  description:
    "Tahu Walik Kribo Pasir Impun adalah tempat kuliner khas Bandung yang terkenal dengan tahu walik renyah, gurih, dan berbagai pilihan saus.",
  image: [
    "https://twk-pi.vercel.app/home-twk.jpg",
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessSchema,
          ),
        }}
      />
      <HeroSection />
      <SectionSeparator speed={50} />
      <MenuSection />
      <SectionSeparator
        speed={40}
        direction="right"
      />
      <ScheduleSection />
      <SectionSeparator speed={55} />
      <LocationSection />
      <FooterSection />
    </main>
  );
}
