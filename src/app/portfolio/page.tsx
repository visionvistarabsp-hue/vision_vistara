"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    type: "Residential Plot", area: "638 - 1,699 Sq.ft.", price: "\u20B911.62 Lac",
    status: "Ready to Move",
    image: "/images/yuvraj-park.png",
    features: ["Gated Community", "Park", "24/7 Security"],
  },
  {
    id: 2, name: "Dream Residency Phase 2", category: "plots", location: "Ashok Nagar, Bilaspur",
    type: "Residential Plot", area: "362 - 2,391 Sq.ft.", price: "\u20B910.50 Lac",
    status: "Under Construction",
    image: "/images/dream-residency-phase2.jpeg",
    features: ["Prime Location", "Road Access", "Electricity"],
  },
  {
    id: 3, name: "Amol Sona Heights", category: "apartments", location: "Sarkanda, Bilaspur",
    type: "3 BHK Apartment", area: "1,200 - 1,800 Sq.ft.", price: "\u20B925 Lac",
    status: "Ready to Move",
    image: "/images/amol-sona-heights.jpg",
    features: ["Swimming Pool", "Gym", "Club House"],
  },
  {
    id: 4, name: "Vistara Commercial Hub", category: "commercial", location: "Station Road, Bilaspur",
    type: "Commercial Space", area: "500 - 2,000 Sq.ft.", price: "\u20B935 Lac",
    status: "Pre-Launch",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    features: ["Main Road", "Parking", "High Footfall"],
  },
  {
    id: 5, name: "Green Valley Enclave", category: "plots", location: "Koni, Bilaspur",
    type: "Residential Plot", area: "1,000 - 2,500 Sq.ft.", price: "\u20B918 Lac",
    status: "Booking Open",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    features: ["Nature View", "Clean Area", "Development"],
  },
  {
    id: 6, name: "City Center Mall Space", category: "commercial", location: "Nehru Nagar, Bilaspur",
    type: "Retail Space", area: "200 - 800 Sq.ft.", price: "\u20B920 Lac",
    status: "Ready to Move",
    image: "https://images.unsplash.com/photo-1582407947092-16f694f478c5?w=800&h=600&fit=crop",
    features: ["Mall Location", "Anchor Store", "Food Court"],
  },
  {
    id: 7, name: "Sunshine Apartments", category: "apartments", location: "Rajkishore Nagar, Bilaspur",
    type: "2 BHK Apartment", area: "900 - 1,100 Sq.ft.", price: "\u20B918 Lac",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    features: ["Modern Design", "Park View", "Parking"],
  },
  {
    id: 8, name: "Janjgir Gateway", category: "commercial", location: "Champa, Janjgir-Champa",
    type: "Commercial Complex", area: "300 - 1,500 Sq.ft.", price: "\u20B915 Lac",
    status: "Pre-Launch",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    features: ["Highway Facing", "Investment", "Growing Area"],
  },
];

function getStatusVariant(status: string): "green" | "blue" | "orange" {
  if (status === "Ready to Move") return "green";
  if (status === "Under Construction") return "blue";
  return "orange";
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section - Video Background */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/portfolio-video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-cursive">
              <TypedText
                segments={[
                  { text: "Explore Our " },
                  { text: "Properties", className: "text-yellow-400" },
                ]}
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-2xl mx-auto">
              Discover our carefully curated selection of residential and
              commercial properties across Bilaspur and Chhattisgarh.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b">
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500">
              Showing <span className="font-semibold text-purple-600">{filteredProjects.length}</span> projects
            </p>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="yellow">{project.type}</Badge>
                        <Badge variant={getStatusVariant(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <Card className="bg-white/95 backdrop-blur-sm border-0">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-500">Starting from</p>
                                <p className="text-xl font-bold text-purple-600">
                                  {project.price}
                                </p>
                              </div>
                              <Button variant="default" size="sm">
                                View Details
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-tech">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                        <MapPin size={14} className="text-purple-500" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Square size={14} className="text-purple-500" />
                          {project.area}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-tech">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-purple-100/80 mb-8 max-w-2xl mx-auto">
              Our team can help you find the perfect property that matches your
              requirements. Get in touch with us for personalized assistance.
            </p>
            <Button variant="yellow" size="xl" asChild>
              <a href="/contact">
                Contact Our Team
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
