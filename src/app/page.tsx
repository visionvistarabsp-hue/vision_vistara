"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  Shield,
  Users,
  ChevronRight,
  Star,
  Phone,
  Landmark,
  Home as HomeIcon,
  Building2,
  X,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

const stats = [
  { number: "800+", label: "Happy Clients" },
  { number: "8+", label: "Projects Completed" },
  { number: "12+", label: "Years Experience" },
  { number: "100%", label: "RERA Certified" },
];

const projects = [
  {
    id: 1,
    name: "Yuvraj Park",
    location: "Sakri, Bilaspur",
    type: "Ongoing",
    tagline: "Modern Homes, A Better Tomorrow",
    bhk: "2BHK & 3BHK",
    units: "120 Units",
    price: "\u20B911.62 Lac",
    image: "/images/yuvraj_park.jpeg",
  },
  {
    id: 2,
    name: "Dream Residency Phase 2",
    location: "Ashok Nagar, Sarkanda",
    type: "Ongoing",
    tagline: "Modern Homes, A Better Tomorrow",
    bhk: "2BHK & 3BHK",
    units: "120 Units",
    price: "\u20B910.50 Lac",
    image: "/images/dream_recidency.jpeg",
  },
  {
    id: 3,
    name: "Amol Sona Heights",
    location: "Devnanadan Nagar, Sarkanda",
    type: "Ongoing",
    tagline: "Modern Homes, A Better Tomorrow",
    bhk: "2BHK & 3BHK",
    units: "120 Units",
    price: "\u20B925 Lac",
    image: "/images/AmolSonaHeights.png",
  },
];

const features = [
  {
    icon: Landmark,
    title: "Investor",
    description: "Invest with Vision. Build with Confidence.",
  },
  {
    icon: HomeIcon,
    title: "Buyer",
    description: "The Right Property. The Right Guidance.",
  },
  {
    icon: Building2,
    title: "Developer",
    description: "Your Project. Our Sales Expertise.",
  },
];

const featureDetails: Record<string, { intro: string; benefits: string[]; cta: string }> = {
  Investor: {
    intro: "Vision Vistara is building a technology-driven real-estate business focused on scalable growth, strong market opportunities and transparent operations.",
    benefits: [
      "Business growth opportunity",
      "Real-estate market expertise",
      "Technology-led operations",
      "Transparent business processes",
      "Scalable expansion across markets",
    ],
    cta: "Contact Us",
  },
  Buyer: {
    intro: "We help buyers discover suitable residential, commercial and investment opportunities with transparent information and professional guidance throughout the property-buying journey.",
    benefits: [
      "Curated Property Options",
      "Transparent Information",
      "RERA-Compliant Opportunities",
      "Expert Guidance",
      "End-to-End Assistance",
      "Better-Informed Decisions",
    ],
    cta: "Contact Us",
  },
  Developer: {
    intro: "We partner with builders and developers to drive project sales through structured sales strategy, marketing, technology and market expertise.",
    benefits: [
      "Project Sales & Marketing",
      "Lead Generation",
      "Digital Marketing",
      "Sales Strategy",
      "Customer Acquisition",
      "Market Intelligence",
      "Performance Tracking",
    ],
    cta: "Partner With Us",
  },
};

const testimonials = [
  {
    name: "Shanu Zafar",
    rating: 5,
    text: "Vision Vistara made my property buying experience seamless. Their team was professional and helpful throughout.",
  },
  {
    name: "Jaya",
    rating: 5,
    text: "Excellent service and great properties. I successfully closed deals with their help. Highly recommended!",
  },
  {
    name: "Kishan Tandlekar",
    rating: 5,
    text: "They understood my requirements perfectly and found me the ideal property. Great attention to detail.",
  },
];

