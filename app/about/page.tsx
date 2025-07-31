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
  Award,
  Clock,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function About() {
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
              <Link href="/about" className="text-indigo-600 font-medium">About</Link>
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
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              About Our Mission
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Dedicated to Your
              <span className="text-indigo-600 block">Success & Wellbeing</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              With years of experience in academic mentoring and psychological counselling, 
              I'm committed to helping individuals overcome challenges and achieve their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Professional Background</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                As an Academic Mentor and Strategist with specialized training in psychological counselling, 
                I bring a unique blend of educational expertise and mental health awareness to every session.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                My approach combines evidence-based academic strategies with compassionate psychological support, 
                ensuring that each individual receives holistic care tailored to their specific needs and circumstances.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
                  <Award className="h-8 w-8 text-indigo-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Certified Professional</h3>
                  <p className="text-sm text-slate-600">Qualified in both academic mentoring and psychological counselling</p>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-0">
                  <Clock className="h-8 w-8 text-emerald-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">5+ Years Experience</h3>
                  <p className="text-sm text-slate-600">Extensive experience working with diverse age groups and challenges</p>
                </Card>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img 
                  src="/Untitled design (10).png" 
                  alt="Academic Mentor and Strategist - Professional Portrait"
                  className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/10 to-purple-600/10"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 space-y-6">
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-violet-50 border-0">
              <TrendingUp className="h-10 w-10 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Proven Results</h3>
              <p className="text-slate-600 mb-4">
                Over 500 students successfully mentored with a 95% success rate in achieving their academic and personal goals.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Academic improvement in 95% of cases</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Significant reduction in anxiety and stress</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Enhanced self-confidence and motivation</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach & Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">My Approach & Philosophy</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every individual is unique, and so should be their path to success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-white border-0">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Compassionate Care</h3>
              <p className="text-slate-600">
                Creating a safe, non-judgmental space where individuals feel heard, understood, and supported in their journey.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-white border-0">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Personalized Strategy</h3>
              <p className="text-slate-600">
                Tailoring approaches based on individual strengths, challenges, learning styles, and personal circumstances.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-white border-0">
              <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Holistic Growth</h3>
              <p className="text-slate-600">
                Addressing both academic performance and mental wellbeing to ensure sustainable, long-term success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Areas of Specialization</h2>
            <p className="text-xl text-slate-600">Expertise across diverse challenges and populations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
              <BookOpen className="h-10 w-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Academic Challenges</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Learning difficulties and disabilities</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Exam anxiety and performance issues</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Study skills and time management</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Academic recovery after setbacks</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-0">
              <Heart className="h-10 w-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Mental Health Support</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Anxiety and depression management</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Self-esteem and confidence building</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Relationship and family issues</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Identity and self-expression support</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-purple-50 to-violet-50 border-0">
              <Users className="h-10 w-10 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Special Populations</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Autism spectrum disorder support</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />High-achieving students under pressure</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />College dropouts seeking direction</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Adults returning to education</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border-0">
              <Shield className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Crisis Support</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Social isolation and withdrawal</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Family conflict and dysfunction</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Substance abuse in family systems</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Emotional regulation difficulties</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's work together to unlock your potential and create lasting positive change in your life.
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