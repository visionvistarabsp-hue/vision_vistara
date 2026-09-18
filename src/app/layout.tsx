import type { Metadata } from "next";
import { Poppins, Dancing_Script, Share_Tech } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const shareTech = Share_Tech({
  variable: "--font-share-tech",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Vision Vistara | Premier Real Estate in Bilaspur, Chhattisgarh",
  description:
    "Vision Vistara is a premier real estate firm in Bilaspur, Chhattisgarh delivering exceptional property solutions for residential, commercial, and investment needs.",
  keywords: [
    "real estate",
    "bilaspur",
    "chhattisgarh",
    "property",
    "plots",
    "flats",
    "vision vistara",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${dancingScript.variable} ${shareTech.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
