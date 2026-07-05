import ScrollToTop from "@/components/ui/ScrollToTop";
import FadeIn from "@/components/ui/FadeIn";

export default function FooterSection() {
  return (
    <footer className="bg-[#1A100A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <p className="text-2xl font-bold text-[#DA8A0A]">
                Tahu Walik Kribo
              </p>
              <p className="text-xl font-bold text-[#DA8A0A]">
                Pasir Impun
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <p className="text-lg font-semibold">
                Hubungi Kami
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#DA8A0A] mt-0.5 flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-[#7a5f42]">
                    Pasir Impun Barat, Bandung
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#DA8A0A] flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-[#7a5f42]">
                    Buka setiap hari
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                Tautan Cepat
              </h4>
              <div className="space-y-2">
                <a
                  href="#lokasi"
                  className="block text-[#7a5f42] hover:text-[#DA8A0A] transition-colors">
                  Lokasi
                </a>
                <a
                  href="#menu"
                  className="block text-[#7a5f42] hover:text-[#DA8A0A] transition-colors">
                  Menu
                </a>
                <a
                  href="https://gofood.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#7a5f42] hover:text-[#DA8A0A] transition-colors">
                  Pesan di GoFood
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-12 pt-8 border-t border-[#947452]/30">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-[#7a5f42]">
                &copy; {new Date().getFullYear()} Tahu
                Walik Kribo. Semua hak dilindungi.
              </p>
              <div className="flex items-center gap-3">
                <ScrollToTop />
                <a
                  href="https://gofood.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#947452]/20 flex items-center justify-center hover:bg-[#DA8A0A] transition-colors">
                  <span className="text-lg">
                    🛵
                  </span>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#947452]/20 flex items-center justify-center hover:bg-[#DA8A0A] transition-colors">
                  <span className="text-lg">
                    💬
                  </span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
