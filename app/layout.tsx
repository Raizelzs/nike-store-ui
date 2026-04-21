import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed } from "next/font/google";
import "@/app/globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
  preload: true
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  title: "NKX Sneaker Store",
  description: "Premium Nike-inspired e-commerce experience."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${barlow.variable}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