export default function HomePage() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section - Fullscreen Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Fullscreen Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/49843/49843-720.mp4"
              type="video/mp4"
            />
          </video>
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide font-tech">
              <TypedText
                segments={[
                  { text: "Turning " },
                  { text: "Vision", className: "text-yellow-400" },
                  { text: " Into " },
                  { text: "Assets", className: "text-yellow-400" },
                ]}
              />
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-white/80 text-sm sm:text-lg md:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 md:mb-8">
              Better Properties. Smarter Decisions.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6 md:mb-8" />
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed">
              Discover RERA-compliant residential, commercial and investment
              opportunities backed by local expertise, technology and transparent
              guidance.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button variant="yellow" size="lg" className="sm:size-xl" asChild>
                <Link href="/portfolio">
                  Explore Properties
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="sm:size-xl bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" asChild>
                <Link href="/contact">
                  <Phone size={18} className="mr-2" />
                  Talk to an Expert
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-12 md:-mt-20 z-30 px-4">
        <FadeIn>
          <Card className="max-w-5xl mx-auto">
            <CardContent className="p-4 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                Built For Every Side of{" "}
                <span className="text-purple-600">Real Estate</span>
              </h2>
              <p className="text-gray-500 mt-3 text-sm md:text-base max-w-xl mx-auto">
                We create value across the real-estate ecosystem — for investors, developers and property buyers.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-white/60 h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-600 transition-colors">
                      <feature.icon
                        size={28}
                        className="text-purple-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-tech">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <button
                      onClick={() => setSelectedFeature(feature.title)}
                      className="text-purple-600 text-sm font-semibold hover:text-purple-800 transition-colors flex items-center gap-1 group/btn"
                    >
                      Explore More
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
              <div>
                <Badge variant="yellow" className="mb-3">Featured Projects</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                  Explore Our <span className="text-purple-600">Projects</span>
                </h2>
                <p className="text-gray-500 mt-3 text-sm md:text-base max-w-xl">
                  Discover thoughtfully developed residential and commercial spaces designed for living, working and investing.
                </p>
              </div>
              <Button variant="ghost" className="mt-4 md:mt-0 text-purple-600 hover:text-purple-700" asChild>
                <Link href="/portfolio">
                  View All Projects
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div whileHover={{ y: -10 }}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-400/60 text-yellow-900 backdrop-blur-sm border-yellow-500/20 hover:bg-yellow-400/70">{project.type}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-600/60 text-white backdrop-blur-sm border-purple-500/20 hover:bg-purple-600/70">RERA Registered</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-xs text-purple-600 font-semibold uppercase tracking-wider mb-1">Residential</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 font-tech">
                        {project.name}
                      </h3>
                      {project.tagline && (
                        <p className="text-xs text-gray-400 italic mb-2">{project.tagline}</p>
                      )}
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <MapPin size={14} className="text-purple-500" />
                        {project.location}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                            <HomeIcon size={14} className="text-purple-500" />
                            {project.bhk}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm text-gray-600 font-medium">
                            <Layers size={14} className="text-purple-500" />
                            {project.units}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-purple-600 hover:text-yellow-500 p-0" asChild>
                          <Link href="/contact">
                            View Project
                            <ChevronRight size={14} className="ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 rounded-full blur-2xl" />
              </div>
              <div className="relative grid lg:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-tech">
                    Let&apos;s Build Your Next Real Estate Move.
                  </h2>
                  <p className="text-purple-100/80 mb-8 leading-relaxed">
                    Whether you&apos;re looking to invest, bring your project to market,
                    or find the right property, Vision Vistara is here to help you
                    move forward with clarity and confidence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button variant="yellow" size="lg" asChild>
                      <Link href="/portfolio">Explore Properties</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/contact">Talk to Our Team</Link>
                    </Button>
                  </div>
                  <p className="mt-5 text-sm text-purple-200/70">
                    Are you a developer or investor?{" "}
                    <Link href="/contact" className="text-yellow-400 hover:text-yellow-300 font-semibold underline underline-offset-2 transition-colors">
                      Partner With Vision Vistara →
                    </Link>
                  </p>
                </div>
                <div className="hidden lg:block">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
                    alt="Contact Us"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                What Our <span className="text-purple-600">Clients Say</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <Card className="hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-5 md:p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold text-sm">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">
                        {testimonial.name}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedFeature && featureDetails[selectedFeature] && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedFeature(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
              >
                <X size={18} className="text-gray-600" />
              </button>

              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-t-2xl">
                <div className="flex items-center gap-3 mb-2">
                  {(() => {
                    const feature = features.find(f => f.title === selectedFeature);
                    if (feature) {
                      const Icon = feature.icon;
                      return (
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <Icon size={22} className="text-white" />
                        </div>
                      );
                    }
                    return null;
                  })()}
                  <h3 className="text-xl font-bold text-white font-tech">
                    {selectedFeature}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {featureDetails[selectedFeature].intro}
                </p>

                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                  Key Benefits
                </h4>
                <ul className="space-y-2.5 mb-6">
                  {featureDetails[selectedFeature].benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight size={12} className="text-purple-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="yellow" size="lg" className="w-full" asChild>
                  <Link href="/contact">
                    {featureDetails[selectedFeature].cta}
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
