import type { Metadata } from "next";
import { Poppins, Dancing_Script, Share_Tech } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${dancingScript.variable} ${shareTech.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('vision-vistara-theme');var d=t==='light'?'light':'dark';document.documentElement.dataset.theme=d;if(d==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){document.documentElement.dataset.theme='dark';document.documentElement.classList.add('dark')}})();",
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background font-sans antialiased"
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
