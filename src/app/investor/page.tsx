"use client";

import Link from "next/link";
import {
  TrendingUp,
  Shield,
  BarChart3,
  Eye,
  Rocket,
  Globe,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

const benefits = [
  {
    icon: TrendingUp,
    title: "Business Growth Opportunity",
    description: "Tap into Chhattisgarh's fastest-growing real estate market with high-potential investment avenues.",
  },
  {
    icon: BarChart3,
    title: "Real-Estate Market Expertise",
    description: "Leverage our deep local market knowledge and data-driven insights for smarter investment decisions.",
  },
  {
    icon: Globe,
    title: "Technology-Led Operations",
    description: "Our tech-first approach ensures efficiency, transparency, and real-time tracking of your investments.",
  },
  {
    icon: Eye,
    title: "Transparent Business Processes",
    description: "Complete visibility into operations, finances, and project progress — no hidden agendas.",
  },
  {
    icon: Rocket,
    title: "Scalable Expansion Across Markets",
    description: "Join a growing platform expanding across multiple cities in Chhattisgarh and beyond.",
  },
  {
    icon: Shield,
    title: "RERA Certified & Compliant",
    description: "All projects are fully RERA compliant, ensuring regulatory safety for your investments.",
  },
];

export default function Investor() {
  return (
    <>
      {/* Hero Section */}
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
              src="https://assets.mixkit.co/videos/49843/49843-720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">For Investors</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-tech">
              <TypedText
                segments={[
                  { text: "Invest with " },
                  { text: "Vision", className: "text-yellow-400" },
                  { text: ". Build with Confidence." },
                ]}
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-2xl mx-auto">
              Vision Vistara is building a technology-driven real-estate business
              focused on scalable growth, strong market opportunities and
              transparent operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                Built For Every Side of{" "}
                <span className="text-purple-600">Real Estate</span>
              </h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                We create value across the real-estate ecosystem — for
                investors, developers and property buyers.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-5">
                      <benefit.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-tech">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Investment Stats */}
      <section className="py-24 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Our Track Record</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                Numbers That <span className="text-purple-600">Speak</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "800+", label: "Happy Investors" },
              { number: "8+", label: "Projects Delivered" },
              { number: "12+", label: "Years Experience" },
              { number: "100%", label: "RERA Certified" },
            ].map((stat, i) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-500">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Key Benefits List */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-tech">
                Key <span className="text-purple-600">Benefits</span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn>
            <Card className="shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Business growth opportunity",
                    "Real-estate market expertise",
                    "Technology-led operations",
                    "Transparent business processes",
                    "Scalable expansion across markets",
                    "RERA certified & compliant projects",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-green-500 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-tech">
              Explore Investment Opportunities
            </h2>
            <p className="text-purple-100/80 mb-8 max-w-2xl mx-auto">
              Partner with Vision Vistara and be part of Chhattisgarh&apos;s
              most trusted real estate growth story.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="yellow" size="xl" asChild>
                <Link href="/contact">
                  <Phone size={18} className="mr-2" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="https://wa.me/919232525253" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
