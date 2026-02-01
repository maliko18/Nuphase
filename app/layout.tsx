import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SocialFloating } from "./components/SocialFloating";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NuPhase Measurements - Mobile Energy Services & Measurements",
  description:
    "Cutting-Edge Mobile Energy Services & Measurements. Mobile laboratory measurements at the wellsite for gas composition analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-700`}
        style={{ transitionProperty: "background-color, color" }}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <SocialFloating />
        </Providers>
      </body>
    </html>
  );
}
