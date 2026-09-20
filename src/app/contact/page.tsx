"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Building2,
  MessageCircle,
  User,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { TypedText } from "@/components/TypingText";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Vision Vistara Real Estate", "Gaya Vihar Colony, New Sarkanda, Sarkanda", "Bilaspur, Chhattisgarh 495001"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91-9232525253"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["admin@visionvistar.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"],
  },
];

const offices = [
  { city: "Bilaspur (Head Office)", address: "Gaya Vihar Colony, New Sarkanda, Sarkanda, Bilaspur, CG 495001", phone: "+91-9232525253" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", subject: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }, 3000);
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
              src="https://assets.mixkit.co/videos/49843/49843-720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <Badge variant="yellow" className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 font-tech">
              <TypedText
                segments={[
                  { text: "Get In " },
                  { text: "Touch", className: "text-yellow-400" },
                ]}
              />
            </h1>
            <p className="text-purple-100/80 text-lg max-w-2xl mx-auto">
              Have questions about our properties? Ready to find your dream home?
              Reach out to us and our team will be happy to assist you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 mt-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <StaggerItem key={info.title}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <info.icon size={24} className="text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-tech">
                      {info.title}
                    </h3>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Form + Map Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn direction="left">
              <Card className="shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 font-tech">
                        Send Us a Message
                      </h2>
                      <p className="text-gray-500 text-sm">
                        We&apos;ll get back to you within 24 hours
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
                        Message Sent!
                      </h3>
                      <p className="text-gray-500">
                        Thank you for reaching out. Our team will contact you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name">
                            <User size={14} className="inline mr-1" />
                            Full Name *
                          </Label>
                          <Input
                            id="contact-name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-phone">
                            <Phone size={14} className="inline mr-1" />
                            Phone Number *
                          </Label>
                          <Input
                            id="contact-phone"
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
                          <Label htmlFor="contact-email">
                            <Mail size={14} className="inline mr-1" />
                            Email Address
                          </Label>
                          <Input
                            id="contact-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-subject">
                            <FileText size={14} className="inline mr-1" />
                            Subject
                          </Label>
                          <select
                            id="contact-subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select a subject</option>
                            <option value="buying">Property Inquiry</option>
                            <option value="selling">Sell My Property</option>
                            <option value="investment">Investment Inquiry</option>
                            <option value="consultation">Free Consultation</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-message">Your Message *</Label>
                        <Textarea
                          id="contact-message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="gradient"
                        className="w-full"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeIn>

            {/* Map + Office Info */}
            <FadeIn direction="right">
              <div className="space-y-6">
                {/* Embedded Map */}
                <Card className="overflow-hidden shadow-lg shadow-purple-500/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8!2d82.147977!3d22.1005744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280be17b074ed3%3A0x830a331cb3853898!2sVision%20Vistara%20Bilaspur!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vision Vistara Office Location"
                  />
                </Card>

                {/* Office Locations */}
<Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 font-tech">
                      <Building2 size={20} className="text-purple-600" />
                      Our Offices
                    </h3>
                    <div className="space-y-4">
                      {offices.map((office) => (
                        <div
                          key={office.city}
                          className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl"
                        >
                          <MapPin size={18} className="text-purple-600 mt-0.5 shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">{office.city}</p>
                            <p className="text-sm text-gray-600">{office.address}</p>
                            <p className="text-sm text-purple-600 font-medium">{office.phone}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="bg-gradient-to-r from-purple-600 to-purple-800 border-0 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-tech">
                      Need Immediate Assistance?
                    </h3>
                    <p className="text-purple-100/80 mb-4">
                      Call us directly or chat on WhatsApp for instant response
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
