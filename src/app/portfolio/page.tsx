"use client";

import { useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  MapPin,
  Square,
  ArrowRight,
  Building2,
  Home,
  LandPlot,
  Warehouse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

const categories = [
  { id: "all", name: "All Projects", icon: Building2 },
  { id: "plots", name: "Residential Plots", icon: LandPlot },
  { id: "apartments", name: "Apartments", icon: Home },
  { id: "commercial", name: "Commercial", icon: Warehouse },
];

const projects = [
  {
    id: 1, name: "Yuvraj Park", category: "plots", location: "Sakri, Bilaspur",
    type: "Residential Plot", area: "900 - 1,500 Sq.ft.", price: "\u20B91,821 / sq.ft.",
    status: "Ready to Move",
    image: "/images/yuvraj_park.jpeg",
    features: ["Gated Community", "Park", "24/7 Security"],
  },
  {
    id: 2, name: "Dream Residency Phase 2", category: "plots", location: "Ashok Nagar, Bilaspur",
    type: "Residential Plot", area: "900 - 2,300 Sq.ft.", price: "\u20B92,851 / sq.ft.",
    status: "Under Construction",
    image: "/images/dream_recidency.jpeg",
    features: ["Prime Location", "Road Access", "Electricity"],
  },
  {
    id: 3, name: "Amol Sona Heights", category: "apartments", location: "Sarkanda, Bilaspur",
    type: "3 BHK Apartment", area: "1,425 Sq.ft.", price: "\u20B961,50,000 (3BHK)",
    status: "Ready to Move",
    image: "/images/AmolSonaHeights.png",
    features: ["Swimming Pool", "Gym", "Club House"],
  },
  {
    id: 4, name: "Vaikunth Residency", category: "plots", location: "Bilaspur, Chhattisgarh",
    type: "Residential Plot", area: "650 - 1,872 Sq.ft.", price: "\u20B92,499 / sq.ft.",
    status: "Booking Open",
    image: "/images/vaikunth_residency.png",
    features: ["Premium Location", "Gated Community", "Modern Amenities"],
  },
  {
    id: 5, name: "Hearth Homes", category: "apartments", location: "Bilaspur, Chhattisgarh",
    type: "2 & 3 BHK Apartment", area: "650 - 1,452 Sq.ft.", price: "\u20B93,500 / sq.ft.",
    status: "Booking Open",
    image: "/images/hearth_homes.png",
    features: ["Smart Home", "Club House", "Landscaped Gardens"],
  },
  {
    id: 6, name: "Orchid Farm", category: "plots", location: "Bilaspur, Chhattisgarh",
    type: "Farm Plot", area: "11,372 - 13,400 Sq.ft.", price: "\u20B962,00,000 (2BHK)",
    status: "Booking Open",
    image: "/images/orchid_farm.png",
    features: ["Farmhouse", "Organic Living", "Nature Retreat"],
  },
];

function getStatusVariant(status: string): "green" | "blue" | "orange" {
  if (status === "Ready to Move") return "green";
  if (status === "Under Construction") return "blue";
  return "orange";
}

function updatePointerTilt(event: PointerEvent<HTMLDivElement>, maxTilt: number) {
  if (
    event.pointerType !== "mouse" ||
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const bounds = event.currentTarget.getBoundingClientRect();
  if (!bounds.width || !bounds.height) {
    return;
  }

  const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
  const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
  event.currentTarget.style.setProperty("--pointer-tilt-x", `${-offsetY * maxTilt}deg`);
  event.currentTarget.style.setProperty("--pointer-tilt-y", `${offsetX * maxTilt}deg`);
}

function resetPointerTilt(event: PointerEvent<HTMLDivElement>) {
  event.currentTarget.style.setProperty("--pointer-tilt-x", "0deg");
  event.currentTarget.style.setProperty("--pointer-tilt-y", "0deg");
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const prefersReducedMotion = useReducedMotion();
  const seenProjectIds = useRef(new Set<number>());

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section - Video Background */}
      <section className="relative min-h-[560px] h-[72svh] max-h-[760px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/1588/1588-720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,6,54,.82)_0%,rgba(26,6,54,.45)_48%,rgba(26,6,54,.18)_100%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-tech">
              <TypedText
                segments={[
                  { text: "Find a property that  " },
                  { text: "Fits Your Life", className: "text-yellow-400" },
                ]}
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-2xl mx-auto">
              Explore residential and real estate projects curated and marketed by Vision Vistara.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 border-b border-purple-200/70 bg-[#F4EFE8]/95 backdrop-blur-md dark:border-white/10 dark:bg-[#21162C]/95">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center md:gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm md:rounded-lg md:px-5 md:py-2.5 md:text-base md:shrink",
                  activeCategory === cat.id
                    ? "shadow-lg shadow-purple-500/30"
                    : ""
                )}
              >
                <cat.icon size={16} className="mr-1.5 md:mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-[#F4EFE8] px-4 py-16 dark:bg-[#18171C]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600 dark:text-gray-300">
              Showing <span className="font-semibold text-purple-700 dark:text-purple-300">{filteredProjects.length}</span> projects
            </p>
          </div>

          <motion.div layout className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const position = index % 3;
                const initialPosition = prefersReducedMotion
                  ? false
                  : seenProjectIds.current.has(project.id)
                    ? false
                    : position === 1
                      ? { opacity: 0, scale: 0.97 }
                      : { opacity: 0, x: position === 0 ? -64 : 64, scale: 0.98 };

                return (
                <motion.div
                  key={project.id}
                  layout
                  initial={initialPosition}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  onViewportEnter={() => seenProjectIds.current.add(project.id)}
                  viewport={{ once: true, amount: 0.15 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 1.05,
                    delay: prefersReducedMotion ? 0 : index * 0.18,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full"
                >
                  <Card
                    onPointerMove={(event) => updatePointerTilt(event, 1.5)}
                    onPointerLeave={resetPointerTilt}
                    className="group project-card-motion flex h-full flex-col overflow-hidden border border-purple-200/70 bg-white shadow-[0_12px_36px_rgba(33,22,44,0.08)] transition-[border-color,box-shadow] duration-300 hover:border-purple-400/70 hover:shadow-[0_20px_44px_rgba(33,22,44,0.16)] dark:border-[#49382D]/70 dark:bg-[#25252B] dark:shadow-[0_14px_38px_rgba(0,0,0,0.22)] dark:hover:border-yellow-400/35 dark:hover:shadow-[0_20px_46px_rgba(0,0,0,0.32)]"
                  >
                    <div className="relative h-[260px] shrink-0 overflow-hidden bg-gray-100 sm:h-[280px]">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="project-image-motion portfolio-project-image object-cover transition-transform duration-700 ease-out"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
                      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
                        <Badge variant="purple" className="border border-white/15 bg-purple-700/90 shadow-sm backdrop-blur-sm">
                          {project.type}
                        </Badge>
                        <Badge variant={getStatusVariant(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute inset-x-5 bottom-4 flex items-end justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">Starting from</p>
                          <p className="mt-1 text-lg font-semibold leading-tight text-white sm:text-xl">
                            {project.price}
                          </p>
                        </div>
                        <Button variant="yellow" size="sm" className="shrink-0 rounded-full px-4 shadow-none">
                          View Details
                        </Button>
                      </div>
                    </div>

                    <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="mb-2 font-tech text-xl font-bold text-gray-900 dark:text-white">
                        {project.name}
                      </h3>
                      <div className="mb-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <MapPin size={14} className="shrink-0 text-purple-600 dark:text-purple-300" />
                        {project.location}
                      </div>
                      <div className="mb-4 flex items-center gap-2 border-t border-purple-100 pt-4 text-sm text-gray-700 dark:border-white/10 dark:text-gray-200">
                        <div className="flex items-center gap-2">
                          <Square size={14} className="shrink-0 text-yellow-600 dark:text-yellow-400" />
                          {project.area}
                        </div>
                      </div>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="border border-purple-100 bg-purple-50 text-xs text-purple-900 dark:border-[#49382D]/60 dark:bg-[#30251F] dark:text-[#e4d2b7]">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E9DDF5] px-4 py-20 dark:bg-[linear-gradient(180deg,#18171C_0%,#21162C_100%)] md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="rounded-[2rem] border border-purple-200/70 bg-white/75 px-6 py-10 shadow-[0_18px_48px_rgba(33,22,44,0.08)] backdrop-blur-sm dark:border-[#49382D]/60 dark:bg-[#25252B]/80 dark:shadow-[0_18px_48px_rgba(0,0,0,0.2)] sm:px-10 md:py-14">
              <h2 className="mb-6 font-tech text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Found a Project You Like?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
                Let’s help you take the next step.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Button variant="yellow" size="xl" asChild>
                  <a href="/contact">
                    Talk to Our Team
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </Button>
                <Button variant="gradient" size="xl" asChild>
                  <a href="/site-visit">
                    Schedule a Site Visit
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
