"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProgressBar } from "@/components/ui/progress"
import { Trophy, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

interface AssessmentResultsProps {
  answers: Record<number, string>
  onRestart: () => void
}

// Career matching algorithm based on answers
function calculateCareerMatches(answers: Record<number, string>) {
  const careers = [
    {
      title: "Frontend Developer",
      description: "Build beautiful, interactive user interfaces and web applications",
      match: 0,
      skills: ["React", "TypeScript", "CSS", "UI/UX Design"],
      growth: "+15%",

      matchFactors: ["web-mobile", "frontend", "creative", "technical", "hands-on"],
    },
    {
      title: "Backend Developer",
      description: "Create robust server-side applications and APIs",
      match: 0,
      skills: ["Node.js", "Python", "Databases", "API Design"],
      growth: "+12%",

      matchFactors: ["backend", "technical", "systematic", "programming", "structured"],
    },
    {
      title: "Full Stack Developer",
      description: "Master both frontend and backend development",
      match: 0,
      skills: ["React", "Node.js", "Databases", "DevOps"],
      growth: "+18%",

      matchFactors: ["web-mobile", "technical", "programming", "growth", "hands-on"],
    },
    {
      title: "Data Scientist",
      description: "Extract insights from complex datasets using AI and ML",
      match: 0,
      skills: ["Python", "Machine Learning", "Statistics", "Data Visualization"],
      growth: "+22%",

      matchFactors: ["ai-ml", "analytical", "data-science", "research-driven", "data"],
    },
    {
      title: "Cybersecurity Specialist",
      description: "Protect systems and data from security threats",
      match: 0,
      skills: ["Security Protocols", "Penetration Testing", "Risk Assessment", "Compliance"],
      growth: "+25%",

      matchFactors: ["security", "systematic", "research-driven", "technical", "structured"],
    },
    {
      title: "Cloud Engineer",
      description: "Design and manage scalable cloud infrastructure",
      match: 0,
      skills: ["AWS", "Azure", "Docker", "Kubernetes"],
      growth: "+28%",

      matchFactors: ["cloud", "devops", "technical", "systematic", "programming"],
    },
  ]

  // Calculate match scores
  const answerValues = Object.values(answers)
  careers.forEach((career) => {
    career.match = career.matchFactors.reduce((score, factor) => {
      return answerValues.includes(factor) ? score + 20 : score
    }, 0)
  })

  // Sort by match score and return top 3
  return careers.sort((a, b) => b.match - a.match).slice(0, 3)
}

export function AssessmentResults({ answers, onRestart }: AssessmentResultsProps) {
  const topCareers = calculateCareerMatches(answers)

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Trophy className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Your Career Matches</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Based on your assessment, here are the career journeys that align best with your interests, skills, and goals.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {topCareers.map((career, index) => (
          <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="text-xs">
                      #{index + 1} Match
                    </Badge>
                    <span className="text-sm font-medium text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
                      {career.growth} growth
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{career.title}</CardTitle>
                  <p className="text-muted-foreground">{career.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{career.match}%</div>
                  <div className="text-sm text-muted-foreground">Match</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Career Match Score</span>
                  <span>{career.match}%</span>
                </div>
                <ProgressBar value={career.match} className="h-2" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2 text-primary" />
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>

                </div>
              </div>

              <div className="flex space-x-3 pt-2">
                <Button asChild size="sm" className="hover:bg-primary/90 transition-colors duration-200">
                  <Link href="/skills">
                    View Learning Path
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hover:bg-secondary/10 transition-colors duration-200 bg-transparent"
                >
                  <Link href="/mentorship">Find Mentor</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="hover:bg-primary/90 transition-all duration-200 hover:scale-105">
            <Link href="/dashboard">
              View Your Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={onRestart}
            className="hover:bg-secondary/10 transition-all duration-200 hover:scale-105 bg-transparent"
          >
            Retake Assessment
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Want to explore more options?{" "}
          <Link href="/skills" className="text-primary hover:underline">
            Browse all career journeys
          </Link>
        </p>
      </div>
    </div>
  )
}
