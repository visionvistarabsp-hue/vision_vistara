"use client";

import Link from "next/link";
import {
  Home,
  Eye,
  Shield,
  Users,
  FileText,
  CheckCircle,
  Phone,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

const benefits = [
  {
    icon: Home,
    title: "Curated Property Options",
    description: "Handpicked residential, commercial and investment properties that match your requirements and budget.",
  },
  {
    icon: Eye,
    title: "Transparent Information",
    description: "Complete property details, pricing, and documentation upfront — no hidden costs or surprises.",
  },
  {
    icon: Shield,
    title: "RERA-Compliant Opportunities",
    description: "Every property we list is RERA certified, ensuring legal safety and regulatory compliance.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Professional advisors with deep local market knowledge to guide you through every step.",
  },
  {
    icon: FileText,
    title: "End-to-End Assistance",
    description: "From property search to registration — we handle the entire buying process for you.",
  },
  {
    icon: Building2,
    title: "Better-Informed Decisions",
    description: "Market insights, area analysis, and ROI projections to help you make confident choices.",
  },
];

const processSteps = [
  { step: "01", title: "Share Requirements", description: "Tell us your budget, location preference, and property type." },
  { step: "02", title: "Curated Listings", description: "We present handpicked options that match your needs." },
  { step: "03", title: "Site Visits", description: "Visit shortlisted properties with our guided tours." },
  { step: "04", title: "Legal Verification", description: "We verify all documents and RERA compliance for you." },
  { step: "05", title: "Deal Closure", description: "Complete the purchase with transparent documentation." },
];

export default function Buyers() {
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
              src="https://assets.mixkit.co/videos/1588/1588-720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">For Property Buyers</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-tech">
              <TypedText
                segments={[
                  { text: "The Right " },
                  { text: "Property", className: "text-yellow-400" },
                  { text: ". The Right Guidance." },
                ]}
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-2xl mx-auto">
              We help buyers discover suitable residential, commercial and
              investment opportunities with transparent information and
              professional guidance throughout the property-buying journey.
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

      {/* How It Works */}
      <section className="py-24 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">How It Works</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                Your Property <span className="text-purple-600">Buying Journey</span>
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-purple-200 -translate-y-1/2" />
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <FadeIn key={step.step} delay={i * 0.1}>
                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg shadow-purple-500/30">
                      <span className="text-white font-bold text-lg">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-tech">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
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
                    "Curated Property Options",
                    "Transparent Information",
                    "RERA-Compliant Opportunities",
                    "Expert Guidance",
                    "End-to-End Assistance",
                    "Better-Informed Decisions",
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
              Explore Properties
            </h2>
            <p className="text-purple-100/80 mb-8 max-w-2xl mx-auto">
              Find your dream property with Vision Vistara. Browse our
              curated portfolio of residential and commercial properties.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="yellow" size="xl" asChild>
                <Link href="/portfolio">
                  View All Properties
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">
                  <Phone size={18} className="mr-2" />
                  Talk to an Expert
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
