"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const isLinkActive = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : original;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Floating Pill Navbar */}
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "pointer-events-auto w-full max-w-4xl rounded-full transition-all duration-500",
            scrolled
              ? "bg-gradient-to-r from-purple-800/95 via-purple-600/95 to-purple-800/95 backdrop-blur-2xl shadow-lg shadow-purple-900/40"
              : "bg-transparent shadow-none"
          )}
        >
          <div className="flex items-center justify-between h-16 px-5 md:px-7">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/vision_vistara_logo.png"
                alt="Vision Vistara"
                width={105}
                height={36}
                priority
                className="h-9 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href, pathname);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors duration-300 group",
                      active && scrolled
                        ? "text-purple-800"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.name}
                    {/* Soft active pill — morphs between links via layoutId */}
                    {active && (
                      <motion.span
                        layoutId="nav-aurora-pill"
                        className={cn(
                          "absolute inset-0 rounded-full -z-10 transition-colors duration-300",
                          scrolled
                            ? "bg-white/95 shadow-md shadow-purple-900/20"
                            : "bg-white/10 backdrop-blur-md"
                        )}
                        transition={{ type: "spring", stiffness: 280, damping: 24 }}
                      />
                    )}
                    <span
                      className={cn(
                        "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10",
                        "bg-white/10"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full px-6 bg-white text-purple-800 hover:bg-purple-100 shadow-lg shadow-purple-900/25"
                asChild
              >
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button — Animated Hamburger */}
            <motion.button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.08 }}
              className={cn(
                "lg:hidden relative w-11 h-11 rounded-full flex items-center justify-center transition-colors",
                scrolled
                  ? "bg-white text-purple-800 hover:bg-purple-100"
                  : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              {/* Pulse ring */}
              <motion.span
                className={cn(
                  "absolute inset-0 rounded-full",
                  scrolled ? "border-2 border-purple-300" : "border-2 border-white/30"
                )}
                animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="relative z-10"
              >
                <motion.path
                  d="M3 6h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={menuOpen ? { d: "M3 11h16", rotate: 45 } : { d: "M3 6h16", rotate: 0 }}
                />
                <motion.path
                  d="M3 11h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={menuOpen ? { d: "M3 11h16", opacity: 0 } : { d: "M3 11h16", opacity: 1 }}
                />
                <motion.path
                  d="M3 16h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={menuOpen ? { d: "M3 11h16", rotate: -45 } : { d: "M3 16h16", rotate: 0 }}
                />
              </svg>
            </motion.button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[70] flex flex-col overflow-hidden md:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Purple gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-800" />

            {/* Decorative floating circles */}
            <motion.div
              className="absolute top-20 left-[-40px] w-48 h-48 rounded-full bg-white/5"
              animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-40 right-[-20px] w-32 h-32 rounded-full bg-yellow-400/10"
              animate={{ y: [0, -20, 0], x: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white/5"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            {/* Gradient overlay shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />

            {/* Menu Header */}
            <div className="relative flex items-center justify-between px-6 h-20">
              <Image
                src="/images/vision_vistara_logo.png"
                alt="Vision Vistara"
                width={96}
                height={33}
                className="h-8 w-auto object-contain brightness-0 invert"
              />
              <motion.button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                whileTap={{ scale: 0.8, rotate: 180 }}
                whileHover={{ scale: 1.1 }}
                className="w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-md"
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Menu Navigation */}
            <nav className="relative flex-1 px-6 py-6 space-y-1">
              {navLinks.map((link, i) => {
                const active = isLinkActive(link.href, pathname);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.45, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "group flex items-center gap-3 px-5 py-4 text-xl font-semibold rounded-2xl transition-all duration-300",
                        active
                          ? "bg-white/15 text-white backdrop-blur-md"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      )}
                    >
                      <span className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        active
                          ? "bg-yellow-400 shadow-lg shadow-yellow-400/50"
                          : "bg-white/30 group-hover:bg-white/60"
                      )} />
                      {link.name}
                      {active && (
                        <motion.span
                          layoutId="mobile-active"
                          className="ml-auto text-xs font-medium text-white/50 tracking-widest uppercase"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + i * 0.07 }}
                        >
                          current
                        </motion.span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Contact + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="relative px-6 pb-8 space-y-3"
            >
              <a
                href="tel:+919232525253"
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-white/80 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-md border border-white/10"
              >
                <Phone size={16} className="text-yellow-400" />
                +91-9232525253
              </a>
              <a
                href="mailto:admin@visionvistar.com"
                className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-white/80 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-md border border-white/10"
              >
                <Mail size={16} className="text-yellow-400" />
                admin@visionvistar.com
              </a>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="secondary"
                  className="w-full bg-white text-purple-800 hover:bg-purple-100 shadow-xl shadow-purple-900/30 rounded-full py-6 text-base font-semibold"
                  asChild
                >
                  <Link href="/contact" onClick={() => setMenuOpen(false)}>
                    Get Free Consultation
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}