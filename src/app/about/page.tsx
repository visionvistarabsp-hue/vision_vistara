"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To simplify real estate through technology, market expertise and transparent processes — helping every stakeholder make more informed decisions.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To build a technology-driven real estate ecosystem that creates meaningful opportunities for investors, developers and property buyers across growing markets.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We believe every relationship begins with transparency. We use technology to make real estate smarter and more efficient. We focus on understanding needs before offering solutions. We continuously improve how we work, deliver and grow.",
  },
];

const milestones = [
  { year: "2018", event: "Company Founded", description: "Vision Vistara established in Bilaspur" },
  { year: "2019", event: "First Project Launch", description: "Successfully launched Yuvraj Park" },
  { year: "2020", event: "RERA Certification", description: "Got certified under RERA guidelines" },
  { year: "2022", event: "800+ Clients", description: "Achieved milestone of 800 happy clients" },
  { year: "2024", event: "Expansion", description: "Expanded operations to Raipur and Janjgir-Champa" },
  { year: "2026", event: "Market Leader", description: "Became leading real estate firm in Bilaspur" },
];

const team = [
  // Founder & CEO
  {
    name: "Aviral Sharma",
    role: "Founder & CEO",
    category: "leadership",
    image: "/images/aviral_shrama.jpeg",
  },
  // Sales Team
  {
    name: "Maniram Sahu",
    role: "Team Leader",
    category: "sales",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Lekhram Verma",
    role: "Team Leader",
    category: "sales",
    image: "/images/lekh_ram.jpeg",
  },
  {
    name: "Nitesh Jesawal",
    role: "Team Leader",
    category: "sales",
    image: "/images/nitish_jesawal.jpeg",
  },
  {
    name: "Sumit Dubey",
    role: "Team Leader",
    category: "sales",
    image: "/images/sumit_dubey.png",
  },
  {
    name: "Nitish Kumar",
    role: "Team Leader",
    category: "sales",
    image: "/images/nitish_kumar.jpeg",
  },
  {
    name: "Manish Dehari",
    role: "Graphic Designer",
    category: "creative",
    image: "/images/manish_dehari.png",
  },
  {
    name: "Kiyanshu Ratre",
    role: "Team Leader",
    category: "sales",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "G K Yadav",
    role: "Team Leader",
    category: "sales",
    image: "/images/gk_yadav.jpeg",
  },
  {
    name: "Sonu Thakur",
    role: "Team Leader",
    category: "sales",
    image: "/images/sonu_thakur.png",
  },
   {
    name: "Manish Yadav",
    role: "Team Leader",
    category: "sales",
    image: "/images/sonu_thakur.png",
  },
  // Accountant
  {
    name: "Sita Vastrakar",
    role: "Accountant",
    category: "accounts",
    image: "/images/sita_vastrakaar.png",
  },
  // Tech Team
  {
    name: "Nikhil Dubey",
    role: "Tech Lead",
    category: "tech",
    image: "/images/nikhil_dubey.jpeg",
  },
  // Creative Team
  {
    name: "Saumya Tiwari",
    role: "Creative Head",
    category: "creative",
    image: "/images/saumya_tiwari.jpeg",
  },
  {
    name: "Ayush Kori",
    role: "Creative Executive",
    category: "creative",
    image: "/images/ayush_kori.jpeg",
  },
];

