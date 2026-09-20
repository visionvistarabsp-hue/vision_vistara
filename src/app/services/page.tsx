"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Home,
  TrendingUp,
  Users,
  FileText,
  Banknote,
  Shield,
  MapPin,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

const services = [
  {
    icon: Building2,
    title: "Builders & Developers",
    description:
      "We are a leading builders & developers company in Chhattisgarh offering comprehensive housing solutions for every need.",
    features: [
      "Residential Projects",
      "Commercial Complexes",
      "Township Development",
      "Infrastructure Projects",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  },
  {
    icon: Home,
    title: "Real Estate Consultancy",
    description:
      "Our expert consultants provide personalized guidance to help you make informed property decisions.",
    features: [
      "Property Valuation",
      "Market Analysis",
      "Investment Guidance",
      "Legal Advisory",
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Make smart investment decisions with our expert advisory services. We analyze market trends and identify high-growth opportunities.",
    features: [
      "ROI Analysis",
      "Market Trends",
      "Risk Assessment",
      "Portfolio Planning",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    icon: Users,
    title: "Property Management",
    description:
      "We offer end-to-end property management services to ensure your investments are well-maintained and generate optimal returns.",
    features: [
      "Tenant Management",
      "Maintenance Services",
      "Rent Collection",
      "Legal Compliance",
    ],
    image: "https://images.unsplash.com/photo-156020653-9e0e4c89eb11?w=800&h=600&fit=crop",
  },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Share your requirements and budget with our expert team." },
  { step: "02", title: "Property Search", description: "We curate properties that match your specific needs." },
  { step: "03", title: "Site Visit", description: "Visit shortlisted properties with our guided tours." },
  { step: "04", title: "Documentation", description: "We handle all paperwork and legal documentation." },
  { step: "05", title: "Deal Closure", description: "Complete the transaction with transparent processes." },
];

export default function Services() {
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
              src="/services-video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-cursive">
              <TypedText
                segments={[
                  { text: "Comprehensive " },
                  { text: "Real Estate", className: "text-yellow-400" },
                  { text: " Solutions" },
                ]}
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-2xl mx-auto">
              From property consultancy to investment advisory, we offer a
              complete range of real estate services tailored to your needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <FadeIn direction={i % 2 === 0 ? "left" : "right"}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-tech">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="gradient" size="lg" asChild>
                    <Link href="/contact">
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn
                direction={i % 2 === 0 ? "right" : "left"}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-3xl blur-2xl" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">How We Work</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                Our <span className="text-purple-600">Process</span>
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

      {/* Why Choose Us */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                The Vision Vistara{" "}
                <span className="text-purple-600">Difference</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "RERA Certified", description: "100% compliant with regulatory standards" },
              { icon: MapPin, title: "Prime Locations", description: "Properties in Bilaspur's best areas" },
              { icon: FileText, title: "Transparent Deals", description: "Clear documentation and honest pricing" },
              { icon: Banknote, title: "Best Value", description: "Competitive prices with high ROI potential" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon size={28} className="text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-tech">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-tech">
              Ready to Start Your Property Journey?
            </h2>
            <p className="text-purple-100/80 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let our experts guide
              you to your perfect property.
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
