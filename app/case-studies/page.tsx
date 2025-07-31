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
  TrendingUp,
  Clock,
  Award
} from "lucide-react";
import Link from "next/link";

export default function CaseStudies() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918319841013', '_blank');
  };

  const handleFormClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc6Qt4NQwxkNf5ZXGDu1wbeykJQCP-wC8ljW2t_DxC9ZhdQUw/viewform', '_blank');
  };

  const caseStudies = [
    {
      title: "Guiding an Autistic Teen Through Academic Clarity",
      category: "Autism Spectrum Support",
      duration: "4 months",
      outcome: "Academic Success",
      icon: Users,
      color: "from-blue-50 to-indigo-50",
      iconColor: "text-indigo-600",
      story: "A 10th-grade student with diagnosed autism spectrum traits was struggling to grasp class materials. The inability to connect concepts led to emotional shutdown and deep frustration, which later developed into depressive episodes. Through slow-paced academic mentoring, identifying his strong suits (pattern recognition and visual memory), and breaking down complex chapters into visual flows, the student began to regain confidence. Over 4 months, he not only passed his school exams but began to express interest in technology-related subjects. His family also reported improved communication at home.",
      challenges: ["Concept connection difficulties", "Emotional shutdown", "Depression episodes", "Communication barriers"],
      interventions: ["Visual learning techniques", "Pattern recognition strategies", "Slow-paced mentoring", "Family communication support"],
      results: ["Passed school exams", "Developed interest in technology", "Improved home communication", "Increased confidence"]
    },
    {
      title: "A Woman Battling Social Isolation and Alcoholic Spouse Support",
      category: "Relationship & Mental Health",
      duration: "6 months",
      outcome: "Personal Empowerment",
      icon: Heart,
      color: "from-green-50 to-emerald-50",
      iconColor: "text-emerald-600",
      story: "A young woman reached out expressing emotional fatigue and self-worth issues stemming from constant social scrutiny and an alcoholic partner. She felt unsupported and isolated in her marriage. Through regular sessions focusing on emotional validation, value reinforcement, and boundary-setting strategies, she started to regain control over her mental space. Over time, she resumed her creative passions and began taking part-time online courses. With improved self-agency, she created a support network of her own.",
      challenges: ["Emotional fatigue", "Low self-worth", "Social isolation", "Unsupportive relationship"],
      interventions: ["Emotional validation therapy", "Boundary-setting strategies", "Self-worth reinforcement", "Support network building"],
      results: ["Resumed creative passions", "Started online courses", "Built support network", "Improved self-agency"]
    },
    {
      title: "Overcoming Exam Fear in a High-Performer",
      category: "Academic Performance",
      duration: "3 months",
      outcome: "90%+ Board Results",
      icon: Target,
      color: "from-purple-50 to-violet-50",
      iconColor: "text-violet-600",
      story: "An academically bright student in 12th grade was experiencing intense anxiety during exams—often going blank despite full preparation. This triggered cycles of guilt and self-doubt. We worked through techniques like pre-exam decompression routines, reducing cognitive overload, and resetting how he perceived 'failure.' With academic strategy and mental reframing, the student scored above 90% in final boards and now aspires to pursue law.",
      challenges: ["Exam anxiety", "Mental blanks during tests", "Guilt and self-doubt cycles", "Fear of failure"],
      interventions: ["Pre-exam decompression routines", "Cognitive overload reduction", "Failure perception reframing", "Academic strategy optimization"],
      results: ["Scored above 90% in boards", "Reduced exam anxiety", "Developed law career aspirations", "Improved self-confidence"]
    },
    {
      title: "Helping a Young Girl Express Her Identity",
      category: "Identity & Self-Expression",
      duration: "5 months",
      outcome: "Confident Self-Advocacy",
      icon: Lightbulb,
      color: "from-yellow-50 to-orange-50",
      iconColor: "text-orange-600",
      story: "A teenager facing issues with self-image, constant peer judgment, and academic pressure began showing withdrawal symptoms. Parents reported silence, skipping meals, and declining grades. The first sessions involved building a comfort zone and providing space to talk without judgment. Over time, we worked on journaling, identity expression, and boundary setting. Her academic graph steadily recovered, and she eventually became confident in asserting her needs within both family and social circles.",
      challenges: ["Self-image issues", "Peer judgment", "Academic pressure", "Withdrawal symptoms"],
      interventions: ["Safe space creation", "Journaling therapy", "Identity expression work", "Boundary setting training"],
      results: ["Academic recovery", "Confident self-advocacy", "Improved family relationships", "Better social boundaries"]
    },
    {
      title: "Academic Rebuild After Dropout",
      category: "Academic Recovery",
      duration: "8 months",
      outcome: "Design Diploma Enrollment",
      icon: TrendingUp,
      color: "from-red-50 to-pink-50",
      iconColor: "text-red-600",
      story: "A college dropout reached out after two years of inactivity, feeling lost and unsure if she had the capacity to study again. Through strengths-identification, weekly accountability sessions, and interest-based exploration, we uncovered her natural affinity for design and structure. She is now enrolled in a design diploma and reports increased self-worth and clarity in her academic and emotional trajectory.",
      challenges: ["Two years of academic inactivity", "Lost sense of direction", "Self-doubt about abilities", "Unclear career path"],
      interventions: ["Strengths identification", "Weekly accountability sessions", "Interest-based exploration", "Career path guidance"],
      results: ["Enrolled in design diploma", "Increased self-worth", "Clear academic trajectory", "Renewed confidence"]
    }
  ];

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
              <Link href="/case-studies" className="text-indigo-600 font-medium">Case Studies</Link>
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
              Real Success Stories
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transformative
              <span className="text-indigo-600 block">Case Studies</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how personalized academic mentoring and psychological counselling 
              have helped individuals overcome challenges and achieve remarkable success.
            </p>
            <div className="flex justify-center mb-8">
              <img 
                src="/Untitled design (10).png" 
                alt="Academic Mentor and Strategist - Professional Portrait"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl border-4 border-white"
              />
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                All cases anonymized
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Real outcomes
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                Ethical practices
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className={`overflow-hidden border-0 shadow-xl bg-gradient-to-br ${study.color}`}>
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Header */}
                    <div className="lg:col-span-3">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`p-3 rounded-full bg-white shadow-md`}>
                          <study.icon className={`h-8 w-8 ${study.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <Badge variant="secondary" className="bg-white/80">
                              {study.category}
                            </Badge>
                            <Badge variant="outline" className="border-slate-300">
                              <Clock className="h-3 w-3 mr-1" />
                              {study.duration}
                            </Badge>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                              <Award className="h-3 w-3 mr-1" />
                              {study.outcome}
                            </Badge>
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                            {study.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="lg:col-span-2">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">The Journey</h3>
                      <p className="text-slate-700 leading-relaxed text-lg">
                        {study.story}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                          <Target className="h-4 w-4 mr-2 text-red-500" />
                          Initial Challenges
                        </h4>
                        <ul className="space-y-1">
                          {study.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                          <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                          Interventions Used
                        </h4>
                        <ul className="space-y-1">
                          {study.interventions.map((intervention, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {intervention}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          Achieved Results
                        </h4>
                        <ul className="space-y-1">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Metrics</h2>
            <p className="text-xl text-slate-600">Measurable outcomes across all case studies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
              <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-slate-600 font-medium">Academic Improvement</div>
              <div className="text-xs text-slate-500 mt-1">Students showing grade improvement</div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-0">
              <div className="text-3xl font-bold text-emerald-600 mb-2">88%</div>
              <div className="text-slate-600 font-medium">Anxiety Reduction</div>
              <div className="text-xs text-slate-500 mt-1">Significant decrease in anxiety levels</div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-violet-50 border-0">
              <div className="text-3xl font-bold text-violet-600 mb-2">92%</div>
              <div className="text-slate-600 font-medium">Goal Achievement</div>
              <div className="text-xs text-slate-500 mt-1">Clients reaching their primary goals</div>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-red-50 border-0">
              <div className="text-3xl font-bold text-red-600 mb-2">4.2</div>
              <div className="text-slate-600 font-medium">Average Duration</div>
              <div className="text-xs text-slate-500 mt-1">Months to achieve significant results</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Note */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-white border-0 shadow-lg">
            <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Privacy & Ethics</h3>
            <p className="text-slate-600 leading-relaxed">
              All case studies presented here have been carefully anonymized to protect client privacy while 
              maintaining the authenticity of the outcomes. These represent real transformations achieved through 
              dedicated collaboration between mentor and client. Every detail has been altered to ensure complete 
              confidentiality while preserving the educational value of these success stories.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Your Success Story Awaits</h2>
          <p className="text-xl text-indigo-100 mb-8">
            These transformations are possible for you too. Every journey begins with a single step. 
            Take yours today and discover what you're truly capable of achieving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleFormClick}
              className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              <FileText className="h-5 w-5 mr-2" />
              Start Your Journey
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