"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProgressBar } from "@/components/ui/progress"
import { ArrowLeft, Clock, Target, CheckCircle, Circle } from "lucide-react"
import { useRouter } from "next/navigation"

const careerPaths = [
  {
    id: "frontend",
    title: "Frontend Developer",
    description: "Build modern, responsive user interfaces",
    duration: "6-8 months",
    difficulty: "Beginner to Intermediate",
    roadmap: [
      { skill: "HTML & CSS Fundamentals", completed: true, duration: "2-3 weeks" },
      { skill: "JavaScript Essentials", completed: true, duration: "4-6 weeks" },
      { skill: "React.js", completed: false, duration: "6-8 weeks" },
      { skill: "TypeScript", completed: false, duration: "3-4 weeks" },
      { skill: "State Management (Redux/Zustand)", completed: false, duration: "2-3 weeks" },
      { skill: "Testing (Jest, React Testing Library)", completed: false, duration: "3-4 weeks" },
      { skill: "Build Tools (Webpack, Vite)", completed: false, duration: "2-3 weeks" },
      { skill: "Portfolio Projects", completed: false, duration: "4-6 weeks" },
    ],
  },
  {
    id: "backend",
    title: "Backend Developer",
    description: "Create robust server-side applications and APIs",
    duration: "8-10 months",
    difficulty: "Intermediate",
    roadmap: [
      { skill: "Programming Language (Node.js/Python)", completed: false, duration: "6-8 weeks" },
      { skill: "Database Design & SQL", completed: false, duration: "4-6 weeks" },
      { skill: "RESTful API Development", completed: false, duration: "4-5 weeks" },
      { skill: "Authentication & Security", completed: false, duration: "3-4 weeks" },
      { skill: "Cloud Services (AWS/Azure)", completed: false, duration: "6-8 weeks" },
      { skill: "DevOps & Deployment", completed: false, duration: "4-6 weeks" },
      { skill: "Microservices Architecture", completed: false, duration: "6-8 weeks" },
      { skill: "Performance Optimization", completed: false, duration: "3-4 weeks" },
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    description: "Master both frontend and backend development",
    duration: "10-12 months",
    difficulty: "Intermediate to Advanced",
    roadmap: [
      { skill: "Frontend Fundamentals (HTML, CSS, JS)", completed: false, duration: "6-8 weeks" },
      { skill: "React.js & Modern Frontend", completed: false, duration: "8-10 weeks" },
      { skill: "Backend Development (Node.js)", completed: false, duration: "8-10 weeks" },
      { skill: "Database Management", completed: false, duration: "4-6 weeks" },
      { skill: "API Development & Integration", completed: false, duration: "4-6 weeks" },
      { skill: "Authentication & Authorization", completed: false, duration: "3-4 weeks" },
      { skill: "Deployment & DevOps", completed: false, duration: "4-6 weeks" },
      { skill: "Full Stack Projects", completed: false, duration: "8-10 weeks" },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Specialist",
    description: "Protect systems and data from security threats",
    duration: "8-10 months",
    difficulty: "Intermediate to Advanced",
    roadmap: [
      { skill: "Network Security Fundamentals", completed: false, duration: "4-6 weeks" },
      { skill: "Operating Systems Security", completed: false, duration: "4-6 weeks" },
      { skill: "Penetration Testing", completed: false, duration: "6-8 weeks" },
      { skill: "Risk Assessment & Management", completed: false, duration: "4-5 weeks" },
      { skill: "Incident Response", completed: false, duration: "3-4 weeks" },
      { skill: "Security Tools & Technologies", completed: false, duration: "6-8 weeks" },
      { skill: "Compliance & Governance", completed: false, duration: "3-4 weeks" },
      { skill: "Ethical Hacking Certification", completed: false, duration: "4-6 weeks" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud Computing Engineer",
    description: "Design and manage scalable cloud infrastructure",
    duration: "6-8 months",
    difficulty: "Intermediate",
    roadmap: [
      { skill: "Cloud Fundamentals", completed: false, duration: "3-4 weeks" },
      { skill: "AWS/Azure Core Services", completed: false, duration: "6-8 weeks" },
      { skill: "Infrastructure as Code", completed: false, duration: "4-6 weeks" },
      { skill: "Containerization (Docker)", completed: false, duration: "3-4 weeks" },
      { skill: "Orchestration (Kubernetes)", completed: false, duration: "4-6 weeks" },
      { skill: "Monitoring & Logging", completed: false, duration: "3-4 weeks" },
      { skill: "Security & Compliance", completed: false, duration: "4-5 weeks" },
      { skill: "Cloud Architecture Projects", completed: false, duration: "6-8 weeks" },
    ],
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Extract insights from data to drive business decisions",
    duration: "6-8 months",
    difficulty: "Beginner to Intermediate",
    roadmap: [
      { skill: "Statistics & Mathematics", completed: false, duration: "4-6 weeks" },
      { skill: "SQL & Database Querying", completed: false, duration: "4-5 weeks" },
      { skill: "Python for Data Analysis", completed: false, duration: "6-8 weeks" },
      { skill: "Data Visualization (Tableau/Power BI)", completed: false, duration: "4-6 weeks" },
      { skill: "Excel Advanced Functions", completed: false, duration: "2-3 weeks" },
      { skill: "Data Cleaning & Preprocessing", completed: false, duration: "3-4 weeks" },
      { skill: "Business Intelligence", completed: false, duration: "4-5 weeks" },
      { skill: "Analytics Projects Portfolio", completed: false, duration: "6-8 weeks" },
    ],
  },
]

export default function RoadmapsPage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const router = useRouter()

  const selectedCareerPath = careerPaths.find((path) => path.id === selectedPath)

  if (selectedPath && selectedCareerPath) {
    const completedSkills = selectedCareerPath.roadmap.filter((skill) => skill.completed).length
    const totalSkills = selectedCareerPath.roadmap.length
    const progressPercentage = (completedSkills / totalSkills) * 100

    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" onClick={() => setSelectedPath(null)} className="mb-6 hover:bg-secondary/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Career Journeys
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{selectedCareerPath.title} Roadmap</h1>
              <p className="text-muted-foreground mb-4">{selectedCareerPath.description}</p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Badge variant="secondary">
                  <Clock className="h-3 w-3 mr-1" />
                  {selectedCareerPath.duration}
                </Badge>
                <Badge variant="outline">{selectedCareerPath.difficulty}</Badge>
                <Badge variant="default">
                  {completedSkills}/{totalSkills} Completed
                </Badge>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
                <ProgressBar value={progressPercentage} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              {selectedCareerPath.roadmap.map((skill, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-200 ${skill.completed ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800" : "hover:shadow-md"}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        {skill.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-semibold mb-1 ${skill.completed ? "text-green-700 dark:text-green-300" : ""}`}
                        >
                          {skill.skill}
                        </h3>
                        <p className="text-sm text-muted-foreground">Estimated time: {skill.duration}</p>
                      </div>
                      {!skill.completed && (
                        <Button size="sm" variant="outline">
                          Start Learning
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Personalized Career Roadmaps</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your career path and get a detailed roadmap with milestones, skills, and timeline
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {careerPaths.map((path) => (
            <Card
              key={path.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedPath(path.id)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  {path.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{path.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Duration:</span>
                    <span className="font-medium">{path.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Level:</span>
                    <span className="font-medium">{path.difficulty}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  View Roadmap
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
