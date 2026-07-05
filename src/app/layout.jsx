import { Analytics } from "@vercel/analytics/next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  display: "swap",
});

const siteUrl = "https://twk-pi.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Tahu Walik Kribo Pasir Impun | Tahu Walik Bandung",
    template: "%s | Tahu Walik Kribo Pasir Impun",
  },
  verification: {
    google:
      "w5oacAE49k2ZyOyZxipv-TFksgG6AGk5BjKNEMc-Lmo",
  },
  description:
    "Tahu Walik Kribo Pasir Impun adalah kuliner khas Bandung yang terkenal dengan tahu walik renyah, gurih, dan disajikan di kawasan Pasir Impun.",
  keywords: [
    "tahu walik kribo pasir impun",
    "tahu walik",
    "tahu walik kribo",
    "kuliner bandung",
    "makanan khas bandung",
    "pasir impun",
    "gofood tahu walik",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "Tahu Walik Kribo Pasir Impun | Tahu Walik Bandung",
    description:
      "Temukan tahu walik kribo khas Pasir Impun dengan cita rasa renyah dan saus pilihan yang menggugah selera.",
    url: siteUrl,
    siteName: "Tahu Walik Kribo",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/home-twk.jpg",
        width: 1200,
        height: 630,
        alt: "Tahu Walik Kribo Pasir Impun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahu Walik Kribo Pasir Impun",
    description:
      "Tahu walik kribo khas Pasir Impun, Bandung, siap dinikmati langsung atau lewat GoFood.",
    images: ["/home-twk.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/home-twk.jpg", sizes: "any" },
    ],
  },
  applicationName: "Tahu Walik Kribo",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4e7d2",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
