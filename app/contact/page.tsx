"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MessageCircle,
  FileText,
  Phone,
  Mail,
  Clock,
  MapPin,
  Calendar,
  Video,
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918319841013', '_blank');
  };

  const handleFormClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc6Qt4NQwxkNf5ZXGDu1wbeykJQCP-wC8ljW2t_DxC9ZhdQUw/viewform', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-slate-900">Academic Mentor & Strategist</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-indigo-600 transition-colors">Home</Link>
              <Link href="/about" className="text-slate-700 hover:text-indigo-600 transition-colors">About</Link>
              <Link href="/services" className="text-slate-700 hover:text-indigo-600 transition-colors">Services</Link>
              <Link href="/case-studies" className="text-slate-700 hover:text-indigo-600 transition-colors">Case Studies</Link>
              <Link href="/contact" className="text-indigo-600 font-medium">Contact</Link>
            </div>
            <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Ready to Begin Your
              <span className="text-indigo-600 block">Transformation?</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take the first step toward academic excellence and mental wellness. 
              Choose your preferred way to connect and let's start your journey together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Primary Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get Started Today</h2>
              
              {/* WhatsApp */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50 cursor-pointer" onClick={handleWhatsAppClick}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-600 text-white rounded-full">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">WhatsApp Chat</h3>
                    <p className="text-slate-600 mb-3">
                      Quick and convenient messaging for immediate support and consultation scheduling.
                    </p>
                    <div className="flex items-center text-green-600 font-medium">
                      <span>+91 8319841013</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                    <div className="mt-3 flex items-center text-sm text-slate-500">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Usually responds within 2 hours
                    </div>
                  </div>
                </div>
              </Card>

              {/* Consultation Form */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-purple-50 cursor-pointer" onClick={handleFormClick}>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-600 text-white rounded-full">
                    <FileText className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Consultation Form</h3>
                    <p className="text-slate-600 mb-3">
                      Detailed form to help us understand your specific needs and prepare for our first session.
                    </p>
                    <div className="flex items-center text-indigo-600 font-medium">
                      <span>Complete Assessment Form</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                    <div className="mt-3 flex items-center text-sm text-slate-500">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Comprehensive needs assessment
                    </div>
                  </div>
                </div>
              </Card>

              {/* Session Formats */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Available Session Formats</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 text-center bg-white border-0 shadow-md">
                    <Video className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <div className="font-medium text-slate-900">Online</div>
                    <div className="text-sm text-slate-600">Video calls</div>
                  </Card>
                  <Card className="p-4 text-center bg-white border-0 shadow-md">
                    <Phone className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <div className="font-medium text-slate-900">Phone</div>
                    <div className="text-sm text-slate-600">Voice only</div>
                  </Card>
                  <Card className="p-4 text-center bg-white border-0 shadow-md">
                    <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-medium text-slate-900">In-Person</div>
                    <div className="text-sm text-slate-600">Face to face</div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Information Panel */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">What to Expect</h2>

              {/* Response Time */}
              <Card className="p-6 bg-white border-0 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-slate-900">Response Time</h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    WhatsApp: Within 2 hours during business hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Form submissions: Within 24 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency support: Immediate response available
                  </li>
                </ul>
              </Card>

              {/* First Session */}
              <Card className="p-6 bg-white border-0 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                  <h3 className="text-lg font-semibold text-slate-900">First Session</h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Comprehensive assessment of your needs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Goal setting and expectation alignment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personalized strategy development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Session format and schedule planning
                  </li>
                </ul>
              </Card>

              {/* Privacy & Confidentiality */}
              <Card className="p-6 bg-white border-0 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-slate-900">Privacy & Confidentiality</h3>
                </div>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complete confidentiality guaranteed
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Secure communication channels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional ethical standards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Safe, judgment-free environment
                  </li>
                </ul>
              </Card>

              {/* Availability */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Availability</h3>
                <div className="space-y-2 text-slate-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Emergency only</span>
                  </div>
                  <div className="mt-3 text-sm text-slate-500">
                    * Flexible scheduling available for urgent cases
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-slate-50 border-0">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How do I know if you can help with my specific situation?</h3>
              <p className="text-slate-600">
                I work with a wide range of academic and psychological challenges. The best way to determine if we're a good fit 
                is through an initial consultation where we can discuss your specific needs and goals.
              </p>
            </Card>

            <Card className="p-6 bg-slate-50 border-0">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">What should I prepare for our first session?</h3>
              <p className="text-slate-600">
                Come with an open mind and be ready to discuss your challenges, goals, and any relevant background information. 
                If you've completed the consultation form, we'll already have a good foundation to build upon.
              </p>
            </Card>

            <Card className="p-6 bg-slate-50 border-0">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">How long does it typically take to see results?</h3>
              <p className="text-slate-600">
                Results vary depending on individual circumstances, but most clients begin to see positive changes within 2-4 weeks. 
                Significant transformations typically occur within 3-6 months of consistent work.
              </p>
            </Card>

            <Card className="p-6 bg-slate-50 border-0">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you work with parents and families?</h3>
              <p className="text-slate-600">
                Yes, family involvement can be crucial for success, especially with younger clients. I offer family sessions 
                and parent guidance to ensure everyone is aligned and supportive of the process.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Don't Wait - Your Future Starts Now</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Every day you wait is another day of missed opportunities. Take action today and 
            begin your journey toward academic success and mental wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleFormClick}
              className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              <FileText className="h-5 w-5 mr-2" />
              Complete Assessment Form
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleWhatsAppClick}
              className="text-lg px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-indigo-600"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp: +91 8319841013
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <img 
                  src="/Untitled design (10).png" 
                  alt="Academic Mentor and Strategist"
                  className="h-10 w-10 rounded-full object-cover border-2 border-indigo-400"
                />
                <Brain className="h-8 w-8 text-indigo-400" />
                <span className="text-xl font-bold">Academic Mentor & Strategist</span>
              </Link>
              <p className="text-slate-400 mb-4">
                Empowering minds through academic excellence and psychological wellness.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-slate-400 hover:text-white transition-colors">Home</Link>
                <Link href="/about" className="block text-slate-400 hover:text-white transition-colors">About</Link>
                <Link href="/services" className="block text-slate-400 hover:text-white transition-colors">Services</Link>
                <Link href="/case-studies" className="block text-slate-400 hover:text-white transition-colors">Case Studies</Link>
                <Link href="/contact" className="block text-slate-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-2">
                <p className="text-slate-400">WhatsApp: +91 8319841013</p>
                <Button 
                  onClick={handleFormClick}
                  variant="outline" 
                  size="sm"
                  className="border-slate-600 text-slate-400 hover:bg-slate-800"
                >
                  Consultation Form
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Academic Mentor & Strategist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}