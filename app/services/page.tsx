"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  BookOpen, 
  Heart, 
  Users, 
  Star, 
  ArrowRight,
  MessageCircle,
  FileText,
  CheckCircle,
  Target,
  Lightbulb,
  Shield,
  Clock,
  Calendar,
  Video,
  Phone,
  MapPin
} from "lucide-react";
import Link from "next/link";

export default function Services() {
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
              <Link href="/services" className="text-indigo-600 font-medium">Services</Link>
              <Link href="/case-studies" className="text-slate-700 hover:text-indigo-600 transition-colors">Case Studies</Link>
              <Link href="/contact" className="text-slate-700 hover:text-indigo-600 transition-colors">Contact</Link>
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
              Comprehensive Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Tailored Solutions for
              <span className="text-indigo-600 block">Every Challenge</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From academic mentoring to psychological counselling, discover comprehensive support 
              designed to help you overcome obstacles and achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Services</h2>
            <p className="text-xl text-slate-600">Professional support across academic and mental health domains</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Academic Mentoring */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <BookOpen className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Academic Mentoring</h3>
              <p className="text-slate-600 mb-6">
                Comprehensive academic support designed to help students excel in their studies and develop effective learning strategies.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Study Strategy Development</h4>
                    <p className="text-sm text-slate-600">Personalized study plans and learning techniques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Exam Preparation</h4>
                    <p className="text-sm text-slate-600">Comprehensive exam strategies and anxiety management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Subject Mastery</h4>
                    <p className="text-sm text-slate-600">Deep understanding and concept clarification</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Time Management</h4>
                    <p className="text-sm text-slate-600">Effective scheduling and productivity techniques</p>
                  </div>
                </div>
              </div>

              <Button onClick={handleFormClick} className="w-full bg-indigo-600 hover:bg-indigo-700">
                Learn More
              </Button>
            </Card>

            {/* Psychological Counselling */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <Heart className="h-12 w-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Psychological Counselling</h3>
              <p className="text-slate-600 mb-6">
                Professional mental health support addressing various psychological challenges with compassionate, evidence-based approaches.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Anxiety & Depression</h4>
                    <p className="text-sm text-slate-600">Coping strategies and therapeutic interventions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Relationship Issues</h4>
                    <p className="text-sm text-slate-600">Family dynamics and interpersonal challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Self-Esteem Building</h4>
                    <p className="text-sm text-slate-600">Confidence and self-worth enhancement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Identity & Expression</h4>
                    <p className="text-sm text-slate-600">Self-discovery and authentic living</p>
                  </div>
                </div>
              </div>

              <Button onClick={handleFormClick} className="w-full bg-emerald-600 hover:bg-emerald-700">
                Learn More
              </Button>
            </Card>

            {/* Strategic Planning */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-50">
              <Target className="h-12 w-12 text-violet-600 mb-6" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Strategic Planning</h3>
              <p className="text-slate-600 mb-6">
                Life and career planning services to help you make informed decisions and create actionable roadmaps for success.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Career Planning</h4>
                    <p className="text-sm text-slate-600">Professional path exploration and development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Goal Setting</h4>
                    <p className="text-sm text-slate-600">SMART goals and achievement strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Life Transitions</h4>
                    <p className="text-sm text-slate-600">Support during major life changes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-900">Decision Making</h4>
                    <p className="text-sm text-slate-600">Structured approaches to important choices</p>
                  </div>
                </div>
              </div>

              <Button onClick={handleFormClick} className="w-full bg-violet-600 hover:bg-violet-700">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Specialized Support</h2>
            <p className="text-xl text-slate-600">Targeted interventions for specific challenges and populations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border-0">
              <Users className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Autism Spectrum Support</h3>
              <p className="text-sm text-slate-600 mb-4">Specialized guidance for neurodiverse learners with tailored strategies</p>
              <Badge variant="secondary" className="text-xs">Specialized Care</Badge>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border-0">
              <Shield className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Crisis Intervention</h3>
              <p className="text-sm text-slate-600 mb-4">Immediate support for acute mental health and academic crises</p>
              <Badge variant="secondary" className="text-xs">Emergency Support</Badge>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border-0">
              <Lightbulb className="h-10 w-10 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Academic Recovery</h3>
              <p className="text-sm text-slate-600 mb-4">Helping students rebuild after academic setbacks or dropouts</p>
              <Badge variant="secondary" className="text-xs">Recovery Program</Badge>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border-0">
              <Star className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">High Achiever Support</h3>
              <p className="text-sm text-slate-600 mb-4">Managing pressure and maintaining excellence for top performers</p>
              <Badge variant="secondary" className="text-xs">Performance Optimization</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Session Formats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Flexible Session Formats</h2>
            <p className="text-xl text-slate-600">Choose the format that works best for your needs and schedule</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <Video className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Online Sessions</h3>
              <p className="text-slate-600 mb-4">
                Convenient video consultations from the comfort of your home with full privacy and flexibility.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Secure video platform</li>
                <li>• Flexible scheduling</li>
                <li>• Screen sharing capabilities</li>
                <li>• Session recordings available</li>
              </ul>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Phone Consultations</h3>
              <p className="text-slate-600 mb-4">
                Voice-only sessions for those who prefer audio communication or have connectivity constraints.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Clear audio quality</li>
                <li>• No video requirements</li>
                <li>• Lower bandwidth needs</li>
                <li>• Easy accessibility</li>
              </ul>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-50">
              <MapPin className="h-12 w-12 text-violet-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">In-Person Sessions</h3>
              <p className="text-slate-600 mb-4">
                Face-to-face consultations for those who prefer personal interaction and direct engagement.
              </p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Personal connection</li>
                <li>• Safe, comfortable environment</li>
                <li>• Non-verbal communication</li>
                <li>• Hands-on materials</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Simple steps to begin your journey toward success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Initial Contact</h3>
              <p className="text-slate-600">Reach out via WhatsApp or consultation form to discuss your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Assessment</h3>
              <p className="text-slate-600">Comprehensive evaluation of your challenges, goals, and preferences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Personalized Plan</h3>
              <p className="text-slate-600">Custom strategy developed based on your unique situation and goals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Ongoing Support</h3>
              <p className="text-slate-600">Regular sessions with progress monitoring and plan adjustments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Take the first step toward academic success and mental wellness. 
            Choose the service that best fits your needs and begin your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleFormClick}
              className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              <FileText className="h-5 w-5 mr-2" />
              Book Consultation
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