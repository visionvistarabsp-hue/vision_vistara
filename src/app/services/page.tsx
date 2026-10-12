"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Home,
  TrendingUp,
  Cpu,
  ArrowRight,
  Phone,
  Target,
  Megaphone,
  Globe,
  Users,
  Share2,
  UserPlus,
  Rocket,
  Search,
  ListChecks,
  MapPin,
  Compass,
  FileText,
  Headphones,
  BarChart3,
  ClipboardCheck,
  PieChart,
  Database,
  LayoutDashboard,
  Zap,
  Layers,
  Sparkles,
  Puzzle,
  Route,
  Trophy,
  Network,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

interface Vertical {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
}

interface DetailItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const verticals: Vertical[] = [
  {
    icon: Building2,
    title: "For Developers",
    tagline: "Build. Position. Sell. Scale.",
    description:
      "End-to-end sales and marketing solutions designed to help developers launch, position and sell their projects effectively.",
    ctaLabel: "Explore Developer Solutions",
    href: "#developers",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop",
  },
  {
    icon: Home,
    title: "For Buyers",
    tagline: "Find the Right Property. With the Right Guidance.",
    description:
      "Discover suitable properties, understand your options and move towards the right purchase with confidence.",
    ctaLabel: "Explore Buyer Services",
    href: "#buyers",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "For Investors",
    tagline: "Make Better Real Estate Decisions.",
    description:
      "Get the insights and guidance you need to evaluate opportunities and make informed real estate investment decisions.",
    ctaLabel: "Explore Investment Services",
    href: "#investors",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
  },
  {
    icon: Cpu,
    title: "Real Estate Technology",
    tagline: "Technology That Moves Real Estate Forward.",
    description:
      "Technology-driven solutions designed to make real estate businesses more connected, efficient and scalable.",
    ctaLabel: "Explore Technology Solutions",
    href: "#technology",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  },
];

const developerItems: DetailItem[] = [
  {
    icon: Target,
    title: "Project Strategy & Positioning",
    description:
      "Understand the project, market and target audience to create a clear and effective go-to-market strategy.",
  },
  {
    icon: Megaphone,
    title: "Marketing & Lead Generation",
    description:
      "Build awareness, generate relevant enquiries and create a consistent pipeline of potential customers.",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns and communication designed to reach the right audience and support project sales.",
  },
  {
    icon: Users,
    title: "Site Sales & Sales Execution",
    description:
      "Turn enquiries into site visits, conversations and conversions through structured sales execution.",
  },
  {
    icon: Share2,
    title: "Channel Partner Management",
    description:
      "Build and manage channel relationships to expand project reach and create additional sales opportunities.",
  },
  {
    icon: UserPlus,
    title: "Customer Acquisition",
    description:
      "Manage the customer journey from the first enquiry to booking with a focused approach to conversion.",
  },
  {
    icon: Rocket,
    title: "Project Launch & Market Activation",
    description:
      "Plan and execute project launches and market activation initiatives that create visibility and market momentum.",
  },
];

const buyerItems: DetailItem[] = [
  {
    icon: Search,
    title: "Property Discovery",
    description:
      "Explore properties based on your location, budget, requirements and preferences.",
  },
  {
    icon: ListChecks,
    title: "Property Selection",
    description:
      "Compare suitable options and understand what matters before making a decision.",
  },
  {
    icon: MapPin,
    title: "Site Visit Assistance",
    description:
      "Coordinate property visits and help you experience the project firsthand.",
  },
  {
    icon: Compass,
    title: "Buying Guidance",
    description:
      "Get clarity on project details, configurations, pricing and other important considerations.",
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description:
      "Assistance through the documentation and booking process.",
  },
  {
    icon: Headphones,
    title: "Post-Booking Assistance",
    description:
      "Continued support wherever applicable, even after the booking is completed.",
  },
];

const investorItems: DetailItem[] = [
  {
    icon: BarChart3,
    title: "Market & Opportunity Analysis",
    description:
      "Identify relevant locations, projects and opportunities based on market conditions and potential.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description:
      "Understand the opportunity, potential risks and suitability before making an investment decision.",
  },
  {
    icon: ClipboardCheck,
    title: "Property Evaluation",
    description:
      "Evaluate projects based on factors such as location, positioning and market potential.",
  },
  {
    icon: PieChart,
    title: "Portfolio Guidance",
    description:
      "Get support in evaluating and planning your real estate investment opportunities.",
  },
];

const technologyItems: DetailItem[] = [
  {
    icon: Database,
    title: "CRM & Lead Management",
    description:
      "Organise enquiries, manage leads and create a more connected customer journey.",
  },
  {
    icon: LayoutDashboard,
    title: "Sales & Performance Dashboards",
    description:
      "Turn real-time business data into clearer insights for better decision-making.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Reduce repetitive processes, improve efficiency and allow teams to focus on what matters.",
  },
  {
    icon: Layers,
    title: "Digital Tools & Platforms",
    description:
      "Purpose-built technology solutions designed around real estate business requirements.",
  },
  {
    icon: Sparkles,
    title: "AI & Data Solutions",
    description:
      "Use emerging technologies and data-driven insights to improve productivity and decision-making.",
  },
  {
    icon: Puzzle,
    title: "Integrations & Custom Solutions",
    description:
      "Connect existing systems or build solutions around specific business needs.",
  },
];

