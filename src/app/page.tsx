"use client";

import {
  useRef,
  useState,
  useSyncExternalStore,
  type PointerEvent,
  type SyntheticEvent,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
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
import { CountUp, FadeIn } from "@/components/Animations";

const stats = [
  { target: 800, suffix: "+", label: "Happy Clients" },
  { target: 8, suffix: "+", label: "Projects Completed" },
  { target: 12, suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "%", label: "RERA Certified" },
];

const finePointerQuery = "(hover: hover) and (pointer: fine)";

function subscribeToFinePointer(onChange: () => void) {
  const mediaQuery = window.matchMedia(finePointerQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getFinePointerSnapshot() {
  return window.matchMedia(finePointerQuery).matches;
}

function getServerFinePointerSnapshot() {
  return false;
}

const projects = [
  {
    id: 1,
    name: "Yuvraj Park",
    location: "Sakri, Bilaspur",
    type: "Ongoing",
    tagline: "Modern Homes, A Better Tomorrow",
    bhk: "2BHK & 3BHK",
    units: "108 Units",
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
    units: "93 Units",
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
    units: "35 Units",
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

export default function HomePage() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const supports3dEntrance = useSyncExternalStore(
    subscribeToFinePointer,
    getFinePointerSnapshot,
    getServerFinePointerSnapshot,
  );
  const [activeHeroVideo, setActiveHeroVideo] = useState<0 | 1>(0);
  const heroVideoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)] as const;
  const heroVideoCrossfadeRef = useRef(false);
  const heroVideoParallaxRef = useRef<HTMLDivElement>(null);
  const testimonialTrackRef = useRef<HTMLDivElement>(null);

  const handleHeroPointerMove = (event: PointerEvent<HTMLElement>) => {
    const videoLayer = heroVideoParallaxRef.current;
    if (
      !videoLayer ||
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
    videoLayer.style.setProperty("--hero-parallax-x", `${-offsetX * 8}px`);
    videoLayer.style.setProperty("--hero-parallax-y", `${-offsetY * 6}px`);
  };

  const resetHeroParallax = () => {
    const videoLayer = heroVideoParallaxRef.current;
    videoLayer?.style.setProperty("--hero-parallax-x", "0px");
    videoLayer?.style.setProperty("--hero-parallax-y", "0px");
  };

  const handleHeroVideoTimeUpdate = (
    event: SyntheticEvent<HTMLVideoElement>,
    videoIndex: 0 | 1,
  ) => {
    if (videoIndex !== activeHeroVideo) {
      return;
    }

    const video = event.currentTarget;
    if (video.currentTime < 1) {
      heroVideoCrossfadeRef.current = false;
      return;
    }

    if (
      heroVideoCrossfadeRef.current ||
      !Number.isFinite(video.duration) ||
      video.duration - video.currentTime > 0.9
    ) {
      return;
    }

    const incomingVideo = heroVideoRefs[videoIndex === 0 ? 1 : 0].current;
    if (!incomingVideo) {
      return;
    }

    heroVideoCrossfadeRef.current = true;
    incomingVideo.currentTime = 0;
    void incomingVideo
      .play()
      .then(() => setActiveHeroVideo(videoIndex === 0 ? 1 : 0))
      .catch((error: unknown) => {
        heroVideoCrossfadeRef.current = false;
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        console.error("Unable to start the hero video loop crossfade.", error);
      });
  };

  return (
    <>
      {/* Hero Section - Fullscreen Editorial Video */}
      <section
        className="relative min-h-[720px] h-[100svh] max-h-[960px] overflow-hidden"
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetHeroParallax}
      >
        {/* Fullscreen Video Background */}
        <div className="absolute inset-0 z-0 bg-black">
          <div ref={heroVideoParallaxRef} className="hero-video-parallax">
            {([0, 1] as const).map((videoIndex) => (
              <video
                key={videoIndex}
                ref={heroVideoRefs[videoIndex]}
                autoPlay={videoIndex === activeHeroVideo}
                loop
                muted
                playsInline
                preload="auto"
                onTimeUpdate={(event) => handleHeroVideoTimeUpdate(event, videoIndex)}
                onTransitionEnd={() => {
                  if (videoIndex !== activeHeroVideo) {
                    const video = heroVideoRefs[videoIndex].current;
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }
                }}
                className={`hero-video-zoom hero-video-loop-frame absolute inset-0 h-full w-full object-cover object-center ${
                  videoIndex === activeHeroVideo ? "opacity-100" : "opacity-0"
                }`}
              >
                <source src="/video/vision_video.mp4" type="video/mp4" />
              </video>
            ))}
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,7,14,.82)_0%,rgba(10,7,14,.42)_48%,rgba(10,7,14,.12)_74%,rgba(10,7,14,.36)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55" />
        </div>

        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="flex h-full items-center pb-24 pt-28 sm:pb-28 md:pb-32">
            <div className="w-full max-w-[650px]">
              <FadeIn className="hero-content-visible" direction="right" delay={0.05}>
                <p className="mb-5 text-xs sm:text-sm font-medium uppercase tracking-[0.28em] text-white/75">
                  Bilaspur real estate
                </p>
              </FadeIn>

              <FadeIn className="hero-content-visible" direction="right" delay={0.12}>
                <h1 className="text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.82] tracking-[-0.055em] text-white">
                  <span className="block font-semibold">Start</span>
                  <span className="mt-2 block font-cursive text-[1.12em] font-normal leading-[0.9] text-yellow-300">
                    your future.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn className="hero-content-visible" direction="right" delay={0.22}>
                <p className="mt-7 max-w-[520px] text-sm sm:text-base leading-relaxed text-white/75">
                  RERA-compliant homes and investment opportunities, guided by local
                  expertise and complete transparency.
                </p>
              </FadeIn>

              <FadeIn className="hero-content-visible" direction="right" delay={0.32}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="yellow" size="xl" className="rounded-full" asChild>
                    <Link href="/portfolio">
                      Explore Properties
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="xl"
                    className="rounded-full border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                    asChild
                  >
                    <Link href="/contact">
                      <Phone size={18} className="mr-2" />
                      Talk to an Expert
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={prefersReducedMotion ? { y: 0 } : { y: [0, 10, 0] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-12 md:-mt-20 z-30 px-4">
        <FadeIn>
          <div className="stats-panel-float">
            <Card
              onPointerMove={(event) => updatePointerTilt(event, 2)}
              onPointerLeave={resetPointerTilt}
              className="stats-panel-tilt max-w-5xl mx-auto !bg-white"
            >
              <CardContent className="p-4 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={prefersReducedMotion ? { duration: 0 } : { delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-700 mb-1">
                        <CountUp target={stat.target} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </FadeIn>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Why Choose Us</Badge>
              <h2 className="premium-heading text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                Built For Every Side of{" "}
                <span className="text-purple-600">Real Estate</span>
              </h2>
              <p className="text-gray-500 mt-3 text-sm md:text-base max-w-xl mx-auto">
                We create value across the real-estate ecosystem — for investors, developers and property buyers.
              </p>
            </div>
          </FadeIn>

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
            style={{ perspective: 1200 }}
          >
            {features.map((feature, index) => {
              const isInvestor = index === 0;
              const isBuyer = feature.title === "Buyer";
              const finalPosition = {
                opacity: 1,
                x: "0%",
                y: "0%",
                z: 0,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
              };
              const initialPosition = {
                opacity: 0,
                x: isBuyer ? "0%" : isInvestor ? "-175%" : "175%",
                y: isBuyer ? "0%" : "-150%",
                z: supports3dEntrance ? (isBuyer ? -140 : -320) : 0,
                scale: isBuyer ? 0.92 : 0.68,
                rotateX: supports3dEntrance ? (isBuyer ? 8 : 22) : 0,
                rotateY: supports3dEntrance
                  ? isInvestor
                    ? 18
                    : isBuyer
                      ? 0
                      : -18
                  : 0,
              };

              return (
                <motion.div
                  key={`${feature.title}-${supports3dEntrance ? "3d" : "flat"}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  className="h-full"
                >
                  <motion.div
                    variants={{
                      hidden: prefersReducedMotion ? finalPosition : initialPosition,
                      visible: finalPosition,
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.9,
                      delay: prefersReducedMotion ? 0 : index * 0.17,
                      ease: "easeOut",
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: isBuyer
                        ? "center center"
                        : isInvestor
                          ? "left top"
                          : "right top",
                    }}
                    className="h-full"
                  >
                    <Card
                      onPointerMove={(event) => updatePointerTilt(event, 3)}
                      onPointerLeave={resetPointerTilt}
                      className="group feature-card-tilt hover:shadow-xl transition-all duration-300 border-white/60 h-full"
                    >
                      <CardContent className="p-6">
                        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-purple-600 transition-colors">
                          <feature.icon
                            size={28}
                            className="feature-icon-motion text-purple-600 group-hover:text-white transition-colors"
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
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 px-4 bg-[#F4EFE8] dark:bg-[#18171C]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-8 md:mb-10">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple-700 dark:text-yellow-400">
                  Featured projects
                </p>
                <h2 className="premium-heading text-4xl md:text-6xl leading-none text-gray-900 dark:text-white">
                  <span className="block font-semibold">What</span>
                  <span className="block font-cursive text-purple-600">we build.</span>
                </h2>
              </div>
              <Button variant="ghost" className="mb-1 text-gray-900 hover:text-purple-700 dark:text-white dark:hover:text-yellow-300" asChild>
                <Link href="/portfolio">
                  View All Projects
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-[1.55fr_.75fr] gap-5 md:gap-6">
            {projects.map((project, index) => {
              const initialPosition = prefersReducedMotion
                ? { opacity: 1, x: 0, scale: 1 }
                : {
                    opacity: 0,
                    x: index === 0 ? -64 : index === 2 ? 64 : 0,
                    scale: index === 1 ? 0.97 : 0.98,
                  };

              return (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  className={index === 0 ? "lg:row-span-2" : ""}
                >
                  <motion.div
                    className="project-card-entrance"
                    variants={{
                      hidden: initialPosition,
                      visible: { opacity: 1, x: 0, scale: 1 },
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 1.05,
                      delay: prefersReducedMotion ? 0 : index * 0.18,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Card
                      onPointerMove={(event) => updatePointerTilt(event, 1.5)}
                      onPointerLeave={resetPointerTilt}
                      className={`group project-card-motion relative h-[280px] md:h-[320px] overflow-hidden border-0 bg-gray-900 shadow-xl ${
                        index === 0 ? "lg:h-[526px]" : "lg:h-[250px]"
                      }`}
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="project-image-motion object-cover transition-transform duration-700"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
                        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 md:p-6">
                          <Badge className="bg-purple-600/70 text-white backdrop-blur-md border-purple-400/20">
                            {project.type}
                          </Badge>
                          <span className="font-cursive text-2xl text-white/90">
                            {String(index + 1).padStart(2, "0")}
                            <span className="text-sm text-white/50">/{String(projects.length).padStart(2, "0")}</span>
                          </span>
                        </div>
                        <CardContent className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                          <div className="border-l border-yellow-400/70 pl-4">
                            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                              Residential
                            </p>
                            <h3 className={`font-cursive font-normal text-white ${index === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                              {project.name}
                            </h3>
                          </div>
                          <div className="mt-4 flex items-end justify-between">
                            <div>
                              <div className="flex items-center gap-2 text-xs md:text-sm text-white/75">
                                <MapPin size={13} className="text-yellow-400" />
                                {project.location}
                              </div>
                              {index === 0 && (
                                <div className="mt-3 hidden sm:flex items-center gap-5 text-xs text-white/75">
                                  <span className="flex items-center gap-1.5">
                                    <HomeIcon size={13} className="text-yellow-400" />
                                    {project.bhk}
                                  </span>
                                  <span className="flex items-center gap-1.5">
                                    <Layers size={13} className="text-yellow-400" />
                                    {project.units}
                                  </span>
                                </div>
                              )}
                            </div>
                            <Button variant="ghost" size="sm" className="rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 p-2" asChild>
                              <Link href="/contact" aria-label={`View ${project.name}`}>
                                <ChevronRight size={16} />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
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
      <motion.section
        className="py-16 md:py-24 px-4 bg-purple-50"
        onViewportEnter={() => testimonialTrackRef.current?.classList.add("is-visible")}
        onViewportLeave={() => testimonialTrackRef.current?.classList.remove("is-visible")}
        viewport={{ amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                What Our <span className="text-purple-600">Clients Say</span>
              </h2>
            </div>
          </FadeIn>

          <div className="testimonial-marquee">
            <div
              ref={testimonialTrackRef}
              className="testimonial-marquee__track"
            >
              {[false, true].map((isDuplicate) => (
                <div
                  key={isDuplicate ? "duplicate-testimonials" : "testimonials"}
                  className="testimonial-marquee__group"
                  aria-hidden={isDuplicate}
                  inert={isDuplicate}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.name}
                      className="testimonial-marquee__item"
                    >
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
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <FadeIn>
            <div className="text-center mt-12">
              <Button variant="gradient" size="lg" asChild>
                <a
                  href="https://share.google/oaD430n6BLJYfZOQg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More Reviews
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </motion.section>

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
