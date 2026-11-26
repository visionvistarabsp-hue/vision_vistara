"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  User,
  CalendarClock,
  FileText,
  Send,
  CheckCircle,
  MessageCircle,
  Clock,
  ShieldCheck,
  Users,
  IndianRupee,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

const interests = [
  "Buying Property",
  "Selling Property",
  "Investment Advice",
  "Residential Plot",
  "Apartment / Flat",
  "Commercial Property",
  "Project / Developer Partnership",
  "Other",
];

const budgets = [
  "Under ₹25 Lakh",
  "₹25 Lakh - ₹50 Lakh",
  "₹50 Lakh - ₹1 Crore",
  "₹1 Crore - ₹2 Crore",
  "Above ₹2 Crore",
  "Not Decided Yet",
];

const perks = [
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Talk to our experienced team who understand the Bilaspur and Chhattisgarh real estate market.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Advice",
    description:
      "Get honest, RERA-aware guidance on pricing, options and next steps without any pressure.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description:
      "Share your details and we will connect with you to schedule a consultation at your convenience.",
  },
];

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    budget: "",
    preferred: "",
    message: "",
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
      "New Free Consultation Request",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || "Not provided"}`,
      `Interested In: ${formData.interest || "Not specified"}`,
      `Budget: ${formData.budget || "Not specified"}`,
      `Preferred Time: ${preferred}`,
      `Message: ${formData.message || "None"}`,
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
      {/* Hero Section */}
      <section className="relative min-h-[560px] h-[72svh] max-h-[760px] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,6,54,.82)_0%,rgba(26,6,54,.45)_48%,rgba(26,6,54,.18)_100%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">
              Free Consultation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-tech">
              <TypedText
                segments={[
                  { text: "Get Expert " },
                  { text: "Property Advice", className: "text-yellow-400" },
                ]}
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-2xl mx-auto">
              Tell us your requirements and our team will guide you with the
              right property options, pricing insights and next steps.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Consultation Form */}
            <FadeIn direction="left">
              <Card className="shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 font-tech">
                        Request a Free Consultation
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Share your details and we&apos;ll connect with you
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
                        Request Sent!
                      </h3>
                      <p className="text-gray-500 mb-6">
                        We&apos;ve opened WhatsApp with your details. Send the
                        message and our team will reach out to you shortly.
                      </p>
                      <Button
                        variant="gradient"
                        size="lg"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Request
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="consult-name">
                            <User size={14} className="inline mr-1" />
                            Full Name *
                          </Label>
                          <Input
                            id="consult-name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="consult-phone">
                            <Phone size={14} className="inline mr-1" />
                            Phone Number *
                          </Label>
                          <Input
                            id="consult-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="+91 9232525253"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="consult-email">
                            <Mail size={14} className="inline mr-1" />
                            Email Address
                          </Label>
                          <Input
                            id="consult-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="consult-interest">
                            <Target size={14} className="inline mr-1" />
                            Interested In
                          </Label>
                          <select
                            id="consult-interest"
                            value={formData.interest}
                            onChange={(e) =>
                              setFormData({ ...formData, interest: e.target.value })
                            }
                            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select your interest</option>
                            {interests.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="consult-budget">
                            <IndianRupee size={14} className="inline mr-1" />
                            Budget Range
                          </Label>
                          <select
                            id="consult-budget"
                            value={formData.budget}
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
                            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select budget</option>
                            {budgets.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="consult-preferred">
                            <CalendarClock size={14} className="inline mr-1" />
                            Preferred Time
                          </Label>
                          <Input
                            id="consult-preferred"
                            type="datetime-local"
                            value={formData.preferred}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                preferred: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="consult-message">
                          <FileText size={14} className="inline mr-1" />
                          Your Requirements
                        </Label>
                        <Textarea
                          id="consult-message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="Tell us about the property type, location, or any specific requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="gradient"
                        className="w-full"
                        size="lg"
                      >
                        <Send size={18} className="mr-2" />
                        Request Consultation on WhatsApp
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>

            {/* Info Side */}
            <FadeIn direction="right">
              <div className="space-y-6">
                <div>
                  <Badge variant="purple" className="mb-4">
                    Why Consult With Us
                  </Badge>
                  <h2 className="text-3xl font-bold text-gray-900 font-tech">
                    Guidance You Can Trust
                  </h2>
                  <p className="text-gray-500 mt-3">
                    Whether you&apos;re buying, selling or investing, our team
                    helps you make confident property decisions.
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
                            <p className="text-gray-600 text-sm">
                              {perk.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <Card className="bg-gradient-to-r from-purple-600 to-purple-800 border-0 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-tech">
                      Prefer to Talk Now?
                    </h3>
                    <p className="text-purple-100/80 mb-4">
                      Call us directly or message on WhatsApp for immediate
                      assistance.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="secondary" size="lg" asChild>
                        <a href="tel:+919232525253">
                          <Phone size={16} className="mr-2" />
                          Call Now
                        </a>
                      </Button>
                      <Button
                        variant="default"
                        size="lg"
                        className="bg-green-500 hover:bg-green-600"
                        asChild
                      >
                        <a
                          href="https://wa.me/919232525253"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
