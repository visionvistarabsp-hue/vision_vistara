"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  User,
  Building2,
  CalendarClock,
  FileText,
  Send,
  CheckCircle,
  MessageCircle,
  Clock,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

const projects = [
  "Yuvraj Park",
  "Dream Residency Phase 2",
  "Amol Sona Heights",
  "Vaikunth Residency",
  "Hearth Homes",
  "Orchid Farm",
  "Not Sure Yet",
];

const perks = [
  {
    icon: Compass,
    title: "Guided Site Tour",
    description: "Walk the actual plot or apartment with our team and understand the layout first-hand.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Answers",
    description: "Get straight answers on pricing, approvals, amenities and construction status.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Pick a date and time that works for you — including weekends and evenings.",
  },
];

export default function SiteVisit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    preferred: "",
    address: "",
    note: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const preferred = formData.preferred
      ? new Date(formData.preferred).toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        })
      : "Not specified";

    const message = [
      "New Site Visit Request",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email || "Not provided"}`,
      `Contact Number: ${formData.phone}`,
      `Project Interested In: ${formData.project || "Not specified"}`,
      `Preferred Time & Date: ${preferred}`,
      `Address: ${formData.address || "Not provided"}`,
      `Note: ${formData.note || "None"}`,
    ].join("\n");

    window.open(
      `https://wa.me/919232525253?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setIsSubmitted(true);
  };

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
              src="https://assets.mixkit.co/videos/1588/1588-720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">Book a Site Visit</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-tech">
              <TypedText
                segments={[
                  { text: "See Your Future " },
                  { text: "Home in Person.", className: "text-yellow-400" },
                ]}
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-2xl mx-auto">
              Schedule a visit to any of our residential plots or apartments. Fill in your details
              and we&apos;ll confirm your appointment on WhatsApp.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <FadeIn direction="left">
              <Card className="shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <CalendarClock size={24} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 font-tech">
                        Book Your Visit
                      </h2>
                      <p className="text-gray-500 text-sm">
                        We&apos;ll confirm your slot on WhatsApp
                      </p>
                    </div>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={40} className="text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-tech">
                        Request Ready!
                      </h3>
                      <p className="text-gray-500 mb-6">
                        We&apos;ve opened WhatsApp with your details. Send the message and our team
                        will confirm your site visit shortly.
                      </p>
                      <Button
                        variant="gradient"
                        size="lg"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Book Another Visit
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="visit-name">
                            <User size={14} className="inline mr-1" />
                            Full Name *
                          </Label>
                          <Input
                            id="visit-name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="visit-phone">
                            <Phone size={14} className="inline mr-1" />
                            Contact Number *
                          </Label>
                          <Input
                            id="visit-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 9232525253"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="visit-email">
                            <Mail size={14} className="inline mr-1" />
                            Email Address
                          </Label>
                          <Input
                            id="visit-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="visit-project">
                            <Building2 size={14} className="inline mr-1" />
                            Project Interested In
                          </Label>
                          <select
                            id="visit-project"
                            value={formData.project}
                            onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select a project</option>
                            {projects.map((project) => (
                              <option key={project} value={project}>
                                {project}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="visit-preferred">
                          <CalendarClock size={14} className="inline mr-1" />
                          Preferred Time &amp; Date
                        </Label>
                        <Input
                          id="visit-preferred"
                          type="datetime-local"
                          value={formData.preferred}
                          onChange={(e) => setFormData({ ...formData, preferred: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="visit-address">
                          <MapPin size={14} className="inline mr-1" />
                          Address
                        </Label>
                        <Input
                          id="visit-address"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Your current address / pickup location"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="visit-note">
                          <FileText size={14} className="inline mr-1" />
                          Note
                        </Label>
                        <Textarea
                          id="visit-note"
                          rows={4}
                          value={formData.note}
                          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                          placeholder="Anything specific you'd like us to arrange for your visit..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="gradient"
                        className="w-full"
                        size="lg"
                      >
                        <Send size={18} className="mr-2" />
                        Book Site Visit on WhatsApp
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>

            {/* Why Visit + Contact Info */}
            <FadeIn direction="right">
              <div className="space-y-6">
                <div>
                  <Badge variant="purple" className="mb-4">What to Expect</Badge>
                  <h2 className="text-3xl font-bold text-gray-900 font-tech">
                    A Visit That Answers Everything
                  </h2>
                  <p className="text-gray-500 mt-3">
                    No pressure, no guesswork. Just an honest look at the property with the people
                    who know it best.
                  </p>
                </div>

                <StaggerContainer className="space-y-4">
                  {perks.map((perk) => (
                    <StaggerItem key={perk.title}>
                      <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                            <perk.icon size={22} className="text-purple-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1 font-tech">
                              {perk.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{perk.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <Card className="bg-gradient-to-r from-purple-600 to-purple-800 border-0 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-tech">
                      Prefer to Talk First?
                    </h3>
                    <p className="text-purple-100/80 mb-4">
                      Call us directly or message on WhatsApp and we&apos;ll help you pick a
                      convenient time.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="secondary" size="lg" asChild>
                        <a href="tel:+919232525253">
                          <Phone size={16} className="mr-2" />
                          Call Now
                        </a>
                      </Button>
                      <Button variant="default" size="lg" className="bg-green-500 hover:bg-green-600" asChild>
                        <a href="https://wa.me/919232525253" target="_blank" rel="noopener noreferrer">
                          <MessageCircle size={16} className="mr-2" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
