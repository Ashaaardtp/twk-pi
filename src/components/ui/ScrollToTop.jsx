"use client";

export default function ScrollToTop() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Kembali ke atas"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#947452]/20 text-[#c7a57d] transition-all hover:scale-105 hover:bg-[#da8a0a] hover:text-white active:scale-95">
      <svg
        className="h-5 w-5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
