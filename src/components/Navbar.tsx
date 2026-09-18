"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-purple-900 text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              +91-8460208374
            </span>
            <span>surabhisoni8817@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <span>RERA Certified</span>
            <Separator orientation="vertical" className="h-4 bg-purple-600" />
            <span>Bilaspur, Chhattisgarh</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center transform rotate-6">
                  <span className="text-white font-bold text-xl -rotate-6">
                    V
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-purple-900">
                  Vision <span className="text-yellow-500">Vistara</span>
                </h1>
                <p className="text-[10px] text-gray-500 tracking-widest uppercase">
                  Turning Vision Into Assets
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-purple-600" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md p-0 gap-0">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">V</span>
                      </div>
                      <div>
                        <h2 className="font-bold font-tech">Vision Vistara</h2>
                        <p className="text-xs text-purple-200">Turning Vision Into Assets</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors font-medium"
                      >
                        {link.name}
                      </Link>
                    ))}
                    <Separator className="my-4" />
                    <Button variant="gradient" className="w-full" size="lg" asChild>
                      <Link href="/contact">Get Free Consultation</Link>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
