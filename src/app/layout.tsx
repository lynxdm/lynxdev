import type { Metadata } from "next";
import {
  Bebas_Neue,
  Commissioner,
  Bilbo_Swash_Caps,
  Almarai,
} from "next/font/google";
import { ReactLenis } from "@/utilis/lenis";
import "./globals.css";

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
  display: "swap",
});

const bebas_neue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const almari = Almarai({
  weight: ["400", "700", "800"],
  variable: "--font-almari",
  subsets: ["arabic"],
  display: "swap",
});

const bilbo_swash_caps = Bilbo_Swash_Caps({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bilbo-swash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lynx — Developer",
  description: "A creative Front End developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ReactLenis root>
        <body
          className={`${commissioner.variable} ${bebas_neue.variable} ${almari.variable} ${bilbo_swash_caps.variable} antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
