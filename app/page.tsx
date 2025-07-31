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
  Shield
} from "lucide-react";
import Link from "next/link";

export default function Home() {
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
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-slate-900">Academic Mentor & Strategist</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-indigo-600 transition-colors">Home</Link>
              <Link href="/about" className="text-slate-700 hover:text-indigo-600 transition-colors">About</Link>
              <Link href="/services" className="text-slate-700 hover:text-indigo-600 transition-colors">Services</Link>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                Academic Excellence & Mental Wellness
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Empowering Minds,
                <span className="text-indigo-600 block">Transforming Lives</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Professional academic mentoring and psychological counselling services designed to unlock your potential, 
                overcome challenges, and achieve lasting success in both academic and personal growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={handleFormClick}
                  className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-3"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleWhatsAppClick}
                  className="text-lg px-8 py-3 border-2 border-green-600 text-green-600 hover:bg-green-50"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Chat
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/Untitled design (10).png" 
                  alt="Academic Mentor and Strategist - Professional Portrait"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-white"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/20 to-purple-600/20"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-slate-600">Students Mentored</div>
            </Card>
            <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-slate-600">Success Rate</div>
            </Card>
            <Card className="text-center p-6 bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">5+</div>
              <div className="text-slate-600">Years Experience</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Comprehensive Support Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored solutions combining academic excellence with mental wellness for holistic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Academic Mentoring</h3>
              <p className="text-slate-600 mb-4">
                Personalized study strategies, exam preparation, and academic goal achievement for students at all levels.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Study Planning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Exam Strategies</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Subject Mastery</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <Heart className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Psychological Counselling</h3>
              <p className="text-slate-600 mb-4">
                Professional mental health support addressing anxiety, depression, relationship issues, and personal growth.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Anxiety Management</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Depression Support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Relationship Guidance</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-violet-50">
              <Target className="h-12 w-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Strategic Planning</h3>
              <p className="text-slate-600 mb-4">
                Life and career planning, goal setting, and strategic decision-making for long-term success.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Career Planning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Goal Setting</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Life Strategy</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Areas of Expertise</h2>
            <p className="text-xl text-slate-600">Specialized support for diverse needs and challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Autism Spectrum Support", desc: "Specialized guidance for neurodiverse learners" },
              { icon: Shield, title: "Anxiety & Depression", desc: "Mental health support and coping strategies" },
              { icon: Lightbulb, title: "Academic Recovery", desc: "Helping students rebuild after setbacks" },
              { icon: Star, title: "High Achiever Support", desc: "Managing pressure and maintaining excellence" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border-0">
                <item.icon className="h-10 w-10 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Take the first step towards academic excellence and mental wellness. 
            Book your consultation today and discover your true potential.
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
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/Untitled design (10).png" 
                  alt="Academic Mentor and Strategist"
                  className="h-10 w-10 rounded-full object-cover border-2 border-indigo-400"
                />
                <Brain className="h-8 w-8 text-indigo-400" />
                <span className="text-xl font-bold">Academic Mentor & Strategist</span>
              </div>
              <p className="text-slate-400 mb-4">
                Empowering minds through academic excellence and psychological wellness.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
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