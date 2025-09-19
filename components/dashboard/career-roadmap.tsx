"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProgressBar } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, ArrowRight } from "lucide-react"

const roadmapSteps = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    description: "Master the building blocks of web development",
    status: "completed",
    progress: 100,
    estimatedTime: "2 weeks",
    skills: ["HTML5", "CSS3", "Responsive Design"],
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    description: "Learn programming fundamentals and DOM manipulation",
    status: "completed",
    progress: 100,
    estimatedTime: "4 weeks",
    skills: ["ES6+", "DOM", "Async/Await"],
  },
  {
    id: 3,
    title: "React Development",
    description: "Build modern user interfaces with React",
    status: "in-progress",
    progress: 75,
    estimatedTime: "6 weeks",
    skills: ["Components", "Hooks", "State Management"],
  },
  {
    id: 4,
    title: "TypeScript Integration",
    description: "Add type safety to your React applications",
    status: "upcoming",
    progress: 0,
    estimatedTime: "3 weeks",
    skills: ["Types", "Interfaces", "Generics"],
  },
  {
    id: 5,
    title: "Testing & Deployment",
    description: "Test your code and deploy to production",
    status: "upcoming",
    progress: 0,
    estimatedTime: "4 weeks",
    skills: ["Jest", "Testing Library", "CI/CD"],
  },
  {
    id: 6,
    title: "Portfolio Projects",
    description: "Build impressive projects for your portfolio",
    status: "upcoming",
    progress: 0,
    estimatedTime: "8 weeks",
    skills: ["Project Planning", "Best Practices", "Documentation"],
  },
]

export function CareerRoadmap() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-primary" />
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "in-progress":
        return "bg-primary/10 text-primary"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Frontend Developer Roadmap</span>
          <Badge variant="outline" className="text-xs">
            68% Complete
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {roadmapSteps.map((step, index) => (
          <div key={step.id} className="relative">
            {index < roadmapSteps.length - 1 && <div className="absolute left-2.5 top-8 w-0.5 h-16 bg-border" />}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">{getStatusIcon(step.status)}</div>
              <div className="flex-1 min-w-0 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={`text-xs ${getStatusColor(step.status)}`}>{step.status.replace("-", " ")}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">{step.estimatedTime}</p>
                  </div>
                </div>

                {step.status === "in-progress" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{step.progress}%</span>
                    </div>
                    <ProgressBar value={step.progress} className="h-2" />
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {step.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {step.status === "in-progress" && (
                  <Button size="sm" className="hover:bg-primary/90 transition-colors duration-200">
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
