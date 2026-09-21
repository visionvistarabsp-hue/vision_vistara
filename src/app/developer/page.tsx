"use client";

import Link from "next/link";
import {
  Building2,
  Megaphone,
  Users,
  BarChart3,
  Target,
  TrendingUp,
  CheckCircle,
  Phone,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

const benefits = [
  {
    icon: Building2,
    title: "Project Sales & Marketing",
    description: "End-to-end sales and marketing solutions designed to maximize your project's reach and conversions.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Targeted lead generation campaigns that bring qualified buyers directly to your projects.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Multi-channel digital marketing strategies including social media, SEO, and paid campaigns.",
  },
  {
    icon: Target,
    title: "Sales Strategy",
    description: "Data-backed sales strategies tailored to your project's market position and target audience.",
  },
  {
    icon: TrendingUp,
    title: "Customer Acquisition",
    description: "Proven customer acquisition funnels that convert prospects into property owners efficiently.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Real-time dashboards and analytics to track sales performance, ROI, and market response.",
  },
];

const services = [
  {
    icon: Award,
    title: "Market Intelligence",
    description: "Deep market research and competitor analysis to position your project for maximum impact.",
  },
  {
    icon: Target,
    title: "Strategic Positioning",
    description: "We help you identify the right pricing, timing, and audience for your project launch.",
  },
];

export default function Developer() {
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
              src="https://assets.mixkit.co/videos/49855/49855-720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">For Developers</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-tech">
              <TypedText
                segments={[
                  { text: "Your Project. " },
                  { text: "Our Sales", className: "text-yellow-400" },
                  { text: " Expertise." },
                ]}
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-2xl mx-auto">
              We partner with builders and developers to drive project sales
              through structured sales strategy, marketing, technology and
              market expertise.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Our Partnership</Badge>
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

      {/* Why Partner With Us */}
      <section className="py-24 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Why Partner With Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                Additional <span className="text-purple-600">Advantages</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center mb-5">
                      <service.icon size={28} className="text-purple-900" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-tech">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
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
                    "Project Sales & Marketing",
                    "Lead Generation",
                    "Digital Marketing",
                    "Sales Strategy",
                    "Customer Acquisition",
                    "Market Intelligence",
                    "Performance Tracking",
                    "Strategic Positioning",
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
              Partner With Us
            </h2>
            <p className="text-purple-100/80 mb-8 max-w-2xl mx-auto">
              Let Vision Vistara be your trusted sales and marketing partner.
              Together, we can turn your projects into successful developments.
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
