"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { Calendar, Target, Trophy, Clock, ArrowRight } from "lucide-react"

const upcomingMilestones = [
  {
    id: 1,
    title: "Complete React Learning Path",
    description: "Finish all React courses and projects",
    progress: 75,
    dueDate: "March 15, 2024",
    priority: "high",
    reward: "React Developer Certificate",
    estimatedTime: "2 weeks",
  },
  {
    id: 2,
    title: "Build E-commerce Project",
    description: "Create a full-featured online store",
    progress: 30,
    dueDate: "April 1, 2024",
    priority: "medium",
    reward: "Portfolio Project",
    estimatedTime: "3 weeks",
  },
  {
    id: 3,
    title: "Master TypeScript",
    description: "Complete TypeScript fundamentals and advanced topics",
    progress: 15,
    dueDate: "April 15, 2024",
    priority: "medium",
    reward: "TypeScript Certification",
    estimatedTime: "4 weeks",
  },
  {
    id: 4,
    title: "Frontend Developer Assessment",
    description: "Take the comprehensive skill assessment",
    progress: 0,
    dueDate: "May 1, 2024",
    priority: "high",
    reward: "Professional Certification",
    estimatedTime: "1 week",
  },
]

const careerGoals = [
  {
    title: "Land First Frontend Role",
    description: "Secure a junior frontend developer position",
    targetDate: "June 2024",
    progress: 68,
    requirements: ["Complete learning path", "Build 3 projects", "Pass assessment"],
  },
  {

    targetDate: "December 2024",
    progress: 45,
    requirements: ["Gain experience", "Build portfolio", "Develop expertise"],
  },
]

export function UpcomingMilestones() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-primary" />
              <span>Upcoming Milestones</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {upcomingMilestones.map((milestone) => (
              <div key={milestone.id} className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                  <Badge className={`text-xs ${getPriorityColor(milestone.priority)}`}>{milestone.priority}</Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{milestone.progress}%</span>
                  </div>
                  <Progress value={milestone.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{milestone.dueDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{milestone.estimatedTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Reward: </span>
                    <span className="font-medium">{milestone.reward}</span>
                  </div>
                  <Button size="sm" className="hover:bg-primary/90 transition-colors duration-200">
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Career Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {careerGoals.map((goal, index) => (
              <div key={index} className="space-y-4">
                <div>
                  <h3 className="font-semibold">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                  <p className="text-sm text-muted-foreground mt-1">Target: {goal.targetDate}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Overall Progress</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {goal.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
