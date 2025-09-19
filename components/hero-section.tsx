import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Career Guidance
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Find the Right <span className="text-primary">Career Journey</span>, Learn the Right{" "}
                <span className="text-secondary">Skills</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl">
                Discover your ideal career with personalized assessments, get tailored skill recommendations, and access
                expert mentorship to accelerate your professional growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="hover:bg-primary/90 transition-all duration-200 hover:scale-105">
                <Link href="/assessment">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:bg-secondary/10 transition-all duration-200 hover:scale-105 bg-transparent"
              >
                <Link href="/skills">Explore Skills</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>10,000+ Career Journeys</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Expert Mentors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>AI-Powered</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/diverse-professionals-collaborating-in-modern-offi.jpeg"
                alt="Career growth and professional development"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
