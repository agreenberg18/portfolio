import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-SRLC85SB6T";

const display = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andrewgreenberg.dev"),
  title: "Andrew Greenberg | Partner Engineer & Builder",
  description:
    "Andrew Greenberg is a Partner Engineer at Uber and full-stack builder shipping AI-powered tools and consumer apps. Explore Dinner Spinner, Mahjong Mamas, iBetYou, and more.",
  keywords: [
    "Andrew Greenberg",
    "Partner Engineer",
    "Uber",
    "Full-stack developer",
    "React",
    "React Native",
    "AI engineer",
    "Portfolio",
  ],
  authors: [{ name: "Andrew Greenberg" }],
  openGraph: {
    title: "Andrew Greenberg | Partner Engineer & Builder",
    description:
      "Partner Engineer at Uber building AI-powered tools and consumer apps. Dinner Spinner, Mahjong Mamas, iBetYou & more.",
    type: "website",
    images: ["/andrew_headshot.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
