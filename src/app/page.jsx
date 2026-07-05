import HeroSection from "../components/sections/HeroSection.jsx";
import MenuSection from "../components/sections/MenuSection.jsx";
import ScheduleSection from "../components/sections/ScheduleSection.jsx";
import LocationSection from "../components/sections/LocationSection.jsx";
import FooterSection from "../components/sections/FooterSection.jsx";
import SectionSeparator from "../components/ui/SectionSeparator.jsx";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <SectionSeparator speed={50} />
      <MenuSection />
      <SectionSeparator speed={40} direction="right" />
      <ScheduleSection />
      <SectionSeparator speed={55} />
      <LocationSection />
      <FooterSection />
    </main>
  );
}