const whyItems: DetailItem[] = [
  {
    icon: Building2,
    title: "Real Estate Understanding",
    description:
      "We understand the business, the market and the people behind every transaction.",
  },
  {
    icon: Route,
    title: "End-to-End Execution",
    description:
      "From strategy to execution, our approach is designed to keep the entire journey connected.",
  },
  {
    icon: Cpu,
    title: "Technology-Enabled Approach",
    description:
      "We combine real estate expertise with technology, data and smarter processes.",
  },
  {
    icon: Trophy,
    title: "Outcome Focused",
    description:
      "We focus on meaningful outcomes—not just activities.",
  },
  {
    icon: Network,
    title: "One Connected Ecosystem",
    description:
      "Developers, buyers, investors and technology come together through a broader real estate ecosystem.",
  },
];

function ServiceDetail({
  id,
  badge,
  title,
  lead,
  items,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  tone = "tint",
}: {
  id: string;
  badge?: string;
  title: string;
  lead: string;
  items: DetailItem[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  tone?: "white" | "tint";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 px-4 ${
        tone === "tint" ? "bg-purple-50/50" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn direction="right">
            <div>
              {badge && (
                <Badge variant="purple" className="mb-4">
                  {badge}
                </Badge>
              )}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-tech">
                {title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">{lead}</p>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent" />
            </div>
          </FadeIn>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="h-full rounded-2xl border border-purple-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-white" />
                </span>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Button variant="gradient" size="lg" asChild>
            <Link href={ctaHref}>
              {ctaLabel}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            alt="Modern real estate development"
            fill
            priority
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/85 via-purple-900/70 to-purple-950/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-28 pb-16">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-tech">
              <TypedText
                segments={[
                  { text: "Real Estate, " },
                  { text: "Simplified.", className: "text-yellow-400" },
                ]}
              />
            </h1>
            <p className="text-purple-100/85 text-lg max-w-2xl mx-auto mb-8">
              From project strategy and sales to property advisory and
              technology, Vision Vistara brings together the expertise and
              solutions needed to move real estate forward.
            </p>
            <Button variant="yellow" size="xl" asChild>
              <a href="#verticals">
                Explore Our Services
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ===== Four Service Verticals ===== */}
      <section id="verticals" className="scroll-mt-24 py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {verticals.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="group relative h-full rounded-3xl overflow-hidden border border-purple-100 bg-white shadow-lg shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/15 transition-all duration-300">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/85 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-3">
                      <span className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center">
                        <v.icon size={22} className="text-purple-900" />
                      </span>
                      <span className="text-white font-semibold">{v.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-tech">
                      {v.tagline}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-5">
                      {v.description}
                    </p>
                    <a
                      href={v.href}
                      className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 group-hover:gap-3 transition-all"
                    >
                      {v.ctaLabel}
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== Developer Solutions ===== */}
      <ServiceDetail
        id="developers"
        badge="For Developers"
        title="End-to-End Project Sales & Marketing"
        lead="From the first strategy discussion to the final conversion, we work alongside developers to create demand, drive sales and build momentum."
        items={developerItems}
        ctaLabel="Talk to Our Developer Solutions Team"
        ctaHref="/contact"
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop"
        imageAlt="Developers reviewing a project plan"
        tone="tint"
      />

      {/* ===== Buyer Services ===== */}
      <ServiceDetail
        id="buyers"
        badge="For Buyers"
        title="Your Property Journey, With the Right Guidance."
        lead="Buying a property is a significant decision. We help you navigate the journey with better information, relevant options and the right support."
        items={buyerItems}
        ctaLabel="Find Your Property"
        ctaHref="/portfolio"
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop"
        imageAlt="A residential property exterior"
        tone="white"
      />

      {/* ===== Investor Services ===== */}
      <ServiceDetail
        id="investors"
        badge="For Investors"
        title="Real Estate Decisions Backed by Insight."
        lead="Whether you're exploring your first investment or evaluating your next opportunity, we help you approach real estate with greater clarity."
        items={investorItems}
        ctaLabel="Talk to an Investment Advisor"
        ctaHref="/contact"
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop"
        imageAlt="Investment analysis and planning"
        tone="tint"
      />

      {/* ===== Technology Solutions ===== */}
      <ServiceDetail
        id="technology"
        badge="Coming Soon"
        title="Technology for a Smarter Real Estate Ecosystem."
        lead="We are building technology solutions designed specifically around the evolving needs of the real estate industry."
        items={technologyItems}
        ctaLabel="Explore Real Estate Technology"
        ctaHref="/contact"
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop"
        imageAlt="Real estate technology platform"
        tone="white"
      />

      {/* ===== Why Vision Vistara ===== */}
      <section className="py-24 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-tech">
              One Partner. Multiple Real Estate Solutions.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Real estate is interconnected. Strategy impacts marketing.
              Marketing impacts sales. Technology impacts how efficiently
              everything works.
            </p>
            <p className="text-purple-700 text-lg font-medium">
              That&apos;s why we bring multiple capabilities together under one
              ecosystem.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <div className="h-full rounded-2xl border border-purple-100 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-purple-900" />
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-tech">
              Looking for the Right Real Estate Solution?
            </h2>
            <p className="text-purple-100/85 text-lg mb-8 max-w-2xl mx-auto">
              Whether you&apos;re developing a project, looking for your next
              property, exploring an investment or looking to make your real
              estate business more technology-driven—we&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="yellow" size="xl" asChild>
                <Link href="/contact">
                  <Phone size={18} className="mr-2" />
                  Talk to Vision Vistara
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/site-visit">
                  Book a Site Visit
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