export default function About() {
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
              src="https://assets.mixkit.co/videos/49855/49855-720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">About Vision Vistara</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-tech">
              <TypedText
                segments={[
                  { text: "Building a Smarter Future in Real Estate " },
                  
                ]}
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-2xl mx-auto">
             Vision Vistara is a technology-driven real estate company connecting investors, developers and property buyers through market expertise, transparent processes and smarter real-estate solutions.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild variant="yellow" size="lg">
                <a href="#our-team">Meet Our Team</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                    alt="Vision Vistara Office"
                    width={800}
                    height={600}
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-yellow-400 text-purple-900 p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sVision Vm font-small">RERA CERTIFIED</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <Badge variant="yellow" className="mb-3">Our Story</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6 font-tech">
                  Turning Vision Into{" "}
                  <span className="text-purple-600">Valuable Assets</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Vision Vistara began with a simple vision — to make real estate more transparent, accessible and opportunity-driven.

Since our journey began in 2018, we have grown by working closely with property buyers, developers and real-estate stakeholders. What started as a focused real-estate venture has evolved into a technology-driven business built around property, people and long-term relationships.

                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  From identifying promising projects and markets to supporting sales, marketing and property decisions, we continue to expand our capabilities with every opportunity.

Today, we are building Vision Vistara as a scalable real-estate platform — with technology, market expertise and trust at the centre of everything we do.
                </p>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2 mb-4 font-tech">
                  <span className="text-purple-600">2022</span> — Vision Vistara begins its journey
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle, text: "Growth expanding projects,Client and capabilities" },
                    { icon: CheckCircle, text: "Technology building technology-led real estate processes" },
                    { icon: CheckCircle, text: "TodayConnecting investors, developers & property buyers" },
                    { icon: CheckCircle, text: "Expanding into new markets" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <item.icon size={18} className="text-green-500" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 px-4 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Our Philosophy</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                Guided by Purpose <span className="text-purple-600">Driven by People</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">We believe real estate is not just about properties. It is about creating opportunities, building trust and making better decisions.</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                      <value.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-tech">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <Badge variant="yellow" className="mb-3">Our Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                Milestones & <span className="text-purple-600">Achievements</span>
              </h2>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Vertical line: left on mobile, center on md+ */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-purple-200" />
            {milestones.map((milestone, i) => (
              <FadeIn
                key={milestone.year}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.1}
              >
                <div
                  className={`relative flex md:items-center mb-12 pl-10 md:pl-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot: left on mobile, center on md+ */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg z-10" />
                  <div
                    className={`w-full md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                          {milestone.year}
                        </div>
                        <div className="font-semibold text-gray-900 mb-1">
                          {milestone.event}
                        </div>
                        <div className="text-sm text-gray-500">
                          {milestone.description}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="our-team"
        className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <Badge variant="yellow" className="mb-3">Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-tech">
                The People Behind<span className="text-purple-600"> Vision Vistara</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                A team bringing together real-estate expertise, technology, sales and creative thinking to build better experiences across the property journey.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto mt-4 rounded-full" />
            </div>
          </FadeIn>

          {/* Founder & CEO - Centered */}
          <div className="flex justify-center mb-10">
            <motion.div whileHover={{ y: -5 }} className="w-56">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-purple-200">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={team[0].image}
                    alt={team[0].name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                    <h3 className="text-base font-bold text-white font-tech">{team[0].name}</h3>
                    <p className="text-yellow-400 font-semibold text-xs">{team[0].role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sales Team - Compact Grid */}
          <FadeIn>
            <div className="text-center mb-5">
              <h3 className="text-lg font-bold text-gray-900 font-tech">
                Sales <span className="text-purple-600">Team</span>
              </h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 mb-10">
            {team.filter(m => m.category === "sales").map((member) => (
              <motion.div key={member.name} whileHover={{ y: -3 }} className="w-full">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-2 text-center">
                    <h3 className="text-[11px] font-bold text-gray-900 font-tech leading-tight truncate">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 text-[9px] mt-0.5 truncate">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Creative Team - Like Sales */}
          <FadeIn>
            <div className="text-center mb-5 mt-10">
              <h3 className="text-lg font-bold text-gray-900 font-tech">
                Creative <span className="text-purple-600">Team</span>
              </h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-10 max-w-xl mx-auto">
            {team.filter(m => m.category === "creative").map((member) => (
              <motion.div key={member.name} whileHover={{ y: -3 }} className="w-full">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                      <h3 className="text-[11px] font-bold text-white font-tech leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-yellow-400 text-[9px] mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tech & Accounts - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Tech */}
            <div>
              <div className="text-center mb-3">
                <h3 className="text-base font-bold text-gray-900 font-tech">
                  Tech <span className="text-purple-600">Team</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {team.filter(m => m.category === "tech").map((member) => (
                  <motion.div key={member.name} whileHover={{ y: -3 }}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                          <h3 className="text-xs font-bold text-white font-tech">{member.name}</h3>
                          <p className="text-yellow-400 text-[10px]">{member.role}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Accounts */}
            <div>
              <div className="text-center mb-3">
                <h3 className="text-base font-bold text-gray-900 font-tech">
                  Accounts <span className="text-purple-600">Team</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {team.filter(m => m.category === "accounts").map((member) => (
                  <motion.div key={member.name} whileHover={{ y: -3 }}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                          <h3 className="text-xs font-bold text-white font-tech">{member.name}</h3>
                          <p className="text-yellow-400 text-[10px]">{member.role}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      
    </>
  );
}
