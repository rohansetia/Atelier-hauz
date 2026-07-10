import type { Metadata } from "next";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";

import "./globals.css";

import GlobalInquiryProvider from "./components/GlobalInquiryProvider";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://atelierhauz.in"),

  title: {
    default: "AtelierHauz | Premium Real Estate in Rajasthan",
    template: "%s | AtelierHauz",
  },

  description:
    "Discover premium residential and commercial developments by AtelierHauz. Transparent documentation, luxury planning, and long-term investment opportunities across Rajasthan.",

  keywords: [
    "AtelierHauz",
    "Real Estate Rajasthan",
    "Residential Plots",
    "Commercial Plots",
    "Shri Sai Enclave",
    "Luxury Township",
    "Property Investment",
    "Hanumangarh Property",
    "Land Developer Rajasthan",
  ],

  verification: {
  google: "WCd3-GHEM7nsl_xGIeWKjVKvYMzaK51OttXQxmuyCII",
},

  authors: [
    {
      name: "AtelierHauz",
    },
  ],

  creator: "AtelierHauz",

  publisher: "AtelierHauz",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AtelierHauz | Premium Real Estate in Rajasthan",

    description:
      "Luxury townships, transparent documentation and premium investment opportunities.",

    url: "https://atelierhauz.in",

    siteName: "AtelierHauz",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AtelierHauz",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "AtelierHauz",

    description:
      "Premium Real Estate Developments in Rajasthan.",

    images: ["/og-image.jpg"],
  },

 icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
},
manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body>

  <GoogleAnalytics />

  <GlobalInquiryProvider>
    {children}
  </GlobalInquiryProvider>

</body>
    </html>
  );
}
